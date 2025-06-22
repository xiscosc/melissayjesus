<script lang="ts">
	import { Button, Section } from '$lib/components';
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

				<div class="grid gap-6 md:grid-cols-2">
					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Correo Electrónico</label>
						<input
							type="email"
							class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="tu.correo@ejemplo.com"
						/>
					</div>
					<div>
						<label class="mb-2 block text-sm font-bold text-[#212E21]">Teléfono</label>
						<input
							type="tel"
							class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
							placeholder="+34 123 456 789"
						/>
					</div>
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
					<label class="mb-2 block text-sm font-bold text-[#212E21]">
						¿Necesitas transporte organizado?
					</label>
					<div class="grid gap-4 md:grid-cols-2">
						<label
							class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
						>
							<input type="radio" name="transport" value="yes" class="sr-only" />
							<div
								class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
							>
								<div class="h-2 w-2 rounded-full bg-[#751F19] opacity-0"></div>
							</div>
							<span class="font-bold text-[#212E21]">🚌 Sí, necesito transporte</span>
						</label>
						<label
							class="flex cursor-pointer items-center rounded-md border-2 border-[#212E21] bg-white p-4 transition-colors hover:border-[#751F19]"
						>
							<input type="radio" name="transport" value="no" class="sr-only" />
							<div
								class="mr-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#751F19]"
							>
								<div class="h-2 w-2 rounded-full bg-[#751F19] opacity-0"></div>
							</div>
							<span class="font-bold text-[#212E21]">🚗 Iré por mi cuenta</span>
						</label>
					</div>
				</div>

				<div>
					<label class="mb-2 block text-sm font-bold text-[#212E21]">
						Restricciones Alimentarias
					</label>
					<div class="grid gap-2 md:grid-cols-3">
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Vegetariano</span>
						</label>
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Vegano</span>
						</label>
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Sin Gluten</span>
						</label>
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Sin Lactosa</span>
						</label>
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Alérgico a Frutos Secos</span>
						</label>
						<label class="flex cursor-pointer items-center">
							<input type="checkbox" class="mr-2 rounded border-[#212E21]" />
							<span class="text-[#212E21]">Otro</span>
						</label>
					</div>
				</div>

				<div>
					<label class="mb-2 block text-sm font-bold text-[#212E21]">
						Mensaje Especial (Opcional)
					</label>
					<textarea
						rows="4"
						class="w-full rounded-md border-2 border-[#212E21] px-4 py-3 focus:border-[#751F19] focus:ring-2 focus:ring-[#751F19]"
						placeholder="Comparte un mensaje, otras restricciones alimentarias, o cualquier cosa que debamos saber..."
					></textarea>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<Button type="submit" class="flex-1">Enviar Confirmación ✨</Button>
					<Button
						variant="outline"
						onclick={() => (window.location.href = '/')}
						class="border-[#212E21] text-[#212E21] hover:bg-[#212E21] hover:text-white"
					>
						Volver al Inicio
					</Button>
				</div>
			</form>
		</div>
	</div>
</Section>
