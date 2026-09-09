# ailrezashafaee.github.io

Personal portfolio — [ailrezashafaee.github.io](https://ailrezashafaee.github.io)

React 19 + TypeScript + Vite. Monochrome, no UI library, no analytics, no cookies.

## Develop

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

`main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

## Structure

```
src/
  App.tsx            page composition
  data.ts            roles, projects, stack, links
  styles.css         design tokens and all styling
  components/        Hero, Work, Projects, Stack, Contact, Marquee, Cursor, Reveal
  hooks/             useTheme, useScrollProgress, useReducedMotion
```

## Notes

- Colour scheme follows the system setting and can be overridden with the toggle;
  the choice is kept in `localStorage` and applied before first paint.
- `Reveal` wraps sections in an `IntersectionObserver` and staggers them by index.
- All motion is disabled under `prefers-reduced-motion: reduce`.
- Fonts are Inter and JetBrains Mono from Google Fonts, with system fallbacks.
