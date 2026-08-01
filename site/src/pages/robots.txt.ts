import type { APIRoute } from 'astro';
import { isProduction, siteUrl } from '../lib/env';

export const GET: APIRoute = () => {
  const body = isProduction
    ? `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap-index.xml\n`
    : `User-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
