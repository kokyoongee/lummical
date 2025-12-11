# Lummical - Infrastructure & Architecture

## Overview

Lummical is a modern, animated business solutions website built with React, TypeScript, and Framer Motion. The site features a glassmorphism design system with a blue/cyan color palette.

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3.x | UI Framework |
| TypeScript | 5.6.x | Type Safety |
| Vite | 5.4.x | Build Tool & Dev Server |
| Tailwind CSS | 3.4.x | Utility-first CSS |
| Framer Motion | 11.x | Animations |

## Project Structure

```
lummical/
├── public/                  # Static assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── common/         # Reusable UI components
│   │   │   ├── GlassCard.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── AnimatedCounter.tsx
│   │   │   ├── SectionHeading.tsx
│   │   │   └── ProgressRing.tsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/       # Page sections
│   │       ├── Hero/
│   │       ├── Services/
│   │       ├── Stats/
│   │       ├── HowItWorks/
│   │       ├── Testimonials/
│   │       ├── Pricing/
│   │       └── Contact/
│   ├── hooks/              # Custom React hooks
│   │   ├── useInView.ts
│   │   ├── useMediaQuery.ts
│   │   └── useScrollProgress.ts
│   ├── lib/                # Utilities & constants
│   │   ├── variants.ts     # Framer Motion variants
│   │   └── utils.ts        # Helper functions
│   ├── data/               # Static data
│   │   ├── services.ts
│   │   ├── stats.ts
│   │   ├── testimonials.ts
│   │   ├── pricing.ts
│   │   └── howItWorks.ts
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + Tailwind
├── docs/                   # Documentation
├── tailwind.config.ts      # Tailwind configuration
├── vite.config.ts          # Vite configuration
└── package.json
```

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | #0066FF | CTAs, links, primary actions |
| Cyan | #00D4FF | Accents, glows, highlights |
| Dark | #0A0F1C | Page background |
| Darker | #060A14 | Deeper backgrounds |
| Glass BG | rgba(255,255,255,0.05) | Glass card backgrounds |
| Glass Border | rgba(255,255,255,0.1) | Glass card borders |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800

### Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| xs | 475px | Extra small phones |
| sm | 640px | Small tablets / large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large desktops |

## Animation System

### Framer Motion Variants

Located in `src/lib/variants.ts`:

- `fadeUpVariants` - Fade in with upward movement
- `scaleInVariants` - Scale up with fade
- `staggerContainerVariants` - Parent for staggered children
- `slideInLeftVariants` / `slideInRightVariants` - Horizontal slides
- `wordRevealContainerVariants` - Word-by-word text reveal
- `glowPulseVariants` - Pulsing glow effect
- `floatVariants` - Floating animation

### Custom Hooks

- `useInView` - Intersection Observer for scroll-triggered animations
- `useScrollProgress` - Track scroll position as percentage
- `useMediaQuery` - Responsive breakpoint detection
- `useReducedMotion` - Respect user's reduced motion preference

## Key Features

1. **Glassmorphism Design** - Frosted glass effect with blur and transparency
2. **Scroll Animations** - Elements animate as they enter viewport
3. **Responsive Layout** - Mobile-first design with tablet/desktop enhancements
4. **Interactive Elements** - Hover effects, transitions, and micro-interactions
5. **Performance Optimized** - Lazy loading, code splitting ready

## Development

### Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment

- Node.js 18+
- npm 9+

## Deployment

The site can be deployed to any static hosting:

1. **Vercel** (Recommended)
   - Connect GitHub repo
   - Auto-deploys on push

2. **Netlify**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **GitHub Pages**
   - Use `vite-plugin-gh-pages`

## Future Enhancements

- [ ] Add dark/light mode toggle
- [ ] Implement contact form backend
- [ ] Add blog section
- [ ] Integrate analytics
- [ ] Add loading states/skeleton screens
- [ ] Implement lazy loading for sections
- [ ] Add internationalization (i18n)
