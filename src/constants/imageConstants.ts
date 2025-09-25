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
    YOGA_COURSE: `${COURSES_PATH}/programs/dailyschedule.jpg`,
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
// SIMPLE CAROUSEL DATA WITH ALT & DESCRIPTIONS
// ===========================================

export const YOGA_CAROUSEL_IMAGES = [
  {
    src: '/images/carousel/dilbharParsaritaPadottanasana.jpg',
    alt: 'Trikonasana (Triangle Pose)',
    description: 'Triangle pose strengthens legs and improves balance',
  },

  {
    src: '/images/carousel/gaganparsaritapaduttanasasana.jpg',
    alt: 'Prasarita Padottanasana (Wide-Legged Forward Bend)',
    description: 'Forward bend that stretches hamstrings and calms mind',
  },

  {
    src: '/images/carousel/dilbharExtended Hand-to-Big-Toe Pose.jpeg',
    alt: 'Utthita Hasta Padangusthasana (Extended Hand-to-Big-Toe Pose)',
    description: 'Balancing pose that develops focus and leg strength',
  },

  {
    src: '/images/carousel/Classroom.jpeg',
    alt: 'Yoga teacher training classroom session',
    description: 'Students learning yoga philosophy and teaching methodology',
  },
  {
    src: '/images/carousel/SideAnglePose.jpeg',
    alt: 'Utthita Parsvakonasana (Extended Side Angle Pose)',
    description: 'Side angle pose strengthens legs and opens hips',
  },

  {
    src: '/images/carousel/Garudasana.jpeg',
    alt: 'Garudasana (Eagle Pose)',
    description: 'Eagle pose improves concentration and balance',
  },
  {
    src: '/images/carousel/TreePose.jpeg',
    alt: 'Vrksasana (Tree Pose)',
    description: 'Tree pose develops stability and focus',
  },

  {
    src: '/images/carousel/RevolvedSideAnglePoseParivrittaParchvkona.jpg',
    alt: 'Parivrtta Parsvakonasana (Revolved Side Angle Pose)',
    description: 'Revolved side angle pose improves spinal flexibility',
  },
  {
    src: '/images/carousel/UpwardLotusPose.jpeg',
    alt: 'Urdhva Padmasana (Upward Lotus Pose)',
    description: 'Advanced seated pose for meditation and focus',
  },

  {
    src: '/images/carousel/Classroom2.jpeg',
    alt: 'Yoga training practical session',
    description: 'Hands-on practice and alignment workshop',
  },
];

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

// Just use the simple YOGA_CAROUSEL_IMAGES directly
export const YOGA_POSE_IMAGE_SET = YOGA_CAROUSEL_IMAGES;

export const CAROUSEL_IMAGE_SET = [
  COURSE_IMAGES.SCHOOL.MAIN_BUILDING,
  COURSE_IMAGES.PROGRAMS.YOGA_COURSE,
  ...ALL_FOUNDER_IMAGES,
  GALLERY_IMAGES.TESTIMONIALS.MAIN_TESTIMONIAL,
  CERTIFICATE_IMAGES.BG_CERTIFICATE,
] as const;

export const OFFICIAL_CAROUSEL_IMAGES = YOGA_CAROUSEL_IMAGES.map(img => img.src);

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

// Backward compatibility for training references
export const TRAINING_200_CAROUSEL_IMAGES = OFFICIAL_CAROUSEL_IMAGES;

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
  YOGA_CAROUSEL_IMAGES,
  ALL_FOUNDER_IMAGES,
  ALL_EXCURSION_IMAGES,
  ALL_COURSE_IMAGES,
  FOUNDER_IMAGE_SET,
  YOGA_POSE_IMAGE_SET,
  CAROUSEL_IMAGE_SET,
  OFFICIAL_CAROUSEL_IMAGES,
  LEGACY_IMAGE_PATHS,
  // Backward compatibility
  TEACHER_IMAGES_FLAT,
  GALLERY_IMAGES_FLAT,
  COURSE_IMAGES_FLAT,
};
