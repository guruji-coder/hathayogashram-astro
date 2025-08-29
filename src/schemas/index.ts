import { organizationSchema } from './organization';
import { coursesSchema } from './courses';
import { philosophySchema } from './philosophy';
import { mantrasSchema } from './mantras';
import { faqSchema } from './faq';

export interface SchemaConfig {
  includeOrganization?: boolean;
  includeCourses?: boolean;
  includePhilosophy?: boolean;
  includeMantras?: boolean;
  includeFaq?: boolean;
  customSchemas?: any[];
}

export function generateSchemas(config: SchemaConfig = {}) {
  const {
    includeOrganization = true,
    includeCourses = false,
    includePhilosophy = false,
    includeMantras = false,
    includeFaq = false,
    customSchemas = []
  } = config;

  const schemas: any[] = [];

  if (includeOrganization) schemas.push(organizationSchema);
  if (includeCourses) schemas.push(coursesSchema);
  if (includePhilosophy) schemas.push(philosophySchema);
  if (includeMantras) schemas.push(mantrasSchema);
  if (includeFaq) schemas.push(faqSchema);
  
  return [...schemas, ...customSchemas];
}

// Page-specific schema configurations
export const pageSchemas = {
  home: () => generateSchemas({
    includeOrganization: true,
    includeCourses: true,
    includeFaq: true
  }),
  
  courses: () => generateSchemas({
    includeOrganization: true,
    includeCourses: true,
    includePhilosophy: true,
    includeFaq: true
  }),
  
  philosophy: () => generateSchemas({
    includeOrganization: true,
    includePhilosophy: true,
    includeMantras: true
  }),
  
  about: () => generateSchemas({
    includeOrganization: true,
    includePhilosophy: true
  }),
  
  contact: () => generateSchemas({
    includeOrganization: true
  })
};
