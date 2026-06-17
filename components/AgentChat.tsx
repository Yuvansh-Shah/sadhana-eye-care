"use client";

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FormEvent,
} from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const GREETING: Msg = {
  role: "assistant",
  content:
    "Hi! I'm the Sadhana Eye Care assistant. I can answer eye-care questions, tell you about our services and timings, and book an appointment for you. How can I help?",
};

const SUGGESTIONS = [
  "Book an appointment",
  "What are your consultation timings?",
  "Do you perform LASIK surgery?",
];

export default function AgentChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, error]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      const next: Msg[] = [...messages, { role: "user", content: trimmed }];
      setMessages(next);
      setInput("");
      setError(null);
      setLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: next }),
        });
        const data = await res.json();
        if (!res.ok) {
          setError(
            typeof data?.error === "string"
              ? data.error
              : "Something went wrong. Please try again.",
          );
        } else {
          setMessages((m) => [
            ...m,
            { role: "assistant", content: String(data.reply) },
          ]);
        }
      } catch {
        setError(
          "Couldn't reach the assistant. Please check your connection or call the clinic.",
        );
      } finally {
        setLoading(false);
      }
    },
    [messages, loading],
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void sendMessage(input);
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open the Sadhana Eye Care assistant"
        className="fixed bottom-36 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg shadow-black/25 transition-transform hover:scale-105 lg:bottom-24 lg:right-6"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Sadhana Eye Care assistant"
      className="fixed bottom-20 right-4 z-50 flex h-[70vh] max-h-[34rem] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-brand-200 bg-white shadow-2xl sm:w-96 lg:bottom-6 lg:right-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3 bg-brand-600 px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15">
            <Sparkles className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">
              Eye Care Assistant
            </span>
            <span className="text-xs text-brand-100">
              General information
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close the assistant"
          className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/15"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto bg-sand-50 p-4"
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
          >
            <p
              className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "rounded-br-sm bg-brand-600 text-white"
                  : "rounded-bl-sm border border-brand-100 bg-white text-brand-800"
              }`}
            >
              {m.content}
            </p>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <span className="flex gap-1 rounded-2xl rounded-bl-sm border border-brand-100 bg-white px-4 py-3.5">
              <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:150ms]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-brand-300 [animation-delay:300ms]" />
            </span>
          </div>
        )}

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-800"
          >
            {error}
          </p>
        )}

        {messages.length === 1 && !loading && (
          <div className="flex flex-wrap gap-2 pt-1">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => void sendMessage(s)}
                className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 hover:bg-brand-50"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={onSubmit}
        className="border-t border-brand-100 bg-white p-3"
      >
        <div className="flex items-end gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question…"
            aria-label="Type your question"
            maxLength={500}
            disabled={loading}
            className="min-w-0 flex-1 rounded-xl border border-brand-200 px-3.5 py-2.5 text-sm text-brand-900 placeholder:text-brand-400 focus:border-brand-500 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            aria-label="Send message"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-600 text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 text-center text-[0.7rem] leading-relaxed text-brand-400">
          General information only — not medical advice. For diagnosis, please
          book an appointment.
        </p>
      </form>
    </div>
  );
}
