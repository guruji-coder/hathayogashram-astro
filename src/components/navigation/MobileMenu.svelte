<script lang="ts">
	import {
		HEADER_NAVIGATION_ITEMS,
		HEADER_CTA_BUTTON,
		HEADER_STYLES
	} from '../../constants/headerConstants';
	import MobileDropdown from './MobileDropdown.svelte';

	export let isOpen: boolean = false;
	export let onLinkClick: () => void;

	// Local state for which submenu is currently open
	let activeSubmenu = '';

	// Reset submenu when mobile menu closes
	$: if (!isOpen) {
		activeSubmenu = '';
	}

	function toggleSubmenu(menuLabel: string) {
		activeSubmenu = activeSubmenu === menuLabel ? '' : menuLabel;
	}
</script>

{#if isOpen}
	<div
		class={HEADER_STYLES.MOBILE_MENU_BACKGROUND}
		role="dialog"
		aria-modal="false"
		aria-label="Mobile navigation menu"
	>
		<!-- Mobile Menu Content -->
		<div class={HEADER_STYLES.MOBILE_MENU_CONTENT}>
			{#each HEADER_NAVIGATION_ITEMS as item}
				{#if item.items}
					<!-- Dropdown Menu Item -->
					<MobileDropdown
						{item}
						isOpen={activeSubmenu === item.label}
						onToggle={toggleSubmenu}
						{onLinkClick}
					/>
				{:else}
					<!-- Regular Menu Item -->
					<div class="border-b border-gray-200 py-4">
						<a
							href={item.href}
							class="block text-lg font-medium text-gray-800 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none"
							on:click={onLinkClick}
						>
							{item.label}
						</a>
					</div>
				{/if}
			{/each}

			<!-- Call-to-Action Button -->
			<div class="py-6">
				<a
					href={HEADER_CTA_BUTTON.URL}
					class={HEADER_CTA_BUTTON.MOBILE_CLASSES}
					on:click={onLinkClick}
				>
					{HEADER_CTA_BUTTON.TEXT}
				</a>
			</div>
		</div>
	</div>
{/if}
