/**
 * ===========================================
 * HEADER CONSTANTS - CENTRALIZED CONFIGURATION
 * ===========================================
 *
 * This file contains ALL constants used in the header/navigation components.
 * Easy to find, easy to modify, easy to understand.
 */

import { CONTACT_INFO } from './contactConstants';

// ===========================================
// TYPES
// ===========================================

export interface MenuItem {
	label: string;
	href?: string;
	items?: MenuItem[];
}

// ===========================================
// BRANDING & LOGO CONSTANTS
// ===========================================

export const HEADER_BRANDING = {
	LOGO_IMAGE_PATH: '/hya.jpg',
	LOGO_ALT_TEXT: 'Best Yoga School in Rishikesh',
	LOGO_HEIGHT_DESKTOP: 'h-12 rounded-full',
	LOGO_HEIGHT_MOBILE: 'h-10'
} as const;

// ===========================================
// CONTACT INFORMATION CONSTANTS (Using shared constants)
// ===========================================

export const HEADER_CONTACT = {
	// Address Information
	ADDRESS: {
		TEXT: 'Balaknath Street, Laxman Jhula, Rishikesh',
		GOOGLE_MAPS_URL:
			'https://www.google.com/maps?ll=30.133182,78.323307&z=15&t=m&hl=en-US&gl=IN&mapclient=embed&cid=8074060808272492964',
		ICON: CONTACT_INFO.ADDRESSES[0].icon
	},

	// Phone Information
	PHONE: {
		DISPLAY_TEXT: `${CONTACT_INFO.PHONE.display} ${CONTACT_INFO.PHONE.note}`,
		PHONE_NUMBER: CONTACT_INFO.PHONE.number.replace(/[\s+]/g, ''),
		WHATSAPP_URL: CONTACT_INFO.PHONE.whatsapp,
		ICON: CONTACT_INFO.PHONE.icon
	}
} as const;

// ===========================================
// SOCIAL MEDIA LINKS CONSTANTS (Using shared constants)
// ===========================================

export const HEADER_SOCIAL_MEDIA = CONTACT_INFO.SOCIAL_MEDIA.map(social => ({
	PLATFORM_NAME: social.name,
	URL: social.url,
	ICON_CLASS: social.icon,
	HOVER_COLOR_CLASS: getHoverColor(social.name),
	ARIA_LABEL: social.label
}));

function getHoverColor(platform: string): string {
	switch (platform) {
		case 'Instagram':
			return 'hover:text-pink-600';
		case 'YouTube':
			return 'hover:text-red-600';
		case 'WhatsApp':
			return 'hover:text-green-600';
		default:
			return 'hover:text-blue-600';
	}
}

// ===========================================
// NAVIGATION MENU STRUCTURE CONSTANTS
// ===========================================

export const HEADER_NAVIGATION_ITEMS: MenuItem[] = [
	{
		label: 'Home',
		href: '/'
	},
	{
		label: 'About Us',
		items: [
			{ label: 'Founder Of Hatha Yoga Ashram', href: '/our-founder' },
			{ label: 'Our Teachers', href: '/our-team' },
			{ label: 'Accommodation', href: '/accommodation' },
			{ label: 'Yoga Community', href: '/yoga-community' },
			{ label: 'Photo Gallery', href: '/gallery' },
			{ label: 'What is in the Kitchen', href: '/kitchen' },
			{ label: 'FAQs', href: '/faq' },
			{ label: 'Blog', href: '/blog' }
		]
	},
	{
		label: 'Yoga TTC',
		items: [
			{ label: '100 Hour Yoga Teacher Training', href: '/courses/100-hour' },
			{ label: '200 Hour Yoga Teacher Training', href: '/courses/200-hour-yoga-teacher-training' },
			{ label: '300 Hour Yoga Teacher Training', href: '/courses/300-hour' },
			{ label: '500 Hour Yoga Teacher Training', href: '/courses/500-hour' },
			{ label: '200 Hour Kundalini Yoga Teacher Training', href: '/courses/kundalini' },
			{ label: 'Yoga Retreats In Rishikesh', href: '/courses/retreat' },
			{ label: 'Yoga Teacher Training Course In Bali', href: '/courses/bali' }
		]
	},
	{
		label: 'Short Course',
		items: [
			{ label: 'Aerial Yoga Teacher Training', href: '/courses/aerial' },
			{ label: 'Pre Natal Yoga TTC', href: '/courses/prenatal' },
			{ label: 'Yin Yoga Teacher Training', href: '/courses/yin' },
			{ label: 'Sound Healing TTC', href: '/courses/sound-healing' }
		]
	},
	{
		label: 'Online YTTC',
		items: [
			{ label: 'Online Courses', href: '/online/courses' },
			{ label: '200 Hour Self Paced YTTC', href: '/online/200-hour' },
			{ label: '300 Hour Self Paced YTTC', href: '/online/300-hour' },
			{ label: 'Online Yoga Nidra TTC', href: '/online/yoga-nidra' },
			{ label: 'Online Yin Yoga TTC', href: '/online/yin' }
		]
	},
	{
		label: 'Payment',
		href: '/payment'
	},
	{
		label: 'Contact Us',
		href: '/contact'
	}
];

// ===========================================
// CALL-TO-ACTION BUTTON CONSTANTS
// ===========================================

export const HEADER_CTA_BUTTON = {
	TEXT: 'Apply Today',
	URL: '/apply',
	DESKTOP_CLASSES:
		'rounded-full bg-orange-500 px-6 py-2 text-white transition-colors hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
	MOBILE_CLASSES:
		'block rounded-lg bg-orange-500 px-8 py-4 text-center text-xl font-semibold text-white transition-colors hover:bg-orange-600 focus:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
} as const;

// ===========================================
// DROPDOWN WIDTH CONFIGURATION
// ===========================================

export const HEADER_DROPDOWN_WIDTHS = {
	'Yoga TTC': 'w-80', // Widest dropdown for most items
	'Short Course': 'w-72', // Medium width
	'About Us': 'w-64', // Standard width
	'Online YTTC': 'w-64' // Standard width
} as const;

// ===========================================
// STYLING CONSTANTS
// ===========================================

export const HEADER_STYLES = {
	// Main header styling
	HEADER_BACKGROUND: 'bg-white shadow-lg sticky top-0 z-50',

	// Top bar styling
	TOP_BAR_BACKGROUND: 'bg-gray-100 py-2',
	TOP_BAR_TEXT_SIZE: 'text-sm',
	TOP_BAR_LINK_COLORS: 'text-gray-600 transition-colors hover:text-orange-500',

	// Navigation styling
	NAV_CONTAINER: 'relative container mx-auto px-4 py-4',
	NAV_DESKTOP_SPACING: 'hidden items-center space-x-8 lg:flex',
	NAV_LINK_COLORS:
		'text-gray-700 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none',

	// Mobile menu styling
	MOBILE_MENU_BACKGROUND:
		'absolute left-0 right-0 top-full z-[60] max-h-[50vh] overflow-y-auto bg-white shadow-lg border-b border-gray-200 lg:hidden',
	MOBILE_MENU_HEADER: 'flex items-center justify-between border-b border-gray-200 px-4 py-4',
	MOBILE_MENU_CONTENT: 'space-y-1 px-4',
	MOBILE_ITEM_STYLING: 'border-b border-gray-200',
	MOBILE_LINK_STYLING:
		'block text-lg font-medium text-gray-800 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none',
	MOBILE_SUBMENU_STYLING:
		'block py-2 text-lg text-gray-600 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none',

	// Button styling
	MOBILE_MENU_BUTTON:
		'p-2 lg:hidden focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-md',
	HAMBURGER_LINE: 'h-0.5 w-6 bg-gray-700 transition-all duration-300',

	// Close button styling
	CLOSE_BUTTON_SMALL:
		'flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
	CLOSE_BUTTON_MEDIUM:
		'flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2',
	CLOSE_BUTTON_LARGE:
		'flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'
} as const;

// ===========================================
// ACCESSIBILITY CONSTANTS
// ===========================================

export const HEADER_ACCESSIBILITY = {
	// ARIA labels
	MOBILE_MENU_TOGGLE: 'Toggle mobile menu',
	MOBILE_MENU_CLOSE: 'Close mobile menu',
	MOBILE_MENU_DIALOG: 'Mobile navigation menu',
	DROPDOWN_CLOSE_TEMPLATE: 'Close {menuLabel} submenu', // Use with string replacement

	// Keyboard shortcuts
	ESCAPE_KEY: 'Escape',

	// Screen reader text
	LOGO_FOCUS_TEXT: 'Go to homepage'
} as const;

// ===========================================
// ANIMATION CONSTANTS
// ===========================================

export const HEADER_ANIMATIONS = {
	// Dropdown animations
	DESKTOP_DROPDOWN_TRANSITION:
		'transition-all duration-300 group-hover:visible group-hover:opacity-100',
	MOBILE_DROPDOWN_TRANSITION: 'transition-transform duration-200',

	// Mobile menu animations
	HAMBURGER_TRANSFORM_TOP: 'translate-y-1.5 rotate-45',
	HAMBURGER_TRANSFORM_MIDDLE: 'opacity-0',
	HAMBURGER_TRANSFORM_BOTTOM: '-translate-y-1.5 -rotate-45',

	// Chevron animations
	CHEVRON_ROTATE: 'rotate-180',
	CHEVRON_NORMAL: ''
} as const;

// ===========================================
// Z-INDEX CONSTANTS
// ===========================================

export const HEADER_Z_INDEX = {
	DROPDOWN_MENU: 'z-50',
	MOBILE_MENU: 'z-50',
	CLOSE_BUTTONS: 'z-20'
} as const;
