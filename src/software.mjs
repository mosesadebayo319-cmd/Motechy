import { button, escape } from "./templates.mjs";
import { softwareProjects } from "./software-projects.mjs";

const enquiry = "/contact?service=Software%20Development";

const capabilities = [
  [
    "Business websites",
    "A clear, responsive home for your business, with useful content, service pages and a straightforward path to enquire.",
  ],
  [
    "Web applications & portals",
    "Tools people can use in their browser: learning platforms, customer portals and applications built around a defined workflow.",
  ],
  [
    "Internal tools & integrations",
    "Bring everyday tasks into one place. Connect systems, organise records and reduce repetitive steps for your team.",
  ],
  [
    "Improvements & ongoing support",
    "Review an existing website or application, resolve usability issues and agree a practical plan for maintenance and future changes.",
  ],
];

const steps = [
  [
    "Start with the problem",
    "We discuss who will use the software, what they need to do and which features matter for the first version.",
  ],
  [
    "Agree the scope and design",
    "You review the proposed screens, deliverables, milestones and quote before development begins.",
  ],
  [
    "Build and test together",
    "We share progress, work through feedback and check the agreed journeys across relevant devices.",
  ],
  [
    "Launch with a clear handover",
    "We prepare the release, explain how to manage it and confirm any ongoing hosting, maintenance and support arrangements.",
  ],
];

const questions = [
  [
    "How much does a software project cost?",
    "Each project is quoted around its scope: pages or features, integrations, content, testing and support. Software projects are separate from our monthly marketing packages. Share your requirements and budget so we can recommend a sensible starting point.",
  ],
  [
    "Can you improve a website or application I already have?",
    "Yes. We first review the existing system and the changes you need. We then recommend whether to improve it in place or rebuild specific parts, with the scope agreed before work starts.",
  ],
  [
    "How long will it take?",
    "Timing depends on the scope, available content and integrations. We agree milestones in the proposal and identify what we need from you to keep the work moving.",
  ],
  [
    "What happens after launch?",
    "We agree the handover, source-code access, hosting responsibilities and any maintenance or support before the project begins. Third-party subscriptions and ongoing costs are identified in the proposal.",
  ],
  [
    "Can I explore the projects on this page?",
    "Yes. The public preview links open the published websites. ImpactDesk’s team workspaces require an account. Y2Audio is shown as an interface screenshot and source-code project while a public live conversion service remains unavailable.",
  ],
];

function previewImage(project, asset, priority = false) {
  const src = (width) =>
    asset(`assets/images/software/${project.id}-${width}.webp`);
  return `<img src="${src(800)}" srcset="${src(480)} 480w, ${src(800)} 800w, ${src(1280)} 1280w" sizes="(max-width:760px) 90vw, (max-width:1280px) 44vw, 600px" width="1280" height="800" alt="${escape(project.alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
}

function externalLink(label, href, project, kind) {
  return `<a class="text-link project-external-link" href="${escape(href)}" target="_blank" rel="noopener noreferrer" data-project="${project.id}" data-project-action="${kind}" aria-label="${escape(label)}: ${escape(project.title)} (opens in a new tab)">${label}<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4 12 12 4M4 4h8v8" fill="none" stroke="currentColor" stroke-width="1.4"/></svg></a>`;
}

function projectCard(project, asset) {
  return `<article class="software-project" id="${project.id}">
    <div class="software-project-image">${previewImage(project, asset)}</div>
    <div class="software-project-copy">
      <p class="eyebrow">${project.category}</p><h3>${project.title}</h3><p>${project.description}</p>
      <ul class="project-features" aria-label="Project features">${project.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      <div class="project-links">${project.preview ? externalLink(project.previewLabel, project.preview, project, "preview") : externalLink("View interface image", asset(`assets/images/software/${project.id}-1280.webp`), project, "image")}${project.repository ? externalLink("View on GitHub", project.repository, project, "source") : ""}</div>
      <p class="project-note">${project.note}</p>
    </div>
  </article>`;
}

export function softwarePage(asset) {
  const featured = softwareProjects[0];
  return `<section class="development-hero container">
    <div class="development-intro"><p class="eyebrow">Software development · Abuja, Nigeria</p><h1>Your next idea.<br><em>Built to work.</em></h1><p>Websites, web applications and practical business tools. We turn a clear brief into software your customers and team can use.</p><div class="inline-actions">${button("Discuss your project", enquiry)}<a class="text-link" href="#projects">Explore the projects</a></div><p class="development-note">Scope, milestones and pricing agreed before we build.</p></div>
    <article class="featured-build" id="impactdesk"><p class="eyebrow">Featured project / ${featured.title}</p><div class="software-project-image">${previewImage(featured, asset, true)}</div><div class="featured-build-copy"><h2>${featured.title}</h2><p>${featured.description}</p>${externalLink(featured.previewLabel, featured.preview, featured, "preview")}<p class="project-note">${featured.note}</p></div></article>
  </section>
  <nav class="development-nav container" aria-label="On this page"><a href="#projects">Projects</a><a href="#capabilities">What we build</a><a href="#delivery">How we work</a><a href="#software-faq">Questions & answers</a></nav>
  <section class="section software-projects-section" id="projects"><div class="container"><div class="section-heading"><div><p class="eyebrow">Selected development work</p><h2>Explore the work.<br>See what’s possible.</h2></div><p>Independent products, a personal portfolio and our own company website. Browse the previews and public repositories to see the work for yourself.</p></div><div class="software-project-grid">${softwareProjects
    .slice(1)
    .map((p) => projectCard(p, asset))
    .join("")}</div></div></section>
  <section class="section software-capability-section" id="capabilities"><div class="container"><div class="section-heading"><div><p class="eyebrow">What we can build</p><h2>The right tool<br>for the job.</h2></div><p>Start with what your business needs to do. We’ll help you choose a useful first version and a clear path forward.</p></div><div class="software-capability-grid">${capabilities.map(([title, copy], i) => `<article><span class="row-number">0${i + 1}</span><h3>${title}</h3><p>${copy}</p></article>`).join("")}</div></div></section>
  <section class="section" id="delivery"><div class="container process-layout"><div><p class="eyebrow">From brief to launch</p><h2>A clear process.<br>A shared direction.</h2><p class="muted">You know what is being built, what comes next and where your feedback fits.</p></div><ol class="process-list">${steps.map(([title, copy], i) => `<li><span>0${i + 1}</span><div><h3>${title}</h3><p>${copy}</p></div></li>`).join("")}</ol></div></section>
  <section class="software-scope"><div class="container software-scope-inner"><div><p class="eyebrow">A quote around your requirements</p><h2>Tell us what you need.<br>We’ll work out the scope.</h2></div><div><p>Share the problem, who will use the software, your budget and any target date. We’ll discuss the priorities and prepare a proposal. Software projects are quoted separately from monthly marketing support.</p>${button("Request a project quote", enquiry, true)}</div></div></section>
  <section class="section" id="software-faq"><div class="container faq-layout"><div><p class="eyebrow">Before we start</p><h2>A few useful<br>answers.</h2></div><div class="faq-list">${questions.map(([q, a]) => `<details name="software-faq"><summary>${q}<span aria-hidden="true">+</span></summary><p>${a}</p></details>`).join("")}</div></div></section>
  <section class="closing"><div class="container closing-inner"><div><p class="eyebrow">Your next project</p><h2>Let’s build<br>something useful.</h2></div><div><p>A website, an application or a better way for your team to work. Start with a conversation.</p>${button("Discuss your project", enquiry)}</div></div></section>`;
}
