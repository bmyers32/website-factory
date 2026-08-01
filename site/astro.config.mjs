import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cloudflare Pages sets PUBLIC_DEPLOY_ENV per environment (see README-DEPLOY.md).
// Falls back to "preview" so a local/unset build never accidentally indexes.
const deployEnv = process.env.PUBLIC_DEPLOY_ENV === 'production' ? 'production' : 'preview';
const site = process.env.PUBLIC_SITE_URL || 'https://example.invalid';

export default defineConfig({
  output: 'static',
  site,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // Preview deploys are noindex; keep them out of the sitemap too.
      filter: () => deployEnv === 'production',
    }),
  ],
});
