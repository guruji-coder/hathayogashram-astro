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
        icon: 'temple',
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
        icon: 'chart',
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
  title: 'Begin your Journey',
  subtitle: '200 Hour Yoga Teacher Training Course Fees & Upcoming Dates - 2025',

  dates: [
    {
      id: 'oct-2025',
      startDate: '01 Oct',
      endDate: '24 Oct 2025',
      seatsLeft: 4,
      status: 'limited',
    },
    {
      id: 'nov-2025',
      startDate: '01 Nov',
      endDate: '24 Nov 2025',
      seatsLeft: 6,
      status: 'limited',
    },
    {
      id: 'dec-2025',
      startDate: '01 Dec',
      endDate: '24 Dec 2025',
      seatsLeft: 8,
      status: 'limited',
    },
    {
      id: 'jan-2026',
      startDate: '01 Jan',
      endDate: '24 Jan 2026',
      seatsLeft: 9,
      status: 'limited',
    },
    {
      id: 'feb-2026',
      startDate: '01 Feb',
      endDate: '24 Feb 2026',
      seatsLeft: null,
      status: 'available',
    },
    {
      id: 'mar-2026',
      startDate: '01 Mar',
      endDate: '24 Mar 2026',
      seatsLeft: null,
      status: 'available',
    },
    {
      id: 'apr-2026',
      startDate: '01 Apr',
      endDate: '24 Apr 2026',
      seatsLeft: null,
      status: 'available',
    },
    {
      id: 'may-2026',
      startDate: '01 May',
      endDate: '24 May 2026',
      seatsLeft: null,
      status: 'available',
    },
    {
      id: 'jun-2026',
      startDate: '01 Jun',
      endDate: '24 Jun 2026',
      seatsLeft: null,
      status: 'available',
    },
    {
      id: 'jul-2026',
      startDate: '01 Jul',
      endDate: '24 Jul 2026',
      seatsLeft: null,
      status: 'available',
    },
  ],

  courseInfo: {
    duration: '24 DAYS',
    fees: {
      private: {
        amount: 'USD 1099',
        type: 'PRIVATE ROOM',
      },
      shared: {
        amount: 'USD 899',
        type: 'SHARED ROOM',
      },
    },
    withoutStay: {
      amount: 'USD 699',
      note: 'FOOD IS INCLUDED',
    },
  },

  bookingButton: {
    text: 'BOOK NOW',
    whatsappText: 'Book Now',
  },
};

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
