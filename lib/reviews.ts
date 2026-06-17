// Patient reviews.
//
// The Google reviews below are the verified snapshot captured in the PRD
// (Section 6.1, Option C static fallback). When a Google Places API key is
// available, replace `googleReviews` with a server-side fetch (24h ISR).
//
// Practo holds 900+ verified patient stories. Per PRD Section 6.3 and the
// compliance note in Section 12, we link out to Practo rather than replicate
// reviews, and do not publish new testimonials without patient consent.
// Curated Practo testimonials may be added here later, each with explicit
// consent and "Source: Practo" attribution.

export type Review = {
  quote: string;
  author: string;
  rating: number;
  source: "Google";
};

export const googleReviews: Review[] = [
  {
    quote:
      "Doc is genuinely nice and professional. Everything was well explained to me. My eye problem was correctly diagnosed and treated in time. Also bought my new lens and frame from there. Highly recommended!",
    author: "Google reviewer",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Fantastic experience with Dr. Dipti Shah and the team! Friendly staff, thorough exam, and great selection of frames. I felt well cared for and informed about my eye health. Highly recommend!",
    author: "Google reviewer",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Dr. Dipti Shah is an excellent doctor, one of the best ophthalmologists in Mumbai. She will understand your case with utmost attention and go in depth to help find the root cause and treat it. The biggest plus is she will be extremely honest with you.",
    author: "Karan S.",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Dr. Dipti Shah at Sadhana Eye Care is by far the best eye care centre in Mumbai. My husband and I both got our LASIK surgery done there and we were incredibly pleased with the care and treatment we received from Dr. Dipti and her team.",
    author: "Falguni M.",
    rating: 5,
    source: "Google",
  },
  {
    quote:
      "Dr. Dipti Shah is an excellent eye surgeon. She explains everything in so much detail that one feels comfortable being under her treatment.",
    author: "Umesh S.",
    rating: 5,
    source: "Google",
  },
];

// Themes consistently echoed across patient reviews (PRD Section 2.7).
export type PatientTheme = {
  title: string;
  detail: string;
  quote: string;
};

export const patientThemes: PatientTheme[] = [
  {
    title: "Honest & direct",
    detail:
      "Dr. Shah gives you a straight answer about your eyes and your options — including when a procedure is not needed.",
    quote: "“She will be extremely honest with you.”",
  },
  {
    title: "Patient & thorough",
    detail:
      "Conditions are explained in simple language, with time taken to go in depth so you understand your diagnosis.",
    quote: "“Explains things in simple language and goes in depth.”",
  },
  {
    title: "Caring & empathetic",
    detail:
      "Patients describe a warm, reassuring experience from the doctor and the clinic team alike.",
    quote:
      "“One of the most caring, intelligent, empathetic and loving doctors you will ever meet.”",
  },
  {
    title: "Punctual",
    detail:
      "Appointments run on time — patients repeatedly note there is little to no waiting.",
    quote: "“No wait time — true to the appointment time.”",
  },
];
