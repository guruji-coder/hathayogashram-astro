<script lang="ts">
	export let isOpen: boolean = false;
	export let onToggle: () => void;
</script>

<button
	class="rounded-md p-2 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none lg:hidden"
	aria-label="Toggle mobile menu"
	aria-expanded={isOpen}
	on:click={onToggle}
>
	<!-- Hamburger/X Animation -->
	<div class="space-y-1">
		<div
			class="h-0.5 w-6 bg-gray-700 transition-all duration-300 {isOpen
				? 'translate-y-1.5 rotate-45'
				: ''}"
		></div>
		<div
			class="h-0.5 w-6 bg-gray-700 transition-all duration-300 {isOpen ? 'opacity-0' : ''}"
		></div>
		<div
			class="h-0.5 w-6 bg-gray-700 transition-all duration-300 {isOpen
				? '-translate-y-1.5 -rotate-45'
				: ''}"
		></div>
	</div>
</button>
