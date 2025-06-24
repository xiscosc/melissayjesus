import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { WEBHOOK_ENDPOINT, WEBHOOK_API_KEY } from '$env/static/private';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		// Parse form data to JSON
		const companionValue = data.get('companion') as string;
		const transportValue = data.get('transport') as string;
		const withCompanion = companionValue === 'yes';

		const rsvpData = {
			name: data.get('name') as string,
			phone: data.get('phone') as string,
			withCompanion: withCompanion,
			companionName: (data.get('companionName') as string) || null,
			personCount: withCompanion ? 2 : 1,
			transport: transportValue === 'yes',
			dietaryRestrictions: (data.get('dietaryRestrictions') as string) || null,
			song: data.get('song') as string
		};

		// Validate required fields
		if (
			!rsvpData.name ||
			!rsvpData.phone ||
			companionValue === null ||
			transportValue === null ||
			!rsvpData.song
		) {
			return fail(400, { error: 'Faltan campos obligatorios' });
		}

		// If coming with companion, companion name is required
		if (rsvpData.withCompanion && !rsvpData.companionName) {
			return fail(400, { error: 'El nombre del acompañante es obligatorio' });
		}

		try {
			const response = await fetch(WEBHOOK_ENDPOINT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-make-apikey': WEBHOOK_API_KEY
				},
				body: JSON.stringify(rsvpData)
			});

			if (!response.ok) {
				throw new Error(`API call failed: ${response.status}`);
			}

			return {
				success: true,
				message: '¡Confirmación enviada correctamente!',
				name: rsvpData.name
			};
		} catch (error) {
			console.error('Error submitting RSVP:', error);
			return fail(500, {
				error: 'Error al enviar la confirmación. Por favor, inténtalo de nuevo.'
			});
		}
	}
};
