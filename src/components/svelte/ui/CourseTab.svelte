<!-- CourseTab.svelte -->
<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import CourseCard from './CourseCard.svelte';
  import type { Course } from '$constants/courseConstants';
  
  interface Tab {
    title: string;
    value: string;
    courses: Course[];
  }
  
  export let tabs: Tab[] = [];
  
  let activeTab = tabs[0];
  
  const handleKeydown = (event: KeyboardEvent) => {
    const currentIndex = tabs.indexOf(activeTab);
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }
    
    event.preventDefault();
    activeTab = tabs[newIndex];
    event.target.focus();
  };
</script>

<!-- Tab Navigation -->
<div class="flex justify-center mb-8" role="tablist" tabindex="0">
  <div class="flex flex-wrap gap-4 justify-center max-w-6xl">
    {#each tabs as tab}
      <button
        role="tab"
        id="tab-{tab.value}"
        aria-selected={activeTab.value === tab.value}
        aria-controls="tabpanel-{tab.value}"
        tabindex={activeTab.value === tab.value ? 0 : -1}
        class="tab-button px-8 py-4 text-sm font-medium transition-all duration-300 rounded-full border-2 {activeTab.value === tab.value 
          ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 text-white border-transparent shadow-2xl scale-110 shadow-purple-500/40' 
          : 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white border-transparent hover:from-blue-500 hover:via-purple-500 hover:to-indigo-600 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105'}"
        on:click={() => activeTab = tab}
        on:keydown={handleKeydown}
      >
        {tab.title}
      </button>
    {/each}
  </div>
</div>

<!-- Tab Content -->
{#each tabs as tab}
  {#if activeTab.value === tab.value}
    <div 
      role="tabpanel"
      id="tabpanel-{tab.value}"
      aria-labelledby="tab-{tab.value}"
      tabindex="0"
      class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      in:fly={{ y: 20, duration: 400, easing: quintOut }}
      out:fade={{ duration: 200 }}
    >
      <!-- Replace manual course card markup with CourseCard -->
      {#each tab.courses as course}
        <CourseCard {course} />
      {/each}
    </div>
  {/if}
{/each}

<style>
  .tab-button {
    transition: all 0.3s ease;
    min-width: 180px;
    white-space: nowrap;
  }
  
  .tab-button:hover {
    transform: translateY(-2px);
  }
  
  .tab-button:active {
    transform: translateY(0);
  }
</style>
