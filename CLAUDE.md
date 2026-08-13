# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

`cvBruno` is Bruno Salazar's personal CV/portfolio site: a single-page React + TypeScript app built with Vite and styled with Tailwind CSS. It's deployed as a static site to GitHub Pages at https://brunoas85.github.io/cvBruno.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check-free production build (`vite build`) into `dist/`
- `npm run preview` — serve the production build locally
- `npm run deploy` — build (`predeploy` runs `npm run build`) and publish `dist/` to GitHub Pages via `gh-pages`

There is no lint or test setup in this project.

## Architecture

- Everything renders from a single component: `src/CVBruno.tsx`, mounted in `src/main.tsx` into `#app` (see `index.html`).
- The CV is one long JSX tree of `<section>` blocks (Perfil, Tecnologías, Proyectos Destacados, Formación, Objetivo) — there is no routing, no component splitting, and no external data source. To update CV content (bio, tech stack, projects, education), edit the JSX directly in `CVBruno.tsx`.
- Styling is Tailwind utility classes inline in JSX; `src/style.css` only contains the three `@tailwind` directives. There's no custom Tailwind theme (`tailwind.config.js` uses the default theme, `content` globs `index.html` and `src/**/*.{js,ts,jsx,tsx}`).
- Icons come from `react-icons/fa6` (social links in the header: GitHub, LinkedIn, Discord, Instagram, X).
- Profile/gallery images live in `public/` (`cv.jpg`, `bR*.jpg`) and are referenced with the `/cvBruno/...` prefix because of the Vite `base` path below.
- `src/counter.ts` is unused leftover from the Vite template — not imported anywhere.

## GitHub Pages deploy path

`vite.config.js` sets `base: '/cvBruno/'` to match the GitHub repo name — this must stay in sync with wherever the repo is deployed on Pages, since it affects how the built asset and image paths resolve in production. If the repo is ever renamed, update `base` here and the `homepage` field in `package.json` together.
