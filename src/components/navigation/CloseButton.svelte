<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let onClick: () => void;
	export let ariaLabel: string;

	const sizeClasses = {
		sm: 'h-6 w-6',
		md: 'h-8 w-8',
		lg: 'h-10 w-10'
	};

	const iconSizes = {
		sm: 'h-3 w-3',
		md: 'h-4 w-4',
		lg: 'h-5 w-5'
	};
</script>

<button
	class="flex {sizeClasses[
		size
	]} items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-gray-200 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
	on:click={onClick}
	aria-label={ariaLabel}
>
	<svg
		class="{iconSizes[size]} text-gray-600"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
</button>
