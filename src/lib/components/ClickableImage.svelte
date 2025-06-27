<script lang="ts">
	import ImageModal from './ImageModal.svelte';

	export let src: string | any;
	export let alt: string;
	export let className: string = '';

	let modalOpen = false;

	function openModal() {
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
	}

	// Check if src is an enhanced image object or a string
	$: isEnhanced = typeof src === 'object' && src !== null;
</script>

<div class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
	{#if isEnhanced}
		<enhanced:img
			{src}
			{alt}
			class={`${className} transition-opacity duration-200 hover:opacity-90`}
			onclick={openModal}
			onkeydown={(e) => e.key === 'Enter' && openModal()}
			role="button"
			tabindex="0"
			aria-label="Click to view larger image"
		/>
	{:else}
		<img
			{src}
			{alt}
			class={`${className} transition-opacity duration-200 hover:opacity-90`}
			onclick={openModal}
			onkeydown={(e) => e.key === 'Enter' && openModal()}
			role="button"
			tabindex="0"
			aria-label="Click to view larger image"
		/>
	{/if}
</div>

<ImageModal {src} {alt} isOpen={modalOpen} onclose={closeModal} />
