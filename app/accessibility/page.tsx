import type { Metadata } from "next";
import { Section } from "@/components/Section";
import PageHero from "@/components/PageHero";
import { clinic, telHref, mailHref } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Sadhana Eye Care's commitment to making this website accessible to all visitors, including people using assistive technology.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility Statement"
        lead="Our commitment to making this website usable for everyone."
        crumbs={[{ label: "Accessibility", href: "/accessibility" }]}
      />

      <Section tint="white">
        <div className="max-w-3xl space-y-10 text-brand-700/90">
          <p className="text-sm font-medium text-brand-500">
            Last updated: May 2026
          </p>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Our commitment
            </h2>
            <p className="leading-relaxed">
              {clinic.name} is committed to making this website accessible to as
              many people as possible, including those who rely on assistive
              technology. We aim to meet the Web Content Accessibility
              Guidelines (WCAG) 2.1 at Level AA.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              What we have done
            </h2>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed">
              <li>Semantic HTML with clear headings and landmark regions</li>
              <li>A &ldquo;skip to content&rdquo; link for keyboard users</li>
              <li>Keyboard-navigable menus, links and forms</li>
              <li>Visible focus outlines on interactive elements</li>
              <li>Text alternatives for images and icons</li>
              <li>
                Colour contrast that targets the WCAG AA ratio for body text
              </li>
              <li>A responsive, mobile-first layout</li>
              <li>Respect for the &ldquo;reduce motion&rdquo; system setting</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Known limitations
            </h2>
            <p className="leading-relaxed">
              The embedded Google Map is a third-party component and its
              accessibility is governed by Google. Where a map is used, the
              clinic address and directions are also provided as plain text.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-brand-900">
              Give us feedback
            </h2>
            <p className="leading-relaxed">
              If you experience any difficulty using this website, or need
              information in a different format, please let us know — we will do
              our best to help.
            </p>
            <p className="leading-relaxed">
              Call{" "}
              <a
                href={telHref(clinic.primaryPhone)}
                className="font-medium text-brand-700 hover:underline"
              >
                {clinic.primaryPhone}
              </a>{" "}
              or email{" "}
              <a
                href={mailHref(clinic.primaryEmail, "Website accessibility")}
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
