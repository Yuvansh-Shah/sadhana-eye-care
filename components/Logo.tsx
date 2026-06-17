import Link from "next/link";
import { clinic } from "@/lib/clinic";

/** Sadhana Eye Care wordmark with a simple eye mark. */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const title = tone === "light" ? "text-white" : "text-brand-900";
  const sub = tone === "light" ? "text-brand-200" : "text-brand-500";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5"
      aria-label={`${clinic.name} — home`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-600 transition-colors group-hover:bg-brand-700">
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2 12c2.5-4.5 6-6.75 10-6.75S19.5 7.5 22 12c-2.5 4.5-6 6.75-10 6.75S4.5 16.5 2 12Z"
            stroke="white"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="3.4" fill="white" />
          <circle cx="12" cy="12" r="1.5" fill="#235980" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${title}`}
        >
          Sadhana Eye Care
        </span>
        <span
          className={`mt-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] ${sub}`}
        >
          Marine Lines, Mumbai
        </span>
      </span>
    </Link>
  );
}
