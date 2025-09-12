/**
 * ===========================================
 * TEACHERS SECTION CONSTANTS
 * ===========================================
 *
 * This file contains all constants for the Teachers carousel section.
 */

// ===========================================
// TEACHERS DATA
// ===========================================

export const TEACHERS_CAROUSEL_SECTION = {
  TITLE: 'Meet Our Expert Yoga Teachers',

  TEACHERS: [
    {
      id: 1,
      name: 'Yogi Vishnu Panigrahi',
      specialty: 'Hatha & Ashtanga Yoga',
      experience: '15+ Years Experience',
      image: '/yogashala-founder1.jpg',
    },
    {
      id: 2,
      name: 'Yogini Priya Sharma',
      specialty: 'Hatha & Yin Yoga',
      experience: '12+ Years Experience',
      image: '/yogashala-founder2.jpg',
    },
    {
      id: 3,
      name: 'Master Raj Kumar',
      specialty: 'Pranayama & Meditation',
      experience: '20+ Years Experience',
      image: '/yogashala-founder3.jpg',
    },
    {
      id: 4,
      name: 'Yogini Anita Devi',
      specialty: 'Prenatal & Restorative Yoga',
      experience: '10+ Years Experience',
      image: '/yogashala-founder1.jpg',
    },
    {
      id: 5,
      name: 'Yogi Suresh Tiwari',
      specialty: 'Ayurveda & Sound Healing',
      experience: '18+ Years Experience',
      image: '/yogashala-founder2.jpg',
    },
    {
      id: 6,
      name: 'Master Deepak Joshi',
      specialty: 'Philosophy & Sanskrit',
      experience: '25+ Years Experience',
      image: '/yogashala-founder3.jpg',
    },
  ],
};

// ===========================================
// TEACHERS SECTION STYLING
// ===========================================

export const TEACHERS_STYLES = {
  // Section styles
  SECTION_BACKGROUND: 'py-16 bg-gradient-to-b from-purple-50 to-white',
  CONTAINER: 'container mx-auto max-w-full px-4',

  // Header styles
  TITLE: 'mb-4 text-2xl font-bold text-purple-900 sm:text-3xl lg:text-4xl',

  // Card styles
  CARD: 'text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300',
  IMAGE_CONTAINER: 'mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-orange-300',
  IMAGE: 'h-full w-full object-cover',
  SPECIALTY: 'text-sm font-light text-primary',
  NAME: 'text-lg font-semibold text-black',
  EXPERIENCE: 'text-xs font-light text-gray-600',

  // Navigation styles
  NAV_BUTTON:
    'absolute top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors',
  PREV_BUTTON: 'left-2',
  NEXT_BUTTON: 'right-2',

  // Dots styles
  DOT: 'dot w-3 h-3 rounded-full transition-all duration-300',
  DOT_ACTIVE: 'bg-orange-500 scale-110',
  DOT_INACTIVE: 'bg-gray-300',
};
