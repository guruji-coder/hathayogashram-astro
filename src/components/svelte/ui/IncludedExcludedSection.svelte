<script lang="ts">
  import { BACKGROUND_IMAGES, ICON_IMAGES } from '../../../constants/imageConstants';

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
            class:bg-[#6845f1]={activeTab === tab.id}
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
    <div class="max-w-full mx-auto mt-5">
      {#each tabs as tab}
        {#if activeTab === tab.id}
          <div
            class="bg-white rounded-xl border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <!-- Red Ribbon Corner -->
            <div class="absolute top-0 left-0 md:w-16 md:h-16 z-10 w-12 h-12">
              <img src={BACKGROUND_IMAGES.RED_RIBBON} alt="Red Ribbon" class="w-full h-full object-cover" />
            </div>
            <!-- Content with padding to avoid ribbon -->
            <div class="pt-12 pb-8 px-8 md:pt-8 md:pl-20 md:pr-8">
              {#if tab.title}
                <!-- Simple title for included/excluded -->
                <h3 class="text-2xl font-semibold text-primary mb-6">{tab.title}</h3>
                <div class="grid md:grid-cols-2 gap-6">
                  {#each tab.items as item}
                    <div class="flex items-center gap-3">
                     <img alt="omsymbol" class="w-10 h-10" src={ICON_IMAGES.OM_SYMBOL}  />
                      <p class="text-gray-700 z-10">{item}</p>
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
                          <div class="flex items-center gap-3">
                           <img alt="omsymbol" class="w-10 h-10" src={ICON_IMAGES.OM_SYMBOL}  />

                            <p class="text-gray-700">{item}</p>
                          </div>
                        {/each}
                      </div>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
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
