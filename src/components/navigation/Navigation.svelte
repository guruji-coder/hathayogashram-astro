<script lang="ts">
	import { HEADER_STYLES } from '../../constants/headerConstants';
	import TopBar from './TopBar.svelte';
	import Logo from './Logo.svelte';
	import DesktopNavigation from './DesktopNavigation.svelte';
	import MobileMenuButton from './MobileMenuButton.svelte';
	import MobileMenu from './MobileMenu.svelte';

	// Simple state - only hamburger menu open/closed
	let mobileMenuOpen = false;

	/**
	 * Toggle hamburger mobile menu open/closed state
	 */
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	/**
	 * Handle link clicks - closes mobile menu
	 */
	function handleLinkClick() {
		mobileMenuOpen = false;
	}

	/**
	 * Handle escape key to close mobile menu
	 */
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			mobileMenuOpen = false;
		}
	}

	/**
	 * Handle clicks outside mobile menu to close it
	 */
	function handleClickOutside(event: MouseEvent) {
		if (!mobileMenuOpen) return;

		const target = event.target as Element;
		const mobileMenu = document.querySelector(
			'[role="dialog"][aria-label="Mobile navigation menu"]'
		);
		const mobileMenuButton = document.querySelector('[aria-label="Toggle mobile menu"]');

		if (
			mobileMenu &&
			mobileMenuButton &&
			!mobileMenu.contains(target) &&
			!mobileMenuButton.contains(target)
		) {
			mobileMenuOpen = false;
		}
	}
</script>

<!-- Global keyboard and click event listeners -->
<svelte:window on:keydown={handleKeydown} on:click={handleClickOutside} />

<header class={HEADER_STYLES.HEADER_BACKGROUND}>
	<!-- Top contact/social bar -->
	<TopBar />

	<!-- Main navigation -->
	<nav class={HEADER_STYLES.NAV_CONTAINER}>
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<Logo onLogoClick={handleLinkClick} />

			<!-- Desktop Navigation -->
			<DesktopNavigation onLinkClick={handleLinkClick} />

			<!-- Mobile Menu Button -->
			<MobileMenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
		</div>

		<!-- Mobile Menu -->
		<MobileMenu isOpen={mobileMenuOpen} onLinkClick={handleLinkClick} />
	</nav>
</header>
