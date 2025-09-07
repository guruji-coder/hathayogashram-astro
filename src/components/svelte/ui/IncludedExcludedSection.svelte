<script lang="ts">
  // Receive section data via prop
  export let section: {
    tabs: Array<{ id: string; label: string; title?: string; items?: string[]; sections?: any[] }>;
  };

  // Initialize tabs and active tab based on prop
  const tabs = section?.tabs || [];
  let activeTab = tabs[0]?.id || '';

  function setActiveTab(tabId: string) {
    activeTab = tabId;
  }
</script>

<section class="pb-10 bg-white">
  <div class="container mx-auto px-4">
    <!-- Tab Navigation -->
    <div class="flex flex-wrap justify-center mb-8 max-w-full">
      <div class="flex flex-wrap rounded-lg mx-2 p-1 w-full max-w-fit">
        {#each tabs as tab}
          <button
            class="px-4 py-2 rounded-md font-medium transition-all duration-200 flex-shrink-0"
            class:bg-primary={activeTab === tab.id}
            class:text-white={activeTab === tab.id}
            class:text-gray-600={activeTab !== tab.id}
            class:hover:text-primary={activeTab !== tab.id}
            on:click={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        {/each}
      </div>
    </div>

    <!-- Tab Content -->
    <div class="max-w-full mx-auto">
      {#each tabs as tab}
        {#if activeTab === tab.id}
          <div class="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            {#if tab.title}
              <!-- Simple title for included/excluded -->
              <h3 class="text-2xl font-semibold text-primary mb-6">{tab.title}</h3>
              <div class="grid md:grid-cols-2 gap-6">
                {#each tab.items as item}
                  <div class="flex items-start gap-3">
                    <i class="fas fa-om text-orange-500 mt-1 flex-shrink-0"></i>
                    <p class="text-gray-700">{item}</p>
                  </div>
                {/each}
              </div>
            {:else if tab.sections}
              <!-- Sectioned content for "What to Bring" -->
              <div class="space-y-8">
                {#each tab.sections as section}
                  <div>
                    <h4 class="text-xl font-semibold text-primary mb-4">{section.title}</h4>
                    <div class="space-y-3">
                      {#each section.items as item}
                        <div class="flex items-start gap-3">
                          <i class="fas fa-om text-orange-500 mt-1 flex-shrink-0"></i>
                          <p class="text-gray-700">{item}</p>
                        </div>
                      {/each}
                    </div>
                  </div>
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  /* Custom styles for better mobile experience */
  @media (max-width: 640px) {
    .container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
</style>
