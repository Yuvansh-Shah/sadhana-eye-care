import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Train } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import PageHero from "@/components/PageHero";
import MapEmbed from "@/components/MapEmbed";
import CopyButton from "@/components/CopyButton";
import AppointmentForm from "@/components/AppointmentForm";
import { WhatsAppIcon } from "@/components/SocialIcons";
import {
  clinic,
  telHref,
  mailHref,
  fullAddress,
  googleMapsUrl,
  whatsappHref,
} from "@/lib/clinic";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Contact Sadhana Eye Care in Marine Lines, Mumbai — address, phone numbers, clinic hours, directions and an appointment request form.",
  alternates: { canonical: "/contact" },
};

const a = clinic.address;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lead="Visit the clinic, call us, or request an appointment online — whichever is easiest for you."
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Details + map */}
      <Section tint="white">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            {/* Address */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    Clinic address
                  </h2>
                  <address className="mt-1 text-sm not-italic leading-relaxed text-brand-700/90">
                    {a.line1}
                    <br />
                    {a.line2}
                    <br />
                    {a.landmark}
                    <br />
                    {a.city} – {a.postalCode}, {a.region}, {a.country}
                  </address>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <CopyButton text={fullAddress()} />
                    <a
                      href={googleMapsUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phones */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    Call the clinic
                  </h2>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                    {clinic.phones.map((p) => (
                      <li key={p}>
                        <a
                          href={telHref(p)}
                          className="font-medium text-brand-700 hover:underline"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappHref(
                      "Hello, I would like to enquire about an appointment at Sadhana Eye Care.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    Email
                  </h2>
                  <ul className="mt-2 space-y-1.5">
                    {clinic.emails.map((e) => (
                      <li key={e}>
                        <a
                          href={mailHref(
                            e,
                            "Appointment enquiry — Sadhana Eye Care",
                          )}
                          className="break-all font-medium text-brand-700 hover:underline"
                        >
                          {e}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="w-full">
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    Consultation hours
                  </h2>
                  <dl className="mt-2 divide-y divide-brand-100">
                    {clinic.hours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between gap-3 py-2 text-sm"
                      >
                        <dt className="text-brand-600">{h.day}</dt>
                        <dd className="font-medium text-brand-900">
                          {h.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Map + directions */}
          <div className="space-y-6">
            <div className="h-80 overflow-hidden rounded-2xl border border-brand-100 lg:h-[420px]">
              <MapEmbed />
            </div>
            <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600">
                  <Train className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-lg font-semibold text-brand-900">
                    Finding us
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-700/90">
                    Sadhana Eye Care is on the ground floor of Princess
                    Building, Princess Street — directly opposite Marine Lines
                    Station (East) and next to the landmark Parsi Dairy Farm.
                    Marine Lines Station is the easiest reference point if you
                    are arriving by train.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Appointment form */}
      <Section tint="sand" id="appointment">
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Appointments"
              title="Request an appointment"
              lead="Fill in the form and the clinic will call you to confirm a time within one business day."
            />
            <div className="mt-8">
              <AppointmentForm />
            </div>
          </div>
          <div className="lg:pt-4">
            <div className="rounded-2xl border border-brand-100 bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-brand-900">
                Prefer to call?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-700/90">
                The clinic team is happy to help you book over the phone during
                consultation hours.
              </p>
              <a
                href={telHref(clinic.primaryPhone)}
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-600 font-semibold text-white transition-colors hover:bg-brand-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {clinic.primaryPhone}
              </a>
              <dl className="mt-5 divide-y divide-brand-100 border-t border-brand-100 pt-2">
                {clinic.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-3 py-2 text-sm"
                  >
                    <dt className="text-brand-600">{h.day}</dt>
                    <dd className="font-medium text-brand-900">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-brand-600">
              For urgent eye concerns, please call the clinic directly rather
              than waiting for a form response.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
