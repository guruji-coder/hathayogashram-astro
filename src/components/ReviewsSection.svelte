<script lang="ts">
	import { REVIEWS_SECTION, REVIEWS_STYLES } from '../constants/reviewsConstants';

	// Function to generate star rating
	function generateStars(rating: number): string[] {
		return Array(5)
			.fill('')
			.map((_, index) => (index < rating ? 'fas fa-star' : 'far fa-star'));
	}

	// Simple auto-scroll for mobile, tablet, and desktop
	let scrollContainer: HTMLElement;
	setInterval(() => {
		if (scrollContainer) {
			const cardWidth =
				window.innerWidth < 768
					? window.innerWidth
					: window.innerWidth < 1024
						? window.innerWidth / 2
						: window.innerWidth / 3;
			scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
			if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
				scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
			}
		}
	}, 3000);
</script>

<!-- Reviews Section -->
<section class="from-purple-50 to-white px-4 py-16">
	<div class={REVIEWS_STYLES.CONTAINER}>
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class={REVIEWS_STYLES.TITLE}>
				{REVIEWS_SECTION.TITLE}
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

		<!-- Reviews - Horizontal scroll: 1 for mobile, 2 for tablet, 3 for desktop -->
		<div
			bind:this={scrollContainer}
			class="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pt-12 pb-4"
		>
			{#each REVIEWS_SECTION.REVIEWS as review (review.id)}
				<div
					class="relative w-[calc(100%-12px)] flex-shrink-0 transform snap-start rounded-3xl border-2 border-orange-300 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
				>
					<!-- Reviewer Profile Image -->
					<div class="-mt-12 mb-6 flex justify-center">
						<div
							class="h-24 w-24 overflow-hidden rounded-full border-1 border-orange-300 bg-white p-1"
						>
							<img
								src={review.image}
								alt={review.name}
								class="h-full w-full rounded-full object-cover"
								loading="lazy"
							/>
						</div>
					</div>

					<!-- Reviewer Name -->
					<div class="mb-4 text-center">
						<h3 class="mb-2 text-xl font-bold text-gray-800">
							{review.name}
						</h3>

						<!-- Star Rating -->
						<div class="mb-4 flex items-center justify-center">
							{#each generateStars(review.rating) as starClass, index (index)}
								<i class="{starClass} mr-1 text-lg text-orange-400"></i>
							{/each}
						</div>
					</div>

					<!-- Review Text -->
					<p class="mb-6 text-center leading-relaxed text-gray-700">
						{review.text.length > 80 ? review.text.substring(0, 80) + '...' : review.text}
					</p>

					<!-- Course and Country Info -->
					<div class="text-center text-sm text-gray-500">
						{review.course} • {review.country}
					</div>
				</div>
			{/each}
		</div>

		<!-- View All Reviews Button -->
		<div class="text-center">
			<a
				href={REVIEWS_SECTION.VIEW_ALL_URL}
				target="_blank"
				rel="noopener noreferrer"
				class={REVIEWS_STYLES.VIEW_ALL_BUTTON}
			>
				{REVIEWS_SECTION.VIEW_ALL_BUTTON}
				<i class="fas fa-external-link-alt ml-2"></i>
			</a>
		</div>
	</div>
</section>
