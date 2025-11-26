/**
 * Simplified Schema Exports
 * Only keep essential schemas needed for SEO
 */

export { organizationSchema } from './organization';
export { coursesSchema } from './courses';
export { faqSchema } from './faq';

import { organizationSchema } from './organization';
import { coursesSchema } from './courses';
import { faqSchema } from './faq';

// Simple schema generation for pages
export const pageSchemas = {
  home: () => [organizationSchema, coursesSchema, faqSchema],
  courses: () => [organizationSchema, coursesSchema, faqSchema],
  about: () => [organizationSchema],
  contact: () => [organizationSchema],
};
