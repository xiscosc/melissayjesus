import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import {
	WEBHOOK_ENDPOINT,
	WEBHOOK_API_KEY,
	NON_COMPANION,
	TURNSTILE_SECRET_KEY
} from '$env/static/private';
import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';

function checkIfNonCompanion(phone: string): boolean {
	if (!phone || !NON_COMPANION) return false;

	const nonCompanionNumbers = NON_COMPANION.split(',').map((num: string) => num.trim());
	const cleanPhone = phone.replace(/\s+/g, '').replace(/[^\d+]/g, '');

	return nonCompanionNumbers.some((nonCompanionNum: string) => {
		const cleanNonCompanion = nonCompanionNum.replace(/\s+/g, '').replace(/[^\d+]/g, '');
		// Check if either number contains the other (to handle with/without country codes)
		return cleanPhone.includes(cleanNonCompanion) || cleanNonCompanion.includes(cleanPhone);
	});
}

async function verifyTurnstile(token: string): Promise<boolean> {
	try {
		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: new URLSearchParams({
				secret: TURNSTILE_SECRET_KEY,
				response: token
			})
		});

		const result = await response.json();
		return result.success;
	} catch (error) {
		console.error('Turnstile verification error:', error);
		return false;
	}
}

export const load: PageServerLoad = async ({ url }) => {
	redirect(302, '/');

	const phone = url.searchParams.get('phone');

	if (!phone) {
		redirect(302, '/');
	}

	return {
		phone,
		shouldHideCompanion: checkIfNonCompanion(phone!),
		turnstileSiteKey: PUBLIC_TURNSTILE_SITE_KEY
	};
};

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		// Verify Turnstile token
		const turnstileToken = data.get('cf-turnstile-response') as string;
		if (!turnstileToken) {
			return fail(400, { error: 'Verificación de seguridad requerida' });
		}

		const isValidTurnstile = await verifyTurnstile(turnstileToken);
		if (!isValidTurnstile) {
			return fail(400, {
				error: 'Verificación de seguridad falló. Por favor, inténtalo de nuevo.'
			});
		}

		// Parse form data to JSON
		const phone = data.get('phone') as string;
		const companionValue = data.get('companion') as string;
		const transportValue = data.get('transport') as string;

		// Check if this phone number should be forced to no companion
		const isNonCompanionPhone = checkIfNonCompanion(phone);
		const withCompanion = isNonCompanionPhone ? false : companionValue === 'yes';

		const rsvpData = {
			name: data.get('name') as string,
			phone: phone,
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
			(!isNonCompanionPhone && companionValue === null) ||
			transportValue === null ||
			!rsvpData.song
		) {
			return fail(400, { error: 'Faltan campos obligatorios' });
		}

		// If coming with companion, companion name is required (unless forced to no companion)
		if (rsvpData.withCompanion && !rsvpData.companionName && !isNonCompanionPhone) {
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
