import type { APIRoute } from 'astro';
import { SITE_METADATA } from '../lib/yoga-seo-constants';

interface SitemapUrl {
  url: string;
  priority: number;
  changefreq: string;
  lastmod: string;
}

export const GET: APIRoute = async () => {
  // Static pages with priorities
  const staticPages: SitemapUrl[] = [
    // High priority pages
    { url: '/', priority: 1.0, changefreq: 'weekly', lastmod: '2025-08-29' },
    {
      url: '/200-hour-yoga-teacher-training/',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },
    {
      url: '/300-hour-yoga-teacher-training/',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },
    {
      url: '/apply-now/',
      priority: 0.9,
      changefreq: 'daily',
      lastmod: '2025-08-29',
    },
    {
      url: '/course-fees/',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/upcoming-courses/',
      priority: 0.9,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },

    // Medium priority pages
    {
      url: '/curriculum/',
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/daily-schedule/',
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/accommodation/',
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/testimonials/',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },
    {
      url: '/gallery/',
      priority: 0.7,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },
    {
      url: '/our-team/',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/faq/',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },

    // Yoga healing pages
    {
      url: '/yoga-therapy/',
      priority: 0.8,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/yoga-for-back-pain/',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/yoga-for-anxiety/',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/yoga-for-depression/',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },

    // Lower priority pages
    {
      url: '/about/',
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/contact/',
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: '2025-08-29',
    },
    {
      url: '/blog/',
      priority: 0.6,
      changefreq: 'weekly',
      lastmod: '2025-08-29',
    },
    {
      url: '/privacy-policy/',
      priority: 0.3,
      changefreq: 'yearly',
      lastmod: '2025-08-29',
    },
    {
      url: '/terms-conditions/',
      priority: 0.3,
      changefreq: 'yearly',
      lastmod: '2025-08-29',
    },
  ];

  // Generate dynamic date-based URLs
  const generateDateBasedUrls = (): SitemapUrl[] => {
    const urls: SitemapUrl[] = [];
    const months = [
      { name: 'january', num: '01' },
      { name: 'february', num: '02' },
      { name: 'march', num: '03' },
      { name: 'april', num: '04' },
      { name: 'may', num: '05' },
      { name: 'june', num: '06' },
      { name: 'september', num: '09' },
      { name: 'october', num: '10' },
      { name: 'november', num: '11' },
      { name: 'december', num: '12' },
    ];

    const currentYear = new Date().getFullYear();
    const nextYear = currentYear + 1;

    // Generate URLs for current and next year
    [currentYear, nextYear].forEach(year => {
      months.forEach(month => {
        // 200-hour courses
        urls.push({
          url: `/200-hour-ttc-${month.name}-${year}/`,
          priority: 0.8,
          changefreq: 'monthly',
          lastmod: `${year}-${month.num}-01`,
        });

        // 300-hour courses
        urls.push({
          url: `/300-hour-ttc-${month.name}-${year}/`,
          priority: 0.7,
          changefreq: 'monthly',
          lastmod: `${year}-${month.num}-01`,
        });
      });
    });

    return urls;
  };

  // Generate location-specific URLs
  const generateLocationUrls = (): SitemapUrl[] => {
    const countries = ['usa', 'uk', 'canada', 'australia', 'germany'];
    const urls: SitemapUrl[] = [];

    countries.forEach(country => {
      urls.push({
        url: `/${country}/200-hour-yoga-teacher-training/`,
        priority: 0.7,
        changefreq: 'monthly',
        lastmod: '2025-08-29',
      });

      urls.push({
        url: `/${country}/300-hour-yoga-teacher-training/`,
        priority: 0.6,
        changefreq: 'monthly',
        lastmod: '2025-08-29',
      });
    });

    return urls;
  };

  // Combine all URLs
  const allUrls = [...staticPages, ...generateDateBasedUrls(), ...generateLocationUrls()];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls
  .map(
    page => `  <url>
    <loc>${SITE_METADATA.siteUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_METADATA.siteUrl}${page.url}" />
    <xhtml:link rel="alternate" hreflang="en-US" href="${SITE_METADATA.siteUrl}/us${page.url}" />
    <xhtml:link rel="alternate" hreflang="en-GB" href="${SITE_METADATA.siteUrl}/uk${page.url}" />
    <xhtml:link rel="alternate" hreflang="en-AU" href="${SITE_METADATA.siteUrl}/au${page.url}" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="${SITE_METADATA.siteUrl}/ca${page.url}" />
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
