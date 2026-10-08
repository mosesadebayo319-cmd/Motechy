# MoTechy custom-domain migration

The audit confirmed that `motechy.com` serves the existing WordPress installation. `motechy.vercel.app` serves the Vercel project. The apex and `www` names are already associated with the intended Vercel project, but their authoritative nameservers are `launch1.spaceship.net` and `launch2.spaceship.net`.

## Prepare

1. Export the current WordPress content and DNS zone, including MX, TXT and email records.
2. Inventory the old WordPress URLs using its sitemap and map useful pages to their replacement routes. Retain original article routes where content is still relevant.
3. Verify the tested Vercel release at `motechy.vercel.app`.

## DNS cutover

Use **the current required A and CNAME values shown for this exact project in Vercel’s Domains settings**. Do not copy historical or universal Vercel IP addresses. Update only website-related records at Spaceship; preserve mail and verification records. Changing records in Vercel DNS will not affect a domain whose authoritative nameservers remain at Spaceship.

Do not switch nameservers unless all necessary records have been migrated first. Verify both apex and www resolve correctly and HTTPS is ready.

## After DNS works

1. Set `SITE_URL=https://motechy.com` for the production project and rebuild. The generator updates all canonicals, social URLs, structured data, robots.txt and sitemap from this one value.
2. Configure www to redirect to the chosen apex domain, and redirect the Vercel production alias if desired. Never redirect the working Vercel domain to an unverified custom domain.
3. Add permanent redirects for the inventoried WordPress URLs.
4. Check key routes and `/api/contact`, then submit the canonical sitemap in Search Console.

The website implementation does not change external Spaceship DNS or delete the WordPress installation. Those changes require authenticated access to the authoritative DNS provider.
