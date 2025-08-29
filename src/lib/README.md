# Yoga SEO Keywords and Constants

This directory contains comprehensive SEO keyword databases and utility functions to optimize your yoga website's search engine rankings. These files provide structured keyword collections for yoga poses (asanas), breathing techniques (pranayama), therapeutic applications, philosophy, and more.

## File Structure

- `yoga-seo-constants.ts` - Main export file with helper functions
- `asana-keywords.ts` - Yoga poses and sequences
- `pranayama-keywords.ts` - Breathing techniques and benefits
- `healing-keywords.ts` - Therapeutic applications and health conditions
- `philosophy-keywords.ts` - Yoga philosophy, gurus, and sacred texts

## Usage Examples

### Basic Import

```typescript
// Import all SEO constants
import * as YogaSEO from '../lib/yoga-seo-constants';

// Access specific category
const asanaKeywords = YogaSEO.AsanaKeywords.ASANA_KEYWORDS;
const healingKeywords = YogaSEO.HealingKeywords.HEALING_KEYWORDS;
```

### Direct Import

```typescript
// Import specific constants directly
import { ASANA_KEYWORDS } from '../lib/asana-keywords';
import { HEALING_KEYWORDS, CONDITION_ASANA_MAP } from '../lib/healing-keywords';
```

### Generating Meta Tags

```typescript
import { generateKeywordsString } from '../utils/seo-utils';
import { HEALING_KEYWORDS } from '../lib/healing-keywords';

// Generate keywords for a specific page
const backPainKeywords = [
  ...HEALING_KEYWORDS.physicalHealing.filter(kw => kw.includes('back pain')),
  'yoga for back pain relief',
  'back pain healing poses',
  'spine alignment yoga'
];

// Convert to meta tag format
const keywordsString = generateKeywordsString(backPainKeywords);
```

### Creating SEO-Optimized Pages

```typescript
import { generateSEO } from '../utils/seo-utils';
import { conditionSpecificSchema } from '../schemas/healing-benefits';
import { CONDITION_ASANA_MAP } from '../lib/healing-keywords';

// Generate SEO metadata for a therapeutic yoga page
const seoData = generateSEO({
  pageType: 'healing',
  values: {
    condition: 'Back Pain',
    benefit: 'natural back pain relief'
  },
  path: '/healing/back-pain',
  structuredData: conditionSpecificSchema({
    name: 'Back Pain',
    description: 'Yoga therapy approaches for back pain treatment and management.',
    yogaSolution: 'Specific yoga sequences strengthen core, improve flexibility, and realign spine',
    recommendedPoses: CONDITION_ASANA_MAP['Back Pain']
  })
});
```

## Schemas

The `/schemas` directory contains structured data templates for rich snippets:

- `yoga-schemas.ts` - General schema templates (courses, articles, FAQs)
- `healing-benefits.ts` - Medical and therapeutic schema templates

## Tips for SEO Optimization

1. **Use Sanskrit Terms**: Include both Sanskrit and English names for poses and techniques
2. **Long-Tail Keywords**: Target specific health conditions and benefits
3. **Structured Data**: Use schema markup for rich snippets in search results
4. **Title Patterns**: Follow the title and description patterns for consistency
5. **Evidence-Based Claims**: Include research-backed benefits when possible

## Customization

Feel free to expand these keyword databases with:

- Additional yoga styles
- Location-specific keywords
- Course-specific terminology
- Seasonal yoga practices
- Specialized yoga approaches

## Maintenance

These keyword databases should be updated periodically based on:

1. Google Search Console data for your website
2. New trending yoga terms
3. Emerging research on yoga benefits
4. Changes in search patterns for yoga-related terms
