import type { Metadata } from "next";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";
import { clinic, telHref, mailHref, fullAddress } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sadhana Eye Care collects, uses and protects information submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How Sadhana Eye Care handles information collected through this website."
        crumbs={[{ label: "Privacy Policy", href: "/privacy" }]}
      />

      <Section tint="white">
        <div className="max-w-3xl space-y-10 text-brand-700/90">
          <p className="text-sm font-medium text-brand-500">
            Last updated: May 2026
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Overview
            </h2>
            <p className="leading-relaxed">
              This policy explains how {clinic.name} (&ldquo;we&rdquo;,
              &ldquo;the clinic&rdquo;) handles information collected through
              this website. It does not cover information collected during
              in-person visits, which is handled confidentially as part of your
              medical care.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Information we collect
            </h2>
            <p className="leading-relaxed">
              When you submit the appointment request form, we collect the
              details you choose to enter:
            </p>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your email address (if you provide one)</li>
              <li>Your preferred date and time</li>
              <li>Your reason for visit and any message you write</li>
            </ul>
            <p className="leading-relaxed">
              We do not collect this information through tracking — only what
              you actively enter into the form.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              How we use your information
            </h2>
            <p className="leading-relaxed">
              Your information is used solely to respond to your enquiry and
              arrange your appointment. The clinic team may telephone or email
              you to confirm a suitable time.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              How your information is shared and stored
            </h2>
            <p className="leading-relaxed">
              Appointment requests are sent by email to the clinic&apos;s email
              accounts. We do not sell or rent your information to anyone. Your
              details are retained only for as long as needed to manage your
              appointment and, where relevant, your patient record.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Third-party services
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>
                <span className="font-medium text-brand-800">
                  Google Maps:
                </span>{" "}
                this site embeds a Google map. When the map loads, Google may
                receive your IP address and device information, governed by
                Google&apos;s own privacy policy.
              </li>
              <li>
                <span className="font-medium text-brand-800">
                  External links:
                </span>{" "}
                links to Practo, Instagram, Facebook and LinkedIn lead to
                third-party sites with their own privacy policies.
              </li>
              <li>
                <span className="font-medium text-brand-800">
                  Instagram content:
                </span>{" "}
                the homepage embeds Instagram reels. When the page loads,
                Instagram may receive your IP address and device information,
                governed by Instagram&apos;s own privacy policy.
              </li>
              <li>
                <span className="font-medium text-brand-800">
                  Appointment form:
                </span>{" "}
                submitting the form opens your own email application to send the
                request to the clinic.
              </li>
            </ul>
            <p className="leading-relaxed">
              This website does not currently use third-party analytics or
              advertising cookies. If analytics are added in future, this policy
              will be updated and a cookie notice shown where required.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Cookies
            </h2>
            <p className="leading-relaxed">
              This site does not set tracking or advertising cookies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Your rights
            </h2>
            <p className="leading-relaxed">
              You may ask us to access, correct or delete the personal
              information you have submitted through this website. Please
              contact the clinic using the details below.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Contact us
            </h2>
            <address className="not-italic leading-relaxed">
              {clinic.name}
              <br />
              {fullAddress()}
              <br />
              <a
                href={telHref(clinic.primaryPhone)}
                className="font-medium text-brand-700 hover:underline"
              >
                {clinic.primaryPhone}
              </a>
              <br />
              <a
                href={mailHref(clinic.primaryEmail)}
                className="font-medium text-brand-700 hover:underline"
              >
                {clinic.primaryEmail}
              </a>
            </address>
          </section>

          <section className="space-y-3 rounded-2xl border border-brand-100 bg-brand-50 p-6">
            <h2 className="font-display text-lg font-semibold text-brand-900">
              Medical disclaimer
            </h2>
            <p className="text-sm leading-relaxed">
              Information on this site is general and educational. Consult{" "}
              {clinic.doctor.name} or your physician for diagnosis and
              treatment specific to your condition.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
