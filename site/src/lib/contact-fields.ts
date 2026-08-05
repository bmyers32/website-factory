/**
 * Single source of truth for the contact form's field set (CLIENT_SPEC §7).
 * Both the client-rendered form (ContactForm.astro -> FormField.astro) and
 * the server-side handler (functions/api/contact.ts) import this exact
 * array, so required/maxLength/type constraints cannot drift between the
 * two enforcement points.
 */

export interface ContactFieldDef {
  name: string;
  label: string;
  control: 'input' | 'textarea';
  /** Only meaningful when control === 'input'. */
  type?: 'text' | 'tel' | 'email';
  required: boolean;
  autocomplete?: string;
  maxLength: number;
  /** Only meaningful when control === 'input'. */
  inputMode?: 'text' | 'tel' | 'email' | 'numeric';
}

export const contactFields: ContactFieldDef[] = [
  {
    name: 'name',
    label: 'Name',
    control: 'input',
    type: 'text',
    required: true,
    autocomplete: 'name',
    maxLength: 100,
  },
  {
    name: 'phone',
    label: 'Phone',
    control: 'input',
    type: 'tel',
    required: true,
    autocomplete: 'tel',
    maxLength: 30,
    inputMode: 'tel',
  },
  {
    name: 'neighborhood',
    label: 'Neighborhood',
    control: 'input',
    type: 'text',
    required: false,
    maxLength: 100,
  },
  {
    name: 'message',
    label: "What's going on?",
    control: 'textarea',
    required: true,
    maxLength: 2000,
  },
];

/** Honeypot field name — never listed above, never rendered as a real field. */
export const honeypotFieldName = 'company';
