/**
 * ===========================================
 * LOCATION SECTION CONSTANTS
 * ===========================================
 *
 * This file contains all constants for the Location/Visit Us section.
 */

// ===========================================
// LOCATION SECTION CONTENT
// ===========================================

export const LOCATION_SECTION = {
  TITLE: "How To Reach Us",

  // Travel Information
  TRAVEL_METHODS: [
    {
      TITLE: "By Airways",
      ICON: "fas fa-plane",
      CONTENT: [
        "Rishikesh is well-connected to all cities, so air travel is a convenient option.",
        "When you reach the Delhi International Airport, take a domestic flight to Jolly Grant International Airport (Dehradun), then hire a taxi to our school in Rishikesh.",
      ],
    },
    {
      TITLE: "By Roadways",
      ICON: "fas fa-road",
      CONTENT: [
        "Hiring a taxi from Delhi International Airport to Rishikesh is a scenic 5-6 hour journey, perfect for enjoying Indian hospitality and snacks at highway joints.",
        "The road to Rishikesh is an adventure. Let us know if you'd like more guidance.",
      ],
    },
    {
      TITLE: "By Railways",
      ICON: "fas fa-train",
      CONTENT: [
        "Take a train from Delhi to Haridwar (Yog Nagari Rishikesh Station). Haridwar is just 25 km from Rishikesh.",
        "From Haridwar, hire a taxi or Tuk-Tuk for the final 10-12 km to our school.",
      ],
    },
  ],
  // Transportation assistance note
  ASSISTANCE_NOTE: {
    TITLE: "Need transportation assistance?",
    TEXT: "We can arrange a taxi for you from Dehradun Airport to our school — you pay the driver directly. Contact us with your arrival details.",
  },

  // Map Information
  MAP_INFO: {
    ICON: "fas fa-map-marker-alt",
    IFRAME_SRC:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.695632465718!2d78.31846067613853!3d30.131521774879875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1a92133223b%3A0x5769fde72c39e6f5!2sHatha%20Yogashram!5e0!3m2!1sen!2sin!4v1756579609167!5m2!1sen!2sin",
  },
} as const;

// ===========================================
// LOCATION SECTION STYLING
// ===========================================

export const LOCATION_STYLES = {
  // Section styles
  SECTION_BACKGROUND: "px-4 py-16 bg-yellow-50",
  CONTAINER: "mx-auto max-w-7xl",

  // Header styles
  HEADER_CONTAINER: "mb-16 text-center",
  HEADER_TITLE: "text-4xl font-bold text-gray-800",

  // Main layout styles
  MAIN_LAYOUT: "flex flex-col lg:flex-row font-bold",
  COLUMN_WIDTH: "lg:w-1/2 w-full",

  // Card styles
  CARD_BASE: "bg-white",
  TRAVEL_CARD: "bg-white p-8",
  MAP_CARD: "bg-white p-6 h-full",

  // Content styles
  TRAVEL_ICON: "text-blue-600 mr-3",
  ROADWAY_ICON: "text-green-600 mr-3",
  RAILWAY_ICON: "text-purple-600 mr-3",

  TEXT_CONTENT: "text-gray-700 leading-relaxed",
  PARAGRAPH: "mb-4",
  STRONG_TEXT: "font-bold",

  // Travel sections styles
  TRAVEL_SECTION: "mb-8 last:mb-0",
  TRAVEL_SECTION_TITLE:
    "text-xl font-semibold text-gray-800 mb-4 flex items-center text-orange-400",

  // Assistance note styles
  ASSISTANCE_CONTAINER:
    "mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500",
  ASSISTANCE_TEXT: "text-sm text-blue-800",
  ASSISTANCE_ICON: "fas fa-info-circle mr-2",

  // Map styles
  MAP_CONTAINER: "h-96 lg:h-full min-h-[400px] rounded-xl overflow-hidden",
  MAP_IFRAME: "rounded-lg",
} as const;
