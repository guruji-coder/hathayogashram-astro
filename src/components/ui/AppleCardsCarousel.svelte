<script lang="ts">
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  interface Card {
    src: string;
    title: string;
    category: string;
    content: string;
  }

  export let cards: Card[] = [];

  let carouselRef: HTMLDivElement;
  let canScrollLeft = false;
  let canScrollRight = true;
  let openCard: number | null = null;

  function checkScrollability() {
    if (carouselRef) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef;
      canScrollLeft = scrollLeft > 0;
      canScrollRight = scrollLeft < scrollWidth - clientWidth;
    }
  }

  function scrollLeft() {
    carouselRef?.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    carouselRef?.scrollBy({ left: 300, behavior: "smooth" });
  }

  function openModal(index: number) {
    openCard = index;
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    openCard = null;
    document.body.style.overflow = "auto";
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") closeModal();
  }

  function handleBackdropKeydown(event: KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (event.target === event.currentTarget) closeModal();
    }
  }

  onMount(() => {
    checkScrollability();
  });
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="relative w-full">
  <!-- Carousel -->
  <div
    bind:this={carouselRef}
    class="flex w-full overflow-x-scroll scroll-smooth py-10 [scrollbar-width:none] md:py-20"
    on:scroll={checkScrollability}
  >
    <div class="mx-auto flex max-w-7xl gap-4 pl-4">
      {#each cards as card, index (card.title)}
        <div class="flex-shrink-0 last:pr-8">
          <button
            class="relative h-80 w-56 overflow-hidden rounded-3xl bg-gray-100 transition-transform hover:scale-105 md:h-[40rem] md:w-96"
            on:click={() => openModal(index)}
          >
            <img
              src={card.src}
              alt={card.title}
              class="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent"
            ></div>
            <div class="relative z-10 p-6 text-left">
              <p class="text-sm text-white/80 md:text-base">{card.category}</p>
              <h3 class="mt-2 text-xl font-bold text-white md:text-3xl">
                {card.title}
              </h3>
            </div>
          </button>
        </div>
      {/each}
    </div>
  </div>

  <!-- Navigation -->
  <div class="mr-10 flex justify-center gap-2">
    <button
      class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-50"
      on:click={scrollLeft}
      disabled={!canScrollLeft}
      aria-label="Scroll left"
    >
      ←
    </button>
    <button
      class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md disabled:opacity-50"
      on:click={scrollRight}
      disabled={!canScrollRight}
      aria-label="Scroll right"
    >
      →
    </button>
  </div>
</div>

<!-- Modal -->
{#if openCard !== null && cards[openCard]}
  <div
    class="fixed inset-0 z-50 flex items-end justify-center p-4 md:items-center"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
    tabindex="-1"
    transition:fade={{ duration: 200 }}
    on:keydown={handleBackdropKeydown}
  >
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/80 backdrop-blur-sm"
      role="button"
      tabindex="0"
      aria-label="Close modal"
      on:click={closeModal}
      on:keydown={handleBackdropKeydown}
    ></div>

    <!-- Modal Content - Bottom on mobile, center on desktop -->
    <div
      class="relative h-[70vh] max-h-[70vh] w-full max-w-2xl
			       overflow-y-auto rounded-t-3xl bg-white p-6
			       md:h-auto md:max-h-[80vh] md:rounded-3xl"
      transition:fly={{ y: 300, duration: 300 }}
    >
      <!-- Close Button -->
      <button
        class="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
        on:click={closeModal}
        aria-label="Close modal"
      >
        ×
      </button>

      <!-- Content -->
      <div class="pr-12">
        <h2
          id="modal-title"
          class="mt-2 text-2xl font-bold text-gray-900 md:text-3xl"
        >
          {cards[openCard].title}
        </h2>
        <div class="prose prose-gray mt-6 max-w-none text-gray-700">
          {@html cards[openCard].content}
        </div>
      </div>
    </div>
  </div>
{/if}
