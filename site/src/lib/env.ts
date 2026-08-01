/**
 * Single source of truth for the production/preview switch.
 * Set PUBLIC_DEPLOY_ENV=production only on the Cloudflare Pages "Production" environment.
 * Every other environment (Preview deploys, local dev, unset) is treated as preview and stays noindex.
 */
export const isProduction = import.meta.env.PUBLIC_DEPLOY_ENV === 'production';

export const siteUrl = (import.meta.env.PUBLIC_SITE_URL || 'https://example.invalid').replace(/\/$/, '');
