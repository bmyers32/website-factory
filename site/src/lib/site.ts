/**
 * Shared NAP/nav/hours constants — single source for index.astro,
 * privacy.astro, and 404.astro so phone/hours/service-area/license text
 * stay byte-identical everywhere they repeat (Definition of Done).
 * Sourced from CLIENT_SPEC-sunny-copperline.md §2/§7.
 */

export const legalName = 'Copperline Plumbing, LLC';
export const siteName = 'Copperline Plumbing';
export const phone = '(770) 555-0148';
/** E.164 — the one canonical tel: target. Never hardcode a second literal. */
export const phoneHref = '+17705550148';
export const email = 'office@copperlineplumbing.example';

export const hours = [
  { label: 'Mon–Fri', hours: '7:30 AM–5:30 PM' },
  { label: 'Sat', hours: 'Emergency calls only' },
  { label: 'Sun', hours: 'Closed' },
];

export const serviceArea =
  'Serving Tucker, Decatur, Chamblee, Brookhaven, and North Druid Hills — about 15 miles around Tucker, GA.';

export const trustLine = 'GA Master Plumber MP210448 · Licensed & Insured';

export const primaryNavItems = [
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
];

export const footerNavItems = [...primaryNavItems, { label: 'Privacy', href: '/privacy' }];
