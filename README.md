# Portafolio Personal - Fullstack Developer / DevOps Engineer

Este repositorio contiene el código fuente de mi sitio web de portafolio personal, construido con Angular y Tailwind CSS.

## Stack Tecnológico

*   **Framework Principal:** Angular v21.0.0 (Zoneless, Standalone Components, Control Flow)
*   **Lenguaje:** TypeScript v5.9.2
*   **Estilos:** Tailwind CSS v4.1.12 (Mobile-first, Utility-first)
*   **Iconos:** Angular Material Icons (`@angular/material/icon` v21.0.0)
*   **Herramientas de Construcción:** Angular CLI v21.0.0, Vite (vía Angular Build)

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu sistema operativo:

*   **Node.js:** v20.x o superior (Recomendado usar nvm o fnm)
*   **npm:** v10.x o superior (Viene incluido con Node.js)
*   **Angular CLI:** (Opcional para comandos globales, se puede usar `npx ng`)

## Manual de Instalación

Sigue estos pasos para inicializar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/tu-portafolio.git
    cd tu-portafolio
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Assets (CVs):**
    Coloca tus archivos PDF de currículum en la carpeta `public/assets/`. Asegúrate de que los nombres coincidan con los enlaces en el código:
    *   `public/assets/cv-es.pdf` (Versión en Español)
    *   `public/assets/cv-en.pdf` (Versión en Inglés)

4.  **Levantar el servidor local de desarrollo:**
    ```bash
    npm start
    ```
    El sitio estará disponible en `http://localhost:3000`.
