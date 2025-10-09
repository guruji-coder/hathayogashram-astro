<script lang="ts">
  interface FAQItem {
    question: string;
    answer: string;
  }

  interface FAQCategory {
    category: string;
    items: FAQItem[];
  }

  interface FAQData {
    TITLE: string;
    FAQS: Array<{
      id: number;
      question: string;
      answer: string;
    }>;
    CTA?: {
      SUBTITLE: string;
      BUTTON_TEXT: string;
      LINK: string;
    };
  }

  export let title: string = "Frequently Asked Questions";
  export let subtitle: string = "Get answers to common questions about our yoga teacher training programs";
  export let faqData: FAQData | undefined = undefined;
  export let faqs: FAQCategory[] = [];

  // Process the FAQ data
  let processedFAQs: Array<{
    id: string;
    category: string;
    question: string;
    answer: string;
  }> = [];

  let sectionTitle = title;
  let ctaData = {
    SUBTITLE: "Still have questions? We'd love to help!",
    BUTTON_TEXT: "Contact Us",
    LINK: "/contact"
  };

  // Process based on which prop is provided
  if (faqData) {
    sectionTitle = faqData.TITLE || title;
    ctaData = faqData.CTA || ctaData;
    processedFAQs = faqData.FAQS.map((faq, index) => ({
      id: `faq-${index}`,
      category: 'General',
      question: faq.question,
      answer: faq.answer
    }));
  } else if (faqs && faqs.length > 0) {
    processedFAQs = faqs.flatMap((category, catIndex) => 
      category.items.map((item, itemIndex) => ({
        id: `faq-${catIndex}-${itemIndex}`,
        category: category.category,
        question: item.question,
        answer: item.answer
      }))
    );
  }

  // Track flipped cards
  let flippedCards = new Set<string>();

  function toggleCard(id: string) {
    if (flippedCards.has(id)) {
      flippedCards.delete(id);
    } else {
      flippedCards.add(id);
    }
    flippedCards = flippedCards; // Trigger reactivity
  }

  function handleKeyPress(event: KeyboardEvent, id: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard(id);
    }
  }

  // Mobile: Show only first 4 cards initially
  let showAllMobile = false;
  
  function showMoreFAQs() {
    showAllMobile = true;
  }
</script>

<section class="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
  <div class="container mx-auto px-4">
    
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        {sectionTitle}
      </h2>
      {#if subtitle}
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      {/if}
    </div>

    <!-- FAQ Cards Grid -->
    <div class="faq-grid grid gap-3 md:gap-4 lg:gap-6">
      {#each processedFAQs as faq, index}
        <div 
          class="flip-card-container"
          class:hidden-mobile={!showAllMobile && index >= 4}
          on:mouseenter={() => toggleCard(faq.id)}
          on:mouseleave={() => toggleCard(faq.id)}
          on:click={() => toggleCard(faq.id)}
          on:keypress={(e) => handleKeyPress(e, faq.id)}
          role="button"
          tabindex="0"
          aria-label="FAQ card: {faq.question}"
        >
          <div 
            class="flip-card-inner"
            class:flipped={flippedCards.has(faq.id)}
          >
            <!-- Front of card -->
            <div class="flip-card-front">
              <div class="p-6 h-full flex flex-col justify-between">
                <div>
                  <div class="text-xs md:text-sm text-white font-semibold mb-3 uppercase tracking-wide">
                    {faq.category}
                  </div>
                  <h3 class="text-base md:text-lg font-bold text-white leading-snug">
                    {faq.question}
                  </h3>
                </div>
                <div class="mt-4 text-white/80 font-medium text-left flex items-center gap-2">
                  <span>Hover or click to see answer</span>
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <!-- Back of card -->
            <div class="flip-card-back">
              <div class="p-6 h-full flex flex-col justify-between">
                <div>
                  <div class="text-xs md:text-sm text-orange-600 font-semibold mb-3">
                    Answer
                  </div>
                  <p class="text-sm md:text-base text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
                <div class="mt-4 text-orange-600 font-medium text-left flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Hover away to see question</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Mobile Read More Button -->
    {#if !showAllMobile && processedFAQs.length > 4}
      <div class="text-center mt-8 md:hidden">
        <button 
          class="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          on:click={showMoreFAQs}
          type="button"
        >
          Read More FAQs ({processedFAQs.length - 4} more)
        </button>
      </div>
    {/if}

    <!-- Call to Action -->
    {#if ctaData}
      <div class="text-center mt-12">
        <p class="text-lg text-gray-700 mb-6">{ctaData.SUBTITLE}</p>
        <a 
          class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
          href={ctaData.LINK}
        >
          {ctaData.BUTTON_TEXT}
        </a>
      </div>
    {/if}

  </div>
</section>

<style>
  /* Responsive Grid Layout */
  .faq-grid {
    /* Mobile: 1 column */
    grid-template-columns: 1fr;
  }
  
  /* Tablet: 2 columns */
  @media (min-width: 640px) {
    .faq-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  /* Tablet: 3 columns */
  @media (min-width: 768px) {
    .faq-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  /* Desktop: 4 columns */
  @media (min-width: 1024px) {
    .faq-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Hide cards after 4th on mobile only */
  @media (max-width: 767px) {
    .hidden-mobile {
      display: none;
    }
  }

  /* 3D Flip Card Styles */
  .flip-card-container {
    perspective: 1000px;
    min-height: 200px;
    height: 100%;
    cursor: pointer;
  }
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 200px;
    transition: transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);
    transform-style: preserve-3d;
  }
  
  .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }
  
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 200px;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .flip-card-front {
    background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
  }
  
  .flip-card-back {
    transform: rotateY(180deg);
    background: linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%);
  }

  /* Hover effects */
  .flip-card-container:hover .flip-card-front {
    box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
  }

  .flip-card-container:hover .flip-card-back {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  /* Focus styles for accessibility */
  .flip-card-container:focus-visible {
    outline: 2px solid #8b5cf6;
    outline-offset: 2px;
    border-radius: 16px;
  }

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    .flip-card-inner {
      transition: none;
    }
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    .flip-card-front,
    .flip-card-back {
      border: 2px solid currentColor;
    }
  }
</style>
