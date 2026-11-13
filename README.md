# Daniel Cossio — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Daniel-Cossio/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Daniel-Cossio/Portfolio/actions/workflows/deploy.yml)
![Angular](https://img.shields.io/badge/Angular-21.0-DD0031?style=flat&logo=angular&logoColor=white)
[![dcss-ui](https://img.shields.io/badge/dcss--ui-Monochrome_Geist-121316?style=flat&logo=css3&logoColor=ededed)](https://github.com/Daniel-Cossio/dcss-ui)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![Live Demo](https://img.shields.io/badge/Website-Live_on_GitHub_Pages-ededed?style=flat&logo=github&logoColor=07080a)](https://daniel-cossio.github.io/Portfolio/)

Personal portfolio web application of **Daniel Cossio** (Java Software Architect & Systems Engineer). Built with **Angular 21** and **[dcss-ui](https://github.com/Daniel-Cossio/dcss-ui)** (Zero-Overhead, Raycast-inspired Design System with the **Monochrome** architectural palette), configured for high-performance **Static Site Generation (SSG)** and automated deployment via **GitHub Actions** to **GitHub Pages**.

🔗 **Live Portfolio:** [https://daniel-cossio.github.io/Portfolio/](https://daniel-cossio.github.io/Portfolio/)

---

## 🏛️ Architectural Highlights & Engineering Decisions

* **Zero-Overhead Design System (`dcss-ui` — Monochrome Palette):** Styled 100% with [`dcss-ui`](https://github.com/Daniel-Cossio/dcss-ui) CSS design tokens (`--dcss-*`), Raycast-inspired obsidian surfaces (`#07080A` canvas, `#0D0E11` surface, `#121316` card), 1px hairline borders, zenital top highlights (`--dcss-top-highlight`), tactile 3D keycaps (`.dcss-kbd`), and the **Monochrome** (*Vercel Geist / Dieter Rams*) accent palette (`#EDEDED` dark / `#18181B` light)—eliminating Tailwind CSS and PostCSS completely.
* **Dark-First & Instant Theme Switching:** Initializes with `data-theme="dark"` and `data-accent="monochrome"` via an anti-FOUC inline script in `index.html`, synchronized with `ThemeService` and `localStorage` (`dcss-theme` / `theme`).
* **Static Site Generation (SSG):** Configured via Angular 21's static prerendering pipeline (`"outputMode": "static"`). Produces pre-rendered HTML and optimized client assets at build time, eliminating the need for an active Node.js server and keeping hosting costs at **$0 USD**.
* **Modern Reactive Patterns:** Developed using Angular Standalone Components and native Angular Signals for performant, fine-grained state management.
* **Anti-Scraping Email Obfuscation ("Click to Reveal"):** Protects personal contact channels (`danielcossio195+dev@gmail.com`) from automated web crawlers and spam harvesters through dynamic, client-side Signal assembly and clipboard integration.
* **Dual-Language LaTeX Resumes:** Integrates downloadable curriculum vitae in both English (`cv-en.pdf`) and Spanish (`cv-es.pdf`), compiled with LuaLaTeX and `moderncv`.
* **SPA Routing Fallback:** GitHub Actions automatically copies `index.html` to `404.html` on deployment, ensuring clean client-side routing on GitHub Pages without server-side configuration.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Angular v21 (Standalone Components, Angular Signals) |
| **Design System & Styling** | [`dcss-ui`](https://github.com/Daniel-Cossio/dcss-ui) (`monochrome` palette, CSS Custom Properties, Zero Tailwind) |
| **UI Components & Icons** | `dcss-ui` Primitives (`.dcss-card`, `.dcss-btn`, `.dcss-badge`, `.dcss-kbd`, `.dcss-action-bar`), Angular Material Icons (`@angular/material/icon`) |
| **Rendering** | Static Site Generation (SSG) / Angular Prerender |
| **CI/CD** | GitHub Actions (`actions/deploy-pages@v4`, `actions/configure-pages@v5`) |
| **Hosting & CDN** | GitHub Pages (Free, global CDN, automated SSL/TLS) |

---

## 📂 Project Structure

```text
Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD build & deploy pipeline
├── public/
│   ├── assets/
│   │   ├── cv-en.pdf           # Downloadable Master CV (English, moderncv)
│   │   └── cv-es.pdf           # Downloadable Master CV (Spanish, moderncv)
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar.ts       # Glassmorphic sticky navbar & theme switcher
│   │   │   ├── hero.ts         # Hero section, monochrome gradient & metrics
│   │   │   ├── experience.ts   # Interactive career timeline & education
│   │   │   ├── skills.ts       # Categorized competency grid
│   │   │   ├── projects.ts     # Featured open-source projects (incl. dcss-ui)
│   │   │   ├── cv.ts           # Dual-language resume download hub
│   │   │   └── contact.ts      # Anti-scraping contact cards & footer
│   │   ├── models/
│   │   │   └── project.ts      # TypeScript interfaces
│   │   ├── services/
│   │   │   └── theme.service.ts# Dark/Light theme & monochrome accent manager
│   │   ├── app.ts              # Root standalone layout component
│   │   └── app.config.ts       # Angular application configuration
│   ├── styles/
│   │   └── dcss.css            # Bundled dcss-ui design system stylesheet
│   ├── index.html              # HTML shell with anti-FOUC theme initialization
│   ├── main.server.ts          # Server prerendering entry point
│   ├── main.ts                 # Client bootstrap entry point
│   └── styles.css              # Global imports, monochrome overrides & layouts
├── angular.json                # Angular CLI & SSG build configuration
├── package.json                # Dependencies and npm scripts
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 🚀 Local Development

### Prerequisites
* **Node.js**: v20+ or v22+ LTS (recommended)
* **npm**: v10+

### 1. Clone the repository
```bash
git clone https://github.com/Daniel-Cossio/Portfolio.git
cd Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your browser.

---

## 📦 Build & Deployment

### Local SSG Build
To test the production static site generation locally with the GitHub Pages base href:
```bash
npm run build:gh-pages
```
The output will be prerendered and saved to `dist/app/browser`.

### Automated CI/CD
Deployment is fully automated via GitHub Actions:
1. Every commit pushed to the `main` branch triggers `.github/workflows/deploy.yml`.
2. The workflow builds the static application with Node.js 22, sets up the `404.html` fallback, and publishes to GitHub Pages via `actions/deploy-pages@v4`.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Daniel Felipe Cossio Marulanda**
* **LinkedIn:** [daniel-cossio-marulanda](https://www.linkedin.com/in/daniel-cossio-marulanda/?locale=en-US)
* **GitHub:** [@Daniel-Cossio](https://github.com/Daniel-Cossio)
* **Email:** `danielcossio195+dev@gmail.com`
