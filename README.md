# Vivid Vision Website (Unified Astro Refactor)

This repository now contains **one canonical website implementation** at the repo root using **Astro + Vite**.

## Cleaned file tree

```text
.
├── CNAME
├── README.md
├── astro.config.mjs
├── eslint.config.mjs
├── package.json
├── index.html                # legacy reference snapshot (not used by Astro runtime)
├── styles.css                # legacy reference stylesheet
├── main.js                   # legacy reference script
├── images/                   # static assets served via Astro publicDir
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── Hero.astro
    │   ├── JoinForm.astro
    │   ├── Mission.astro
    │   ├── Socials.astro
    │   └── TeamCarousel.astro
    ├── content/
    │   └── team.json
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   └── index.astro
    ├── scripts/
    │   ├── carousel.js
    │   ├── form.js
    │   ├── hero.js
    │   ├── main.js
    │   ├── nav.js
    │   └── scroll.js
    └── styles/
        └── global.css
```

> Removed duplicate nested app: `vvweb/` has been deleted.

## Migration map (nested `vvweb/` -> unified root)

- `vvweb/public/images/*` -> consolidated into existing root `images/*` (single source of truth)
- `vvweb/public/jsons/*` -> replaced by `src/content/team.json` for Team carousel content
- `vvweb/src/app/*` (Next.js routes/styles) -> replaced by root Astro structure under `src/pages`, `src/components`, `src/styles`, and `src/scripts`
- `vvweb/package.json` and Next-specific tooling -> replaced by root Astro `package.json` and `astro.config.mjs`

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

- Build output: `dist/`
- Use any static host (Netlify/Vercel static/GitHub Pages/etc.)
- Keep existing DNS/domain setup for `vividvisioncollective.com`

## Parity and visual integrity notes

- Refactor preserves approved visual design and behavior:
  - Header/nav and in-page section flow
  - Hero dynamic words and parallax behavior
  - Team carousel tabs + arrows
  - Tap-in form submission + confirmation state
  - Scroll reveal behavior
- Unintended duplicate-version drift was removed by deleting `vvweb/` and keeping one canonical implementation.
