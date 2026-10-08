import { company } from "./data.mjs";
export const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export function button(label, href, secondary = false) {
  return `<a class="button${secondary ? " button-secondary" : ""}" href="${escape(href)}">${label}</a>`;
}
export function header(active, asset) {
  const links = [
    ["Services", "/services"],
    ["Work", "/work"],
    ["About", "/about"],
    ["Insights", "/blog"],
  ];
  return `<header class="site-header"><div class="container header-inner"><a class="brand" href="/" aria-label="MoTechy home"><img src="${asset("assets/images/logo-transparent.webp")}" alt="MoTechy" width="916" height="242"></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation" hidden><span>Menu</span><span class="menu-icon" aria-hidden="true"></span></button><nav class="site-navigation" id="site-navigation" aria-label="Main navigation">${links.map(([name, href]) => `<a href="${href}"${active === href ? ' aria-current="page"' : ""}>${name}</a>`).join("")}<a class="nav-contact" href="/contact"${active === "/contact" ? ' aria-current="page"' : ""}>Let’s talk</a></nav></div></header>`;
}
export function footer() {
  return `<footer class="site-footer"><div class="container"><div class="footer-main"><div><a href="/" class="footer-wordmark">MoTechy<span>.</span></a><p>Brand, marketing & software.<br>Built around your business.</p><span class="footer-location">Abuja, Nigeria · Working nationwide</span></div><div><h2>Explore</h2><a href="/services">Services</a><a href="/services#software">Software development</a><a href="/work">Selected work</a><a href="/services#packages">Packages</a><a href="/about">About MoTechy</a><a href="/blog">Insights</a></div><div><h2>Get in touch</h2><a href="mailto:${company.email}" data-track="email_click">${company.email}</a><a href="tel:+2348124328229" data-track="phone_click">${company.phone}</a><a href="${company.whatsapp}" data-track="whatsapp_click" target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="https://instagram.com/motechy_" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.linkedin.com/company/motechy" target="_blank" rel="noopener noreferrer">LinkedIn</a></div></div><div class="footer-bottom"><p>© ${new Date().getFullYear()} MoTechy. All rights reserved.</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div></div></div></footer>`;
}
export function cta() {
  return `<section class="closing"><div class="container closing-inner"><div><p class="eyebrow">Your next chapter</p><h2>Let’s make it<br>worth noticing.</h2></div><div><p>Tell us where your business is today<br class="desktop-break"> and where you want it to go.</p>${button("Start a conversation", "/contact")}</div></div></section>`;
}
export function pageIntro(label, title, description) {
  return `<section class="page-intro container"><p class="eyebrow">${label}</p><h1>${title}</h1>${description ? `<p class="intro-copy">${description}</p>` : ""}</section>`;
}
export function layout({
  title,
  description,
  path,
  body,
  asset,
  base,
  analytics = false,
  noindex = false,
}) {
  const canonical = base + path;
  return `<!doctype html>
<html lang="en-NG"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#122139"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${canonical}">${noindex ? '<meta name="robots" content="noindex,follow">' : ""}<meta property="og:type" content="${path.startsWith("/blog/") ? "article" : "website"}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${base + asset("assets/images/og-image.jpg")}"><meta property="og:site_name" content="MoTechy"><meta property="og:locale" content="en_NG"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="${base + asset("assets/images/og-image.jpg")}"><link rel="icon" href="${asset("assets/images/favicon.ico")}"><link rel="apple-touch-icon" href="${asset("assets/images/apple-touch-icon.png")}"><link rel="stylesheet" href="${asset("css/styles.css")}"><script type="module" src="${asset("js/main.js")}"></script>${analytics ? '<script defer src="/_vercel/insights/script.js"></script>' : ""}<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "MoTechy", url: base, logo: base + asset("assets/images/logo-transparent.webp"), email: company.email, telephone: "+2348124328229", address: { "@type": "PostalAddress", addressLocality: "Abuja", addressRegion: "FCT", addressCountry: "NG" }, areaServed: "Nigeria", founder: { "@type": "Person", name: "Moses Adebayo" }, sameAs: ["https://instagram.com/motechy_", "https://www.linkedin.com/company/motechy"] }).replace(/</g, "\\u003c")}</script></head><body><a class="skip-link" href="#main">Skip to content</a>${header(path, asset)}<main id="main" tabindex="-1">${body}</main>${footer()}</body></html>`;
}
