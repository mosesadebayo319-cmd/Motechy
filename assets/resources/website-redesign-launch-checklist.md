# Website redesign launch checklist

MoTechy Insights · 23 October 2026

Companion guide: https://motechy.vercel.app/blog/website-redesign-seo-checklist

Copy this Markdown/text file and replace the examples. It is a planning and acceptance record, not executable redirect configuration. No checks have been performed for your business. Do not put passwords, API keys or customer personal information in this document.

## Release ownership

- Business/site:
- Scope of changes:
- Changes explicitly outside this release (including domain, email or hosting work):
- Release owner and technical contact:
- Planned publication date/time/time zone:
- Previous release or recoverable backup reference:
- Recovery procedure, responsible person and decision trigger:
- Current Search Console/analytics access and baseline period, or "not available":

## Original illustrative URL map

This is a hypothetical Lagos print business, not a MoTechy client or actual website. Replace every row with an entry from your own inventory. Proposed expectations are not observed test results.

| Old path                     | Decision                                     | Destination                  | Expected result                                        | Observed result/evidence | Owner |
| ---------------------------- | -------------------------------------------- | ---------------------------- | ------------------------------------------------------ | ------------------------ | ----- |
| /printing.html               | Move permanently                             | /services/business-printing  | 301 or 308 to relevant page returning 200              |                          |       |
| /flyers.html                 | Move permanently                             | /services/flyer-printing     | 301 or 308 to flyer details returning 200              |                          |       |
| /contact                     | Keep                                         | /contact                     | 200; correct contact information and service selection |                          |       |
| /downloads/artwork-guide.pdf | Keep and review                              | /downloads/artwork-guide.pdf | 200; actual PDF opens with current instructions        |                          |       |
| /offers/old-promo            | Retire if expired with no useful replacement | None                         | 404 or 410, as appropriate; useful navigation          |                          |       |

Add all current URLs, downloads and relevant variants. Do not redirect unrelated retired content to the homepage. For each moved address, record the initial HTTP response, Location/destination, final response and content check. Agree any consolidation before implementing it.

## Before development replaces the old site

- [ ] Record URLs from the sitemap, content system, crawl and known customer links.
- [ ] Include brochures, QR codes, social/ad destinations and downloads.
- [ ] Save page purpose, title, heading, important content and next action.
- [ ] Record available search and enquiry evidence with date ranges and filters.
- [ ] Keep a recoverable site/configuration copy and document recovery limitations.
- [ ] Agree keep/move/merge/retire decisions and assign owners.

## Preview acceptance

- [ ] Preview access and search exclusion are intentional; noindex is not privacy.
- [ ] Actual service details, artwork requirements and delivery information are confirmed by the business.
- [ ] Mapped redirects reach the relevant destination without loops or unnecessary hops.
- [ ] Internal links and canonical signals use the intended addresses.
- [ ] Structured data describes visible, accurate page content.
- [ ] Phone and desktop reading, keyboard navigation and larger text work.
- [ ] Images, brochure/PDF links and other downloads open correctly.
- [ ] The enquiry route selects the intended service.
- [ ] Form accepted/rejected/failed paths pass in a controlled test environment using a test destination or simulated delivery. No dummy messages reach the real sales inbox.

## Production release decision

- [ ] Record the exact release/version and publication time.
- [ ] Check key old URLs on production, including customer-facing saved links.
- [ ] Confirm intended public pages are accessible with correct index/crawl settings.
- [ ] Confirm production canonical URLs and sitemap contents; exclude preview/retired URLs.
- [ ] Verify mobile reading, downloads, contact details and service selection without sending a real test enquiry.
- [ ] Check existing measurement is functioning without collecting unnecessary personal data.
- [ ] Submit the updated sitemap only through an authorised Search Console property.
- [ ] Record remaining issues, owners and whether they block launch.

Decision (hold/release/recover):

Evidence references:

Person responsible and actual date/time:

## Follow-up

- [ ] Check errors and enquiry handling during the first working days.
- [ ] Compare like periods; record campaigns, holidays and other demand changes.
- [ ] Use URL Inspection to separate indexed information from the live page.
- [ ] Investigate URL/content/indexing failures separately from measurement or enquiry-delivery failures.
- [ ] Assign continuing ownership of redirects; Google's site-move guidance recommends keeping them as long as possible, generally at least one year.

Review date and findings:

Next actions and owners:

Technical sources and their limits are linked in the companion guide. Passing this checklist does not guarantee indexing or rankings.
