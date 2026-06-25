# Hopeward (React)

Next.js marketing website for Hopeward, deployed on Vercel.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- npm

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project structure

```
app/           # Routes, layouts, global styles
components/    # Reusable UI and section components
public/        # Static assets (images, fonts, etc.)
```

## Deploy on Vercel

Push this repo to GitHub and import it in the [Vercel dashboard](https://vercel.com/new), or use the Vercel CLI:

```bash
npx vercel
```

Vercel auto-detects Next.js — no extra configuration required.
