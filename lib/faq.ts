// Patient-facing FAQ content. Plain-English, NMC-compliant — factual,
// with no outcome or success-rate claims.

export type FaqItem = { question: string; answer: string };
export type FaqCategory = { title: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    title: "General eye care",
    items: [
      {
        question: "How often should I get my eyes checked?",
        answer:
          "For most healthy adults, a complete eye examination every one to two years is reasonable. If you wear glasses or contact lenses, have diabetes, are over 40, or notice any change in vision, more frequent checks are advised. Dr. Shah will recommend an interval suited to you.",
      },
      {
        question: "At what age should a child have their first eye test?",
        answer:
          "Children benefit from an eye examination before starting school, and sooner if you notice squinting, sitting very close to screens, frequent headaches or a turned eye. Conditions such as lazy eye respond best to early treatment.",
      },
      {
        question: "My eyes feel dry and tired — should I see a doctor?",
        answer:
          "Persistent dryness, grittiness, watering or tired eyes are worth evaluating. A dry eye assessment can identify the cause and guide simple, effective management. Book a general eye check-up to have it looked at.",
      },
      {
        question: "Do I need a referral to book an appointment?",
        answer:
          "No referral is needed. You can request an appointment directly through this website, by calling the clinic, or via WhatsApp.",
      },
    ],
  },
  {
    title: "Cataract surgery",
    items: [
      {
        question: "How do I know if I have a cataract?",
        answer:
          "Common signs include gradually blurring or hazy vision, glare from lights, faded colours and needing more light to read. Only an eye examination can confirm a cataract — surgery is considered when it begins to affect your daily life.",
      },
      {
        question: "How long does cataract surgery take?",
        answer:
          "The surgery itself typically takes only 3–5 minutes per eye. It is performed as a day-care procedure under anaesthetic eye drops, and you go home the same day.",
      },
      {
        question: "When can I return to normal activities afterwards?",
        answer:
          "Vision usually starts to clear within a day or two. Many patients return to light routine work the next day, with most normal activities resumed within about a week. You will receive a personalised recovery plan.",
      },
      {
        question: "What type of lens (IOL) is right for me?",
        answer:
          "That depends on your eyes and your lifestyle. Options include standard monofocal lenses, Toric lenses for astigmatism, and Multifocal lenses that can reduce dependence on glasses. Dr. Shah will explain the choices honestly so you can decide.",
      },
    ],
  },
  {
    title: "LASIK",
    items: [
      {
        question: "Am I a suitable candidate for LASIK?",
        answer:
          "Suitability depends on your spectacle power, corneal thickness and shape, and overall eye health. A detailed LASIK screening is needed to confirm candidacy — and Dr. Shah will tell you directly if LASIK is not the right option for you.",
      },
      {
        question: "Is LASIK painful?",
        answer:
          "LASIK is performed under anaesthetic eye drops and is generally painless, though you may feel mild pressure during the procedure. Some dryness or scratchiness afterwards is normal and usually settles within a few weeks.",
      },
      {
        question:
          "What is the difference between Conventional, Customised and Bladeless LASIK?",
        answer:
          "Conventional LASIK uses a standard treatment profile; Customised (wavefront-guided) LASIK maps the treatment to your individual eye; and Bladeless LASIK uses a laser rather than a blade to create the corneal flap. The right approach is discussed at your screening.",
      },
    ],
  },
  {
    title: "Appointments, fees & insurance",
    items: [
      {
        question: "How do I book an appointment?",
        answer:
          "Use the appointment request form on the Contact page, call the clinic, or message us on WhatsApp. The clinic will call you back to confirm a time within one business day.",
      },
      {
        question: "What are the consultation fees?",
        answer:
          "Consultation fees and surgery cost estimates are best discussed directly, as they depend on the examination and procedure involved. Please call the clinic and the team will be glad to help.",
      },
      {
        question: "Do you provide insurance papers?",
        answer:
          "Yes. The clinic issues all insurance company reimbursement papers to support your claim. Credit and debit cards are accepted alongside cash and digital payment.",
      },
      {
        question: "Is there usually a long wait at the clinic?",
        answer:
          "No — punctuality is something patients consistently mention in their reviews. Appointment times are respected and waiting is kept to a minimum.",
      },
    ],
  },
];

export const allFaqItems: FaqItem[] = faqCategories.flatMap((c) => c.items);
