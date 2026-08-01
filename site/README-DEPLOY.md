# Cloudflare Pages — connection settings

For the operator to enter directly in the Cloudflare Pages dashboard when
connecting this repository. No credentials or secrets are handled here or by
the agent — Wrangler was not authenticated and no Cloudflare API token was
created.

This project is a **smoke-test fixture** (see `fixtures/copperline-fixture-spec.md`),
not a client site. It belongs on the operator's own sandbox Cloudflare account,
not a client-owned one — the client-owned-hosting rule in `CLAUDE.md` applies
starting with the first real paid build.

## Build configuration
| Setting | Value |
|---|---|
| Framework preset | Astro (or "None" — either works; the settings below are explicit either way) |
| Root directory | `site` |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `24` — also pinned in `site/.nvmrc` and `site/package.json` `engines.node`; set `NODE_VERSION=24` explicitly too (belt-and-suspenders, since preset detection of `.nvmrc` isn't always reliable) |
| Build system version | v2 (needed for Node 22+) |

## Environment variables (no secret values — none exist yet)
| Variable | Production environment | Preview environment |
|---|---|---|
| `PUBLIC_DEPLOY_ENV` | `production` | leave unset (defaults to preview/noindex) |
| `PUBLIC_SITE_URL` | the canonical production domain, once assigned | leave unset — falls back to a placeholder; harmless since preview is always noindex regardless of this value |
| `NODE_VERSION` | `24` | `24` |

`PUBLIC_DEPLOY_ENV` is the single switch that controls `<meta name="robots">`,
`robots.txt`, and whether the sitemap includes any pages (`src/lib/env.ts`,
`astro.config.mjs`, `src/pages/robots.txt.ts`). Getting Production wired to
`production` and Preview left as-is is the one setting that actually matters
for the noindex behavior — verify it live after connecting, per the operator's
instruction not to treat a local build as deployment evidence.

## Not yet configured (by design)
- No contact form handler, recipient, or third-party service — `ContactForm.astro`
  exists as an interface but is not wired into any page or backend.
- No custom domain/DNS — this is a `*.pages.dev` preview until a real client
  build assigns one.
