import { YOGA_KEYWORDS } from './seo-keywords';

export interface SEOContentConfig {
  pageType: 'home' | 'course' | 'blog' | 'location' | 'style';
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  location?: string;
  courseType?: '200hour' | '300hour' | '500hour';
  customTitle?: string;
  customDescription?: string;
}

// Generate SEO-optimized content based on configuration
export function generateSEOContent(config: SEOContentConfig) {
  const {
    pageType,
    primaryKeyword = 'yoga teacher training',
    secondaryKeywords = [],
    location = 'rishikesh',
    courseType = '200hour',
    customTitle,
    customDescription,
  } = config;

  // Select appropriate keywords based on page type
  let keywords: string[] = [];
  let title = '';
  let description = '';

  switch (pageType) {
    case 'home':
      keywords = [
        ...YOGA_KEYWORDS.primary.slice(0, 5),
        ...YOGA_KEYWORDS.location.slice(0, 3),
        ...YOGA_KEYWORDS.duration.slice(0, 3),
      ];
      title =
        customTitle ||
        'Best Yoga Teacher Training in Rishikesh, India | Hatha Yogashram - Yoga Alliance RYS 200/300 Certified School';
      description =
        customDescription ||
        'Join authentic 200/300 hour Yoga Teacher Training in Rishikesh with Hatha Yogashram. Yoga Alliance RYS certified residential courses with Indian masters. Traditional Hatha & Ashtanga Yoga, Sanskrit mantras, philosophy from ancient texts. All-inclusive program with accommodation.';
      break;

    case 'course':
      keywords = [
        `${courseType.replace('hour', ' hour')} yoga teacher training`,
        ...YOGA_KEYWORDS.styles.slice(0, 4),
        ...YOGA_KEYWORDS.location.slice(0, 3),
        ...YOGA_KEYWORDS.philosophy.slice(0, 3),
      ];
      title =
        customTitle ||
        `${courseType.replace('hour', ' Hour')} Yoga Teacher Training Rishikesh | Yoga Alliance Certified | Hatha Yogashram`;
      description =
        customDescription ||
        `Complete ${courseType.replace('hour', ' hour')} Yoga Teacher Training in Rishikesh. Yoga Alliance certified program covering Hatha Yoga, Ashtanga, philosophy, anatomy, and teaching methodology. Residential course with accommodation and meals included.`;
      break;

    case 'blog':
      keywords = [
        primaryKeyword,
        ...YOGA_KEYWORDS.philosophy.slice(0, 3),
        ...YOGA_KEYWORDS.semantic.slice(0, 3),
        ...secondaryKeywords,
      ];
      title = customTitle || `${primaryKeyword} | Yoga Wisdom & Insights | Hatha Yogashram Blog`;
      description =
        customDescription ||
        `Discover ancient yoga wisdom and modern insights about ${primaryKeyword}. Expert guidance from experienced yoga masters at Hatha Yogashram, Rishikesh.`;
      break;

    case 'location':
      keywords = [
        `yoga teacher training ${location}`,
        `yoga school ${location}`,
        `yoga certification ${location}`,
        ...YOGA_KEYWORDS.location.filter(k => k.includes(location)).slice(0, 3),
        ...YOGA_KEYWORDS.primary.slice(0, 3),
      ];
      title =
        customTitle ||
        `Yoga Teacher Training in ${location.charAt(0).toUpperCase() + location.slice(1)} | Best Yoga School | Hatha Yogashram`;
      description =
        customDescription ||
        `Top-rated yoga teacher training in ${location}. Authentic yoga education with experienced masters, Yoga Alliance certification, and complete residential program.`;
      break;

    case 'style':
      keywords = [
        primaryKeyword,
        `${primaryKeyword} teacher training`,
        `${primaryKeyword} certification`,
        ...YOGA_KEYWORDS.styles.filter(k => k.includes(primaryKeyword.split(' ')[0])).slice(0, 3),
        ...YOGA_KEYWORDS.location.slice(0, 2),
      ];
      title =
        customTitle ||
        `${primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)} Teacher Training | Authentic Practice | Hatha Yogashram`;
      description =
        customDescription ||
        `Master ${primaryKeyword} with our comprehensive teacher training program. Traditional teachings, expert guidance, and Yoga Alliance certification in Rishikesh.`;
      break;
  }

  // Combine all keywords and remove duplicates
  const allKeywords = Array.from(new Set([primaryKeyword, ...keywords, ...secondaryKeywords]));

  return {
    title,
    description,
    keywords: allKeywords.join(', '),
    keywordArray: allKeywords,
    h1: title.split('|')[0].trim(),
    metaKeywords: allKeywords.slice(0, 15).join(', '), // Limit for meta keywords
  };
}

// Generate structured data for specific yoga content types
export function generateYogaStructuredData(contentType: string, data: any = {}) {
  const baseUrl = 'https://hathayogashram.com';

  switch (contentType) {
    case 'course':
      return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: data.name || 'Yoga Teacher Training Course',
        description: data.description,
        provider: {
          '@type': 'EducationalOrganization',
          name: 'Hatha Yogashram',
          url: baseUrl,
        },
        courseCode: data.courseCode || 'YTT-200',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Residential',
          duration: data.duration || 'P25D',
          inLanguage: ['en', 'hi'],
          courseWorkload: data.workload || 'PT200H',
          instructor: data.instructors || [],
        },
        educationalLevel: 'Beginner to Advanced',
        teaches: data.curriculum || [],
        coursePrerequisites: data.prerequisites || 'Basic yoga practice recommended',
        offers: {
          '@type': 'Offer',
          price: data.price || '1299',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          category: 'Yoga Teacher Training',
        },
      };

    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Hatha Yogashram',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Hatha Yogashram',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/hya.jpg`,
          },
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        image: data.image || `${baseUrl}/yogaschoolpic.jpg`,
        articleSection: 'Yoga Education',
        keywords: data.keywords,
      };

    case 'event':
      return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: data.name,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
        location: {
          '@type': 'Place',
          name: 'Hatha Yogashram',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Near Ram Jhula',
            addressLocality: 'Rishikesh',
            addressRegion: 'Uttarakhand',
            postalCode: '249201',
            addressCountry: 'IN',
          },
        },
        organizer: {
          '@type': 'Organization',
          name: 'Hatha Yogashram',
          url: baseUrl,
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
      };

    default:
      return {};
  }
}
