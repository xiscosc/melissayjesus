<script lang="ts">
	import homeImage from '$lib/assets/home3.jpg?enhanced';
	import presentGif from '$lib/assets/algo-de-postre-no-que-se-nos-v.gif';
	import weddingRings from '$lib/assets/noun-wedding-rings-57138.svg';
	import gallery1 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.09.jpeg?enhanced';
	import gallery2 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.22.jpeg?enhanced';
	import gallery10 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.22 (1).jpeg?enhanced';
	import gallery4 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.47.jpeg?enhanced';
	import gallery5 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.10.56.jpeg?enhanced';
	import gallery6 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.11.39.jpeg?enhanced';
	import gallery7 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 11.11.54.jpeg?enhanced';
	import gallery8 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.26.16.jpeg?enhanced';
	import gallery9 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.26.32.jpeg?enhanced';
	import gallery3 from '$lib/assets/gallery/WhatsApp Image 2025-06-27 at 18.32.02.jpeg?enhanced';

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
	];

	const venueImages = [
		'https://www.bodegassuau.ch/wp-content/uploads/2021/03/visits-bodega-suau.jpg',
		'https://www.bodegassuau.ch/wp-content/uploads/2021/03/visit-suau-1-600x533.jpg',
		'https://www.bodegassuau.com/cache/galleries/contents-24/suau-visita-00.jpg',
		'https://www.bodegassuau.com/cache/galleries/contents-12/600-400/evento-private-suau.jpg',
		'https://www.bodegassuau.ch/wp-content/uploads/2021/03/bodegas-suau_eventoscompressed.jpg'
	];
	import {
		Button,
		DetailCard,
		TimelineItem,
		Section,
		CountrySelect,
		Map,
		ClickableImage,
		RubberBandGallery,
		Footer
	} from '$lib/components';

	let countryCode = '+34';
	let phoneNumber = '';

	let iban = 'ES3701825319720208485582';
	let copyButtonText = 'Copiar';

	const marqueeItems = [
		{
			id: 'transport',
			texto: 'Autocar: info actualizada, click aquí!',
			icono: '🚌'
		},
		{
			id: 'event',
			texto: 'Guardarropa disponible!',
			icono: '🧥'
		}
	];

	async function copyIban() {
		if (copyButtonText !== 'Copiar') return;

		try {
			if (navigator.clipboard && navigator.clipboard.writeText) {
				await navigator.clipboard.writeText(iban);
				copyButtonText = '¡Copiado!';
				setTimeout(() => {
					copyButtonText = 'Copiar';
				}, 2000);
			} else {
				fallbackCopy(iban);
			}
		} catch (err) {
			console.error('Failed to copy with clipboard API: ', err);
			fallbackCopy(iban);
		}
	}

	function fallbackCopy(text: string) {
		try {
			const textArea = document.createElement('textarea');
			textArea.value = text;
			textArea.style.position = 'fixed';
			textArea.style.left = '-999999px';
			textArea.style.top = '-999999px';
			document.body.appendChild(textArea);
			textArea.focus();
			textArea.select();

			const result = document.execCommand('copy');
			document.body.removeChild(textArea);

			if (result) {
				copyButtonText = '¡Copiado!';
				setTimeout(() => {
					copyButtonText = 'Copiar';
				}, 2000);
			} else {
				copyButtonText = 'Error :(';
				setTimeout(() => {
					copyButtonText = 'Copiar';
				}, 2000);
			}
		} catch (err) {
			console.error('Fallback copy failed: ', err);
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
	<title>Melissa & Jesús</title>
</svelte:head>

<!-- Announcement Banner -->
<div class="relative z-50 bg-[#751F19] py-2 text-[#E8DEC9] shadow">
	<div class="overflow-hidden">
		<div class="animate-marquee flex items-center gap-4 px-4 whitespace-nowrap">
			{#each Array(3) as _, repeatIndex}
				{#each marqueeItems as item, itemIndex}
					<button
						onclick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
						class="flex items-center gap-2 rounded-full border border-[#E8DEC9]/40 bg-white/10 px-3 py-1.5 text-[11px] font-black tracking-[0.18em] uppercase transition-colors duration-200 hover:bg-white/20 md:text-xs"
						aria-label={item.texto}
					>
						<span class="text-lg md:text-xl">{item.icono}</span>
						<span class="text-left leading-tight">{item.texto}</span>
					</button>
				{/each}
			{/each}
		</div>
	</div>
</div>

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
			<!-- <Button
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
			</Button> -->
			<Button
				variant="primary"
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
				Nuestra Historia... por ahora
			</h2>
			<!-- <p class="mx-auto max-w-3xl text-xl leading-relaxed font-light text-[#6A7B67] md:text-2xl">
				Momentos especiales que nos han traído hasta aquí
			</p> -->
		</div>

		<!-- Image Gallery -->
		<RubberBandGallery images={galleryImages} />
	</div>
</Section>

<!-- Event Details Section -->
<Section id="event" variant="white">
	<div class="mx-auto max-w-7xl">
		<div class="mb-20 text-center">
			<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">La Boda</h2>
			<p class="mx-auto max-w-2xl text-xl font-light text-[#6A7B67]">
				Toda la información importante
			</p>
			<div
				class="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 rounded-xl border-2 border-[#212E21] bg-white/85 px-5 py-4 text-left shadow-[0_10px_35px_-20px_rgba(18,36,18,0.6)]"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full bg-[#751F19] text-2xl text-[#E8DEC9] shadow-md"
				>
					🧥
				</div>
				<div class="space-y-1">
					<span
						class="inline-flex rounded-full bg-[#751F19] px-3 py-1 text-[11px] font-black tracking-[0.16em] text-[#E8DEC9] uppercase shadow-sm"
					>
						¡Nuevo!
					</span>
					<p class="text-base font-semibold text-[#212E21]">
						Habrá guardarropa para abrigos y zapatos de recambio.
					</p>
				</div>
			</div>
		</div>

		<div class="mb-20 grid gap-8 md:grid-cols-3 lg:gap-12">
			<!-- When -->
			<DetailCard>
				<div
					class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] text-4xl"
				>
					📅
				</div>
				<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Cuándo</h3>
				<div class="space-y-2">
					<p class="text-lg font-bold text-[#212E21]">13 de Diciembre</p>
					<p class="text-[#6A7B67]">13:00</p>
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
					<p class="text-lg font-bold text-[#212E21]">Bodegas Suau</p>
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
				<TimelineItem time="13:30" title="Bienvenida" description="Unas palabrejas" />

				<TimelineItem
					time="14:00"
					title="Cóctel"
					description="Lo de las bandejitas y el vermú 🍸"
				/>

				<TimelineItem
					time="15:30"
					title="Comida"
					description="Adaptado a todos los gustos y sensibilidades varias"
				/>

				<TimelineItem time="17:30" title="El Tardeo" description="Barra libre primeras marcas 🍹" />
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
					Bodegas Suau
				</h2>
			</div>

			<!-- Venue Logo -->
			<div class="mb-12 flex justify-center">
				<div class="w-full max-w-sm rounded-lg border-2 border-[#212E21] bg-white/80 p-2">
					<img
						src="https://pbs.twimg.com/profile_images/1303592789368877056/6NOA9mQ7_400x400.jpg"
						alt="Bodegas Suau Logo"
						class="my-2 h-full w-full object-center"
					/>
				</div>
			</div>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Directions -->
				<div
					class="flex flex-col justify-center rounded-lg border-2 border-[#212E21] bg-white/80 p-8 text-center"
				>
					<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Dirección</h3>
					<div class="space-y-6">
						<p class="text-lg text-[#6A7B67]">📍 Camí Cabana, 12, 07141 Es Pont d'Inca</p>
						<div class="flex flex-col gap-3 sm:flex-row">
							<a
								href="https://maps.app.goo.gl/yKYQKyTRgUFYWCKSA"
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
								href="https://maps.apple.com/place?address=Camí de la sa Cabana, 12, 07141 Marratxí, Balearic Isles, Spain&coordinate=39.598906,2.692305&name=Bodegas Suau&place-id=I2347CB6131BD7B1C&map=explore"
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
</section>

<!-- Transport Section -->
<section id="transport" class="bg-white/50 py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Transporte
				</h2>
				<!-- <p class="mx-auto max-w-3xl text-xl font-light text-[#6A7B67]">
					Cómo vas
				</p> -->
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
				<div class="group relative mt-4 flex md:mt-0">
					<div
						class="flex flex-1 transform flex-col overflow-hidden rounded-xl border-2 border-[#212E21] bg-white/90 shadow-[0_18px_40px_-20px_rgba(18,36,18,0.4)] transition-all duration-500"
					>
						<div class="flex items-center justify-between bg-[#751F19] px-6 py-5 text-[#E8DEC9]">
							<div class="flex items-center gap-4">
								<div
									class="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-[#E8DEC9] bg-white/15 text-3xl"
								>
									🚌
								</div>
								<div class="text-left">
									<p class="text-xs font-black tracking-[0.2em] uppercase">Transporte</p>
									<h3 class="text-2xl leading-tight font-black text-white md:text-3xl">Autocar</h3>
								</div>
							</div>
							<span
								class="hidden rounded-full border border-[#E8DEC9]/40 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#E8DEC9]/90 uppercase md:inline-flex"
							>
								¡Nuevo!
							</span>
						</div>

						<div class="space-y-6 p-6 text-left text-[#2f3b2f]">
							<div
								class="flex flex-col gap-4 rounded-lg border-2 border-[#212E21]/80 bg-white/80 p-4 sm:flex-row sm:items-center sm:justify-between"
							>
								<div class="flex items-center gap-3">
									<div
										class="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8DEC9]/80 text-xl"
									>
										🏢
									</div>
									<div>
										<p class="text-xs font-black tracking-[0.14em] text-[#6A7B67] uppercase">
											Empresa de transporte
										</p>
										<p class="text-lg font-bold text-[#212E21]">Autocares Comas</p>
									</div>
								</div>
								<div
									class="flex items-center justify-center rounded-lg border-2 border-[#212E21] bg-white px-4 py-2"
								>
									<img
										src="https://www.autocarescomas.com/imagenes/logo.png"
										alt="Autocares Comas"
										class="h-14 w-auto object-contain"
									/>
								</div>
							</div>

							<div class="grid gap-4 md:grid-cols-2">
								<div
									class="flex flex-col gap-3 rounded-lg border-2 border-[#212E21]/80 bg-white/85 p-4"
								>
									<div class="flex items-center gap-2">
										<span class="text-xl">📍</span>
										<div>
											<p class="text-xs font-black tracking-[0.14em] text-[#6A7B67] uppercase">
												Punto de encuentro
											</p>
											<p class="text-lg font-semibold text-[#212E21]">
												Ferrocarril de Sóller (Palma)
											</p>
										</div>
									</div>
									<div class="flex flex-col gap-3 sm:flex-row">
										<a
											href="https://maps.app.goo.gl/KoNFgWm4h3zSeHPn9"
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
											href="https://maps.apple/p/QZ5Nr.eIWJ~RMv"
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

								<div
									class="flex flex-col gap-3 rounded-lg border-2 border-[#212E21]/80 bg-[#E8DEC9]/80 p-4 text-[#212E21]"
								>
									<div class="flex items-center gap-2 text-lg font-bold">
										<span>⏰</span>
										<p>Horarios</p>
									</div>
									<div class="grid grid-cols-2 gap-3 text-sm font-semibold md:text-base">
										<div
											class="rounded-lg border border-[#212E21]/40 bg-white/70 px-3 py-2 text-center"
										>
											Salida<br /><span class="text-lg font-black">12:45</span>
										</div>
										<div
											class="rounded-lg border border-[#212E21]/40 bg-white/70 px-3 py-2 text-center"
										>
											Vuelta<br /><span class="text-lg font-black">23:30</span>
										</div>
									</div>
									<p class="text-sm text-[#4d5a4d]">
										Recomendamos llegar a las <strong>12:30</strong>.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="group flex">
					<div
						class="flex flex-1 transform flex-col overflow-hidden rounded-xl border-2 border-[#212E21] bg-white/90 shadow-[0_18px_40px_-20px_rgba(18,36,18,0.4)] transition-all duration-500"
					>
						<div class="flex items-center justify-between bg-[#751F19] px-6 py-5 text-[#E8DEC9]">
							<div class="flex items-center gap-4">
								<div
									class="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-[#E8DEC9] bg-white/15 text-3xl"
								>
									🚙
								</div>
								<div class="text-left">
									<p class="text-xs font-black tracking-[0.2em] uppercase">Transporte</p>
									<h3 class="text-2xl leading-tight font-black text-white md:text-3xl">Coche</h3>
								</div>
							</div>
							<span
								class="hidden rounded-full border border-[#E8DEC9]/40 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#E8DEC9]/90 uppercase md:inline-flex"
							>
								Párking gratis
							</span>
						</div>

						<div class="space-y-6 p-6 text-left text-[#2f3b2f]">
							<div
								class="flex items-center gap-3 rounded-lg border-2 border-[#212E21]/80 bg-white/85 p-4"
							>
								<div
									class="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8DEC9]/80 text-xl"
								>
									🅿️
								</div>
								<div>
									<p class="text-xs font-black tracking-[0.14em] text-[#6A7B67] uppercase">
										Párking en la bodega
									</p>
									<p class="text-lg font-semibold text-[#212E21]">
										Disponible para todos los asistentes.
									</p>
								</div>
							</div>

							<div class="grid gap-4">
								<div
									class="flex flex-col gap-3 rounded-lg border-2 border-[#212E21]/80 bg-white/85 p-4"
								>
									<div class="flex items-center gap-2 text-lg font-bold">
										<span>📍</span>
										<p>Ubicación</p>
									</div>
									<p class="text-sm font-semibold text-[#212E21]">
										Camí Cabana, 12, 07141 Es Pont d'Inca
									</p>
									<div class="flex flex-col gap-3 sm:flex-row">
										<a
											href="https://maps.app.goo.gl/yKYQKyTRgUFYWCKSA"
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
											href="https://maps.apple.com/place?address=Camí de la sa Cabana, 12, 07141 Marratxí, Balearic Isles, Spain&coordinate=39.598906,2.692305&name=Bodegas Suau&place-id=I2347CB6131BD7B1C&map=explore"
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
					¿Una ayudita para el postre? 💸
				</p>
				<div class="mx-auto mb-8 flex max-w-max items-center justify-center gap-4 rounded-lg p-2">
					<p class="text-xl font-light text-[#6A7B67]">{iban}</p>
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
			<p class="mx-auto max-w-xl text-xl font-light text-[#6A7B67]">Te esperamos!</p>
		</div>

		<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8">
			<div class="text-center">
				<p class="text-xl font-medium text-[#212E21]">
					Gracias a todos por haber confirmado, si necesitas hacer algun cambio contacta con
					nosotros por WhatsApp.
				</p>
			</div>
			<!-- <form class="space-y-6" onsubmit={handlePhoneSubmit}>
				<div>
					<label for="phone" class="mb-2 block text-sm font-bold text-[#212E21]"
						>Pon tu número de teléfono *</label
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
			</form> -->
		</div>
	</div>
</Section>

<Footer />

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

	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-marquee {
		animation: marquee 20s linear infinite;
	}

	.animate-marquee:hover {
		animation-play-state: paused;
	}
</style>
