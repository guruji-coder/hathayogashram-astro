/**
 * Structured data schema definitions for SEO
 * Based on schema.org types
 */

import { SITE_METADATA } from "../lib/yoga-seo-constants";

/**
 * Course schema for yoga teacher training pages
 */
export const courseSchema = (course: {
  name: string;
  description: string;
  provider?: string;
  url: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  price?: number;
  priceCurrency?: string;
  imageUrl?: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: course.provider || SITE_METADATA.siteName,
      sameAs: SITE_METADATA.siteUrl,
    },
    url: course.url,
    ...(course.startDate && { startDate: course.startDate }),
    ...(course.endDate && { endDate: course.endDate }),
    ...(course.duration && { timeRequired: course.duration }),
    ...(course.price && {
      offers: {
        "@type": "Offer",
        price: course.price,
        priceCurrency: course.priceCurrency || "USD",
      },
    }),
    ...(course.imageUrl && { image: course.imageUrl }),
  };
};

/**
 * Article schema for blog posts and content pages
 */
export const articleSchema = (article: {
  headline: string;
  description: string;
  authorName?: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.imageUrl || `${SITE_METADATA.siteUrl}/default-image.jpg`,
    author: {
      "@type": "Person",
      name: article.authorName || "Yoga Teacher",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_METADATA.siteName,
      logo: {
        "@type": "ImageObject",
        url: SITE_METADATA.logoUrl,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
};

/**
 * FAQ schema for FAQ sections
 */
export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

/**
 * Local business schema for the yoga school
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_METADATA.siteName,
  image: SITE_METADATA.logoUrl,
  url: SITE_METADATA.siteUrl,
  telephone: SITE_METADATA.contactInfo.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_METADATA.contactInfo.address.split(",")[0],
    addressLocality: "Rishikesh",
    addressRegion: "Uttarakhand",
    postalCode: "249302",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.1212,
    longitude: 78.3254,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    SITE_METADATA.socialMedia.facebook,
    SITE_METADATA.socialMedia.instagram,
    SITE_METADATA.socialMedia.twitter,
    SITE_METADATA.socialMedia.youtube,
  ],
};

/**
 * Product schema for yoga courses and retreats
 */
export const productSchema = (product: {
  name: string;
  description: string;
  price: number;
  priceCurrency?: string;
  imageUrl?: string;
  url: string;
  availability?: string;
  review?: {
    ratingValue: number;
    reviewCount: number;
  };
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.imageUrl || `${SITE_METADATA.siteUrl}/default-product.jpg`,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.priceCurrency || "USD",
      availability: product.availability || "https://schema.org/InStock",
      url: product.url,
    },
    ...(product.review && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.review.ratingValue,
        reviewCount: product.review.reviewCount,
      },
    }),
  };
};

/**
 * Person schema for teacher profiles
 */
export const teacherSchema = (teacher: {
  name: string;
  description: string;
  imageUrl?: string;
  jobTitle?: string;
  url?: string;
  sameAs?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: teacher.name,
    description: teacher.description,
    image: teacher.imageUrl,
    jobTitle: teacher.jobTitle || "Yoga Teacher",
    worksFor: {
      "@type": "Organization",
      name: SITE_METADATA.siteName,
    },
    url: teacher.url || SITE_METADATA.siteUrl,
    sameAs: teacher.sameAs || [],
  };
};

/**
 * Comprehensive TTC FAQ schema for voice search optimization
 */
export const ttcFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does 200-hour yoga teacher training cost in Rishikesh?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "200-hour yoga teacher training in Rishikesh typically costs between $1000-$2500 USD including accommodation and meals. At Hatha Yogashram, we offer competitive pricing at $1,299 for our comprehensive program including private accommodation, three vegetarian meals daily, course materials, and Yoga Alliance certification.",
      },
    },
    {
      "@type": "Question",
      name: "Can beginners join yoga teacher training in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, beginners with at least 6 months of regular yoga practice can join our 200-hour teacher training. We provide foundational training in asanas, philosophy, anatomy, and teaching methodology. Our experienced teachers ensure personalized attention to help beginners build confidence and skills progressively.",
      },
    },
    {
      "@type": "Question",
      name: "Is Hatha Yogashram Yoga Alliance certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Hatha Yogashram is a registered Yoga School (RYS) with Yoga Alliance USA. Our 200-hour and 300-hour programs meet all Yoga Alliance standards. Upon successful completion, you'll be eligible to register as RYT-200 or RYT-500 with Yoga Alliance.",
      },
    },
    {
      "@type": "Question",
      name: "What is daily schedule for yoga teacher training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our daily schedule runs from 6:00 AM to 8:00 PM with breaks for meals and self-practice. Typical day: 6:00 AM - Pranayama & Meditation, 7:30 AM - Asana Practice, 9:30 AM - Breakfast, 10:30 AM - Philosophy, 12:00 PM - Anatomy, 1:00 PM - Lunch, 3:00 PM - Teaching Methodology, 4:30 PM - Asana Practice, 6:30 PM - Dinner, 7:30 PM - Evening Meditation/Kirtan.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in yoga teacher training course fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our TTC fee includes: Private or shared accommodation, 3 nutritious vegetarian meals daily, filtered drinking water, yoga mats and props, course manual and study materials, Yoga Alliance certification, airport pickup from Dehradun, weekly excursions, and lifetime alumni support.",
      },
    },
  ],
};

/**
 * Aggregate review schema for better SERP visibility
 */
export const aggregateReviewSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  itemReviewed: {
    "@type": "EducationalOrganization",
    name: "Hatha Yogashram",
    description: "Yoga Teacher Training School in Rishikesh",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Laxman Jhula Road",
      addressLocality: "Rishikesh",
      addressRegion: "Uttarakhand",
      postalCode: "249302",
      addressCountry: "IN",
    },
  },
  ratingValue: "4.9",
  bestRating: "5",
  worstRating: "1",
  ratingCount: "247",
  reviewCount: "198",
};

/**
 * Individual review schema generator
 */
export const individualReviewSchema = (review: {
  author: string;
  rating: number;
  text: string;
  date: string;
  course: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Course",
    name: review.course,
    provider: {
      "@type": "EducationalOrganization",
      name: "Hatha Yogashram",
    },
  },
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
    bestRating: "5",
  },
  reviewBody: review.text,
  datePublished: review.date,
});

/**
 * Enhanced course schema with more details
 */
export const enhancedCourseSchema = (course: {
  name: string;
  description: string;
  provider?: string;
  url: string;
  startDate?: string;
  endDate?: string;
  duration?: string;
  price?: number;
  priceCurrency?: string;
  imageUrl?: string;
  courseCode?: string;
  educationalLevel?: string;
  prerequisites?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    provider: {
      "@type": "EducationalOrganization",
      name: course.provider || SITE_METADATA.siteName,
      sameAs: SITE_METADATA.siteUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Laxman Jhula Road",
        addressLocality: "Rishikesh",
        addressRegion: "Uttarakhand",
        postalCode: "249302",
        addressCountry: "IN",
      },
    },
    url: course.url,
    courseCode:
      course.courseCode || course.name.replace(/\s+/g, "-").toLowerCase(),
    educationalLevel: course.educationalLevel || "Beginner to Intermediate",
    teaches: [
      "Yoga Asanas (Physical Postures)",
      "Pranayama (Breathing Techniques)",
      "Yoga Philosophy and History",
      "Anatomy and Physiology",
      "Teaching Methodology",
      "Meditation and Mindfulness",
    ],
    ...(course.prerequisites && { coursePrerequisites: course.prerequisites }),
    ...(course.startDate && { startDate: course.startDate }),
    ...(course.endDate && { endDate: course.endDate }),
    ...(course.duration && { timeRequired: course.duration }),
    ...(course.price && {
      offers: {
        "@type": "Offer",
        price: course.price,
        priceCurrency: course.priceCurrency || "USD",
        availability: "https://schema.org/InStock",
        validFrom: new Date().toISOString(),
        priceValidUntil: new Date(
          Date.now() + 365 * 24 * 60 * 60 * 1000,
        ).toISOString(),
      },
    }),
    ...(course.imageUrl && { image: course.imageUrl }),
    inLanguage: "en",
    availableLanguage: ["en", "hi"],
    courseMode: "full-time",
    educationalCredentialAwarded: "Yoga Alliance RYT Certification",
  };
};
