# Vivid Vision Website Refactor (Static Astro)

## Target stack
This refactor uses **Astro + Vite** to keep the site static-hostable while introducing reusable components and content-driven data files.

## Refactor plan
1. Audit legacy `index.html` / `styles.css` / `main.js` and preserve behavior exactly.
2. Migrate into structured `src/` layout (pages/components/scripts/styles/content).
3. Externalize team entries into a single JSON file used by the carousel component.
4. Add lightweight tooling (dev/build scripts, ESLint, Prettier).
5. Keep static deployment compatibility (`dist/`).

## Final file tree
```text
.
├── astro.config.mjs
├── package.json
├── eslint.config.mjs
├── .prettierrc
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── JoinForm.astro
│   │   ├── Mission.astro
│   │   ├── Socials.astro
│   │   └── TeamCarousel.astro
│   ├── content/
│   │   └── team.json
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   ├── carousel.js
│   │   ├── form.js
│   │   ├── hero.js
│   │   ├── main.js
│   │   ├── nav.js
│   │   └── scroll.js
│   └── styles/
│       └── global.css
└── images/ (existing assets used as Astro publicDir)
```

## Run locally
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment
- Build with `npm run build`
- Deploy static output from `dist/`
- Compatible with Netlify, Vercel static, GitHub Pages, and other static hosts.
- Preserve existing DNS/domain configuration for `vividvisioncollective.com`.

## What changed internally
- Monolithic page markup split into reusable Astro components.
- Team cards moved to `src/content/team.json` for easy non-engineer edits.
- Legacy JS split into focused modules without changing behavior.
- Legacy styling moved to `src/styles/global.css` with path adjustments only for static asset resolution.

## What remained intentionally identical
- Information architecture and copy (Home / Mission / Team / Join / Socials).
- Carousel categories, arrows, and card interactions.
- Tap-in form + confirmation flow and Formspree endpoint.
- Existing look-and-feel, spacing, colors, and animation timing.
