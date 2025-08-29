// src/pages/location-sitemap.xml.ts
import type { APIRoute } from 'astro';
import { SITE_METADATA } from '../lib/yoga-seo-constants';
import { LOCATION_KEYWORDS } from '../lib/location-seo-keywords';

// International locations with SEO priorities
const INTERNATIONAL_LOCATIONS = [
  { 
    country: 'usa', 
    priority: '0.9',
    hreflang: 'en-US',
    currency: 'USD',
    cities: ['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose']
  },
  { 
    country: 'uk', 
    priority: '0.8',
    hreflang: 'en-GB',
    currency: 'GBP',
    cities: ['london', 'birmingham', 'manchester', 'leeds', 'glasgow', 'liverpool', 'bristol', 'sheffield', 'edinburgh', 'cardiff']
  },
  { 
    country: 'canada', 
    priority: '0.8',
    hreflang: 'en-CA', 
    currency: 'CAD',
    cities: ['toronto', 'montreal', 'vancouver', 'calgary', 'ottawa', 'edmonton', 'winnipeg', 'quebec-city', 'hamilton', 'kitchener']
  },
  { 
    country: 'australia', 
    priority: '0.7',
    hreflang: 'en-AU',
    currency: 'AUD', 
    cities: ['sydney', 'melbourne', 'brisbane', 'perth', 'adelaide', 'gold-coast', 'newcastle', 'canberra', 'sunshine-coast', 'wollongong']
  },
  { 
    country: 'germany', 
    priority: '0.6',
    hreflang: 'de',
    currency: 'EUR',
    cities: ['berlin', 'hamburg', 'munich', 'cologne', 'frankfurt', 'stuttgart', 'dusseldorf', 'dortmund', 'essen', 'leipzig']
  },
  { 
    country: 'france', 
    priority: '0.5',
    hreflang: 'fr',
    currency: 'EUR',
    cities: ['paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes', 'montpellier', 'strasbourg', 'bordeaux', 'lille']
  },
  { 
    country: 'netherlands', 
    priority: '0.5',
    hreflang: 'nl',
    currency: 'EUR',
    cities: ['amsterdam', 'rotterdam', 'the-hague', 'utrecht', 'eindhoven', 'tilburg', 'groningen', 'almere', 'breda', 'nijmegen']
  },
  { 
    country: 'singapore', 
    priority: '0.6',
    hreflang: 'en-SG',
    currency: 'SGD',
    cities: ['singapore']
  },
  { 
    country: 'japan', 
    priority: '0.5',
    hreflang: 'ja',
    currency: 'JPY',
    cities: ['tokyo', 'osaka', 'yokohama', 'nagoya', 'sapporo', 'fukuoka', 'kobe', 'kyoto', 'kawasaki', 'saitama']
  }
];

// Course types with different priorities
const COURSE_TYPES = [
  { path: '200-hour-yoga-teacher-training', priority: '1.0', popular: true },
  { path: '300-hour-yoga-teacher-training', priority: '0.8', popular: true },
  { path: '500-hour-yoga-teacher-training', priority: '0.7', popular: false },
  { path: '100-hours-yoga-teacher-training-india', priority: '0.6', popular: false },
  { path: 'prenatal-yoga-teacher-training', priority: '0.6', popular: false },
  { path: 'yin-yoga-teacher-training', priority: '0.5', popular: false },
  { path: 'meditation-teacher-training', priority: '0.5', popular: false },
  { path: 'yoga-retreat-programs', priority: '0.6', popular: true }
];

// Type definition for location URL
interface LocationUrl {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  hreflang?: string;
}

// Generate location-specific URLs
function generateLocationUrls(): Array<LocationUrl> {
  const urls: Array<LocationUrl> = [];
  
  const currentDate = new Date().toISOString().split('T')[0];

  INTERNATIONAL_LOCATIONS.forEach(location => {
    // Main country landing page
    urls.push({
      url: `${SITE_METADATA.siteUrl}/${location.country}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: location.priority,
      hreflang: location.hreflang
    });

    // Course-specific country pages
    COURSE_TYPES.forEach(course => {
      const priority = course.popular 
        ? Math.min(parseFloat(location.priority) + 0.1, 1.0).toString()
        : Math.max(parseFloat(location.priority) - 0.1, 0.1).toString();

      urls.push({
        url: `${SITE_METADATA.siteUrl}/${location.country}/${course.path}/`,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: priority,
        hreflang: location.hreflang
      });

      // Special certification pages
      if (course.popular) {
        urls.push({
          url: `${SITE_METADATA.siteUrl}/${location.country}/${course.path}-certification/`,
          lastmod: currentDate,
          changefreq: 'monthly',
          priority: Math.max(parseFloat(priority) - 0.1, 0.1).toString(),
          hreflang: location.hreflang
        });
      }
    });

    // City-specific pages for major locations
    if (['usa', 'uk', 'canada', 'australia'].includes(location.country)) {
      location.cities.slice(0, 5).forEach(city => {
        // Top course for each major city
        urls.push({
          url: `${SITE_METADATA.siteUrl}/${location.country}/${city}/200-hour-yoga-teacher-training/`,
          lastmod: currentDate,
          changefreq: 'monthly',
          priority: '0.6',
          hreflang: location.hreflang
        });

        // City-specific landing pages
        urls.push({
          url: `${SITE_METADATA.siteUrl}/${location.country}/${city}/yoga-teacher-training/`,
          lastmod: currentDate,
          changefreq: 'monthly',
          priority: '0.5',
          hreflang: location.hreflang
        });
      });
    }

    // Comparison and competitive pages
    const competitors = ['india', 'bali', 'costa-rica', 'thailand'];
    competitors.forEach(competitor => {
      if (competitor !== location.country) {
        urls.push({
          url: `${SITE_METADATA.siteUrl}/${location.country}/yoga-teacher-training-${location.country}-vs-${competitor}/`,
          lastmod: currentDate,
          changefreq: 'monthly',
          priority: '0.4',
          hreflang: location.hreflang
        });
      }
    });

    // Practical information pages
    const practicalPages = [
      'visa-requirements',
      'flight-information',
      'cost-breakdown',
      'student-testimonials',
      'application-process',
      'accommodation-options'
    ];

    practicalPages.forEach(page => {
      urls.push({
        url: `${SITE_METADATA.siteUrl}/${location.country}/${page}/`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: '0.5',
        hreflang: location.hreflang
      });
    });
  });

  return urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
}

// Generate seasonal and time-sensitive URLs
function generateSeasonalUrls(): Array<LocationUrl> {
  const urls: Array<LocationUrl> = [];
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Generate seasonal pages for major markets
  const majorMarkets = ['usa', 'uk', 'canada', 'australia'];
  const seasons = [
    { name: 'spring', months: ['march', 'april', 'may'], priority: '0.7' },
    { name: 'summer', months: ['june', 'july', 'august'], priority: '0.8' },
    { name: 'fall', months: ['september', 'october', 'november'], priority: '0.6' },
    { name: 'winter', months: ['december', 'january', 'february'], priority: '0.5' }
  ];

  majorMarkets.forEach(country => {
    seasons.forEach(season => {
      // Seasonal course pages
      urls.push({
        url: `${SITE_METADATA.siteUrl}/${country}/${season.name}-yoga-teacher-training-${currentYear}/`,
        lastmod: currentDate.toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: season.priority
      });

      // Monthly specific pages for high-demand periods
      if (season.name === 'spring' || season.name === 'summer') {
        season.months.forEach(month => {
          urls.push({
            url: `${SITE_METADATA.siteUrl}/${country}/${month}-${currentYear}-yoga-teacher-training/`,
            lastmod: currentDate.toISOString().split('T')[0],
            changefreq: 'weekly',
            priority: '0.6'
          });
        });
      }
    });

    // New Year resolution pages
    urls.push({
      url: `${SITE_METADATA.siteUrl}/${country}/new-year-yoga-teacher-training-${currentYear}/`,
      lastmod: currentDate.toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.7'
    });

    // Gap year and career change pages
    urls.push({
      url: `${SITE_METADATA.siteUrl}/${country}/gap-year-yoga-teacher-training/`,
      lastmod: currentDate.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6'
    });

    urls.push({
      url: `${SITE_METADATA.siteUrl}/${country}/career-change-yoga-teacher-training/`,
      lastmod: currentDate.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6'
    });
  });

  return urls;
}

// Generate location sitemap
export const GET: APIRoute = async () => {
  const locationUrls = generateLocationUrls();
  const seasonalUrls = generateSeasonalUrls();
  const allUrls = [...locationUrls, ...seasonalUrls];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(({ url, lastmod, changefreq, priority, hreflang }: LocationUrl) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${hreflang ? `
    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${url}" />` : ''}
  </url>`).join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
