// Diagnostic and surgical equipment at the clinic (PRD Section 5.4).

export type Equipment = {
  name: string;
  manufacturer: string;
  origin: string;
  purpose: string;
};

export const equipment: Equipment[] = [
  {
    name: "Phoropter RT2100",
    manufacturer: "NIDEK",
    origin: "Japan",
    purpose:
      "Fully automatic refractor for fast, precise evaluation of refractive error when prescribing glasses.",
  },
  {
    name: "Projection Lensometer LM-990",
    manufacturer: "NIDEK",
    origin: "Japan",
    purpose:
      "Measures the power of existing spectacles and contact lenses accurately.",
  },
  {
    name: "Auto Refractometer ARK-600A",
    manufacturer: "NIDEK",
    origin: "Japan",
    purpose:
      "Automated refraction with a printed report, giving a reliable starting point for the spectacle prescription.",
  },
  {
    name: "Auto Keratometer",
    manufacturer: "NIDEK",
    origin: "Japan",
    purpose:
      "Measures corneal curvature — essential data for cataract surgery and LASIK planning.",
  },
  {
    name: "Slit Lamp SL-30",
    manufacturer: "Carl Zeiss",
    origin: "Germany",
    purpose:
      "High-magnification examination of the cornea, lens, iris, drainage angle and retina.",
  },
  {
    name: "A-Scan Biometer",
    manufacturer: "Accutome (BVI)",
    origin: "France",
    purpose:
      "Ultrasonic axial-length measurement with immersion technology for accurate IOL power calculation.",
  },
  {
    name: "3nethra Classic Fundus Camera",
    manufacturer: "Forus Health",
    origin: "India",
    purpose:
      "Non-mydriatic fundus camera for diabetic retinopathy, glaucoma screening and dry eye assessment.",
  },
  {
    name: "Non-Contact Tonometer",
    manufacturer: "Keeler",
    origin: "England",
    purpose:
      "Air-puff measurement of intraocular pressure for glaucoma screening — no instrument touches the eye.",
  },
  {
    name: "Pachymeter",
    manufacturer: "Accutome",
    origin: "USA",
    purpose:
      "Measures central corneal thickness for glaucoma assessment and LASIK candidacy screening.",
  },
];
