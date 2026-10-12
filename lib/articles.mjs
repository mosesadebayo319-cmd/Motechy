import { serviceOptions } from "./service-options.mjs";

// Publication metadata is explicit so drafts never appear in pages, feeds or search metadata.
export function publishedArticles(
  catalogue,
  today = new Intl.DateTimeFormat("en-CA", { timeZone: "Africa/Lagos" }).format(
    new Date(),
  ),
) {
  const slugs = new Set();
  for (const article of catalogue) {
    if (
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) ||
      slugs.has(article.slug)
    ) {
      throw Error(`Invalid or duplicate article slug: ${article.slug}`);
    }
    slugs.add(article.slug);
    if (!["draft", "published"].includes(article.status))
      throw Error(`Missing publication status: ${article.slug}`);
    if (article.status === "draft") continue;
    for (const key of [
      "title",
      "intro",
      "category",
      "group",
      "author",
      "format",
    ]) {
      if (typeof article[key] !== "string" || !article[key].trim())
        throw Error(`Missing ${key}: ${article.slug}`);
    }
    if (!["guide", "legacy"].includes(article.format))
      throw Error(`Unknown article format: ${article.slug}`);
    if (!["marketing", "software", "archive"].includes(article.group))
      throw Error(`Unknown article group: ${article.slug}`);
    if (article.format === "guide") {
      for (const key of ["publishedAt", "updatedAt"]) {
        const date = article[key];
        if (
          !/^\d{4}-\d{2}-\d{2}$/.test(date || "") ||
          !Number.isFinite(Date.parse(date)) ||
          new Date(date).toISOString().slice(0, 10) !== date ||
          date > today
        ) {
          throw Error(`Invalid or future ${key}: ${article.slug}`);
        }
      }
      if (article.updatedAt < article.publishedAt)
        throw Error(`Update predates publication: ${article.slug}`);
      if (!Array.isArray(article.related) || !article.service)
        throw Error(`Missing reading journey: ${article.slug}`);
      if (!serviceOptions.includes(article.service))
        throw Error(`Unknown enquiry service: ${article.slug}`);
    }
  }
  const published = catalogue.filter(
    (article) => article.status === "published",
  );
  const liveSlugs = new Set(published.map((article) => article.slug));
  for (const article of published) {
    for (const related of article.related || []) {
      if (related === article.slug || !liveSlugs.has(related))
        throw Error(`Invalid related article: ${article.slug} => ${related}`);
    }
  }
  return published.sort((a, b) =>
    (b.publishedAt || "").localeCompare(a.publishedAt || ""),
  );
}
