<script lang="ts">
	import { page } from '$app/stores';
	import { Button, Section } from '$lib/components';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let companion = 'no';
	let transport = 'no';

	// Get phone from URL parameter
	$: phoneParam = $page.url.searchParams.get('phone') || '';

	function handleRadioChange(name: string, value: string) {
		if (name === 'companion') {
			companion = value;
		} else if (name === 'transport') {
			transport = value;
		}
	}
</script>

<svelte:head>
	<title>RSVP - Melissa & Jesús</title>
	<meta name="description" content="Confirma tu asistencia a la boda de Melissa & Jesús" />
</svelte:head>

<!-- RSVP Form Section -->
<Section variant="beige" class="min-h-screen pt-32">
	<div class="mx-auto max-w-4xl">
		<div class="mb-16 text-center">
			<h1 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-6xl">
				Confirmar Asistencia
			</h1>
			<p class="mx-auto max-w-2xl text-xl font-light text-[#6A7B67]">
				¡No podemos esperar a celebrar contigo! Por favor, déjanos saber si nos acompañarás.
			</p>
		</div>

		<div class="rounded-lg border-2 border-[#212E21] bg-white/80 p-8 md:p-12">
			{#if form?.success}
				<div class="text-center">
					<div class="mb-8 text-6xl">💒</div>
					<h2 class="mb-6 text-4xl font-black tracking-tight text-[#212E21] md:text-5xl">
						¡Gracias {form.name}!
					</h2>
					<p class="mb-4 text-2xl font-bold text-[#751F19]">
						{form.message}
					</p>
					<p class="text-xl font-light text-[#6A7B67]">Nos vemos en la boda</p>
				</div>
			{:else}
				{#if form?.error}
					<div class="mb-6 rounded-md border border-red-400 bg-red-100 p-4">
						<p class="font-bold text-red-700">❌ {form.error}</p>
					</div>
				{/if}

				<form method="POST" use:enhance class="space-y-6">
					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Nombre Completo</label>
						<input
							type="text"
							name="name"
							class="w-full rounded-md border-2 border-[#212E21] bg-white px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="Tu nombre y apellidos"
							autofocus
							required
						/>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Teléfono</label>
						<input
							type="tel"
							name="phone"
							value={phoneParam}
							class="w-full rounded-md border-2 border-[#212E21] bg-white px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="+34 123 456 789"
							required
						/>
					</div>

					<div>
						<label class="mb-4 block text-sm font-bold text-[#212E21]">Acompañante</label>
						<div class="grid gap-4 md:grid-cols-2">
							<label
								for="companion"
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
								on:click={() => handleRadioChange('companion', 'yes')}
							>
								<input
									type="radio"
									name="companion"
									value="yes"
									class="sr-only"
									bind:group={companion}
									required
								/>
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
								>
									<div
										class="h-2 w-2 rounded-full bg-[#751F19] transition-opacity {companion === 'yes'
											? 'opacity-100'
											: 'opacity-0'}"
									></div>
								</div>
								<span class="font-bold text-[#212E21]">👫 Vendré con acompañante</span>
							</label>
							<label
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
								on:click={() => handleRadioChange('companion', 'no')}
							>
								<input
									type="radio"
									name="companion"
									value="no"
									class="sr-only"
									bind:group={companion}
									required
								/>
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
								>
									<div
										class="h-2 w-2 rounded-full bg-[#751F19] transition-opacity {companion === 'no'
											? 'opacity-100'
											: 'opacity-0'}"
									></div>
								</div>
								<span class="font-bold text-[#212E21]">🙋‍♂️ Vendré solo/a</span>
							</label>
						</div>
					</div>

					{#if companion === 'yes'}
						<div>
							<label for="companionName" class="mb-2 block text-sm font-bold text-[#212E21]"
								>Nombre del Acompañante</label
							>
							<input
								type="text"
								name="companionName"
								class="w-full rounded-md border-2 border-[#212E21] bg-white px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
								placeholder="Nombre y apellidos de tu acompañante"
								required
							/>
						</div>
					{/if}

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]"> Bus (desde Palma) </label>
						<div class="grid gap-4 md:grid-cols-2">
							<label
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
								on:click={() => handleRadioChange('transport', 'yes')}
							>
								<input
									type="radio"
									name="transport"
									value="yes"
									class="sr-only"
									bind:group={transport}
									required
								/>
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
								>
									<div
										class="h-2 w-2 rounded-full bg-[#751F19] transition-opacity {transport === 'yes'
											? 'opacity-100'
											: 'opacity-0'}"
									></div>
								</div>
								<span class="font-bold text-[#212E21]">🚌 Sí, vengo en bus</span>
							</label>
							<label
								class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
								on:click={() => handleRadioChange('transport', 'no')}
							>
								<input
									type="radio"
									name="transport"
									value="no"
									class="sr-only"
									bind:group={transport}
									required
								/>
								<div
									class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
								>
									<div
										class="h-2 w-2 rounded-full bg-[#751F19] transition-opacity {transport === 'no'
											? 'opacity-100'
											: 'opacity-0'}"
									></div>
								</div>
								<span class="font-bold text-[#212E21]">🚗 No, voy por mi cuenta</span>
							</label>
						</div>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">
							Restricciones Alimentarias
						</label>
						<input
							type="text"
							name="dietaryRestrictions"
							class="w-full rounded-md border-2 border-[#212E21] bg-white px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="Ej: vegetariano, sin gluten, alérgico a frutos secos..."
						/>
					</div>

					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]" for="song">
							Una canción que te recuerde a nosotros
						</label>
						<input
							type="text"
							name="song"
							class="w-full rounded-md border-2 border-[#212E21] bg-white px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="Nombre de la canción y artista"
							required
						/>
					</div>

					<div>
						<Button type="submit" class="w-full">Enviar Confirmación ✨</Button>
					</div>
				</form>
			{/if}
		</div>
	</div>
</Section>
