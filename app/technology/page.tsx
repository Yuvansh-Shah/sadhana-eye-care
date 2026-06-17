import type { Metadata } from "next";
import { ScanEye, Target, ClipboardList, Microscope } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import { equipment } from "@/lib/equipment";

export const metadata: Metadata = {
  title: "Technology & Equipment",
  description:
    "Diagnostic and surgical eye-care technology at Sadhana Eye Care — instruments from Carl Zeiss, NIDEK, Keeler, Accutome and Forus Health.",
  alternates: { canonical: "/technology" },
};

const benefits = [
  {
    icon: Target,
    title: "Accurate diagnosis",
    detail:
      "Precise instruments help detect conditions early and pinpoint the root cause of a problem.",
  },
  {
    icon: ClipboardList,
    title: "Documented imaging",
    detail:
      "Retinal and other images are recorded, so changes can be compared reliably year on year.",
  },
  {
    icon: ScanEye,
    title: "Confident surgical planning",
    detail:
      "Cataract and LASIK planning relies on exact measurements of the eye for the right outcome.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="The technology behind your care"
        lead="Sadhana Eye Care is equipped with trusted diagnostic and surgical instruments from the world's leading manufacturers."
        crumbs={[{ label: "Technology", href: "/technology" }]}
      />

      {/* Intro + why it matters */}
      <Section tint="white">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ImagePlaceholder
            label="Diagnostic equipment at Sadhana Eye Care"
            src="/images/clinic-equipment.jpg"
            icon={Microscope}
            aspect="wide"
          />
          <div>
            <SectionHeading
              eyebrow="Why it matters"
              title="Good technology supports good judgement"
              lead="Equipment never replaces clinical experience — but in the right hands, it makes diagnosis sharper and treatment safer."
            />
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-brand-100 bg-brand-50 p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-white text-brand-600">
                <b.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                {b.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-700/90">
                {b.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Equipment list */}
      <Section tint="sand">
        <SectionHeading
          eyebrow="Equipment"
          title="Instruments at the clinic"
          lead="Each instrument has a specific role in examining, measuring and treating the eye."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item) => (
            <article
              key={item.name}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-6"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-brand-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  {item.manufacturer}
                </span>
                <span className="text-xs font-medium text-brand-500">
                  {item.origin}
                </span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-brand-900">
                {item.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-700/90">
                {item.purpose}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-brand-600">
          Equipment specifications are provided for general information. Drop a
          line to the clinic if you would like to know how a particular
          instrument is used in your care.
        </p>
      </Section>

      <CtaBanner
        title="Experience precise, modern eye care"
        text="Book an appointment to have your eyes examined with the right tools — and explained in plain language."
      />
    </>
  );
}
