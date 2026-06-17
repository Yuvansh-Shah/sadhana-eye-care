import type { Metadata } from "next";
import { Home, CalendarCheck } from "lucide-react";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-32">
      <p className="font-display text-6xl font-semibold text-brand-200">404</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
        We couldn&apos;t find that page
      </h1>
      <p className="mt-4 leading-relaxed text-brand-700/90">
        The page may have moved or no longer exists. Let&apos;s get you back to
        caring for your eyes.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="primary" size="lg">
          <Home className="h-5 w-5" aria-hidden="true" />
          Back to home
        </Button>
        <Button href="/contact#appointment" variant="secondary" size="lg">
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Book an appointment
        </Button>
      </div>
    </div>
  );
}
