import {
  CalendarCheck,
  Phone,
  ArrowRight,
  Star,
  UserRound,
  MapPin,
  Clock,
  Microscope,
  ShieldCheck,
  Award,
  HeartHandshake,
  FileText,
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { Section, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import TrustStrip from "@/components/TrustStrip";
import ServiceCard from "@/components/ServiceCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import InstagramReels from "@/components/InstagramReels";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MapEmbed from "@/components/MapEmbed";
import JsonLd from "@/components/JsonLd";
import { featuredServices } from "@/lib/services";
import { googleReviews } from "@/lib/reviews";
import {
  clinic,
  telHref,
  fullAddress,
  googleMapsUrl,
  googleReviewUrl,
} from "@/lib/clinic";
import { medicalClinicSchema } from "@/lib/schema";

const equipmentBrands = ["Carl Zeiss", "NIDEK", "Keeler", "Accutome", "Forus"];

const whyPoints = [
  {
    icon: UserRound,
    title: "One doctor, every visit",
    detail:
      "You see Dr. Dipti Shah herself at every appointment — no rotating staff, no handovers.",
  },
  {
    icon: Award,
    title: "28 years, surgically focused",
    detail:
      "Nearly three decades of experience, with a clinical focus on cataract and LASIK surgery.",
  },
  {
    icon: HeartHandshake,
    title: "Honest, unhurried advice",
    detail:
      "A straight answer and only the care you genuinely need — patients consistently say so.",
  },
  {
    icon: Clock,
    title: "On time, every time",
    detail:
      "Appointments run punctually, with little to no waiting-room time.",
  },
  {
    icon: Microscope,
    title: "Modern diagnostics",
    detail:
      "Trusted instruments from Carl Zeiss, NIDEK and Keeler for precise diagnosis and planning.",
  },
  {
    icon: FileText,
    title: "Insurance papers issued",
    detail:
      "All insurance reimbursement papers are provided, and cards are accepted.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={medicalClinicSchema()} />

      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-5 pb-14 pt-12 sm:px-8 sm:pb-20 sm:pt-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-700">
                Sadhana Eye Care · Ophthalmologist in Marine Lines
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
                Your Vision is Our Mission
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-700/90">
                {clinic.valueProp}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact#appointment" variant="primary" size="lg">
                  <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                  Book an Appointment
                </Button>
                <Button
                  href={telHref(clinic.primaryPhone)}
                  variant="secondary"
                  size="lg"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call {clinic.primaryPhone}
                </Button>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-brand-600">
                <ShieldCheck
                  className="h-4 w-4 text-accent-600"
                  aria-hidden="true"
                />
                Honest advice · Appointments on time · Insurance papers issued
              </p>
            </div>

            <div className="relative">
              <ImagePlaceholder
                label="Dr. Dipti Shah examining a patient at Sadhana Eye Care"
                src="/images/dr-shah-examination.jpg"
                icon={UserRound}
                aspect="wide"
                priority
                className="mx-auto max-w-sm lg:max-w-none"
              />
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-lg sm:left-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-50">
                  <Star
                    className="h-6 w-6 fill-accent-400 text-accent-400"
                    aria-hidden="true"
                  />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-xl font-semibold text-brand-900">
                    {clinic.stats.googleRating} on Google
                  </span>
                  <span className="text-sm text-brand-600">
                    Trusted by patients across Mumbai
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm sm:mt-12">
            <TrustStrip />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <Section tint="white">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="What we treat"
            title="Comprehensive eye care, under one roof"
            lead="From routine check-ups to advanced cataract and LASIK surgery — every service is delivered personally by Dr. Dipti Shah."
          />
          <Button href="/services" variant="secondary" size="md">
            All services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>

      {/* Why Sadhana Eye Care */}
      <Section tint="brand">
        <SectionHeading
          eyebrow="Why Sadhana Eye Care"
          title="The reasons patients choose us"
          lead="What sets the clinic apart isn't a slogan — it's how care is actually delivered, every single visit."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-brand-100 bg-white p-6"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <point.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">
                {point.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-700/90">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* About snapshot */}
      <Section tint="sand">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <ImagePlaceholder
            label="Dr. Dipti Shah performing cataract surgery"
            src="/images/cataract-surgery.jpg"
            icon={UserRound}
            aspect="wide"
            tone="sand"
          />
          <div>
            <SectionHeading
              eyebrow="Meet your doctor"
              title="Dr. Dipti Shah"
            />
            <p className="mt-4 leading-relaxed text-brand-700/90">
              Dr. Dipti Shah has cared for the eyes of Mumbai since founding
              Sadhana Eye Care in {clinic.established}. With{" "}
              {clinic.specialistYears} years as a specialist ophthalmologist,
              she is known for honest, unhurried consultations and a calm,
              precise approach to surgery.
            </p>
            <p className="mt-3 leading-relaxed text-brand-700/90">
              Patients consistently describe care that is thorough, clearly
              explained and genuinely kind — backed by 900+ verified stories on
              Practo and a 4.7-star rating on Google.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-brand-700">
              <span>MBBS · DOMS</span>
              <span>{clinic.doctor.mmcRegistration}</span>
            </div>
            <div className="mt-7">
              <Button href="/about" variant="secondary" size="md">
                Read full bio
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section tint="white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Patient reviews"
            title="What patients say"
            lead="Genuine reviews from Google — see hundreds more on Practo and Google."
          />
          <div className="flex items-center gap-1.5 text-brand-700">
            <Star
              className="h-5 w-5 fill-accent-400 text-accent-400"
              aria-hidden="true"
            />
            <span className="font-semibold">
              {clinic.stats.googleRating} average on Google
            </span>
          </div>
        </div>
        <div className="mt-10">
          <ReviewCarousel reviews={googleReviews} />
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={googleMapsUrl()} variant="secondary" size="md">
            Read all reviews on Google
          </Button>
          <Button href={googleReviewUrl()} variant="ghost" size="md">
            Write a review
          </Button>
          <Button href="/reviews" variant="ghost" size="md">
            More patient stories
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      {/* Instagram */}
      <Section tint="brand">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Eye care, explained"
            title="Follow Dr. Shah on Instagram"
            lead={`Bite-sized, easy-to-understand eye-care education — join ${clinic.stats.instagramFollowers} followers at ${clinic.social.instagramHandle}.`}
          />
          <Button href={clinic.social.instagram} variant="primary" size="md">
            <InstagramIcon className="h-4 w-4" />
            Follow on Instagram
          </Button>
        </div>
        <div className="mt-10">
          <InstagramReels />
        </div>
      </Section>

      {/* Technology highlight */}
      <Section tint="brand-dark">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Technology"
              title="State-of-the-art diagnostic equipment"
              tone="light"
              lead="Accurate diagnosis and surgical planning depend on precise instruments. Sadhana Eye Care is equipped with trusted technology from the world's leading manufacturers."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {equipmentBrands.map((brand) => (
                <span
                  key={brand}
                  className="rounded-full border border-brand-700 bg-brand-800 px-3.5 py-1.5 text-sm font-medium text-brand-100"
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-7">
              <Button href="/technology" variant="primary" size="md">
                Explore our technology
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
          <ImagePlaceholder
            label="Diagnostic equipment at Sadhana Eye Care"
            src="/images/clinic-equipment.jpg"
            icon={Microscope}
            aspect="wide"
          />
        </div>
      </Section>

      {/* Contact strip */}
      <Section tint="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Visit the clinic"
              title="In the heart of Marine Lines"
              lead="Opposite Marine Lines Station (East), next to Parsi Dairy Farm — easy to reach by train or road."
            />
            <dl className="mt-6 space-y-4 text-brand-800">
              <div className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                  aria-hidden="true"
                />
                <dd>{fullAddress()}</dd>
              </div>
              <div className="flex gap-3">
                <Clock
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                  aria-hidden="true"
                />
                <dd>
                  {clinic.hours.map((h) => (
                    <span key={h.day} className="block">
                      <span className="font-medium">{h.day}:</span> {h.time}
                    </span>
                  ))}
                </dd>
              </div>
              <div className="flex gap-3">
                <Phone
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                  aria-hidden="true"
                />
                <dd>
                  <a
                    href={telHref(clinic.primaryPhone)}
                    className="font-medium text-brand-700 hover:underline"
                  >
                    {clinic.primaryPhone}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact#appointment" variant="primary" size="lg">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                Book an Appointment
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Directions &amp; contact
              </Button>
            </div>
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-brand-100">
            <MapEmbed />
          </div>
        </div>
      </Section>
    </>
  );
}
