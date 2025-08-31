// Sitemap types
export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface LocationUrl {
  url: string;
  lastmod?: string;
  priority?: number;
  changefreq?: "weekly" | "monthly";
}

// Metadata interface
export interface MetaData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
}
