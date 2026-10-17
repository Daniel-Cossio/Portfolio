# Portafolio Personal - Daniel Cossio

Sitio web de portafolio personal construido con Angular y Tailwind CSS, desplegado automáticamente en **GitHub Pages**.

🔗 **Sitio en vivo:** [https://daniel-cossio.github.io/Portfolio/](https://daniel-cossio.github.io/Portfolio/)

---

## 🛠️ Stack Tecnológico

*   **Framework:** Angular v21 (Standalone Components, Signals, Zoneless)
*   **Generación:** Static Site Generation (SSG) / Prerendered HTML
*   **Estilos:** Tailwind CSS v4
*   **Iconos:** Angular Material Icons (`@angular/material/icon`)
*   **CI/CD:** GitHub Actions (despliegue automático a GitHub Pages en cada push a `main`)
*   **Hosting:** GitHub Pages (gratuito con SSL/HTTPS)

---

## 🚀 Desarrollo Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Daniel-Cossio/Portfolio.git
cd Portfolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar servidor local
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

---

## 📦 Compilación y Despliegue

### Compilar localmente para GitHub Pages:
```bash
npm run build:gh-pages
```
Los archivos estáticos generados se guardan en `dist/app/browser`.

### Despliegue automático:
El proyecto cuenta con un workflow en `.github/workflows/deploy.yml`. Cada vez que envías cambios a la rama `main` (`git push origin main`), GitHub compila y publica automáticamente la versión más reciente en GitHub Pages.

> **Nota:** Asegúrate de tener activado GitHub Pages en el repositorio:
> `Settings > Pages > Build and deployment > Source: GitHub Actions`.
