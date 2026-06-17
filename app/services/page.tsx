import type { Metadata } from "next";
import { ShieldCheck, CreditCard } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBanner from "@/components/CtaBanner";
import PricingNote from "@/components/PricingNote";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Eye Care Services — Cataract, LASIK, Glaucoma & More",
  description:
    "Cataract surgery, LASIK, glaucoma evaluation, diabetic eye care and complete general eye check-ups at Sadhana Eye Care, Marine Lines, Mumbai.",
  alternates: { canonical: "/services" },
};

const alsoAvailable = [
  "Contact lens fitting & prescriptions",
  "Spectacle prescriptions",
  "Dry eye evaluation & management",
  "Paediatric eye examinations",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eye care services"
        lead="Every service is delivered personally by Dr. Dipti Shah, supported by precise diagnostic technology."
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <Section tint="white">
        <SectionHeading
          eyebrow="What we offer"
          title="From routine check-ups to advanced surgery"
          lead="Choose a service to learn what it involves, what to expect, and how Sadhana Eye Care approaches it."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50 p-6">
          <h3 className="font-display text-lg font-semibold text-brand-900">
            Also available
          </h3>
          <p className="mt-1 text-sm text-brand-600">
            Included within general eye care.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {alsoAvailable.map((item) => (
              <li
                key={item}
                className="rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Insurance & payment */}
      <Section tint="sand" spacing="tight">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <ShieldCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-brand-900">
                Insurance accepted
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-700/90">
                All insurance company reimbursement papers are issued by the
                clinic to support your claim.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <CreditCard className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h3 className="font-display text-lg font-semibold text-brand-900">
                Convenient payment
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-700/90">
                Credit and debit cards are accepted alongside cash and digital
                payments.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <PricingNote />
        </div>
      </Section>

      <CtaBanner
        title="Not sure which service you need?"
        text="Book a consultation and Dr. Shah will examine your eyes and advise you honestly on the right next step."
      />
    </>
  );
}
