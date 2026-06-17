import { Phone, CalendarCheck } from "lucide-react";
import Button from "./Button";
import { clinic, telHref } from "@/lib/clinic";

/** Full-width "book an appointment" call-to-action band. */
export default function CtaBanner({
  title = "Ready to see clearly?",
  text = "Book a consultation with Dr. Dipti Shah, or call the clinic directly — appointments run on time, with little to no waiting.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-brand-800">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 text-center sm:px-8 sm:py-16">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-brand-100">
          {text}
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact#appointment" variant="primary" size="lg">
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book an Appointment
          </Button>
          <Button
            href={telHref(clinic.primaryPhone)}
            variant="white"
            size="lg"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {clinic.primaryPhone}
          </Button>
        </div>
      </div>
    </section>
  );
}
