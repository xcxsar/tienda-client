## Descripción

Este proyecto es una aplicación cliente creada con **React** y **Vite**. Proporciona una interfaz web para la gestión ventas e inventario de una tienda.

## Tecnologías principales

- React
- Vite
- Axios

## Requisitos

- Node.js 22
- npm, yarn o pnpm

## Instalación

1. Abre una terminal en la carpeta del proyecto.
2. Instala las dependencias:

- Con npm:
    `npm install`

- Con yarn:
    `yarn install`

- Con pnpm:
    `pnpm install`

## Desarrollo

Para iniciar el servidor de desarrollo y ver la aplicación en el navegador:

- Con npm:
    `npm run dev`

- Con yarn:
    `yarn dev`

- Con pnpm:
    `pnpm dev`

## Compilación para producción

Para generar los archivos estáticos listos para producción:

- Con npm:
    `npm run build`

- Con yarn:
    `yarn build`

- Con pnpm:
    `pnpm build`

Para previsualizar el resultado de la compilación:

- Con npm:
    `npm run preview`

## Linter

Este proyecto incluye configuración de ESLint. Para ejecutar el linter:

- Con npm:
    `npm run lint`

- Con yarn:
    `yarn lint`

- Con pnpm:
    `pnpm lint`

## Estructura del proyecto

- `src/`: código fuente de la aplicación.
    - `assets/`: imágenes y otros recursos estáticos.
    - `components/`: componentes reutilizables de React.
    - `pages/`: vistas principales de la aplicación.
    - `services/`: llamadas a la API y otros servicios.
    - `main.jsx`: punto de entrada de la aplicación.
    - `App.jsx`: componente raíz.
- `node_modules/`: dependencias instaladas **(no se debe subir al repositorio)**.
- `package.json`: lista de dependencias y scripts del proyecto.
- `vite.config.js`: configuración de Vite.
- `eslint.config.js`: configuración de ESLint.
- `.env`: variables de entorno **(no se debe subir al repositorio)**.