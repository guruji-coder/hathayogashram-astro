/**
 * Example implementation of SEO-optimized page component
 * This shows how to use the SEO constants in a real Svelte page
 */

// Import necessary SEO utilities and constants
import { HEALING_KEYWORDS, CONDITION_ASANA_MAP, HEALING_SOLUTIONS } from '../lib/healing-keywords';
import { PRANAYAMA_TECHNIQUES } from '../lib/pranayama-keywords';
import { ASANA_SEQUENCES } from '../lib/asana-keywords';
import { generateSEO, generateKeywordsString } from '../utils/seo-utils';
import { conditionSpecificSchema } from '../schemas/healing-benefits';

// Type definition for condition keys
type ConditionKey = keyof typeof CONDITION_ASANA_MAP;
type HealingSolutionKey = keyof typeof HEALING_SOLUTIONS;

// Example page component that uses the SEO constants
export default function createHealingPage(condition: ConditionKey) {
  // Get condition-specific data
  const healingSolution =
    condition in HEALING_SOLUTIONS ? HEALING_SOLUTIONS[condition as HealingSolutionKey] : undefined;

  const recommendedAsanas = CONDITION_ASANA_MAP[condition] || [];

  // Generate keywords array for this condition
  const conditionKeywords = [
    `yoga for ${condition.toLowerCase()}`,
    `${condition.toLowerCase()} natural treatment`,
    `yoga therapy ${condition.toLowerCase()}`,
    `${condition.toLowerCase()} healing`,
    `yoga poses for ${condition.toLowerCase()}`,
    `${condition.toLowerCase()} relief`,
    ...recommendedAsanas.map(
      (asana: string) => `${asana.toLowerCase()} for ${condition.toLowerCase()}`
    ),
    ...HEALING_KEYWORDS.physicalHealing.filter(kw =>
      kw.toLowerCase().includes(condition.toLowerCase())
    ),
  ];

  // Generate SEO metadata
  const seoData = generateSEO({
    pageType: 'healing',
    values: {
      condition,
      benefit: `natural ${condition.toLowerCase()} relief`,
    },
    path: `/healing/${condition.toLowerCase().replace(/\s+/g, '-')}`,
    structuredData: conditionSpecificSchema({
      name: condition,
      description: `Yoga therapy approaches for ${condition} treatment and management.`,
      symptoms: ['Pain', 'Discomfort', 'Limited mobility'],
      yogaSolution:
        healingSolution?.solution ||
        `A comprehensive yoga therapy program designed specifically for ${condition}.`,
      recommendedPoses: recommendedAsanas,
      evidenceSource: healingSolution?.evidence,
    }),
  });

  // Return page data with SEO info
  return {
    props: {
      condition,
      healingSolution,
      recommendedAsanas,
      seoData,
      // Additional metadata
      keywords: generateKeywordsString(conditionKeywords),
      recommendedPranayama: healingSolution?.pranayama || [],
      relatedConditions: Object.keys(CONDITION_ASANA_MAP)
        .filter(c => c !== condition)
        .filter(c => {
          const condKey = c as ConditionKey;
          const commonAsanas = CONDITION_ASANA_MAP[condKey].filter((asana: string) =>
            recommendedAsanas.includes(asana)
          );
          return commonAsanas.length > 0;
        })
        .slice(0, 5),
      recommendedSequence: ASANA_SEQUENCES['Back Care Sequence'], // Example sequence
    },
  };
}

// Example usage in a Svelte page
/*
<script>
  import { CONDITION_ASANA_MAP, HEALING_SOLUTIONS } from '../lib/healing-keywords';
  import { generateSEO } from '../utils/seo-utils';
  import { conditionSpecificSchema } from '../schemas/healing-benefits';
  
  export let condition = "Back Pain";
  export let healingSolution = HEALING_SOLUTIONS[condition];
  export let recommendedAsanas = CONDITION_ASANA_MAP[condition] || [];
  
  const seoData = generateSEO({
    pageType: 'healing',
    values: {
      condition,
      benefit: `natural ${condition.toLowerCase()} relief`
    },
    path: `/healing/${condition.toLowerCase().replace(/\s+/g, '-')}`,
    structuredData: conditionSpecificSchema({
      name: condition,
      description: `Yoga therapy approaches for ${condition} treatment and management.`,
      yogaSolution: healingSolution?.solution,
      recommendedPoses: recommendedAsanas
    })
  });
</script>

<svelte:head>
  <title>{seoData.title}</title>
  <meta name="description" content={seoData.description} />
  <meta name="keywords" content={seoData.keywords} />
  <link rel="canonical" href={seoData.canonical} />
  
  {#if seoData.structuredData}
    <script type="application/ld+json">
      {JSON.stringify(seoData.structuredData)}
    </script>
  {/if}
</svelte:head>

<main>
  <h1>Yoga for {condition}</h1>
  
  <!-- Page content using the SEO optimized data -->
</main>
*/
