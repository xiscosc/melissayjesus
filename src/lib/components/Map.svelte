<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	export let lat = 39.6434045; // Default to Palma, Mallorca coordinates
	export let lng = 3.0070244;
	export let zoom = 12;
	export let height = '384px'; // h-96 equivalent

	let mapElement: HTMLDivElement;
	let map: any;
	let mounted = false;

	onMount(() => {
		if (!browser) return;

		(async () => {
			// Dynamic import to avoid SSR issues
			const L = await import('leaflet');

			// Import CSS properly
			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
			document.head.appendChild(link);

			// Wait for CSS to load
			await new Promise((resolve) => {
				link.onload = resolve;
			});

			mounted = true;

			// Fix for default markers in Leaflet with bundlers
			delete (L.Icon.Default.prototype as any)._getIconUrl;
			L.Icon.Default.mergeOptions({
				iconRetinaUrl:
					'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
				iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
				shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png'
			});

			// Small delay to ensure the DOM element is ready
			await new Promise((resolve) => setTimeout(resolve, 100));

			// Initialize the map
			map = L.map(mapElement).setView([lat, lng], zoom);

			// Add tile layer
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '© OpenStreetMap contributors'
			}).addTo(map);

			// Add a marker for the venue
			const marker = L.marker([lat, lng]).addTo(map);
			marker.bindPopup('<b>Frontón Sineu</b><br/>Melissa & Jesús<br/>13 de Diciembre 2025');

			// Force map to invalidate size after a short delay
			setTimeout(() => {
				if (map) {
					map.invalidateSize();
				}
			}, 250);
		})();

		return () => {
			if (map) {
				map.remove();
			}
		};
	});
</script>

{#if browser && mounted}
	<div
		bind:this={mapElement}
		class="relative z-0 h-full w-full rounded-lg border-2 border-[#212E21]"
		style="height: {height};"
	></div>
{:else}
	<!-- Placeholder for SSR -->
	<div
		class="flex h-full w-full items-center justify-center rounded-lg border-2 border-[#212E21] bg-white/50"
		style="height: {height};"
	>
		<div class="text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
			>
				<svg class="h-8 w-8 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<p class="text-sm text-[#6A7B67]">Cargando mapa...</p>
		</div>
	</div>
{/if}
