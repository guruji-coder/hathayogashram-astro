<script lang="ts">
	import {
		HEADER_NAVIGATION_ITEMS,
		HEADER_CTA_BUTTON,
		HEADER_STYLES
	} from '../../constants/headerConstants';
	import DesktopDropdown from './DesktopDropdown.svelte';

	export let onLinkClick: () => void = () => {};
</script>

<div class={HEADER_STYLES.NAV_DESKTOP_SPACING}>
	{#each HEADER_NAVIGATION_ITEMS as item}
		{#if item.items}
			<!-- Dropdown Menu -->
			<DesktopDropdown {item} {onLinkClick} />
		{:else}
			<!-- Regular Menu Item -->
			<a href={item.href} class={HEADER_STYLES.NAV_LINK_COLORS} on:click={onLinkClick}>
				{item.label}
			</a>
		{/if}
	{/each}

	<!-- Call-to-Action Button -->
	<a href={HEADER_CTA_BUTTON.URL} class={HEADER_CTA_BUTTON.DESKTOP_CLASSES} on:click={onLinkClick}>
		{HEADER_CTA_BUTTON.TEXT}
	</a>
</div>
