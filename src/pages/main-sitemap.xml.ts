// src/pages/main-sitemap.xml.ts
import type { APIRoute } from "astro";
import { SITE_METADATA } from "../lib/yoga-seo-constants";

// International locations with priorities
const INTERNATIONAL_LOCATIONS = [
  { country: "usa", priority: "0.9" },
  { country: "uk", priority: "0.8" },
  { country: "canada", priority: "0.8" },
  { country: "australia", priority: "0.7" },
  { country: "germany", priority: "0.6" },
  { country: "france", priority: "0.5" },
  { country: "netherlands", priority: "0.5" },
  { country: "singapore", priority: "0.6" },
  { country: "japan", priority: "0.5" },
];

// Type definitions
interface SitemapUrl {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates?: Array<{ hreflang: string; href: string }>;
}

// Generate static page URLs
function generateStaticUrls(): Array<SitemapUrl> {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "daily" },
    { path: "/about/", priority: "0.8", changefreq: "monthly" },
    { path: "/our-team/", priority: "0.7", changefreq: "monthly" },
    { path: "/faq/", priority: "0.8", changefreq: "monthly" },
    { path: "/contact/", priority: "0.7", changefreq: "monthly" },
    { path: "/testimonials/", priority: "0.7", changefreq: "weekly" },
    { path: "/gallery/", priority: "0.6", changefreq: "monthly" },
    { path: "/facilities/", priority: "0.6", changefreq: "monthly" },
    { path: "/accommodation/", priority: "0.7", changefreq: "monthly" },
    { path: "/food-menu/", priority: "0.6", changefreq: "monthly" },
  ];

  return staticPages.map((page) => ({
    url: `${SITE_METADATA.siteUrl}${page.path}`,
    lastmod: currentDate,
    changefreq: page.changefreq,
    priority: page.priority,
    alternates: INTERNATIONAL_LOCATIONS.map((loc) => ({
      hreflang:
        loc.country === "uk"
          ? "en-GB"
          : loc.country === "usa"
            ? "en-US"
            : loc.country === "canada"
              ? "en-CA"
              : loc.country === "australia"
                ? "en-AU"
                : loc.country,
      href: `${SITE_METADATA.siteUrl}/${loc.country}${page.path}`,
    })),
  }));
}

// Generate course-specific URLs
function generateCourseUrls(): Array<SitemapUrl> {
  const currentDate = new Date().toISOString().split("T")[0];

  const courses = [
    {
      path: "/100-hours-yoga-teacher-training-india/",
      priority: "0.9",
      changefreq: "weekly",
    },
    {
      path: "/200-hour-yoga-teacher-training/",
      priority: "1.0",
      changefreq: "daily",
    },
    {
      path: "/300-hour-yoga-teacher-training/",
      priority: "0.8",
      changefreq: "weekly",
    },
    {
      path: "/500-hour-yoga-teacher-training/",
      priority: "0.7",
      changefreq: "weekly",
    },
  ];

  const urls: Array<SitemapUrl> = [];

  courses.forEach((course) => {
    // Main course page
    urls.push({
      url: `${SITE_METADATA.siteUrl}${course.path}`,
      lastmod: currentDate,
      changefreq: course.changefreq,
      priority: course.priority,
      alternates: INTERNATIONAL_LOCATIONS.map((loc) => ({
        hreflang:
          loc.country === "uk"
            ? "en-GB"
            : loc.country === "usa"
              ? "en-US"
              : loc.country === "canada"
                ? "en-CA"
                : loc.country === "australia"
                  ? "en-AU"
                  : loc.country,
        href: `${SITE_METADATA.siteUrl}/${loc.country}${course.path}`,
      })),
    });

    // Location-specific course pages
    INTERNATIONAL_LOCATIONS.forEach((location) => {
      urls.push({
        url: `${SITE_METADATA.siteUrl}/${location.country}${course.path}`,
        lastmod: currentDate,
        changefreq: course.changefreq,
        priority: location.priority,
      });
    });
  });

  return urls;
}

// Generate date-based URLs for upcoming courses
function generateDateBasedUrls(): Array<SitemapUrl> {
  const urls: Array<SitemapUrl> = [];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Generate URLs for next 18 months
  for (let monthOffset = 0; monthOffset < 18; monthOffset++) {
    const targetDate = new Date(currentYear, currentMonth + monthOffset, 1);
    const year = targetDate.getFullYear();
    const month = targetDate
      .toLocaleDateString("en-US", { month: "long" })
      .toLowerCase();

    const courseTypes = ["200-hour", "300-hour", "500-hour"];
    const styles = ["hatha", "vinyasa", "ashtanga"];

    courseTypes.forEach((courseType) => {
      styles.forEach((style) => {
        const priority =
          monthOffset < 6 ? "0.8" : monthOffset < 12 ? "0.7" : "0.6";

        urls.push({
          url: `${SITE_METADATA.siteUrl}/${courseType}-${style}-yoga-teacher-training-${month}-${year}/`,
          lastmod: currentDate.toISOString().split("T")[0],
          changefreq: "weekly",
          priority: priority,
        });
      });
    });
  }

  return urls;
}

// Main sitemap generation
export const GET: APIRoute = async () => {
  const staticUrls = generateStaticUrls();
  const courseUrls = generateCourseUrls();
  const dateUrls = generateDateBasedUrls();
  const allUrls = [...staticUrls, ...courseUrls, ...dateUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls
  .map(
    ({ url, lastmod, changefreq, priority, alternates }: SitemapUrl) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${
      alternates
        ? alternates
            .map(
              (alt: { hreflang: string; href: string }) => `
    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`,
            )
            .join("")
        : ""
    }
  </url>`,
  )
  .join("")}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
