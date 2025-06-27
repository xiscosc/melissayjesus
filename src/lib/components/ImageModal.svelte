<script lang="ts">
	export let src: string | any;
	export let alt: string;
	export let isOpen = false;
	export let onclose: (() => void) | undefined = undefined;

	function closeModal() {
		isOpen = false;
		onclose?.();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}

	// Check if src is an enhanced image object or a string
	$: isEnhanced = typeof src === 'object' && src !== null;
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
		on:click={handleBackdropClick}
		role="dialog"
		aria-modal="true"
		aria-label="Image viewer"
	>
		<!-- Modal content -->
		<div class="relative max-h-[90vh] max-w-[90vw]">
			<!-- Close button -->
			<button
				on:click={closeModal}
				class="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-all duration-200 hover:bg-white/30 focus:ring-2 focus:ring-white/50 focus:outline-none"
				aria-label="Close image"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>

			<!-- Image -->
			{#if isEnhanced}
				<enhanced:img {src} {alt} class="max-h-[90vh] max-w-full rounded-lg object-contain" />
			{:else}
				<img {src} {alt} class="max-h-[90vh] max-w-full rounded-lg object-contain" loading="lazy" />
			{/if}
		</div>
	</div>
{/if}
