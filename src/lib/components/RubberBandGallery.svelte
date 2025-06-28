<script lang="ts">
	import { onMount } from 'svelte';
	import ClickableImage from './ClickableImage.svelte';

	export let images: any[];

	let galleryContainer: HTMLDivElement;
	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;
	let velocity = 0;
	let lastX = 0;
	let lastTime = 0;
	let animationId: number;
	let hasMoved = false;
	let isMobile = false;

	// Rubber band constants
	const RUBBER_BAND_RESISTANCE = 0.5;
	const BOUNCE_BACK_DURATION = 400;
	const MOMENTUM_DECAY = 0.95;
	const MIN_VELOCITY = 0.1;

	onMount(() => {
		if (!galleryContainer) return;

		// Detect if mobile
		isMobile = 'ontouchstart' in window;

		if (!isMobile) {
			// Only add custom scrolling for desktop
			galleryContainer.addEventListener('mousedown', handleStart);
			galleryContainer.addEventListener('mousemove', handleMove);
			galleryContainer.addEventListener('mouseup', handleEnd);
			galleryContainer.addEventListener('mouseleave', handleEnd);
		}

		return () => {
			if (galleryContainer && !isMobile) {
				galleryContainer.removeEventListener('mousedown', handleStart);
				galleryContainer.removeEventListener('mousemove', handleMove);
				galleryContainer.removeEventListener('mouseup', handleEnd);
				galleryContainer.removeEventListener('mouseleave', handleEnd);
			}
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});

	function getClientX(event: TouchEvent | MouseEvent): number {
		return 'touches' in event ? event.touches[0]?.clientX || 0 : event.clientX;
	}

	function handleStart(event: TouchEvent | MouseEvent) {
		if (!galleryContainer || isMobile) return;

		isDragging = true;
		hasMoved = false;
		startX = getClientX(event);
		lastX = startX;
		lastTime = Date.now();
		scrollLeft = galleryContainer.scrollLeft;
		velocity = 0;

		// Stop any ongoing animation
		if (animationId) {
			cancelAnimationFrame(animationId);
		}

		galleryContainer.style.cursor = 'grabbing';
	}

	function handleMove(event: TouchEvent | MouseEvent) {
		if (!isDragging || !galleryContainer || isMobile) return;

		const currentX = getClientX(event);
		const moveDistance = Math.abs(currentX - startX);

		// Only start dragging if moved more than 5px
		if (moveDistance > 5) {
			hasMoved = true;
			event.preventDefault();
		}

		if (!hasMoved) return;

		const currentTime = Date.now();
		const deltaX = currentX - lastX;
		const deltaTime = currentTime - lastTime;

		// Calculate velocity for momentum
		if (deltaTime > 0) {
			velocity = deltaX / deltaTime;
		}

		const walkX = startX - currentX;
		let newScrollLeft = scrollLeft + walkX;

		// Get container bounds for rubber band effect
		const maxScrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;

		// Apply rubber band resistance when overscrolling
		if (newScrollLeft < 0) {
			// Overscrolling to the left
			newScrollLeft = newScrollLeft * RUBBER_BAND_RESISTANCE;
		} else if (newScrollLeft > maxScrollLeft) {
			// Overscrolling to the right
			const overscroll = newScrollLeft - maxScrollLeft;
			newScrollLeft = maxScrollLeft + overscroll * RUBBER_BAND_RESISTANCE;
		}

		galleryContainer.scrollLeft = newScrollLeft;

		lastX = currentX;
		lastTime = currentTime;
	}

	function handleEnd() {
		if (!isDragging || !galleryContainer || isMobile) return;

		isDragging = false;
		galleryContainer.style.cursor = 'grab';

		const maxScrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
		const currentScrollLeft = galleryContainer.scrollLeft;

		// Check if we need to bounce back from overscroll
		if (currentScrollLeft < 0 || currentScrollLeft > maxScrollLeft) {
			bounceBack();
		} else if (Math.abs(velocity) > MIN_VELOCITY) {
			// Apply momentum scrolling
			applyMomentum();
		}
	}

	function bounceBack() {
		if (!galleryContainer) return;

		const maxScrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
		const currentScrollLeft = galleryContainer.scrollLeft;

		let targetScrollLeft: number;

		if (currentScrollLeft < 0) {
			targetScrollLeft = 0;
		} else if (currentScrollLeft > maxScrollLeft) {
			targetScrollLeft = maxScrollLeft;
		} else {
			return; // No bounce needed
		}

		const startScrollLeft = currentScrollLeft;
		const distance = targetScrollLeft - startScrollLeft;
		const startTime = Date.now();

		function animate() {
			if (!galleryContainer) return;

			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / BOUNCE_BACK_DURATION, 1);

			// Easing function for bounce effect with overshoot
			const easeOut =
				progress < 0.5
					? 4 * progress * progress * progress
					: 1 - Math.pow(-2 * progress + 2, 3) / 2;

			galleryContainer.scrollLeft = startScrollLeft + distance * easeOut;

			if (progress < 1) {
				animationId = requestAnimationFrame(animate);
			}
		}

		animate();
	}

	function applyMomentum() {
		if (!galleryContainer) return;

		let currentVelocity = velocity * 20; // Scale velocity for better feel

		function animate() {
			if (!galleryContainer || Math.abs(currentVelocity) < MIN_VELOCITY) return;

			const maxScrollLeft = galleryContainer.scrollWidth - galleryContainer.clientWidth;
			let newScrollLeft = galleryContainer.scrollLeft - currentVelocity;

			// Apply rubber band resistance during momentum
			if (newScrollLeft < 0) {
				newScrollLeft = newScrollLeft * RUBBER_BAND_RESISTANCE;
				currentVelocity *= 0.6; // Reduce velocity when hitting boundary
			} else if (newScrollLeft > maxScrollLeft) {
				const overscroll = newScrollLeft - maxScrollLeft;
				newScrollLeft = maxScrollLeft + overscroll * RUBBER_BAND_RESISTANCE;
				currentVelocity *= 0.6;
			}

			galleryContainer.scrollLeft = newScrollLeft;
			currentVelocity *= MOMENTUM_DECAY;

			// Check if we need to bounce back
			if (galleryContainer.scrollLeft < 0 || galleryContainer.scrollLeft > maxScrollLeft) {
				bounceBack();
				return;
			}

			animationId = requestAnimationFrame(animate);
		}

		animate();
	}
</script>

<div class="gallery-container-wrapper relative">
	<!-- Gallery container -->
	<div
		bind:this={galleryContainer}
		class="scrollbar-hide flex gap-4 overflow-x-auto pb-4 select-none {isMobile
			? ''
			: 'cursor-grab'}"
		style="scroll-behavior: auto;"
	>
		{#each images as image, i}
			<div class="flex-shrink-0 snap-start rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
				<ClickableImage
					src={image}
					alt="Gallery image {i + 1}"
					className="h-64 w-64 sm:w-80 object-cover rounded-lg"
				/>
			</div>
		{/each}
	</div>
</div>

<style>
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}

	.gallery-container-wrapper::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 16px; /* Account for pb-4 */
		width: 40px;
		background: linear-gradient(90deg, transparent 0%, rgba(232, 222, 201, 0.8) 100%);
		pointer-events: none;
		z-index: 10;
	}

	.gallery-container-wrapper::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 16px; /* Account for pb-4 */
		width: 40px;
		background: linear-gradient(90deg, rgba(232, 222, 201, 0.8) 0%, transparent 100%);
		pointer-events: none;
		z-index: 10;
	}

	.cursor-grab {
		cursor: grab;
	}

	.cursor-grab:active {
		cursor: grabbing;
	}
</style>
