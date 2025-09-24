# Portfolio Development Guide

## Project Overview

A modern full-stack developer portfolio built with Next.js 15 (App Router), TypeScript, and Ant Design. The site features a minimalist design, mobile-first approach, and is optimized for SEO and performance.

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: SASS with CSS Modules (.module.scss)
- **UI Library**: Ant Design
- **Image Optimization**: @vercel/og for dynamic OG images
- **Deployment**: Own VPS (coolify)

## Project Structure

```
src/
├── app/
│   ├── globals.scss            # Global styles
│   ├── layout.tsx              # Root layout with Ant Design provider
│   ├── page.tsx                # Root page (imports from _home)
│   ├── _home/
│   │   ├── page.tsx            # Home/Hero section component
│   │   └── home.module.scss    # Home page styles
│   ├── about/
│   │   ├── page.tsx            # About page
│   │   └── about.module.scss   # About page styles
│   ├── projects/
│   │   ├── page.tsx            # Projects showcase
│   │   └── projects.module.scss # Projects page styles
│   ├── experience/
│   │   ├── page.tsx            # Professional experience
│   │   └── experience.module.scss # Experience page styles
│   ├── contact/
│   │   ├── page.tsx            # Contact form
│   │   └── contact.module.scss # Contact page styles
│   ├── api/contact/route.ts    # Contact form API endpoint
│   ├── sitemap.ts              # SEO sitemap
│   ├── robots.ts               # SEO robots.txt
│   └── opengraph-image.tsx     # Dynamic OG images
├── components/
│   ├── header/
│   │   ├── Header.tsx          # Header component
│   │   └── Header.module.scss  # Header styles
│   ├── footer/
│   │   ├── Footer.tsx          # Footer component
│   │   └── Footer.module.scss  # Footer styles
│   ├── project-card/
│   │   ├── ProjectCard.tsx     # Project card component
│   │   └── ProjectCard.module.scss # Project card styles
│   └── contact-form/
│       ├── ContactForm.tsx     # Contact form component
│       └── ContactForm.module.scss # Contact form styles
├── lib/
│   ├── types.ts                # TypeScript interfaces
│   └── i18n.ts                 # Internationalization utilities
├── locales/
│   └── en.json                 # English translations
└── public/
    ├── images/                 # Static images
    └── icons/                  # Icons and favicons
```

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# Formatting
npm run format

# Check formatting
npm run format:check

# Type checking
npx tsc --noEmit
```

## Key Features

### 1. Server-First Architecture

- Maximize Server Components usage
- Minimize Client Components (only for interactivity)
- Optimized performance and SEO

### 2. Internationalization Ready

- JSON-based translations in `src/locales/`
- Easy to add new languages
- Server-side translation loading

### 3. SEO Optimization

- Metadata API for each page
- Dynamic Open Graph images
- JSON-LD structured data
- Sitemap and robots.txt generation

### 4. Mobile-First Design

- Responsive Ant Design components
- Custom SASS modules for fine-tuning
- Touch-friendly interactions

### 5. Performance Optimized

- Next.js Image optimization
- Font optimization
- Minimal client-side JavaScript
- Core Web Vitals focused

## Pages & Sections

### Home (`/`)

- Hero section with introduction
- Call-to-action buttons
- JSON-LD Person schema

### About (`/about`)

- Professional bio
- Technology stack
- Skills and expertise

### Projects (`/projects`)

- Featured project showcase
- Technology tags
- Links to demos and GitHub

### Experience (`/experience`)

- Professional history
- Impact metrics
- Company information

### Contact (`/contact`)

- Contact form (Server Action)
- Social links
- Professional email

## Styling Guidelines

### SASS Modules

- Use `.module.scss` for component styles
- Follow BEM naming convention
- Leverage Ant Design tokens

```scss
// Example: components/Hero/Hero.module.scss
.hero {
  padding: 4rem 2rem;
  text-align: center;

  &__title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.25rem;
    opacity: 0.8;
  }
}
```

### Ant Design Integration

- Use Ant Design components as base
- Customize with CSS modules when needed
- Maintain design system consistency

## API Routes

### Contact Form (`/api/contact`)

```typescript
// POST /api/contact
{
  name: string;
  email: string;
  message: string;
}
```

## SEO Implementation

### Metadata

Each page includes comprehensive metadata:

- Title and description
- Open Graph tags
- Twitter Card data
- Canonical URLs

### Structured Data

JSON-LD schema for:

- Person (home page)
- Organization
- Breadcrumbs

### Performance

- Core Web Vitals optimization
- Image optimization
- Font loading strategies

## Development Best Practices

### Code Organization

- Server Components by default
- Client Components only when needed
- Shared types in `lib/types.ts`
- Utilities in `lib/utils.ts`

### Styling

- Mobile-first responsive design
- SASS variables for consistency
- Ant Design theme customization

### Performance

- Image optimization with next/image
- Dynamic imports for heavy components
- Minimal client-side bundles

### SEO

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Meta descriptions under 160 characters

## Deployment

### Coolify (VPS Deployment)

1. Connect GitHub repository to Coolify
2. Configure build settings:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Port: 3000
3. Set environment variables in Coolify dashboard
4. Auto-deploy on main branch push
5. Custom domain configuration through Coolify

### Environment Variables

```env
# Contact form (optional)
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=your@email.com
```

## Content Management

### Adding Projects

Update the projects data in the respective page component:

```typescript
const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Brief description',
    technologies: ['React', 'Node.js'],
    demoUrl: 'https://demo.com',
    githubUrl: 'https://github.com/user/repo',
    imageUrl: '/images/project.jpg',
  },
];
```

### Adding Experience

Similar pattern for experience entries in the experience page.

### Updating Content

All user-facing text is in `src/locales/en.json` for easy maintenance and future internationalization.

## Performance Monitoring

- Monitor Core Web Vitals with Lighthouse
- Regular performance audits
- Performance budget tracking
- Custom analytics integration if needed

## Future Enhancements

- Blog section with MDX
- Dark/light theme toggle
- Animation library integration
- CMS integration (Sanity/Contentful)
- Multi-language support
