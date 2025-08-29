<script lang="ts">
	import { CONTACT_INFO } from '../../constants/contactConstants';

	// Combined all links into one comprehensive list
	const allLinks = [
		{ label: 'Hatha Yoga Ashram', href: '/' },
		{ label: 'Hatha Yoga Ashram Rishikesh', href: '/' },
		{ label: '100 Hour Yoga Teacher Training in Rishikesh', href: '/courses/100-hour' },
		{
			label: '200 Hour Yoga Teacher Training in Rishikesh',
			href: '/courses/200-hour-yoga-teacher-training'
		},
		{ label: '300 Hour Yoga Teacher Training in Rishikesh', href: '/courses/300-hour' },
		{ label: '500 Hour Yoga Teacher Training in Rishikesh', href: '/courses/500-hour' },
		{ label: 'Yoga in Rishikesh', href: '/' },
		{ label: 'Best Yoga School in Rishikesh', href: '/' },
		{ label: 'Yoga Course in Rishikesh', href: '/' },
		{ label: 'Yoga school in India', href: '/' },
		{ label: 'Aerial Yoga TTC', href: '/courses/aerial' },
		{ label: 'Yoga Teacher Training in India', href: '/' },
		{ label: 'Yoga TTC in India', href: '/' },
		{ label: 'Online Yoga Teacher Training', href: '/online/courses' },
		{ label: 'Online Yoga Teacher Training Course', href: '/online/courses' },
		{ label: 'Online Yoga Course', href: '/online/courses' },
		{ label: '200 Hour Online Yoga Teacher Training Course', href: '/online/200-hour' },
		{ label: '300 Hour Online Yoga Teacher Training Course', href: '/online/300-hour' },
		{ label: 'Yin Yoga Online', href: '/online/yin' },
		{ label: 'Yin Yoga Online Yoga Teacher Training Course', href: '/online/yin' },
		{ label: 'Yoga Nidra Online', href: '/online/yoga-nidra' },
		{ label: 'Yoga Nidra Online Yoga Teacher Training Course', href: '/online/yoga-nidra' }
	];
</script>

<footer class="bg-gray-900 py-16 text-white" style="background-image: url('img/footer-leaf.png');">
	<div class="container mx-auto px-4">
		<div class="grid grid-cols-1 gap-12 lg:grid-cols-4">
			<!-- Company Info -->
			<div class="text-center lg:text-left">
				<img
					src="/hya.jpg"
					alt="Best Yoga School in Rishikesh"
					class="mx-auto mb-6 block h-16 rounded-full lg:mx-0"
				/>
				<p class="leading-relaxed text-gray-300">
					Hatha Yoga Ashram is one of the best yoga school in Rishikesh India. Our school exists to
					bring the authentic teachings of yoga back to yoga; both on and off the mat.
				</p>
			</div>

			<!-- Quick Links -->
			<div class="text-center lg:text-left">
				<div class="footer-section">
					<h3 class="common-heading mb-6 text-xl font-semibold text-white">
						Quick Links
						<div class="heading-ornament mx-auto mt-2 h-0.5 w-12 bg-orange-400 lg:mx-0"></div>
					</h3>
					<ul class="space-y-3">
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/" class="text-gray-300 transition-colors hover:text-orange-400">Home</a>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/our-founder" class="text-gray-300 transition-colors hover:text-orange-400"
								>About Us</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/our-team" class="text-gray-300 transition-colors hover:text-orange-400"
								>Our Team</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/blog" class="text-gray-300 transition-colors hover:text-orange-400">Blog</a>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/gallery" class="text-gray-300 transition-colors hover:text-orange-400"
								>Gallery</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a href="/contact" class="text-gray-300 transition-colors hover:text-orange-400"
								>Contact Us</a
							>
						</li>
					</ul>
				</div>
			</div>

			<!-- Course Links -->
			<div class="text-center lg:text-left">
				<div class="footer-section">
					<h3 class="common-heading mb-6 text-xl font-semibold text-white">
						Course Links
						<div class="heading-ornament mx-auto mt-2 h-0.5 w-12 bg-orange-400 lg:mx-0"></div>
					</h3>
					<ul class="space-y-3">
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/courses/100-hour"
								class="text-gray-300 transition-colors hover:text-orange-400">100 Hour YTTC</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/courses/200-hour-yoga-teacher-training"
								class="text-gray-300 transition-colors hover:text-orange-400">200 Hour YTTC</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/courses/kundalini"
								class="text-gray-300 transition-colors hover:text-orange-400"
								>200 Hour Kundalini YTTC</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/courses/300-hour"
								class="text-gray-300 transition-colors hover:text-orange-400">300 Hour YTTC</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/courses/retreat"
								class="text-gray-300 transition-colors hover:text-orange-400">Yoga Retreats</a
							>
						</li>
						<li class="flex items-center justify-center lg:justify-start">
							<span class="mr-3 text-sm text-orange-400">ॐ</span>
							<a
								href="/online/courses"
								class="text-gray-300 transition-colors hover:text-orange-400">Online Course</a
							>
						</li>
					</ul>
				</div>
			</div>

			<!-- Contact Info -->
			<div class="text-center lg:text-left">
				<div class="footer-section">
					<h3 class="common-heading mb-6 text-xl font-semibold text-white">
						Contact Us
						<div class="heading-ornament mx-auto mt-2 h-0.5 w-12 bg-orange-400 lg:mx-0"></div>
					</h3>
					<ul class="mx-auto max-w-sm space-y-4 lg:mx-0 lg:max-w-none">
						{#each CONTACT_INFO.ADDRESSES as address}
							<li class="flex items-start justify-start text-left">
								<i class="{address.icon} mt-1 mr-3 flex-shrink-0 text-orange-400"></i>
								<span class="text-gray-300">{address.address}</span>
							</li>
						{/each}
						<li class="flex items-start justify-start text-left">
							<i class="{CONTACT_INFO.PHONE.icon} mt-1 mr-3 flex-shrink-0 text-orange-400"></i>
							<div class="text-gray-300">
								<a href={CONTACT_INFO.PHONE.href} class="transition-colors hover:text-orange-400">
									{CONTACT_INFO.PHONE.display}
								</a>
								<span class="block text-sm">{CONTACT_INFO.PHONE.note}</span>
							</div>
						</li>
						<li class="flex items-start justify-start text-left">
							<i class="{CONTACT_INFO.EMAIL.icon} mt-1 mr-3 flex-shrink-0 text-orange-400"></i>
							<a
								href={CONTACT_INFO.EMAIL.href}
								class="break-all text-gray-300 transition-colors hover:text-orange-400"
							>
								{CONTACT_INFO.EMAIL.address}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Bottom Quick Links Section -->
		<div class="mt-16 border-t border-gray-700 pt-8">
			<div class="bottom-quick-links-wrap">
				<h3 class="common-heading mb-6 text-center text-xl font-semibold text-white">
					Quick Links
					<div class="heading-ornament mx-auto mt-2 h-0.5 w-12 bg-orange-400"></div>
				</h3>
				<div class="bottom-link-collection flex flex-wrap items-center justify-center gap-2">
					{#each allLinks as link, index}
						<a
							href={link.href}
							class="inline-block rounded-full border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-orange-400 hover:bg-orange-500 hover:text-white"
						>
							{link.label}
						</a>
						{#if index < allLinks.length - 1}
							<span class="hidden text-gray-600 sm:inline"> </span>
						{/if}
					{/each}
				</div>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div
			class="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row"
		>
			<div class="flex space-x-4">
				{#each CONTACT_INFO.SOCIAL_MEDIA as social}
					<a
						href={social.url}
						target="_blank"
						class="text-gray-300 transition-colors hover:text-orange-400"
						aria-label={social.label}
					>
						<i class="{social.icon} text-xl"></i>
					</a>
				{/each}
			</div>
		</div>
	</div>
</footer>
