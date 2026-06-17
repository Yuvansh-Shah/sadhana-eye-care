import { IndianRupee } from "lucide-react";
import { clinic, telHref } from "@/lib/clinic";

/** Neutral "call for fees" note — pricing is not published until confirmed. */
export default function PricingNote() {
  return (
    <div className="flex gap-3 rounded-xl border border-brand-100 bg-brand-50 px-5 py-4">
      <IndianRupee
        className="mt-0.5 h-5 w-5 shrink-0 text-brand-500"
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed text-brand-700/90">
        <span className="font-semibold text-brand-900">Fees &amp; costs:</span>{" "}
        consultation fees and surgery cost estimates depend on your examination
        and are shared on enquiry. Please call{" "}
        <a
          href={telHref(clinic.primaryPhone)}
          className="font-medium text-accent-700 underline"
        >
          {clinic.primaryPhone}
        </a>{" "}
        for current pricing.
      </p>
    </div>
  );
}
