import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { clinic, telHref } from "@/lib/clinic";

/** Sticky Call / Book bar shown on mobile only. */
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-brand-100 bg-white lg:hidden">
      <a
        href={telHref(clinic.primaryPhone)}
        className="flex h-16 items-center justify-center gap-2 font-semibold text-brand-700"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact#appointment"
        className="flex h-16 items-center justify-center gap-2 bg-accent-600 font-semibold text-white"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden="true" />
        Book Appointment
      </Link>
    </div>
  );
}
