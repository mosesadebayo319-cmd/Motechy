import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { softwarePage } from "../src/software.mjs";
import { caseStudies, caseStudyPage } from "../src/case-studies.mjs";
import { publishedArticles } from "../lib/articles.mjs";
import {
  articleMetrics,
  insightsIndex,
  guidePage,
  articleSchema,
  rssFeed,
} from "../src/insights.mjs";
import { layout, pageIntro, cta } from "../src/templates.mjs";
import {
  home,
  servicesPage,
  workPage,
  about,
  contact,
  legal,
} from "../src/pages.mjs";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "dist");
const base = (process.env.SITE_URL || "https://motechy.vercel.app").replace(
  /\/$/,
  "",
);
const parsed = new URL(base);
if (
  parsed.protocol !== "https:" ||
  parsed.pathname !== "/" ||
  parsed.search ||
  parsed.hash
)
  throw Error("SITE_URL must be an HTTPS origin");
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const cache = new Map();
function asset(src) {
  if (cache.has(src)) return cache.get(src);
  const data = fs.readFileSync(path.join(root, src));
  const ext = path.extname(src);
  const hash = crypto
    .createHash("sha256")
    .update(data)
    .digest("hex")
    .slice(0, 12);
  const name = `/assets/${path.basename(src, ext)}.${hash}${ext}`;
  fs.mkdirSync(path.join(out, "assets"), { recursive: true });
  fs.writeFileSync(path.join(out, name), data);
  cache.set(src, name);
  return name;
}
const articles = publishedArticles(
  JSON.parse(
    fs.readFileSync(path.join(root, "src/content/articles.json"), "utf8"),
  ),
).map((article) => ({
  ...article,
  ...articleMetrics(
    fs.readFileSync(
      path.join(root, "src/content", article.slug + ".html"),
      "utf8",
    ),
  ),
}));
const pages = [
  {
    path: "/",
    title: "MoTechy — Digital Marketing & Software Development in Nigeria",
    description:
      "Brand strategy, digital marketing and software development in Abuja, Nigeria. Websites, web applications and marketing for founders and growing businesses.",
    body: home(asset),
  },
  {
    path: "/services",
    title: "Services & Packages — MoTechy",
    description:
      "Explore branding, social media, advertising and software development. Marketing packages from ₦150,000/month; websites and software quoted by project.",
    body: servicesPage(),
  },
  {
    path: "/software-development",
    title: "Software Development in Abuja, Nigeria — MoTechy",
    description:
      "Websites, web applications and business tools by MoTechy. Explore ImpactDesk, ZeroToCode and more, then discuss your software project with our Abuja studio.",
    body: softwarePage(asset),
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Software development",
        serviceType: "Websites, web applications and business tools",
        url: base + "/software-development",
        provider: {
          "@type": "ProfessionalService",
          name: "MoTechy",
          url: base,
        },
        areaServed: { "@type": "Country", name: "Nigeria" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Software development",
            item: base + "/software-development",
          },
        ],
      },
    ],
  },
  {
    path: "/work",
    title: "Social Media Work & Software Case Studies — MoTechy",
    description:
      "Explore Moses Adebayo’s social media work for Heroes Help, MecuryX and MoTechy, plus detailed ImpactDesk and ZeroToCode software case studies.",
    body: workPage(asset),
  },
  {
    path: "/about",
    title: "About Moses Adebayo & MoTechy — Abuja",
    description:
      "Meet Moses Adebayo, founder of MoTechy. Brand strategy, digital marketing and software development for Nigerian businesses.",
    body: about(asset),
  },
  {
    path: "/contact",
    title: "Start a Conversation — MoTechy",
    description:
      "Tell MoTechy about your marketing, website or software project. Request a conversation or reach us on WhatsApp. Based in Abuja, working across Nigeria.",
    body: contact(),
  },
  {
    path: "/blog",
    title: "Marketing, SEO & Software Guides for Nigerian Businesses — MoTechy",
    description:
      "Practical guides to digital marketing, SEO, social media costs, websites and custom software. Free planning templates for Nigerian business owners.",
    body: insightsIndex(articles, asset),
  },
  {
    path: "/privacy",
    title: "Privacy Policy — MoTechy",
    description:
      "How MoTechy handles enquiries, website measurement and your personal information.",
    body: legal("privacy"),
  },
  {
    path: "/terms",
    title: "Terms of Use — MoTechy",
    description:
      "Website terms, service information and how MoTechy agrees project scopes and pricing.",
    body: legal("terms"),
  },
];
for (const study of caseStudies) {
  pages.push({
    path: study.path,
    title: `${study.name} — Software Case Study | MoTechy`,
    description: study.description,
    body: caseStudyPage(study, asset),
    structuredData: [
      {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: `${study.name} — Software case study`,
        description: study.summary,
        url: base + study.path,
        author: { "@type": "Person", name: "Moses Adebayo" },
        about: {
          "@type": "SoftwareApplication",
          name: study.name,
          url: study.preview,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: base + "/work",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: study.name,
            item: base + study.path,
          },
        ],
      },
    ],
  });
}
for (const a of articles) {
  let content = fs.readFileSync(
    path.join(root, "src/content", a.slug + ".html"),
    "utf8",
  );
  content = content
    .replace(/\sstyle="[^"]*"/g, "")
    .replace(/\breveal(?:-delay-\d)?\b/g, "")
    .replace(/class="btn btn-primary[^\"]*"/g, 'class="button"')
    .replace(
      /class="btn btn-(secondary|ghost)[^\"]*"/g,
      'class="button button-secondary"',
    )
    .replace(/Book a free strategy call/g, "Request a free strategy call")
    .replace(/Book a strategy call/g, "Request a strategy call");
  content = content
    .replace(/href="\/index\.html/g, 'href="/')
    .replace(/href="(\/(?:blog\/)?[^"#?]+)\.html/g, 'href="$1')
    .replace(/href="\/blog\/"/g, 'href="/blog"')
    .replace(/href="\/#pricing"/g, 'href="/services#packages"');
  content = content.replace(
    /(?:src|href)="(\/?assets\/[^"?#]+)"/g,
    (match, src) => match.replace(src, asset(src.replace(/^\//, ""))),
  );
  const closingIndex = content.search(/<div\s+class="cta-band"/);
  if (closingIndex >= 0) content = content.slice(0, closingIndex);
  // Keep legacy article content, with shared typography and valid, clean links.
  content = content
    .replace(
      /That single move outperforms a month of random aesthetics\./g,
      "Use that question to give the next week of content a clear direction.",
    )
    .replace(
      /Reversing this ratio consistently damages trust — especially with sceptical Nigerian buyers who’ve seen too many empty promises online\./g,
      "Treat this as a starting point and adjust it to your audience and results.",
    )
    .replace(
      /Brands that treat every post as a business decision outperform brands that treat posting as a checkbox\./g,
      "A clear purpose makes each post easier to plan and evaluate.",
    );
  pages.push({
    path: "/blog/" + a.slug,
    title: (a.seoTitle || a.title).replace(/<[^>]+>/g, "") + " — MoTechy",
    description: a.intro.replace(/<[^>]+>/g, ""),
    body:
      a.format === "guide"
        ? guidePage(a, content, articles, asset)
        : `<div class="article-page">${pageIntro("Insights · By Moses Adebayo", a.title, a.intro)}<article class="article-body">${content}</article></div>${cta()}`,
    structuredData: articleSchema(
      a,
      base,
      asset(a.cover?.share || "assets/images/og-image.jpg"),
    ),
    socialImage: a.cover?.share,
    socialImageAlt: a.cover?.alt,
    socialImageWidth: a.cover?.width,
    socialImageHeight: a.cover?.height,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
  });
}
pages.push({
  path: "/404",
  title: "Page not found — MoTechy",
  description: "Find your way back to MoTechy.",
  noindex: true,
  body: '<section class="not-found container"><p class="eyebrow">404 / Page not found</p><h1>Let’s get you<br>back on track.</h1><p>The page may have moved. Explore our services or return home.</p><a class="button" href="/">Back to home</a></section>',
});
for (const p of pages) {
  const dest = path.join(
    out,
    p.path === "/" ? "index.html" : p.path.slice(1) + ".html",
  );
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(
    dest,
    layout({
      ...p,
      asset,
      base,
      analytics: process.env.ANALYTICS_ENABLED === "true",
    }),
  );
}
fs.writeFileSync(
  path.join(out, "sitemap.xml"),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    pages
      .filter((p) => !p.noindex)
      .map(
        (p) =>
          `  <url><loc>${base + p.path}</loc>${p.updatedAt ? `<lastmod>${p.updatedAt}</lastmod>` : ""}</url>`,
      )
      .join("\n") +
    "\n</urlset>\n",
);
fs.writeFileSync(path.join(out, "feed.xml"), rssFeed(articles, base));
fs.writeFileSync(
  path.join(out, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${base}/sitemap.xml\n`,
);
fs.writeFileSync(
  path.join(out, "build-manifest.json"),
  JSON.stringify(
    { routes: pages.map((p) => p.path), assets: Object.fromEntries(cache) },
    null,
    2,
  ),
);
console.log(
  `Built ${pages.length} pages and ${cache.size} content-hashed assets for ${base}`,
);
