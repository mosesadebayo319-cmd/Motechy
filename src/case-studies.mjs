import { button, escape } from "./templates.mjs";

const enquiry = "/contact?service=Software%20Development";

export const caseStudies = [
  {
    id: "impactdesk",
    path: "/work/impactdesk",
    name: "ImpactDesk",
    category: "Nonprofit operations · Independent product",
    headline: "From field activity to a report worth sharing.",
    summary:
      "A program management workspace that connects NGO activities, supporting evidence and impact reporting.",
    description:
      "Inside ImpactDesk: an NGO reporting application built by Moses Adebayo with Django, PostgreSQL, approval workflows and preserved report snapshots.",
    preview: "https://impactdesk.vercel.app",
    previewLabel: "Visit product website",
    status: "Pilot release",
    stack: [
      "Python & Django",
      "PostgreSQL",
      "Supabase Storage",
      "Vercel & Render",
    ],
    imageAlt:
      "ImpactDesk public homepage with a program overview labelled as example data",
    imageCaption:
      "The public product website. The program figures shown are illustrative example data.",
    problem:
      "An NGO’s work can become scattered across activity logs, photos and reporting documents. A report needs to connect what happened in the field to the evidence behind it, while giving the right people a chance to review the record.",
    approach:
      "ImpactDesk brings those steps into an organisation’s workspace. Programs provide the structure, activities hold the field record, and evidence stays attached to the work it supports. Reporting draws on approved activity rather than a separate set of manually assembled figures.",
    features: [
      [
        "A record with context",
        "Activities capture dates, locations, participant counts, outputs and lessons learned. Photos and documents can be attached as evidence.",
      ],
      [
        "Review before reporting",
        "Activities move through draft, submitted and approved or rejected states. An event history records changes and review actions.",
      ],
      [
        "A stable final report",
        "Reports use a defined period and approved records. Finalisation preserves a snapshot; later corrections require a revision. Exports include PDF, DOCX and CSV.",
      ],
      [
        "A practical import path",
        "Teams can preview a KoboToolbox or ODK CSV mapping before importing draft activities. Supporting attachments are added separately for review.",
      ],
    ],
    architectureIntro:
      "The public website and the signed-in workspace have different jobs. A static site presents the product, while a Django application handles accounts, records, review and exports.",
    layers: [
      [
        "Public website",
        "Static pages on Vercel",
        "The product pages load independently of the application server. Account links hand visitors over to the workspace.",
      ],
      [
        "Application",
        "Django on Render",
        "Server-rendered screens handle team access, program records, approvals and report generation.",
      ],
      [
        "Records & evidence",
        "PostgreSQL + object storage",
        "Relational records connect organisations, programs and activities. Uploaded evidence uses private storage and an authenticated application endpoint.",
      ],
    ],
    decisions: [
      [
        "Keep records within their organisation",
        "Organisation-scoped queries and role checks are part of the workflow, from selecting programs to importing activities and retrieving evidence.",
      ],
      [
        "Preserve what was reported",
        "A final report keeps the data captured at finalisation. This separates the published record from later edits to activities or program details.",
      ],
      [
        "Make server startup understandable",
        "The public site checks application health before handing visitors to the workspace. A sleeping application can still cause a delay; the public pages remain available during that wait.",
      ],
    ],
    detailImage: "impactdesk-guide",
    detailAlt:
      "ImpactDesk guide explaining the steps from organisation setup to reporting",
    detailCaption:
      "The public guide introduces the workflow before a team opens its workspace.",
    outcome:
      "The pilot brings program tracking, evidence, review and reporting into one application, with guided onboarding and reusable report templates. Teams can explore the public guide before creating an account.",
    limits:
      "ImpactDesk is in pilot. The preview opens the public product site; team workspaces require an account. Program figures in the screenshots are example data.",
  },
  {
    id: "zerotocode",
    path: "/work/zerotocode",
    name: "ZeroToCode Academy",
    category: "Learning platform · Independent product",
    headline: "A shorter path from reading to writing code.",
    summary:
      "Programming lessons, practical exercises and progress tracking in one browser-based learning experience.",
    description:
      "Inside ZeroToCode Academy: a programming learning platform with browser code playgrounds, quizzes and local progress, built by Moses Adebayo.",
    preview: "https://zerotocode-teal.vercel.app",
    previewLabel: "Explore the live platform",
    repository: "https://github.com/mosesadebayo319-cmd/zerotocode-academy",
    status: "Public learning project",
    stack: ["HTML & CSS", "JavaScript", "Pyodide", "Vercel"],
    imageAlt: "ZeroToCode Academy homepage introducing its programming courses",
    imageCaption:
      "The public learning platform, with course choices and a direct route into a first lesson.",
    problem:
      "Starting to code often means switching between a tutorial, a local setup guide and a separate editor. Beginners also need a clear next step and a way to see what they have already understood.",
    approach:
      "ZeroToCode puts explanation, exercises and a knowledge check into the lesson journey. Course navigation makes the sequence visible, while a dashboard brings completed lessons and progress together without requiring an account.",
    features: [
      [
        "A guided lesson sequence",
        "Courses organise explanations and exercises into a visible path. Python also offers learning paths for different interests, including data and backend development.",
      ],
      [
        "Practice beside the lesson",
        "Python runs through Pyodide in the browser. JavaScript and HTML/CSS exercises use a sandboxed preview. Go and Rust lessons guide learners through local practice.",
      ],
      [
        "Check understanding",
        "Lesson quizzes require a score of at least 70% before a lesson can be marked complete. Learners can review the explanation and try again.",
      ],
      [
        "Pick up where you left off",
        "Completed lessons, quiz scores and learning streaks are saved in the current browser and reflected in the dashboard.",
      ],
    ],
    architectureIntro:
      "The platform is a static web application. Course content and interface logic run in the browser, with no account service needed for the current learning experience.",
    layers: [
      [
        "Delivery",
        "Static files on Vercel",
        "HTML, styles, the application script and separate course files provide the public learning experience.",
      ],
      [
        "Learning interface",
        "JavaScript in the browser",
        "The interface selects courses, renders lessons, checks quiz answers and updates progress.",
      ],
      [
        "Practice & progress",
        "Browser runtimes + local storage",
        "Pyodide supports Python practice, sandboxed frames support web exercises, and browser storage keeps learning state.",
      ],
    ],
    decisions: [
      [
        "Start without a signup step",
        "A learner can open a course immediately. The trade-off is that saved progress belongs to that browser; it does not automatically follow them to another device.",
      ],
      [
        "Load Python when it is needed",
        "The Pyodide runtime loads on the first Python run. This avoids making every visitor download a Python environment before exploring the courses.",
      ],
      [
        "Separate content from the interface",
        "Course definitions live in separate JavaScript files. The same lesson, quiz and progress interface can display different subjects.",
      ],
    ],
    detailImage: "zerotocode-lesson",
    detailAlt:
      "ZeroToCode JavaScript lesson with a course sidebar and lesson explanation",
    detailCaption:
      "An actual JavaScript lesson: course navigation and the explanation appear together.",
    outcome:
      "The published project offers a complete path from choosing a course to reading, practising, checking understanding and recording completion. Its public repository makes the implementation available to explore.",
    limits:
      "Progress stays in the current browser and is cleared when its site data is removed. Python’s first run needs a runtime download; Go and Rust exercises use a local development environment.",
  },
];

function external(label, href) {
  return `<a class="text-link" href="${escape(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
}

function screenshot(study, asset, detail = false, priority = false) {
  const image = detail ? study.detailImage : study.id;
  const directory = detail ? "case-studies" : "software";
  const src = (width) =>
    asset(`assets/images/${directory}/${image}-${width}.webp`);
  return `<img src="${src(800)}" srcset="${src(480)} 480w, ${src(800)} 800w, ${src(1280)} 1280w" sizes="(max-width:760px) 90vw, 1120px" width="1280" height="${detail ? 900 : 800}" alt="${escape(detail ? study.detailAlt : study.imageAlt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"'}>`;
}

export function caseStudyPreviews(asset) {
  return `<section class="section case-preview-section" id="software-case-studies"><div class="container"><div class="section-heading"><div><p class="eyebrow">Software case studies</p><h2>Behind the build.</h2></div><p>Two independent products, with a closer look at the problem, the implementation and the decisions behind the work.</p></div><div class="case-preview-grid">${caseStudies.map((study) => `<article class="case-preview"><a class="case-preview-image" href="${study.path}" tabindex="-1" aria-hidden="true">${screenshot(study, asset)}</a><p class="eyebrow">${study.category}</p><h3><a href="${study.path}">${study.name}</a></h3><p>${study.summary}</p><a class="text-link" href="${study.path}" aria-label="Read the ${study.name} case study">Read case study</a></article>`).join("")}</div><a class="text-link section-link" href="/software-development">Explore all software projects</a></div></section>`;
}

export function caseStudyPage(study, asset) {
  const next = caseStudies.find((item) => item.id !== study.id);
  return `<article class="case-study">
    <header class="case-hero container"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/work">Work</a><span aria-hidden="true">/</span><span aria-current="page">${study.name}</span></nav><p class="eyebrow">${study.category}</p><h1>${study.name}</h1><p class="case-headline">${study.headline}</p><p class="case-summary">${study.summary}</p><div class="inline-actions">${external(study.previewLabel, study.preview)}${study.repository ? external("View source on GitHub", study.repository) : ""}</div><dl class="case-facts"><div><dt>Built by</dt><dd>Moses Adebayo</dd></div><div><dt>Project type</dt><dd>Independent product</dd></div><div><dt>Stage</dt><dd>${study.status}</dd></div></dl></header>
    <figure class="case-cover container">${screenshot(study, asset, false, true)}<figcaption>${study.imageCaption}</figcaption></figure>
    <nav class="case-nav container" aria-label="Case study sections"><a href="#brief">The brief</a><a href="#features">What it does</a><a href="#architecture">Architecture</a><a href="#outcome">What shipped</a></nav>
    <section class="case-section container" id="brief"><div><p class="eyebrow">01 / The brief</p><h2>The problem<br>and the approach.</h2></div><div class="case-prose"><h3>The problem</h3><p>${study.problem}</p><h3>The approach</h3><p>${study.approach}</p></div></section>
    <section class="case-feature-section" id="features"><div class="container"><p class="eyebrow">02 / What it does</p><h2>Built around the next step.</h2><div class="case-feature-grid">${study.features.map(([title, copy], index) => `<section><span class="row-number">0${index + 1}</span><h3>${title}</h3><p>${copy}</p></section>`).join("")}</div></div></section>
    <figure class="case-detail-image container">${screenshot(study, asset, true)}<figcaption>${study.detailCaption}</figcaption></figure>
    <section class="case-architecture container" id="architecture"><div class="section-heading"><div><p class="eyebrow">03 / Architecture</p><h2>How the pieces fit.</h2></div><p>${study.architectureIntro}</p></div><ul class="case-stack" aria-label="Technology stack">${study.stack.map((item) => `<li>${item}</li>`).join("")}</ul><div class="architecture-layers">${study.layers.map(([label, title, copy]) => `<section><p class="eyebrow">${label}</p><h3>${title}</h3><p>${copy}</p></section>`).join("")}</div><div class="case-decisions"><h3>Decisions that shape the experience</h3><dl>${study.decisions.map(([title, copy]) => `<div><dt>${title}</dt><dd>${copy}</dd></div>`).join("")}</dl></div></section>
    <section class="case-section case-outcome container" id="outcome"><div><p class="eyebrow">04 / What shipped</p><h2>A working product.<br>A clear next step.</h2></div><div class="case-prose"><p>${study.outcome}</p><p class="case-limit">${study.limits}</p>${external(study.previewLabel, study.preview)}</div></section>
    <section class="case-next container"><div><p class="eyebrow">Next case study</p><h2><a href="${next.path}">${next.name} <span aria-hidden="true">→</span></a></h2><p>${next.summary}</p></div><a class="text-link" href="/work">Back to selected work</a></section>
  </article><section class="closing"><div class="container closing-inner"><div><p class="eyebrow">Have a project in mind?</p><h2>Let’s build<br>your next project.</h2></div><div><p>Tell us what your customers or team need to do. We’ll help you define the scope and a practical first version.</p>${button("Discuss a software project", enquiry)}</div></div></section>`;
}
