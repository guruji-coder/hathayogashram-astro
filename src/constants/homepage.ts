/**
 * ===========================================
 * HOMEPAGE CONSTANTS - CENTRALIZED CONFIGURATION
 * ===========================================
 *
 * This file contains ALL constants used specifically for the homepage.
 * Organized by sections for easy maintenance and updates.
 */

import { ROUTE_TTC_200, ROUTE_TTC_100, ROUTE_TTC_300 } from './routesConstants';
import {
  COURSE_IMAGES_FLAT,
  TEACHER_IMAGES_FLAT,
  GALLERY_IMAGES_FLAT,
  FOUNDER_IMAGE_SET,
} from './imageConstants';

// ===========================================
// HERO SECTION
// ===========================================

export const HOMEPAGE_HERO = {
  TITLE: 'The Best Yoga School In Rishikesh, India',
  SUBTITLE: 'Namaste & Welcome to Hatha Yogashram',
  DESCRIPTION:
    'Transform your life with authentic yoga teachings in the spiritual capital of the world',

  RATING: {
    STARS: 5,
    TEXT: 'Rated Yoga School',
    COUNT: '13,000+ Happy Students',
  },

  CTA_BUTTONS: [
    {
      TEXT: 'Start Your Journey',
      URL: '/courses',
      TYPE: 'primary',
    },
    {
      TEXT: 'Watch Video',
      URL: '#video',
      TYPE: 'secondary',
    },
  ],

  BACKGROUND_IMAGE: COURSE_IMAGES_FLAT.YOGA_SCHOOL,
  OVERLAY_OPACITY: 'bg-black bg-opacity-40',
} as const;

// ===========================================
// HIGHLIGHT FEATURES
// ===========================================

export const HOMEPAGE_FEATURES = [
  {
    ICON: 'fas fa-crown',
    TITLE: "India's No.1 Yoga School",
    DESCRIPTION: 'Recognized as the premier yoga school in Rishikesh',
  },
  {
    ICON: 'fas fa-certificate',
    TITLE: 'Yoga Alliance Certified',
    DESCRIPTION: 'Internationally recognized certifications',
  },
  {
    ICON: 'fas fa-users',
    TITLE: 'Expert Teachers',
    DESCRIPTION: 'International Yoga Asana Champions as instructors',
  },
  {
    ICON: 'fas fa-shield-alt',
    TITLE: 'Trusted Globally',
    DESCRIPTION: '13,000+ students worldwide trust our teachings',
  },
] as const;

// ===========================================
// ABOUT SECTION
// ===========================================

export const HOMEPAGE_ABOUT = {
  TITLE: 'Welcome to Hatha Yogashram',
  SUBTITLE: 'Your Gateway to Authentic Yoga in Rishikesh',

  INTRO_PARAGRAPH:
    'At Hatha Yogashram, our goal is to provide you with the most authentic Yoga experience possible while exploring the spiritual centre and hub of the practice in Rishikesh. We strive to offer a personalised approach for all levels of students, from beginners to advanced.',

  CONTENT_PARAGRAPHS: [
    'We understand what it takes to make a powerful transformation on both physical and spiritual levels. Hence, we go all out to provide our students with the best in class facilities and an environment that allows for complete commitment to the practice of Yoga.',

    'You experience deep spiritual growth with our diverse yoga styles and personalised approach. Our traditional teaching methods and connection with our students set us apart from the rest.',

    'By joining us at Hatha Yogashram, you will be able to experience the beauty of the Himalayan foothills while learning from experienced and knowledgeable teachers in an authentic setting.',

    'Our master Yoga teachers are passionate and have years of experience in teaching yoga. Their enthusiasm will help you learn the nuances of Asanas, Pranayama, Alignment, Adjustment & Meditation quickly and easily.',
  ],

  STATS: [
    { NUMBER: '13,000+', LABEL: 'Students Trained' },
    { NUMBER: '25+', LABEL: 'Years Experience' },
    { NUMBER: '100%', LABEL: 'Yoga Alliance Certified' },
    { NUMBER: '50+', LABEL: 'Countries Reached' },
  ],

  GALLERY_IMAGES: [
    COURSE_IMAGES_FLAT.YOGA_SCHOOL,
    COURSE_IMAGES_FLAT.YOGA_COURSE,
    TEACHER_IMAGES_FLAT.FOUNDER_1,
    TEACHER_IMAGES_FLAT.FOUNDER_2,
  ],
} as const;

// ===========================================
// COURSES SECTION
// ===========================================

export const HOMEPAGE_COURSES = {
  TITLE: 'Our Yoga Teacher Training Courses',
  SUBTITLE: 'Transform your practice with internationally certified yoga teacher training programs',

  FEATURED_COURSES: [
    {
      ID: '100-hour',
      TITLE: '100 Hour Yoga Teacher Training',
      SUBTITLE: 'Perfect for Beginners',
      DURATION: '12 Days',
      LEVEL: 'Beginner',
      PRICE: { SHARED: '$499', PRIVATE: '$699' },
      DESCRIPTION:
        'Perfect for beginners seeking a comprehensive introduction to yoga teaching fundamentals.',
      IMAGE: COURSE_IMAGES_FLAT.YOGA_COURSE,
      FEATURES: ['Hatha Yoga', 'Basic Anatomy', 'Teaching Methods', 'Certificate'],
      POPULAR: false,
      URL: ROUTE_TTC_100,
    },
    {
      ID: '200-hour',
      TITLE: '200 Hour Yoga Teacher Training',
      SUBTITLE: 'Most Popular Choice',
      DURATION: '24 Days',
      LEVEL: 'Beginner to Intermediate',
      PRICE: { SHARED: '$899', PRIVATE: '$1099' },
      DESCRIPTION: 'The most popular certification course for aspiring yoga teachers worldwide.',
      IMAGE: COURSE_IMAGES_FLAT.YOGA_COURSE,
      FEATURES: ['Multi-Style Yoga', 'Anatomy & Physiology', 'Philosophy', 'Pranayama'],
      POPULAR: true,
      URL: ROUTE_TTC_200,
    },
    {
      ID: '300-hour',
      TITLE: '300 Hour Yoga Teacher Training',
      SUBTITLE: 'Advanced Training',
      DURATION: '28 Days',
      LEVEL: 'Intermediate to Advanced',
      PRICE: { SHARED: '$1199', PRIVATE: '$1399' },
      DESCRIPTION: 'Advanced training to deepen your practice and teaching methodology.',
      IMAGE: COURSE_IMAGES_FLAT.YOGA_COURSE,
      FEATURES: ['Advanced Asanas', 'Therapy', 'Meditation', 'Business Skills'],
      POPULAR: false,
      URL: ROUTE_TTC_300,
    },
  ],

  VIEW_ALL_TEXT: 'View All Courses',
  VIEW_ALL_URL: '/courses',
} as const;

// ===========================================
// FOUNDER SECTION
// ===========================================

export const HOMEPAGE_FOUNDER = {
  TITLE: 'Meet Our Founder',
  SUBTITLE: 'Ashish Ji, The Founder Of Hatha Yoga Ashram',

  INTRO_TEXT:
    'His Philosophy on yoga teaches us beyond just physical well-being; it is more about unlocking the power of our subconscious mind. It is an exploration of our inner self that seeks to bring us closer to understanding our true nature.',

  QUOTE:
    'Yoga creates a rhythm between mind and body that leads to an understanding of our true self',

  PHILOSOPHY_POINTS: [
    'You are the greatest form of energy & that energy travels through several mediums before it takes the shape of your desired reality.',
    'No matter how difficult life is, you have the power to create your own destiny.',
    'Yoga is one way to achieve your desired reality as it taps into the source of your own inner power.',
  ],

  HINDI_QUOTE:
    'Yesh, bhusha, aur bol se pare hai ek yogi, yogi ki asli pehchaan uski shakti se hoti hai.',
  HINDI_TRANSLATION:
    'A yogi is beyond his looks and overall appearance since the real identity of a yogi comes from his power.',

  IMAGES: [
    { SRC: TEACHER_IMAGES_FLAT.FOUNDER_1, ALT: 'Guru Ashish Ji in meditation pose' },
    { SRC: TEACHER_IMAGES_FLAT.FOUNDER_2, ALT: 'Guru Ashish Ji teaching yoga' },
    { SRC: TEACHER_IMAGES_FLAT.FOUNDER_3, ALT: 'Guru Ashish Ji in advanced pose' },
  ],

  ACHIEVEMENTS: [
    { YEAR: '2012', TITLE: 'Uttarakhand State Yoga Championship Award' },
    { YEAR: '2013', TITLE: 'Yoga Association Championship Award' },
    { YEAR: '2015', TITLE: 'World Federation of Yoga & Culture Award' },
    { YEAR: '2018', TITLE: 'International Yoga Championship' },
  ],
} as const;

// ===========================================
// TEACHERS SECTION
// ===========================================

export const HOMEPAGE_TEACHERS = {
  TITLE: 'Meet Our Expert Teachers',
  SUBTITLE: 'Learn from internationally certified yoga masters',

  INTRO_TEXT:
    'All our teachers and gurus are experienced instructors who are well trained and well-versed in all things about yoga - ensuring that all of our graduates are fully equipped to be successful.',

  HIGHLIGHT_TEXT: 'The core teachers at Hatha Yoga Ashram are international asana champions!',

  VIEW_ALL_TEXT: 'Meet All Teachers',
  VIEW_ALL_URL: '/teachers',
} as const;

// ===========================================
// FACILITIES SECTION
// ===========================================

export const HOMEPAGE_FACILITIES = {
  TITLE: 'World-Class Facilities',
  SUBTITLE: 'Everything you need for your yoga journey',

  FACILITIES: [
    {
      TITLE: 'Comfortable Accommodation',
      DESCRIPTION:
        'Clean, peaceful rooms with all modern amenities for a restful stay during your training.',
      IMAGE:
        'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/accomodation-1.webp?fit=750%2C750&ssl=1',
      ICON: 'fas fa-bed',
    },
    {
      TITLE: 'Nutritious Vegetarian Meals',
      DESCRIPTION:
        'Healthy, fresh meals prepared with local ingredients to support your yoga practice.',
      IMAGE:
        'https://i0.wp.com/hathayogashram.com/wp-content/uploads/2024/08/food.webp?fit=750%2C750&ssl=1',
      ICON: 'fas fa-utensils',
    },
    {
      TITLE: 'Adventure & Excursions',
      DESCRIPTION: 'Explore Rishikesh with white water rafting, temple visits, and nature trips.',
      IMAGE:
        'https://plus.unsplash.com/premium_photo-1697730398251-40cd8dc57e0b?w=900&auto=format&fit=crop&q=60',
      ICON: 'fas fa-mountain',
    },
    {
      TITLE: 'Transportation',
      DESCRIPTION: 'Airport pickup and local transportation arranged for your convenience.',
      IMAGE:
        'https://plus.unsplash.com/premium_photo-1682092820451-3ce57694b514?w=1000&auto=format&fit=crop&q=60',
      ICON: 'fas fa-car',
    },
  ],
} as const;

// ===========================================
// TESTIMONIALS SECTION
// ===========================================

export const HOMEPAGE_TESTIMONIALS = {
  TITLE: 'What Our Students Say',
  SUBTITLE: 'Hear from graduates who transformed their lives',

  VIEW_ALL_TEXT: 'Read More Reviews',
  VIEW_ALL_URL: '/reviews',
} as const;

// ===========================================
// CTA SECTION
// ===========================================

export const HOMEPAGE_CTA = {
  TITLE: 'Ready to Start Your Yoga Journey?',
  SUBTITLE:
    'Join thousands of students who have transformed their lives with our authentic yoga teachings',

  PRIMARY_BUTTON: {
    TEXT: 'Apply Now',
    URL: '/apply',
  },

  SECONDARY_BUTTON: {
    TEXT: 'Contact Us',
    URL: '/contact',
  },

  BACKGROUND_IMAGE: COURSE_IMAGES_FLAT.YOGA_SCHOOL,
} as const;

// ===========================================
// STYLING CONSTANTS
// ===========================================

export const HOMEPAGE_STYLES = {
  // Global styles
  SECTION_PADDING: 'py-16 lg:py-24',
  CONTAINER: 'container mx-auto px-4',

  // Hero section
  HERO: {
    CONTAINER: 'relative min-h-screen flex items-center justify-center',
    CONTENT: 'text-center text-white z-10 max-w-4xl mx-auto px-4',
    TITLE: 'text-4xl md:text-6xl font-bold mb-6',
    SUBTITLE: 'text-xl md:text-2xl mb-4',
    DESCRIPTION: 'text-lg md:text-xl mb-8 opacity-90',
    BUTTONS: 'flex flex-col sm:flex-row gap-4 justify-center',
    PRIMARY_BUTTON:
      'bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors',
    SECONDARY_BUTTON:
      'border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-colors',
  },

  // Features section
  FEATURES: {
    GRID: 'grid md:grid-cols-2 lg:grid-cols-4 gap-8',
    CARD: 'text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow',
    ICON: 'text-4xl text-orange-500 mb-4',
    TITLE: 'text-xl font-semibold mb-2',
    DESCRIPTION: 'text-gray-600',
  },

  // Section headers
  SECTION_HEADER: {
    CONTAINER: 'text-center mb-12',
    TITLE: 'text-3xl md:text-4xl font-bold text-gray-900 mb-4',
    SUBTITLE: 'text-lg text-gray-600 max-w-2xl mx-auto',
  },

  // Course cards
  COURSE_CARD: {
    CONTAINER: 'bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow',
    IMAGE: 'w-full h-48 object-cover',
    CONTENT: 'p-6',
    TITLE: 'text-xl font-semibold mb-2',
    SUBTITLE: 'text-orange-500 font-medium mb-2',
    DESCRIPTION: 'text-gray-600 mb-4',
    FEATURES: 'flex flex-wrap gap-2 mb-4',
    FEATURE_TAG: 'bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm',
    PRICE: 'text-2xl font-bold text-orange-500 mb-4',
    BUTTON:
      'w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition-colors',
    POPULAR_BADGE:
      'absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold',
  },
} as const;
