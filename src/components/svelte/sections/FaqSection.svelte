<script lang="ts">
  // FAQ data and styles passed as props
  export let sectionData: {
    TITLE: string;
    FAQS: Array<{ id: number; question: string; answer: string }>;
    CTA: { SUBTITLE: string; BUTTON_TEXT: string; LINK: string };
  };
  export let styles: {
    SECTION_PADDING: string;
    CONTAINER: string;
    TITLE: string;
    FAQ_ITEM: string;
    QUESTION_BUTTON: string;
    QUESTION_BUTTON_ACTIVE: string;
    QUESTION_BUTTON_INACTIVE: string;
    QUESTION_ICON: string;
    QUESTION_TEXT: string;
    TOGGLE_ICON: string;
    ANSWER_CONTAINER: string;
    ANSWER_TEXT: string;
    CTA_BUTTON: string;
  };
  // Decorative underline dimensions & color
  export let width: number = 200;
  export let height: number = 20;
  export let className: string = "text-primary";
  import { slide } from "svelte/transition";

  // Track which FAQ is currently open
  let openFaq: number | null = null;

  function toggleFaq(index: number) {
    openFaq = openFaq === index ? null : index;
  }
</script>

<!-- FAQ Section -->
<section class={styles.SECTION_PADDING}>
  <div class={styles.CONTAINER}>
    <!-- Section Header -->
    <div class="mb-16 text-center">
      <h2 class={styles.TITLE}>
        {sectionData.TITLE}
      </h2>

      <!-- Decorative Underline SVG -->
      <div class="mb-6 flex justify-center">
        <svg
          {width}
          {height}
          viewBox={`0 0 ${width} ${height}`}
          class={className}
        >
          <!-- Left underline gap up to Om (extended gap) -->
          <path
            d={`M${width * 0.05} ${height * 0.5} Q ${width * 0.2} ${height * 0.25} ${width * 0.45} ${height * 0.5}`}
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          ></path>
          <!-- Right underline starts further right (extended gap) -->
          <path
            d={`M${width * 0.55} ${height * 0.5} Q ${width * 0.8} ${height * 0.25} ${width * 0.95} ${height * 0.5}`}
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          ></path>
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-size={`${height * 0.8}`}
            fill="currentColor"
          >
            ॐ
          </text>
        </svg>
      </div>
    </div>

    <!-- FAQ Items -->
    <div class="mx-auto max-w-full space-y-4">
      {#each sectionData.FAQS as faq, index (faq.id)}
        <div class={styles.FAQ_ITEM}>
          <!-- Question Button -->
          <button
            class="{styles.QUESTION_BUTTON} {openFaq === index
              ? styles.QUESTION_BUTTON_ACTIVE
              : styles.QUESTION_BUTTON_INACTIVE} flex cursor-pointer justify-between"
            on:click={() => toggleFaq(index)}
            aria-expanded={openFaq === index}
            aria-controls="faq-answer-{index}"
          >
            <div class="flex items-center">
              <!-- Question Icon -->
              <div
                class="{styles.QUESTION_ICON} {openFaq === index
                  ? 'text-white'
                  : 'text-primary'}"
              >
                <i class="fas fa-question"></i>
              </div>

              <!-- Question Text -->
              <span class={styles.QUESTION_TEXT}>
                {faq.question}
              </span>
            </div>

            <!-- Toggle Icon -->
            <div
              class="{styles.TOGGLE_ICON} {openFaq === index
                ? 'text-white'
                : 'text-primary'}"
            >
              <i class="fas {openFaq === index ? 'fa-minus' : 'fa-plus'}"></i>
            </div>
          </button>

          <!-- Answer -->
          {#if openFaq === index}
            <div
              id="faq-answer-{index}"
              class={styles.ANSWER_CONTAINER}
              transition:slide={{ duration: 300 }}
            >
              <div class={styles.ANSWER_TEXT}>
                {faq.answer}
              </div>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <!-- Contact CTA -->
    <div class="mt-16 text-center">
      <p class="mb-6 text-lg text-gray-700">
        {sectionData.CTA.SUBTITLE}
      </p>
      <a href={sectionData.CTA.LINK} class={styles.CTA_BUTTON}>
        {sectionData.CTA.BUTTON_TEXT}
      </a>
    </div>
  </div>
</section>
