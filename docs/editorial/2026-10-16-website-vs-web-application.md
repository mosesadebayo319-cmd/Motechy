# Editorial research: website versus web application

- Research/access date: **16 October 2026**, Africa/Lagos.
- Starting `main`: `c5bbb139b003c5d3e41041c893efd218836c9e2e`.
- Target keyword: **website vs web application**.
- Article: `/blog/website-vs-web-application`.
- Audience: Nigerian business owners comparing website and software proposals.
- Organisation byline: **MoTechy**. No human-review or named-author claim.

## Queue selection and duplicate check

Read the latest main branch and the editorial workflow, SEO research, catalogue and backlog at the starting commit. There was no article or scheduled publication dated 2026-10-16. The previous scheduled article was the marketing guide `google-business-profile-nigeria`, published 2026-10-13. Select the next queued software topic to maintain the alternating cadence. Ten distinct queued topics remain, so no backlog extension is needed.

The existing custom-software guide addresses build/buy decisions and a project brief; the website-cost guide addresses quote scope and costs. This article answers the narrower website-versus-application question, with an original booking example showing how operational responsibilities change. It links to those guides for the adjacent decisions rather than repeating their full treatment.

## Search intent and evidence limits

Live queries on the research date:

- `website vs web application Nigerian business difference when choose`
- `website vs web application login dynamic interactive difference`
- Image discovery: `site:pexels.com/photo "wireframe" "design" laptop`

Results included definition/comparison pages and Nigerian business guidance about websites, apps and upgrading an existing site. Examples used as discovery signals: [LinesTech's website/mobile-app comparison](https://www.linestech.com.ng/blog/website-vs-mobile-app-for-nigerian-businesses/), [its website-to-app discussion](https://www.linestech.com.ng/blog/how-to-turn-a-website-into-a-web-app/), and [CyberDefence's comparison](https://cyberdefence.org.in/blog/website-vs-web-application/). Their prose, cost claims and recommendations were not copied or used as technical authority.

The editorial opportunity is a practical decision guide rather than a rigid static-versus-dynamic definition. Search results indicate candidate intent, not measured demand. No Nigeria-targeted volume, difficulty or ranking data was available; no such figures are claimed. No AI-detector target or ranking outcome is promised.

## Primary sources and supported claims

All sources below were accessed on **2026-10-16**, with the relevant sections read.

| Source                                                                                                         | Supported claims used                                                                                                           |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Introduction | Static responses, dynamic responses and server-side processing describe implementation, not the commercial scope by themselves. |
| https://www.w3.org/WAI/tutorials/forms/                                                                        | Accessible labels, instructions and success/error feedback apply to website and application forms.                              |
| https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html                                  | Identity differs from authorization; least privilege, default denial and per-request checks.                                    |
| https://paystack.com/docs/payments/verify-payments/                                                            | Server-side transaction verification, transaction status versus API-call status, and avoiding duplicate fulfilment.             |
| https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps                                              | Installation and offline capabilities require implementation; browser/device support must be considered.                        |
| https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics                   | Google processes JavaScript content through crawling, rendering and indexing; public content and links must be accessible.      |

## MoTechy project evidence and original contribution

Read `src/software-projects.mjs`, `src/case-studies.mjs`, `src/data.mjs`, `docs/SOFTWARE-PROJECTS.md` and `docs/PORTFOLIO-SOURCES.md` from the current checkout matching main. These establish the company site's enquiry scope, ZeroToCode's browser-local learning progress, and ImpactDesk's separation of public pages from its pilot workspace. The case-study notes document their source verification and limitations. No private workspace was exercised in this article workflow, and the article claims no adoption, client outcome or backend audit.

The web research tool returned internal errors for the two public project previews. Separate TLS-verified HTTPS requests returned 200 for both `https://impactdesk.vercel.app` and `https://zerotocode-teal.vercel.app`, with the expected product titles. Public preview availability does not validate private workflows. Article project links point to MoTechy's documented case studies, which remain the source for the feature descriptions.

The Abuja training business, assumed 12-seat capacity, four-step diagram and acceptance scenarios are original illustrative examples. They do not describe a client or measured result. The distinction between payment and booking state is practical design advice; hold periods and cancellation rules are left to the business. No provider fee, project price or fixed delivery estimate is invented.

- Related reading: `/blog/website-design-cost-nigeria` and `/blog/custom-software-development-small-business`.
- Relevant service: `/software-development`; catalogue enquiry value `Software Development` matches the existing service options.
- Original download: `assets/resources/website-or-web-app-decision-sheet.md`, covering the job, records, responsibilities, integrations, exceptions and acceptance evidence. No signup required.
- Cover: [Jakub Zerdzicki / Pexels](https://www.pexels.com/photo/creative-workspace-with-notebooks-and-monitors-38888711/); [licence](https://www.pexels.com/license/) checked on the access date. Source, local variants and association limits recorded in `docs/IMAGE-CREDITS.md`.

## Release validation

Pre-publication checks passed on 16 October 2026: `npm run check` built 24 pages and passed all 13 tests. The guide and listing passed browser checks at 320, 390, 768 and 1440 pixels with no page overflow or automated WCAG A/AA violations. Images decoded; the table scrolled within its region; keyboard contents navigation, no-JavaScript reading and 200% text enlargement passed. Desktop/mobile screenshots were inspected. All seven article source/photo links returned 200. The native browser download matched the source file, schema/sharing metadata/sitemap/RSS were consistent, and the enquiry selected Software Development. No real enquiry was sent.

The release keeps the article, catalogue, backlog, research, credits and resource in one focused commit. It uses an optimistic lease against the recorded starting main, preserves concurrent work and checks exact-commit production readiness and live outputs before reporting publication. Local checks alone do not establish production success.
