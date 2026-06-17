import { buildSystemPrompt } from "@/lib/assistant";
import { submitBooking, type BookingResult } from "@/lib/booking";
import { clinic } from "@/lib/clinic";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const NVIDIA_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
const DEFAULT_MODEL = "meta/llama-3.3-70b-instruct";

// Best-effort in-memory rate limit (per server instance). For robust
// production limiting, back this with a shared store (Upstash / Vercel KV).
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 25;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

type ChatMessage = { role: "user" | "assistant"; content: string };

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const m = value as Record<string, unknown>;
  return (
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string"
  );
}

// Tool the model can call to book an appointment.
const TOOLS = [
  {
    type: "function",
    function: {
      name: "submit_appointment",
      description:
        "Submit an appointment request to Sadhana Eye Care. Call this ONLY after the visitor has provided their full name, phone number and reason for visit, AND has explicitly confirmed that the summarised details should be sent to the clinic.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "The visitor's full name." },
          phone: {
            type: "string",
            description: "The visitor's contact phone number.",
          },
          email: {
            type: "string",
            description: "The visitor's email address, if provided.",
          },
          preferred_time: {
            type: "string",
            description:
              "The visitor's preferred day or time for the appointment, if provided.",
          },
          reason: {
            type: "string",
            description:
              "Reason for the visit (e.g. cataract consultation, LASIK consultation, general eye check-up).",
          },
        },
        required: ["name", "phone", "reason"],
      },
    },
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ModelMessage = Record<string, any>;

async function callModel(
  apiKey: string,
  messages: ModelMessage[],
  useTools: boolean,
): Promise<ModelMessage | null> {
  const res = await fetch(NVIDIA_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: process.env.NVIDIA_MODEL || DEFAULT_MODEL,
      messages,
      ...(useTools ? { tools: TOOLS } : {}),
      temperature: 0.3,
      max_tokens: 600,
    }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) throw new Error(`Model request failed: ${res.status}`);
  const data = await res.json();
  return data?.choices?.[0]?.message ?? null;
}

function bookingFallbackReply(result: BookingResult): string {
  return result.success
    ? "Your appointment request has been sent to the clinic. They will telephone you to confirm a time within one business day."
    : `I wasn't able to complete the booking just now. Please call the clinic on ${clinic.primaryPhone} to book your appointment.`;
}

export async function POST(req: Request) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "The assistant is not configured yet." },
      { status: 503 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      {
        error:
          "That's a lot of questions! Please try again in a few minutes, or call the clinic.",
      },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const rawMessages = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(rawMessages)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const messages: ChatMessage[] = rawMessages
    .filter(isChatMessage)
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const convo: ModelMessage[] = [
    { role: "system", content: buildSystemPrompt() },
    ...messages,
  ];

  const unavailable = () =>
    Response.json(
      {
        error:
          "The assistant is unavailable right now. Please call the clinic.",
      },
      { status: 502 },
    );

  // First model turn — tools offered so it can choose to book.
  let first: ModelMessage | null;
  try {
    first = await callModel(apiKey, convo, true);
  } catch {
    return unavailable();
  }
  if (!first) return unavailable();

  const toolCalls = Array.isArray(first.tool_calls) ? first.tool_calls : [];

  // No tool call — return the assistant's reply directly.
  if (toolCalls.length === 0) {
    const reply = typeof first.content === "string" ? first.content.trim() : "";
    return reply ? Response.json({ reply }) : unavailable();
  }

  // The model wants to book. Execute the tool(s), then ask the model to
  // summarise the outcome (no tools on this second call, so it must reply
  // with text rather than looping).
  convo.push({
    role: "assistant",
    content: first.content ?? "",
    tool_calls: toolCalls,
  });

  let lastBooking: BookingResult | null = null;
  for (const call of toolCalls) {
    let result: BookingResult;
    if (call?.function?.name === "submit_appointment") {
      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(call.function.arguments || "{}");
      } catch {
        args = {};
      }
      result = await submitBooking(args);
      lastBooking = result;
    } else {
      result = { success: false, message: "Unknown tool requested." };
    }
    convo.push({
      role: "tool",
      tool_call_id: call.id,
      content: JSON.stringify(result),
    });
  }

  try {
    const second = await callModel(apiKey, convo, false);
    const reply =
      second && typeof second.content === "string"
        ? second.content.trim()
        : "";
    if (reply) return Response.json({ reply });
  } catch {
    // fall through to the deterministic fallback below
  }

  // The summary call failed — return a reliable message so a completed
  // booking is never reported as a failure (or vice versa).
  if (lastBooking) {
    return Response.json({ reply: bookingFallbackReply(lastBooking) });
  }
  return unavailable();
}
