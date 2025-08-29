<script lang="ts">
	import AppleCardsCarousel from './ui/AppleCardsCarousel.svelte';

	interface Card {
		title: string;
		src: string;
		content: string;
	}

	export let title: string = 'Experience Our Yoga Journey';
	export let subtitle: string =
		'Discover the transformative power of yoga through our comprehensive programs';
	export let cards: Card[] = [];
	export let backgroundColor: string = 'bg-white';
</script>

<section class="py-16 {backgroundColor}">
	<div class="container mx-auto px-4">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-3xl font-bold text-purple-900 md:text-4xl">
				{title}
			</h2>

			<p class="mx-auto max-w-3xl text-lg text-gray-700">
				{subtitle}
			</p>
		</div>

		<!-- Apple Cards Carousel -->
		<AppleCardsCarousel {cards} />
	</div>
</section>
