# Intactic Innovations — Website

Marketing & corporate website for **Intactic Innovations**, built with Next.js (Pages Router), CSS Modules, and Font Awesome icons.

## Stack

- **Framework**: Next.js `^14.2.18`
- **UI**: React `^18.3.1`, CSS Modules, Font Awesome 6
- **Image CDN**: Cloudinary (via `next-cloudinary` + `next/image`)
- **Speed Insights**: `@vercel/speed-insights`

## Getting Started

> PowerShell note: the execution policy blocks `npm.ps1` — use `npm.cmd` instead.

```powershell
npm.cmd install --legacy-peer-deps
npm.cmd run dev
```

The site runs on <http://localhost:3000>.

### Why `--legacy-peer-deps`?

`next-cloudinary@^2.0.5` declares peer compatibility with Next 12/13 only. We're pinned to Next 14 for security and stability, so the legacy flag skips the strict peer check. (Migration to `next-cloudinary@^6` is on the roadmap.)

## Scripts

| Command            | Purpose                                      |
| ------------------ | -------------------------------------------- |
| `npm.cmd run dev`  | Start the dev server on port 3000            |
| `npm.cmd run build`| Production build                             |
| `npm.cmd start`    | Serve the production build                   |
| `npm.cmd run lint` | Run ESLint (`next/core-web-vitals`)          |
| `npm.cmd run format` | Auto-format all JS/CSS/JSON/MD with Prettier |

## Project Structure

```
itr/
├─ components/
│  ├─ Header.js            ← site header + mobile drawer
│  ├─ Footer.js            ← site footer
│  ├─ sections/            ← 11 page sections (Hero, Capabilities, Contact, …)
│  └─ ui/                  ← small UI primitives (Counter, TechPill)
├─ data/
│  └─ contentData.js       ← all static copy & data
├─ pages/
│  ├─ index.js             ← homepage (composes all sections)
│  ├─ about-us.js
│  ├─ contact-us.js
│  ├─ terms.js
│  ├─ privacy.js
│  ├─ cookies.js
│  └─ _app.js
├─ public/                 ← static assets
├─ styles/
│  └─ globals.css          ← design tokens + header/drawer/footer + utility classes
├─ next.config.js
├─ package.json
└─ TODO.md                 ← Bengali-language maintenance checklist
```

## Design Tokens

Defined in `styles/globals.css`:

- `--color-brand` (Cyan), `--color-text-dark` (Navy Slate), `--color-text-muted`, `--color-border`
- `--header-height-normal`, `--header-height-sticky`
- `--container-max-width`
- `--transition-fast`, `--transition-normal`, `--transition-slow`

## License

Proprietary — © 2026 Intactic Innovations. All rights reserved.