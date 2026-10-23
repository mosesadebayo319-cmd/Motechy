# Editorial research: website redesign SEO checklist

- Research/access date: **23 October 2026**, Africa/Lagos.
- Starting `main`: `5490b69537ffd31b801c43e240c544fbb858aea1`.
- Target keyword: **website redesign SEO checklist**.
- Article: `/blog/website-redesign-seo-checklist`.
- Audience: Nigerian business owners planning a rebuild with a developer.
- Organisation byline: **MoTechy**. No named-author or human-review claim.

## Queue selection and duplicate check

Read latest main, the editorial workflow, SEO research, article catalogue and backlog at the starting commit. Neither catalogue nor scheduled records contained a publication dated 2026-10-23. The preceding scheduled article was marketing: `social-media-content-calendar-small-business`, published 2026-10-20. Select the next queued software topic to alternate the categories. Eight distinct queued topics remain after this release, so an extension is unnecessary.

The existing SEO guide covers ongoing search foundations. The website-cost guide covers scope, pricing comparisons and procurement; the website-versus-application guide covers the type of product needed. This article addresses a separate operational decision: accepting and releasing a redesign without overlooking existing addresses, downloads or enquiry journeys. Read those relevant sections and the current software service details in `src/data.mjs`; catalogue service `Software Development` matches `lib/service-options.mjs`.

## Search intent and evidence limits

Live searches on the research date:

- `website redesign SEO checklist Nigeria preserve rankings redirects`
- `site:developers.google.com/search site move URL changes redirects checklist`
- Image discovery: `site:pexels.com/photo website wireframe design planning desk`

Results signal checklist and risk-reduction intent around redirects, existing content, indexing and launch monitoring. Discovery examples included [ExtCafe](https://www.extcafe.com/blog/website-redesign-without-losing-seo/), [Website Growth Audit](https://www.websitegrowthaudit.co.uk/guides/website-redesign-seo-checklist) and [CMT Web](https://cmtweb.com/blog/website-redesign-seo-checklist). Their prose, statistics, experience claims and promises to retain rankings were not adopted. Primary documentation supplies technical claims; the business example and acceptance decisions are original.

No keyword-volume, difficulty, Search Console or client-analytics dataset was available. Search results and autocomplete are topic signals, not measured demand. Neither ranking preservation nor an AI-detector result is promised.

## Sources, access dates and supported claims

All sources below were accessed on **2026-10-23**, with the relevant passages read.

| Source                                                                                 | Supported claims and limits                                                                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes | URL changes differ from a purely visual change; separate major changes where possible; path-only moves do not require Change of Address; avoid irrelevant homepage redirects; rankings may fluctuate; retain redirects as long as possible, generally at least a year. No fixed recovery period is promised. |
| https://developers.google.com/search/docs/crawling-indexing/301-redirects              | Permanent server-side redirects are recommended where possible; 301 and 308 represent permanent moves. No universal server configuration or CMS interface is invented.                                                                                                                                       |
| https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404                 | A 404 means the resource is missing; 410 explicitly represents permanent removal. The article distinguishes actual HTTP responses from a visual error message.                                                                                                                                               |
| https://support.google.com/webmasters/answer/7576553?hl=en                             | Search Console Performance distinguishes clicks, impressions, CTR and average position; date ranges and dimensions can be selected. No actual account data was accessed or fabricated.                                                                                                                       |
| https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls | Canonical signals indicate a preferred version among duplicate/similar pages and should be consistent. They are not a user-facing redirect or a guarantee of Google's selection.                                                                                                                             |
| https://developers.google.com/search/docs/crawling-indexing/block-indexing             | noindex is available through HTML or a response header; a crawler must access the resource to see it; robots.txt blocking may prevent that. A public noindex page is not private.                                                                                                                            |
| https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap     | Use fully qualified URLs and intended canonical versions in a sitemap. Sitemap inclusion/submission does not establish indexing.                                                                                                                                                                             |
| https://support.google.com/webmasters/answer/9012289?hl=en                             | URL Inspection distinguishes indexed data from a live test; a positive live test does not guarantee indexing. No claim that MoTechy's Search Console property was inspected or a sitemap submitted in this workflow.                                                                                         |
| https://www.w3.org/WAI/tutorials/forms/                                                | Labels, instructions, validation and clear success/error feedback. Controlled delivery simulation is our engineering recommendation; no full accessibility-compliance claim.                                                                                                                                 |

Additional technical cross-check: the older Google Search Central HTTP-error URL redirected to https://developers.google.com/crawling/docs/troubleshooting/http-status-codes. Read the current destination, which distinguishes success, redirects, client errors and server errors, and notes that 2xx responses do not guarantee indexing. The article links to the narrower MDN explanation for missing/gone responses rather than the obsolete documentation path. The operational checklist does not depend on a crawler redirect-hop limit.

## Original worked example and assets

The Lagos print business is explicitly hypothetical. Its five example URL decisions, saved WhatsApp/QR-code journey, approval questions and troubleshooting branches are original. The paths are displayed as code, not broken links to imaginary live pages. No client results, prices, statistics or delivery promises are invented. Specific product/delivery details are left for the business to confirm.

The download `assets/resources/website-redesign-launch-checklist.md` is editable Markdown/text, with example mapping, blank evidence/ownership fields and unchecked acceptance items. It is not executable redirect configuration and claims no completed checks for the reader. Controlled form tests must use a test destination or simulated delivery, without sending dummy messages into real sales workflows.

Related reading: `/blog/seo-small-business-nigeria` and `/blog/website-design-cost-nigeria`. Relevant service: `/software-development`, with `Software Development` enquiry preselection. Domain, hosting and email work are explicitly separate scope decisions; no such settings are changed in this article release.

Cover: [Jakub Zerdzicki — Hands Writing Notes for Coding Project at Desk](https://www.pexels.com/photo/hands-writing-notes-for-coding-project-at-desk-34212963/), under the [Pexels licence](https://www.pexels.com/license/), accessed 2026-10-23. The licensed photograph illustrates technical planning, not MoTechy's staff or a client project. Credits and responsive variants are recorded in `docs/IMAGE-CREDITS.md`. The supporting customer-journey diagram is original semantic HTML with real text.

## Release validation

Pre-publication checks passed on 23 October 2026: `npm run check` built 26 pages and 94 content-hashed assets and passed all 13 tests. The guide and listing passed browser checks at 320, 390, 768 and 1440 pixels, with no page overflow or automated WCAG A/AA violations. Desktop/mobile screenshots were inspected; the URL table scrolls within its region. Images decoded and filled their containers. Keyboard contents navigation, no-JavaScript reading and 200% text enlargement passed.

All ten article source/photo links returned 200. The native browser download matched the source file. The listing link opened the new guide, and the enquiry selected Software Development. Article/breadcrumb schema, organisation byline, publication dates, canonical/share metadata, the single sitemap entry and RSS item were consistent. No real enquiry was sent.

The article, catalogue, backlog, resource, research and image records ship in one focused commit, using an optimistic lease against the starting main without force-pushing. Exact-commit Vercel production readiness, GitHub checks and live outputs must pass before reporting publication. Local checks alone do not establish production success.
