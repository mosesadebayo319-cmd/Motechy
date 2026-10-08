import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("dist");
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}
const pages = walk(root).filter((p) => p.endsWith(".html"));
function fileFor(url) {
  let p = path.join(root, url.pathname);
  if (url.pathname === "/") p = path.join(root, "index.html");
  else if (!path.extname(p)) p += ".html";
  return p;
}
test("Every generated page has one H1, shared navigation, clean metadata and no missing local targets", () => {
  assert.equal(pages.length, 14);
  for (const file of pages) {
    const html = fs.readFileSync(file, "utf8");
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
    assert.match(html, /<link rel="canonical" href="https:\/\/[^"?]+"/);
    assert.match(html, /href="\/blog"/);
    assert.doesNotMatch(html, /class="[^"]*reveal/);
    assert.doesNotMatch(html, /\sstyle="/);
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const ref = match[1];
      if (
        /^(https?:|mailto:|tel:|data:)/.test(ref) ||
        ref.startsWith("/api/") ||
        ref.startsWith("/_vercel/")
      )
        continue;
      const url = new URL(
        ref,
        "https://example.test/" + path.relative(root, file),
      );
      const target = fileFor(url);
      assert.ok(fs.existsSync(target), file + " => " + ref);
      if (url.hash) {
        const text = fs.readFileSync(target, "utf8");
        assert.ok(
          text.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          file + " => missing " + ref,
        );
      }
    }
  }
});
test("Public build contains only hashed assets and generated pages, never source or secrets", () => {
  const all = walk(root);
  for (const p of all) {
    assert.doesNotMatch(p, /\.env|node_modules|src\/|api\/|lib\//);
    if (p.includes("/assets/"))
      assert.match(path.basename(p), /\.[a-f0-9]{12}\./);
  }
  const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
  assert.doesNotMatch(sitemap, /\.html<|\/blog\/<|\/404</);
  assert.match(sitemap, /<loc>https:\/\/[^<]+\/contact<\/loc>/);
});
