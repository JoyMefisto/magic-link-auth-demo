import { defineEventHandler, readBody } from 'h3';
import { createMagicToken } from '../../utils/magic';
import { getBaseUrl } from '../../utils/helpers';

export default defineEventHandler(async (event) => {
	try {
    const body = await readBody(event) as { email?: string; next?: string };
    const email = (body?.email || '').toLowerCase().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setResponseStatus(event, 400)
      return { message: 'Invalid E-mail' };
    }

    // NOTE: add rate-limiting per IP/email (simple Map counter) in production
    const token = createMagicToken(email);
    const base = getBaseUrl(event);
    const next = body?.next ? `&next=${encodeURIComponent(body.next)}` : '';
    const link = `${base}/api/auth/verify?email=${email}&token=${token}${next}`;

    // For demo: log link and, in dev, return it so the UI can show it.
    console.log(`[magic-link] ${email} -> ${link}`);
    
    setResponseStatus(event, 200)

    // NOTE: can send to e-mail
    return { link: link, message: 'Magic link sent! Check it below.' };

	} catch(e) {
    setResponseStatus(event, e.code || 400)
    
		return { message: e.message || 'Something went wrong' };
	}
});
