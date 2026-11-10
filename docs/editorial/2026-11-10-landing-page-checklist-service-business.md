# Editorial research: landing pages for service businesses

- Publication date: 2026-11-10, Africa/Lagos.
- Starting main commit / optimistic lease: `a8cfe6168540af139d7a2bec092b01c263a48afe`.
- Slug: `landing-page-checklist-service-business`.
- Primary keyword: **landing page checklist for service businesses**.
- Supporting intent: service landing page content; advert-to-page match; enquiry forms; mobile landing pages; lead quality and measurement.
- Byline: MoTechy (organisation), with no claimed human review or fabricated experience.

## Selection and duplicate prevention

Read latest main, `docs/EDITORIAL-WORKFLOW.md`, `docs/SEO-RESEARCH.md`, the article catalogue and editorial backlog before preparation. The catalogue contained 16 published articles, including eleven guides. Neither catalogue nor scheduled backlog recorded a publication for 10 November in Africa/Lagos. The last scheduled article was the software maintenance checklist on 3 November. This is the next queued marketing topic and preserves alternation. The 6 November run prepared local work but did not publish it; main and the backlog still show this topic queued. This run refreshes that work and uses the actual 10 November publication date.

The general digital-marketing guide briefly covers a service-page enquiry journey, while the ROI guide explains financial assessment. This article expands the distinct page-planning intent with original sample copy, annotated decisions and launch acceptance criteria. It does not repeat the financial worked example or maintenance schedule. Those two marketing guides provide related reading. Five queued topics remain, so expansion is not required for this run.

Reviewed current `src/data.mjs`: Digital Growth covers conversion-journey reviews and measurement planning. The body links to `/services#growth`; generated enquiry selection uses `Digital Growth`. No new service package, project claim or price is introduced.

## Search intent research

Initial discovery queries checked on **6 November 2026**:

- `landing page checklist service business Nigeria lead generation`
- `site:support.google.com/google-ads landing page experience relevant useful easy navigate`
- `site:w3.org WAI forms instructions labels notifications`
- `site:web.dev core web vitals LCP INP CLS thresholds`
- `site:support.google.com analytics generate_lead event recommended`
- `site:pexels.com/photo website wireframe sketches design notebook laptop` (image discovery only)

The main query, `landing page checklist service business Nigeria lead generation`, was repeated on **10 November 2026**. Its results continue to indicate the same page-planning intent. Representative topic-signal URLs from initial discovery (the Linestech and LeadWise results also appeared in the refreshed search):

- https://www.linestech.com.ng/blog/how-to-build-a-lead-generation-website/
- https://nglabs.cc/insights/google-ads-landing-page-checklist
- https://leadwisemarketing.com/blog/service-business-landing-page-checklist/
- https://elvisonunwa.com/guides/landing-page-design-nigeria

Results indicate interest in page content, service fit, forms, evidence, calls to action and lead measurement. They are not verified search volume, difficulty or ranking evidence. No Keyword Planner or account analytics dataset was available for this article. Competitor prose, conversion claims, prices and alleged keyword-volume figures are not adopted. The example, checklist and explanations were written independently from primary-source definitions and the business problem.

## Primary-source claim ledger

The following URLs were initially read on **2026-11-06** and reopened to check the supporting passages on **2026-11-10**. The claims below remain supported.

| Source                                                                                                   | Supported claim used                                                                                                                               | Limits                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Google Ads: optimise ads and landing pages](https://support.google.com/google-ads/answer/6238826?hl=en) | Match the landing page and call to action to the advert; provide useful content and straightforward navigation.                                    | No claim that one layout, field count or button guarantees conversion or a Quality Score. No source example or competitor copy reproduced.             |
| [W3C WAI: form labels](https://www.w3.org/WAI/tutorials/forms/labels/)                                   | Controls need descriptive labels associated with them.                                                                                             | No claim that visible labels alone establish complete accessibility. Suggested fields are original recommendations for the fictional offer.            |
| [W3C WAI: user notification](https://www.w3.org/WAI/tutorials/forms/notifications/)                      | Users need clear success/error feedback and instructions to resolve errors.                                                                        | Acceptance and delivery must be tested for the actual integration; no real enquiry is sent in this workflow.                                           |
| [web.dev: Web Vitals](https://web.dev/articles/vitals)                                                   | LCP, INP and CLS describe loading, responsiveness and stability; good thresholds are 2.5 seconds, 200 milliseconds and 0.1 at the 75th percentile. | Reference thresholds, not measured MoTechy results, conversion targets or ranking guarantees. Lab testing does not establish all real-user experience. |
| [Google Analytics: recommended events](https://support.google.com/analytics/answer/9267735?hl=en)        | `generate_lead` and separate qualification/outcome events describe different stages; recommended events require implementation.                    | No claim that the site already tracks these events, nor that a click proves delivery, qualification or sale.                                           |
| [Google Analytics: campaign URL parameters](https://support.google.com/analytics/answer/10917952?hl=en)  | Campaign parameters can identify referring campaigns in configured analytics.                                                                      | They do not independently verify offline sales. Consistent naming and excluding personal information are practical recommendations.                    |

Service scoping, fact approval, evidence placement, the brief, recipient ownership and enquiry-quality review are editorial recommendations. No unverified local preference, legal-compliance claim, market price, conversion statistic or SEO/AI-detector promise is included.

## Original example and supporting resource

The Port Harcourt office-cleaning business is fictional. Its headline, supporting text, quotation process and form expectation are sample wording, explicitly marked as requiring business confirmation before real use. No name, invented review, staff count, client logo, price or outcome is supplied. The table annotates why each element helps a visitor decide. The supporting HTML diagram asks four questions about relevance, scope, confidence and action; it is not a measured funnel or purported winning design.

`assets/resources/landing-page-review-checklist.md` is an original plain-text/Markdown planning and acceptance template. It includes a brief, fact/evidence checks, safe form tests, metric definitions and owner/status/evidence fields. It does not automate auditing, collect customer information or promise accessibility conformance. Its fictional copy matches the article.

## Cover provenance

- [Yan Krukau / Pexels — A Person Sketching on a Notebook](https://www.pexels.com/photo/a-person-sketching-on-a-notebook-7793668/), source page opened and downloaded image visually inspected on 6 November 2026. Source and downloaded image rechecked on 10 November 2026. Original dimensions: 6000 × 4000.
- [Pexels licence](https://www.pexels.com/license/), read 6 November and rechecked 10 November 2026: website and commercial use permitted, with no implied endorsement. Stock hands/workspace are not represented as MoTechy staff or client work.
- CDN-provided variants: WebP at 480 × 320, 800 × 533 and 1200 × 800; JPEG at 1200 × 800. Actual formats/dimensions checked; original colour/content retained.
- Alt text accurately describes hands sketching beside a laptop and tablet without claiming the sketch is an actual MoTechy design. Visible attribution and `docs/IMAGE-CREDITS.md` preserve provenance.

## Verification

Prepublication checks completed on 10 November 2026:

- `npm run check` passed: 29 generated pages, 109 content-hashed assets and all 13 tests. No failing or skipped tests.
- Article and Insights listing checked in Chromium at 320, 390, 768 and 1440 pixels. No page overflow, JavaScript errors, failed page requests or automated WCAG A/AA violations were detected. Screenshots of the cover, diagram, table and listing were inspected. Automated checks are not a claim of complete accessibility conformance.
- Keyboard contents navigation, horizontal table scrolling, no-JavaScript reading and 200% text were checked. The table scrolls within its labelled region on narrow screens.
- All six primary-source links and the cover-source link returned HTTP 200. Local related-reading links, the service anchor and the new download resolved. The native browser download matched the final source bytes, including the editable page-brief placeholders.
- Responsive images decoded, filled their containers and matched the source assets. Canonical, OG/Twitter image URLs, BlogPosting/BreadcrumbList schema, organisation byline and actual publication dates were verified.
- The article appears once in the 28-URL sitemap and once in the 17-item RSS feed. The feed date is `Mon, 09 Nov 2026 23:00:00 GMT`, equivalent to midnight on 10 November in Africa/Lagos. Draft exclusion remains covered by the existing tests.
- The listing opens the article, and the article's enquiry CTA selects `Digital Growth`. Browser requests other than GET were intercepted during this inspection; no real enquiry or external message was sent.

The release uses the recorded starting main commit as an optimistic lease with no force-push. Exact-commit Vercel production readiness, GitHub checks and live article/listing/sitemap/feed/download verification are performed after publication and reported in the task result; they cannot be certified in this prepublication commit.
