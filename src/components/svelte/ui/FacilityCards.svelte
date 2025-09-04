<script lang="ts">
  import { cn } from "$lib/utils";

  interface Card {
    title: string;
    src: string;
    p: string;
  }

  export let cards: readonly Card[] = [];

  let hovered: number | null = null;

  function setHovered(index: number | null) {
    hovered = index;
  }
</script>

<div
  class="mx-auto grid w-full max-w-full grid-cols-1 gap-10 md:grid-cols-2 md:px-8"
>
  {#each cards as card, index (card.title)}
    <div
      role="button"
      tabindex="0"
      on:mouseenter={() => setHovered(index)}
      on:mouseleave={() => setHovered(null)}
      on:focus={() => setHovered(index)}
      on:blur={() => setHovered(null)}
      class={cn(
        "relative h-60 w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out md:h-96 dark:bg-neutral-900",
        hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
      )}
    >
      <img
        src={card.src}
        alt={card.title}
        class="absolute inset-0 object-cover w-full h-full"
      />
      <div
        class={cn(
          "absolute inset-0 flex items-center justify-center  bg-black/50 px-4 py-8 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0",
        )}
      >
        <div
          class="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-bold text-transparent md:text-2xl"
        >
          <h1>{card.title}</h1>
          <p class="font-extrabold">{card.p}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
