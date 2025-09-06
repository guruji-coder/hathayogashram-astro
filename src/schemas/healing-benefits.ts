/**
 * Healing-specific schema definitions for therapeutic yoga pages
 */

import { SITE_METADATA } from '../lib/yoga-seo-constants';

/**
 * Main healing benefits schema for therapeutic yoga pages
 */
export const healingBenefitsSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalWebPage',
  about: {
    '@type': 'MedicalCondition',
    name: 'Various Health Conditions',
    possibleTreatment: {
      '@type': 'TherapeuticProcedure',
      name: 'Yoga Therapy',
      howPerformed:
        'Specific yoga asanas, pranayama techniques and meditation practices tailored to individual health conditions',
    },
  },
  mainContentOfPage: {
    '@type': 'WebPageElement',
    isPartOf: {
      '@id': `${SITE_METADATA.siteUrl}/yoga-therapy`,
    },
  },
  specialty: {
    '@type': 'MedicalSpecialty',
    name: 'Complementary and Alternative Medicine',
  },
};

/**
 * Specific condition schema for targeted therapeutic yoga pages
 * @param condition Details of the health condition and yoga therapy approach
 */
export const conditionSpecificSchema = (condition: {
  name: string;
  description: string;
  symptoms?: string[];
  yogaSolution: string;
  recommendedPoses: string[];
  evidenceSource?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    about: {
      '@type': 'MedicalCondition',
      name: condition.name,
      description: condition.description,
      ...(condition.symptoms && {
        signOrSymptom: condition.symptoms.map(symptom => ({
          '@type': 'MedicalSymptom',
          name: symptom,
        })),
      }),
      possibleTreatment: {
        '@type': 'TherapeuticProcedure',
        name: 'Yoga Therapy for ' + condition.name,
        description: condition.yogaSolution,
        howPerformed:
          'Through a specific sequence of yoga postures, breathing techniques, and meditation practices designed for ' +
          condition.name.toLowerCase(),
      },
    },
    mainContentOfPage: {
      '@type': 'WebPageElement',
      isPartOf: {
        '@id': `${SITE_METADATA.siteUrl}/yoga-therapy/${condition.name.toLowerCase().replace(/\s+/g, '-')}`,
      },
    },
    specialty: {
      '@type': 'MedicalSpecialty',
      name: 'Complementary and Alternative Medicine',
    },
    ...(condition.evidenceSource && {
      citation: {
        '@type': 'CreativeWork',
        name: condition.evidenceSource,
      },
    }),
  };
};

/**
 * Research studies schema for evidence-based yoga therapy
 * @param studies Array of research study information
 */
export const researchStudiesSchema = (
  studies: Array<{
    title: string;
    authors: string[];
    publicationDate: string;
    journal: string;
    findings: string;
    url?: string;
  }>
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: studies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'MedicalScholarlyArticle',
        headline: study.title,
        author: study.authors.map(author => ({
          '@type': 'Person',
          name: author,
        })),
        datePublished: study.publicationDate,
        publisher: {
          '@type': 'Organization',
          name: study.journal,
        },
        description: study.findings,
        ...(study.url && { url: study.url }),
      },
    })),
  };
};

/**
 * Therapeutic yoga program schema
 * @param program Details of the therapeutic yoga program
 */
export const yogaTherapyProgramSchema = (program: {
  name: string;
  description: string;
  condition: string;
  duration: string;
  frequency: string;
  benefits: string[];
  instructor?: string;
  price?: number;
  priceCurrency?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: program.name,
    description: program.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Rishikesh',
      addressRegion: 'Uttarakhand',
      addressCountry: 'IN',
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: `Yoga Therapy Program for ${program.condition}`,
        description: program.description,
        provider: {
          '@type': 'Organization',
          name: SITE_METADATA.siteName,
          sameAs: SITE_METADATA.siteUrl,
        },
        serviceType: 'Yoga Therapy',
        offers: {
          '@type': 'Offer',
          price: program.price || '',
          priceCurrency: program.priceCurrency || 'USD',
        },
      },
    },
    url: program.url,
  };
};
