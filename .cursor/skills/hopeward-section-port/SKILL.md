---
name: hopeward-section-port
description: >-
  Port a section of the original Hopeward Webflow site (hopeward-26/*.html) into
  a faithful React component in this Next.js app. Use when asked to port,
  recreate, or "un-bust" a Hopeward homepage/about/services/contact section, or
  when working with components/ vs busted-components/ in hopeward-react.
---

# Hopeward Section Port

Port one section at a time from the original static Webflow export into a
faithful React component. "Faithful" means reproducing the source DOM and class
names verbatim and letting the original CSS style it — NOT rewriting layout into
Tailwind. The earlier Tailwind rewrites are archived in `busted-components/`
because they drifted from the real design.

## Why this works

- The original Webflow stylesheets are loaded globally in `app/layout.tsx`:
  `/css/normalize.css`, `/css/components.css`, `/css/evermind-template.css`,
  `/css/hopeward.css` (served from `public/css/`). Reusing the source class
  names means the design "just works" with zero re-styling.
- `public/css/hopeward.css` holds hand-written pure-CSS fallbacks for Webflow
  IX2 interactions (e.g. marquee animations). Prefer these over reimplementing
  JS animations.

## Source of truth

| Target page | Source HTML |
|-------------|-------------|
| `app/page.tsx` (home) | `hopeward-26/index.html` |
| `app/about/page.tsx` | `hopeward-26/about.html` |
| `app/services/page.tsx` | `hopeward-26/services.html` |
| `app/contact/page.tsx` | `hopeward-26/contact.html` |

Sections are delimited by `<section class="section ...">` with a
`data-section-id`. Find the one you need:

```
rg -n 'data-section-id=' hopeward-26/index.html
```

## Workflow

```
- [ ] 1. Locate the section in the source HTML (data-section-id)
- [ ] 2. Read the full section markup + any sibling helper markup
- [ ] 3. Confirm referenced images exist in public/images
- [ ] 4. Verify the CSS classes are real (rg in public/css)
- [ ] 5. Write components/<slug>.tsx (faithful port)
- [ ] 6. Register in PORTED_COMPONENT_REGISTRY; remove from BUSTED if present
- [ ] 7. Wire into the relevant app/ page
- [ ] 8. Verify: preview route 200, images 200, screenshot matches
```

### Step 5: porting rules (HTML → JSX)

Keep the structure identical. Only change what JSX requires:

- `class=` → `className=`
- Self-close void tags (`<img/>`, `<br/>`), close all tags.
- `<svg>` attrs to camelCase: `viewbox`→`viewBox`, `stroke-linecap`→
  `strokeLinecap`, `fill-rule`→`fillRule`, etc.
- Images: rewrite `src="images/foo.jpg"` → `src="/images/foo.jpg"`. Define a
  `const IMG = "/images";` and use `` src={`${IMG}/foo.jpg`} ``.
- **Drop inert Webflow IX2 metadata** — it does nothing without `webflow.js`:
  `data-w-id`, `heading-load`, `data-wf--*--variant`, `style="opacity:0"`
  reveal-state inline styles. KEEP semantic classes including `.w-variant-*`
  (the CSS keys off those) and structural `w-*` classes (`w-inline-block`,
  `w-layout-grid`, `w-layout-blockcontainer`, `w-container`).
- **Drop broken `srcset`** entries. Many `srcset` variants (e.g.
  `Foo_1Foo.webp`) don't exist in `public/images`; verify before keeping, and
  fall back to the plain `src` file that does exist.
- Repeated markup (marquee tracks, card lists) → a small local sub-component or
  `.map()`, but the rendered DOM must match the original.
- Default to a server component (no `"use client"`). Only add it if the section
  needs real interactivity that isn't covered by the CSS fallbacks.
- Decorative duplicated tracks should get `aria-hidden`.

### Step 3 & 4: verification commands

```
# images present?
for f in danielle-brower.jpg Dots.svg; do test -f public/images/$f && echo OK $f || echo MISS $f; done

# class defined in source CSS?
rg -n '\.hero-home-b-section' public/css/evermind-template.css public/css/hopeward.css
```

### Step 6: registry

`lib/component-registry.tsx` has two arrays:
- `PORTED_COMPONENT_REGISTRY` — faithful ports in `components/`.
- `BUSTED_COMPONENT_REGISTRY` — archived Tailwind rewrites in
  `busted-components/`.

Add the new entry to PORTED (file path `components/<slug>.tsx`) and delete the
matching BUSTED entry + its import. The viewer at `/viewer` renders both groups.

### Step 8: verify rendering

Dev server is usually already running (check the `terminals` folder for
`npm run dev` and its port; it may not be 3000). Then:

```
PORT=3002   # confirm from terminal output
curl -s -o /tmp/s.html -w '%{http_code}\n' http://localhost:$PORT/preview/<slug>
rg -c 'data-section-id-or-key-text' /tmp/s.html
```

Then screenshot the preview with the browser tool
(`http://localhost:$PORT/preview/<slug>`) and compare against the source design.
All referenced images should return 200.

## Reference port

`components/ported-home-hero.tsx` is the canonical example
(source: `hero-actionable-pathways-forward` in `index.html`). Mirror its
structure: `const IMG`, optional sub-component for repeated markup, verbatim
classes, no IX2 attrs.

## Homepage port queue (index.html)

1. `hero-actionable-pathways-forward` → `ported-home-hero` ✓ (done)
2. `home-hope-definition`
3. `audience-cards-organizations-collaboratives`
4. `partner-logos`
5. `founder-testimonial`
6. `services-where-we-shine`
7. `home-case-studies`
8. `footer-cta` (+ the nav block before the hero)

## Don'ts

- Don't rewrite layout into Tailwind utility classes.
- Don't copy from `busted-components/` — they're wrong; use the HTML source.
- Don't invent copy. Use the exact text from the source HTML.
- Don't keep references to image files that aren't in `public/images`.
