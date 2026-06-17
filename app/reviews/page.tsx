import type { Metadata } from "next";
import { Star, ExternalLink, MessageSquareQuote } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import CtaBanner from "@/components/CtaBanner";
import { googleReviews, patientThemes } from "@/lib/reviews";
import { clinic, googleMapsUrl, googleReviewUrl } from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Patient Reviews",
  description:
    "Read patient reviews for Dr. Dipti Shah at Sadhana Eye Care — 4.7★ on Google and 98% recommended across 900+ verified stories on Practo.",
  alternates: { canonical: "/reviews" },
};

const badges = [
  {
    value: `${clinic.stats.googleRating}★`,
    label: "Average rating on Google",
    href: googleMapsUrl(),
  },
  {
    value: clinic.stats.practoRecommend,
    label: `Recommended on Practo · ${clinic.stats.practoStories} patient stories`,
    href: clinic.social.practo,
  },
  {
    value: clinic.stats.instagramFollowers,
    label: "Community on Instagram",
    href: clinic.social.instagram,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="What patients say"
        lead="Dr. Shah's reputation is built on word of mouth. Here is a snapshot of what patients share publicly."
        crumbs={[{ label: "Reviews", href: "/reviews" }]}
      />

      {/* Trust badges */}
      <Section tint="white" spacing="tight">
        <div className="grid gap-5 sm:grid-cols-3">
          {badges.map((b) => (
            <a
              key={b.label}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-brand-100 bg-brand-50 p-6 transition-colors hover:border-brand-200"
            >
              <p className="font-display text-3xl font-semibold text-brand-900">
                {b.value}
              </p>
              <p className="mt-1 text-sm text-brand-600">{b.label}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-700">
                View source
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Google reviews */}
      <Section tint="sand">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="From Google"
            title="Recent Google reviews"
            lead="A selection of verified reviews from Google. See the full, live list on Google Maps."
          />
          <div className="flex items-center gap-1.5 text-brand-700">
            <Star
              className="h-5 w-5 fill-accent-400 text-accent-400"
              aria-hidden="true"
            />
            <span className="font-semibold">
              {clinic.stats.googleRating} on Google
            </span>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {googleReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={googleMapsUrl()} variant="secondary" size="md">
            Read all reviews on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href={googleReviewUrl()} variant="primary" size="md">
            Write a review
          </Button>
        </div>
      </Section>

      {/* Themes */}
      <Section tint="white">
        <SectionHeading
          eyebrow="In patients' words"
          title="What patients consistently say"
          lead="Four themes echo through reviews across Google, Practo and Justdial."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {patientThemes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-2xl border border-brand-100 bg-white p-6"
            >
              <h3 className="font-display text-lg font-semibold text-brand-900">
                {theme.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-700/90">
                {theme.detail}
              </p>
              <p className="mt-4 border-l-2 border-accent-300 pl-3 text-sm italic text-brand-600">
                {theme.quote}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Practo */}
      <Section tint="brand" spacing="tight">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-brand-100 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <MessageSquareQuote className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold text-brand-900">
                {clinic.stats.practoStories} verified patient stories on Practo
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-brand-700/90">
                Practo holds the deepest pool of verified reviews — with a{" "}
                {clinic.stats.practoRecommend} recommendation rate.
              </p>
            </div>
          </div>
          <Button href={clinic.social.practo} variant="primary" size="lg">
            Read stories on Practo
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-brand-500">
          Reviews are shown as published on Google and Practo. Patient
          testimonials are not added to this site without consent.
        </p>
      </Section>

      <CtaBanner />
    </>
  );
}
