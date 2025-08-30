// SEO and Schema types
export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  siteName?: string;
  locale?: string;
  type?: string;
}

export interface OpenGraphProps {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: string;
  siteName?: string;
}

export interface MetaTag {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

export interface LinkTag {
  rel: string;
  href: string;
  type?: string;
  sizes?: string;
}

export interface SchemaConfig {
  organization?: boolean;
  website?: boolean;
  course?: boolean;
  breadcrumb?: boolean;
  faq?: boolean;
}

export interface AdvancedSEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
}
