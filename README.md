# Advocate's Dossier

A personal legal-profile site — academic journey, moot court, research, experience,
practice interests, recognition, résumé, and contact.

Built with **Next.js (App Router)**, **React 19**, **Tailwind CSS v4**, and **TypeScript**.
Deployed on **Vercel**.

## Getting started

```bash
pnpm install
pnpm dev
```

The site runs at http://localhost:3000.

## Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Production build           |
| `pnpm start`  | Serve the production build |
| `pnpm lint`   | Lint with ESLint           |
| `pnpm format` | Format with Prettier       |

## Structure

```
app/                  Routes (App Router). One folder per page.
  layout.tsx          Root layout: fonts, metadata, header/footer
  globals.css         Design tokens + Tailwind theme
components/           Shared components
public/               Static assets
```

Design tokens (the editorial paper/charcoal/bronze palette, `folio`, `grain`,
`surface-raised`, `link-underline` utilities) live in `app/globals.css`. Dark mode
follows the visitor's `prefers-color-scheme` — there is no theme toggle.

## Deploying

Push to the connected Git repository; Vercel detects Next.js and builds with no
extra configuration. Set the install command to `pnpm install` if it is not
inferred from `pnpm-lock.yaml`.
