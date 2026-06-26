---
name: hopeward-page-build
description: >-
  Build or rebuild a Hopeward page (app/**/page.tsx) from an ordered list of
  already-ported component names. Use when the user gives a list of component
  names "in order" and asks to build out a page (home, about, services, a
  service detail, etc.) by composing existing components from components/.
---

# Hopeward Page Build

Compose a page from an **ordered list of component names** the user provides.
This skill assembles already-ported components (from `components/`) into a
`app/**/page.tsx`. It does NOT port new sections from the Webflow source — if a
requested component does not exist yet, use the `hopeward-section-port` skill
first to create it, then come back here.

## Inputs

The user gives a page (explicitly, or implied by context like "the home page")
and a vertical list of PascalCase component names in render order, e.g.

```
HopewardNavigation
PortedHomeHero
HomeIntro
...
HopewardFooter
```

## How components map to files

Every ported component is registered in `lib/component-registry.tsx` in
`PORTED_COMPONENT_REGISTRY`, where each entry has:

- `name` — the PascalCase export (matches the user's list)
- `slug` — kebab-case, equals the file basename
- `file` — `components/<slug>.tsx`

Resolve each requested `name` → its registry entry → import path. The named
export equals `name`, so the import is:

```tsx
import { <Name> } from "@/components/<slug>";
```

If a name is missing from the registry, search `components/` for a matching
export with `Grep` (`export function <Name>` / `export const <Name>`). If it
truly doesn't exist, STOP and tell the user it needs to be ported first
(`hopeward-section-port`).

## Which file to write

| Page the user names | Target file |
|---------------------|-------------|
| home / index        | `app/page.tsx` |
| `<slug>` (e.g. about, services, organizations) | `app/<slug>/page.tsx` |
| a service detail    | `app/<service-slug>/page.tsx` |

Slugs come from `lib/hopeward-pages.ts` (`HOPEWARD_PAGES`). Create the directory
+ `page.tsx` if it doesn't exist yet (`app/<slug>/page.tsx`).

## Page structure (the canonical wrapper)

Follow the established pattern (see `app/page.tsx`, `app/about/page.tsx`):

- **Navigation** component (e.g. `HopewardNavigation`) renders OUTSIDE `<main>`,
  first.
- **Footer** component (e.g. `HopewardFooter`, `ContactPrefooter` used as a
  prefooter is still content — keep it inside `main`; a true site footer goes
  outside) renders OUTSIDE `<main>`, last.
- Everything else renders INSIDE
  `<main className="flex flex-1 flex-col">` in the given order.

A nav component is one whose name/role is the site header/navigation
(`HopewardNavigation`). The footer is the site footer (`HopewardFooter`). If the
list contains neither, put all components inside `<main>`.

```tsx
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { PortedHomeHero } from "@/components/ported-home-hero";
// ...one import per component, alphabetized like the existing pages...
import { HopewardFooter } from "@/components/hopeward-footer";

export default function <PageName>() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <PortedHomeHero />
        {/* ...remaining sections in order... */}
      </main>
      <HopewardFooter />
    </>
  );
}
```

- `<PageName>` is PascalCase of the route (`Home`, `AboutPage`,
  `OrganizationsPage`). Match whatever the existing file already uses.
- Imports: keep the nav + content imports in one alphabetized block and any
  footer/`busted-components` import in a second block, mirroring the existing
  pages. Don't add `"use client"` — these are server components.
- If the route uses `hopewardPageMetadata`/needs `Metadata`, preserve any
  existing `export const metadata` already in the file.

## Workflow

```
- [ ] 1. Identify the target page file from the page name + HOPEWARD_PAGES slugs
- [ ] 2. Resolve every component name → import path via component-registry.tsx
- [ ] 3. STOP if any component is unported (point user to hopeward-section-port)
- [ ] 4. Write app/**/page.tsx with the canonical wrapper, components in order
- [ ] 5. ReadLints the new/edited page; fix import/type errors
- [ ] 6. Verify: dev server route 200 + browser screenshot vs. expected order
```

## Step 6: verify

The dev server is usually already running — check the `terminals` folder for
`npm run dev` and confirm its port (often NOT 3000, e.g. 3003).

```
PORT=3003   # confirm from terminal output
curl -s -o /tmp/p.html -w '%{http_code}\n' http://localhost:$PORT/<route>
```

Then load `http://localhost:$PORT/<route>` with the browser tool, take a
screenshot, and confirm the sections appear in the requested order. Cross-check
the accessibility snapshot lists content from every component in the list.

## Don'ts

- Don't port or restyle sections here — only compose existing components.
- Don't wrap nav/footer inside `<main>`; they go outside it.
- Don't reorder the user's list — render order must match exactly.
- Don't pull from `busted-components/` unless the page already does (e.g.
  `app/services/page.tsx` uses the busted `SiteHeader`/`SiteFooter`); prefer the
  ported `components/` equivalents when the user names them.
- Don't invent component names — every entry must resolve to a real export.
```
