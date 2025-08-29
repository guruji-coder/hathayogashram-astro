<script lang="ts">
	import { HOME_STYLES, FOUNDER_SECTION } from '../../../constants/homePageConstants';
	import FounderImages from './FounderImages.svelte';
	import FounderInfo from './FounderInfo.svelte';
	import FounderAwards from './FounderAwards.svelte';
</script>

<section class="{HOME_STYLES.SECTION_PADDING} bg-white">
	<div class={HOME_STYLES.CONTAINER}>
		<!-- Section Header -->
		<div class="mb-12 text-center">
			<h2 class="mb-4 text-2xl font-bold text-purple-900 sm:text-3xl lg:text-4xl">
				{FOUNDER_SECTION.TITLE}
			</h2>

			<!-- Decorative Underline SVG -->
			<div class="mb-6 flex justify-center">
				<svg width="200" height="20" viewBox="0 0 200 20" class="text-purple-900">
					<path d="M10 10 Q 100 5 190 10" stroke="currentColor" stroke-width="2" fill="none" />
					<circle cx="100" cy="8" r="8" fill="currentColor" />
					<path d="M92 8 L96 12 L104 4 L108 8" fill="white" stroke="none" />
				</svg>
			</div>
		</div>

		<!-- Main Content Layout -->
		<div class="mx-10 max-w-6xl text-[15px]">
			<p class="">
				{FOUNDER_SECTION.INTRO_TEXT}
			</p>

			<div class="my-10 flex flex-col gap-8 lg:flex-row lg:gap-12">
				<!-- Left Column: Images -->
				<FounderImages />

				<!-- Right Column: Content -->
				<FounderInfo />
			</div>
		</div>

		<!-- Awards & Honours Section -->
		<FounderAwards />
	</div>
</section>
