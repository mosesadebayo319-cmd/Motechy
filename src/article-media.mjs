import { escape } from "./templates.mjs";

export function coverImage(
  cover,
  asset,
  { priority = false, decorative = false } = {},
) {
  const source = (width) => asset(`${cover.image}-${width}.webp`);
  const sizes = priority
    ? "(max-width: 760px) 90vw, (max-width: 1400px) 88vw, 1240px"
    : "(max-width: 760px) 90vw, (max-width: 1400px) 42vw, 595px";
  return `<img src="${source(800)}" srcset="${source(480)} 480w, ${source(800)} 800w, ${source(1200)} 1200w" sizes="${sizes}" width="${cover.width}" height="${cover.height}" alt="${decorative ? "" : escape(cover.alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
}

export function guideCover(article, asset) {
  if (!article.cover) return "";
  return `<figure class="guide-cover container">${coverImage(article.cover, asset, { priority: true })}<figcaption>Cover image: <a href="${escape(article.cover.source)}" target="_blank" rel="noopener noreferrer">${escape(article.cover.credit)}</a>.</figcaption></figure>`;
}
