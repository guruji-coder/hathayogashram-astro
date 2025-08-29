<script lang="ts">
	import { type MenuItem } from '../../constants/headerConstants';

	export let item: MenuItem;
	export let isOpen: boolean = false;
	export let onToggle: (label: string) => void;
	export let onLinkClick: () => void = () => {};

	// Toggle function
	function handleToggle() {
		onToggle(item.label);
	}
</script>

<div class="border-b border-gray-200 py-4">
	<!-- Dropdown Header Button -->
	<button
		class="flex w-full items-center justify-between text-lg font-medium text-gray-800 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none"
		on:click={handleToggle}
		aria-expanded={isOpen}
		aria-controls="{item.label.replace(/\s+/g, '-')}-submenu"
	>
		{item.label}
		<!-- Only show chevron if there are items -->
		{#if item.items && item.items.length > 0}
			<i
				class="fas fa-chevron-down ml-2 transition-transform duration-200 {isOpen
					? 'rotate-180'
					: ''}"
				aria-hidden="true"
			></i>
		{/if}
	</button>

	<!-- Dropdown Content - Clean styling like the image -->
	{#if isOpen && item.items && item.items.length > 0}
		<div class="mt-4 space-y-2 pl-4">
			{#each item.items as subItem}
				<a
					href={subItem.href}
					class="block py-2 text-base font-normal text-gray-700 transition-colors hover:text-orange-500 focus:text-orange-500 focus:outline-none"
					on:click={onLinkClick}
				>
					{subItem.label}
				</a>
			{/each}
		</div>
	{/if}
</div>
