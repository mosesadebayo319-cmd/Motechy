import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { publishedArticles } from "../lib/articles.mjs";
import { escape } from "../src/templates.mjs";
import { serviceOptions } from "../lib/service-options.mjs";

const catalogue = JSON.parse(
  fs.readFileSync("src/content/articles.json", "utf8"),
);
const example = { ...catalogue.find((a) => a.format === "guide"), related: [] };

test("Only explicitly published articles are eligible for pages, search and feeds", () => {
  const draft = { slug: "unfinished-article", status: "draft" };
  assert.deepEqual(publishedArticles([draft, example], "2026-10-12"), [
    example,
  ]);
  assert.throws(
    () => publishedArticles([{ ...example, status: undefined }]),
    /publication status/,
  );
  assert.throws(() => publishedArticles([example, example]), /duplicate/);
  assert.throws(
    () => publishedArticles([{ ...example, related: [draft.slug] }, draft]),
    /related article/,
  );
});

test("Publication rejects invalid dates and broken enquiry destinations", () => {
  for (const date of ["2026-02-30", "2026-13-01", "2026-10-13", "tomorrow"]) {
    assert.throws(
      () =>
        publishedArticles([{ ...example, publishedAt: date }], "2026-10-12"),
      /publishedAt/,
    );
  }
  assert.throws(
    () =>
      publishedArticles(
        [{ ...example, updatedAt: "2026-10-11" }],
        "2026-10-12",
      ),
    /predates/,
  );
  assert.throws(
    () =>
      publishedArticles(
        [{ ...example, service: "Unknown service" }],
        "2026-10-12",
      ),
    /enquiry service/,
  );
});

test("Published guides expose consistent dates, schema, reading journeys and feed entries", () => {
  const published = publishedArticles(catalogue);
  const index = fs.readFileSync("dist/blog.html", "utf8");
  const feed = fs.readFileSync("dist/feed.xml", "utf8");
  const sitemap = fs.readFileSync("dist/sitemap.xml", "utf8");
  assert.equal((feed.match(/<item>/g) || []).length, published.length);
  for (const article of published) {
    const route = "/blog/" + article.slug;
    assert.ok(index.includes(`href="${route}"`));
    assert.ok(feed.includes(route + "</link>"));
    assert.ok(sitemap.includes(route + "</loc>"));
    const html = fs.readFileSync("dist" + route + ".html", "utf8");
    const schema = [
      ...html.matchAll(
        /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
      ),
    ].flatMap((m) => JSON.parse(m[1]));
    const posting = schema.find((s) => s["@type"] === "BlogPosting");
    assert.equal(posting.headline, article.title);
    assert.equal(posting.author.name, article.author);
    assert.equal(posting.datePublished, article.publishedAt);
    assert.equal(posting.dateModified, article.updatedAt);
    assert.ok(schema.find((s) => s["@type"] === "BreadcrumbList"));
    if (article.format !== "guide") continue;
    assert.ok(html.includes(`<time datetime="${article.publishedAt}">`));
    assert.ok(html.includes(`By ${escape(article.author)}`));
    assert.ok(serviceOptions.includes(article.service));
    assert.ok(
      html.includes("/contact?service=" + encodeURIComponent(article.service)),
    );
    const content = fs.readFileSync(
      "src/content/" + article.slug + ".html",
      "utf8",
    );
    const ids = [...content.matchAll(/<h2 id="([^"]+)">/g)].map((m) => m[1]);
    assert.ok(ids.length > 0);
    assert.equal(new Set(ids).size, ids.length);
    for (const id of ids) assert.ok(html.includes(`href="#${id}"`));
    for (const related of article.related)
      assert.ok(html.includes(`href="/blog/${related}"`));
  }
  for (const draft of catalogue.filter((a) => a.status === "draft")) {
    assert.ok(!fs.existsSync("dist/blog/" + draft.slug + ".html"));
    for (const output of [index, feed, sitemap])
      assert.ok(!output.includes("/blog/" + draft.slug));
  }
});
