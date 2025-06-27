<script lang="ts">
	import { goto } from '$app/navigation';
	import homeImage from '$lib/assets/home2.jpg?enhanced';
	import presentGif from '$lib/assets/algo-de-postre-no-que-se-nos-v.gif';
	import weddingRings from '$lib/assets/noun-wedding-rings-57138.svg';
	import gallery1 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.09.jpeg?enhanced';
	import gallery2 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.22.jpeg?enhanced';
	import gallery3 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.22 (1).jpeg?enhanced';
	import gallery4 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.47.jpeg?enhanced';
	import gallery5 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.56.jpeg?enhanced';
	import gallery6 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.11.39.jpeg?enhanced';
	import gallery7 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.11.54.jpeg?enhanced';
	import gallery8 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.26.16.jpeg?enhanced';
	import gallery9 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.26.32.jpeg?enhanced';
	import gallery10 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.32.02.jpeg?enhanced';

	const galleryImages = [
		gallery1,
		gallery2,
		gallery3,
		gallery4,
		gallery5,
		gallery6,
		gallery7,
		gallery8,
		gallery9,
		gallery10
	].sort(() => Math.random() - 0.5);
	import {
		Button,
		Card,
		DetailCard,
		IconBox,
		TimelineItem,
		Section,
		CountrySelect,
		Map,
		ClickableImage
	} from '$lib/components';

	let countryCode = '+34';
	let phoneNumber = '';

	let iban = 'ES3701825319720208485582';
	let copyButtonText = 'Copiar';

	async function copyIban() {
		if (copyButtonText !== 'Copiar') return;

		try {
			await navigator.clipboard.writeText(iban);
			copyButtonText = '¡Copiado!';
			setTimeout(() => {
				copyButtonText = 'Copiar';
			}, 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
			copyButtonText = 'Error :(';
			setTimeout(() => {
				copyButtonText = 'Copiar';
			}, 2000);
		}
	}

	function handlePhoneSubmit(event: Event) {
		event.preventDefault();

		if (!phoneNumber.trim()) {
			return;
		}

		const completePhone = countryCode + phoneNumber.trim();
		window.location.href = `/rsvp?phone=${encodeURIComponent(completePhone)}`;
	}
</script>

<svelte:head>
	<title>Melissa & Jesús - Boda</title>
	<meta name="description" content="Únete a nosotros para celebrar la boda de Melissa & Jesús" />
</svelte:head>

<!-- Hero Section -->
<section id="home" class="relative flex h-screen items-center justify-center overflow-hidden">
	<enhanced:img
		src={homeImage}
		alt="Boda de Melissa & Jesús"
		class="absolute inset-0 h-full w-full object-cover"
		sizes="100vw"
	/>

	<!-- Overlay -->
	<div class="absolute inset-0 bg-gray-900/20"></div>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-5xl px-4 text-center text-white md:max-w-4xl md:px-6">
		<h1 class="animate-fade-in mb-8 text-6xl font-black tracking-tight md:text-7xl">
			MELISSA & JESÚS
		</h1>
		<p
			class="mb-6 flex items-baseline justify-center gap-3 text-2xl font-light tracking-wide md:text-3xl"
		>
			<span>VIDA MÁRTIR FOREVER</span>
			<img
				src={weddingRings}
				alt="Wedding rings"
				class="h-8 w-8 flex-shrink-0 translate-y-3 invert md:h-10 md:w-10"
			/>
		</p>
		<div class="mb-12 space-y-2">
			<p class="text-sm font-bold tracking-widest uppercase md:text-base">Save the date</p>
			<p class="text-3xl font-black tracking-tight uppercase md:text-4xl">
				13 de Diciembre de 2025
			</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button
				onclick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
			>
				Confirmar Ahora
				<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M13 7l5 5m0 0l-5 5m5-5H6"
					></path>
				</svg>
			</Button>
			<Button
				variant="outline"
				onclick={() =>
					document.querySelector('section:not(#home)')?.scrollIntoView({ behavior: 'smooth' })}
			>
				Saber Más
			</Button>
		</div>
	</div>
</section>

<!-- Gallery Section -->
<Section variant="beige">
	<div class="mx-auto max-w-7xl">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
				Nuestra Historia
			</h2>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed font-light text-[#6A7B67] md:text-2xl">
				Momentos especiales que nos han traído hasta aquí
			</p>
		</div>

		<!-- Image Gallery -->
		<div class="relative">
			<!-- Left scroll button -->
			<button
				class="absolute top-1/2 left-2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#212E21] bg-white/90 text-[#212E21] shadow-lg transition-all duration-200 hover:bg-[#212E21] hover:text-white focus:ring-2 focus:ring-[#212E21] focus:outline-none md:left-4"
				onclick={() => {
					const container = document.getElementById('gallery-container');
					if (container) {
						container.scrollBy({ left: -300, behavior: 'smooth' });
					}
				}}
				aria-label="Scroll left"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>

			<!-- Right scroll button -->
			<button
				class="absolute top-1/2 right-2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#212E21] bg-white/90 text-[#212E21] shadow-lg transition-all duration-200 hover:bg-[#212E21] hover:text-white focus:ring-2 focus:ring-[#212E21] focus:outline-none md:right-4"
				onclick={() => {
					const container = document.getElementById('gallery-container');
					if (container) {
						container.scrollBy({ left: 300, behavior: 'smooth' });
					}
				}}
				aria-label="Scroll right"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>

			<!-- Gallery container -->
			<div
				id="gallery-container"
				class="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
			>
				{#each galleryImages as image, i}
					<div
						class="flex-shrink-0 snap-start rounded-lg border-2 border-[#212E21] bg-white/80 p-2"
					>
						<ClickableImage
							src={image}
							alt="Gallery image {i + 1}"
							className="h-64 w-64 sm:w-80 object-cover rounded-lg"
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</Section>

<!-- Event Details Section -->
<Section id="event" variant="white">
	<div class="mx-auto max-w-7xl">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">La Boda</h2>
			<p class="mx-auto max-w-2xl text-xl font-light text-[#6A7B67]">
				Toda la información importante para nuestro día especial
			</p>
		</div>

		<div class="mb-20 grid gap-8 md:grid-cols-3 lg:gap-12">
			<!-- When -->
			<DetailCard>
				<div
					class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
				>
					📅
				</div>
				<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Cuando</h3>
				<div class="space-y-2">
					<p class="text-lg font-bold text-[#212E21]">13 de Diciembre</p>
					<p class="text-[#6A7B67]">Hora por confirmar</p>
				</div>
			</DetailCard>

			<!-- Where -->
			<DetailCard>
				<div
					class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
				>
					📍
				</div>
				<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Dónde</h3>
				<div class="space-y-2">
					<p class="text-lg font-bold text-[#212E21]">Frontón Sineu</p>
					<button
						onclick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
						class="inline-flex items-center font-bold text-[#6A7B67] transition-colors duration-200 hover:text-[#212E21]"
					>
						Ver Detalles
						<span class="ml-1">→</span>
					</button>
				</div>
			</DetailCard>

			<!-- How -->
			<DetailCard>
				<div
					class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
				>
					🚌
				</div>
				<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Cómo</h3>
				<div class="space-y-2">
					<p class="text-lg font-bold text-[#212E21]">Transporte</p>
					<button
						onclick={() =>
							document.getElementById('transport')?.scrollIntoView({ behavior: 'smooth' })}
						class="inline-flex items-center font-bold text-[#6A7B67] transition-colors duration-200 hover:text-[#212E21]"
					>
						Ver Detalles
						<span class="ml-1">→</span>
					</button>
				</div>
			</DetailCard>
		</div>

		<!-- Timeline Section -->
		<div class="mx-auto max-w-4xl">
			<div class="space-y-8">
				<TimelineItem time="? PM" title="Ceremonia" description="Más detalles próximamente" />

				<TimelineItem time="? PM" title="Cóctel" description="Más detalles próximamente" />

				<TimelineItem time="? PM" title="Cena" description="Más detalles próximamente" />

				<TimelineItem time="? PM" title="Fiesta" description="Más detalles próximamente" />
			</div>
		</div>
	</div>
</Section>

<!-- Venue Section -->
<section id="venue" class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Frontón Sineu
				</h2>
				<p class="mx-auto max-w-3xl text-xl font-light text-[#6A7B67]">
					Donde celebraremos nuestra boda
				</p>
			</div>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Photos Section -->
				<div class="space-y-6">
					<!-- Interior Photo -->
					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
						<div class="overflow-hidden rounded-lg">
							<ClickableImage
								src="https://images.squarespace-cdn.com/content/v1/667d006d47cdcd35aae21833/7f5e7754-4863-43fb-aff5-63e96770de71/1677620004607.jpg?format=1500w"
								alt="Frontón Sineu interior"
								className="h-64 w-full object-cover"
							/>
						</div>
					</div>

					<!-- Aerial Photo -->
					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
						<div class="overflow-hidden rounded-lg">
							<ClickableImage
								src="https://images.squarespace-cdn.com/content/v1/667d006d47cdcd35aae21833/135f8b3f-0327-493c-9076-1527a4a99633/DJI_0129.JPG"
								alt="Frontón Sineu aerial view"
								className="h-64 w-full object-cover"
							/>
						</div>
					</div>

					<!-- Third Photo -->
					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
						<div class="overflow-hidden rounded-lg">
							<ClickableImage
								src="https://images.squarespace-cdn.com/content/v1/667d006d47cdcd35aae21833/b3508353-261b-40c3-8862-6d949c09edcd/19.jpg"
								alt="Frontón Sineu venue"
								className="h-64 w-full object-cover"
							/>
						</div>
					</div>
				</div>

				<!-- Directions & Map Section -->
				<div class="space-y-8">
					<!-- Directions -->
					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8">
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Dirección</h3>
						<div class="space-y-6">
							<p class="text-lg text-[#6A7B67]">📍 Carrer Frontó, 16, 07510 Sineu</p>
							<div class="flex flex-col gap-3 sm:flex-row">
								<a
									href="https://maps.google.com/?q=39.6434045,3.0070244"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 rounded-lg border-2 border-[#212E21] bg-[#751F19] px-4 py-3 text-sm font-bold text-[#E8DEC9] transition-all duration-300 hover:bg-[#212E21] sm:flex-1"
								>
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
										alt="Google"
										class="h-5 w-5"
									/>
									Google Maps
								</a>
								<a
									href="https://maps.apple.com/?q=39.6434045,3.0070244"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-center gap-2 rounded-lg border-2 border-[#212E21] bg-white px-4 py-3 text-sm font-bold text-[#212E21] transition-all duration-300 hover:bg-[#212E21] hover:text-[#E8DEC9] sm:flex-1"
								>
									<img
										src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
										alt="Apple"
										class="h-5 w-5"
									/>
									Apple Maps
								</a>
							</div>
						</div>
					</div>

					<!-- Map -->
					<div class="h-96">
						<Map />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Transport Section -->
<section id="transport" class="bg-white/50 py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Transporte
				</h2>
				<p class="mx-auto max-w-3xl text-xl font-light text-[#6A7B67]">
					Te ayudamos a llegar a nuestra boda
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
						>
							🚌
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">Autocar</h3>
						<div class="space-y-4 text-lg text-[#6A7B67]">
							<p>📍 Desde Palma</p>
							<p><strong>Salida:</strong> Próximamente</p>
							<p><strong>Vuelta:</strong> Próximamente</p>
							<p class="text-sm italic">Confirmanos si vienes con el autocar</p>
						</div>
					</div>
				</div>

				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 transition-all duration-500 hover:-translate-y-1"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
						>
							🚙
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">Coche</h3>
						<div class="space-y-4 text-lg text-[#6A7B67]">
							<p>🅿️ Párking</p>
							<p><strong>Dirección:</strong> Próximamente</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Present Section -->
<section id="present" class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Crowdfunding
				</h2>
				<p class="mx-auto mb-4 max-w-2xl text-2xl font-medium text-[#212E21]">
					Una ayudita para el postre? 💸
				</p>
				<div class="mx-auto mb-8 flex max-w-max items-center justify-center gap-4 rounded-lg p-2">
					<p class="text-xl font-light text-[#6A7B67]">ES37 0182 5319 7202 0848 5582</p>
					<button
						onclick={copyIban}
						class="flex w-32 items-center justify-center gap-2 rounded-lg border-2 border-[#212E21] bg-[#751F19] px-3 py-2 text-sm font-bold text-[#E8DEC9] transition-all duration-300 hover:bg-[#212E21]"
						aria-label="Copiar IBAN"
					>
						<span>{copyButtonText}</span>
						{#if copyButtonText === 'Copiar'}
							<span>📋</span>
						{:else if copyButtonText === '¡Copiado!'}
							<span>✅</span>
						{/if}
					</button>
				</div>
			</div>

			<div class="flex justify-center">
				<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
					<img
						src={presentGif}
						alt="Una ayudita pa'l postre"
						class="mx-auto h-auto max-w-full rounded-lg"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Phone Contact Section -->
<Section id="rsvp" variant="white">
	<div class="mx-auto max-w-2xl">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
				Confirmar Asistencia
			</h2>
			<p class="mx-auto max-w-xl text-xl font-light text-[#6A7B67]">
				¡No podemos esperar a celebrar contigo! Por favor, déjanos saber si nos acompañarás.
			</p>
		</div>

		<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8">
			<form class="space-y-6" onsubmit={handlePhoneSubmit}>
				<div>
					<label for="phone" class="mb-2 block text-sm font-bold text-[#212E21]"
						>Número de Teléfono *</label
					>
					<div class="flex items-stretch gap-2">
						<div class="flex-shrink-0">
							<CountrySelect bind:value={countryCode} />
						</div>
						<input
							type="tel"
							inputmode="tel"
							bind:value={phoneNumber}
							class="min-w-0 flex-1 rounded-md border-2 border-[#212E21] px-3 py-3 text-sm focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19] sm:px-4 sm:text-base"
							placeholder="123 456 789"
							required
						/>
					</div>
				</div>

				<Button type="submit" class="w-full">Continuar</Button>
			</form>
		</div>
	</div>
</Section>

<!-- CTA Section / Footer -->
<section class="relative overflow-hidden bg-[#751F19] py-32">
	<!-- Background decoration -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-[#751F19]/20 via-[#751F19]/10 to-[#751F19]/20"
	></div>
	<div class="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-[#E8DEC9]/10 blur-3xl"></div>
	<div class="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-[#E8DEC9]/10 blur-3xl"></div>

	<div class="relative z-10 container mx-auto px-6 text-center">
		<div class="mx-auto max-w-4xl">
			<h2 class="mb-8 text-4xl font-black tracking-tight text-[#E8DEC9] md:text-6xl">
				Únete a Nuestra Celebración
			</h2>
			<p
				class="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-[#E8DEC9]/90 md:text-2xl"
			>
				¡No podemos esperar a celebrar este día especial con nuestra familia y amigos! Por favor,
				déjanos saber si nos acompañarás.
			</p>

			<div class="flex flex-col items-center justify-center gap-6 sm:flex-row">
				<Button
					variant="secondary"
					onclick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
				>
					Confirmar Ahora
					<svg class="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						></path>
					</svg>
				</Button>

				<button
					class="inline-flex items-center justify-center rounded-lg border-2 border-[#E8DEC9] px-8 py-5 text-lg font-bold text-[#E8DEC9] transition-all duration-300 hover:bg-[#E8DEC9] hover:text-[#212E21]"
				>
					Save the date
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 1s ease-out;
	}

	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
</style>
