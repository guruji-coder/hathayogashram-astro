<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  // Props
  export let sectionData: {
    TITLE: string;
    MODULES: Array<{
      id: number;
      title: string;
      isExpanded: boolean;
      sections: Array<{
        subtitle: string;
        description: string;
        items: string[];
      }>;
    }>;
    CTA: { SUBTITLE: string; BUTTON_TEXT: string; LINK: string };
  };
  export let styles: {
    SECTION_PADDING: string;
    CONTAINER: string;
    TITLE: string;
    MODULE_ITEM: string;
    MODULE_BUTTON: string;
    MODULE_BUTTON_ACTIVE: string;
    MODULE_BUTTON_INACTIVE: string;
    MODULE_ICON: string;
    MODULE_TEXT: string;
    TOGGLE_ICON: string;
    CONTENT_CONTAINER: string;
    CONTENT_TEXT: string;
    SECTION_TITLE: string;
    SECTION_DESCRIPTION: string;
    ITEMS_GRID: string;
    ITEM: string;
    ITEM_ICON: string;
    CTA_BUTTON: string;
  };

  // Decorative underline props
  export let width: number = 400;
  export let height: number = 30;
  export let className: string = 'text-primary';

  // State
  let openModule: number | null = null;
  let isMobile = false;

  // Check if mobile on mount
  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth < 768;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });

  function toggleModule(index: number) {
    // Only toggle on mobile
    if (isMobile) {
      openModule = openModule === index ? null : index;
    }
  }

  function isModuleOpen(index: number): boolean {
    // Desktop: always open, Mobile: check openModule state
    return !isMobile || openModule === index;
  }
</script>

<!-- Curriculum Section -->
<section class={styles.SECTION_PADDING} id="curriculum">
  <div class={styles.CONTAINER}>
    <!-- Section Header -->
    <div class="mb-16 text-center">
      <h2 class={styles.TITLE}>
        {sectionData.TITLE}
      </h2>

      <!-- Decorative Underline SVG -->
      <div class="mb-6 flex justify-center">
        <svg {width} {height} viewBox={`0 0 ${width} ${height}`} class={className}>
          <!-- Left underline -->
          <path
            d={`M${width * 0.05} ${height * 0.5} Q ${width * 0.2} ${height * 0.25} ${width * 0.42} ${height * 0.5}`}
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <!-- Right underline -->
          <path
            d={`M${width * 0.58} ${height * 0.5} Q ${width * 0.8} ${height * 0.25} ${width * 0.95} ${height * 0.5}`}
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
          <!-- Om symbol -->
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

    <!-- Curriculum Modules -->
    <div class="mx-auto max-w-full space-y-4">
      {#each sectionData.MODULES as module, index (module.id)}
        <div class={styles.MODULE_ITEM}>
          <!-- Module Header -->
          <button
            class="{styles.MODULE_BUTTON} {isModuleOpen(index)
              ? styles.MODULE_BUTTON_ACTIVE
              : styles.MODULE_BUTTON_INACTIVE} flex items-center justify-between {!isMobile
              ? 'cursor-default'
              : ''}"
            on:click={() => toggleModule(index)}
            aria-expanded={isModuleOpen(index)}
            aria-controls="module-content-{index}"
          >
            <div class="flex items-center flex-1">
              <!-- Module Number Icon -->
              <div
                class="{styles.MODULE_ICON} {isModuleOpen(index)
                  ? 'bg-white/20 text-white'
                  : 'bg-primary/10 text-primary'}"
              >
                {module.id}
              </div>

              <!-- Module Title -->
              <span class={styles.MODULE_TEXT}>
                {module.title}
              </span>
            </div>

            <!-- Toggle Icon - Hide on desktop -->
            {#if isMobile}
              <div
                class="{styles.TOGGLE_ICON} {isModuleOpen(index)
                  ? 'text-white rotate-180'
                  : 'text-primary'}"
              >
                <i class="fas fa-chevron-down"></i>
              </div>
            {/if}
          </button>

          <!-- Module Content -->
          {#if isModuleOpen(index)}
            <div
              id="module-content-{index}"
              class={styles.CONTENT_CONTAINER}
              transition:slide={{ duration: isMobile ? 400 : 0, easing: t => t * (2 - t) }}
            >
              <div class={styles.CONTENT_TEXT}>
                {#each module.sections as section}
                  <div class="mb-6 last:mb-0">
                    <!-- Section Subtitle -->
                    {#if section.subtitle}
                      <h4 class={styles.SECTION_TITLE}>
                        {section.subtitle}
                      </h4>
                    {/if}

                    <!-- Section Description -->
                    {#if section.description}
                      <p class={styles.SECTION_DESCRIPTION}>
                        {section.description}
                      </p>
                    {/if}

                    <!-- Section Items -->
                    {#if section.items && section.items.length > 0}
                      <div class={styles.ITEMS_GRID}>
                        {#each section.items as item}
                          <div class={styles.ITEM}>
                            <span class={styles.ITEM_ICON}>॰</span>
                            <span>{item}</span>
                          </div>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/each}
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
        <span>{sectionData.CTA.BUTTON_TEXT}</span>
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
</section>

<style>
  /* Smooth transitions */
  .fa-chevron-down {
    transition: transform 0.3s ease;
  }

  /* Custom scrollbar for content */
  .content-container::-webkit-scrollbar {
    width: 6px;
  }

  .content-container::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  .content-container::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 3px;
  }

  .content-container::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    :global(.items-grid) {
      grid-template-columns: 1fr !important;
    }
  }
</style>
