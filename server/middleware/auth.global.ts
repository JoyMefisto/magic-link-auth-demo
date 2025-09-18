import { getCookie, sendRedirect } from 'h3';
import { getSessionFromMap } from '../utils/session';

export default defineEventHandler((event) => {
  const url = event.node.req.url || '/';

  const publicPaths = [
    '/login',
    '/api/auth/magic',
    '/api/auth/verify',
    '/api/courses'
  ];

  const sessionId = getCookie(event, 'sessionId');
  const session = sessionId ? getSessionFromMap(sessionId) : null;

  if(session) {
    event.context.user = { email: session.email };
  }

  if (url === '/' || publicPaths.some(p => url.startsWith(p))) return;


  if (!session) {
    return sendRedirect(event, '/login');
  }
});