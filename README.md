# MoTechy

MoTechy’s marketing website: a small, dependency-free static build with a Vercel enquiry endpoint.

## Development

Node.js 22 or newer is required; Vercel is configured for Node.js 24.

```sh
npm run build
npm run dev
```

Open http://localhost:8080. `npm run build` generates `dist/`. Rebuild after editing source files.

```sh
npm run check
```

This builds the site and checks links, metadata, asset versioning, enquiry validation and provider failure handling. The same checks run in GitHub Actions and in Vercel’s build command.

## Source layout

- `src/data.mjs`: company information, service descriptions, packages and selected work.
- `src/pages.mjs`: page content and layouts.
- `src/templates.mjs`: shared navigation, footer and metadata.
- `src/content/`: the existing long-form articles.
- `css/styles.css`: responsive visual system.
- `js/main.js`: accessible menu, form enhancement and analytics events.
- `api/contact.js`: server-side enquiry endpoint.
- `lib/contact.mjs`: bounded input validation and FormSubmit relay.
- `scripts/build.mjs`: static generator, clean canonicals, sitemap and content-hashed assets.
- `tests/`: automated checks.

There are no framework dependencies or client-side rendering requirements. Native HTML navigation, FAQ disclosure elements and form submission work without JavaScript. The build publishes only generated pages and used assets; source files and unused reference artwork are not published.

## Enquiries

The form sends to `/api/contact`, which validates input, checks the request origin, rejects a filled honeypot, and sends the enquiry through the existing FormSubmit account. Success requires both an HTTP success and explicit provider acceptance. Timeouts, invalid responses and rejected delivery produce a recoverable error. No enquiry or contact details are written to localStorage or logs. WhatsApp remains an explicit action.

The existing FormSubmit recipient must be activated and able to receive email. An accepted provider request is not a guarantee of inbox delivery. Browser and endpoint tests use intercepted requests; they do not send test enquiries to the business.

This implementation does not add a CRM or database. The email relay is the current delivery dependency. If traffic or abuse warrants it, add provider-backed rate limiting or a verified challenge and durable lead storage; do not use in-memory serverless state as a database or rate limit.

## Deployment configuration

`vercel.json` builds with `npm run check`, publishes `dist/`, and deploys the `api/contact.js` function. Assets have content-derived filenames, so immutable caching is safe. Existing `.html` routes redirect through Vercel clean URLs; old article paths have permanent redirects.

Optional environment variables are documented in `.env.example`:

- `SITE_URL`: canonical origin, currently `https://motechy.vercel.app`. Change only after the custom domain serves the new site.
- `FORM_EMAIL`: existing recipient, defaults to `motechy123@gmail.com`.
- `ANALYTICS_ENABLED`: enables Vercel Web Analytics integration. Do not include form content in analytics events.

Analytics events distinguish `enquiry_accepted`, `enquiry_error`, `whatsapp_click`, `phone_click`, and `email_click`. Global Privacy Control and Do Not Track opt out. URLs sent to analytics are stripped of query strings and fragments. Only a bounded `utm_source` label is retained for the current browser session; no personal form values are tracked.

## Content integrity

The public work collection uses MoTechy-branded examples from the existing repository. Images carrying unrelated agency branding are retained in the repository as original reference assets but are excluded from the build. No client performance statistics, third-party endorsements or fabricated testimonials are published. Add verified case studies with permission when source material is available.

## Domain migration

See `docs/DOMAIN-MIGRATION.md`. Domain registration and authoritative DNS remain with Spaceship. Adding the domain to Vercel alone does not change its current WordPress destination.
