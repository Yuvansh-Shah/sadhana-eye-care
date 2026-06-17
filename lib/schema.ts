// Schema.org JSON-LD builders (PRD Section 10.2).

import { clinic, SITE_URL, fullAddress } from "./clinic";
import type { Service } from "./services";
import type { FaqItem } from "./faq";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
  addressLocality: clinic.address.city,
  addressRegion: clinic.address.region,
  postalCode: clinic.address.postalCode,
  addressCountry: "IN",
};

const sameAs = [
  clinic.social.instagram,
  clinic.social.facebook,
  clinic.social.linkedin,
  clinic.social.practo,
];

/** MedicalClinic schema for the homepage. */
export function medicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: clinic.name,
    url: SITE_URL,
    description: clinic.valueProp,
    telephone: clinic.phones,
    email: clinic.primaryEmail,
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.lat,
      longitude: clinic.geo.lng,
    },
    hasMap: `https://www.google.com/maps/place/?q=place_id:${clinic.googlePlaceId}`,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "10:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:30",
        closes: "15:00",
      },
    ],
    priceRange: "₹₹",
    medicalSpecialty: "Ophthalmologic",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.stats.googleRating,
      bestRating: "5",
      ratingCount: "35",
    },
    founder: { "@id": `${SITE_URL}/about#physician` },
    foundingDate: String(clinic.established),
    sameAs,
  };
}

/** Physician schema for the About page. */
export function physicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${SITE_URL}/about#physician`,
    name: clinic.doctor.name,
    url: `${SITE_URL}/about`,
    medicalSpecialty: "Ophthalmologic",
    address: postalAddress,
    telephone: clinic.primaryPhone,
    worksFor: { "@id": `${SITE_URL}/#clinic` },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Dr. D.Y. Patil Medical College and Hospital, Navi Mumbai",
      },
      {
        "@type": "EducationalOrganization",
        name: "College of Physicians and Surgeons, Mumbai",
      },
    ],
    memberOf: [
      { "@type": "MedicalOrganization", name: "All India Ophthalmological Society" },
      { "@type": "MedicalOrganization", name: "Maharashtra Ophthalmological Society" },
      { "@type": "MedicalOrganization", name: "Bombay Ophthalmologists' Association" },
    ],
    sameAs,
  };
}

/** FAQPage schema for the FAQ page. */
export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** MedicalProcedure schema for a service detail page. */
export function medicalProcedureSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    description: service.summary,
    url: `${SITE_URL}/services/${service.slug}`,
    procedureType: "https://schema.org/NoninvasiveProcedure",
    provider: {
      "@type": "MedicalClinic",
      name: clinic.name,
      address: fullAddress(),
    },
  };
}
