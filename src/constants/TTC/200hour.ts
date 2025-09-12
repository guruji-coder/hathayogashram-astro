// ===========================================
// 200 HOUR YOGA TEACHER TRAINING CONSTANTS
// ===========================================

export const TRAINING_200_TITLE = `200 HOUR YOGA
Teacher Training Course`;

export const TRAINING_200_DETAILS = [
  { label: 'Duration', value: '24 Days' },
  { label: 'Level', value: 'Beginner to Intermediate' },
  { label: 'Style', value: 'Ashtanga, Hatha, Anatomy' },
  { label: 'Certification', value: 'RYT 200 - Yoga Alliance' },
  { label: 'Date', value: '1st to 24th of every month' },
];

export const TRAINING_200_FEES = {
  single: { amount: '$1099 USD', description: '(Single Occupancy)' },
  double: { amount: '$899 USD', description: '(Double Occupancy)' },
  withoutStay: { amount: '$699 USD', description: '(Food is included)' },
};

// ===========================================
// 200 HOUR COURSE HIGHLIGHTS & BENEFITS
// ===========================================

export const TRAINING_200_COURSE_HIGHLIGHTS = {
  title: 'What Get With This Course?',
  subtitle: 'Why Choose Our 200 Hour Yoga Teacher Training Course In Rishikesh',

  benefits: [
    {
      category: 'Ideal For Beginners:',
      items: [
        'Our 200 hour yoga teacher training course is perfect for anyone new to yoga or teaching.',
        'We follow a step-by-step curriculum that makes it easy to understand the basics of yoga.',
      ],
    },
    {
      category: 'Structured & Comprehensive Learning:',
      items: [
        'The program covers various essential aspects of yoga:',
        {
          subItems: [
            {
              label: 'Anatomy',
              description: 'Learn how the body works to practice and teach yoga safely.',
            },
            {
              label: 'Philosophy',
              description: 'Discover the roots and deeper meaning of yoga.',
            },
            {
              label: 'Pranayama',
              description: 'Practice breathing techniques that improve your energy and health.',
            },
            {
              label: 'Meditation',
              description: 'Develop focus, inner peace, and mindfulness through guided techniques.',
            },
            {
              label: 'Asanas',
              description: 'Master the physical yoga poses with proper alignment.',
            },
            {
              label: 'Mantras',
              description:
                'Use sacred chants to deepen your concentration and spiritual connection.',
            },
            {
              label: 'Shatkarma',
              description: 'Learn traditional cleansing techniques for body purification.',
            },
            {
              label: 'Alignment & Adjustments',
              description: 'Understand how to help students safely improve their posture.',
            },
          ],
        },
      ],
    },
    {
      category: 'Authentic Teachings From The Source',
      items: [
        'Study yoga in Rishikesh, the birthplace of yoga and a globally known spiritual destination.',
        'Learn from experienced Indian yoga teachers who follow traditional yogic methods.',
        'Train in an immersive and peaceful setting that blends ancient wisdom with modern teaching styles.',
      ],
    },
  ],

  courseHighlight: {
    title: '200 Hour Course Highlight',
    pricing: {
      twinShared: {
        label: 'Twin Shared Room',
        price: '$899',
        originalPrice: '$1750',
      },
      private: {
        label: 'Private Room',
        price: '$1099',
        originalPrice: '$2050',
      },
    },
    details: [
      {
        icon: 'home',
        label: 'Course Name',
        value: '200 Hour Yoga Teacher Training in Rishikesh, India',
      },
      {
        icon: 'clock',
        label: 'Duration',
        value: '24 Days',
      },
      {
        icon: 'language',
        label: 'Language',
        value: 'English',
      },
      {
        icon: 'home',
        label: 'Module',
        value: 'Residential with Meals',
      },
      {
        icon: 'book',
        label: 'Level',
        value: 'Beginner',
      },
      {
        icon: 'users',
        label: 'Class Size',
        value: '15-20 Students',
      },
      {
        icon: 'calendar',
        label: 'Date:',
        value: 'Starts 1st of every month',
      },
      {
        icon: 'certificate',
        label: 'Certification :',
        value: 'RYT- 200 Yoga Alliance USA',
      },
      {
        icon: 'jedi',
        label: 'Style :',
        value: 'Multi Style( Hatha & Ashtanga Vinyasa)',
      },
    ],
    bookingButton: {
      text: 'Book Now',
      class:
        'bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded transition-all duration-300',
    },
  },
};

// ===========================================
// 200 HOUR DAILY SCHEDULE
// ===========================================

export interface ScheduleItem {
  time: string;
  activity: string;
}

export const TRAINING_200_DAILY_SCHEDULE: ScheduleItem[] = [
  { time: '06:30 AM - 07:30 AM', activity: 'Hatha Yoga' },
  { time: '07:45 AM - 08:45 AM', activity: 'Pranayama' },
  { time: '09:00 AM - 10:00 AM', activity: 'Breakfast' },
  { time: '10:00 AM - 11:00 AM', activity: 'Yoga Philosophy' },
  { time: '11:00 AM - 11:45 AM', activity: 'Yoga Anatomy' },
  { time: '12:00 PM - 01:00 PM', activity: 'Lunch' },
  { time: '02:00 PM - 03:00 PM', activity: 'Meditation & Mantras' },
  { time: '03:15 PM - 04:15 PM', activity: 'Asana Practice' },
  { time: '04:30 PM - 05:30 PM', activity: 'Practical Teaching' },
  { time: '05:30 PM - 06:00 PM', activity: 'Evening Tea Break' },
];

export const TRAINING_200_PRACTICAL_SESSIONS = {
  title: 'Practical Sessions Includes',
  sections: [
    {
      id: 'asana',
      title: 'Asana',
      items: [
        'Core principles of hatha yoga practice.',
        'Structuring and sequencing the postures.',
        'Technique, teaching, method, application, contra-indication, and benefits of Asana.',
        'Traditional sun salutation series with beej (root) mantras.',
        'Moon salutation series',
        'Sookshmavyaayaam( basic preparatory movements).',
        'Standing pose',
        'Kneeling pose Practice.',
        'Sitting pose.',
        'Backward bending pose. Practice.',
        'Forward bending pose',
        'Twisting pose.',
        'Inverted pose.',
        'Meditative pose.',
      ],
    },
    {
      id: 'pranayama',
      title: 'Pranayama',
      description:
        'Pranayama (yogic breathing): Here the students will learn the clear concepts and practices of Pranayama including different breathing exercises mentioned in Hatha yoga & Kumbhaka (breath retention) with benefits and contra-indications.',
      items: [
        'What is pranayama?',
        'What is five sub prana in yogic science?',
        'What is Ida, Pingala, and Sushumna Nadi?',
        'What is Nadi?',
        'Kapalbhati pranayama.',
        'Bhastrika pranayama.',
        'Brahmari pranayama.',
        'Ujjayi pranayama.',
      ],
    },
    {
      id: 'mudras',
      title: 'Mudras',
      description:
        'Mudras : A mudra may involve the whole body in a combination of asana, pranayama, bandha and visualization techniques, or it may be a simple hand position. The aim is to create fixed, repetitive postures and gestures which can snap the practitioner out of instinctive habit pattern and establish a more refined consciousness.',
      items: [
        'Yogic gestures for stress-related problems.',
        'Healing gestures for physical blockages.',
        'Pranic gestures for awakening energy.',
      ],
    },
    {
      id: 'bandhas',
      title: 'Bandhas',
      description:
        'Bandha: Bandha is defined as "binding" tie, hold back, restrain, or lock. The basic premise of the bandha is that by restraining or locking the muscles on a physical level, a subtle unlocking occurs on a mental or energetic level. Bandha regulates the flow of energy and assists the practitioner in asana.',
      items: [
        'Introduction of Bandha.',
        'Mool Bandha(Root Lock).',
        'Uddiya Bandha (Abdominal Lock).',
        'Jalandhar Bandha (Throat Lock).',
        'Maha Bandha(The great Lock).',
      ],
    },
    {
      id: 'shatkarma',
      title: 'Shatkarma',
      description:
        'Shatkarma (Cleansing Process): Shatkarma is six yogic cleansing techniques for purifying the tissues and organ systems while bringing harmony in their functioning in the most simple and natural manner. Our Shatkarma class will cover:',
      items: ['Neti.', 'Kapalabhati.', 'Trataka.', 'Dhauti', 'What is Basti?', 'What is Nauli?'],
    },
  ],
} as const;

// ===========================================
// 200 HOUR CAROUSEL IMAGES
// ===========================================

export const TRAINING_200_CAROUSEL_IMAGES = [
  'https://www.vinyasayogaashram.com/image/200hrs-yoga-teacher-training-course.jpg?v=125',
  'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/1000040970.jpg?fit=1080%2C953&ssl=1',
];

// ===========================================
// 200 HOUR CURRICULUM DATA
// ===========================================

export const TRAINING_200_CURRICULUM_SECTION: CurriculumSection = {
  title: '200 Hour Yoga Teacher Training Curriculum',
  items: [
    {
      id: 'mantra-chanting',
      title: 'Mantra & Mantra Chanting',
      sections: [
        {
          title: 'Mantra',
          description:
            'Mantras are sacred sounds, words, or phrases which are recited to attain spiritual attention. In other words, a mantra is a tool of the mind. It helps the mind in focusing better.',
          items: [
            'Art of Mantra',
            'Science of Mantra',
            'Power of Mantra',
            'Formation of Mantra',
            'Mantra as a Religion',
            'Vibration of Sound',
          ],
        },
        {
          title: 'Mantra Chanting',
          description:
            'Mantra Chanting is a powerful tool which develops a spiritual connection inside you. It, in turn, creates a balance between the body, mind, and spirit.',
          items: [
            'How to chant the mantra properly?',
            'Om Mantra',
            'Peaceful Shiva Mantra',
            'Energetic Durga Mantra',
            'Kundalini Mantra',
            'Ganesha Mantra for removing hurdles',
            'Joyous Krishna Mantra',
            'Gayatri Mantra for the purification of the mind',
            'Sahana Mantra for Guru Disciple Study',
            'Guru Mantra for paying homage to Guru',
            'Early Morning Chant - asato ma sadgamaya, tamaso ma jyotirgamaya, mrtyorma amrtam gamaya, om shanti shanti shanti ||',
            'Surrender Mantra - twameva mata cha pita twameva, tvameva bandhushcha sakha tvameva, tvameva vidya dravinam tvameva, tvameva sarvam mama deva deva ||',
            'Maha Mritunjaya Mantra - Om Tryambak Yajamahe, Sugandhim Pushtee-Vardhanam, Urvarukmeva Bandhanaan, Mrtyoh-Mrukshiya MaaMmrataat',
            'Patanjali Mantra (Yogenacittasya)',
            'Suryanamaskar 12 Mantra - Om Mitraaya Namaha, Om Ravaye Namaha, Om Suryaaya Namaha, Om Bhaanave Namaha, Om Khagaya Namaha, Om Pooshne Namaha, Om Hiranyagarbhaaya Namaha, Om Mareechaye Namaha, Om Adityaaya Namaha, Om Savitre Namaha, Om Aarkaaya Namaha, Om Bhaskaraaya Namaha',
          ],
        },
      ],
    },
    {
      id: 'traditional-hatha-yoga',
      title: 'Traditional Hatha Yoga',
      sections: [
        {
          title: 'Practice Sessions',
          description:
            "Traditional Hatha Yoga sessions conducted by our school are a positive workout for one's physical and mental wellness. It originated years ago with the aim to attain health and peace. The practice also benefits you with strength and flexibility.",
          items: [
            'PavanMuktasana series 1 (15 practices)',
            'PavanMuktasana series 2 (10 practices)',
            'PavanMuktasana series 3 (10 practices)',
            'Centering postures series (Yoga Sequence Builder) (5 practices)',
            'Surya Namaskar (Sun Salutation) (12 asana series)',
            'Chandra Namaskar (Moon Salutation) (12 Asana Series)',
            'Standing postures series (10 practices)',
            'Kneeling postures series (5 practices)',
            'Sitting Postures series (10 practices)',
            'Forward bending postures series (5 practices)',
            'Backward bending postures series (5 practices)',
            'Supine postures series (6 practices)',
            'Prone Postures series (5 practices)',
            'Fire Series series (5 practices)',
            'Inversions series (5 practices)',
            'Twisting postures series (5 practices)',
            'Balancing Postures series (5 practices)',
            'Relaxing Posture series (5 practices)',
            'Meditative Asana Series (5 practices)',
          ],
        },
        {
          title: 'Theory of Hatha Yoga',
          description:
            'You have done practice sessions but what about theory? It is also as important as practice sessions. If you are not theoretically aware of Hatha yoga and its elements, you are not able to practice it well.',
          items: [
            'Hatha Yoga Philosophy',
            'Ancient Scriptures & Texts of Hatha Yoga',
            'Aim and Objectives',
            'Yoga as a Therapy',
            'Yoga as Balancing',
            'Connection of Hatha Yoga with Chakras, Nadis, Kundalini, and the Subtle Body',
          ],
        },
      ],
    },
    {
      id: 'ashtanga-yoga',
      title: 'Ashtanga Yoga',
      sections: [
        {
          title: 'Theory and Foundation',
          description:
            'More than a teaching session conducted by yog gurus, Ashtanga Yoga is a self-assisted and practice class. All students are doing the same sequence and postures, supported by experienced teachers.',
          items: [
            'Introduction',
            'History',
            'Awakening the Inner Fire',
            'The Breath of Life (Prana)',
            'Chakras',
            'Eight Limbs of Yoga (Ashtanga Yoga)',
            'The practice of K.Pattabhi Jois',
            'Bandha practice',
            'Drishti (Focusing the Attention)',
            'Cleansing & Purification',
            'Developing a pious platform for yogic practice',
            'Use of yoga props and instruments',
            'Sun Salutation A & B (week 1) - Surya Namaskar Series A & B',
            'Standing Asana Series (week 2)',
            'Sitting Asana Series (Week 3)',
            'Finishing Asana Series (Week 3)',
            'Teaching Practices (Traditional & Mysore Style- Week 4)',
          ],
        },
        {
          title: 'Standing and Sitting Postures',
          description: '',
          items: [
            'Padangustasana (Big toes Posture)',
            'Pada hastasana (Hand under foot posture)',
            'Utthita trikoṇasana (A+B) (Triangle posture)',
            'Utthita parsvakonasana (A+B) (Extended side angle pose)',
            'Prasarita padottanasana (A,B,C,D) (Intense wide leg stretch)',
            'Parsvottanasana (Intense side stretch posture)',
            'Utthita Hasta Padangusṭasana- hand to big toe posture',
            'Ardha bandha padmottanasana (Half-bound lotus forward bend)',
            'Utkatasana (Fierce pose)',
            'Virabhadrasana (Warrier pose) A+B',
            'Dandasana (Staff pose)',
            'Pascimattanasana (Intense west stretch or sitting forward bend)',
            'Purvattanasana (Intense east stretch)',
            'Ardha bandha padma pascimattanasana (Half bound lotus forward bend)',
            'Tiryangmukha Eka pada pascimattanasana (Reverse the leg, one leg intense stretch)',
            'Janusirsasana (Head-to-knee pose)',
            'Marichyasana (Leg Binding Pose)',
            'Navasana (Boat Pose)',
            'Bhujapiḍasana (Shoulder Pressure Pose)',
            'Kurmasana (Tortoise Pose)',
            'Suptakurmasana (Reclining Turtle Pose Yoga)',
            'Garbhapindasana (Womb Pose)',
            'Kukkutasana (Cockerel Pose, or Rooster Posture)',
            'Baddha Konasana (Bound Angle Pose, Butterfly Pos',
            'Upavistha Konasana (Seated Angle Posture)',
            'Suptakonasana',
            'Supta Padangustasna',
            'Ubhaya Padangustasna',
            'Urdhvamukha Pascimattanasana',
            'Setubandhasana (Bridge Pose)',
          ],
        },
        {
          title: 'Finishing Postures',
          description: '',
          items: [
            'Urdhva Dhanurasana (upward bow posture)',
            'Salaṁba sarvangasana (shoulder stand posture)',
            'Halasana (plough posture)',
            'Karṇa pidasana (ear pressure posture)',
            'Pindasana (Embryo Pose)',
            'Matsyasana (Fish Pose)',
            'Uttanapadasana (Leg Lifting Posture)',
            'Chakrasana (Wheel Pose)',
            'Shirshasana (Yoga Headstand)',
            'Baddhapadmāsana (Bound Lotus Posture)',
            'Yoga Mudra',
            'Padmasana (Lotus Pose)',
            'Utpluthiḥ',
            'Savasana (Corpse Pose)',
          ],
        },
      ],
    },
    {
      id: 'pranayama',
      title: 'Pranayama (Breathing Practices)',
      sections: [
        {
          title: 'Theory and Foundation',
          description:
            'Prana, the life energy Yama means control. It is the foundation practice of traditional form of yoga. It is not just a breathing practice but much more than this. The class of pranayama reveals its secrets and the power of pranayama to gain the right health, peace, and balance.',
          items: [
            'Definition of Prana',
            'Definition of Pranayama',
            'Definition of breath',
            'Connection of the Prana and the breath',
            'Importance of Pranayama',
            'Benefits of Pranayama',
            'Preparing ourselves to practice pranayama',
            'Aspects of Breathing',
            'Ancient Texts of Breathing',
            'General understanding',
            'Knowledge of nostrils',
            'Activating nostrils for pranayama',
            'Secrets of Pranayama',
            'Breath flow in 5 elements',
            'Unit of Prana',
            'Function of Prana',
            'Three levels of Prana',
            'Three Gunas',
            'Flow of Prana',
            'Quality of breath',
            'Imbalance of Prana',
            'Retention of breath',
            '6 Sitting postures for Pranayama practices',
            'Breathing pattern',
            'Chakras and Kundalini connect with Prana',
          ],
        },
        {
          title: 'Beginners and Intermediate Practices',
          description: '',
          items: [
            'Clavicular Pranayama',
            'Thoracic Pranayama',
            'Diaphragmatic Pranayama',
            'Yogic Pranayama',
            'Pranava Pranayama (Om Meditation Breathing)',
            'Nadi Shodhana Pranayama or Anulom Vilom Pranayama',
            'Bhastrika Pranayama (Bellows Breath)',
            'Kapalbhati Pranayama (Skull Shining Breath)',
            'Bhramari Pranayama (Humming Bee Breath)',
            'Ujjayi Pranayama (Ocean Breath)',
            'Sitali Pranayama (Cooling Breath)',
            'Sitkari Pranayama (Hissing Breath)',
            'Murcha Pranayama (Swooning Breath Yoga)',
            'Surya Bhedi Pranayama (Right Nostril Breathing)',
            'Chandra Bhedi Pranayama (Left Nostril Breathing)',
          ],
        },
      ],
    },
    {
      id: 'meditation',
      title: 'Meditation (Dhyana)',
      sections: [
        {
          title: 'Foundation and Theory',
          description:
            'Just like you involve your body in physical exercise for its benefits, in the same way, meditation is an exercise for mental health. With the power of meditation, you can control your mind and block negative and unnecessary thoughts. You enter into a deep state of relaxation where peace is the ultimate goal.',
          items: [
            'What is Meditation?',
            'History and Origin of Meditation',
            'How to prepare yourself for Meditation?',
            'What Meditation is actually?',
            'What Meditation is not?',
            'Why to meditate?',
            'How to meditate?',
            'Where to meditate?',
            'When to meditate?',
            'Philosophy of Meditation',
            'Meditation Traditions',
            'Meditation Scriptures',
            'Aim and Objectives of Meditation',
            'Sitting Positions',
            'How to Sit Correctly',
            'Preliminary Practices Before Practicing Meditation',
            'Diaphragmatic Breathing in Meditation',
            'Correct Breathing in Meditation',
            'How to Relax in Meditation?',
            'Lifestyle in Meditation',
            'Diet of Meditation',
            'Why should one sleep while meditating?',
            'What are the rules of meditation?',
          ],
        },
        {
          title: 'Meditation Practices',
          description: '',
          items: [
            'Basics Foundation Meditation Practice',
            'Breath- Mind- Mantra Awareness',
            'Trataka Meditation',
            'Music Meditation',
            'Om Meditation',
            'Mantra Power Meditation',
            'Dynamic Moving Meditation (Osho)',
            'Buddha Walking Meditation',
            'Karma Yoga Meditation',
            'Natraj Meditation',
            'Sufi Meditation',
            'Gaurishankar Meditation',
            'Ajna Chakra Awakening Meditation',
            'Kundalini Active Meditation',
            'Breath Awareness (Anapana)',
            'Mindfulness and Sensation',
            'Total Awareness Practice',
            'How to Do Japa (recitation)',
            'Kirtan Even and Creating a Spiritual Vibe',
            'One-Day Silence Meditation',
            'Silence Practice',
          ],
        },
      ],
    },
    {
      id: 'yoga-nidra',
      title: 'Yoga Nidra (Psychic Sleep)',
      sections: [
        {
          title: 'Theory and Practice',
          description:
            'Yoga Nidra is also known as Psychic Sleep. The practice creates a state between waking and sleeping. It is a state of consciousness. One can go into this deep and conscious sleep with the practice of guided meditation. Yoga Nidra can also be termed as the victory over sleep.',
          items: [
            'Basics of Yoga Nidra',
            'Meaning of Yoga Nidra',
            'Purpose of Yoga Nidra',
            'Different Schools of Yoga Nidra',
            'Traditions of Yoga Nidra',
            'Tantric Origin of Yoga Nidra',
            'Lifestyle for Yoga Nidra Practitioners',
            'Rules for Yoga Nidra Practitioners',
            'Benefits of Yoga Nidra',
            'Risks of Yoga Nidra',
            'Difference Between Yoga Nidra and Meditation',
            'Yoga Nidra Experience',
            'Yoga Nidra and Healing',
            '4 States of Consciousness',
            '3 Body Awareness',
            'Tension Relaxation',
          ],
        },
      ],
    },
    {
      id: 'shatkarma',
      title: 'Yoga Cleansing (Shatkarma)',
      sections: [
        {
          title: 'Theory and Practices',
          description:
            'Shat means Six and Karma means Actions. Thus, as per yogic science, Shatkarma is six cleansing actions that help to clean your body and mind. It is well described in the Hatha Yoga Tradition.',
          items: [
            'Introduction to Shatkarma',
            'Benefits of Shatkarma',
            'Risks of Shatkarma',
            'Who should practice it?',
            'Who should not practice it?',
            'Experiences',
            'Preparation to Shatkarma',
            'Practices After Completing It',
            'Cleansing of Nadis or Energy Channels',
            'Jihwa Dhauti (Tongue Cleansing)',
            'Danta Dhauti (Teeth Cleansing)',
            'Karna Dhauti (Ear Cleansing)',
            'Jalaneti (Cleansing with Water)',
            'Kapalbhati (Mind Cleansing)',
            'Agnisara (Cleansing with Fire)',
          ],
        },
      ],
    },
    {
      id: 'yoga-philosophy',
      title: 'Yoga Philosophy (Yoga Darshana)',
      sections: [
        {
          title: 'The World of Wisdom (Week 1)',
          description:
            "Yoga Philosophy is a powerful subject that can change one's life. Many are confused that it only exists in Patanjali's Yoga Sutras but this is not true. It is the philosophy of life.",
          items: [
            'Introduction to Indian Culture',
            'Spirituality and Himalayan Tradition',
            'Introduction to the Ancient Scriptures of Yoga and Spirituality',
            'Meaning of Indian Philosophy',
            'Purpose of Indian Philosophy',
            'Introduction to 9 Major Indian Philosophy',
            'What is Yoga Philosophy the Most Important among All?',
            'History of Yoga',
            'Types of Yoga',
          ],
        },
        {
          title: 'Yoga Sutras of Patanjali (Week 2)',
          description: '',
          items: [
            'Patanjali and His Work',
            'Introduction to Yoga Sutras Text',
            'Eight Limbs of Yoga (Ahimsa, Satya, Asteya, Brahmacharya, Aparigraha, Saucha, Santosha, and Tapas)',
            'Yamas & Niyamas',
            'Philosophy of Asana & Pranayama',
            'Karmic Science',
          ],
        },
        {
          title: 'Internal Limbs and Wisdom (Week 3-4)',
          description: '',
          items: [
            'Concentration, Meditation, and Samadhi',
            'First Chapter',
            'Second Chapter',
            'Third and Fourth Chapters of Patanjali',
            'Mind and Its Control',
            'Introduction to Bhagavat Geeta & Upanishad',
            'Chakras',
            'Nadi',
            'Kundalini',
            'Three Fold Pain',
            'Three Bodies (Sharira)',
            'Pancha kosha',
            'Tri-guna',
            'Mahabhuta (Theory of Elements)',
          ],
        },
      ],
    },
    {
      id: 'anatomy-physiology',
      title: 'Anatomy & Physiology (Sharir Vijnan)',
      sections: [
        {
          title: 'Physical Anatomy',
          description:
            'In yoga, anatomy is a crucial subject for yoga teachers and learners. In the class, you will get to know physical anatomy and spiritual anatomy.',
          items: [
            'Introduction to Body',
            'Bodily Structures',
            'Body Planes',
            'Anatomical Movements',
            'Bones of the Skull',
            'Cervical Vertebrae',
            'Shoulder Girdle/ Arm Bones/ Pelvic Region',
            'Deformities of the Spine',
            'Lower Extremity',
            'Tendons and Ligaments',
            'Muscular System',
            'Nervous System',
            'Respiratory System',
          ],
        },
        {
          title: 'Spiritual Anatomy',
          description: '',
          items: [
            'Nadi (Energy Channel)',
            'Chakras (Energy Centres)',
            'Kundalini (Prime Energy and Souce of All Creativity)',
            'Pancha kosha (5 Layers)',
            'Pancha Mahabhuta (5 Elements and Body Structure)',
            'Tri-Guna (Three Attributes)',
          ],
        },
      ],
    },
    {
      id: 'yoga-therapy',
      title: 'Yoga Therapy',
      sections: [
        {
          title: 'Healing Through Yoga',
          description:
            'Yoga is the wellness science for nurturing the body, mind and spirit. It is the natural healing process to keep you healthy and free from illness.',
          items: [
            'Definition of Yoga Therapy',
            'Rules and Regulations of Yoga Therapy',
            'Healing Through Asana, Pranayama and Meditation',
            'Therapy for Common Diseases',
          ],
        },
      ],
    },
    {
      id: 'ayurveda',
      title: 'Ayurveda',
      sections: [
        {
          title: 'Science of Life',
          description:
            'Ayurveda is the oldest and the most natural system of medicine that originated in India years ago. It is approximately 3000 years ago medicinal science.',
          items: [
            'What is Ayurveda?',
            'Ayurvedic Treatment and its Unique Features',
            'Ayurveda and Its Diversified Areas',
            'Ashtanga Ayurveda',
            'Fundamentals of Ayurveda',
            'Panchamahabhuta [Earth (Prithvi), Water (Jal), Fire (Agni), Air (Vayu) and Aether / Space (Aakash)]',
            'Kapha',
            'Vata',
            'Pitta',
            'Prakriti- Know Your Constitution',
          ],
        },
      ],
    },
    {
      id: 'mudras',
      title: 'Mudras',
      sections: [
        {
          title: 'Symbolic Gestures',
          description:
            'Mudra is a symbolic gesture. It is normally practices with hands and fingers, explaining the flow of energy in the subtle body. It brings a wondrous change in body and mind.',
          items: [
            'Mudras',
            'The Secrets of Mudra',
            'The Position of Elements in the Hands',
            'The Need for Mudra',
            'Advantages of Mudras',
            'Special Guidelines About Mudra',
            'Gyan Mudra (Gesture of Wisdom)',
            'Purn Gyan Mudra (Gesture of Complete Wisdom)',
            'Vairagya Mudra (Gesture of Dispassion)',
            'Abhaya Mudra (Gesture of Fearlessness)',
            'Dhyana Mudra (Meditation Mudra)',
            'Vayu Mudra (Gesture of Air)',
            'Pran Mudra (Gesture of Prana)',
            'Prithvi Mudra (Gesture of Earth)',
            'Surya Mudra (Gesture of Sun)',
            'Varun Mudra (Gesture of God of Water)',
            'Shoonya mudra (Gesture of Openness, Space)',
            'Pran-Apan Mudra (Gesture of Prana Apana)',
          ],
        },
      ],
    },
    {
      id: 'bandhas',
      title: 'Bandhas (Energy Lock)',
      sections: [
        {
          title: 'Theory and Practices',
          description:
            'Bandhas is the Sanskrit word which means Lock. The aim of it is to block the energy flow from a particular part of the body. When the lock is opened, then the energy flows properly throughout the body.',
          items: [
            'Meaning and Importance of Energy Lock',
            'Why the Energy Lock and How Our Energy Gets Drained',
            'Energy Knots and How to Open Them',
            'Understanding the Three Chakras (Muladhara, Manipura, Visuddhi)',
            'Experience with Energy Lock',
            'Benefits and Risks of Bandha Practices',
            'Agnisar (Preparation to Uddiyana)',
            'Vahir Kumbhaka (External Retention)',
            'Antar Kumbhaka (Internal Rentention)',
            'Ashwini Mudra to prepare Mulabandha',
            'Vajroli Mudra to prepare Mulabandha',
            'Mula bandhas (Root lock)',
            'Uddiyana bandha (Abdominal lock)',
            'Jalandhar Bandha (Throat Lock)',
          ],
        },
      ],
    },
    {
      id: 'teaching-methodology',
      title: 'Teaching Methodology',
      sections: [
        {
          title: 'From Student to Teacher',
          description:
            'While being a student, it is also necessary to learn to teach. You are on a journey from being a student to a teacher.',
          items: [
            'Proper sequence',
            'Avoid injuries',
            'Happiness during and after the practice',
            'Work with various styles of yoga and in all levels',
            'Meditative experience',
            'Managing the energy flow',
            'Balancing the energy flow',
            'Proper demonstration of a Yoga practice',
            'The proper way to instruct and guide a lesson',
            'Proper alignment of yoga postures',
            'Proper adjustment with/ without props',
            'Yogic personality establishment',
          ],
        },
      ],
    },
    {
      id: 'alignment',
      title: 'Alignment',
      sections: [
        {
          title: 'Correct Positioning',
          description:
            'In yoga, alignment is the right way to perform any asana so that one can minimise the risk of injury and reap maximum benefits from it.',
          items: [
            'Sense of alignment',
            'Role of alignment in daily practice',
            'Balancing prana & chakras',
            'Alignment and 5 koshas',
            'Importance of Alignment',
            'A different aspect of Alignment',
            'Minimising the risk of injuries',
            'Increase the movement of joints',
            'Alignment based on body regions',
            'Upper Limb alignment',
            'Lower Limb alignment',
            'Torso – Thorax - Abdomen – Pelvis Alignment',
            'Alignment of Head & Neck',
            'Alignment of the spine',
            'Basic postures of alignment',
            'Bringing the body into comfortable zone',
            'Balancing the body and mind',
          ],
        },
      ],
    },
    {
      id: 'adjustment',
      title: 'Adjustment',
      sections: [
        {
          title: 'Adjustment Techniques',
          description: 'Adjustment in yoga is also about learning the correct technique of yoga.',
          items: [
            'What is yoga adjustment?',
            'Sense of yoga adjustment',
            'Level of yoga adjustment',
            'Why adjustment is needed in yoga asana',
            'Role of adjustments in yoga asana class',
            'The right technique for perfect adjustment',
            'Bandhas',
            'Dynamics of each asana',
            'How to adjust self adjust in a posture',
            'How to adjust to others during the class',
            'Methods of Adjustment',
            'Tools and props to achieve the peak in the posture',
            'Body weight management',
            'Safety rules',
            'Preparations for adjustment',
          ],
        },
      ],
    },
    {
      id: 'yoga-for-health',
      title: 'Yoga For Health',
      sections: [
        {
          title: 'Therapeutic Applications',
          description: '',
          items: [
            'Yogic counselling for a healthy life.',
            'Yogic techniques to use in daily lifestyle.',
            'Yoga cures common diseases like Headaches, migraine, colds, sinus, etc.',
            'Yoga tools for back issues like backache, slipped disk, sciatica, diabetes, thyroid, spinal deformities, obesity, etc.',
          ],
        },
      ],
    },
    {
      id: 'evaluation-certification',
      title: 'Evaluation & Certification',
      sections: [
        {
          title: 'Assessment Criteria',
          description: '',
          items: [
            'Performance during the course',
            'Attendance',
            'Practical asana demonstration test',
            'Written test (Objective and subjective type)',
            'Behavior',
          ],
        },
      ],
    },
  ],
};

// ===========================================
// 200 HOUR COURSE DATES & BOOKING
// ===========================================

export const TRAINING_200_COURSE_DATES_SECTION = {
  title: 'Upcoming Dates For This Course',
  subtitle: 'Choose your preferred date and accommodation type',
  activeYear: '2025',
  years: ['2025', '2026'],
  courseInfo: {
    duration: '24 Days',
    fees: {
      private: { type: 'Private Room', amount: '$1199' },
      shared: { type: '2 Sharing Room', amount: '$999' },
      shared3: { type: '3 Sharing Room', amount: '$799', note: 'Females Only' },
      shared4: { type: '4 Sharing Room', amount: '$649', note: 'Females Only' },
    },
    withoutStay: { amount: '$699', note: 'Food included' },
  },
  dates: {
    '2025': [
      {
        id: 'oct-2025',
        startDate: '1st Oct',
        endDate: '24th Oct',
        status: 'available',
        seatsLeft: 18,
      },
      {
        id: 'nov-2025',
        startDate: '1st Nov',
        endDate: '24th Nov',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'dec-2025',
        startDate: '1st Dec',
        endDate: '24th Dec',
        status: 'available',
        seatsLeft: 20,
      },
    ],
    '2026': [
      {
        id: 'jan-2026',
        startDate: '1st Jan',
        endDate: '24th Jan',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'feb-2026',
        startDate: '1st Feb',
        endDate: '24th Feb',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'mar-2026',
        startDate: '1st Mar',
        endDate: '24th Mar',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'apr-2026',
        startDate: '1st Apr',
        endDate: '24th Apr',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'may-2026',
        startDate: '1st May',
        endDate: '24th May',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'jun-2026',
        startDate: '1st Jun',
        endDate: '24th Jun',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'jul-2026',
        startDate: '1st Jul',
        endDate: '24th Jul',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'aug-2026',
        startDate: '1st Aug',
        endDate: '24th Aug',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'sep-2026',
        startDate: '1st Sep',
        endDate: '24th Sep',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'oct-2026',
        startDate: '1st Oct',
        endDate: '24th Oct',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'nov-2026',
        startDate: '1st Nov',
        endDate: '24th Nov',
        status: 'available',
        seatsLeft: 20,
      },
      {
        id: 'dec-2026',
        startDate: '1st Dec',
        endDate: '24th Dec',
        status: 'available',
        seatsLeft: 20,
      },
    ],
  },
  bookingButton: {
    text: 'Book Now',
    whatsappText: 'Enroll Now',
  },
};

// ===========================================
// COURSE GAIN & TARGET AUDIENCE
// ===========================================

export const TTC_COURSE_GAIN_SECTION = {
  title: 'What Is This Course About & What You Gain?',
  subtitle:
    'Discover the transformative journey that awaits you in our comprehensive yoga teacher training program',
  gainItems: [
    {
      text: 'Learn authentic Yoga from an indigenous yoga school.',
    },
    {
      text: 'Get comprehensive knowledge on Yoga, both theoretical and practical.',
    },
    {
      text: 'Obtain a global certification from Yoga Alliance USA.',
    },
    {
      text: 'Get trained in trwaditional Yoga but in the latest scientific way.',
    },
    {
      text: 'Highly qualified teachers who are well-versed in both theory and practical.',
    },
  ],
  targetAudience: {
    title: 'Who Is This Course For?',
    description:
      'This course is best for those with an avid desire to enhance yoga knowledge as a practice, its techniques as well as its philosophy. If you are a yoga trainer looking to sharpen your yogic skills or expand your knowledge, then, in that case, this course is perfect for you.',
    requirements: 'No prior knowledge or any degree is required for joining this course.',
    experience:
      'Designed to get you started on the path of Yoga and is the best way for developing a deep understanding of Hatha Ashtanga yoga. Vinyasa Yogashala is one of the best places to dip yourself and achieve growth in your yogic journey. Obtain a remarkable transforming experience that you will cherish for a lifetime.',
  },
} as const;

// ===========================================
// GALLERY IMAGES
// ===========================================

export const GALLERY_CAROUSEL_IMAGES = [
  '/yogaschoolpic.jpg',
  '/yogacoursepic.jpg',
  '/yogashala-founder1.jpg',
  '/yogashala-founder2.jpg',
  '/yogashala-founder3.jpg',
  '/testimonial.jpg',
  '/bg-certificate.png',
  'https://www.vinyasayogaashram.com/image/200hrs-yoga-teacher-training-course.jpg?v=125',
  'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/1000040970.jpg?fit=1080%2C953&ssl=1',
  'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800',
  'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800',
  'https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=800',
  'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800',
];

// Small continuous carousel images
export const MINI_CAROUSEL_IMAGES = [
  '/yogashala-founder1.jpg',
  '/yogashala-founder2.jpg',
  '/yogashala-founder3.jpg',
  'https://images.unsplash.com/photo-1545389336-cf090694435e?w=200',
  'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=200',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200',
  'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=200',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200',
  'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200',
  'https://images.unsplash.com/photo-1593810450967-f9c42742e326?w=200',
  'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=200',
  'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=200',
  'https://images.unsplash.com/photo-1591382696684-b3d1a1f0b1fe?w=200',
];

// ...existing code...

export const TRAINING_200_INCLUDED_EXCLUDED_SECTION = {
  tabs: [
    {
      id: 'included',
      label: 'What Is Included?',
      title: 'What does the course fees include?',
      items: [
        '25 Days & 24 Nights Accommodation',
        'Yoga material',
        'Kirtan Night',
        'Daily nutritious vegetarian, vegan meals',
        'Kirtan night',
        'Full body massage',
        'Weekend excursions',
      ],
    },
    {
      id: 'excluded',
      label: 'What Is Not Included?',
      title: 'What is not included in the course fees?',
      items: [
        'Ayurvedic Panchakarma & Treatment',
        'Air-conditioner (On Additional Charges)',
        'Visa fee/Air fare/Taxi pick-up from Delhi, Haridwar',
      ],
    },
    {
      id: 'bring',
      label: 'What To Bring With You?',
      sections: [
        {
          title: 'Clothes',
          items: [
            'Please Carry a White Dress For Course Ceremony',
            'Yoga gear: leggings or yoga pants and supportive tops',
            'Pants (for yoga, town, travel, hiking)',
            'Tops (short or long sleeved shirts)',
            'Outer layer (sweatshirt or light jacket/fleece)',
            'Sleepwear',
            'Sandals or flip-flops',
            'Please carry a bath towel',
          ],
        },
        {
          title: 'Yoga Mat',
          items: [
            'Our schools offer mats however, if you are used to your own, bring one from home',
            'We Provide You All The Course Material',
          ],
        },
        {
          title: 'Toiletries',
          items: [
            'Carry essentials like deodorants, mosquito-repellents, sanitary towels',
            'Soap or Shampoo (You can also buy locally from nearby shop)',
          ],
        },
        {
          title: 'Medicines',
          items: [
            'Multivitamins and supplements if not used to vegetarian meals',
            'Prescription medicines, allergy medicines, flu medicines',
            'Muscle pain relief or eye drops for dryness',
          ],
        },
      ],
    },
  ],
};

export const TRAINING_200_COURSE_FAQ_SECTION = {
  TITLE: 'FAQs - Yoga School In Rishikesh India',
  FAQS: [
    {
      id: 1,
      question:
        'What are the SDDSAanguages preferred during the course for communication & teaching at Vinyasa Yogashala in Rishikesh?',
      answer:
        'We prefer to communicate in English since we receive students from across the globe, so it becomes easier to converse in English. But we also love to teach some important words from the Hindi language since it is widely spoken in Rishikesh, like Namaskara (Hello), Dhanyawaad (Thank you), Swagatam (Welcome), and many more.',
    },
    {
      id: 2,
      question: 'Do you charge extra for learning material, or is the cost inclusive in the fee?',
      answer:
        'All learning materials including books, yoga props, and study materials are included in the course fee. There are no additional charges for any educational resources required during your training.',
    },
    {
      id: 3,
      question: 'How can I reach the premises of Vinyasa Yogashala in Rishikesh?',
      answer:
        'Our yoga school is conveniently located in Rishikesh. We provide detailed directions upon enrollment and can assist with transportation arrangements from major airports and railway stations. Pick-up services are available on request.',
    },
    {
      id: 4,
      question: 'Is there medical support or assistance available at school?',
      answer:
        'Yes, we have basic first aid facilities available at the school and maintain contact with local medical professionals. In case of any medical emergency, we ensure prompt assistance and can help coordinate with nearby healthcare facilities.',
    },
    {
      id: 5,
      question: 'Are we allowed gadgets during the class?',
      answer:
        'We encourage students to keep electronic devices on silent or turned off during classes to maintain a peaceful learning environment. However, you may use devices for taking notes or recording important instructions with permission from the instructor.',
    },
    {
      id: 6,
      question: 'How many students are there in a single batch of a particular course?',
      answer:
        'We maintain small batch sizes to ensure personalized attention. Typically, our batches have 15-20 students maximum, allowing for individualized guidance and a more intimate learning experience.',
    },
    {
      id: 7,
      question: 'Which Visa should I apply for, and does Vinyasa Yogashala help us avail?',
      answer:
        'International students typically need a Tourist Visa or Medical Visa for yoga courses in India. We provide invitation letters and documentation to support your visa application process. Our team can guide you through the visa requirements specific to your country.',
    },
    {
      id: 8,
      question: 'Do I need to bring my own yoga equipment for the course?',
      answer:
        'Basic yoga equipment including mats, blocks, straps, and bolsters are provided by the school. However, you are welcome to bring your own mat if you prefer. We recommend comfortable yoga clothing and a water bottle.',
    },
    {
      id: 9,
      question: 'What type of courses does Vinyasa Yogashala provide to students?',
      answer:
        'We offer a comprehensive range of yoga teacher training courses including 100-hour, 200-hour, 300-hour, and 500-hour YTTC programs. We also provide specialized courses in Yin Yoga, Prenatal Yoga, Sound Healing, Reiki, Ayurveda, and Aerial Yoga.',
    },
  ],
  CTA: {
    SUBTITLE: "Still have questions? We'd love to help you find the perfect yoga course.",
    BUTTON_TEXT: 'Contact Us',
    LINK: '/contact',
  },
};

// ===========================================
// EXCURSION SECTION DATA
// ===========================================

export interface ExcursionItem {
  src: string;
  label: string;
}

export interface ExcursionSection {
  title: string;
  description: string;
  items: ExcursionItem[];
}

export const TRAINING_200_EXCURSIONS_SECTION: ExcursionSection = {
  title: 'Excursion With This Course',
  description: `We know how important it is for our students to feel connected to the place they are studying yoga. That’s why our curriculum includes spiritual, educational, and relaxing trips to Yogic Caves, the sacred river Ganges, the Himalayan mountain, local sightseeing and much more!`,
  items: [
    { src: '/vys-excursion1.jpg', label: 'Ganga Aarti' },
    { src: '/vys-excursion2.jpg', label: 'Rafting' },
    { src: '/vys-excursion3.jpg', label: 'Vashishtha Cave' },
    { src: '/vys-excursion4.jpg', label: 'Waterfall' },
    { src: '/vys-excursion5.jpg', label: 'Kunjapuri Temple' },
    // Add more excursion images as needed
  ],
};

// ===========================================
// RULES & REFUND POLICY SECTION DATA
// ===========================================

export const TRAINING_200_RULES_SECTION = {
  title: 'Rules And Refund Policy',
  codeOfConduct: {
    title: 'Code Of Conduct For Students And Basic Ethics',
    description:
      'Every school or organization must have some basic rules and code of conduct and so does the Vinyasa Yogshala have. Thus let us discuss those rules:-',
    rules: [
      'The students must always respect their gurus and must maintain rules and regulations.',
      'There is no smoking and drinking rule on the campus.',
      'Anything that has been borrowed must be duly returned and hat too in time.',
      'Full attendance is expected in all scheduled programs. If there is any sort of emergency then complete information is to be given.',
      'The kitchen manager must be informed if there is any other plan and the food is not required for any particular day.',
      'Class timings are very strict and all students must maintain punctuality.',
      'In Vinyasa Yogshala accommodation will be provided only to students and staff.',
    ],
  },
  policies: {
    title: 'Policies Of Vinyasa Yogashala',
    policies: [
      'Anti Harassment Police- NO student shall be responsible for any sort of harassment issue. Protections again sexual, personal, physical, harassment is a heavy punishable act.',
      'Anti- Retaliation Policy-This is the rule for protection against any sort of violation of the code of conduct.',
      'Attendance Policy- This policy helps students figure out all queries and questions regarding attendance and participation in different events. Attendance is very strict and everyone must follow the policy and guidelines.',
    ],
  },
  refundPolicy: {
    title: 'Refund Policy Of Vinyasa Yogashala',
    policies: [
      'Advance payment non-refundable. If there is an unfortunate event substitute class will be provided later.',
      'You can cancel your course at any point in time but the deposited money shall not be refunded.',
      'There is no extra charge for cancellation. All one needs to do is inform the authorities. But as mentioned the fees shall not be refunded.',
    ],
  },
} as const;

// ===========================================
// 200 HOUR CURRICULUM DETAILED DATA
// ===========================================

export interface CurriculumItem {
  id: string;
  title: string;
  sections: Array<{
    title: string;
    description: string;
    items: string[];
  }>;
}

export interface CurriculumSection {
  title: string;
  items: CurriculumItem[];
}

export const TRAINING_200_COURSE_FAQ_STYLES = {
  SECTION_PADDING: 'py-16 px-4 mx-0 lg:mx-40',
  CONTAINER: 'container mx-auto max-w-full mx-30',
  TITLE: 'text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4',
  FAQ_ITEM:
    'overflow-hidden cursor-pointer rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md',
  QUESTION_BUTTON:
    'w-full px-6 py-4 text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
  QUESTION_BUTTON_ACTIVE: 'bg-purple-900 text-white',
  QUESTION_BUTTON_INACTIVE: 'bg-white text-gray-800 hover:bg-purple-50',
  QUESTION_ICON:
    'mr-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-current text-sm font-bold',
  QUESTION_TEXT: 'flex-1 font-medium text-sm md:text-base',
  TOGGLE_ICON: 'ml-4 text-lg transition-transform duration-300',
  ANSWER_CONTAINER: 'bg-gray-50 px-6 py-4',
  ANSWER_TEXT: 'text-gray-700 leading-relaxed text-sm md:text-base pl-12',
  CTA_BUTTON:
    'inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl',
};

export const PRICE_TAB_DATA = {
  imageSrc: '/hya.jpg',
  title: '200 Hour Yoga Teacher Training Course International',
  originalPrice: '$1049.00',
  price: '$899.00/-',
  btnEnquireText: 'ENQUIRE',
  btnBookText: 'BOOK NOW',
};

// ===========================================
// TTC NAVBAR TAB CONSTANTS
// ===========================================

export const TTC_NAVBAR_DATA = {
  navigationLinks: [
    { label: 'Curriculum', href: '#Curriculum', id: 'curriculum' },
    { label: 'Schedule', href: '#DailySchedule', id: 'schedule' },
    { label: 'Dates', href: '#Dates', id: 'dates' },
    { label: 'Location', href: '#Location', id: 'location' },
  ],
  styling: {
    containerClass: 'container mx-auto px-4',
    navbarClass:
      'pointer-events-none fixed left-0 right-0 top-0 z-50 -translate-y-full transform border-b border-orange-200 bg-white/95 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out',
    linkClass: 'nav-link',
    dividerClass: 'nav-divider',
  },
  animation: {
    showTransform: 'translateY(0)',
    hideTransform: 'translateY(-100%)',
  },
};

// ===========================================
// FOOD & NUTRITION SECTION
// ===========================================

export const TRAINING_200_FOOD_SECTION = {
  title: 'FOOD FOR YOGI',
  description:
    'Food Whatever we eat can affect our mental and physical body. Eating balanced and nutritious food is very important for yogis. Yogic Diet is based on natural healing, rejuvenating and energizing elements from the revered science of Ayurveda.',
  benefits: [
    'It is a perfect food for nourishing the mind, body and souls of budding yogis.',
    'So Vinyasa Yoga Ashram provides you yogic food which helps you physically in increasing your flexibility and stamina, mentally it helps you in being aware of your thoughts and breath. We are very adamant about bringing nutritious, vegan and gluten-free food for our students.',
  ],
  images: [
    'https://www.vinyasayogaashram.com/image/food3.jpg',
    'https://www.vinyasayogaashram.com/image/food1.jpg',
    'https://www.vinyasayogaashram.com/image/food2.jpg',
    'https://www.vinyasayogaashram.com/image/food4.jpg',
  ],
  knowMoreLink: '#food-details',
} as const;

// ===========================================
// COURSE TIMELINE SECTION
// ===========================================

export const TRAINING_200_COURSE_TIMELINE = {
  title: 'COURSE TIMELINE',
  events: [
    {
      title: 'Check in',
      date: '1st of Month',
      time: '10:00 AM',
      icon: 'fa-plane-arrival',
    },
    {
      title: 'Opening Ceremony',
      date: '1st of Month',
      time: '04:00 PM',
      icon: 'fa-fire',
    },
    {
      title: 'Certification Ceremony',
      date: '23rd of Month',
      time: '10:00 AM',
      icon: 'fa-certificate',
    },
    {
      title: 'Check out',
      date: '24th of Month',
      time: '10:00 AM',
      icon: 'fa-plane-departure',
    },
  ],
} as const;

// ===========================================
// ACCOMMODATION SECTION
// ===========================================

export const TRAINING_200_ACCOMMODATION_SECTION = {
  title: 'ACCOMMODATION FOR YOGI',
  description:
    'Soul flourishes in a healthy body in the same way our physical body requires a healthy, safe and hygienic atmosphere. Vinyasa Yoga Ashram has situated in a peaceful place and surrounded by lush green mountains and fields.',
  additionalInfo:
    'Keeping in mind our rooms are designed according to yoga teacher training course. Our rooms are spacious and ventilated. Our management is always your service to keep your rooms clean and hygienic.',
  images: [
    'https://www.vinyasayogaashram.com/image/Accomodation-3.jpg',
    'https://www.vinyasayogaashram.com/image/Accomodation-2.jpg',
    'https://www.vinyasayogaashram.com/image/Accomodation-1.jpg',
    'https://www.vinyasayogaashram.com/image/Accomodation-4.jpg',
  ],
  knowMoreLink: '#accommodation-details',
} as const;

// ===========================================
// TTC BLOGS SECTION DATA
// ===========================================

export interface BlogPost {
  id: number;
  title: string;
  sanskritText: string;
  image: string;
  description: string;
  slug?: string;
}

export interface TTCBlogsSection {
  subtitle: string;
  description: string;
  closingMessage: string;
  blogPosts: BlogPost[];
  ctaButton: {
    text: string;
    link: string;
  };
}

export const TRAINING_200_BLOGS_SECTION: TTCBlogsSection = {
  subtitle: 'Blogs',
  description:
    "Looking to deepen your yoga journey? Dive into Rishikesh Yogkulam's yoga blogs, your go-to source for inspiring, informative, and soul-nourishing content. From ancient yogic wisdom and modern wellness tips to practical guidance on asanas, pranayama, Ayurveda, and teacher training—our yoga blogs are crafted to elevate your practice and lifestyle. Whether you're a curious beginner or a seasoned yogi, there's something here for everyone.",
  closingMessage: 'Explore. Learn. Grow—one blog at a time.',
  blogPosts: [
    {
      id: 1,
      title: 'Yoga Sutra 1.15 : Drsta Anusravika Visaya Vitrsnasvya Vasikara Samjna Vairagyam',
      sanskritText: 'DRSTA ANUSRAVIKA VISAYA VITRSNASVYA VASIKARA SAMJNA VAIRAGYAM',
      image: '/public/blog-sutra-1.jpg',
      description:
        'Understanding detachment and mastery over desires through ancient yogic wisdom.',
      slug: 'yoga-sutra-1-15-detachment-mastery-desires',
    },
    {
      id: 2,
      title: 'Yoga Sutra 1.14: Sa tu dirghakata nairantarya satkara adara asevito drdhabhumih',
      sanskritText: 'SA TU DIRGHAKATA NAIRANTARYA SATKARA ADARA ASEVITO DRDHABHUMIH',
      image: '/public/blog-sutra-2.jpg',
      description:
        'The practice becomes firmly established when it is cultivated continuously for a long period with dedication.',
      slug: 'yoga-sutra-1-14-continuous-practice-dedication',
    },
    {
      id: 3,
      title: 'Yoga Sutra 1.13: Tatra sthitau yatno Bhyasah',
      sanskritText: 'TATRA STHITAU YATNO BHYASAH',
      image: '/public/blog-sutra-3.jpg',
      description:
        'Practice is the dedicated effort to remain firmly established in stillness of mind.',
      slug: 'yoga-sutra-1-13-dedicated-effort-stillness-mind',
    },
  ],
  ctaButton: {
    text: 'View All Blogs',
    link: '/blog',
  },
} as const;

// ===========================================
// COURSE COMBO SECTION DATA
// ===========================================

export interface AddOnCombination {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface CourseComboSection {
  title: string;
  subtitle: string;
  description: string;
  detailDescription: string;
  contactDescription: string;
  popularTitle: string;
  addOnCombinations: AddOnCombination[];
  ctaButtons: {
    email: {
      text: string;
      href: string;
    };
    whatsapp: {
      text: string;
      href: string;
    };
  };
  heroImage: string;
}

export const TRAINING_200_COURSE_COMBO_SECTION: CourseComboSection = {
  title: 'Add-On Courses',
  subtitle: 'Create Your Own Yoga Training Combo',
  description:
    'At Rishikesh Yogkulam, we believe in giving you the freedom to customize your yoga journey. Now, along with your 200 Hour Yoga Teacher Training (YTTC) or 300 Hour Yoga Teacher Training (YTTC), you can add specialized short courses to deepen your skills.',
  detailDescription:
    'For example, you can combine your 200 Hour YTTC with Prenatal Yoga Teacher Training or choose a 300 Hour YTTC with Prenatal Yoga for a truly holistic certification. These combo courses allow you to broaden your teaching profile, explore new areas of yoga, and stand out as a versatile yoga teacher.',
  contactDescription:
    'If you are interested in these unique add-on programs, please feel free to inquire via email or WhatsApp. Our team will guide you with the details and help you design the perfect path for your yoga career.',
  popularTitle: 'Popular Add-On Combinations',
  addOnCombinations: [
    {
      id: 'prenatal-yoga',
      title: 'Prenatal Yoga Teacher Training',
      description: 'Specialize in safe yoga practices for expectant mothers',
      featured: true,
    },
    {
      id: 'ayurveda-class',
      title: 'Ayurveda Class',
      description: 'Timeless wisdom of Ayurveda to balance body, mind, and spirit.',
      featured: true,
    },
    {
      id: 'meditation-intensive',
      title: 'Meditation Intensive',
      description: 'Deepen your meditation practice and teaching skills',
      featured: false,
    },
    {
      id: 'yin-yoga',
      title: 'Yin Yoga Certification',
      description: 'Learn the gentle, restorative practice of Yin Yoga',
      featured: false,
    },
    {
      id: 'sound-healing',
      title: 'Sound Healing Workshop',
      description: 'Explore the therapeutic benefits of sound and vibration',
      featured: false,
    },
    {
      id: 'reiki-training',
      title: 'Reiki Level 1 & 2',
      description: 'Master the ancient art of energy healing',
      featured: false,
    },
  ],
  ctaButtons: {
    email: {
      text: 'Email Us for Details',
      href: 'mailto:info@rishikeshyogkulam.com',
    },
    whatsapp: {
      text: 'WhatsApp Inquiry',
      href: 'https://wa.me/919368154123',
    },
  },
  heroImage: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=800&h=600&fit=crop',
} as const;

// ===========================================
// COURSE TIMELINE SECTION DATA
// ===========================================

export interface TimelineEvent {
  id: string;
  title: string;
  icon: string;
  startDate: string;
  date: string;
  time: string;
  description?: string;
}

export interface CourseTimelineSection {
  title: string;
  subtitle: string;
  events: TimelineEvent[];
}

export const TRAINING_200_COURSE_TIMELINE_SECTION: CourseTimelineSection = {
  title: 'Course Timeline - 200 Hour Yoga TTC',
  subtitle: 'Your journey from arrival to certification',
  events: [
    {
      id: 'check-in',
      title: 'Check In',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
      </svg>`,
      startDate: 'Start Date:',
      date: 'One day before the course start date',
      time: 'After 05:00 PM IST',
      description: 'Arrival and room allocation',
    },
    {
      id: 'opening-ceremony',
      title: 'Opening Ceremony',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M12.5 6.9c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-.53.12-1.03.3-1.48.54l1.47 1.47c.41-.17.91-.27 1.51-.27zM5.33 4.06L4.06 5.33 7.5 8.77c0 2.08 1.56 3.21 3.91 3.91l3.51 3.51c-.34.48-1.05.91-2.42.91-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c.96-.18 1.82-.55 2.45-1.12l2.22 2.22 1.27-1.27L5.33 4.06z"/>
      </svg>`,
      startDate: 'Date:',
      date: '1st of the month',
      time: '09:00 AM IST',
      description: 'Welcome ceremony and course introduction',
    },
    {
      id: 'certification-ceremony',
      title: 'Certification Ceremony',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
        <path d="M9,13V15.5L10.5,14L12,15.5V13H15V11H9V13Z"/>
      </svg>`,
      startDate: 'Date:',
      date: '24th of the month',
      time: '11:00 AM IST',
      description: 'Certificate presentation and graduation',
    },
    {
      id: 'check-out',
      title: 'Check Out',
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,15.4L16.2,16.2Z"/>
      </svg>`,
      startDate: 'Date:',
      date: '25th of the month',
      time: '10:00 AM IST',
      description: 'Departure and farewell',
    },
  ],
} as const;
