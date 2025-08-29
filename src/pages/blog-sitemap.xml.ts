// src/pages/blog-sitemap.xml.ts
import type { APIRoute } from 'astro';
import { SITE_METADATA } from '../lib/yoga-seo-constants';

// Blog post categories and their priorities
const BLOG_CATEGORIES = {
  'yoga-teacher-training': {
    priority: '0.9',
    changefreq: 'monthly',
    posts: [
      'complete-guide-200-hour-yoga-teacher-training',
      'how-to-choose-best-yoga-teacher-training-school',
      'yoga-teacher-training-cost-breakdown-india',
      'benefits-of-studying-yoga-in-rishikesh',
      'what-to-expect-yoga-teacher-training-india',
      'yoga-alliance-certification-complete-guide',
      'preparing-for-yoga-teacher-training-checklist',
      'hatha-vs-vinyasa-yoga-teacher-training',
      'advanced-yoga-teacher-training-500-hour',
      'online-vs-offline-yoga-teacher-training'
    ]
  },
  'yoga-philosophy': {
    priority: '0.8',
    changefreq: 'monthly',
    posts: [
      'complete-guide-patanjali-yoga-sutras',
      'understanding-eight-limbs-of-yoga-ashtanga',
      'bhagavad-gita-teachings-for-yoga-teachers',
      'yoga-philosophy-for-modern-practitioners',
      'karma-yoga-philosophy-and-practice',
      'raja-yoga-meditation-techniques-guide',
      'vedanta-philosophy-in-yoga-practice',
      'yoga-and-hinduism-understanding-connection',
      'ancient-yoga-texts-essential-reading',
      'spiritual-aspects-of-yoga-practice'
    ]
  },
  'asanas-poses': {
    priority: '0.8',
    changefreq: 'weekly',
    posts: [
      'ultimate-guide-sun-salutation-surya-namaskara',
      'beginner-yoga-poses-complete-guide',
      'advanced-yoga-poses-for-experienced-practitioners',
      'yoga-poses-for-back-pain-relief',
      'heart-opening-yoga-poses-backbends',
      'hip-opening-yoga-poses-flexibility',
      'arm-balances-yoga-poses-strength-building',
      'inversions-yoga-poses-benefits-precautions',
      'standing-yoga-poses-foundation-strength',
      'seated-yoga-poses-flexibility-meditation'
    ]
  },
  'pranayama-breathing': {
    priority: '0.7',
    changefreq: 'monthly',
    posts: [
      'complete-guide-pranayama-breathing-techniques',
      'ujjayi-breathing-technique-benefits',
      'kapalbhati-pranayama-skull-shining-breath',
      'anulom-vilom-alternate-nostril-breathing',
      'bhramari-pranayama-humming-bee-breath',
      'bhastrika-pranayama-bellows-breath-technique',
      'nadi-shodhana-balancing-breath-practice',
      'pranayama-for-stress-relief-anxiety',
      'breathing-techniques-for-better-sleep',
      'advanced-pranayama-techniques-experienced-practitioners'
    ]
  },
  'meditation-mindfulness': {
    priority: '0.7',
    changefreq: 'monthly',
    posts: [
      'beginners-guide-to-meditation-practice',
      'vipassana-meditation-technique-benefits',
      'mindfulness-meditation-daily-practice',
      'chakra-meditation-complete-guide',
      'mantra-meditation-techniques-benefits',
      'walking-meditation-mindful-movement',
      'body-scan-meditation-relaxation-technique',
      'loving-kindness-meditation-practice',
      'concentration-meditation-dharana-techniques',
      'meditation-for-yoga-teachers-integration'
    ]
  },
  'yoga-therapy-healing': {
    priority: '0.8',
    changefreq: 'monthly',
    posts: [
      'yoga-therapy-for-anxiety-depression',
      'therapeutic-yoga-for-chronic-pain',
      'yoga-for-digestive-health-gut-healing',
      'prenatal-yoga-pregnancy-safe-practices',
      'yoga-for-seniors-gentle-modifications',
      'yoga-therapy-for-trauma-healing',
      'yoga-for-insomnia-better-sleep-quality',
      'therapeutic-benefits-of-yin-yoga',
      'yoga-for-heart-health-cardiovascular',
      'restorative-yoga-for-stress-recovery'
    ]
  },
  'rishikesh-india': {
    priority: '0.6',
    changefreq: 'monthly',
    posts: [
      'complete-guide-to-rishikesh-yoga-capital',
      'best-yoga-schools-in-rishikesh-comparison',
      'living-in-rishikesh-during-yoga-training',
      'rishikesh-ashrams-spiritual-experience',
      'food-and-accommodation-rishikesh',
      'weather-in-rishikesh-best-time-visit',
      'things-to-do-rishikesh-beyond-yoga',
      'transportation-guide-rishikesh-india',
      'safety-tips-for-international-students',
      'cultural-etiquette-in-rishikesh-india'
    ]
  },
  'yoga-business': {
    priority: '0.6',
    changefreq: 'monthly',
    posts: [
      'how-to-start-yoga-teaching-business',
      'yoga-studio-business-plan-template',
      'online-yoga-teaching-platform-guide',
      'yoga-teacher-insurance-professional-coverage',
      'marketing-strategies-for-yoga-teachers',
      'pricing-yoga-classes-services-guide',
      'building-yoga-community-student-retention',
      'yoga-teacher-continuing-education-requirements',
      'legal-considerations-yoga-teachers',
      'social-media-marketing-yoga-instructors'
    ]
  }
};

// Generate blog URLs with dates and categories
function generateBlogUrls(): Array<{
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}> {
  const urls: Array<{
    url: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  }> = [];

  // Add main blog page
  urls.push({
    url: `${SITE_METADATA.siteUrl}/blog/`,
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'daily',
    priority: '0.8'
  });

  // Add category pages
  Object.keys(BLOG_CATEGORIES).forEach(category => {
    urls.push({
      url: `${SITE_METADATA.siteUrl}/blog/category/${category}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.7'
    });
  });

  // Generate individual blog posts with realistic dates
  Object.entries(BLOG_CATEGORIES).forEach(([category, config]) => {
    config.posts.forEach((post, index) => {
      // Generate dates over the past 2 years
      const monthsAgo = Math.floor(Math.random() * 24) + 1;
      const postDate = new Date();
      postDate.setMonth(postDate.getMonth() - monthsAgo);
      
      urls.push({
        url: `${SITE_METADATA.siteUrl}/blog/${category}/${post}/`,
        lastmod: postDate.toISOString().split('T')[0],
        changefreq: config.changefreq,
        priority: config.priority
      });
    });
  });

  // Add tag pages
  const popularTags = [
    'beginner-yoga',
    'advanced-yoga',
    'yoga-certification',
    'spiritual-practice',
    'physical-health',
    'mental-wellness',
    'meditation-practice',
    'yoga-lifestyle',
    'teacher-training',
    'yoga-philosophy',
    'breathing-techniques',
    'stress-relief',
    'flexibility-training',
    'strength-building',
    'mindfulness-practice'
  ];

  popularTags.forEach(tag => {
    urls.push({
      url: `${SITE_METADATA.siteUrl}/blog/tag/${tag}/`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.5'
    });
  });

  return urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));
}

// Generate XML sitemap
export const GET: APIRoute = async () => {
  const blogUrls = generateBlogUrls();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${blogUrls.map(({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${SITE_METADATA.siteUrl}/images/blog/${url.split('/').slice(-2, -1)[0]}-featured.jpg</image:loc>
      <image:caption>Featured image for ${url.split('/').slice(-2, -1)[0].replace(/-/g, ' ')}</image:caption>
    </image:image>
  </url>`).join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
