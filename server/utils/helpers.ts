import type { H3Event } from 'h3';

export function getBaseUrl(event: H3Event) {
  // on Vercel, prefer x-forwarded-proto header
  const proto = (event.node.req.headers['x-forwarded-proto'] as string) || 'https';
  const host = event.node.req.headers['x-forwarded-host'] || event.node.req.headers.host;
	
  return `${proto}://${host}`;
}