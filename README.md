# Pulseflow homepage

A Next.js + Tailwind + Framer Motion marketing homepage for the fictional brand
**Pulseflow**. The layout follows common modern SaaS patterns (sticky blurred
nav, aurora-gradient hero, animated marquee, scroll-revealed feature grid,
sticky-scroll storytelling, animated stat counters, testimonial carousel, CTA
band, multi-column footer). All copy, brand, and visuals are original
placeholders.

> Pulseflow is a fictional company. Nothing in this repository represents a
> real product, customer, or service.

## Stack

- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS 3
- Framer Motion 11

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Script             | What it does                       |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Local dev server                   |
| `npm run build`    | Production build                   |
| `npm start`        | Serve production build             |
| `npm run lint`     | Next.js / ESLint                   |
| `npm run typecheck`| `tsc --noEmit`                     |

## Project structure

```
app/
  globals.css      Tailwind layers, theme tokens, motion-safe rules
  layout.tsx       Root layout, metadata
  page.tsx         Homepage composition
components/
  MotionPrimitives.tsx  Reveal / Stagger helpers
  Nav.tsx               Sticky nav with scroll-driven blur
  Hero.tsx              Aurora hero, parallax, product preview
  LogoMarquee.tsx       Infinite-scroll logo strip
  Features.tsx          6-tile feature grid with hover glow
  StickyStory.tsx       4-step sticky-scroll narrative
  Stats.tsx             Count-up stat block
  Testimonials.tsx      Auto-rotating quote with dot nav
  CTA.tsx               Closing CTA band with mock inbox
  Footer.tsx            4-column footer + legal row
```

## Design tokens

Defined in [`tailwind.config.ts`](tailwind.config.ts):

- `ink` (`#0A0A0F`) — page background
- `ink-soft` (`#13131A`) — alt sections
- `cream` (`#F5F1EA`) — primary text
- `accent` family — `#5B5BFF`, violet, pink, amber for gradients

The hero aurora is composed in `bg-hero-aurora` (3 stacked radial gradients).
Grid overlays use `grid-overlay`.

## Animation principles

- All scroll-triggered reveals use `viewport={{ once: true }}` to avoid
  re-triggering noise.
- Easing is shared across primitives: `[0.22, 1, 0.36, 1]`.
- `prefers-reduced-motion: reduce` short-circuits all animations via a
  global rule in [`app/globals.css`](app/globals.css).

## License

Code: MIT. Brand name "Pulseflow" and all sample copy are placeholders, free
to replace.
