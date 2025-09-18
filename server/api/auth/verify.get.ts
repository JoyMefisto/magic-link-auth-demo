import { defineEventHandler, getQuery, setCookie, sendRedirect } from 'h3';
import { consumeMagicToken } from '../../utils/magic';
import { createSession } from '../../utils/session';

export default defineEventHandler(async (event) => {
  try {
    const { token, next } = getQuery(event) as { token?: string; next?: string; };
    
    if (!token) {
      return sendRedirect(event, '/login?error=invalid_token');
    }

    const userEmail = consumeMagicToken(token);
    
    if (!userEmail) {
      return sendRedirect(event, '/login?error=expired_or_invalid');
    }

    // create session
    const sessionId = createSession(userEmail);

    // set cookie — HttpOnly, Secure, SameSite
    setCookie(event, 'sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // works on https (Vercel)
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // seconds = 1 day
    });

    const redirectTo = typeof next === 'string' && next ? next : '/';
    
    return sendRedirect(event, redirectTo);
  } catch (e) {
    setResponseStatus(event, e.code || 400)

    return { message: 'Something went wrong' };
  }
});
