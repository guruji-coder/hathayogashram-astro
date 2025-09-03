<script lang="ts">
  import { onMount } from "svelte";
  import TeacherCard from "./TeacherCard.svelte";

  export let teachers: Array<{
    id: number;
    name: string;
    specialty: string;
    experience: string;
    image: string;
  }>;

  let currentIndex = 0;
  let carousel: HTMLElement;
  let interval: number;

  onMount(() => {
    // Auto-scroll every 4 seconds
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % teachers.length;
      updateCarousel();
    }, 4000);

    return () => clearInterval(interval);
  });

  function updateCarousel() {
    if (!carousel) return;

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

    let itemsPerView = 3; // Desktop
    if (isMobile) itemsPerView = 1;
    else if (isTablet) itemsPerView = 2;

    const translateX = -(currentIndex * (100 / itemsPerView));

    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${translateX}%)`;
  }

  // Handle resize
  onMount(() => {
    const handleResize = () => updateCarousel();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
</script>

<div class="mx-auto max-w-full">
  <div class="overflow-hidden">
    <div bind:this={carousel} class="flex">
      {#each teachers as teacher}
        <div class="w-full flex-shrink-0 sm:w-1/2 lg:w-1/3">
          <TeacherCard {teacher} />
        </div>
      {/each}
    </div>
  </div>
</div>
