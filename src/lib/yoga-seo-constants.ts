/**
 * Main export file for all yoga SEO constants
 * Import this file to access all keyword datasets
 */

// Import all keyword files
import * as AsanaKeywords from './asana-keywords';
import * as PranayamaKeywords from './pranayama-keywords';
import * as HealingKeywords from './healing-keywords';
import * as PhilosophyKeywords from './philosophy-keywords';

// Export everything
export { AsanaKeywords, PranayamaKeywords, HealingKeywords, PhilosophyKeywords };

/**
 * Combines all keyword arrays into a single array for global searching
 * @returns Array of all keywords
 *
 * NOTE: This function should only be called when absolutely necessary
 * as it processes large amounts of data and may impact performance.
 * Consider using more targeted keyword selections for most use cases.
 */
export function getAllKeywords(): string[] {
  // Use a Set from the start to avoid duplicates during collection
  const uniqueKeywords = new Set<string>();

  // Helper function to extract keywords more efficiently
  function addKeywordsToSet(obj: any): void {
    if (Array.isArray(obj)) {
      // If it's an array of strings, add elements to the Set
      obj.forEach(item => {
        if (typeof item === 'string') uniqueKeywords.add(item);
      });
    } else if (typeof obj === 'object' && obj !== null) {
      // If it's an object, process each of its values
      Object.values(obj).forEach(value => addKeywordsToSet(value));
    }
  }

  // Process each keyword collection - consider using lazy loading in the future
  // if this causes performance issues
  addKeywordsToSet(AsanaKeywords);
  addKeywordsToSet(PranayamaKeywords);
  addKeywordsToSet(HealingKeywords);
  addKeywordsToSet(PhilosophyKeywords);

  // Convert Set back to array
  return Array.from(uniqueKeywords);
}

/**
 * Common SEO patterns to use across the site
 */
export const SEO_PATTERNS = {
  // Title patterns
  titlePatterns: {
    home: '{siteName} - Authentic Yoga School in Rishikesh, India',
    courses: '{courseName} | {duration} Hour Yoga Teacher Training | {siteName}',
    healing: 'Yoga for {condition}: Natural Healing with Ancient Techniques | {siteName}',
    asana: '{sanskritName} ({englishName}): Benefits, Technique & Variations | {siteName}',
    pranayama: '{sanskritName} Breathing: Benefits & Step-by-Step Guide | {siteName}',
  },

  // Description patterns
  descriptionPatterns: {
    home: 'Experience authentic yoga at {siteName}, a traditional yoga school in Rishikesh, India. Offering yoga teacher training courses, retreats and workshops.',
    courses:
      'Join our {duration}-hour {courseName} at {siteName}, Rishikesh. Authentic training with experienced teachers. Yoga Alliance certified courses. Apply now!',
    healing:
      'Discover how yoga can help with {condition}. Evidence-based yoga poses, breathing techniques and meditation practices for natural healing.',
    asana:
      'Learn {sanskritName} ({englishName}) with proper alignment, benefits, contraindications and variations. Step-by-step guide for yoga practitioners.',
    pranayama:
      'Master {sanskritName} breathing technique for {benefit}. Learn correct technique, benefits and precautions in this comprehensive guide.',
  },

  // Schema markup patterns
  schemaPatterns: {
    course: {
      '@type': 'Course',
      name: '{courseName}',
      description: '{courseDescription}',
      provider: {
        '@type': 'Organization',
        name: '{siteName}',
        sameAs: '{siteUrl}',
      },
    },
    article: {
      '@type': 'Article',
      headline: '{headline}',
      description: '{description}',
      author: {
        '@type': 'Person',
        name: '{authorName}',
      },
      publisher: {
        '@type': 'Organization',
        name: '{siteName}',
        logo: {
          '@type': 'ImageObject',
          url: '{logoUrl}',
        },
      },
    },
  },
};

/**
 * Site metadata for consistent SEO
 */
export const SITE_METADATA = {
  siteName: 'Hatha Yogashram',
  siteUrl: 'https://hathayogashram.com',
  defaultTitle: 'Hatha Yogashram - Authentic Yoga School in Rishikesh, India',
  defaultDescription:
    'Experience authentic yoga at Hatha Yogashram, a traditional yoga school in Rishikesh, India. Join our yoga teacher training courses, retreats and workshops.',
  logoUrl: 'https://hathayogashram.com/logo.png',
  socialMedia: {
    instagram: 'https://instagram.com/hathayogashram',
    facebook: 'https://facebook.com/hathayogashram',
    youtube: 'https://youtube.com/hathayogashram',
    twitter: 'https://twitter.com/hathayogashram',
  },
  contactInfo: {
    email: 'info@hathayogashram.com',
    phone: '+91 1234567890',
    address: 'Laxman Jhula Road, Rishikesh, Uttarakhand, India 249302',
  },
};
