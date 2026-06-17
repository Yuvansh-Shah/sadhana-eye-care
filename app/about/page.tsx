import type { Metadata } from "next";
import {
  GraduationCap,
  BadgeCheck,
  Users,
  Quote,
  UserRound,
  Building2,
  Armchair,
  Microscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { clinic } from "@/lib/clinic";
import { physicianSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Dr. Dipti Shah — Ophthalmologist",
  description:
    "Dr. Dipti Shah, MBBS, DOMS — ophthalmologist and eye surgeon with 28 years of specialist experience, founder of Sadhana Eye Care, Marine Lines, Mumbai.",
  alternates: { canonical: "/about" },
};

const qualifications = [
  {
    degree: "MBBS",
    institution: "Dr. D.Y. Patil Medical College and Hospital, Navi Mumbai",
    year: "1996",
  },
  {
    degree: "DOMS",
    institution: "College of Physicians and Surgeons, Mumbai",
    year: "1998",
  },
];

const memberships = [
  "All India Ophthalmological Society (AIOS)",
  "Maharashtra Ophthalmological Society",
  "Bombay Ophthalmologists' Association (BOA)",
];

const gallery: { label: string; icon: LucideIcon; src?: string }[] = [
  { label: "Clinic reception", icon: Armchair },
  {
    label: "Consultation in progress",
    icon: UserRound,
    src: "/images/dr-shah-examination.jpg",
  },
  {
    label: "Diagnostic equipment",
    icon: Microscope,
    src: "/images/clinic-equipment.jpg",
  },
  {
    label: "Dr. Dipti Shah in surgery",
    icon: Building2,
    src: "/images/cataract-surgery.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={physicianSchema()} />
      <PageHero
        eyebrow="About"
        title="Dr. Dipti Shah"
        lead="Ophthalmologist and eye surgeon — 28 years of specialist experience, and the founder of Sadhana Eye Care."
        crumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Bio */}
      <Section tint="white">
        <div className="grid items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <ImagePlaceholder
            label="Dr. Dipti Shah, ophthalmologist at Sadhana Eye Care"
            src="/images/dr-dipti-shah.jpg"
            icon={UserRound}
            aspect="portrait"
          />
          <div>
            <SectionHeading
              eyebrow="Biography"
              title="Three decades caring for Mumbai's eyes"
            />
            <div className="mt-5 space-y-4 leading-relaxed text-brand-700/90">
              <p>
                Dr. Dipti Shah is an ophthalmologist and eye surgeon who has
                practised in Mumbai for three decades. She founded Sadhana Eye
                Care in February {clinic.established}, and continues to
                personally see every patient who walks through its doors.
              </p>
              <p>
                She earned her MBBS from Dr. D.Y. Patil Medical College and
                Hospital, Navi Mumbai, in 1996, followed by a Diploma in
                Ophthalmic Medicine and Surgery (DOMS) from the College of
                Physicians and Surgeons, Mumbai, in 1998. With{" "}
                {clinic.specialistYears} years of specialist experience, her
                clinical focus is cataract and refractive (LASIK) surgery,
                alongside the full range of general and medical eye care.
              </p>
              <p>
                Dr. Shah is known among her patients for being direct and
                honest, for explaining conditions in plain language, and for
                running a punctual clinic where appointment times are
                respected. Her practice has grown almost entirely through word
                of mouth — and, increasingly, through the educational content
                she shares with more than 20,000 followers on Instagram.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Credentials & memberships */}
      <Section tint="sand">
        <SectionHeading
          eyebrow="Credentials"
          title="Qualifications & professional standing"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
              Education
            </h3>
            <ul className="mt-3 space-y-3">
              {qualifications.map((q) => (
                <li key={q.degree}>
                  <p className="font-semibold text-brand-800">
                    {q.degree}{" "}
                    <span className="font-normal text-brand-500">
                      · {q.year}
                    </span>
                  </p>
                  <p className="text-sm text-brand-600">{q.institution}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <BadgeCheck className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
              Registration & experience
            </h3>
            <ul className="mt-3 space-y-3 text-sm text-brand-700">
              <li>
                <span className="font-semibold text-brand-800">
                  {clinic.doctor.mmcRegistration}
                </span>
                <span className="block text-brand-500">Verified</span>
              </li>
              <li>
                <span className="font-semibold text-brand-800">
                  {clinic.overallYears} years overall
                </span>
                <span className="block text-brand-500">
                  {clinic.specialistYears} years as a specialist
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-brand-100 bg-white p-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Users className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
              Memberships
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-700">
              {memberships.map((m) => (
                <li key={m} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tint="brand-dark">
        <figure className="mx-auto max-w-3xl text-center">
          <Quote
            className="mx-auto h-10 w-10 text-accent-400"
            aria-hidden="true"
          />
          <blockquote className="mt-5 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
            “One of the most caring, intelligent, empathetic and loving doctors
            you will ever meet.”
          </blockquote>
          <figcaption className="mt-5 text-sm font-medium uppercase tracking-wider text-brand-300">
            From a patient review
          </figcaption>
        </figure>
        <p className="mx-auto mt-8 max-w-2xl text-center leading-relaxed text-brand-100">
          Dr. Shah's approach is simple: take the time to understand each
          patient, explain things honestly and clearly, and recommend only the
          care that is genuinely needed.
        </p>
      </Section>

      {/* Gallery */}
      <Section tint="white">
        <SectionHeading
          eyebrow="The clinic"
          title="Inside Sadhana Eye Care"
          lead="A calm, well-equipped clinic in Princess Building, Marine Lines."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((g) => (
            <ImagePlaceholder
              key={g.label}
              label={g.label}
              src={g.src}
              icon={g.icon}
              aspect="square"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ))}
        </div>
      </Section>

      {/* History */}
      <Section tint="brand">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ImagePlaceholder
            label="Sadhana Eye Care since 2003"
            icon={Building2}
            aspect="wide"
          />
          <div>
            <SectionHeading
              eyebrow="Our story"
              title={`Serving Marine Lines since ${clinic.established}`}
            />
            <div className="mt-5 space-y-4 leading-relaxed text-brand-700/90">
              <p>
                Sadhana Eye Care opened in February {clinic.established} in
                Princess Building, on Princess Street in Marine Lines. For more
                than two decades it has been a familiar, trusted presence in the
                neighbourhood — opposite Marine Lines Station and next to the
                landmark Parsi Dairy Farm.
              </p>
              <p>
                What began as a neighbourhood eye clinic has grown into a
                practice that draws patients from across Mumbai, while keeping
                the personal, one-doctor care it started with. Today it pairs
                that continuity with modern diagnostic technology — so patients
                receive both familiarity and precision.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Consult Dr. Dipti Shah"
        text="Book a consultation at Sadhana Eye Care — honest advice, clear explanations, and appointments that run on time."
      />
    </>
  );
}
