interface MetaData {
  name?: string;
  property?: string;
  content?: string;
  httpEquiv?: string;
}

export interface AdvancedSEOConfig {
  pageType: 'homepage' | 'course' | 'blog' | 'category' | 'location';
  primaryKeyword: string;
  secondaryKeywords?: string[];
  location?: string;
  courseLevel?: string;
  targetAudience?: 'beginner' | 'intermediate' | 'advanced' | 'all';
  season?: 'spring' | 'summer' | 'fall' | 'winter';
}

// Generate comprehensive meta tags for maximum SEO coverage
export function generateAdvancedMetaTags(config: AdvancedSEOConfig): MetaData[] {
  const { pageType, primaryKeyword, location = 'rishikesh', courseLevel = '', season } = config;

  const baseTags: MetaData[] = [
    // Core SEO
    {
      name: 'robots',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'googlebot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    {
      name: 'bingbot',
      content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },

    // Geographic targeting
    { name: 'geo.region', content: 'IN-UT' },
    { name: 'geo.placename', content: 'Rishikesh, Uttarakhand' },
    { name: 'geo.position', content: '30.0869;78.2676' },
    { name: 'ICBM', content: '30.0869, 78.2676' },
    { name: 'location', content: 'Rishikesh, Uttarakhand, India' },

    // Language and content
    { name: 'content-language', content: 'en' },
    { name: 'language', content: 'English' },
    { httpEquiv: 'content-language', content: 'en' },

    // Technical SEO
    { name: 'referrer', content: 'strict-origin-when-cross-origin' },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },

    // Social & brand
    { name: 'application-name', content: 'Hatha Yogashram' },
    { name: 'apple-mobile-web-app-title', content: 'Hatha Yogashram' },
    { name: 'msapplication-TileColor', content: '#FF6B35' },
    { name: 'theme-color', content: '#FF6B35' },

    // Additional classification
    {
      name: 'classification',
      content: 'Education, Health, Wellness, Spiritual Development',
    },
    { name: 'category', content: 'Yoga Education' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'General' },
    { name: 'revisit-after', content: '3 days' },

    // Yoga-specific metadata
    { name: 'subject', content: 'Yoga Teacher Training and Certification' },
    { name: 'topic', content: 'Traditional Yoga Education' },
    {
      name: 'abstract',
      content: 'Authentic yoga teacher training programs in Rishikesh, India',
    },

    // Target audience
    {
      name: 'target-audience',
      content: 'Yoga practitioners, aspiring teachers, wellness seekers',
    },
    {
      name: 'intended-audience',
      content: 'Adults interested in yoga education',
    },

    // Certification and accreditation
    {
      name: 'certification',
      content: 'Yoga Alliance RYS 200/300 Registered School',
    },
    { name: 'accreditation', content: 'Yoga Alliance USA' },

    // Course-specific if applicable
    ...(courseLevel
      ? [
          { name: 'course-level', content: courseLevel },
          {
            name: 'education-level',
            content: courseLevel === '200hour' ? 'Foundational' : 'Advanced',
          },
        ]
      : []),

    // Seasonal content if provided
    ...(season
      ? [
          { name: 'seasonal-content', content: `${season} yoga programs` },
          {
            name: 'seasonal-keywords',
            content: `${season} yoga training, ${season} retreat`,
          },
        ]
      : []),

    // Advanced keyword variations
    {
      name: 'keyword-variations',
      content: generateKeywordVariations(primaryKeyword, location),
    },
    { name: 'semantic-keywords', content: generateSemanticKeywords() },
    {
      name: 'long-tail-keywords',
      content: generateLongTailKeywords(primaryKeyword, location),
    },
  ];

  // Page-type specific tags
  const pageSpecificTags = getPageSpecificTags(pageType, location);

  return [...baseTags, ...pageSpecificTags];
}

// Generate keyword variations for better coverage
function generateKeywordVariations(keyword: string, location: string): string {
  const variations = [
    keyword,
    keyword.replace('training', 'course'),
    keyword.replace('training', 'certification'),
    keyword.replace('training', 'program'),
    `${keyword} ${location}`,
    `${keyword} india`,
    `authentic ${keyword}`,
    `traditional ${keyword}`,
    `residential ${keyword}`,
    `intensive ${keyword}`,
  ];

  return variations.join(', ');
}

// Generate semantic keywords related to yoga
function generateSemanticKeywords(): string {
  const semanticTerms = [
    'mindfulness meditation',
    'spiritual awakening',
    'holistic wellness',
    'consciousness expansion',
    'ancient wisdom',
    'energy healing',
    'chakra balancing',
    'stress relief',
    'mind-body connection',
    'inner peace',
    'self-discovery',
    'personal transformation',
    'breathing techniques',
    'Sanskrit mantras',
    'yoga philosophy',
  ];

  return semanticTerms.slice(0, 8).join(', ');
}

// Generate long-tail keywords for specific queries
function generateLongTailKeywords(keyword: string, location: string): string {
  const longTails = [
    `best ${keyword} in ${location}`,
    `affordable ${keyword} ${location}`,
    `how to become yoga teacher in ${location}`,
    `yoga alliance certified ${keyword}`,
    `residential ${keyword} with accommodation`,
    `traditional ${keyword} india`,
    `authentic ${keyword} himalaya`,
    `${keyword} cost and fees`,
    `${keyword} requirements and prerequisites`,
    `${keyword} reviews and testimonials`,
  ];

  return longTails.join(', ');
}

// Get page-type specific meta tags
function getPageSpecificTags(pageType: string, location: string): MetaData[] {
  switch (pageType) {
    case 'homepage':
      return [
        { name: 'page-type', content: 'homepage' },
        { name: 'primary-focus', content: 'yoga teacher training overview' },
        { name: 'content-priority', content: 'high' },
        { name: 'update-frequency', content: 'weekly' },
      ];

    case 'course':
      return [
        { name: 'page-type', content: 'course-detail' },
        { name: 'course-format', content: 'residential-intensive' },
        { name: 'course-accreditation', content: 'yoga-alliance-certified' },
        { name: 'booking-available', content: 'yes' },
        { name: 'price-range', content: '1200-1600-USD' },
      ];

    case 'blog':
      return [
        { name: 'page-type', content: 'educational-content' },
        { name: 'content-type', content: 'yoga-education' },
        { name: 'expertise-level', content: 'expert' },
        { name: 'content-freshness', content: 'updated-regularly' },
      ];

    case 'location':
      return [
        { name: 'page-type', content: 'location-specific' },
        { name: 'service-area', content: location },
        { name: 'local-business', content: 'yes' },
        { name: 'geographic-focus', content: location },
      ];

    default:
      return [];
  }
}

// Generate Open Graph tags optimized for yoga content
export function generateYogaOpenGraphTags(
  config: AdvancedSEOConfig & {
    title: string;
    description: string;
    image?: string;
    url?: string;
  }
) {
  return {
    basic: {
      title: config.title,
      type: 'website',
      image: config.image || 'https://hathayogashram.com/yogaschoolpic.jpg',
      url: config.url || 'https://hathayogashram.com',
    },
    optional: {
      description: config.description,
      locale: 'en_US',
      siteName: 'Hatha Yogashram',
      determiner: 'the',
    },
    image: {
      url: config.image || 'https://hathayogashram.com/yogaschoolpic.jpg',
      width: 1200,
      height: 630,
      alt: `${config.primaryKeyword} at Hatha Yogashram, Rishikesh`,
      type: 'image/jpeg',
    },
    article:
      config.pageType === 'blog'
        ? {
            publishedTime: new Date().toISOString(),
            modifiedTime: new Date().toISOString(),
            author: 'Hatha Yogashram',
            section: 'Yoga Education',
            tag: [config.primaryKeyword, ...(config.secondaryKeywords || [])].slice(0, 6),
          }
        : undefined,
  };
}
