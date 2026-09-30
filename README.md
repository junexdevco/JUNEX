# JUNEX — Landing

Landing page de JUNEX construida con Next.js (App Router) + Tailwind CSS v4.
El diseño está inspirado en la estética de koyeb.com (paleta, tipografía,
alternancia de secciones claras/oscuras), pero con contenido, componentes y
CSS propios de JUNEX.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

`npm run build` genera páginas 100% estáticas (`○ (Static)`), así que el
sitio se puede desplegar en cualquier hosting estático o serverless.

## Desplegar

### Opción A — Vercel (recomendada, cero configuración)

1. Sube el proyecto a un repo de GitHub/GitLab/Bitbucket.
2. Entra a [vercel.com/new](https://vercel.com/new) e importa el repo.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada.
4. Cada push a `main` hace un deploy automático.

También puedes desplegar sin subir a git, usando la CLI:

```bash
npx vercel
```

### Opción B — Netlify

1. Sube el proyecto a un repo git.
2. En Netlify: "Add new site" → "Import an existing project".
3. Build command: `npm run build` — Netlify detecta Next.js vía su plugin
   oficial automáticamente.

## Estructura

- `app/` — layout, página principal y estilos globales.
- `components/` — `Header`, `Footer`, `Globe` (animación canvas del hero) y
  `components/sections/*` (Hero, NextGen, CoreServices, Enterprise, Cta).
- `scripts/extract-reference.mjs` — script de Playwright usado solo como
  referencia de diseño durante el desarrollo (no se despliega).
- `reference/` — capturas y tokens de diseño extraídos como referencia
  visual. Está en `.gitignore`: no se sube al repo ni se despliega.

## Pendiente antes de producción

- Reemplazar `hola@junex.dev` en `components/sections/Cta.tsx` por el correo
  real de contacto.
- Revisar/ajustar el copy de servicios y métricas con datos reales.
- Configurar dominio propio y `metadataBase` en `app/layout.tsx` si agregas
  imágenes Open Graph.
