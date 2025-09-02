/**
 * ===========================================
 * TTC PAGE CONSTANTS - TEACHER TRAINING COURSE PAGES
 * ===========================================
 *
 * This file contains all constants for individual TTC course pages including
 * syllabus, schedules, dates, galleries, teachers, and structured data.
 */

// ===========================================
// BASE TYPES AND INTERFACES
// ===========================================

export interface TTCPageData {
  readonly courseInfo: CourseInfo;
  readonly syllabus: SyllabusModule[];
  readonly dailySchedule: DailyScheduleItem[];
  readonly availableDates: AvailableDates;
  readonly gallery: GalleryItem[];
  readonly teachers: TeacherProfile[];
  readonly inclusions: string[];
  readonly exclusions: string[];
  readonly seo: SEOData;
}

export interface CourseInfo {
  readonly id: string;
  readonly title: string;
  readonly duration: string;
  readonly hours: number;
  readonly level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  readonly certification: string;
  readonly style: string[];
  readonly accommodation: AccommodationOptions;
  readonly overview: string;
  readonly highlights: string[];
}

export interface SyllabusModule {
  readonly week: number;
  readonly title: string;
  readonly topics: SyllabusTopic[];
}

export interface SyllabusTopic {
  readonly category:
    | "Asana"
    | "Pranayama"
    | "Philosophy"
    | "Anatomy"
    | "Teaching Methodology"
    | "Meditation"
    | "Mantras"
    | "Practical Teaching";
  readonly subject: string;
  readonly hours: number;
  readonly description: string;
}

export interface DailyScheduleItem {
  readonly time: string;
  readonly activity: string;
  readonly duration: string;
  readonly type: "practice" | "theory" | "meal" | "rest" | "meditation";
}

export interface AvailableDates {
  readonly upcomingDates: CourseDate[];
  readonly yearSchedule: MonthlySchedule[];
}

export interface CourseDate {
  readonly startDate: string;
  readonly endDate: string;
  readonly status: "Available" | "Filling Fast" | "Wait List" | "Full";
  readonly specialOffer?: string;
}

export interface MonthlySchedule {
  readonly month: string;
  readonly year: number;
  readonly courses: CourseDate[];
}

export interface GalleryItem {
  readonly src: string;
  readonly alt: string;
  readonly category:
    | "classroom"
    | "asana-practice"
    | "meditation"
    | "accommodation"
    | "dining"
    | "campus"
    | "activities";
  readonly title: string;
}

export interface TeacherProfile {
  readonly name: string;
  readonly title: string;
  readonly image: string;
  readonly specialization: string[];
  readonly experience: string;
  readonly bio: string;
  readonly credentials: string[];
  readonly teachingSubjects: string[];
}

export interface AccommodationOptions {
  readonly sharedRoom: {
    readonly price: string;
    readonly currency: string;
    readonly description: string;
  };
  readonly privateRoom: {
    readonly price: string;
    readonly currency: string;
    readonly description: string;
  };
}

export interface SEOData {
  readonly title: string;
  readonly description: string;
  readonly keywords: string[];
  readonly canonical: string;
  readonly image: string;
  readonly schema: {
    readonly courseType: string;
    readonly provider: string;
    readonly location: string;
  };
}

// ===========================================
// 200 HOUR YOGA TEACHER TRAINING DATA
// ===========================================

export const TTC_200_HOUR: TTCPageData = {
  courseInfo: {
    id: "200-hour-yttc",
    title: "200 Hour Yoga Teacher Training Course",
    duration: "24 Days",
    hours: 200,
    level: "All Levels",
    certification: "Yoga Alliance RYT-200",
    style: ["Hatha Yoga", "Ashtanga Yoga", "Vinyasa Flow"],
    accommodation: {
      sharedRoom: {
        price: "899",
        currency: "USD",
        description:
          "Shared accommodation with twin sharing, attached bathroom, and all amenities",
      },
      privateRoom: {
        price: "1099",
        currency: "USD",
        description:
          "Private room with attached bathroom, AC, and premium amenities",
      },
    },
    overview:
      "Our comprehensive 200-hour Yoga Teacher Training Course is designed for aspiring yoga teachers and dedicated practitioners who wish to deepen their understanding of yoga. This intensive residential program combines traditional Hatha Yoga, dynamic Ashtanga sequences, and modern teaching methodologies to provide you with a solid foundation in yoga instruction.",
    highlights: [
      "Yoga Alliance RYT-200 Certification",
      "Traditional Indian Yoga Masters",
      "Residential Program with Meals",
      "Small Class Size (Max 15 Students)",
      "Daily Asana, Pranayama & Meditation",
      "Comprehensive Teaching Methodology",
      "Sanskrit & Yoga Philosophy",
      "Anatomy & Physiology for Yogis",
    ],
  },

  syllabus: [
    {
      week: 1,
      title: "Foundation & Introduction",
      topics: [
        {
          category: "Asana",
          subject: "Hatha Yoga Fundamentals",
          hours: 15,
          description:
            "Basic postures, alignment principles, and breathing techniques",
        },
        {
          category: "Philosophy",
          subject: "Introduction to Yoga Philosophy",
          hours: 8,
          description:
            "History of yoga, the eight limbs of yoga (Ashtanga), and ethical guidelines",
        },
        {
          category: "Pranayama",
          subject: "Basic Breathing Techniques",
          hours: 6,
          description:
            "Foundation pranayama practices including Ujjayi, Kapalabhati, and Bhramari",
        },
        {
          category: "Anatomy",
          subject: "Yoga Anatomy Basics",
          hours: 8,
          description:
            "Understanding the body in yoga practice, common injuries, and safe alignment",
        },
        {
          category: "Meditation",
          subject: "Meditation & Mindfulness",
          hours: 5,
          description:
            "Introduction to various meditation techniques and mindfulness practices",
        },
      ],
    },
    {
      week: 2,
      title: "Intermediate Practice & Philosophy",
      topics: [
        {
          category: "Asana",
          subject: "Ashtanga Primary Series",
          hours: 18,
          description:
            "Introduction to Ashtanga Yoga primary series with proper vinyasa",
        },
        {
          category: "Philosophy",
          subject: "Yoga Sutras of Patanjali",
          hours: 10,
          description:
            "Deep study of classical yoga texts and their practical application",
        },
        {
          category: "Teaching Methodology",
          subject: "Basic Teaching Principles",
          hours: 8,
          description:
            "How to sequence classes, give clear instructions, and assist students",
        },
        {
          category: "Mantras",
          subject: "Sanskrit & Mantra Chanting",
          hours: 6,
          description:
            "Pronunciation, meaning, and practice of traditional yoga mantras",
        },
        {
          category: "Pranayama",
          subject: "Advanced Breathing Techniques",
          hours: 8,
          description:
            "Anulom Vilom, Surya Bhedana, and therapeutic breathing practices",
        },
      ],
    },
    {
      week: 3,
      title: "Advanced Practice & Teaching Skills",
      topics: [
        {
          category: "Asana",
          subject: "Advanced Postures & Adjustments",
          hours: 20,
          description:
            "Challenging poses, inversions, and hands-on adjustment techniques",
        },
        {
          category: "Teaching Methodology",
          subject: "Class Sequencing & Planning",
          hours: 12,
          description:
            "Creating balanced sequences for different levels and therapeutic needs",
        },
        {
          category: "Anatomy",
          subject: "Advanced Anatomy & Physiology",
          hours: 10,
          description:
            "Deeper understanding of body systems and yoga therapy principles",
        },
        {
          category: "Practical Teaching",
          subject: "Student Teaching Practice",
          hours: 15,
          description:
            "Practice teaching with feedback, voice projection, and class management",
        },
        {
          category: "Philosophy",
          subject: "Bhagavad Gita & Hatha Yoga Pradipika",
          hours: 8,
          description:
            "Study of classical yoga texts and their relevance to modern practice",
        },
      ],
    },
    {
      week: 4,
      title: "Mastery & Certification Preparation",
      topics: [
        {
          category: "Practical Teaching",
          subject: "Final Teaching Assessments",
          hours: 20,
          description:
            "Individual teaching evaluations and constructive feedback sessions",
        },
        {
          category: "Teaching Methodology",
          subject: "Business of Yoga Teaching",
          hours: 8,
          description:
            "How to start teaching, setting up classes, and building a yoga career",
        },
        {
          category: "Philosophy",
          subject: "Integration & Personal Practice",
          hours: 8,
          description:
            "Developing a lifelong practice and maintaining teacher integrity",
        },
        {
          category: "Asana",
          subject: "Mastery Practice Sessions",
          hours: 12,
          description:
            "Refinement of personal practice and advanced variations",
        },
        {
          category: "Meditation",
          subject: "Advanced Meditation Techniques",
          hours: 8,
          description:
            "Vipassana, Trataka, and other traditional meditation methods",
        },
      ],
    },
  ],

  dailySchedule: [
    {
      time: "05:30",
      activity: "Wake Up & Personal Hygiene",
      duration: "30 min",
      type: "rest",
    },
    {
      time: "06:00",
      activity: "Pranayama & Meditation",
      duration: "90 min",
      type: "practice",
    },
    {
      time: "07:30",
      activity: "Morning Herbal Tea",
      duration: "30 min",
      type: "meal",
    },
    {
      time: "08:00",
      activity: "Hatha Yoga Asana Practice",
      duration: "90 min",
      type: "practice",
    },
    { time: "09:30", activity: "Breakfast", duration: "60 min", type: "meal" },
    {
      time: "10:30",
      activity: "Free Time / Rest",
      duration: "60 min",
      type: "rest",
    },
    {
      time: "11:30",
      activity: "Yoga Philosophy",
      duration: "90 min",
      type: "theory",
    },
    { time: "13:00", activity: "Lunch", duration: "90 min", type: "meal" },
    {
      time: "14:30",
      activity: "Rest Time / Self Study",
      duration: "90 min",
      type: "rest",
    },
    {
      time: "16:00",
      activity: "Yoga Anatomy & Physiology",
      duration: "60 min",
      type: "theory",
    },
    {
      time: "17:00",
      activity: "Ashtanga Vinyasa Yoga Practice",
      duration: "90 min",
      type: "practice",
    },
    { time: "18:30", activity: "Dinner", duration: "60 min", type: "meal" },
    {
      time: "19:30",
      activity: "Free Time / Personal Practice",
      duration: "60 min",
      type: "rest",
    },
    {
      time: "20:30",
      activity: "Satsang / Kirtan / Meditation",
      duration: "60 min",
      type: "meditation",
    },
    { time: "21:30", activity: "Rest / Sleep", duration: "-", type: "rest" },
  ],

  availableDates: {
    upcomingDates: [
      {
        startDate: "2025-10-01",
        endDate: "2025-10-24",
        status: "Available",
        specialOffer: "Early Bird: Save $100",
      },
      {
        startDate: "2025-11-01",
        endDate: "2025-11-24",
        status: "Filling Fast",
      },
      { startDate: "2025-12-01", endDate: "2025-12-24", status: "Available" },
      {
        startDate: "2026-01-01",
        endDate: "2026-01-24",
        status: "Available",
        specialOffer: "New Year Special: Save $150",
      },
      { startDate: "2026-02-01", endDate: "2026-02-24", status: "Available" },
      { startDate: "2026-03-01", endDate: "2026-03-24", status: "Available" },
    ],
    yearSchedule: [
      {
        month: "October",
        year: 2025,
        courses: [
          {
            startDate: "2025-10-01",
            endDate: "2025-10-24",
            status: "Available",
            specialOffer: "Early Bird: Save $100",
          },
        ],
      },
      {
        month: "November",
        year: 2025,
        courses: [
          {
            startDate: "2025-11-01",
            endDate: "2025-11-24",
            status: "Filling Fast",
          },
        ],
      },
      {
        month: "December",
        year: 2025,
        courses: [
          {
            startDate: "2025-12-01",
            endDate: "2025-12-24",
            status: "Available",
          },
        ],
      },
    ],
  },

  gallery: [
    {
      src: "/yogashala-classroom.jpg",
      alt: "Spacious yoga classroom with mountain views",
      category: "classroom",
      title: "Traditional Yoga Shala",
    },
    {
      src: "/morning-practice.jpg",
      alt: "Students practicing morning asanas",
      category: "asana-practice",
      title: "Morning Hatha Yoga Practice",
    },
    {
      src: "/meditation-session.jpg",
      alt: "Peaceful meditation by the Ganges",
      category: "meditation",
      title: "Riverside Meditation",
    },
    {
      src: "/accommodation-room.jpg",
      alt: "Clean and comfortable student accommodation",
      category: "accommodation",
      title: "Student Accommodation",
    },
    {
      src: "/organic-meals.jpg",
      alt: "Fresh vegetarian meals prepared with love",
      category: "dining",
      title: "Nutritious Yogic Meals",
    },
    {
      src: "/campus-garden.jpg",
      alt: "Peaceful ashram gardens and surroundings",
      category: "campus",
      title: "Serene Ashram Environment",
    },
    {
      src: "/teaching-practice.jpg",
      alt: "Students practicing teaching skills",
      category: "asana-practice",
      title: "Teaching Practice Sessions",
    },
    {
      src: "/philosophy-class.jpg",
      alt: "Traditional philosophy class setting",
      category: "classroom",
      title: "Yoga Philosophy Studies",
    },
  ],

  teachers: [
    {
      name: "Yogi Vishnu Panigrahi",
      title: "Senior Yoga Master & Course Director",
      image: "/yogashala-founder1.jpg",
      specialization: [
        "Hatha Yoga",
        "Ashtanga Yoga",
        "Yoga Philosophy",
        "Pranayama",
      ],
      experience: "25+ years",
      bio: "A traditional yoga master from Rishikesh with over 25 years of experience in teaching authentic yoga practices. Trained in classical Hatha and Ashtanga yoga traditions.",
      credentials: [
        "Traditional Gurukula Training",
        "Yoga Alliance E-RYT 500",
        "Sanskrit Scholar",
      ],
      teachingSubjects: [
        "Hatha Yoga Asana",
        "Ashtanga Primary Series",
        "Yoga Philosophy",
        "Advanced Pranayama",
      ],
    },
    {
      name: "Dr. Rajesh Kumar",
      title: "Yoga Anatomy & Physiology Expert",
      image: "/teacher-anatomy.jpg",
      specialization: ["Yoga Anatomy", "Therapeutic Yoga", "Injury Prevention"],
      experience: "15+ years",
      bio: "Medical doctor and certified yoga therapist specializing in anatomical understanding of yoga postures and injury prevention for yoga practitioners.",
      credentials: [
        "MBBS",
        "Yoga Therapy Certification",
        "Sports Medicine Diploma",
      ],
      teachingSubjects: [
        "Yoga Anatomy",
        "Injury Prevention",
        "Therapeutic Applications",
        "Body Alignment",
      ],
    },
    {
      name: "Swami Atmananda",
      title: "Meditation & Philosophy Master",
      image: "/swami-teacher.jpg",
      specialization: [
        "Meditation",
        "Yoga Philosophy",
        "Sanskrit",
        "Mantra Chanting",
      ],
      experience: "20+ years",
      bio: "A devoted practitioner and teacher of traditional yoga philosophy and meditation techniques. Fluent in Sanskrit with deep knowledge of classical yoga texts.",
      credentials: [
        "Traditional Ashram Training",
        "Sanskrit Acharya",
        "Philosophy Studies",
      ],
      teachingSubjects: [
        "Meditation Techniques",
        "Yoga Sutras",
        "Bhagavad Gita",
        "Sanskrit & Mantras",
      ],
    },
    {
      name: "Yogi Ramesh Pandey",
      title: "Teaching Methodology Specialist",
      image: "/teaching-expert.jpg",
      specialization: [
        "Teaching Methodology",
        "Sequence Planning",
        "Student Adjustments",
      ],
      experience: "18+ years",
      bio: "Expert in yoga teaching methodology with extensive experience in training new yoga teachers. Specializes in effective communication and hands-on adjustments.",
      credentials: [
        "Yoga Alliance ERYT-500",
        "Teaching Training Specialist",
        "Adjustment Training",
      ],
      teachingSubjects: [
        "Teaching Methodology",
        "Class Sequencing",
        "Hands-on Adjustments",
        "Voice & Communication",
      ],
    },
  ],

  inclusions: [
    "24 days residential accommodation",
    "All vegetarian meals (breakfast, lunch, dinner)",
    "Daily yoga asana practice sessions",
    "Pranayama and meditation classes",
    "Yoga philosophy and anatomy lectures",
    "Teaching methodology training",
    "Course materials and manual",
    "Yoga Alliance RYT-200 certification",
    "Free Wi-Fi access",
    "Ayurvedic herbal teas",
    "Weekend excursions to local temples",
    "Airport pickup service",
    "Laundry service",
    "Post-course support and guidance",
  ],

  exclusions: [
    "International flights",
    "Visa fees",
    "Personal expenses",
    "Additional meals outside the ashram",
    "Medical insurance",
    "Personal shopping",
    "Additional excursions",
    "Spa treatments",
    "Private yoga classes",
    "Long distance phone calls",
  ],

  seo: {
    title: "200 Hour Yoga Teacher Training in Rishikesh | Hatha Yogashram",
    description:
      "Join our authentic 200-hour Yoga Teacher Training in Rishikesh. Yoga Alliance certified residential course with traditional Indian masters. Includes accommodation, meals, and comprehensive curriculum covering Hatha Yoga, Ashtanga, philosophy, and teaching methodology.",
    keywords: [
      "200 hour yoga teacher training",
      "yoga teacher training rishikesh",
      "yoga alliance certification",
      "hatha yoga training",
      "ashtanga yoga course",
      "yoga ttc india",
      "residential yoga course",
      "yoga certification rishikesh",
      "authentic yoga training",
      "traditional yoga school",
    ],
    canonical:
      "https://hathayogashram.com/200-hour-yoga-teacher-training-rishikesh",
    image: "https://hathayogashram.com/200-hour-ttc-hero.jpg",
    schema: {
      courseType: "200 Hour Yoga Teacher Training",
      provider: "Hatha Yogashram",
      location: "Rishikesh, India",
    },
  },
};

// ===========================================
// TTC COURSE REGISTRY
// ===========================================

export const TTC_COURSES_DATA = {
  "200-hour": TTC_200_HOUR,
  // Future courses can be added here:
  // '100-hour': TTC_100_HOUR,
  // '300-hour': TTC_300_HOUR,
  // '500-hour': TTC_500_HOUR,
} as const;

export type TTCCourseId = keyof typeof TTC_COURSES_DATA;

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

export const getTTCData = (courseId: TTCCourseId): TTCPageData => {
  return TTC_COURSES_DATA[courseId];
};

export const getAllTTCCourses = (): TTCPageData[] => {
  return Object.values(TTC_COURSES_DATA);
};

export const getTotalSyllabusHours = (syllabus: SyllabusModule[]): number => {
  return syllabus.reduce((total, module) => {
    return (
      total +
      module.topics.reduce((moduleTotal, topic) => moduleTotal + topic.hours, 0)
    );
  }, 0);
};

// ===========================================
// EXPORTS
// ===========================================

export default {
  TTC_200_HOUR,
  TTC_COURSES_DATA,
  getTTCData,
  getAllTTCCourses,
  getTotalSyllabusHours,
};
