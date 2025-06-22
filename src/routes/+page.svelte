<script lang="ts">
	import homeImage from '$lib/assets/home2.jpg?enhanced';
	import presentGif from '$lib/assets/algo-de-postre-no-que-se-nos-v.gif';
	import weddingRings from '$lib/assets/noun-wedding-rings-57138.svg';
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
	<div class="absolute inset-0 bg-black/40"></div>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
		<h1 class="animate-fade-in mb-8 text-5xl font-black tracking-tight md:text-7xl">
			MELISSA & JESÚS
		</h1>
		<p
			class="mb-6 flex items-baseline justify-center gap-3 text-2xl font-light tracking-wide opacity-90 md:text-3xl"
		>
			<span>VIDA MÁRTIR FOREVER</span>
			<img
				src={weddingRings}
				alt="Wedding rings"
				class="h-8 w-8 flex-shrink-0 translate-y-3 opacity-90 invert md:h-10 md:w-10"
			/>
		</p>
		<div class="mb-12 space-y-2">
			<p class="text-sm font-bold tracking-widest uppercase opacity-80 md:text-base">
				Save the date
			</p>
			<p class="text-3xl font-black tracking-tight md:text-4xl">13 de Diciembre de 2025</p>
		</div>
		<div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
			<button
				onclick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
				class="inline-flex transform items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] px-8 py-4 text-lg font-bold text-[#E8DEC9] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#751F19]/80 hover:shadow-2xl"
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
			</button>
			<button
				onclick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
				class="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#212E21]"
			>
				Saber Más
			</button>
		</div>
	</div>
</section>

<!-- Our Story Section -->
<section class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Nuestra Historia
				</h2>
				<p class="mx-auto max-w-3xl text-xl leading-relaxed font-light text-[#6A7B67] md:text-2xl">
					Cada historia de amor es hermosa, pero la nuestra es nuestra favorita. Acompáñanos
					mientras comenzamos este nuevo capítulo juntos.
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 md:gap-12">
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">Cómo Nos Conocimos</h3>
						<p class="text-lg leading-relaxed text-[#6A7B67]">
							Nuestros caminos se cruzaron de la manera más inesperada, y desde ese momento, supimos
							que estábamos destinados a estar juntos para siempre.
						</p>
					</div>
				</div>

				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">La Propuesta</h3>
						<p class="text-lg leading-relaxed text-[#6A7B67]">
							Un momento perfecto que atesoraremos para siempre, marcando el comienzo de nuestro
							viaje hacia el para siempre.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Wedding Details Section -->
<section class="bg-white/50 py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-7xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Detalles de la Boda
				</h2>
				<p class="mx-auto max-w-2xl text-xl font-light text-[#6A7B67]">
					Toda la información importante para nuestro día especial
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-3 lg:gap-12">
				<!-- Ceremony -->
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Ceremonia</h3>
						<div class="space-y-2">
							<p class="text-lg font-bold text-[#212E21]">Fecha Próximamente</p>
							<p class="text-[#6A7B67]">Hora por Confirmar</p>
						</div>
					</div>
				</div>

				<!-- Reception -->
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
								/>
							</svg>
						</div>
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Recepción</h3>
						<div class="space-y-2">
							<p class="text-lg font-bold text-[#212E21]">Después de la Ceremonia</p>
							<p class="text-[#6A7B67]">Cena y Baile</p>
						</div>
					</div>
				</div>

				<!-- Location -->
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-8 text-center transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">Lugar</h3>
						<div class="space-y-2">
							<p class="text-lg font-bold text-[#212E21]">Detalles del Lugar</p>
							<button
								onclick={() =>
									document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
								class="inline-flex items-center font-bold text-[#6A7B67] transition-colors duration-200 hover:text-[#212E21]"
							>
								Ver Detalles
								<svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 5l7 7-7 7"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Transport Section -->
<section id="transport" class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Transporte
				</h2>
				<p class="mx-auto max-w-3xl text-xl font-light text-[#6A7B67]">
					Información sobre cómo llegar y opciones de transporte para nuestro día especial
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
								/>
								<path
									d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"
								/>
							</svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">
							Transporte Organizado
						</h3>
						<div class="space-y-4 text-lg text-[#6A7B67]">
							<p>🚌 Autobús desde el centro de la ciudad</p>
							<p><strong>Salida:</strong> 2:00 PM desde Plaza Principal</p>
							<p><strong>Regreso:</strong> 11:00 PM al mismo punto</p>
							<p class="text-sm italic">Confirma tu lugar en el RSVP</p>
						</div>
					</div>
				</div>

				<div class="group">
					<div
						class="transform rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
					>
						<div
							class="mb-8 flex h-20 w-20 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19] shadow-md"
						>
							<svg class="h-10 w-10 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<h3 class="mb-4 text-2xl font-bold text-[#212E21] md:text-3xl">Transporte Propio</h3>
						<div class="space-y-4 text-lg text-[#6A7B67]">
							<p>🚗 Estacionamiento disponible en el lugar</p>
							<p><strong>Dirección:</strong> A confirmar próximamente</p>
							<p><strong>Parking:</strong> Gratuito para invitados</p>
							<p class="text-sm italic">Recomendamos designar conductor</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Present Section -->
<section id="present" class="bg-white/50 py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Crowdfunding
				</h2>
				<p class="mx-auto mb-4 max-w-2xl text-2xl font-medium text-[#212E21]">
					Una ayudita para el postre?
				</p>
				<p class="mx-auto mb-8 max-w-2xl text-xl font-light text-[#6A7B67]">
					DE75512108001245126199
				</p>
			</div>

			<div class="flex justify-center">
				<div class="rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-8 shadow-lg">
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

<!-- Venue Section -->
<section id="venue" class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-6xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Nuestro Lugar
				</h2>
				<p class="mx-auto max-w-3xl text-xl font-light text-[#6A7B67]">
					Un hermoso lugar donde nuestra historia de amor continúa
				</p>
			</div>

			<div class="grid items-center gap-12 lg:grid-cols-2">
				<div class="space-y-8">
					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-lg">
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">
							Lugar de la Ceremonia
						</h3>
						<div class="space-y-4 text-[#6A7B67]">
							<p class="text-lg">📍 Hermoso Jardín</p>
							<p>Calle de la Boda 123, Ciudad del Amor</p>
							<p>Un entorno al aire libre impresionante rodeado de naturaleza</p>
						</div>
					</div>

					<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8 shadow-lg">
						<h3 class="mb-6 text-2xl font-bold text-[#212E21] md:text-3xl">
							Lugar de la Recepción
						</h3>
						<div class="space-y-4 text-[#6A7B67]">
							<p class="text-lg">🏛️ Salón Elegante</p>
							<p>Avenida de la Celebración 456, Ciudad del Amor</p>
							<p>Un espacio íntimo perfecto para cenar y bailar</p>
						</div>
					</div>
				</div>

				<div
					class="flex h-96 items-center justify-center rounded-lg border-2 border-[#212E21] bg-white/50 p-8"
				>
					<div class="text-center">
						<div
							class="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
						>
							<svg class="h-16 w-16 text-[#E8DEC9]" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<p class="text-lg text-[#6A7B67]">Mapa interactivo y direcciones próximamente</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Event Timeline Section -->
<section id="event" class="bg-white/50 py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-20 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Cronograma del Evento
				</h2>
				<p class="text-xl font-light text-[#6A7B67]">
					Así es como se desarrollará nuestro día especial
				</p>
			</div>

			<div class="space-y-8">
				<div class="flex items-start space-x-6">
					<div
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
					>
						<span class="text-lg font-bold text-[#E8DEC9]">3PM</span>
					</div>
					<div class="flex-1 rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-6 shadow-lg">
						<h3 class="mb-2 text-xl font-bold text-[#212E21]">Comienza la Ceremonia</h3>
						<p class="text-[#6A7B67]">
							Únete a nosotros mientras intercambiamos votos en un hermoso entorno al aire libre
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-6">
					<div
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
					>
						<span class="text-lg font-bold text-[#E8DEC9]">4PM</span>
					</div>
					<div class="flex-1 rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-6 shadow-lg">
						<h3 class="mb-2 text-xl font-bold text-[#212E21]">Hora del Cóctel</h3>
						<p class="text-[#6A7B67]">
							Celebra con bebidas y aperitivos mientras nos tomamos fotos
						</p>
					</div>
				</div>

				<div class="flex items-start space-x-6">
					<div
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
					>
						<span class="text-lg font-bold text-[#E8DEC9]">6PM</span>
					</div>
					<div class="flex-1 rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-6 shadow-lg">
						<h3 class="mb-2 text-xl font-bold text-[#212E21]">Recepción y Cena</h3>
						<p class="text-[#6A7B67]">Disfruta de una deliciosa comida y discursos emotivos</p>
					</div>
				</div>

				<div class="flex items-start space-x-6">
					<div
						class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#751F19]"
					>
						<span class="text-lg font-bold text-[#E8DEC9]">8PM</span>
					</div>
					<div class="flex-1 rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] p-6 shadow-lg">
						<h3 class="mb-2 text-xl font-bold text-[#212E21]">Baile y Celebración</h3>
						<p class="text-[#6A7B67]">Bailemos toda la noche y celebremos nuestro nuevo comienzo</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- RSVP Section -->
<section id="rsvp" class="bg-[#E8DEC9] py-24">
	<div class="container mx-auto px-6">
		<div class="mx-auto max-w-4xl">
			<div class="mb-16 text-center">
				<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
					Confirmar Asistencia
				</h2>
				<p class="mx-auto max-w-2xl text-xl font-light text-[#6A7B67]">
					¡No podemos esperar a celebrar contigo! Por favor, déjanos saber si nos acompañarás.
				</p>
			</div>

			<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8 md:p-12">
				<form class="space-y-6">
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label class="mb-2 block text-sm font-bold text-[#212E21]">Nombre</label>
							<input
								type="text"
								class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
								placeholder="Tu nombre"
							/>
						</div>
						<div>
							<label class="mb-2 block text-sm font-bold text-[#212E21]">Apellido</label>
							<input
								type="text"
								class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
								placeholder="Tu apellido"
							/>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Correo Electrónico</label>
						<input
							type="email"
							class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="tu.correo@ejemplo.com"
						/>
					</div>

					<div>
						<label class="mb-4 block text-sm font-bold text-[#212E21]">¿Asistirás?</label>
						<div class="grid gap-4 md:grid-cols-2">
							<label
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
							>
								<input type="radio" name="attending" value="yes" class="sr-only" />
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
								>
									<div class="h-2 w-2 rounded-full bg-[#751F19] opacity-0"></div>
								</div>
								<span class="font-bold text-[#212E21]">✅ ¡Sí, estaré ahí!</span>
							</label>
							<label
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-red-500"
							>
								<input type="radio" name="attending" value="no" class="sr-only" />
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-red-500"
								>
									<div class="h-2 w-2 rounded-full bg-red-500 opacity-0"></div>
								</div>
								<span class="font-bold text-[#212E21]">❌ Lo siento, no podré asistir</span>
							</label>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Número de Invitados</label>
						<select
							class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
						>
							<option>Solo yo</option>
							<option>2 personas</option>
							<option>3 personas</option>
							<option>4 personas</option>
							<option>5+ personas</option>
						</select>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]"
							>Mensaje Especial (Opcional)</label
						>
						<textarea
							rows="4"
							class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="Comparte un mensaje, restricciones dietéticas, o cualquier cosa que debamos saber..."
						></textarea>
					</div>

					<button
						type="submit"
						class="w-full transform rounded-lg border-2 border-[#212E21] bg-[#751F19] px-8 py-4 font-bold text-[#E8DEC9] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#751F19]/80 hover:shadow-xl"
					>
						Enviar Confirmación ✨
					</button>
				</form>
			</div>
		</div>
	</div>
</section>

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
				<button
					onclick={() => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })}
					class="hover:shadow-3xl inline-flex transform items-center justify-center rounded-lg border-2 border-[#212E21] bg-[#E8DEC9] px-12 py-5 text-xl font-bold text-[#212E21] shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#E8DEC9]/90"
				>
					Confirmar Hoy
					<svg class="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						></path>
					</svg>
				</button>

				<button
					class="inline-flex items-center justify-center rounded-lg border-2 border-[#E8DEC9] px-8 py-5 text-lg font-bold text-[#E8DEC9] transition-all duration-300 hover:bg-[#E8DEC9] hover:text-[#212E21]"
				>
					Save the date
				</button>
			</div>

			<div class="mt-16 grid grid-cols-1 gap-8 text-[#E8DEC9] md:grid-cols-3">
				<div class="text-center">
					<div class="mb-2 text-3xl font-black">2025</div>
					<div class="text-lg opacity-80">Año del Amor</div>
				</div>
				<div class="text-center">
					<div class="mb-2 text-3xl font-black">∞</div>
					<div class="text-lg opacity-80">Juntos para Siempre</div>
				</div>
				<div class="text-center">
					<div class="mb-2 text-3xl font-black">❤️</div>
					<div class="text-lg opacity-80">Un Amor</div>
				</div>
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
</style>
