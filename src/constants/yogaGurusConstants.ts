/**
 * ===========================================
 * YOGA GURUS SECTION CONSTANTS
 * ===========================================
 *
 * This file contains all constants for the Spiritual Yoga Gurus section.
 */

// ===========================================
// YOGA GURUS SECTION CONTENT
// ===========================================

export const YOGA_GURUS_SECTION = {
  TITLE: "Our Spiritual Yoga Gurus",

  GURUS: [
    {
      id: 1,
      name: "Shri K. Pattabhi Jois",
      image: "/yogashala-founder1.jpg",
    },
    {
      id: 2,
      name: "A. C. Bhaktivedanta Swami Prabhupada",
      image: "/yogashala-founder1.jpg",
    },
    {
      id: 3,
      name: "Maharishi Mahesh Yogi",
      image: "/yogashala-founder1.jpg",
    },
    {
      id: 4,
      name: "B.K.S. Iyengar",
      image: "/yogashala-founder1.jpg",
    },
    {
      id: 4,
      name: "B.K.S. Iyengar",
      image: "/yogashala-founder1.jpg",
    },
  ],
} as const;

// ===========================================
// YOGA GURUS SECTION STYLING
// ===========================================

export const YOGA_GURUS_STYLES = {
  // Section styles
  SECTION_BACKGROUND: "from-purple-50 to-white px-4 py-16",
  CONTAINER: "mx-auto max-w-7xl",

  // Header styles
  TITLE: "text-4xl font-bold text-gray-800",

  // Cards container - horizontal scroll
  CARDS_CONTAINER:
    "flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pt-12 pb-4",

  // Spiritual Card Styles
  SPIRITUAL_CARD:
    "w-[calc(100%-12px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start px-6 transition-all duration-300 hover:scale-105 rounded-3xl",

  // Profile image styles - bigger sizes
  PROFILE_CONTAINER: "mb-6 flex justify-center",
  PROFILE_IMAGE_WRAPPER:
    "w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-full",
  PROFILE_IMAGE:
    "h-full w-full rounded-full object-cover transition-transform duration-500 hover:scale-110",

  // Content styles
  CONTENT_CONTAINER: "text-center",
  NAME: "text-lg md:text-xl text-gray-800 mt-4 font-light font-space",

  // Scroll indicators
  INDICATORS_CONTAINER: "flex justify-center mt-8 space-x-2",
  INDICATOR:
    "w-3 h-3 rounded-full bg-purple-300 transition-all duration-300 hover:bg-purple-500 cursor-pointer",
  INDICATOR_ACTIVE: "bg-purple-600 scale-125",
} as const;
