// Service content (PRD Section 2.3 and 5.3). Plain-English, patient-facing,
// and NMC-compliant — factual procedure descriptions, no outcome claims.

export type ServiceIcon =
  | "Sparkles"
  | "ScanEye"
  | "Gauge"
  | "Droplets"
  | "Eye";

export type ProcedureStep = { title: string; detail: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: ServiceIcon;
  /** Photo shown on the service detail page. */
  image: string;
  /** One-line summary for cards and previews. */
  summary: string;
  /** Lead paragraph on the detail page. */
  intro: string;
  whatItIs: string[];
  whatToExpect: ProcedureStep[];
  whyHere: string[];
  recovery: string;
  related: string[];
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "cataract-surgery",
    name: "Cataract Surgery",
    shortName: "Cataract Surgery",
    icon: "Sparkles",
    image: "/images/cataract-surgery.jpg",
    summary:
      "Phacoemulsification with foldable intraocular lenses — a quick, blade-free day procedure to restore clear vision.",
    intro:
      "Cataract surgery is the most performed procedure at Sadhana Eye Care. Dr. Shah uses phacoemulsification with foldable intraocular lens (IOL) implantation, and offers robotic / femtosecond laser-assisted surgery for added precision.",
    whatItIs: [
      "A cataract is a clouding of the eye's natural lens that develops gradually with age, causing blurred vision, glare and faded colours. Surgery is the only effective treatment.",
      "During phacoemulsification, the cloudy lens is gently broken up using ultrasound and removed through a tiny self-sealing incision. A clear, foldable artificial lens (IOL) is then placed in its position.",
      "Robotic / femtosecond laser-assisted cataract surgery uses a computer-guided laser for key steps of the procedure. The surgery itself typically takes only 3–5 minutes per eye.",
      "Premium IOLs are available to suit your lifestyle: Toric lenses correct astigmatism (cylindrical power), and Multifocal lenses can reduce or remove the need for spectacles after surgery.",
    ],
    whatToExpect: [
      {
        title: "Consultation & measurements",
        detail:
          "A complete eye examination and precise biometry — axial length and corneal curvature — to calculate the correct IOL power and discuss lens options.",
      },
      {
        title: "Day of surgery",
        detail:
          "The procedure is performed under local anaesthetic eye drops as day-care surgery. Most patients are at the clinic for only a few hours and go home the same day.",
      },
      {
        title: "The procedure",
        detail:
          "Phacoemulsification removes the cataract through a micro-incision and a foldable IOL is implanted. Routine cases need no injection and no stitches.",
      },
      {
        title: "After surgery",
        detail:
          "You are given eye drops and simple precautions, with a follow-up scheduled for the next day.",
      },
    ],
    whyHere: [
      "28 years of surgical experience focused on cataract and refractive surgery.",
      "Phacoemulsification and robotic / femtosecond laser-assisted technique.",
      "Full range of premium IOLs — Toric and Multifocal — fitted to your visual needs.",
      "Accurate IOL power planning with Accutome A-Scan immersion biometry and NIDEK auto keratometry.",
      "Honest, unhurried counselling so you understand your lens choices before deciding.",
    ],
    recovery:
      "Vision usually begins to clear within a day or two. Many patients return to light routine work the next day, with most normal activities resumed within a week. Dr. Shah will give you a personalised recovery plan and follow-up schedule.",
    related: ["lasik", "general-eye-care"],
    featured: true,
  },
  {
    slug: "lasik",
    name: "LASIK Eye Surgery",
    shortName: "LASIK",
    icon: "ScanEye",
    image: "/images/dr-shah-examination.jpg",
    summary:
      "Conventional, Customised and Bladeless LASIK to reduce dependence on glasses and contact lenses.",
    intro:
      "LASIK is a refractive procedure that reshapes the cornea to correct short-sightedness, long-sightedness and astigmatism — reducing or removing the need for glasses and contact lenses.",
    whatItIs: [
      "LASIK (Laser-Assisted In Situ Keratomileusis) gently reshapes the front surface of the eye — the cornea — so that light focuses correctly on the retina.",
      "Several approaches are offered: Conventional LASIK, Customised (wavefront-guided) LASIK for a treatment mapped to your individual eye, and Bladeless LASIK, where a laser rather than a blade creates the corneal flap.",
      "Not every eye is suitable for LASIK. A detailed screening determines whether your cornea, refractive error and overall eye health make you a good candidate.",
    ],
    whatToExpect: [
      {
        title: "LASIK screening",
        detail:
          "A thorough assessment of your spectacle power, corneal thickness (pachymetry), corneal shape and tear film to confirm candidacy and choose the right technique.",
      },
      {
        title: "The procedure",
        detail:
          "LASIK is performed under anaesthetic eye drops and takes only a few minutes per eye. It is painless, though you may feel mild pressure.",
      },
      {
        title: "Same-day discharge",
        detail:
          "You go home the same day with protective advice and eye drops. Arrange for someone to accompany you.",
      },
      {
        title: "Follow-up",
        detail:
          "Reviews over the following days and weeks confirm your vision is settling as expected.",
      },
    ],
    whyHere: [
      "Careful, honest candidacy screening — Dr. Shah will tell you directly if LASIK is not right for you.",
      "Conventional, Customised and Bladeless options matched to your eyes.",
      "Corneal thickness measured with an Accutome pachymeter for safe planning.",
      "Couples and family members are routinely treated together — see our patient reviews.",
    ],
    recovery:
      "Most people notice clearer vision within 24 hours. Mild dryness, glare or haloes can occur initially and usually settle over a few weeks. You will be advised on screen time, eye protection and follow-up visits.",
    related: ["cataract-surgery", "general-eye-care"],
    featured: true,
  },
  {
    slug: "glaucoma",
    name: "Glaucoma Evaluation & Treatment",
    shortName: "Glaucoma Care",
    icon: "Gauge",
    image: "/images/dr-shah-examination.jpg",
    summary:
      "Screening and management of glaucoma — the 'silent thief of sight' — with non-contact tonometry and fundus imaging.",
    intro:
      "Glaucoma is a group of conditions that damage the optic nerve, often silently. Early detection and steady management are the keys to protecting your sight.",
    whatItIs: [
      "Glaucoma usually develops without pain or early symptoms, gradually narrowing peripheral vision. Once vision is lost it cannot be recovered — which is why screening matters.",
      "Risk rises with age, a family history of glaucoma, diabetes, raised eye pressure and certain refractive errors.",
      "Evaluation includes measuring intraocular pressure, examining the optic nerve and assessing the drainage angle of the eye.",
    ],
    whatToExpect: [
      {
        title: "Pressure check",
        detail:
          "Intraocular pressure is measured quickly and comfortably with a Keeler non-contact (air-puff) tonometer.",
      },
      {
        title: "Corneal thickness",
        detail:
          "Central corneal thickness is measured with a pachymeter, as it influences how pressure readings are interpreted.",
      },
      {
        title: "Optic nerve assessment",
        detail:
          "The optic nerve and retina are examined, with fundus imaging on the Forus 3nethra camera to document and monitor changes.",
      },
      {
        title: "Ongoing management",
        detail:
          "If glaucoma is found, a treatment plan — typically eye drops — is started, with regular reviews to keep eye pressure controlled.",
      },
    ],
    whyHere: [
      "Non-contact tonometry — no drops and no instrument touches the eye for pressure testing.",
      "Pachymetry for accurate interpretation of eye pressure.",
      "Fundus imaging to document the optic nerve and track it over time.",
      "Long-term, consistent follow-up with the same doctor who knows your eyes.",
    ],
    recovery:
      "Glaucoma screening is quick and needs no recovery time. If treatment is required it is usually long-term — Dr. Shah will explain your drops and the importance of regular monitoring.",
    related: ["diabetic-eye-care", "general-eye-care"],
    featured: true,
  },
  {
    slug: "diabetic-eye-care",
    name: "Diabetic Eye Care",
    shortName: "Diabetic Eye Care",
    icon: "Droplets",
    image: "/images/clinic-equipment.jpg",
    summary:
      "Retinal screening for diabetic eye disease using a non-mydriatic fundus camera.",
    intro:
      "Diabetes can quietly affect the blood vessels of the retina. Regular eye screening allows diabetic retinopathy to be caught early, when it is most treatable.",
    whatItIs: [
      "Diabetic retinopathy occurs when raised blood sugar damages the tiny blood vessels at the back of the eye. In its early stages it often causes no symptoms at all.",
      "Everyone with diabetes — Type 1 or Type 2 — should have their retina examined regularly, even if their vision feels normal.",
      "Screening can also detect diabetic macular oedema, the swelling of the central retina that is a common cause of reduced vision in people with diabetes.",
    ],
    whatToExpect: [
      {
        title: "Retinal imaging",
        detail:
          "The retina is photographed with a Forus 3nethra Classic non-mydriatic fundus camera — in many cases without the need for dilating drops.",
      },
      {
        title: "Examination",
        detail:
          "Dr. Shah examines the retinal images and the eye for signs of retinopathy, bleeding or swelling.",
      },
      {
        title: "Vision & pressure check",
        detail:
          "A general check of vision and eye pressure is included, as diabetes also raises the risk of cataract and glaucoma.",
      },
      {
        title: "Plan & review interval",
        detail:
          "You receive clear advice and a recommended interval for your next screening, coordinated with your diabetes care.",
      },
    ],
    whyHere: [
      "Non-mydriatic fundus camera — screening is quick and often avoids dilating drops.",
      "Imaging is documented so year-on-year changes can be compared.",
      "Joined-up checks for the cataract and glaucoma risks that accompany diabetes.",
      "Plain-language explanation of what your retina shows and what to do next.",
    ],
    recovery:
      "Screening itself needs no recovery. If dilating drops are used, vision may be blurred and light-sensitive for a few hours, so arrange not to drive immediately afterwards.",
    related: ["glaucoma", "general-eye-care"],
    featured: false,
  },
  {
    slug: "general-eye-care",
    name: "General Eye Care",
    shortName: "General Eye Care",
    icon: "Eye",
    image: "/images/dr-shah-examination.jpg",
    summary:
      "Complete eye check-ups, refraction, paediatric exams, dry eye assessment, contact lens and spectacle prescriptions.",
    intro:
      "A complete eye examination does more than update your glasses — it is a health check for your eyes. Sadhana Eye Care looks after every age, from children to seniors.",
    whatItIs: [
      "A general eye check-up assesses your vision, refraction (spectacle power), eye pressure and the overall health of the front and back of the eye.",
      "Paediatric eye examinations check children for refractive errors, squint and lazy eye (amblyopia) — conditions best treated early.",
      "Dry eye evaluation identifies why your eyes feel gritty, tired or watery, and guides the right management.",
      "We also provide accurate contact lens fitting and prescriptions, and spectacle prescriptions, supported by automated refraction equipment.",
    ],
    whatToExpect: [
      {
        title: "Vision & refraction",
        detail:
          "Vision is measured and refraction performed with a NIDEK auto refractometer and phoropter for an accurate, comfortable spectacle prescription.",
      },
      {
        title: "Eye health examination",
        detail:
          "A Carl Zeiss slit lamp is used to examine the cornea, lens and other structures; eye pressure is checked where appropriate.",
      },
      {
        title: "Tailored advice",
        detail:
          "Whether you need glasses, contact lenses, dry eye treatment or simply reassurance, you receive clear guidance.",
      },
      {
        title: "Onward care",
        detail:
          "If anything needs closer attention — such as cataract, glaucoma or a retinal concern — the next steps are explained and arranged.",
      },
    ],
    whyHere: [
      "Care for the whole family, including children's eye examinations.",
      "Fully automated refraction for precise, repeatable spectacle prescriptions.",
      "Contact lens fitting and power measurement on a NIDEK projection lensometer.",
      "Punctual appointments — patients consistently note there is little to no waiting.",
    ],
    recovery:
      "A routine examination needs no recovery time. If your eyes are dilated for a detailed retinal check, vision may be blurred for a few hours.",
    related: ["cataract-surgery", "glaucoma"],
    featured: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const featuredServices = services.filter((s) => s.featured);
