# Ganesh Karayi - Personal Portfolio

![Website Status](https://img.shields.io/website?url=https%3A%2A%2F%2FGaneshKar1.github.io)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwind-css&logoColor=white)

**🔗 Live Website: [https://GaneshKar1.github.io](https://GaneshKar1.github.io)**

A sleek, "Bento Dashboard" inspired personal portfolio built for my experiences as an Applied Math and Data Science student at UC Berkeley, and my roles in Quantitative Research.

## Architecture & Technology
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 featuring a Deep Charcoal/Electric Blue glassmorphism aesthetic.
- **Animations:** Framer Motion (AnimatePresence for smooth modular tab routing)
- **Icons:** Lucide-React
- **Hosting:** Deployed statically on GitHub Pages via GitHub Actions (`output: 'export'`)

## Local Development

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page will auto-update as you edit the TypeScript components in `src/`.

## Deployment

The repository uses native **GitHub Actions** (`.github/workflows/nextjs.yml`). Every time you push to the `main` branch, GitHub will automatically:
1. Build the static Next.js export
2. Deploy the `out/` directory directly to GitHub Pages

You do not need to build manually before pushing!
