/**
 * ===========================================
 * UI CONSTANTS - UNIVERSAL BUTTON STYLES
 * ===========================================
 *
 * Simple, focused UI constants for buttons used across the app.
 */

// ===========================================
// UNIVERSAL BUTTON CONSTANTS
// ===========================================

export const BUTTON_STYLES = {
  // Base button styling - always combine with a variant
  BASE: 'px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center border cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',

  // Color variants - use these for consistent styling across the entire app
  VARIANTS: {
    PRIMARY:
      'text-white bg-purple-900 border-purple-900 hover:bg-white hover:text-purple-900 hover:border-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-xs',
    SECONDARY:
      'bg-white text-purple-900 border-purple-900 hover:bg-purple-50 hover:border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 text-sm',
  },
} as const;
