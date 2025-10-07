/**
 * ===========================================
 * CONSTANTS INDEX - CENTRALIZED EXPORTS
 * ===========================================
 *
 * This file re-exports all constants from their respective files.
 * Import constants from here for better organization.
 */

/**
 * ===========================================
 * CONSTANTS INDEX - CENTRALIZED EXPORTS
 * ===========================================
 *
 * This file re-exports all constants from their respective files.
 * Import constants from here for better organization.
 *
 * New structure:
 * - shared/     : Shared across multiple pages (images, routes, ui)
 * - components/ : Component-specific constants
 * - features/   : Feature-specific constants (courses, teachers, reviews)
 * - pages/      : Page-specific constants (home, ttc)
 */

// ============================================
// SHARED CONSTANTS
// ============================================
export * from './shared/images';
export * from './shared/routes';
export * from './shared/ui';

// ============================================
// COMPONENT CONSTANTS
// ============================================
export * from './components/navigation';
export * from './components/carousel';

// ============================================
// FEATURE CONSTANTS
// ============================================
// Courses
export * from './features/courses';

// Teachers
export * from './features/teachers/profiles';
export * from './features/teachers/gurus';

// Reviews
export * from './features/reviews/testimonials';

// ============================================
// PAGE CONSTANTS
// ============================================
// Home Page
export * from './pages/home';
export * from './pages/home/faq';
export * from './pages/home/location';
export * from './pages/home/contact';
export * from './pages/home/yoga-alliance';

// TTC Pages
export * from './pages/ttc/200hour';
export * from './pages/ttc/teachers';
