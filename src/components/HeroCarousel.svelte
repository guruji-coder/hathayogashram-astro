<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { carouselSlides } from '../constants/carousel';

	let currentSlide = 0;
	let interval: ReturnType<typeof setInterval>;
	let isAutoPlaying = true;
	let isTransitioning = false;

	const autoPlayInterval = 2500; // 5 seconds

	// Auto-play functionality
	function startAutoPlay() {
		if (interval) clearInterval(interval);
		interval = setInterval(() => {
			if (isAutoPlaying && !isTransitioning) {
				nextSlide();
			}
		}, autoPlayInterval);
	}

	function stopAutoPlay() {
		if (interval) clearInterval(interval);
		isAutoPlaying = false;
	}

	function resumeAutoPlay() {
		isAutoPlaying = true;
		startAutoPlay();
	}

	// Navigation functions
	function nextSlide() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentSlide = (currentSlide + 1) % carouselSlides.length;
		setTimeout(() => {
			isTransitioning = false;
		}, 500);
	}

	function prevSlide() {
		if (isTransitioning) return;
		isTransitioning = true;
		currentSlide = currentSlide === 0 ? carouselSlides.length - 1 : currentSlide - 1;
		setTimeout(() => {
			isTransitioning = false;
		}, 500);
	}

	// Lifecycle
	onMount(() => {
		startAutoPlay();
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});

	$: currentSlideData = carouselSlides[currentSlide];
</script>

<section
	class="relative h-screen w-full overflow-hidden"
	on:mouseenter={stopAutoPlay}
	on:mouseleave={resumeAutoPlay}
	role="banner"
	aria-label="Hero carousel"
>
	<!-- Background Images -->
	{#each carouselSlides as slide, index}
		<div
			class="carousel-slide {index === currentSlide ? 'active' : 'inactive'}"
			style="background-image: url('{slide.image}');"
			aria-hidden={index !== currentSlide}
		></div>
	{/each}

	<!-- Dark overlay for better text readability -->
	<!-- <div class="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm"></div> -->

	<!-- Content Overlay -->
	<div class="relative z-10 flex h-full items-center justify-center">
		<div class="container mx-auto px-4 text-center text-white">
			<!-- Slide Content -->
			<div class="mx-auto max-w-4xl">
				<!-- Subtitle -->
				<h5
					class="mb-4 font-quicksand text-xl font-extrabold tracking-wide text-white transition-all duration-500"
				>
					{currentSlideData.title}
				</h5>

				<!-- Main Title -->
				<h1 class="mb-6 font-kaushan text-6xl leading-tight font-bold transition-all duration-500">
					{currentSlideData.subtitle}
				</h1>

				<!-- Action Buttons -->
				<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<!-- Primary Button -->
					<a
						href={currentSlideData.primaryButton.href}
						class="inline-block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-orange-700 hover:shadow-xl focus:ring-4 focus:ring-orange-500/50 focus:outline-none"
						aria-label={currentSlideData.primaryButton.text}
					>
						{currentSlideData.primaryButton.text}
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Navigation Arrows -->
	<button
		class="absolute top-1/2 left-4 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none md:left-8"
		on:click={prevSlide}
		aria-label="Previous slide"
	>
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		class="absolute top-1/2 right-4 z-20 flex -translate-y-1/2 cursor-pointer items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none md:right-8"
		on:click={nextSlide}
		aria-label="Next slide"
	>
		<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>
</section>

<style>
	/* Carousel slide base styles */
	.carousel-slide {
		position: absolute;
		inset: 0;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transition:
			opacity 1000ms ease-in-out 200ms,
			/* Opacity transition with 200ms delay */ transform 2000ms ease-in-out; /* Much slower scale transition - 4 seconds */
		transform: scale(1);
	}

	/* Add dark overlay with 52% opacity using pseudo-element */
	.carousel-slide::before {
		content: '';
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.52);
		z-index: 1;
	}

	/* Active slide - slowly scale first, then fade in */
	.carousel-slide.active {
		opacity: 1;
		transform: scale(1.5);
	}

	/* Inactive slide - scale down first, then fade out */
	.carousel-slide.inactive {
		opacity: 0;
		transform: scale(1);
	}

	/* Custom animations for smooth transitions */
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.container > div {
		animation: fadeIn 0.6s ease-out;
	}

	/* Ensure smooth transitions */
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
