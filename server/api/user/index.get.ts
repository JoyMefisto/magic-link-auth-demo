import { defineEventHandler, getCookie } from 'h3';
import { getSessionFromMap } from '../../utils/session';

// The second way is to check the user's authorization
export default defineEventHandler((event) => {
	try {
		const sessionId = getCookie(event, 'sessionId');
		const session = getSessionFromMap(sessionId);

		if (!session) {
			setResponseStatus(event, 403)

			return { user: null, message: 'User is not authorized' };
		}

		setResponseStatus(event, 200)
		
		return { user: { email: session.email }, message: 'Data sent successfully' };
	} catch (e) {
    setResponseStatus(event, e.code || 400)

		return { message: e.message || 'Something went wrong' }
	}
});
