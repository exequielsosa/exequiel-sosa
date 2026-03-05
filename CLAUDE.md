# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Exequiel Sosa Portfolio** - A personal portfolio website built with Next.js showcasing projects, professional experience, and skills. The site features multiple pages, animations, and is optimized for SEO.

## Tech Stack

- **Framework:** Next.js 13.4.4 (Pages Router)
- **UI Library:** React 18.2.0
- **Styling:** styled-components 6.0.5 + PostCSS + Autoprefixer
- **Analytics:** Google Analytics (gtag) + Vercel Analytics
- **Animations:** AOS (Animate On Scroll)
- **Email:** nodemailer (for contact form)
- **Utilities:** react-device-detect (responsive detection)

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
├── styles/                    # Global CSS
│   └── globals.css
├── public/                    # Static assets (images, SVGs)
├── next.config.js             # Next.js configuration (SEO headers, image optimization)
├── postcss.config.js          # PostCSS configuration
├── jsconfig.json              # Path aliases (@/*)
├── .eslintrc.json             # ESLint rules (extends next/core-web-vitals)
├── gtag.js                    # Google Analytics tracking functions
└── package.json               # Dependencies

```

## Common Development Commands

```bash
# Install dependencies
npm install  # or yarn install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Lint code
npm run lint

# Run linter with auto-fix
npm run lint -- --fix
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
- Form submission goes to `pages/api/contact.js`
- Uses nodemailer to send emails
- Handle both request/response and error cases

### Animation with AOS
- Initialized in `_app.js` with `Aos.init({ duration: 2000 })`
- Applied to components using `data-aos="[animation-type]"` attribute
- Common animations: `zoom-in`, `fade-up`, `slide-left`, etc.

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
- Google Analytics ID in `gtag.js` (line 1)
- Email configuration in `pages/api/contact.js` (if needed for nodemailer)

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
- ✅ 8+ proyectos showcaseados (Baufest, Danone, Falabella, Kinsper, Lapzo, SkyDropx, Vlex, Meli)
- ✅ SEO optimizado por página
- ✅ Animaciones AOS
- ✅ Sistema de contacto con nodemailer
- ✅ Analytics (Google + Vercel)
- ✅ Responsive design
- ✅ Security headers y optimizaciones de rendimiento
