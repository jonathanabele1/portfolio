/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  content.ts
 *
 *  This is the only file you need to edit to personalize your portfolio.
 *  Everything on the site — copy, links, projects, experience — is read
 *  from this object. Save the file and the dev server hot-reloads.
 *
 *  Resume:
 *    Drop your PDF at  public/resume.pdf  (the path below points to it).
 *    To rename it, change `resumePath` and update the file in /public.
 *
 *  Logos:
 *    Drop company/school logos at  public/logos/<name>.png
 *    and reference them below (e.g. "/logos/factset.png").
 *    If no logo is provided, a styled initial is shown instead.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const content = {
  // ─── Basics ──────────────────────────────────────────────────────────────
  name: "Jonathan Abele",
  role: "Software Engineer",
  location: "Boston, MA",
  email: "jonathanabele17@gmail.com",
  headshot: "/headshot.png",

  // Used for SEO, Open Graph, canonical URLs. Update after you deploy.
  url: "https://your-domain.com",

  // Short meta description (used in <head> and social previews).
  description:
    "Software engineer building intelligent data systems, NLP pipelines, and AI-driven products.",

  // Drop your PDF at  public/resume.pdf  (or change the filename here).
  // Leave as null to hide all resume links.
  resumePath: "/resume.pdf" as string | null,

  // ─── Social links ────────────────────────────────────────────────────────
  social: {
    github: "https://github.com/jonathanabele1",
    linkedin: "https://www.linkedin.com/in/jonathanabele/",
  },

  // ─── Navbar items ────────────────────────────────────────────────────────
  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  // ─── Hero section ────────────────────────────────────────────────────────
  hero: {
    availabilityLabel: "Available for select engagements",
    headline: "Thoughtful software,",
    headlineDim: "engineered with care.",
    intro:
      "I'm {firstName}, a software engineer specializing in AI systems, NLP pipelines, and data-intensive products. I build things that process scale gracefully and solve problems that matter.",
  },

  // ─── About section ───────────────────────────────────────────────────────
  about: {
    heading: "Hey, I'm Jonathan.",
    paragraphs: [
      "I'm a software engineer at FactSet in Boston. I work on NLP pipelines that process hundreds of thousands of articles daily — building systems for sentiment analysis, entity tagging, and automated content curation.",
      "I studied computer science at the University of Michigan and graduated Summa Cum Laude. I like working on problems where software can replace tedious manual work, especially when it involves AI and large-scale data.",
    ],
    meta: [
      { label: "Based in", value: "Boston, MA" },
      { label: "Role", value: "Software Engineer II" },
      { label: "Education", value: "U of M, BSE CS" },
    ],
  },

  // ─── Experience timeline ─────────────────────────────────────────────────
  experience: {
    heading: "Experience",
    description: "",
    items: [
      {
        company: "FactSet",
        companyUrl: "https://www.factset.com",
        logo: "/logos/factset.png" as string | null,
        role: "Software Engineer II",
        period: "Apr 2026 — Present",
        location: "Boston, MA",
        summary:
          "Promoted to SWE II. Continuing to lead AI-driven pipeline development, expanding automated curation systems, and driving data quality improvements across production NLP infrastructure.",
        stack: ["Python", "AWS", "RabbitMQ", "Databricks"],
      },
      {
        company: "FactSet",
        companyUrl: "https://www.factset.com",
        logo: "/logos/factset.png" as string | null,
        role: "Software Engineer I",
        period: "Mar 2025 — Mar 2026",
        location: "Boston, MA",
        summary:
          "Optimized a high-throughput NLP pipeline processing hundreds of thousands of articles daily. Led end-to-end development of an LLM-based autocuration system processing ~20k articles/day, significantly reducing manual curation. Built internal dashboards and data visualizations for content curators.",
        stack: ["Python", "AWS", "RabbitMQ", "LLMs", "Databricks"],
      },
      {
        company: "FactSet",
        companyUrl: "https://www.factset.com",
        logo: "/logos/factset.png" as string | null,
        role: "Data Solutions Intern",
        period: "May — Aug 2024",
        location: "Boston, MA",
        summary:
          "Built an AI-powered chatbot using RAG architecture with OpenAI models and a Databricks vector database. Developed the Flask backend API and Vue.js frontend for semantic document retrieval and response generation.",
        stack: ["Python", "Flask", "Vue.js", "RAG", "OpenAI"],
      },
    ],
  },

  // ─── Projects ────────────────────────────────────────────────────────────
  personalProjects: {
    heading: "Personal",
    description: "",
    items: [
      {
        title: "PantryAI",
        description:
          "A full-stack nutrition tracker (SwiftUI + FastAPI) with receipt scanning via OCR and LLMs, RAG-based food logging, and real-time pantry management.",
        tags: ["SwiftUI", "FastAPI", "LLMs", "OCR", "RAG"],
        year: "2026",
        href: "https://github.com/jonathanabele1/PantryApp" as
          | string
          | undefined,
      },
    ],
  },

  workProjects: {
    heading: "Work",
    description: "",
    items: [
      {
        title: "FactSet Sidecar",
        description:
          "A Manifest V3 Chrome extension that uses NER to highlight companies, executives, and financial instruments in any web article, then surfaces real-time FactSet data in a side panel — no tab-switching required.",
        tags: ["TypeScript", "Chrome MV3", "NER", "esbuild", "REST APIs"],
        year: "2026",
        href: undefined as string | undefined,
        award: "1st Place — FactSet Hackathon 2026",
        images: ["/logos/sidecar1.png", "/logos/sidecar2.png"] as string[],
        details: {
          subtitle: "Showcased at FactSet Focus — Austin, TX",
          subtitleUrl: "https://www.factset.com/lp/focus-2026-highlights",
          highlights: [
            "DOM TreeWalker + Range API for efficient text-node traversal and entity highlighting across any page",
            "Service worker background script with OAuth token exchange, in-memory caching, and CORS proxy via chrome.runtime messaging",
            "Mozilla Readability for article body extraction with site-specific overrides",
            "Pluggable Snapshot Card architecture — iframe-based with postMessage cross-origin communication and declarativeNetRequest header rewriting",
            "Content-script isolation with prefixed CSS scoping to avoid host-page style conflicts",
            "NER matching against a FactSet Entity Master index, designed to swap in the Concordance API",
          ],
        },
      },
      {
        title: "LLM Autocuration",
        description:
          "An AI validation system serving as the final stage of a production NLP pipeline. Dynamic prompt-driven classification with a three-state decision framework, processing ~20k articles daily.",
        tags: ["Python", "LLMs", "NLP", "Prompt Engineering"],
        year: "2025",
        href: undefined as string | undefined,
        award: null as string | null,
        images: [] as string[],
        details: null as { subtitle: string; highlights: string[] } | null,
      },
      {
        title: "RAG Chatbot",
        description:
          "An AI-powered chatbot that interprets queries, retrieves information from large document sets via semantic search, and generates accurate responses.",
        tags: ["Flask", "Vue.js", "RAG", "Databricks"],
        year: "2024",
        href: undefined as string | undefined,
        award: null as string | null,
        images: [] as string[],
        details: null as { subtitle: string; highlights: string[] } | null,
      },
    ],
  },

  // ─── Education ───────────────────────────────────────────────────────────
  education: {
    heading: "Education",
    items: [
      {
        school: "University of Michigan",
        schoolUrl: "https://umich.edu",
        logo: "/logos/umich.png" as string | null,
        degree: "Bachelor of Science in Engineering",
        major: "Computer Science",
        minor: "Mathematics",
        period: "Aug 2021 — Dec 2024",
        location: "Ann Arbor, MI",
        honors: ["Summa Cum Laude", "GPA: 3.8 / 4.0"],
      },
    ],
  },

  // ─── Skills ──────────────────────────────────────────────────────────────
  skills: {
    heading: "Skills",
    description: "",
    groups: [
      {
        label: "Languages",
        items: ["Python", "C++", "C", "JavaScript", "SQL"],
      },
      {
        label: "AI & Data",
        items: ["LLMs", "RAG", "Prompt Engineering", "NLP", "Vector Databases"],
      },
      {
        label: "Frameworks",
        items: ["Flask", "Vue.js", "FastAPI", "SwiftUI", "Git"],
      },
      {
        label: "Infrastructure",
        items: ["AWS", "Databricks", "Terraform", "MongoDB", "PostgreSQL"],
      },
    ],
  },

  // ─── Contact section ─────────────────────────────────────────────────────
  contact: {
    heading: "Get in touch",
    description: "Feel free to reach out if you want to chat.",
  },
} as const;

// ─── Types (don't usually need to edit) ────────────────────────────────────
export type Content = typeof content;
export type ExperienceItem = (typeof content.experience.items)[number];
export type PersonalProject = (typeof content.personalProjects.items)[number];
export type WorkProject = (typeof content.workProjects.items)[0];
export type SkillGroup = (typeof content.skills.groups)[number];
export type EducationItem = (typeof content.education.items)[number];
export type NavItem = (typeof content.nav)[number];
