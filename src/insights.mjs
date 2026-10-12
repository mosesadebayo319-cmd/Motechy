import { button, cta, escape, pageIntro } from "./templates.mjs";
import { coverImage, guideCover } from "./article-media.mjs";

export function articleMetrics(content) {
  const text = content.replace(/<[^>]*>/g, " ").trim();
  const wordCount = text ? text.split(/\s+/u).length : 0;
  return { wordCount, readingMinutes: Math.max(1, Math.ceil(wordCount / 220)) };
}

export function displayDate(value) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(value + "T12:00:00Z"));
}

function articleCard(article, asset, level = "h3") {
  return `<article class="insight-card">${article.cover ? `<a class="insight-card-image" href="/blog/${article.slug}" tabindex="-1" aria-hidden="true">${coverImage(article.cover, asset, { decorative: true })}</a>` : ""}<p class="eyebrow">${escape(article.category)}</p><${level}><a href="/blog/${article.slug}">${escape(article.title)}</a></${level}><p>${escape(article.intro)}</p><div class="insight-card-meta">${article.publishedAt ? `<time datetime="${article.publishedAt}">${displayDate(article.publishedAt)}</time>` : "<span>From the archive</span>"}<span>${article.readingMinutes} min read</span></div><a class="text-link" href="/blog/${article.slug}" aria-label="Read: ${escape(article.title)}">Read guide</a></article>`;
}

export function insightsIndex(articles, asset) {
  const groups = [
    {
      id: "marketing",
      label: "Marketing & SEO",
      title: "Find customers. Earn their confidence.",
      description:
        "Practical guidance on marketing decisions, social media scopes and getting found in search.",
    },
    {
      id: "software",
      label: "Websites & software",
      title: "Plan the right digital project.",
      description:
        "Understand costs, compare approaches and prepare a clear brief before commissioning a build.",
    },
    {
      id: "archive",
      label: "Earlier notes",
      title: "More thoughts on content and strategy.",
      description: "Shorter notes from the MoTechy archive.",
    },
  ];
  return `${pageIntro("MoTechy Insights", "Useful answers.<br>Better decisions.", "Detailed guides to marketing, websites and software for Nigerian business owners. Clear explanations, practical examples and tools you can use.")}
    <nav class="insights-nav container" aria-label="Browse Insights"><a href="#marketing">Marketing & SEO</a><a href="#software">Websites & software</a><a href="#resources">Free resources</a><a href="/feed.xml">RSS feed</a></nav>
    ${groups
      .slice(0, 2)
      .map(
        (group) =>
          `<section class="insights-group container" id="${group.id}"><div class="section-heading"><div><p class="eyebrow">${group.label}</p><h2>${group.title}</h2></div><p>${group.description}</p></div><div class="insights-grid">${articles
            .filter((a) => a.group === group.id)
            .map((a) => articleCard(a, asset))
            .join("")}</div></section>`,
      )
      .join("")}
    <section class="insights-resources" id="resources"><div class="container"><div class="section-heading"><div><p class="eyebrow">Free resources</p><h2>A useful place to start.</h2></div><p>Editable planners and checklists. Download a copy and adapt it to your business; no signup required.</p></div><div class="resource-list">${[
      [
        "Marketing planner",
        "CSV · Plan the offer, audience, evidence and next action",
        "assets/resources/marketing-planner.csv",
      ],
      [
        "Monthly SEO review",
        "CSV · Record visibility, enquiries and changes",
        "assets/resources/seo-review.csv",
      ],
      [
        "Social media scope checklist",
        "Editable text · Compare proposals and responsibilities",
        "assets/resources/social-media-scope.md",
      ],
      [
        "Website quote checklist",
        "Editable text · Compare deliverables and ongoing costs",
        "assets/resources/website-quote-checklist.md",
      ],
      [
        "Software project brief",
        "Editable text · Define the workflow, users and first release",
        "assets/resources/software-project-brief.md",
      ],
    ]
      .map(
        ([title, copy, file]) =>
          `<a href="${asset(file)}" download><span><strong>${title}</strong><span>${copy}</span></span><span aria-hidden="true">↓</span></a>`,
      )
      .join(
        "",
      )}</div><a class="text-link section-link" href="/blog/7-day-content-starter">Read the seven-day content starter</a></div></section>
    <section class="insights-group container" id="archive"><div class="section-heading"><div><p class="eyebrow">${groups[2].label}</p><h2>${groups[2].title}</h2></div><p>${groups[2].description}</p></div><div class="insights-grid insights-archive">${articles
      .filter(
        (a) => a.group === "archive" && a.slug !== "7-day-content-starter",
      )
      .map((a) => articleCard(a, asset))
      .join("")}</div></section>${cta()}`;
}

export function guidePage(article, content, articles, asset) {
  const headings = [...content.matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)];
  const related = article.related
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(Boolean);
  return `<article class="guide-page"><header class="guide-header container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/blog">Insights</a><span aria-hidden="true">/</span><span>${escape(article.category)}</span></nav><p class="eyebrow">${escape(article.category)}</p><h1>${escape(article.title)}</h1><p class="guide-intro">${escape(article.intro)}</p><div class="guide-meta"><a href="/about" rel="author">By ${escape(article.author)}</a><span>Published <time datetime="${article.publishedAt}">${displayDate(article.publishedAt)}</time></span>${article.updatedAt !== article.publishedAt ? `<span>Updated <time datetime="${article.updatedAt}">${displayDate(article.updatedAt)}</time></span>` : ""}<span>${article.readingMinutes} min read</span></div></header>
      ${guideCover(article, asset)}<div class="guide-layout container"><aside class="guide-contents"><nav aria-label="Article contents"><h2>In this guide</h2><ol>${headings.map(([, id, title]) => `<li><a href="#${id}">${escape(title)}</a></li>`).join("")}</ol></nav></aside><div class="article-body guide-body">${content}<div class="guide-author"><p><strong>About MoTechy</strong></p><p>MoTechy is an Abuja studio working across brand strategy, digital marketing and software development. <a href="/work">Explore the work</a> or <a href="/about">meet founder Moses Adebayo</a>.</p></div></div></div></article>
      <section class="guide-related container"><p class="eyebrow">Related reading</p><h2>Keep planning your next step.</h2><div class="insights-grid">${related.map((a) => articleCard(a, asset)).join("")}</div><a class="text-link section-link" href="/blog">Back to all Insights</a></section><section class="closing"><div class="container closing-inner"><div><p class="eyebrow">Put the plan to work</p><h2>Tell us what<br>you need to improve.</h2></div><div><p>A clear brief is a useful beginning. We’ll discuss your priorities and agree the right scope.</p>${button("Discuss your project", "/contact?service=" + encodeURIComponent(article.service))}</div></div></section>`;
}

export function articleSchema(article, base, image) {
  const url = base + "/blog/" + article.slug;
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": url + "#article",
      headline: article.title,
      description: article.intro,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: {
        "@type": article.author === "MoTechy" ? "Organization" : "Person",
        name: article.author,
        url: base + "/about",
      },
      publisher: { "@type": "Organization", name: "MoTechy", url: base },
      image: base + image,
      inLanguage: "en-NG",
      articleSection: article.category,
      wordCount: article.wordCount,
      ...(article.publishedAt
        ? {
            datePublished: article.publishedAt,
            dateModified: article.updatedAt || article.publishedAt,
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: base + "/blog",
        },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];
}

export function rssFeed(articles, base) {
  const xml = (value) => escape(value);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>MoTechy Insights</title><link>${base}/blog</link><description>Practical marketing, website and software guides for Nigerian businesses.</description><language>en-ng</language><atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>${articles.map((a) => `<item><title>${xml(a.title)}</title><link>${base}/blog/${a.slug}</link><guid isPermaLink="true">${base}/blog/${a.slug}</guid><description>${xml(a.intro)}</description><category>${xml(a.category)}</category>${a.publishedAt ? `<pubDate>${new Date(a.publishedAt + "T00:00:00+01:00").toUTCString()}</pubDate>` : ""}</item>`).join("")}</channel></rss>\n`;
}
