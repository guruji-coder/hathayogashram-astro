// Comprehensive yoga keywords database for maximum SEO coverage
export const YOGA_KEYWORDS = {
  // Core yoga training keywords
  primary: [
    "yoga teacher training",
    "yoga certification",
    "yoga instructor course",
    "yoga teacher certification",
    "yoga alliance certification",
    "RYT 200",
    "RYT 300",
    "RYT 500",
    "yoga teacher training program",
    "yoga instructor training"
  ],

  // Location-based keywords
  location: [
    "yoga teacher training india",
    "yoga certification rishikesh",
    "yoga school rishikesh",
    "yoga training india",
    "yoga teacher training himalayas",
    "rishikesh yoga alliance",
    "india yoga certification",
    "himalayan yoga training",
    "authentic yoga training india",
    "traditional yoga school india"
  ],

  // Yoga styles
  styles: [
    "hatha yoga teacher training",
    "ashtanga yoga certification",
    "vinyasa yoga training",
    "yin yoga teacher training",
    "kundalini yoga certification",
    "power yoga instructor course",
    "restorative yoga training",
    "hot yoga certification",
    "aerial yoga teacher training",
    "prenatal yoga certification"
  ],

  // Duration-based
  duration: [
    "200 hour yoga teacher training",
    "300 hour yoga teacher training", 
    "500 hour yoga teacher training",
    "intensive yoga training",
    "yoga teacher training course",
    "yoga certification program",
    "yoga teacher training intensive",
    "yoga alliance 200 hour",
    "yoga alliance 300 hour",
    "residential yoga training"
  ],

  // Philosophy & spiritual keywords
  philosophy: [
    "yoga philosophy training",
    "patanjali yoga sutras",
    "hatha yoga pradipika",
    "bhagavad gita yoga",
    "yoga philosophy course",
    "sanskrit yoga training",
    "vedic philosophy yoga",
    "yoga meditation training",
    "pranayama teacher training",
    "yoga nidra certification"
  ],

  // Long-tail keywords
  longTail: [
    "best yoga teacher training in india",
    "affordable yoga teacher training rishikesh",
    "traditional yoga teacher training india",
    "yoga alliance registered school india",
    "authentic hatha yoga training",
    "residential yoga teacher training program",
    "yoga teacher training with accommodation",
    "spiritual yoga training india",
    "yoga teacher training near himalaya",
    "certified yoga instructor course india"
  ],

  // Intent-based keywords
  intent: [
    "how to become yoga teacher",
    "yoga teacher certification requirements",
    "best yoga teacher training",
    "yoga instructor license",
    "yoga teacher training cost",
    "yoga certification online vs offline",
    "yoga alliance registration process",
    "yoga teacher insurance",
    "continuing education yoga",
    "yoga teacher salary"
  ],

  // Semantic keywords
  semantic: [
    "mindfulness meditation training",
    "holistic wellness certification",
    "spiritual awakening retreat",
    "ancient wisdom teachings",
    "consciousness expansion course",
    "energy healing training",
    "chakra balancing certification",
    "stress relief instructor course",
    "wellness coach training",
    "mind body spirit education"
  ]
};

// Generate keyword combinations for maximum coverage
export function generateKeywordCombinations(): string[] {
  const combinations: string[] = [];
  
  // Combine primary with location
  YOGA_KEYWORDS.primary.forEach(primary => {
    YOGA_KEYWORDS.location.forEach(location => {
      combinations.push(`${primary} ${location.split(' ').slice(-1)[0]}`);
    });
  });

  // Combine styles with duration
  YOGA_KEYWORDS.styles.forEach(style => {
    YOGA_KEYWORDS.duration.forEach(duration => {
      combinations.push(`${duration.split(' ')[0]} hour ${style}`);
    });
  });

  return combinations;
}

// SEO-optimized content patterns
export const SEO_PATTERNS = {
  titlePatterns: [
    "{keyword} in Rishikesh, India | Hatha Yogashram",
    "Best {keyword} | Yoga Alliance Certified | Hatha Yogashram", 
    "{keyword} - Traditional Yoga School Rishikesh",
    "Authentic {keyword} | Himalayan Yoga Academy",
    "{keyword} with Accommodation | Hatha Yogashram"
  ],
  
  descriptionPatterns: [
    "Join our {keyword} at Hatha Yogashram, Rishikesh. Yoga Alliance certified, traditional teaching, experienced masters, all-inclusive program.",
    "Authentic {keyword} in the yoga capital of the world. Traditional Hatha & Ashtanga, Sanskrit mantras, philosophy. Book now!",
    "Transform your practice with our {keyword}. Residential program in Rishikesh with Indian masters, vegetarian meals, certification included.",
    "Experience authentic {keyword} at Hatha Yogashram. Traditional teachings, modern comfort, lifetime support. Yoga Alliance RYS certified."
  ]
};
