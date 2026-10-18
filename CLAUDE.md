# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Exequiel Sosa Portfolio** - A personal portfolio website built with Next.js showcasing projects, professional experience, and skills. The site features multiple pages, animations, and is optimized for SEO.

## Tech Stack

- **Framework:** Next.js 13.4.4 (Pages Router)
- **UI Library:** React 18.2.0
- **Styling:** styled-components — declarado como `^6.0.5` en `dependencies` pero **pinneado a v5** vía `resolutions` en `package.json`. La API en uso es la de v5; no migrar a sintaxis v6 sin remover esa resolution primero.
- **Analytics:** Google Analytics (gtag, ID hardcodeado en [gtag.js](gtag.js)) + Vercel Analytics
- **Animations:** AOS (Animate On Scroll)
- **Email:** nodemailer (formulario de contacto)
- **Utilities:** react-device-detect (responsive detection)
- **Package manager:** yarn (hay `yarn.lock` versionado — preferirlo sobre npm para mantener consistencia con el lockfile).

## Architecture & Project Structure

```
exequiel-sosa/
├── pages/                      # Next.js pages (each file = route)
│   ├── _app.js                # Global app wrapper, analytics, loader setup
│   ├── _document.js           # HTML structure, fonts
│   ├── index.js               # Home page
│   ├── about-me.js            # About Me page
│   ├── projects.js            # Projects page
│   ├── contact-me.js          # Contact form page
│   └── api/                   # API routes
│       ├── contact.js         # Contact form handler (sends emails)
│       └── hello.js           # Health check endpoint
├── components/                # Reusable React components
│   ├── atoms/                 # Basic components (inputs, titles, cards)
│   ├── molecules/             # Combined atoms (forms, sections)
│   ├── organisms/             # Complex sections (headers, menus, forms)
│   ├── screens/               # Full-page screen components
│   ├── layouts/               # Layout wrappers
│   └── index.js               # Component exports
├── constants/                 # Static data (project info, company names, etc.)
│   ├── index.js               # Main constants export
│   ├── dataCards.js           # Project card data (desktop)
│   ├── dataCardsMobile.js     # Project card data (mobile)
│   ├── dataBaufest.js         # Baufest project details
│   ├── dataDanone.js          # Danone project details
│   └── data[Company].js       # Individual company/project data
├── seo/                       # SEO components (metadata, structured data)
│   ├── seoHome.js
│   ├── seoAbout.js
│   ├── seoProjects.js
│   └── seoContact.js
├── hooks/                     # Custom React hooks
│   └── useBreakpoints.js      # Responsive breakpoints hook
├── lib/                       # Cliente HTTP / helpers de fetching
│   └── api.js
├── config/                    # Configuración fuera del runtime de Next
│   └── nodemailer.js          # Transporte de email (usado por /api/contact)
├── templates/                 # Plantillas HTML (no son páginas)
│   └── email.html             # Template del correo enviado por el contact form
├── styles/                    # Global CSS
│   └── globals.css
├── public/                    # Static assets (images, SVGs)
├── next.config.js             # Next.js configuration (SEO headers, image optimization, i18n)
├── postcss.config.js          # PostCSS configuration
├── jsconfig.json              # Path aliases (@/*)
├── .eslintrc.json             # ESLint rules (extends next/core-web-vitals)
├── gtag.js                    # Google Analytics tracking functions
├── SEO-IMPROVEMENTS.md        # Bitácora detallada de las mejoras de SEO aplicadas
└── package.json               # Dependencies

```

## Common Development Commands

```bash
# Install dependencies (preferir yarn por el yarn.lock versionado)
yarn install      # o: npm install

# Run development server
yarn dev          # o: npm run dev

# Build for production
yarn build        # o: npm run build

# Start production server
yarn start        # o: npm start

# Lint code
yarn lint         # o: npm run lint

# Run linter with auto-fix
yarn lint --fix   # o: npm run lint -- --fix
```

## Key Architectural Patterns

### 1. Component Hierarchy
Components follow an **Atoms → Molecules → Organisms → Screens** pattern:
- **Atoms:** Single UI elements (buttons, inputs, titles, cards)
- **Molecules:** Combinations of atoms (sections, form groups)
- **Organisms:** Complex sections (forms, menus, layouts)
- **Screens:** Full-page components that handle logic and composition

### 2. Styling Strategy
- **Global styles:** `styles/globals.css` (resets, fonts, base styles)
- **Component styles:** `styled-components` within component files
- Each component imports styled-components and defines its styles locally
- Media queries use `@media` within styled components for responsive design

### 3. Data Management
- Static data is stored in `/constants` folder (not in components)
- Each project/company has its own `data[Name].js` file
- Main export in `constants/index.js` for easy imports
- Example: Project data for "Baufest" is in `dataBaufest.js`

### 4. SEO & Metadata
- Each page has a corresponding SEO component in `/seo` folder
- SEO components render `<Head>` with metadata, open graph tags, structured data
- Example: Home page imports `SeoHome` from `seo/seoHome.js`

### 5. Analytics Integration
- Google Analytics: Configured in `_app.js` with `gtag.js` helper
- Vercel Analytics: Imported and rendered in `_app.js` as `<Analytics />`
- Page views tracked automatically on route changes

## Important Implementation Details

### Route-Based Pages
Using Next.js Pages Router (not App Router):
- `pages/about-me.js` → accessible at `/about-me`
- `pages/projects.js` → accessible at `/projects`
- Nested routes use file structure: `pages/api/contact.js` → `/api/contact`

### Styled Components with Next.js
- styled-components is configured with babel plugin (`babel-plugin-styled-components`)
- SSR works automatically with Next.js
- Import styled at top of file: `import styled from "styled-components"`

### Contact Form API Route
El flujo del formulario de contacto está partido en tres archivos:
1. `pages/api/contact.js` — handler de la API route que recibe el POST.
2. `config/nodemailer.js` — configuración del transporte (credenciales/SMTP). Es el lugar correcto donde tocar para cambiar el remitente o el provider, no la API route.
3. `templates/email.html` — plantilla HTML del cuerpo del correo. Editar acá para cambiar la estética del mail recibido.

### Animation with AOS
- Initialized in `_app.js` with `Aos.init({ duration: 2000 })`
- Applied to components using `data-aos="[animation-type]"` attribute
- Common animations: `zoom-in`, `fade-up`, `slide-left`, etc.

### Animaciones AOS y renderizado inicial (importante)
`_app.js` ya **no** monta un splash `<Loader />` (esa sección quedó obsoleta) y tampoco envuelve la app en `<span data-aos="zoom-in">`: ese wrapper aplicaba `opacity: 0` a todo el árbol hasta que hidrataba el JS, degradando el LCP. AOS sigue inicializado porque [ThankYou](components/molecules/ThankYou/index.js) lo usa. **No volver a poner `data-aos` en un contenedor global.**

### Path aliases
[jsconfig.json](jsconfig.json) define `@/*` apuntando a la raíz del proyecto. Ejemplos en uso:
- `import "@/styles/globals.css"`
- `import { Loader } from "@/components"`

Preferir el alias sobre rutas relativas largas (`../../../`).

### i18n
[next.config.js](next.config.js) tiene `i18n: { locales: ['en'], defaultLocale: 'en' }`. El sitio es monolingüe (inglés) a nivel routing; el contenido en pantalla puede estar en español pero las URLs no llevan prefijo de locale.

### Image Assets
- Located in `public/` folder (directly accessible at `/[filename]`)
- Common images: project screenshots, company logos, icons
- SVG files used for icons and inline graphics

## SEO & Performance Features

From `next.config.js`:
- **Security headers:** Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, etc.
- **Image optimization:** AVIF and WebP formats, device-specific sizes
- **DNS prefetch:** Enabled for faster external resource loading
- **Compression:** Enabled by default
- **Trailing slashes:** Disabled for clean URLs
- **Analytics:** Vercel Analytics configured, GA tracking enabled

## Common Workflows

### Adding a New Project Card
1. Create `constants/data[ProjectName].js` with project details
2. Import in `constants/index.js`
3. Add data reference to `dataCards.js` (desktop) and `dataCardsMobile.js` (mobile)
4. Component will automatically pick up the data

### Adding a New Page
1. Create file in `pages/` folder (e.g., `pages/new-page.js`)
2. Create corresponding SEO component in `seo/` folder
3. Import SEO component at top of page
4. Page is automatically accessible at `/new-page`

### Updating Company/Project Information
1. Find the corresponding `data[Company].js` file in `constants/`
2. Update data structure
3. If referenced in multiple places, check `dataCards.js` and `dataCardsMobile.js`

## Configuration & Customization

### Environment Variables
- Google Analytics ID hardcodeado en [gtag.js](gtag.js) (no usa `process.env`).
- Configuración SMTP / credenciales del email en [config/nodemailer.js](config/nodemailer.js). Si en algún momento se mueven a variables de entorno, deben quedar en `.env.local` (no commitear).

### Adding Global Styles
Edit `styles/globals.css` for site-wide CSS changes

### Responsive Breakpoints
- Styles use inline media queries: `@media (min-width: 1440px)`
- Common pattern: mobile-first design with breakpoints at 640px, 750px, 1080px, 1200px, 1440px+

## Deployment

The site is deployed on **Vercel** (note: `@vercel/analytics` is installed).

## Testing & Linting

```bash
npm run lint                    # Check for linting issues
npm run lint -- --fix          # Auto-fix linting issues
```

Current ESLint config extends `next/core-web-vitals` (basic Next.js best practices).

## Estado actual

Portfolio completamente funcional con:
- ✅ 4 páginas principales (Home, About Me, Projects, Contact)
- ✅ Proyectos profesionales en `constants/`: Baufest, Danone, Falabella, Kinsper, Lapzo, Skydropx, Vlex, Meli
- ✅ Datos personales / sección About Me: AboutMe, Family, Freelance, Hardware, Hight, Mobile, Music, Others, University
- ✅ SEO optimizado por página (ver [SEO-IMPROVEMENTS.md](SEO-IMPROVEMENTS.md) para el detalle de cambios y keywords)
- ✅ Animaciones AOS
- ✅ Sistema de contacto con nodemailer (API route + transporte en `config/` + template en `templates/`)
- ✅ Analytics (Google + Vercel)
- ✅ Responsive design (hook `useBreakpoints` + media queries en styled-components)
- ✅ Security headers y optimizaciones de rendimiento
- ✅ Blog con ISR desde Supabase, TOC, related posts y sitemap dinámico

### Trabajo SEO en curso (sesión 2026-09-04)

Auditoría del HTML real servido a Googlebot. Ver [BRIEF-SEO.md](BRIEF-SEO.md) para el contexto de negocio.

Hecho:
- ✅ **LCP**: eliminado el `<span data-aos="zoom-in">` global de `_app.js` que dejaba el sitio entero en `opacity: 0` hasta la hidratación.
- ✅ **Enlaces internos**: `MenuMobile` ahora se monta siempre (su contenedor ya se ocultaba solo vía `visibility`, el `{open &&}` era redundante) y se agregó una `<nav>` con anchor text descriptivo en `Footer` y `FooterMobile`. Las 5 páginas pasaron de 1 enlace interno (el PDF del CV) a 5 enlaces de navegación en el HTML prerenderizado. Esto ataca las 13 URLs "descubierta sin indexar" de GSC.

Pendiente:
- ⏳ **Contenido SSR**: `useBreakpoints` devuelve `false` en SSR, así que el crawler siempre recibe la rama mobile → `/` sirve ~300 caracteres y `/projects` ~193. Mover el switch desktop/mobile de JS a media queries CSS y renderizar contenido real en la home.
- ⏳ Redes sociales del footer son `<div onClick>`: pasarlas a `<a rel="me">` para reforzar el `sameAs` del schema.
- ⏳ `lastmod` del sitemap usa la fecha de hoy en cada request para las páginas estáticas; conviene una fecha fija por página.

### Mejoras generales del repo (sesión 2026-10-18)

Hecho:
- ✅ `pages/api/contact.js`: escape de HTML del input en el mail, solo se procesan los campos conocidos, se quitó el `console.log` con datos personales y el error ya no expone `err.message` (devuelve 500 genérico).
- ✅ `hooks/useBreakpoints.js`: el cleanup de `useMediaQuery` quitaba el listener de `window` en vez de `media` (fuga de listeners).

Pendiente:
- ⏳ Anti-spam en el form de contacto (honeypot).
- ✅ `logo_branding.png` (3.7 MB, 1940px) → `logo_branding.avif` (47 KB, 800px) en `dataCards`/`dataCardsMobile`. El PNG original quedó en `public/` sin referencias (borrar junto con la limpieza).
- ⏳ Ninguna imagen usa `next/image` (las cards usan `background-image`).
- ⏳ Quitar `react-device-detect` (lo usan `header` y `HeaderMobile`, duplica `useBreakpoints`).
- ⏳ Limpieza: `pages/api/hello.js`, CVs 2024/2025 sin referencias en `public/`, deps de lint/postcss a `devDependencies`.
- ⏳ `timingSafeEqual` para la API key en `pages/api/blog/create.js`.
- ⏳ Este CLAUDE.md está desactualizado: dice Next 13.4.4 (es 14.2.35), babel plugin (es SWC) y que el mail usa `templates/email.html` (el HTML está inline en `contact.js`).
