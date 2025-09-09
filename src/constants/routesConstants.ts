/**
 * ===========================================
 * ROUTES CONSTANTS - CENTRALIZED URL MANAGEMENT
 * ===========================================
 *
 * This file contains ALL route constants used throughout the application.
 * Centralized for easy maintenance, consistency, and SEO optimization.
 */

// ===========================================
// MAIN SITE ROUTES
// ===========================================

export const ROUTES = {
  // Homepage
  HOME: '/',

  // Main Pages
  ABOUT: '/our-founder',
  CONTACT: '/contact',
  BLOG: '/blog',
  GALLERY: '/gallery',
  FAQ: '/faq',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  PAYMENT: '/payment',
  APPLY: '/apply',

  // About Sub-pages
  OUR_FOUNDER: '/our-founder',
  OUR_TEAM: '/our-team',
  ACCOMMODATION: '/accommodation',
  YOGA_COMMUNITY: '/yoga-community',
  KITCHEN: '/kitchen',

  // Course Listing
  COURSES: '/courses',

  // Yoga Teacher Training Courses (TTC)
  TTC_100: '/courses/100-hour',
  TTC_200: '/200-hour-yoga-teacher-training-rishikesh',
  TTC_300: '/300-hour-yoga-teacher-training-rishikesh',
  TTC_500: '/500-hour-yoga-teacher-training-rishikesh',

  // Specialized Courses
  KUNDALINI_TTC: '/courses/kundalini',
  RETREATS: '/courses/retreat',
  BALI_TTC: '/courses/bali',

  // Short Courses
  AERIAL_YOGA: '/courses/aerial',
  PRENATAL_YOGA: '/courses/prenatal',
  YIN_YOGA: '/courses/yin',
  SOUND_HEALING: '/courses/sound-healing',

  // Online Courses
  ONLINE_COURSES: '/online/courses',
  ONLINE_200: '/online/200-hour',
  ONLINE_300: '/online/300-hour',
  ONLINE_YIN: '/online/yin',
  ONLINE_YOGA_NIDRA: '/online/yoga-nidra',

  // Masters/Philosophy Pages
  MASTERS: '/masters',
  LORD_SHIVA: '/masters/lord-shiva',
  PATANJALI: '/masters/patanjali',
  SAGE_VASHISHTA: '/masters/sage-vashishta',

  // Blog Pages
  EIGHT_LIMBS_OF_YOGA: '/blog/eight-limbs-of-yoga',
  DHYANA_MEDITATION: '/blog/dhyana-meditation-mastery',

  // Special Pages
  FOUNDER_DETAIL: '/founder',
  SHIVA_YOGA_INTENSIVE: '/courses/shiva-yoga-intensive',
  YOGA_SUTRAS_INTENSIVE: '/courses/yoga-sutras-intensive',
  YOGA_VASHISHTA_STUDY: '/courses/yoga-vashishta-study',
  ANCIENT_MASTERS_INTENSIVE: '/courses/ancient-masters-intensive',
} as const;

// ===========================================
// CONVENIENT ROUTE EXPORTS
// ===========================================

// Main navigation routes
export const ROUTE_HOME = ROUTES.HOME;
export const ROUTE_ABOUT = ROUTES.ABOUT;
export const ROUTE_CONTACT = ROUTES.CONTACT;
export const ROUTE_BLOG = ROUTES.BLOG;
export const ROUTE_GALLERY = ROUTES.GALLERY;
export const ROUTE_FAQ = ROUTES.FAQ;
export const ROUTE_COURSES = ROUTES.COURSES;

// About section routes
export const ROUTE_OUR_FOUNDER = ROUTES.OUR_FOUNDER;
export const ROUTE_OUR_TEAM = ROUTES.OUR_TEAM;
export const ROUTE_ACCOMMODATION = ROUTES.ACCOMMODATION;
export const ROUTE_YOGA_COMMUNITY = ROUTES.YOGA_COMMUNITY;
export const ROUTE_KITCHEN = ROUTES.KITCHEN;

// TTC Course routes
export const ROUTE_TTC_100 = ROUTES.TTC_100;
export const ROUTE_TTC_200 = ROUTES.TTC_200;
export const ROUTE_TTC_300 = ROUTES.TTC_300;
export const ROUTE_TTC_500 = ROUTES.TTC_500;

// Specialized course routes
export const ROUTE_KUNDALINI_TTC = ROUTES.KUNDALINI_TTC;
export const ROUTE_RETREATS = ROUTES.RETREATS;
export const ROUTE_BALI_TTC = ROUTES.BALI_TTC;

// Short course routes
export const ROUTE_AERIAL_YOGA = ROUTES.AERIAL_YOGA;
export const ROUTE_PRENATAL_YOGA = ROUTES.PRENATAL_YOGA;
export const ROUTE_YIN_YOGA = ROUTES.YIN_YOGA;
export const ROUTE_SOUND_HEALING = ROUTES.SOUND_HEALING;

// Online course routes
export const ROUTE_ONLINE_COURSES = ROUTES.ONLINE_COURSES;
export const ROUTE_ONLINE_200 = ROUTES.ONLINE_200;
export const ROUTE_ONLINE_300 = ROUTES.ONLINE_300;
export const ROUTE_ONLINE_YIN = ROUTES.ONLINE_YIN;
export const ROUTE_ONLINE_YOGA_NIDRA = ROUTES.ONLINE_YOGA_NIDRA;

// Footer/Legal routes
export const ROUTE_PRIVACY = ROUTES.PRIVACY;
export const ROUTE_TERMS = ROUTES.TERMS;
export const ROUTE_PAYMENT = ROUTES.PAYMENT;
export const ROUTE_APPLY = ROUTES.APPLY;

// Masters/Philosophy routes
export const ROUTE_MASTERS = ROUTES.MASTERS;
export const ROUTE_LORD_SHIVA = ROUTES.LORD_SHIVA;
export const ROUTE_PATANJALI = ROUTES.PATANJALI;
export const ROUTE_SAGE_VASHISHTA = ROUTES.SAGE_VASHISHTA;

// Blog routes
export const ROUTE_EIGHT_LIMBS_OF_YOGA = ROUTES.EIGHT_LIMBS_OF_YOGA;
export const ROUTE_DHYANA_MEDITATION = ROUTES.DHYANA_MEDITATION;

// Special course routes
export const ROUTE_FOUNDER_DETAIL = ROUTES.FOUNDER_DETAIL;
export const ROUTE_SHIVA_YOGA_INTENSIVE = ROUTES.SHIVA_YOGA_INTENSIVE;
export const ROUTE_YOGA_SUTRAS_INTENSIVE = ROUTES.YOGA_SUTRAS_INTENSIVE;
export const ROUTE_YOGA_VASHISHTA_STUDY = ROUTES.YOGA_VASHISHTA_STUDY;
export const ROUTE_ANCIENT_MASTERS_INTENSIVE = ROUTES.ANCIENT_MASTERS_INTENSIVE;

// ===========================================
// ROUTE CATEGORIES FOR EASY GROUPING
// ===========================================

export const MAIN_NAVIGATION_ROUTES = {
  HOME: ROUTE_HOME,
  ABOUT: ROUTE_ABOUT,
  CONTACT: ROUTE_CONTACT,
  COURSES: ROUTE_COURSES,
  BLOG: ROUTE_BLOG,
} as const;

export const ABOUT_ROUTES = {
  FOUNDER: ROUTE_OUR_FOUNDER,
  TEAM: ROUTE_OUR_TEAM,
  ACCOMMODATION: ROUTE_ACCOMMODATION,
  COMMUNITY: ROUTE_YOGA_COMMUNITY,
  GALLERY: ROUTE_GALLERY,
  KITCHEN: ROUTE_KITCHEN,
  FAQ: ROUTE_FAQ,
} as const;

export const TTC_ROUTES = {
  TTC_100: ROUTE_TTC_100,
  TTC_200: ROUTE_TTC_200,
  TTC_300: ROUTE_TTC_300,
  TTC_500: ROUTE_TTC_500,
  KUNDALINI: ROUTE_KUNDALINI_TTC,
  RETREATS: ROUTE_RETREATS,
  BALI: ROUTE_BALI_TTC,
} as const;

export const SHORT_COURSE_ROUTES = {
  AERIAL: ROUTE_AERIAL_YOGA,
  PRENATAL: ROUTE_PRENATAL_YOGA,
  YIN: ROUTE_YIN_YOGA,
  SOUND_HEALING: ROUTE_SOUND_HEALING,
} as const;

export const ONLINE_COURSE_ROUTES = {
  COURSES: ROUTE_ONLINE_COURSES,
  TTC_200: ROUTE_ONLINE_200,
  TTC_300: ROUTE_ONLINE_300,
  YIN: ROUTE_ONLINE_YIN,
  YOGA_NIDRA: ROUTE_ONLINE_YOGA_NIDRA,
} as const;

// ===========================================
// UTILITY FUNCTIONS
// ===========================================

/**
 * Get route by key
 */
export function getRoute(key: keyof typeof ROUTES): string {
  return ROUTES[key];
}

/**
 * Check if a path matches a route
 */
export function isRoute(path: string, routeKey: keyof typeof ROUTES): boolean {
  return path === ROUTES[routeKey];
}

/**
 * Get all routes as an array
 */
export function getAllRoutes(): string[] {
  return Object.values(ROUTES);
}

// ===========================================
// TYPE DEFINITIONS
// ===========================================

export type RouteKey = keyof typeof ROUTES;
export type RouteValue = (typeof ROUTES)[RouteKey];

// ===========================================
// DEFAULT EXPORT
// ===========================================

export default ROUTES;
