// Schema for ancient yoga masters and their teachings
export const mastersSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Hatha Yogashram - Ancient Masters Lineage',
  description:
    'Traditional yoga education following the lineage of ancient masters: Sage Vashishta, Lord Shiva (Adiyogi), and Maharishi Patanjali',
  teaches: [
    {
      '@type': 'Course',
      name: 'Yoga Vashishta Philosophy',
      description:
        "Deep study of Sage Vashishta's teachings on consciousness, reality, and liberation through the Yoga Vashishta Ramayana",
      courseCode: 'YV-101',
      educationalLevel: 'Advanced',
      teaches: [
        'Consciousness and reality according to Vashishta',
        'Non-dual philosophy and practical application',
        'Stories and parables for spiritual awakening',
        'Meditation techniques from ancient tradition',
      ],
    },
    {
      '@type': 'Course',
      name: 'Shiva Yoga and Adiyogi Teachings',
      description:
        'Traditional practices honoring Lord Shiva as the first yogi (Adiyogi) and source of all yogic knowledge',
      courseCode: 'SY-101',
      educationalLevel: 'Intermediate to Advanced',
      teaches: [
        '112 meditation techniques from Vigyan Bhairav Tantra',
        'Shiva Tandava and cosmic dance principles',
        'Nataraja symbolism in yoga practice',
        'Tantric approach to consciousness expansion',
      ],
    },
    {
      '@type': 'Course',
      name: 'Patanjali Raja Yoga Mastery',
      description:
        "Comprehensive study of Maharishi Patanjali's Yoga Sutras and the eight-limbed path of classical yoga",
      courseCode: 'PY-101',
      educationalLevel: 'All Levels',
      teaches: [
        'Complete commentary on 196 yoga sutras',
        'Eight limbs (Ashtanga) practical application',
        'Classical meditation and samadhi states',
        'Sanskrit study and mantra practice',
      ],
    },
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Sage Vashishta',
      description:
        'Ancient Vedic sage and one of the Saptarishis (seven great sages), author of Yoga Vashishta',
      knowsAbout: [
        'Non-dual philosophy (Advaita)',
        'Consciousness studies',
        'Spiritual psychology',
        'Liberation philosophy',
      ],
    },
    {
      '@type': 'Person',
      name: 'Lord Shiva (Adiyogi)',
      description:
        'The first yogi and source of all yogic knowledge, destroyer of ignorance and transformer of consciousness',
      knowsAbout: [
        '112 meditation techniques',
        'Tantric philosophy',
        'Cosmic consciousness',
        'Transformation and liberation',
      ],
    },
    {
      '@type': 'Person',
      name: 'Maharishi Patanjali',
      description:
        'Compiler of the Yoga Sutras, father of classical yoga philosophy and the eight-limbed path',
      knowsAbout: [
        'Classical yoga philosophy',
        'Eight-limbed path (Ashtanga)',
        'Meditation and samadhi',
        'Mind and consciousness',
      ],
    },
  ],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Traditional Yoga Lineage',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Ancient Vedic Tradition',
    },
  },
};

export const classicalTextsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Classical Yoga Texts Study Program',
  description:
    'Comprehensive study of ancient yoga scriptures and their practical application in modern life',
  author: [
    {
      '@type': 'Person',
      name: 'Sage Vashishta',
      sameAs: 'https://en.wikipedia.org/wiki/Vashishtha',
    },
    {
      '@type': 'Person',
      name: 'Maharishi Patanjali',
      sameAs: 'https://en.wikipedia.org/wiki/Patanjali',
    },
    {
      '@type': 'Person',
      name: 'Swatmarama',
      description: 'Author of Hatha Yoga Pradipika',
    },
  ],
  about: [
    {
      '@type': 'Thing',
      name: 'Yoga Vashishta Ramayana',
      description:
        'Epic philosophical text on consciousness, reality, and spiritual liberation through dialogue between Sage Vashishta and Prince Rama',
    },
    {
      '@type': 'Thing',
      name: 'Hatha Yoga Pradipika',
      description: 'Classical manual of Hatha Yoga covering asanas, pranayama, mudras, and samadhi',
    },
    {
      '@type': 'Thing',
      name: 'Patanjali Yoga Sutras',
      description:
        'Foundational text of classical yoga outlining the eight-limbed path to spiritual realization',
    },
    {
      '@type': 'Thing',
      name: 'Shiva Samhita',
      description: 'Tantric text on yoga philosophy, practices, and the nature of consciousness',
    },
  ],
  teaches: [
    'Ancient wisdom for modern practitioners',
    'Philosophical foundations of yoga',
    'Meditation techniques from classical sources',
    'Sanskrit terminology and mantras',
    'Practical application of ancient teachings',
  ],
};

export const dhyanaSchema = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Classical Dhyana Meditation Mastery',
  description:
    'Traditional meditation practices from ancient yoga masters, focusing on dharana, dhyana, and samadhi states',
  courseCode: 'DM-101',
  educationalLevel: 'All Levels',
  duration: 'P6M', // 6 months
  teaches: [
    {
      '@type': 'LearningResource',
      name: 'Dharana (Concentration) Practices',
      description: 'Single-pointed focus techniques from classical yoga tradition',
      teaches: [
        'Trataka (candle gazing meditation)',
        'Breath awareness concentration',
        'Mantra-based dharana',
        'Chakra concentration techniques',
      ],
    },
    {
      '@type': 'LearningResource',
      name: 'Dhyana (Meditation) States',
      description: 'Effortless flow of awareness leading to meditative absorption',
      teaches: [
        'Witness consciousness development',
        'Thought observation without attachment',
        'Silent mind cultivation',
        'Inner awareness expansion',
      ],
    },
    {
      '@type': 'LearningResource',
      name: 'Samadhi (Absorption) Experiences',
      description: 'Ultimate goal of yoga - union of individual and universal consciousness',
      teaches: [
        'Savikalpa samadhi with object',
        'Nirvikalpa samadhi without form',
        'Sahaja samadhi in daily life',
        'Progressive stages of realization',
      ],
    },
  ],
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Hatha Yogashram',
    url: 'https://hathayogashram.com',
  },
  offers: {
    '@type': 'Offer',
    price: '1500',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};
