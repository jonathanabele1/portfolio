# Portfolio

A premium, minimalistic personal portfolio scaffold built with Next.js, React, Tailwind CSS, TypeScript, and Framer Motion. Dark-mode by default, mobile-first, optimized for deployment on Vercel.

The aesthetic target is the calm, engineered feeling of an Apple product page or a high-end AI startup landing — soft gradients, crisp type, restrained motion, and high visual hierarchy.

---

## Stack

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 3.4**
- **Framer Motion 11** for tasteful entrance + interaction motion
- **clsx + tailwind-merge** for ergonomic class composition

Zero CSS-in-JS runtime. No icon library, no UI kit, no animation library beyond Framer Motion. The dependency surface is intentionally tiny.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Other scripts

| Script              | What it does                       |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Start the dev server on port 3000  |
| `npm run build`     | Production build                   |
| `npm run start`     | Start the production build locally |
| `npm run lint`      | Run ESLint                         |
| `npm run typecheck` | Type-check the project with `tsc`  |

---

## Editing your content

**All copy lives in one file: [`content.ts`](content.ts) at the project root.**

Open it, fill in your name, role, links, experience, projects, and skills. Save — the dev server hot-reloads instantly. You shouldn't need to touch the components for normal personalization.

The file is fully typed (`as const`), so your editor will autocomplete fields and flag typos in keys. If you remove or rename a key, TypeScript will tell you what else needs to change.

The structure mirrors the page:

```ts
content = {
  name, role, location, email, url, description, resumePath,
  social: { github, linkedin },
  nav:        [ … ],
  about:      { heading, paragraphs, meta },
  experience: { heading, description, items: [ … ] },
  projects:   { heading, description, items: [ … ] },
  skills:     { heading, description, groups: [ … ] },
  contact:    { heading, description },
}
```

### Adding your resume (PDF)

The recommended approach:

1. Save your resume as a PDF.
2. Drop it at **`public/resume.pdf`**.
3. That's it — the navbar, contact section, and footer all already link to it.

Notes:

- Files in `public/` are served from the site root, so `public/resume.pdf` is available at `/resume.pdf` in the browser.
- Links use `target="_blank"`, so the PDF opens in a new tab (lets viewers preview before downloading — preferred over forced downloads).
- To rename the file (e.g. `Jane-Doe-Resume.pdf`), update `resumePath` in [`content.ts`](content.ts) to match.
- To hide all resume links (e.g. before you've added the file), set `resumePath: null` in `content.ts`.
- Keep the PDF under ~1 MB for fast loading. Most resumes export to ~100–300 KB.

---

## Project structure

```
portfolio/
├── content.ts              ← edit this
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, navbar/footer mount
│   ├── page.tsx            # Home page, composes sections
│   └── globals.css         # Tailwind layers + design tokens
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky glass navbar, mobile drawer
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Container.tsx
│       ├── FadeIn.tsx           # Standardized motion primitive
│       ├── GradientBackdrop.tsx # Soft layered glow
│       ├── Section.tsx          # Vertical rhythm + scroll-margin
│       └── SectionHeading.tsx
├── lib/
│   └── utils.ts            # cn() helper
├── public/                 # Static assets — drop resume.pdf here
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Design system

The design system is intentionally small. All tokens live in two places:

**1. CSS variables** in [`app/globals.css`](app/globals.css) — semantic colors as HSL triplets:

```css
--background, --foreground, --muted, --subtle, --border, --accent
```

**2. Tailwind theme** in [`tailwind.config.ts`](tailwind.config.ts) — maps the variables to Tailwind colors, adds the display type scale (`text-display-xl`, `text-display-lg`, `text-display-md`), `out-expo` easing, and `fade-up` keyframes.

### Typography

- **Sans**: Inter (variable `--font-sans`)
- **Mono**: JetBrains Mono (variable `--font-mono`)

Both are loaded via `next/font/google` in [`app/layout.tsx`](app/layout.tsx) — self-hosted, zero layout shift.

### Motion philosophy

All entrance animation goes through one primitive: [`<FadeIn>`](components/ui/FadeIn.tsx). It uses an `out-expo` easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) for a soft, decelerating feel, triggers on scroll, and respects `prefers-reduced-motion`.

If you want a different motion shape, change it in one place.

### Smooth scrolling

`html { scroll-behavior: smooth }` is set in [`globals.css`](app/globals.css). Sections use `scroll-mt-24` (via the [`Section`](components/ui/Section.tsx) wrapper) so the sticky navbar doesn't overlap headings when you anchor-jump.

---

## Deploying to Vercel

The fastest path:

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no build config needed.
4. Click **Deploy**.

After the first deploy, add your custom domain in **Settings → Domains**, then update `url` in [`content.ts`](content.ts) so OG/canonical URLs are correct.

### Or via CLI

```bash
npm i -g vercel
vercel        # preview deploy
vercel --prod # production deploy
```

---

## Notes on architecture

- **Server components by default.** Only `Navbar`, `Projects`, and `FadeIn` opt into `"use client"` — they actually need browser APIs or motion hooks. Everything else stays static and ships zero JS to the client.
- **Single source of truth.** All content reads from one typed object in [`content.ts`](content.ts). No prop drilling, no scattered constants.
- **No layout shift.** Fonts are loaded with `display: swap` via `next/font`, and motion uses transform/opacity only.
- **Reduced-motion respected.** All entrance and decorative animation collapses to a simple fade when the user opts out.
- **Accessibility basics.** Focus rings are visible, the mobile menu toggles `aria-expanded`, decorative gradients are marked `aria-hidden`, and tap targets meet 40px.

---

## License

Personal use. Replace this section with your preferred license if open-sourcing.
