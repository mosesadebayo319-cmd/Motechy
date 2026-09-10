# MoTechy Website

Full marketing website for **MoTechy** — digital growth, branding, and ads for Nigerian founders and SMEs.

## Stack

- Static HTML / CSS / JavaScript (no build step)
- Brand assets from MoTechy brand guidelines
- Contact form → validation + localStorage lead save + WhatsApp handoff

## Pages

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero, services, process, work, pricing, FAQ, CTA |
| Services | `services.html` | Full service catalogue + content pillars |
| About | `about.html` | Story, values, founder (Moses Adebayo) |
| Contact | `contact.html` | Contact info + working enquiry form |

## Run locally

From this folder:

```bash
# Python
python3 -m http.server 8080

# or Node
npx serve -l 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Brand

- **Colours:** MoTechy Blue `#2563EB`, dark `#111827`, green accent `#22C55E`
- **Type:** Poppins
- **Phone / WhatsApp:** +234 812 432 8229
- **Email:** motechy123@gmail.com
- **Instagram:** [@motechy_](https://instagram.com/motechy_)
- **Facebook:** [MoTechy](https://www.facebook.com/61583165513851)
- **LinkedIn:** [Moses Adebayo](https://www.linkedin.com/in/ma-digital-marketer448899)
- **Pinterest:** [motechy123](https://www.pinterest.com/motechy123/social-media-designs/)
- **Tagline:** Digital Growth · Branding · Ads

## Deploy (live on Vercel)

**Production URL:** https://motechy.vercel.app  
**Project:** `motechy` (account: mosesadebayo319-cmd)  
**Custom domains added:** `motechy.com`, `www.motechy.com`

### Redeploy after changes

```bash
export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh"
cd ~/motechy
vercel deploy --prod --yes
```

### Point motechy.com at Vercel (DNS at Spaceship)

Your domain registrar/DNS is currently **Spaceship** (`launch1.spaceship.net` / `launch2.spaceship.net`).  
Until DNS is updated, SSL for the custom domain cannot issue and the old WordPress site will still show.

**Recommended records** (keep existing nameservers at Spaceship):

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **A** | `@` (apex / motechy.com) | `216.198.79.1` | Auto / 300 |
| **A** | `@` (apex / motechy.com) | `64.29.17.1` | Auto / 300 |
| **CNAME** | `www` | `867714369acb1c0e.vercel-dns-017.com` | Auto / 300 |

(If Spaceship only allows one A record on `@`, use `76.76.21.21` as a fallback — Vercel accepts that too.)

1. Log in to [Spaceship](https://www.spaceship.com/) → Domains → **motechy.com** → DNS
2. Remove or replace the existing A/CNAME records that point to the current WordPress host
3. Add the A + CNAME records above
4. Wait for propagation (often 5–30 minutes; can take up to 48h)
5. Vercel will auto-verify and issue HTTPS certificates

**Optional alternative:** switch nameservers to `ns1.vercel-dns.com` and `ns2.vercel-dns.com` (full DNS managed by Vercel).

> **Warning:** Changing DNS will replace the current WordPress site at motechy.com with this new static site.
