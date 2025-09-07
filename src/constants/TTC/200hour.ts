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
  single: { amount: '$1099', description: '(Single Occupancy)' },
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
              label: 'Anatomy:',
              description: 'Learn how the body works to practice and teach yoga safely.',
            },
            {
              label: 'Philosophy:',
              description: 'Discover the roots and deeper meaning of yoga.',
            },
            {
              label: 'Pranayama:',
              description: 'Practice breathing techniques that improve your energy and health.',
            },
            {
              label: 'Meditation:',
              description: 'Develop focus, inner peace, and mindfulness through guided techniques.',
            },
            {
              label: 'Asanas:',
              description: 'Master the physical yoga poses with proper alignment.',
            },
            {
              label: 'Mantras:',
              description:
                'Use sacred chants to deepen your concentration and spiritual connection.',
            },
            {
              label: 'Shatkarma:',
              description: 'Learn traditional cleansing techniques for body purification.',
            },
            {
              label: 'Alignment & Adjustments:',
              description: 'Understand how to help students safely improve their posture.',
            },
          ],
        },
      ],
    },
    {
      category: 'Authentic Teachings From The Source:',
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
        icon: 'yoga',
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

export const TRAINING_200_CURRICULUM = {
  TITLE: '200 Hour Yoga Teacher Training Curriculum',
  MODULES: [
    {
      id: 1,
      title: 'Yoga Philosophy & Ethics',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Introduction to Yoga Philosophy',
          description: 'Understanding the philosophical foundations of yoga practice',
          items: [
            'History and origins of yoga',
            'The Eight Limbs of Yoga (Ashtanga)',
            'Yamas and Niyamas - Ethical guidelines',
            'Understanding Sanskrit terminology',
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Asana Practice & Alignment',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Fundamental Postures',
          description: 'Master the essential yoga postures with proper alignment',
          items: [
            'Sun Salutations (Surya Namaskara)',
            'Standing postures and their variations',
            'Seated postures and forward bends',
            'Backbends and heart opening poses',
            'Twisting postures',
            'Inversions and arm balances',
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Pranayama & Breathwork',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Breathing Techniques',
          description: 'Learn ancient breathing practices for health and spiritual growth',
          items: [
            'Basic breathing awareness',
            'Ujjayi breath (Victorious breath)',
            'Nadi Shodhana (Alternate nostril breathing)',
            'Kapalabhati (Skull shining breath)',
            'Bhastrika (Bellows breath)',
            'Bhramari (Bee breath)',
          ],
        },
      ],
    },
    {
      id: 4,
      title: 'Meditation & Mindfulness',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Meditation Practices',
          description: 'Develop concentration and inner awareness',
          items: [
            'Concentration techniques (Dharana)',
            'Mindfulness meditation',
            'Walking meditation',
            'Loving-kindness meditation',
            'Chakra meditation',
            'Mantra meditation',
          ],
        },
      ],
    },
    {
      id: 5,
      title: 'Anatomy & Physiology',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Yoga Anatomy',
          description: 'Understanding the body in yoga practice',
          items: [
            'Basic anatomy for yoga teachers',
            'Common injuries and prevention',
            'Modifications and props usage',
            'Understanding body alignment',
            'Respiratory and nervous system',
            'Chakras and energy anatomy',
          ],
        },
      ],
    },
    {
      id: 6,
      title: 'Teaching Methodology',
      isExpanded: false,
      sections: [
        {
          subtitle: 'Art of Teaching',
          description: 'Learn effective teaching techniques and class management',
          items: [
            'Class sequencing principles',
            'Verbal and physical adjustments',
            'Creating a safe learning environment',
            'Working with different student levels',
            'Teaching ethics and boundaries',
            'Practice teaching sessions',
          ],
        },
      ],
    },
  ],
  CTA: {
    SUBTITLE: 'Ready to begin your transformational yoga journey?',
    BUTTON_TEXT: 'Enroll Now',
    LINK: '/contact',
  },
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
      shared4: { type: '4 Sharing Room', amount: '$649', note: 'Females Only' }
    },
    withoutStay: { amount: '$699', note: 'Food included' }
  },
  dates: {
    '2025': [
      { id: 'oct-2025', startDate: '1st Oct', endDate: '24th Oct', status: 'available', seatsLeft: 18 },
      { id: 'nov-2025', startDate: '1st Nov', endDate: '24th Nov', status: 'available', seatsLeft: 20 },
      { id: 'dec-2025', startDate: '1st Dec', endDate: '24th Dec', status: 'available', seatsLeft: 20 }
    ],
    '2026': [
      { id: 'jan-2026', startDate: '1st Jan', endDate: '24th Jan', status: 'available', seatsLeft: 20 },
      { id: 'feb-2026', startDate: '1st Feb', endDate: '24th Feb', status: 'available', seatsLeft: 20 },
      { id: 'mar-2026', startDate: '1st Mar', endDate: '24th Mar', status: 'available', seatsLeft: 20 },
      { id: 'apr-2026', startDate: '1st Apr', endDate: '24th Apr', status: 'available', seatsLeft: 20 },
      { id: 'may-2026', startDate: '1st May', endDate: '24th May', status: 'available', seatsLeft: 20 },
      { id: 'jun-2026', startDate: '1st Jun', endDate: '24th Jun', status: 'available', seatsLeft: 20 },
      { id: 'jul-2026', startDate: '1st Jul', endDate: '24th Jul', status: 'available', seatsLeft: 20 },
      { id: 'aug-2026', startDate: '1st Aug', endDate: '24th Aug', status: 'available', seatsLeft: 20 },
      { id: 'sep-2026', startDate: '1st Sep', endDate: '24th Sep', status: 'available', seatsLeft: 20 },
      { id: 'oct-2026', startDate: '1st Oct', endDate: '24th Oct', status: 'available', seatsLeft: 20 },
      { id: 'nov-2026', startDate: '1st Nov', endDate: '24th Nov', status: 'available', seatsLeft: 20 },
      { id: 'dec-2026', startDate: '1st Dec', endDate: '24th Dec', status: 'available', seatsLeft: 20 }
    ]
  },
  bookingButton: {
    text: 'Book Now',
    whatsappText: 'Enroll Now'
  }
};

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
        'Weekend excursions'
      ]
    },
    {
      id: 'excluded',
      label: 'What Is Not Included?',
      title: 'What is not included in the course fees?',
      items: [
        'Ayurvedic Panchakarma & Treatment',
        'Air-conditioner (On Additional Charges)',
        'Visa fee/Air fare/Taxi pick-up from Delhi, Haridwar'
      ]
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
            'Please carry a bath towel'
          ]
        },
        {
          title: 'Yoga Mat',
          items: [
            'Our schools offer mats however, if you are used to your own, bring one from home',
            'We Provide You All The Course Material'
          ]
        },
        {
          title: 'Toiletries',
          items: [
            'Carry essentials like deodorants, mosquito-repellents, sanitary towels',
            'Soap or Shampoo (You can also buy locally from nearby shop)'
          ]
        },
        {
          title: 'Medicines',
          items: [
            'Multivitamins and supplements if not used to vegetarian meals',
            'Prescription medicines, allergy medicines, flu medicines',
            'Muscle pain relief or eye drops for dryness'
          ]
        }
      ]
    }
  ]
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

export const TRAINING_200_COURSE_FAQ_STYLES = {
  SECTION_PADDING: 'py-16 px-4',
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
    'inline-block bg-purple-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors duration-300 shadow-lg hover:shadow-xl',
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
    { label: 'Curriculum', href: '#BestCourse', id: 'curriculum' },
    { label: 'Schedule', href: '#DailySchedule', id: 'schedule' },
    { label: 'Dates', href: '#Dates', id: 'dates' },
    { label: 'Location', href: '#Location', id: 'location' },
  ],
  styling: {
    containerClass: 'container mx-auto px-4',
    navbarClass: 'pointer-events-none fixed left-0 right-0 top-0 z-50 -translate-y-full transform border-b border-orange-200 bg-white/95 opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out',
    linkClass: 'nav-link',
    dividerClass: 'nav-divider',
  },
  animation: {
    showTransform: 'translateY(0)',
    hideTransform: 'translateY(-100%)',
  },
};
