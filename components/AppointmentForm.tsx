"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { clinic, telHref } from "@/lib/clinic";

const reasons = [
  "Cataract consultation",
  "LASIK consultation",
  "General eye check-up",
  "Glaucoma or diabetic eye check",
  "Other",
];

const fieldClass =
  "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-brand-900 placeholder:text-brand-400 focus:border-brand-500 disabled:opacity-60";
const labelClass = "mb-1.5 block text-sm font-medium text-brand-800";

// Web3Forms access key (PRD 7.1). Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in
// .env.local — get a free key at https://web3forms.com. When the key is
// absent the form falls back to opening the visitor's email client.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Status = "idle" | "submitting" | "success" | "error";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [usedEmailFallback, setUsedEmailFallback] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users leave this hidden field empty.
    if (data.get("company")) return;

    const get = (k: string) => String(data.get(k) || "").trim();

    if (WEB3FORMS_KEY) {
      setStatus("submitting");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `Appointment request — ${get("name")}`,
            from_name: "Sadhana Eye Care website",
            name: get("name"),
            phone: get("phone"),
            ...(get("email") ? { email: get("email") } : {}),
            preferred_datetime: get("datetime") || "Not specified",
            reason: get("reason"),
            message: get("message") || "—",
          }),
        });
        const json = await res.json();
        if (json.success) {
          setUsedEmailFallback(false);
          setStatus("success");
          form.reset();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
      return;
    }

    // Fallback: open the visitor's mail client addressed to the clinic.
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email") || "—"}`,
      `Preferred date / time: ${get("datetime") || "—"}`,
      `Reason for visit: ${get("reason")}`,
      "",
      "Message:",
      get("message") || "—",
    ].join("\n");
    window.location.href = `mailto:${clinic.emails[0]}?cc=${clinic.emails[1]}&subject=${encodeURIComponent(
      `Appointment request — ${get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setUsedEmailFallback(true);
    setStatus("success");
    form.reset();
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2
          className="mx-auto h-12 w-12 text-green-600"
          aria-hidden="true"
        />
        <h3 className="mt-3 font-display text-xl font-semibold text-brand-900">
          Thank you
        </h3>
        <p className="mt-2 text-brand-700">
          {usedEmailFallback
            ? "Your request has been prepared in your email app — please send it to reach the clinic. The clinic will then call you to confirm within one business day."
            : "Your appointment request has been sent. The clinic will call you to confirm within one business day."}
        </p>
        <p className="mt-3 text-sm text-brand-600">
          For urgent issues, please call{" "}
          <a
            href={telHref(clinic.primaryPhone)}
            className="font-semibold text-accent-700 underline"
          >
            {clinic.primaryPhone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-700 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 sm:grid-cols-2"
      noValidate
    >
      {/* Honeypot — hidden from users, catches bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClass}>
          Full name <span className="text-accent-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number <span className="text-accent-600">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="datetime" className={labelClass}>
          Preferred date / time
        </label>
        <input
          id="datetime"
          name="datetime"
          type="text"
          placeholder="e.g. Weekday morning"
          disabled={submitting}
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="reason" className={labelClass}>
          Reason for visit <span className="text-accent-600">*</span>
        </label>
        <select
          id="reason"
          name="reason"
          required
          defaultValue=""
          disabled={submitting}
          className={fieldClass}
        >
          <option value="" disabled>
            Select a reason
          </option>
          {reasons.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          disabled={submitting}
          className={`${fieldClass} resize-y`}
        />
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="flex gap-2 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 sm:col-span-2"
        >
          <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>
            Something went wrong sending your request. Please try again, or call
            the clinic on{" "}
            <a
              href={telHref(clinic.primaryPhone)}
              className="font-semibold underline"
            >
              {clinic.primaryPhone}
            </a>
            .
          </span>
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-7 text-base font-semibold text-white transition-colors hover:bg-accent-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
          {submitting ? "Sending…" : "Request Appointment"}
        </button>
        <p className="mt-3 text-xs leading-relaxed text-brand-500">
          The clinic will call you to confirm within one business day. Your
          details are used only to arrange your appointment — see our{" "}
          <a href="/privacy" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
