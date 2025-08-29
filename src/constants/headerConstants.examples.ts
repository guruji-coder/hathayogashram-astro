/**
 * ===========================================
 * HEADER CONSTANTS USAGE EXAMPLES
 * ===========================================
 *
 * This file shows you how to use the centralized header constants.
 * Copy these patterns to your components.
 */

// ===========================================
// IMPORT EXAMPLES
// ===========================================

// Import specific constants you need
// Uncomment the imports you actually use in your components:
// import {
//   HEADER_BRANDING,
//   HEADER_CONTACT,
//   HEADER_SOCIAL_MEDIA,
//   HEADER_NAVIGATION_ITEMS,
//   HEADER_CTA_BUTTON,
//   HEADER_STYLES
// } from './headerConstants';

// ===========================================
// USAGE EXAMPLES IN COMPONENTS
// ===========================================

/* 
// In Logo component:
<img
	src={HEADER_BRANDING.LOGO_IMAGE_PATH}
	alt={HEADER_BRANDING.LOGO_ALT_TEXT}
	class={HEADER_BRANDING.LOGO_HEIGHT_DESKTOP}
/>

// In TopBar component:
<a href={HEADER_CONTACT.ADDRESS.GOOGLE_MAPS_URL}>
	<i class={HEADER_CONTACT.ADDRESS.ICON}></i>
	{HEADER_CONTACT.ADDRESS.TEXT}
</a>

<a href="tel:{HEADER_CONTACT.PHONE.PHONE_NUMBER}">
	<i class={HEADER_CONTACT.PHONE.ICON}></i>
	{HEADER_CONTACT.PHONE.DISPLAY_TEXT}
</a>

// In Social Media links:
{#each HEADER_SOCIAL_MEDIA as social}
	<a 
		href={social.URL} 
		class="{HEADER_STYLES.TOP_BAR_LINK_COLORS} {social.HOVER_COLOR_CLASS}"
		aria-label={social.ARIA_LABEL}
	>
		<i class={social.ICON_CLASS}></i>
	</a>
{/each}

// In Navigation component:
{#each HEADER_NAVIGATION_ITEMS as item}
	<a href={item.href}>{item.label}</a>
{/each}

// In CTA Button:
<a href={HEADER_CTA_BUTTON.URL} class={HEADER_CTA_BUTTON.DESKTOP_CLASSES}>
	{HEADER_CTA_BUTTON.TEXT}
</a>

// In styling:
<header class={HEADER_STYLES.HEADER_BACKGROUND}>
	<div class={HEADER_STYLES.TOP_BAR_BACKGROUND}>
		<!-- content -->
	</div>
	<nav class={HEADER_STYLES.NAV_CONTAINER}>
		<!-- content -->
	</nav>
</header>
*/

// ===========================================
// QUICK REFERENCE GUIDE
// ===========================================

/*
HEADER_BRANDING.*          - Logo paths, alt text, sizes
HEADER_CONTACT.*           - Address, phone, maps links
HEADER_SOCIAL_MEDIA[]*     - All social media links and styling
HEADER_NAVIGATION_ITEMS[]  - Complete menu structure
HEADER_CTA_BUTTON.*        - Apply Today button config
HEADER_DROPDOWN_WIDTHS.*   - Dropdown width classes
HEADER_STYLES.*            - All CSS classes organized by section
HEADER_ACCESSIBILITY.*     - ARIA labels and screen reader text
HEADER_ANIMATIONS.*        - Animation classes and transitions
HEADER_Z_INDEX.*           - Z-index values for layering
*/

export {}; // Make this a module
