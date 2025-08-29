/**
 * ===========================================
 * NAVIGATION TYPES (LEGACY - DEPRECATED)
 * ===========================================
 *
 * ⚠️ This file is deprecated. All types have been moved to:
 * src/lib/constants/headerConstants.ts
 *
 * Please import from there instead for better organization.
 */

// Re-export from centralized constants for backward compatibility
export type { MenuItem } from '../../constants/headerConstants';

export interface NavigationState {
	mobileMenuOpen: boolean;
	openDropdowns: Set<string>;
}
