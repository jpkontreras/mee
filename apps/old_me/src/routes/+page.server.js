/** @param {string | null} userAgent */
function extractOS(userAgent) {
	const userAgentLower = userAgent?.toLowerCase();

	if (userAgentLower?.includes('windows')) {
		return 'windows';
	} else if (userAgentLower?.includes('macintosh') || userAgentLower?.includes('mac os x')) {
		return 'macos';
	} else if (userAgentLower?.includes('linux')) {
		return 'linux';
	} else if (userAgentLower?.includes('android')) {
		return 'android';
	} else if (userAgentLower?.includes('ios')) {
		return 'ios';
	} else {
		return 'unknown';
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ request }) {
	return {
		platform: extractOS(request.headers.get('user-agent'))
	};
}
