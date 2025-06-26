<script lang="ts">
	import ImageModal from './ImageModal.svelte';

	export let src: string;
	export let alt: string;
	export let className: string = '';

	let modalOpen = false;

	function openModal() {
		modalOpen = true;
	}

	function closeModal() {
		modalOpen = false;
	}
</script>

<div class="cursor-pointer transition-transform duration-200 hover:scale-[1.02]">
	<img
		{src}
		{alt}
		class={`${className} transition-opacity duration-200 hover:opacity-90`}
		on:click={openModal}
		on:keydown={(e) => e.key === 'Enter' && openModal()}
		role="button"
		tabindex="0"
		aria-label="Click to view larger image"
	/>
</div>

<ImageModal {src} {alt} isOpen={modalOpen} onclose={closeModal} />
