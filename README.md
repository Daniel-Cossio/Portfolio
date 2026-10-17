# Daniel Cossio — Personal Portfolio

[![Deploy to GitHub Pages](https://github.com/Daniel-Cossio/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Daniel-Cossio/Portfolio/actions/workflows/deploy.yml)
![Angular](https://img.shields.io/badge/Angular-21.0-DD0031?style=flat&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat&logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
[![Live Demo](https://img.shields.io/badge/Website-Live_on_GitHub_Pages-10B981?style=flat&logo=github)](https://daniel-cossio.github.io/Portfolio/)

Personal portfolio web application of **Daniel Cossio** (Java Software Architect & Systems Engineer). Built with **Angular 21** and **Tailwind CSS v4**, configured for high-performance **Static Site Generation (SSG)** and automated deployment via **GitHub Actions** to **GitHub Pages**.

🔗 **Live Portfolio:** [https://daniel-cossio.github.io/Portfolio/](https://daniel-cossio.github.io/Portfolio/)

---

## 🏛️ Architectural Highlights & Engineering Decisions

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
| **Styling** | Tailwind CSS v4, PostCSS |
| **UI Components & Icons**| Angular Material Icons (`@angular/material/icon`), Angular CDK |
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
│   │   │   ├── navbar.ts       # Responsive navigation header
│   │   │   ├── hero.ts         # Hero section & core metrics overview
│   │   │   ├── experience.ts   # Interactive career pathway & timeline
│   │   │   ├── skills.ts       # Categorized competency grid
│   │   │   ├── projects.ts     # Curated open-source GitHub projects
│   │   │   ├── cv.ts           # Dual-language resume download hub
│   │   │   ├── contact.ts      # Anti-scraping contact & social links
│   │   │   └── footer.ts       # Footer & copyright
│   │   ├── models/
│   │   │   └── project.ts      # TypeScript interfaces
│   │   ├── app.component.ts    # Root standalone layout component
│   │   └── app.config.ts       # Angular application configuration
│   ├── index.html              # HTML shell
│   ├── main.server.ts          # Server prerendering entry point
│   ├── main.ts                 # Client bootstrap entry point
│   └── styles.css              # Global styles & Tailwind CSS v4 directives
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
