import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import JsonLd from "@/components/JsonLd";
import { faqCategories, allFaqItems } from "@/lib/faq";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about eye check-ups, cataract surgery, LASIK, appointments, fees and insurance at Sadhana Eye Care, Marine Lines, Mumbai.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(allFaqItems)} />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lead="Common questions about eye care, surgery and visiting the clinic. If your question isn't here, the clinic team is happy to help."
        crumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      <Section tint="white">
        <div className="space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <SectionHeading as="h2" title={category.title} />
              <div className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-brand-100 bg-white open:bg-brand-50/40"
                  >
                    <summary className="flex items-center justify-between gap-4 p-5">
                      <h3 className="font-display text-lg font-semibold text-brand-900">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className="faq-chevron h-5 w-5 shrink-0 text-brand-500 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="px-5 pb-5 leading-relaxed text-brand-700/90">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Still have a question?"
        text="Call the clinic or request an appointment — Dr. Shah will examine your eyes and answer your questions in person."
      />
    </>
  );
}
