export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is your yoga school registered with Yoga Alliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, Hatha Yogashram is a registered Yoga School (RYS 200 & RYS 300) with Yoga Alliance USA. Upon successful completion, you'll be eligible to register as RYT 200 or RYT 500.",
      },
    },
    {
      '@type': 'Question',
      name: 'Which yoga philosophy texts will I study?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You'll study Patanjali's Yoga Sutras (all 196 sutras), Hatha Yoga Pradipika, selected chapters from Bhagavad Gita (2-6, 12), and introductions to Gheranda Samhita and Shiva Samhita. We provide English translations and Sanskrit pronunciation guides.",
      },
    },
    {
      '@type': 'Question',
      name: 'How many asanas will I learn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In 200-hour training: 42 classical Hatha Yoga asanas plus Ashtanga Primary Series. In 300-hour training: All 84 classical asanas mentioned in ancient texts plus Ashtanga Intermediate Series. Each asana is taught with proper alignment, benefits, contraindications, and Sanskrit names.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you teach Sanskrit mantras and chanting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, daily mantra chanting includes Gayatri Mantra, Shanti Mantras, Patanjali Invocation, and healing mantras. We teach proper Sanskrit pronunciation, meaning, and the vibrational benefits of each mantra.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Hatha and Ashtanga Yoga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hatha Yoga focuses on holding postures with breath awareness, suitable for all levels. Ashtanga Vinyasa is a dynamic practice linking breath with movement in set sequences. We teach both styles - Hatha for grounding and Ashtanga for building strength and stamina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which pranayama techniques are covered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic pranayamas: Nadi Shodhana, Bhramari, Sheetali, Kapalabhati, Bhastrika. Advanced techniques: Moorcha, Plavini, and pranayamas with bandhas. Each technique is taught with proper ratios, benefits, and safety guidelines.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is accommodation included in the course fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the course fee includes shared accommodation, three vegetarian meals daily, course materials, and yoga alliance certification.',
      },
    },
  ],
};
