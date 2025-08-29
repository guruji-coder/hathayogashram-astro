<script lang="ts">
	// Certificate data
	const certificates = [
		{
			image: '/yoga-alliance-yttc-certificate.webp',
			title: 'RYS 200 Yoga Alliance Certificate',
			label: 'RYS 200'
		},
		{
			image: '/yoga-alliance-yttc-certificate.webp',
			title: 'RYS 300 Yoga Alliance Certificate',
			label: 'RYS 300'
		},
		{
			image: '/yoga-alliance-yttc-certificate.webp',
			title: 'RPYS Yoga Alliance Certificate',
			label: 'RPYS'
		},
		{
			image: '/yoga-alliance-yttc-certificate.webp',
			title: 'YACEP Yoga Alliance Certificate',
			label: 'YACEP'
		}
	];

	// Modal state
	let showModal = false;
	let modalImage = '';
	let modalTitle = '';

	function openModal(imageSrc: string, title: string) {
		modalImage = imageSrc;
		modalTitle = title;
		showModal = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		showModal = false;
		document.body.style.overflow = 'auto';
	}

	// Auto-scroll every 5 seconds
	let scrollContainer: HTMLElement;
	setInterval(() => {
		if (scrollContainer && window.innerWidth < 1024) {
			scrollContainer.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
			if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - window.innerWidth) {
				scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
			}
		}
	}, 5000);
</script>

<!-- Certificate Carousel -->
<div class="mx-auto max-w-6xl">
	<!-- Mobile: Full-screen carousel -->
	<div class="md:hidden">
		<div
			bind:this={scrollContainer}
			class="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
		>
			{#each certificates as cert}
				<div
					class="relative flex h-full w-full flex-shrink-0 cursor-pointer snap-start items-center justify-center bg-gray-100"
					on:click={() => openModal(cert.image, cert.title)}
					on:keydown={e => e.key === 'Enter' && openModal(cert.image, cert.title)}
					role="button"
					tabindex="0"
				>
					<img
						src={cert.image}
						alt={cert.title}
						class="h-full w-full rounded-lg object-contain shadow-lg"
					/>
					<div class="absolute right-4 bottom-6 left-4">
						<div class="bg-opacity-70 rounded-lg bg-black px-4 py-3 backdrop-blur-sm">
							<h3 class="text-center text-xl font-bold text-white">{cert.label}</h3>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Desktop: Grid -->
	<div class="hidden grid-cols-4 gap-6 md:grid">
		{#each certificates as cert}
			<button
				class="group transform overflow-hidden rounded-lg transition-transform hover:scale-105 focus:scale-105"
				on:click={() => openModal(cert.image, cert.title)}
			>
				<img src={cert.image} alt={cert.title} class="h-full w-full object-cover" />
				<p class="mt-2 text-center text-sm font-medium text-white">{cert.label}</p>
			</button>
		{/each}
	</div>
</div>

<!-- Modal -->
{#if showModal}
	<div
		class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
		on:click={closeModal}
		on:keydown={e => e.key === 'Escape' && closeModal()}
		role="dialog"
		tabindex="0"
	>
		<div class="relative max-h-full max-w-4xl" on:click|stopPropagation role="none">
			<button
				class="absolute -top-10 right-0 text-3xl text-white hover:text-gray-300"
				on:click={closeModal}>×</button
			>
			<img
				src={modalImage}
				alt={modalTitle}
				class="max-h-[90vh] max-w-full rounded-lg object-contain"
			/>
		</div>
	</div>
{/if}

<style>
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
</style>
