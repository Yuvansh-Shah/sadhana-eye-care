import type { Metadata } from "next";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";
import { clinic, telHref, mailHref } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing use of the Sadhana Eye Care website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lead="The terms that govern your use of this website."
        crumbs={[{ label: "Terms of Use", href: "/terms" }]}
      />

      <Section tint="white">
        <div className="max-w-3xl space-y-10 text-brand-700/90">
          <p className="text-sm font-medium text-brand-500">
            Last updated: May 2026
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              About these terms
            </h2>
            <p className="leading-relaxed">
              This website is operated by {clinic.name}, {clinic.address.locality},
              Mumbai. By using the site you agree to these terms. If you do not
              agree, please do not use the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Information, not medical advice
            </h2>
            <p className="leading-relaxed">
              The content on this website is general and educational. It is not
              medical advice and is not a substitute for consultation with a
              qualified doctor. Using this website does not create a
              doctor–patient relationship. Always consult {clinic.doctor.name} or
              your physician for diagnosis and treatment specific to your
              condition.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Appointment requests
            </h2>
            <p className="leading-relaxed">
              Submitting the appointment form is a request only. An appointment
              is confirmed only when the clinic contacts you to arrange a time.
              Please call the clinic directly for any urgent concern.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Intellectual property
            </h2>
            <p className="leading-relaxed">
              The content, design and branding of this website belong to{" "}
              {clinic.name} unless stated otherwise, and may not be copied or
              reused without permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              External links
            </h2>
            <p className="leading-relaxed">
              This website links to third-party sites such as Practo, Google,
              Instagram, Facebook and LinkedIn. We are not responsible for the
              content or practices of those sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Limitation of liability
            </h2>
            <p className="leading-relaxed">
              The website is provided on an &ldquo;as is&rdquo; basis. While we
              aim to keep information accurate and current, we do not warrant
              that it is complete or error-free, and we are not liable for any
              loss arising from reliance on it.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Changes and governing law
            </h2>
            <p className="leading-relaxed">
              We may update these terms from time to time. They are governed by
              the laws of India, with the courts of Mumbai, Maharashtra having
              jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Contact
            </h2>
            <p className="leading-relaxed">
              Questions about these terms? Call{" "}
              <a
                href={telHref(clinic.primaryPhone)}
                className="font-medium text-brand-700 hover:underline"
              >
                {clinic.primaryPhone}
              </a>{" "}
              or email{" "}
              <a
                href={mailHref(clinic.primaryEmail)}
                className="font-medium text-brand-700 hover:underline"
              >
                {clinic.primaryEmail}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
