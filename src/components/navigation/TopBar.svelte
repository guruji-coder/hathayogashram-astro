<script lang="ts">
	import { CONTACT_INFO } from '../../constants/contactConstants';
	import { HEADER_STYLES } from '../../constants/headerConstants';
</script>

<div class={HEADER_STYLES.TOP_BAR_BACKGROUND}>
	<div class="container mx-auto px-4">
		<div class="flex items-center justify-between {HEADER_STYLES.TOP_BAR_TEXT_SIZE}">
			<!-- Contact Information -->
			<div class="flex space-x-3 sm:space-x-4 lg:space-x-6">
				<!-- Address -->
				<span class="hidden items-center text-gray-600 md:flex">
					<i class="{CONTACT_INFO.ADDRESSES[0].icon} mr-2" aria-hidden="true"></i>
					<span class="hidden lg:inline">{CONTACT_INFO.ADDRESSES[0].address}</span>
					<span class="lg:hidden">Rishikesh, India</span>
				</span>

				<!-- Phone/WhatsApp -->
				<a
					href={CONTACT_INFO.PHONE.href}
					class={HEADER_STYLES.TOP_BAR_LINK_COLORS}
					target="_blank"
					rel="noopener noreferrer"
				>
					<i class="{CONTACT_INFO.PHONE.icon} mr-2" aria-hidden="true"></i>
					<span class="hidden md:inline">{CONTACT_INFO.PHONE.display}</span>
					<span class="inline md:hidden"> CALL</span>
				</a>

				<!-- Email -->
				<a href={CONTACT_INFO.EMAIL.href} class={HEADER_STYLES.TOP_BAR_LINK_COLORS}>
					<i class="{CONTACT_INFO.EMAIL.icon} mr-2" aria-hidden="true"></i>
					<span class="hidden md:inline">{CONTACT_INFO.EMAIL.address}</span>
					<span class="inline md:hidden"> EMAIL</span>
				</a>
			</div>

			<!-- Social Media Links -->
			<div class="flex space-x-3 sm:space-x-4">
				{#each CONTACT_INFO.SOCIAL_MEDIA as social}
					<a
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-600 transition-colors hover:text-orange-500"
						aria-label={social.label}
					>
						<i class={social.icon} aria-hidden="true"></i>
					</a>
				{/each}
			</div>
		</div>
	</div>
</div>
