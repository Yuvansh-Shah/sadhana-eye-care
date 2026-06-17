import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, HeartPulse, Stethoscope } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CtaBanner from "@/components/CtaBanner";
import PricingNote from "@/components/PricingNote";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { medicalProcedureSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.related
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd data={medicalProcedureSchema(service)} />
      <PageHero
        eyebrow="Service"
        title={service.name}
        lead={service.intro}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortName, href: `/services/${service.slug}` },
        ]}
      />

      {/* What it is */}
      <Section tint="white">
        <div className="grid items-start gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Overview" title="What it is" />
            <div className="mt-5 space-y-4 leading-relaxed text-brand-700/90">
              {service.whatItIs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
          <ImagePlaceholder
            label={`${service.shortName} at Sadhana Eye Care`}
            src={service.image}
            icon={Stethoscope}
            aspect="wide"
            tone="sand"
          />
        </div>
      </Section>

      {/* What to expect */}
      <Section tint="sand">
        <SectionHeading
          eyebrow="The patient journey"
          title="What to expect"
          lead="A clear, step-by-step view of how your care unfolds."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2">
          {service.whatToExpect.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-6"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 font-display text-lg font-semibold text-white">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-700/90">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why here */}
      <Section tint="brand-dark">
        <div className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <SectionHeading
            eyebrow="Why Sadhana Eye Care"
            title="Care you can trust"
            tone="light"
          />
          <ul className="grid gap-3">
            {service.whyHere.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl bg-brand-800 p-4 text-brand-100"
              >
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-400"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Recovery */}
      <Section tint="white" spacing="tight">
        <div className="flex flex-col gap-4 rounded-2xl border border-accent-200 bg-accent-50 p-7 sm:flex-row sm:gap-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-accent-600">
            <HeartPulse className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-xl font-semibold text-brand-900">
              Recovery & what to expect after
            </h2>
            <p className="mt-2 leading-relaxed text-brand-700/90">
              {service.recovery}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <PricingNote />
        </div>
      </Section>

      {/* Related */}
      {related.length > 0 && (
        <Section tint="brand" spacing="tight">
          <SectionHeading eyebrow="Explore more" title="Related services" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <ServiceCard key={r.slug} service={r} />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner
        title={`Considering ${service.shortName.toLowerCase()}?`}
        text="Book a consultation with Dr. Dipti Shah for an honest assessment and a clear explanation of your options."
      />
    </>
  );
}
