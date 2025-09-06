/**
 * SEO utility functions for generating metadata and structured data
 */

import { SITE_METADATA, SEO_PATTERNS } from '../lib/yoga-seo-constants';

/**
 * Types for SEO metadata
 */
export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  openGraph?: OpenGraphProps;
  additionalMetaTags?: MetaTag[];
  additionalLinkTags?: LinkTag[];
  structuredData?: any;
}

export interface OpenGraphProps {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  images?: Array<{
    url: string;
    alt?: string;
    width?: number;
    height?: number;
  }>;
  siteName?: string;
}

export interface MetaTag {
  name?: string;
  content: string;
  property?: string;
  httpEquiv?: string;
  charSet?: string;
}

export interface LinkTag {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
  color?: string;
  as?: string;
  crossOrigin?: string;
}

/**
 * Generate page title with pattern
 */
export function generateTitle(params: {
  pageType: keyof typeof SEO_PATTERNS.titlePatterns;
  values: Record<string, string>;
}): string {
  const { pageType, values } = params;
  let title = SEO_PATTERNS.titlePatterns[pageType] || '';

  // Replace all placeholders with values
  Object.entries(values).forEach(([key, value]) => {
    title = title.replace(`{${key}}`, value);
  });

  // Replace any remaining placeholders with default values
  title = title.replace('{siteName}', SITE_METADATA.siteName);

  return title;
}

/**
 * Generate page description with pattern
 */
export function generateDescription(params: {
  pageType: keyof typeof SEO_PATTERNS.descriptionPatterns;
  values: Record<string, string>;
}): string {
  const { pageType, values } = params;
  let description = SEO_PATTERNS.descriptionPatterns[pageType] || '';

  // Replace all placeholders with values
  Object.entries(values).forEach(([key, value]) => {
    description = description.replace(`{${key}}`, value);
  });

  // Replace any remaining placeholders with default values
  description = description.replace('{siteName}', SITE_METADATA.siteName);
  description = description.replace('{siteUrl}', SITE_METADATA.siteUrl);

  return description;
}

/**
 * Generate complete SEO props for a page
 */
export function generateSEO(params: {
  pageType: keyof typeof SEO_PATTERNS.titlePatterns & keyof typeof SEO_PATTERNS.descriptionPatterns;
  values: Record<string, string>;
  path: string;
  image?: string;
  structuredData?: any;
  noindex?: boolean;
}): SEOProps {
  const { pageType, values, path, image, structuredData, noindex } = params;

  const title = generateTitle({ pageType, values });
  const description = generateDescription({ pageType, values });
  const url = `${SITE_METADATA.siteUrl}${path}`;

  return {
    title,
    description,
    canonical: url,
    noindex: noindex || false,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [
        {
          url: image || `${SITE_METADATA.siteUrl}/og-image.jpg`,
          alt: title,
          width: 1200,
          height: 630,
        },
      ],
      siteName: SITE_METADATA.siteName,
    },
    additionalMetaTags: [
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image || `${SITE_METADATA.siteUrl}/twitter-image.jpg`,
      },
    ],
    structuredData,
  };
}

/**
 * Generate schema.org JSON-LD structured data
 */
export function generateStructuredData(data: any): string {
  return JSON.stringify(data);
}

/**
 * Generate keywords meta tag content from array of keywords
 */
export function generateKeywordsString(keywords: string[]): string {
  return keywords.join(', ');
}

/**
 * Generate proper alt text for images
 */
export function generateAltText(params: {
  name: string;
  type: 'asana' | 'teacher' | 'location' | 'retreat';
}): string {
  const { name, type } = params;

  switch (type) {
    case 'asana':
      return `${name} yoga pose demonstrated by instructor at Hatha Yogashram in Rishikesh, India`;
    case 'teacher':
      return `${name}, yoga teacher at Hatha Yogashram yoga school in Rishikesh, India`;
    case 'location':
      return `${name} at Hatha Yogashram yoga school in Rishikesh, India`;
    case 'retreat':
      return `Yoga retreat at ${name} with Hatha Yogashram from Rishikesh, India`;
    default:
      return name;
  }
}

/**
 * Generate TTC-specific meta tags with dynamic content
 */
export function generateTTCMetaTags(params: {
  courseType: '200-hour' | '300-hour' | '500-hour';
  month?: string;
  year?: string;
  style?: 'hatha' | 'ashtanga' | 'vinyasa' | 'multi-style';
  country?: string;
}) {
  const { courseType, month, year, style, country } = params;

  const currentYear = year || new Date().getFullYear().toString();
  const courseStyle = style || 'traditional';
  const countryText = country ? ` for ${country} students` : '';

  return {
    // Dynamic title based on search patterns
    title: `${courseType} Yoga Teacher Training ${month ? month + ' ' : ''}${currentYear}${countryText} | ${courseStyle.charAt(0).toUpperCase() + courseStyle.slice(1)} Yoga | Rishikesh, India`,

    // Comprehensive description with keywords
    description: `Join our Yoga Alliance certified ${courseType} ${courseStyle} yoga teacher training in Rishikesh, India${countryText}. ${month ? `Starting in ${month} ${currentYear}. ` : ''}Small groups, experienced Indian teachers, authentic ashram experience. All-inclusive program with accommodation, meals, and certification. Early bird discount available.`,

    // Extended keywords including location and comparison
    keywords: [
      `${courseType} yoga teacher training rishikesh`,
      `${courseType} yoga ttc india ${currentYear}`,
      `${courseStyle} yoga certification india`,
      `yoga alliance rys ${courseType.split('-')[0]}`,
      `affordable yoga teacher training india`,
      `best yoga school rishikesh ${currentYear}`,
      `${month ? month.toLowerCase() : 'monthly'} yoga teacher training`,
      country
        ? `yoga teacher training india for ${country.toLowerCase()}`
        : 'international yoga teacher training',
    ],

    // Open Graph optimizations
    ogTags: {
      'og:title': `${courseType} Yoga Teacher Training in Rishikesh - Start Your Journey`,
      'og:description': `Transform your practice into profession with our ${courseType} Yoga Teacher Training. Yoga Alliance certified program in the yoga capital of the world.`,
      'og:type': 'website',
      'og:image': `/images/ttc-${courseType}-hero.jpg`,
      'og:image:alt': `Students practicing yoga during ${courseType} teacher training at Hatha Yogashram in Rishikesh with Himalayan backdrop`,
      'og:site_name': SITE_METADATA.siteName,
      'og:locale': 'en_US',
    },

    // Twitter Card tags
    twitterTags: {
      'twitter:card': 'summary_large_image',
      'twitter:title': `${courseType} Yoga TTC Rishikesh ${currentYear}`,
      'twitter:description': `Become a certified yoga teacher in ${courseType.split('-')[0]} hours. Authentic training in India's yoga capital.`,
      'twitter:image': `/images/ttc-${courseType}-twitter.jpg`,
      'twitter:site': '@hathayogashram',
      'twitter:creator': '@hathayogashram',
    },

    // Additional meta tags for better SEO
    additionalMeta: [
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'bingbot', content: 'index, follow' },
      { name: 'geo.region', content: 'IN-UT' },
      { name: 'geo.placename', content: 'Rishikesh, Uttarakhand, India' },
      { name: 'geo.position', content: '30.0869;78.2676' },
      { name: 'ICBM', content: '30.0869, 78.2676' },
      { property: 'business:hours', content: 'Mo-Su 06:00-20:00' },
      { property: 'priceRange', content: '$$$' },
    ],
  };
}

/**
 * Generate hreflang alternate URLs for international targeting
 */
export function generateHreflangAlternates(basePath: string) {
  const languages = [
    { code: 'en', region: '', name: 'English' },
    { code: 'en-US', region: 'US', name: 'English (US)' },
    { code: 'en-GB', region: 'GB', name: 'English (UK)' },
    { code: 'en-AU', region: 'AU', name: 'English (Australia)' },
    { code: 'en-CA', region: 'CA', name: 'English (Canada)' },
    { code: 'de', region: 'DE', name: 'German' },
    { code: 'fr', region: 'FR', name: 'French' },
    { code: 'es', region: 'ES', name: 'Spanish' },
    { code: 'it', region: 'IT', name: 'Italian' },
  ];

  return languages.map(lang => ({
    hreflang: lang.code,
    href: `${SITE_METADATA.siteUrl}${lang.region ? `/${lang.region.toLowerCase()}` : ''}${basePath}`,
  }));
}

/**
 * Generate location-specific content for international students
 */
export function generateLocationSpecificContent(country: string) {
  const countryMappings: Record<string, any> = {
    usa: {
      heroText: 'Special Welcome for US Students',
      currency: 'USD',
      timezone: 'EST/PST',
      flightInfo: 'Direct flights available from major US cities to Delhi',
    },
    uk: {
      heroText: 'Welcome British Yogis',
      currency: 'GBP',
      timezone: 'GMT',
      flightInfo: 'Direct flights from London to Delhi',
    },
    australia: {
      heroText: "G'day Australian Yogis",
      currency: 'AUD',
      timezone: 'AEST',
      flightInfo: 'Direct flights from Sydney/Melbourne to Delhi',
    },
  };

  return (
    countryMappings[country.toLowerCase()] || {
      heroText: 'Welcome International Students',
      currency: 'USD',
      timezone: 'UTC',
      flightInfo: 'International flights available to Delhi',
    }
  );
}
