<script lang="ts">
	import { HEADER_BRANDING } from '../../constants/headerConstants';

	export let onLogoClick: () => void = () => {};
	export let isMobile: boolean = false;
</script>

<a
	href="/"
	class="flex items-center rounded-md focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
	on:click={onLogoClick}
>
	<img
		src={HEADER_BRANDING.LOGO_IMAGE_PATH}
		alt={HEADER_BRANDING.LOGO_ALT_TEXT}
		class="{isMobile
			? HEADER_BRANDING.LOGO_HEIGHT_MOBILE
			: HEADER_BRANDING.LOGO_HEIGHT_DESKTOP} w-auto"
	/>
</a>
