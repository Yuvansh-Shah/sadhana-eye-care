// Server-side appointment booking. Used by the AI assistant's
// `submit_appointment` tool to deliver a request to the clinic via Web3Forms.

import { clinic } from "./clinic";

export type BookingInput = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  preferred_time?: unknown;
  reason?: unknown;
};

export type BookingResult = { success: boolean; message: string };

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Submit an appointment request collected by the assistant. */
export async function submitBooking(
  input: BookingInput,
): Promise<BookingResult> {
  const name = clean(input.name, 120);
  const phone = clean(input.phone, 40);
  const reason = clean(input.reason, 200);
  const email = clean(input.email, 160);
  const preferredTime = clean(input.preferred_time, 120);

  if (!name || !phone || !reason) {
    return {
      success: false,
      message:
        "Cannot submit yet — the visitor's full name, phone number and reason for visit are all required. Ask for whichever is missing.",
    };
  }

  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return {
      success: false,
      message: `Online booking is not configured yet. Ask the visitor to call the clinic on ${clinic.primaryPhone} to book.`,
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: key,
        subject: `Appointment request (via website assistant) — ${name}`,
        from_name: "Sadhana Eye Care website assistant",
        name,
        phone,
        ...(email ? { email } : {}),
        preferred_datetime: preferredTime || "Not specified",
        reason,
        booked_via: "AI assistant",
      }),
      signal: AbortSignal.timeout(15000),
    });

    const json = await res.json().catch(() => null);
    if (res.ok && json?.success) {
      return {
        success: true,
        message:
          "The appointment request was submitted successfully. Tell the visitor the clinic will telephone them to confirm a time within one business day.",
      };
    }
    return {
      success: false,
      message: `The booking could not be submitted. Ask the visitor to call the clinic on ${clinic.primaryPhone}.`,
    };
  } catch {
    return {
      success: false,
      message: `The booking could not be submitted. Ask the visitor to call the clinic on ${clinic.primaryPhone}.`,
    };
  }
}
