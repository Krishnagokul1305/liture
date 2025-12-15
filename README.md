# Liture — Interactive Learning Website

Liture is a modern, responsive React website focused on delivering interactive educational content and resources. This repository contains the frontend application built with Vite, Tailwind CSS and a set of animation and UI libraries to create a smooth, engaging user experience.

## Project overview

- Purpose: Present courses, opportunities and membership features with an accessible, animated web UI.
- Audience: learners, educators, and community members who want a concise presentation of Liture's offerings.

## Key features

- Fast development and HMR with Vite
- React 19 for the UI
- Tailwind CSS for utility-first styling
- Smooth animations with Framer Motion and GSAP
- Improved scrolling with lenis
- Accessible primitives via Radix UI

## Tech stack (high level)

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router (react-router-dom)

See `package.json` for the full dependency list and versions.

## Getting started (local development)

# Liture — Interactive Learning Website

Liture is a modern, responsive React website focused on delivering interactive educational content and resources. This repository contains the frontend application built with Vite, Tailwind CSS and a set of animation and UI libraries to create a smooth, engaging user experience.

## Project overview

- Purpose: Present courses, opportunities and membership features with an accessible, animated web UI.
- Audience: learners, educators, and community members who want a concise presentation of Liture's offerings.

## Key features

- Fast development and HMR with Vite
- React 19 for the UI
- Tailwind CSS for utility-first styling
- Smooth animations with Framer Motion and GSAP
- Improved scrolling with lenis
- Accessible primitives via Radix UI

## Tech stack (high level)

- React 19
- Vite
- Tailwind CSS
- Framer Motion, GSAP, lenis
- React Router (react-router-dom)

See `package.json` for the full dependency list and versions.

## Getting started (local development)

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the site in your browser — Vite usually serves at `http://localhost:5173`.

Useful scripts (from `package.json`):

- `npm run dev` — start dev server
- `npm run build` — build production assets
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Repository layout

- `src/` — application source
  - `components/` — reusable UI components and primitives
  - `pages/` — routeable pages and page sections (see `src/pages/home/sections`)
  - `assets/` — images and static assets
  - `lib/`, `utils/` — helpers and utilities
- `public/` — static files served at root

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo and create a feature branch
2. Install and run locally (`npm install`, `npm run dev`)
3. Open a PR with a clear description and screenshots if applicable

Please follow existing code style, component patterns, and update tests or docs for notable changes.

## Deployment

This project builds static assets via Vite and can be deployed to platforms such as Vercel, Netlify, or GitHub Pages.

Build locally and preview:

```bash
npm run build
npm run preview
```

## License & contact

There is no `LICENSE` file in this repository currently. If you want to make licensing explicit, add a `LICENSE` (for example MIT).

For questions, open an issue in the repo or contact the maintainers.

---

If you'd like, I can also:

- add a short development checklist to `README.md` (typecheck/lint/build steps),
- add a `CONTRIBUTING.md` or a `LICENSE` file,
- or generate a brief project demo GIF to include in this README.

Tell me which of those you'd like and I can apply it now.
