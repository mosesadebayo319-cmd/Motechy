# Publishing MoTechy Insights

The owner has authorised research, writing and publication to `mosesadebayo319-cmd/Motechy` and a recurring two-article weekly cadence. The planned ChatGPT automation runs on Tuesday and Friday mornings in `Africa/Lagos`. Its creation and enabled state must be confirmed in the automation service; this document alone is not a scheduler. There is no hidden GitHub cron or API subscription.

## One publication per run

1. Read the current GitHub `main`, this document, `docs/SEO-RESEARCH.md`, `src/content/articles.json`, `src/content/editorial-backlog.json`, and relevant current service/project information. Fetch or clone into a clean checkout; do not overwrite unrelated local edits. Record the exact starting commit.
2. Compute today's calendar date in `Africa/Lagos`. If the backlog records an automated publication today, verify its deployed URL and report it rather than publishing a duplicate. Prefer the next queued topic in the backlog; alternate marketing and software where feasible. Check existing articles for overlapping intent first. When the backlog is exhausted, research distinct questions and extend it.
3. Research current search intent and primary sources. Record the queries, access date, URLs and specific factual claims in `docs/editorial/YYYY-MM-DD-slug.md`. Treat search snippets and autocomplete as discovery signals, not measured search volume. Read the sources supporting claims. Recheck changing prices, platform policies and technical instructions.
4. Write one original, useful article. Answer the question early, explain decisions and tradeoffs, include a specific worked example or checklist, link to relevant MoTechy work/services and at least two related articles. Aim for the depth the question needs; roughly 1,200–1,800 words is a starting point, never a padding quota. Use natural Nigerian English and local context where it is meaningful. No keyword stuffing, near-duplicate city pages, copied competitor prose, fabricated experience, client outcomes, market statistics, prices or guarantees. Clearly mark hypothetical examples. AI-detector scores are not a quality target. Use `MoTechy` as the organisation byline unless an actual named author supplied/reviewed the piece; do not claim human review that did not happen.
5. Add `src/content/SLUG.html` as an HTML fragment, with no outer document or H1. Use descriptive H2 IDs for the automatic contents list. No scripts, inline styles or embedded untrusted HTML. Escape text and use source links. For wide tables, follow the existing accessible `.article-table` region pattern. A useful resource may go under `assets/resources/` and be linked with `download`; do not collect personal information for downloads.
6. Add the catalogue entry below. Set `status: "published"` only once content is ready to ship. Use actual publication dates, no future-dated public content. Keep unfinished entries as `draft`; drafts are excluded from all generated public outputs. Update the backlog item to `published` with `publishedAt` and `publicationMode: "scheduled"` in the same commit. When updating an existing article, preserve its `publishedAt` and change `updatedAt` only for a substantive revision.
7. Run `npm run check` with Node 22+. Inspect the built index, article, sitemap and `/feed.xml`. Test the article at mobile and desktop sizes, keyboard/contents navigation, downloadable resources, schema and the selected enquiry service. Check for page overflow and source links. Never send a real test enquiry. Fix failing checks before publishing.
8. Publish a focused commit to `main` using authenticated Git or the connected GitHub Git Data tools. Use an optimistic lease: update the ref only if `main` still equals the starting parent. With the MCP tools, use `github_update_ref` with `force: false` and `expected_sha` equal to that parent. If the branch advanced, refresh, preserve the other changes and rerun checks. Do not force-push or replace unrelated site changes.
9. GitHub's integration triggers Vercel automatically. Check the project's production deployment for the exact new commit and wait for READY, plus the GitHub checks. The current project is `motechy`, serving `https://motechy.vercel.app`; read the repository/deployment configuration for any later authorised domain migration. Do not change DNS, hosting, analytics or account settings as part of an article run.
10. Verify HTTP 200 and expected content on the live article, `/blog`, `/sitemap.xml`, `/feed.xml` and any new downloads. Confirm metadata, links and production rendering. Report the article URL, primary keyword, sources and test/deployment status in the task's ChatGPT result. If publishing or verification fails, report the precise blocker and keep the work recoverable; do not claim success or repeatedly create duplicate commits/articles. No email or social-media distribution is authorised by this workflow.

## Catalogue entry

```json
{
  "slug": "descriptive-topic-slug",
  "title": "A useful reader-facing title",
  "seoTitle": "A concise, descriptive search title",
  "intro": "A clear summary of what this article helps the reader decide or do.",
  "category": "SEO",
  "group": "marketing",
  "service": "Digital Growth",
  "related": ["seo-small-business-nigeria", "website-design-cost-nigeria"],
  "format": "guide",
  "status": "draft",
  "publishedAt": "YYYY-MM-DD",
  "updatedAt": "YYYY-MM-DD",
  "author": "MoTechy"
}
```

Use group `marketing` for marketing/social/SEO and `software` for websites/software. `archive` is for the original short notes. `service` must match `lib/service-options.mjs`. Related slugs must already be published and must not include the article itself. Change the sample dates before publication; the build rejects invalid, future and reversed guide dates.

The generator creates the index cards, reading time, article contents, byline/dates, related reading, service CTA, canonical/OG metadata, BlogPosting and BreadcrumbList schema, sitemap entry and RSS item. No manual generated-file edits are needed. The build erases and recreates `dist/`, so draft removal does not leave stale article files.

## Review the programme

Review Search Console query/page evidence and qualified enquiries when authorised data becomes available. Compare like periods, allow for indexing and demand changes, and distinguish visits from customers. Update useful existing guides as facts change. Publication frequency alone is not a ranking strategy. Maintain source notes and extend the backlog around real customer questions rather than producing repetitive filler.
