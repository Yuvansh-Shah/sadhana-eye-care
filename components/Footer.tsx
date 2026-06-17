import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "./SocialIcons";
import Logo from "./Logo";
import { footerLinks, legalLinks } from "@/lib/nav";
import {
  clinic,
  telHref,
  mailHref,
  fullAddress,
  whatsappHref,
} from "@/lib/clinic";

export default function Footer() {
  const year = new Date().getFullYear();
  const a = clinic.address;

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand + social */}
          <div className="lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
              {clinic.tagline}. Trusted eye care from {clinic.doctor.name} in
              Marine Lines since {clinic.established}.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href={clinic.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-lg bg-brand-800 transition-colors hover:bg-brand-700"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={clinic.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-lg bg-brand-800 transition-colors hover:bg-brand-700"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={clinic.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-lg bg-brand-800 transition-colors hover:bg-brand-700"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-lg bg-brand-800 transition-colors hover:bg-brand-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-200 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={clinic.social.practo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-200 transition-colors hover:text-white"
                >
                  Reviews on Practo
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Visit us
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <p className="flex gap-2.5 text-brand-200">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                <span>{fullAddress()}</span>
              </p>
              {clinic.phones.map((p) => (
                <a
                  key={p}
                  href={telHref(p)}
                  className="flex items-center gap-2.5 text-brand-200 transition-colors hover:text-white"
                >
                  <Phone
                    className="h-4 w-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  {p}
                </a>
              ))}
              <a
                href={mailHref(clinic.primaryEmail)}
                className="flex items-center gap-2.5 break-all text-brand-200 transition-colors hover:text-white"
              >
                <Mail
                  className="h-4 w-4 shrink-0 text-brand-400"
                  aria-hidden="true"
                />
                {clinic.primaryEmail}
              </a>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white">
              <Clock className="h-4 w-4 text-brand-400" aria-hidden="true" />
              Consultation hours
            </h2>
            <dl className="mt-4 space-y-2.5 text-sm">
              {clinic.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-3">
                  <dt className="text-brand-200">{h.day}</dt>
                  <dd className="text-right font-medium text-white">
                    {h.time}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-brand-300">
              {a.landmark}.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-800 pt-8">
          <p className="text-xs leading-relaxed text-brand-300">
            <span className="font-medium text-brand-200">
              Medical disclaimer:
            </span>{" "}
            Information on this site is general and educational. Consult{" "}
            {clinic.doctor.name} or your physician for diagnosis and treatment
            specific to your condition.
          </p>
          <nav
            aria-label="Legal"
            className="mt-5 flex flex-wrap gap-x-5 gap-y-2"
          >
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-brand-200 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {clinic.name}. All rights reserved.
            </p>
            <p>{clinic.doctor.mmcRegistration}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
