<script lang="ts">
	import { FAQ_SECTION, FAQ_STYLES } from '../constants/faqConstants';
	import { slide } from 'svelte/transition';

	// Track which FAQ is currently open
	let openFaq: number | null = null;

	function toggleFaq(index: number) {
		openFaq = openFaq === index ? null : index;
	}
</script>

<!-- FAQ Section -->
<section class="{FAQ_STYLES.SECTION_PADDING} bg-gradient-to-b from-purple-50 to-white">
	<div class={FAQ_STYLES.CONTAINER}>
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class={FAQ_STYLES.TITLE}>
				{FAQ_SECTION.TITLE}
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

		<!-- FAQ Items -->
		<div class="mx-auto max-w-4xl space-y-4">
			{#each FAQ_SECTION.FAQS as faq, index (faq.id)}
				<div class={FAQ_STYLES.FAQ_ITEM}>
					<!-- Question Button -->
					<button
						class="{FAQ_STYLES.QUESTION_BUTTON} {openFaq === index
							? FAQ_STYLES.QUESTION_BUTTON_ACTIVE
							: FAQ_STYLES.QUESTION_BUTTON_INACTIVE} flex cursor-pointer justify-between"
						on:click={() => toggleFaq(index)}
						aria-expanded={openFaq === index}
						aria-controls="faq-answer-{index}"
					>
						<div class="flex items-center">
							<!-- Question Icon -->
							<div
								class="{FAQ_STYLES.QUESTION_ICON} {openFaq === index
									? 'text-white'
									: 'text-purple-900'}"
							>
								<i class="fas fa-question"></i>
							</div>

							<!-- Question Text -->
							<span class={FAQ_STYLES.QUESTION_TEXT}>
								{faq.question}
							</span>
						</div>

						<!-- Toggle Icon -->
						<div
							class="{FAQ_STYLES.TOGGLE_ICON} {openFaq === index
								? 'text-white'
								: 'text-purple-900'}"
						>
							<i class="fas {openFaq === index ? 'fa-minus' : 'fa-plus'}"></i>
						</div>
					</button>

					<!-- Answer -->
					{#if openFaq === index}
						<div
							id="faq-answer-{index}"
							class={FAQ_STYLES.ANSWER_CONTAINER}
							transition:slide={{ duration: 300 }}
						>
							<div class={FAQ_STYLES.ANSWER_TEXT}>
								{faq.answer}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<!-- Contact CTA -->
		<div class="mt-16 text-center">
			<p class="mb-6 text-lg text-gray-700">
				{FAQ_SECTION.CTA.SUBTITLE}
			</p>
			<a href={FAQ_SECTION.CTA.LINK} class={FAQ_STYLES.CTA_BUTTON}>
				{FAQ_SECTION.CTA.BUTTON_TEXT}
			</a>
		</div>
	</div>
</section>
