import { defineEventHandler, setCookie, getCookie } from 'h3';
import { destroySession } from '../../utils/session';

export default defineEventHandler((event) => {
	try {
		const sessionId = getCookie(event, 'sessionId');

		if (sessionId) destroySession(sessionId);
		
		setCookie(event, 'sessionId', '', { maxAge: 0, path: '/' });
		
		setResponseStatus(event, 200)
		
		return { message: 'Logout successful' };
	} catch(e) {
		setResponseStatus(event, e.code || 400)
		
		return { message: 'Something went wrong' };
	}
});
