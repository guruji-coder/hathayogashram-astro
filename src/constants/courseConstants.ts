/**
 * ===========================================
 * COURSE CONSTANTS - ALL COURSE DEFINITIONS
 * ===========================================
 *
 * This file contains course definitions for specialized yoga teacher training programs.
 * Main YTTC courses are in homePageConstants.ts under YOGA_COURSES_CARDS_SECTION
 */

// ===========================================
// SPECIALIZED COURSE TYPES
// ===========================================

export interface Course {
  readonly id: number;
  readonly title: string;
  readonly duration: string;
  readonly module: string;
  readonly privateRoom: string;
  readonly sharedRoom: string;
  readonly certification: string;
  readonly date: string;
  readonly image: string;
  readonly description: string;
}

// ===========================================
// YTTC - Yoga Teacher Training Courses
// ===========================================
export const YTTC_COURSES: Course[] = [
  {
    id: 1,
    title: "100 Hour Yoga Teacher Training Course",
    duration: "12 Days",
    module: "Residential with Meals",
    privateRoom: "USD 699",
    sharedRoom: "USD 499",
    certification: "Yoga Alliance",
    date: "1st-12th of every month",
    image: "/yogacoursepic.jpg",
    description: "Perfect for beginners seeking a comprehensive introduction to yoga teaching fundamentals.",
  },
  {
    id: 2,
    title: "200 Hour Yoga Teacher Training Course",
    duration: "24 Days",
    module: "Residential with Meals",
    privateRoom: "USD 1099",
    sharedRoom: "USD 899",
    certification: "Yoga Alliance",
    date: "1st-24th of every month",
    image: "/yogacoursepic.jpg",
    description: "The most popular certification course for aspiring yoga teachers worldwide.",
  },
  {
    id: 3,
    title: "300 Hour Yoga Teacher Training Course",
    duration: "28 Days",
    module: "Residential with Meals",
    privateRoom: "USD 1399",
    sharedRoom: "USD 1199",
    certification: "Yoga Alliance",
    date: "1st-28th of every month",
    image: "/yogacoursepic.jpg",
    description: "Advanced training to deepen your practice and teaching methodology.",
  },
  {
    id: 4,
    title: "500 Hour Yoga Teacher Training Course",
    duration: "8 Weeks",
    module: "Residential with Meals",
    privateRoom: "USD 2149",
    sharedRoom: "USD 1549",
    certification: "Yoga Alliance",
    date: "1st of every month",
    image: "/yogacoursepic.jpg",
    description: "Complete comprehensive training combining 200hr and 300hr certifications.",
  },
];

// ===========================================
// KUNDALINI YOGA TEACHER TRAINING COURSES
// ===========================================

export const KUNDALINI_COURSES: Course[] = [
  {
    id: 101,
    title: "200 Hour Kundalini Yoga Teacher Training Course",
    duration: "24 Days",
    module: "Residential with Meals",
    privateRoom: "USD 1899",
    sharedRoom: "USD 1699",
    certification: "Yoga Alliance",
    date: "Available on request",
    image: "/yogacoursepic.jpg",
    description: "Awaken your inner energy and learn the sacred practices of Kundalini Yoga. This transformative course combines ancient wisdom with modern teaching methodology, including Kundalini meditation techniques, pranayama and breathwork, mantra and sound healing, and chakra awakening practices.",
  },
  {
    id: 103,
    title: "300 Hour Kundalini Yoga Teacher Training",
    duration: "28 Days",
    module: "Residential with Meals",
    privateRoom: "USD 2499",
    sharedRoom: "USD 2199",
    certification: "Yoga Alliance",
    date: "Available on request",
    image: "/yogacoursepic.jpg",
    description: "Deep dive into advanced Kundalini practices including White Tantra, advanced breathing techniques, and the technology of consciousness. Perfect for experienced practitioners seeking mastery.",
  }
];

// ===========================================
// VEDIC CHANTING TEACHER TRAINING COURSES
// ===========================================

export const VEDIC_CHANTING_COURSES: Course[] = [
  {
    id: 102,
    title: "Vedic Chanting Teacher Training Course",
    duration: "200 Hours",
    module: "Residential with Meals",
    privateRoom: "USD 1399",
    sharedRoom: "USD 1199",
    certification: "Traditional Sanskrit Certification",
    date: "Available on request",
    image: "/yogacoursepic.jpg",
    description: "Dive deep into the sacred tradition of Vedic chanting and learn to teach these ancient Sanskrit practices with authenticity and reverence. Includes traditional Vedic pronunciation, Sanskrit grammar fundamentals, sacred text recitation, and traditional teaching methodology.",
  },
];

// ===========================================
// COURSE CATEGORIES FOR TABS
// ===========================================

export const COURSE_CATEGORIES = [
  {
    id: 'yttc',
    title: 'YTTC Courses',
    description: 'Traditional Yoga Teacher Training Certifications'
  },
  {
    id: 'kundalini',
    title: 'Kundalini Yoga TTC',
    description: 'Awaken your inner energy with Kundalini practices'
  },
  {
    id: 'vedic',
    title: 'Vedic Chanting TTC', 
    description: 'Master the sacred art of Vedic chanting'
  },

] as const;

export default {
  YTTC_COURSES,
  KUNDALINI_COURSES,
  VEDIC_CHANTING_COURSES,
  COURSE_CATEGORIES,
};
