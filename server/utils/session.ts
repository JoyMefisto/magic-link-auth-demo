import { v4 as uuidv4 } from 'uuid';
import { SESSIONS } from '../db/session';

const TTL = 24 * 60 * 60 * 1000; // 24h

export function createSession(email: string) {
  const id = uuidv4();
  
	SESSIONS.set(id, { email, expiresAt: Date.now() + TTL });
  
	return id;
}

export function getSessionFromMap(id?: string | null) {
  if (!id) return null;
  
	const s = SESSIONS.get(id);

	if (!s || Date.now() > s.expiresAt) { 
		SESSIONS.delete(id); return null; 
	}
  
	return s;
}

export function destroySession(id?: string | null) {
  if (id) SESSIONS.delete(id);
}

export function assignCourse(id: string, courseId: string) {
  const s = SESSIONS.get(id);
  
	if (s) SESSIONS.set(id, { ...s, courseId });
}
