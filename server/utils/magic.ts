import { randomBytes } from 'crypto';
import { TOKENS } from '../db/token'

const TTL = 15 * 60 * 1000; // 15 min

export function createMagicToken(email: string) {
  const token = randomBytes(16).toString('hex');

  TOKENS.set(token, { email, expiresAt: Date.now() + TTL });
  
	return token;
}

export function consumeMagicToken(token: string) {
  const entry = TOKENS.get(token);

  if (!entry) return null;
	
  if (Date.now() > entry.expiresAt) { 
		TOKENS.delete(token); 
		
		return null; 
	}
  
	TOKENS.delete(token);
  
	return entry.email;
}
