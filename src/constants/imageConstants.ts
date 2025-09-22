/**
 * ===========================================
 * IMAGE CONSTANTS - CENTRALIZED IMAGE PATHS
 * ===========================================
 *
 * This file contains all image paths used throughout the application.
 * All images are organized in the /public/images/ directory with semantic structure.
 */

// ===========================================
// BASE PATHS
// ===========================================

const IMAGES_BASE = '/images';
const LOGOS_PATH = `${IMAGES_BASE}/logos`;
const ICONS_PATH = `${IMAGES_BASE}/icons`;
const BACKGROUNDS_PATH = `${IMAGES_BASE}/backgrounds`;
const COURSES_PATH = `${IMAGES_BASE}/courses`;
const TEACHERS_PATH = `${IMAGES_BASE}/teachers`;
const GALLERY_PATH = `${IMAGES_BASE}/gallery`;
const CERTIFICATES_PATH = `${IMAGES_BASE}/certificates`;

// ===========================================
// LOGO IMAGES
// ===========================================

export const LOGO_IMAGES = {
  MAIN_LOGO: `${LOGOS_PATH}/hya.jpg`,
  YOGA_ALLIANCE_LOGO: `${LOGOS_PATH}/yoga-alliance-logo.png`,
} as const;

// ===========================================
// ICON IMAGES
// ===========================================

export const ICON_IMAGES = {
  OM_SYMBOL: `${ICONS_PATH}/svg/om.svg`,
  TRISHUL: `${ICONS_PATH}/jpg/trishul.jpg`,
} as const;

// ===========================================
// COURSE IMAGES - ORGANIZED BY TYPE
// ===========================================

export const COURSE_IMAGES = {
  SCHOOL: {
    MAIN_BUILDING: `${COURSES_PATH}/yoga-school/yogaschoolpic.jpg`,
  },
  PROGRAMS: {
    YOGA_COURSE: `${COURSES_PATH}/programs/yogacoursepic.jpg`,
  },
} as const;

// ===========================================
// TEACHER IMAGES - ORGANIZED BY ROLE
// ===========================================

export const TEACHER_IMAGES = {
  FOUNDERS: {
    FOUNDER_1: `${TEACHERS_PATH}/founders/yogashala-founder1.jpg`,
    FOUNDER_2: `${TEACHERS_PATH}/founders/yogashala-founder2.jpg`,
    FOUNDER_3: `${TEACHERS_PATH}/founders/yogashala-founder3.jpg`,
  },
  INSTRUCTORS: {
    // Future instructor photos will go here
  },
} as const;

// ===========================================
// GALLERY IMAGES - ORGANIZED BY CATEGORY
// ===========================================

export const GALLERY_IMAGES = {
  EXCURSIONS: {
    EXCURSION_1: `${GALLERY_PATH}/excursions/vys-excursion1.jpg`,
    EXCURSION_2: `${GALLERY_PATH}/excursions/vys-excursion2.jpg`,
    EXCURSION_3: `${GALLERY_PATH}/excursions/vys-excursion3.jpg`,
    EXCURSION_4: `${GALLERY_PATH}/excursions/vys-excursion4.jpg`,
    EXCURSION_5: `${GALLERY_PATH}/excursions/vys-excursion5.jpg`,
  },
  TESTIMONIALS: {
    MAIN_TESTIMONIAL: `${GALLERY_PATH}/testimonials/testimonial.jpg`,
  },
  FACILITIES: {
    // Future facility photos will go here
  },
  CLASSES: {
    // Future class photos will go here
  },
} as const;

// ===========================================
// BACKGROUND IMAGES
// ===========================================

export const BACKGROUND_IMAGES = {
  MANDALA: `${BACKGROUNDS_PATH}/mandala.jpg`,
  RED_RIBBON: `${BACKGROUNDS_PATH}/redribbon.jpg`,
  TRISHUL_BG: `${BACKGROUNDS_PATH}/trishulbg.jpg`,
  HIGH_JEWEL: `${BACKGROUNDS_PATH}/highjewel.svg`,
  LOW_JEWEL: `${BACKGROUNDS_PATH}/lowjewel.svg`,
} as const;

// ===========================================
// CERTIFICATE IMAGES
// ===========================================

export const CERTIFICATE_IMAGES = {
  BG_CERTIFICATE: `${CERTIFICATES_PATH}/bg-certificate.png`,
  CERTIFICATE: `${CERTIFICATES_PATH}/certificate.png`,
  YOGA_ALLIANCE_CERTIFICATE: `${CERTIFICATES_PATH}/yoga-alliance-yttc-certificate.webp`,
} as const;

// ===========================================
// CONVENIENT COLLECTIONS FOR COMPONENTS
// ===========================================

export const ALL_FOUNDER_IMAGES = Object.values(TEACHER_IMAGES.FOUNDERS);
export const ALL_EXCURSION_IMAGES = Object.values(GALLERY_IMAGES.EXCURSIONS);
export const ALL_COURSE_IMAGES = [
  ...Object.values(COURSE_IMAGES.SCHOOL),
  ...Object.values(COURSE_IMAGES.PROGRAMS),
];

export const FOUNDER_IMAGE_SET = [
  {
    src: TEACHER_IMAGES.FOUNDERS.FOUNDER_1,
    alt: 'Guru Ashish Ji performing seated spinal twist yoga pose',
  },
  {
    src: TEACHER_IMAGES.FOUNDERS.FOUNDER_2,
    alt: 'Guru Ashish Ji performing side plank variation yoga pose',
  },
  {
    src: TEACHER_IMAGES.FOUNDERS.FOUNDER_3,
    alt: 'Guru Ashish Ji performing standing balance yoga pose',
  },
] as const;

export const CAROUSEL_IMAGE_SET = [
  COURSE_IMAGES.SCHOOL.MAIN_BUILDING,
  COURSE_IMAGES.PROGRAMS.YOGA_COURSE,
  ...ALL_FOUNDER_IMAGES,
  GALLERY_IMAGES.TESTIMONIALS.MAIN_TESTIMONIAL,
  CERTIFICATE_IMAGES.BG_CERTIFICATE,
] as const;

export const TRAINING_200_CAROUSEL_IMAGES = [
  COURSE_IMAGES.PROGRAMS.YOGA_COURSE,
  COURSE_IMAGES.SCHOOL.MAIN_BUILDING,
] as const;

// ===========================================
// LEGACY MAPPINGS (for backward compatibility)
// ===========================================

export const LEGACY_IMAGE_PATHS = {
  // Old path -> New path mappings
  '/hya.jpg': LOGO_IMAGES.MAIN_LOGO,
  '/yogashala-founder1.jpg': TEACHER_IMAGES.FOUNDERS.FOUNDER_1,
  '/yogashala-founder2.jpg': TEACHER_IMAGES.FOUNDERS.FOUNDER_2,
  '/yogashala-founder3.jpg': TEACHER_IMAGES.FOUNDERS.FOUNDER_3,
  '/yogacoursepic.jpg': COURSE_IMAGES.PROGRAMS.YOGA_COURSE,
  '/yogaschoolpic.jpg': COURSE_IMAGES.SCHOOL.MAIN_BUILDING,
  '/testimonial.jpg': GALLERY_IMAGES.TESTIMONIALS.MAIN_TESTIMONIAL,
  '/certificate.png': CERTIFICATE_IMAGES.CERTIFICATE,
  '/bg-certificate.png': CERTIFICATE_IMAGES.BG_CERTIFICATE,
  '/yoga-alliance-logo.png': LOGO_IMAGES.YOGA_ALLIANCE_LOGO,
  '/yoga-alliance-yttc-certificate.webp': CERTIFICATE_IMAGES.YOGA_ALLIANCE_CERTIFICATE,
  '/mandala.jpg': BACKGROUND_IMAGES.MANDALA,
  '/trishul.jpg': ICON_IMAGES.TRISHUL,
  '/om.svg': ICON_IMAGES.OM_SYMBOL,
  '/vys-excursion1.jpg': GALLERY_IMAGES.EXCURSIONS.EXCURSION_1,
  '/vys-excursion2.jpg': GALLERY_IMAGES.EXCURSIONS.EXCURSION_2,
  '/vys-excursion3.jpg': GALLERY_IMAGES.EXCURSIONS.EXCURSION_3,
  '/vys-excursion4.jpg': GALLERY_IMAGES.EXCURSIONS.EXCURSION_4,
  '/vys-excursion5.jpg': GALLERY_IMAGES.EXCURSIONS.EXCURSION_5,
} as const;

// ===========================================
// BACKWARD COMPATIBILITY ALIASES
// ===========================================

// Keep old flat structure accessible for gradual migration
export const TEACHER_IMAGES_FLAT = {
  FOUNDER_1: TEACHER_IMAGES.FOUNDERS.FOUNDER_1,
  FOUNDER_2: TEACHER_IMAGES.FOUNDERS.FOUNDER_2,
  FOUNDER_3: TEACHER_IMAGES.FOUNDERS.FOUNDER_3,
} as const;

export const GALLERY_IMAGES_FLAT = {
  HYA_LOGO: LOGO_IMAGES.MAIN_LOGO, // Moved to logos
  TESTIMONIAL: GALLERY_IMAGES.TESTIMONIALS.MAIN_TESTIMONIAL,
  EXCURSION_1: GALLERY_IMAGES.EXCURSIONS.EXCURSION_1,
  EXCURSION_2: GALLERY_IMAGES.EXCURSIONS.EXCURSION_2,
  EXCURSION_3: GALLERY_IMAGES.EXCURSIONS.EXCURSION_3,
  EXCURSION_4: GALLERY_IMAGES.EXCURSIONS.EXCURSION_4,
  EXCURSION_5: GALLERY_IMAGES.EXCURSIONS.EXCURSION_5,
} as const;

export const COURSE_IMAGES_FLAT = {
  YOGA_COURSE: COURSE_IMAGES.PROGRAMS.YOGA_COURSE,
  YOGA_SCHOOL: COURSE_IMAGES.SCHOOL.MAIN_BUILDING,
} as const;

// ===========================================
// EXPORTS
// ===========================================

export default {
  LOGO_IMAGES,
  ICON_IMAGES,
  COURSE_IMAGES,
  TEACHER_IMAGES,
  GALLERY_IMAGES,
  BACKGROUND_IMAGES,
  CERTIFICATE_IMAGES,
  ALL_FOUNDER_IMAGES,
  ALL_EXCURSION_IMAGES,
  ALL_COURSE_IMAGES,
  FOUNDER_IMAGE_SET,
  CAROUSEL_IMAGE_SET,
  TRAINING_200_CAROUSEL_IMAGES,
  LEGACY_IMAGE_PATHS,
  // Backward compatibility
  TEACHER_IMAGES_FLAT,
  GALLERY_IMAGES_FLAT,
  COURSE_IMAGES_FLAT,
};
