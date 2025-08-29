<script lang="ts">
	import {
		HEADER_DROPDOWN_WIDTHS,
		HEADER_STYLES,
		type MenuItem
	} from '../../constants/headerConstants';

	export let item: MenuItem;
	export let onLinkClick: () => void = () => {};

	function getDropdownWidth(label: string): string {
		return HEADER_DROPDOWN_WIDTHS[label as keyof typeof HEADER_DROPDOWN_WIDTHS] || 'w-64';
	}
</script>

<div class="group relative">
	<button
		class="{HEADER_STYLES.NAV_LINK_COLORS} flex items-center"
		aria-label="{item.label} menu"
		aria-expanded="false"
	>
		{item.label}
		<i
			class="fas fa-chevron-down ml-1 text-xs transition-transform group-hover:rotate-180"
			aria-hidden="true"
		></i>
	</button>

	<!-- Dropdown Menu -->
	<div
		class="invisible absolute left-0 z-50 mt-2 {getDropdownWidth(
			item.label
		)} ring-opacity-5 ring-orange rounded-md bg-white opacity-0 shadow-lg ring-1 transition-all duration-300 group-hover:visible group-hover:opacity-100"
	>
		<div class="py-2">
			{#each item.items || [] as subItem}
				<a
					href={subItem.href}
					class="block px-4 py-2 text-gray-700 transition-colors hover:bg-orange-50 hover:text-orange-500 focus:bg-orange-50 focus:text-orange-500 focus:outline-none"
					on:click={onLinkClick}
				>
					{subItem.label}
				</a>
			{/each}
		</div>
	</div>
</div>
