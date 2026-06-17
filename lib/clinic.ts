// Source-of-truth clinic data. Verified from Practo, the current website,
// Justdial, Lybrate and Google Business listings (PRD Section 2).

export const SITE_URL = "https://sadhanaeyecare.com";

export const clinic = {
  name: "Sadhana Eye Care",
  tagline: "Your Vision is Our Mission",
  established: 2003,
  specialistYears: 28,
  overallYears: 30,
  valueProp:
    "Premium eye care from Dr. Dipti Shah — 28 years specialising in cataract and LASIK surgery in the heart of Mumbai.",

  doctor: {
    name: "Dr. Dipti Shah",
    title: "Ophthalmologist & Eye Surgeon",
    mmcRegistration: "Maharashtra Medical Council — Reg. No. 80644",
  },

  address: {
    line1: "275, Princess Building, Ground Floor",
    line2: "Shamaldas Gandhi Marg, Princess Street",
    landmark: "Next to Parsi Dairy Farm, Opposite Marine Lines Station (East)",
    locality: "Marine Lines",
    city: "Mumbai",
    region: "Maharashtra",
    postalCode: "400002",
    country: "India",
  },

  phones: [
    "+91 22 2200 6767",
    "+91 22 2200 6868",
    "+91 22 6637 6260",
    "+91 22 6637 6362",
  ],
  primaryPhone: "+91 22 6637 6260",

  emails: ["sadhanaeyecare@gmail.com", "drdiptishah@sadhanaeyecare.com"],
  primaryEmail: "sadhanaeyecare@gmail.com",

  // WhatsApp number in international format, digits only (no + or spaces).
  // Confirmed clinic WhatsApp number: +91 81049 94482.
  whatsappNumber: "918104994482",

  geo: { lat: 18.9450506, lng: 72.8264561 },
  googlePlaceId: "ChIJRVR9ciHP5zsRX73CgdtSe9E",

  // Consultation timings displayed publicly. Confirm consult vs. clinic-open
  // hours with Dr. Shah before launch (PRD Section 2.5 / Open Question 1).
  hours: [
    { day: "Monday – Friday", time: "10:30 AM – 7:00 PM" },
    { day: "Saturday", time: "10:30 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  consultationFee: "₹1,500",

  stats: {
    googleRating: "4.7",
    practoRecommend: "98%",
    practoStories: "900+",
    instagramFollowers: "20K+",
  },

  social: {
    instagram: "https://www.instagram.com/eyecarebydrdiptishah/",
    instagramHandle: "@eyecarebydrdiptishah",
    facebook: "https://www.facebook.com/DrDiptiShah1",
    linkedin: "https://www.linkedin.com/in/dr-dipti-shah-93992976/",
    practo: "https://www.practo.com/mumbai/doctor/dr-dipti-shah-ophthalmologist-1",
  },
} as const;

/** Build a `tel:` href from a display phone number. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/** Build a `mailto:` href, optionally with a pre-filled subject. */
export function mailHref(email: string, subject?: string): string {
  return subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
}

/** Public Google Maps listing for the clinic. */
export function googleMapsUrl(): string {
  return `https://www.google.com/maps/place/?q=place_id:${clinic.googlePlaceId}`;
}

/** Build a WhatsApp chat link, optionally with a pre-filled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${clinic.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Google "write a review" deep link. */
export function googleReviewUrl(): string {
  return `https://search.google.com/local/writereview?placeid=${clinic.googlePlaceId}`;
}

/** No-API-key Google Maps embed URL for an <iframe>. */
export function googleMapsEmbed(): string {
  return `https://www.google.com/maps?q=${clinic.geo.lat},${clinic.geo.lng}&z=16&hl=en&output=embed`;
}

/** Single-line postal address. */
export function fullAddress(): string {
  const a = clinic.address;
  return `${a.line1}, ${a.line2}, ${a.landmark}, ${a.city} – ${a.postalCode}, ${a.region}, ${a.country}`;
}
