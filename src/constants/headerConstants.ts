/**
 * ===========================================
 * HEADER CONSTANTS - CENTRALIZED CONFIGURATION
 * ===========================================
 *
 * This file contains ALL constants used in the header/navigation components.
 * Easy to find, easy to modify, easy to understand.
 */

import { CONTACT_INFO } from "./contactConstants";
import {
  ROUTE_HOME,
  ROUTE_OUR_FOUNDER,
  ROUTE_OUR_TEAM,
  ROUTE_ACCOMMODATION,
  ROUTE_YOGA_COMMUNITY,
  ROUTE_GALLERY,
  ROUTE_KITCHEN,
  ROUTE_FAQ,
  ROUTE_BLOG,
  ROUTE_TTC_100,
  ROUTE_TTC_200,
  ROUTE_TTC_300,
  ROUTE_TTC_500,
  ROUTE_KUNDALINI_TTC,
  ROUTE_RETREATS,
  ROUTE_BALI_TTC,
  ROUTE_AERIAL_YOGA,
  ROUTE_PRENATAL_YOGA,
  ROUTE_YIN_YOGA,
  ROUTE_SOUND_HEALING,
  ROUTE_ONLINE_COURSES,
  ROUTE_ONLINE_200,
  ROUTE_ONLINE_300,
  ROUTE_ONLINE_YIN,
  ROUTE_ONLINE_YOGA_NIDRA,
  ROUTE_PAYMENT,
  ROUTE_CONTACT,
  ROUTE_APPLY,
} from "./routesConstants";
import type { MenuItem } from "../types";

// ===========================================
// BRANDING & LOGO CONSTANTS
// ===========================================

export const HEADER_BRANDING = {
  LOGO_IMAGE_PATH: "/hya.jpg",
  LOGO_ALT_TEXT: "Best Yoga School in Rishikesh",
  LOGO_HEIGHT_DESKTOP: "h-12 rounded-full",
  LOGO_HEIGHT_MOBILE: "h-10",
} as const;

// ===========================================
// CONTACT INFORMATION CONSTANTS (Using shared constants)
// ===========================================

export const HEADER_CONTACT = {
  // Address Information
  ADDRESS: {
    TEXT: "Balaknath Street, Laxman Jhula, Rishikesh",
    GOOGLE_MAPS_URL:
      "https://www.google.com/maps?ll=30.133182,78.323307&z=15&t=m&hl=en-US&gl=IN&mapclient=embed&cid=8074060808272492964",
    ICON: CONTACT_INFO.ADDRESSES[0].icon,
  },

  // Phone Information
  PHONE: {
    DISPLAY_TEXT: `${CONTACT_INFO.PHONE.display} ${CONTACT_INFO.PHONE.note}`,
    PHONE_NUMBER: CONTACT_INFO.PHONE.number.replace(/[\s+]/g, ""),
    WHATSAPP_URL: CONTACT_INFO.PHONE.whatsapp,
    ICON: CONTACT_INFO.PHONE.icon,
  },
} as const;

// ===========================================
// SOCIAL MEDIA LINKS CONSTANTS (Using shared constants)
// ===========================================

export const HEADER_SOCIAL_MEDIA = CONTACT_INFO.SOCIAL_MEDIA.map((social) => ({
  PLATFORM_NAME: social.name,
  URL: social.url,
  ICON_CLASS: social.icon,
  HOVER_COLOR_CLASS: getHoverColor(social.name),
  ARIA_LABEL: social.label,
}));

function getHoverColor(platform: string): string {
  switch (platform) {
    case "Instagram":
      return "hover:text-pink-600";
    case "YouTube":
      return "hover:text-red-600";
    case "WhatsApp":
      return "hover:text-green-600";
    default:
      return "hover:text-blue-600";
  }
}

// ===========================================
// NAVIGATION MENU STRUCTURE CONSTANTS
// ===========================================

export const HEADER_NAVIGATION_ITEMS: MenuItem[] = [
  {
    label: "Home",
    href: ROUTE_HOME,
  },
  {
    label: "About Us",
    items: [
      { label: "Founder Of Hatha Yoga Ashram", href: ROUTE_OUR_FOUNDER },
      { label: "Our Teachers", href: ROUTE_OUR_TEAM },
      { label: "Accommodation", href: ROUTE_ACCOMMODATION },
      { label: "Yoga Community", href: ROUTE_YOGA_COMMUNITY },
      { label: "Photo Gallery", href: ROUTE_GALLERY },
      { label: "What is in the Kitchen", href: ROUTE_KITCHEN },
      { label: "FAQs", href: ROUTE_FAQ },
      { label: "Blog", href: ROUTE_BLOG },
    ],
  },
  {
    label: "Yoga TTC",
    items: [
      { label: "100 Hour Yoga Teacher Training", href: ROUTE_TTC_100 },
      { label: "200 Hour Yoga Teacher Training", href: ROUTE_TTC_200 },
      { label: "300 Hour Yoga Teacher Training", href: ROUTE_TTC_300 },
      { label: "500 Hour Yoga Teacher Training", href: ROUTE_TTC_500 },
      {
        label: "200 Hour Kundalini Yoga Teacher Training",
        href: ROUTE_KUNDALINI_TTC,
      },
      { label: "Yoga Retreats In Rishikesh", href: ROUTE_RETREATS },
      { label: "Yoga Teacher Training Course In Bali", href: ROUTE_BALI_TTC },
    ],
  },
  {
    label: "Short Course",
    items: [
      { label: "Aerial Yoga Teacher Training", href: ROUTE_AERIAL_YOGA },
      { label: "Pre Natal Yoga TTC", href: ROUTE_PRENATAL_YOGA },
      { label: "Yin Yoga Teacher Training", href: ROUTE_YIN_YOGA },
      { label: "Sound Healing TTC", href: ROUTE_SOUND_HEALING },
    ],
  },
  {
    label: "Online YTTC",
    items: [
      { label: "Online Courses", href: ROUTE_ONLINE_COURSES },
      { label: "200 Hour Self Paced YTTC", href: ROUTE_ONLINE_200 },
      { label: "300 Hour Self Paced YTTC", href: ROUTE_ONLINE_300 },
      { label: "Online Yoga Nidra TTC", href: ROUTE_ONLINE_YOGA_NIDRA },
      { label: "Online Yin Yoga TTC", href: ROUTE_ONLINE_YIN },
    ],
  },
  {
    label: "Payment",
    href: ROUTE_PAYMENT,
  },
  {
    label: "Contact Us",
    href: ROUTE_CONTACT,
  },
];

// ===========================================
// CALL-TO-ACTION BUTTON CONSTANTS
// ===========================================
export const HEADER_CTA_BUTTON = {
  TEXT: "Apply Today",
  URL: ROUTE_APPLY,
  DESKTOP_CLASSES:
    "rounded-full bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
  MOBILE_CLASSES:
    "block rounded-lg bg-orange-500 px-8 py-4 text-center text-xl font-semibold text-white transition-colors hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
} as const;

// ===========================================
// DROPDOWN WIDTH CONFIGURATION
// ===========================================

export const HEADER_DROPDOWN_WIDTHS = {
  "Yoga TTC": "w-80", // Widest dropdown for most items
  "Short Course": "w-72", // Medium width
  "About Us": "w-64", // Standard width
  "Online YTTC": "w-64", // Standard width
} as const;

// ===========================================
// STYLING CONSTANTS
// ===========================================

export const HEADER_STYLES = {
  // Main header styling
  HEADER_BACKGROUND: "bg-white shadow-lg sticky top-0 z-50",

  // Top bar styling
  TOP_BAR_BACKGROUND: "bg-gray-100 py-2",
  TOP_BAR_TEXT_SIZE: "text-sm",
  TOP_BAR_LINK_COLORS: "text-gray-600 transition-colors hover:text-orange-500",

  // Navigation styling
  NAV_CONTAINER: "relative container mx-auto px-4 py-4",
  NAV_DESKTOP_SPACING: "hidden items-center space-x-8 lg:flex",
  NAV_LINK_COLORS:
    "text-gray-700 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none",

  // Mobile menu styling
  MOBILE_MENU_BACKGROUND:
    "absolute left-0 right-0 top-full z-[60] max-h-[50vh] overflow-y-auto bg-white shadow-lg border-b border-gray-200 lg:hidden",
  MOBILE_MENU_HEADER:
    "flex items-center justify-between border-b border-gray-200 px-4 py-4",
  MOBILE_MENU_CONTENT: "space-y-1 px-4",
  MOBILE_ITEM_STYLING: "border-b border-gray-200",
  MOBILE_LINK_STYLING:
    "block text-lg font-medium text-gray-800 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none",
  MOBILE_SUBMENU_STYLING:
    "block py-2 text-lg text-gray-600 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none",

  // Button styling
  MOBILE_MENU_BUTTON:
    "p-2 lg:hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md",
  HAMBURGER_LINE: "h-0.5 w-6 bg-gray-700 transition-all duration-300",

  // Close button styling
  CLOSE_BUTTON_SMALL:
    "flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
  CLOSE_BUTTON_MEDIUM:
    "flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
  CLOSE_BUTTON_LARGE:
    "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2",
} as const;

// ===========================================
// ACCESSIBILITY CONSTANTS
// ===========================================

export const HEADER_ACCESSIBILITY = {
  // ARIA labels
  MOBILE_MENU_TOGGLE: "Toggle mobile menu",
  MOBILE_MENU_CLOSE: "Close mobile menu",
  MOBILE_MENU_DIALOG: "Mobile navigation menu",
  DROPDOWN_CLOSE_TEMPLATE: "Close {menuLabel} submenu", // Use with string replacement

  // Keyboard shortcuts
  ESCAPE_KEY: "Escape",

  // Screen reader text
  LOGO_FOCUS_TEXT: "Go to homepage",
} as const;

// ===========================================
// ANIMATION CONSTANTS
// ===========================================

export const HEADER_ANIMATIONS = {
  // Dropdown animations
  DESKTOP_DROPDOWN_TRANSITION:
    "transition-all duration-300 group-hover:visible group-hover:opacity-100",
  MOBILE_DROPDOWN_TRANSITION: "transition-transform duration-200",

  // Mobile menu animations
  HAMBURGER_TRANSFORM_TOP: "translate-y-1.5 rotate-45",
  HAMBURGER_TRANSFORM_MIDDLE: "opacity-0",
  HAMBURGER_TRANSFORM_BOTTOM: "-translate-y-1.5 -rotate-45",

  // Chevron animations
  CHEVRON_ROTATE: "rotate-180",
  CHEVRON_NORMAL: "",
} as const;

// ===========================================
// Z-INDEX CONSTANTS
// ===========================================

export const HEADER_Z_INDEX = {
  DROPDOWN_MENU: "z-50",
  MOBILE_MENU: "z-50",
  CLOSE_BUTTONS: "z-20",
} as const;
