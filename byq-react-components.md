Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a fixed/sticky navigation bar section. It consists of a horizontal navbar with: - Left: Logo (SVG icon + "Evermind™" wordmark) - Center: Navigation links — "Overview" (plain link), "Multi-L...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/NavigationBarSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

NavigationBarSection.tsx

"use client";

/**

 * @fonts Inter

 */

import * as React from 'react';

export function NavigationBarSection() {

  const [multiLayoutOpen, setMultiLayoutOpen] = React.useState(false);

  const [pagesOpen, setPagesOpen] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const multiLayoutRef = React.useRef<HTMLDivElement>(null);

  const pagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {

    const handleClick = (e: MouseEvent) => {

      if (multiLayoutRef.current && !multiLayoutRef.current.contains([e.target](http://e.target) as Node)) {

        setMultiLayoutOpen(false);

      }

      if (pagesRef.current && !pagesRef.current.contains([e.target](http://e.target) as Node)) {

        setPagesOpen(false);

      }

    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);

  }, []);

  return (

    <div className="w-full bg-[#f0ede6] min-h-screen font-['Inter',sans-serif]">

      {/* Navbar */}

      <div className="w-full px-4 pt-3 pb-3 flex items-center justify-center">

        <div className="w-full max-w-[1380px] bg-[#ebebeb] rounded-full px-4 py-2 flex items-center justify-between relative">

          {/* Logo */}

          <a href="index.html" className="flex items-center gap-2 flex-shrink-0">

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/Logo.svg](https://byqsupply-components.netlify.app/evermind/images/Logo.svg)"

              alt=""

              className="h-7 w-auto"

            />

          </a>

          {/* Desktop Nav Links */}

          <nav className="hidden max-[991px]:hidden flex items-center gap-1" style={{ display: 'flex' }}>

            <div className="flex items-center gap-1 max-[991px]:hidden">

              {/* Overview */}

              <a

                href="#"

                className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200"

              >

                Overview

              </a>

              {/* Multi-Layout Dropdown */}

              <div

                ref={multiLayoutRef}

                className="relative"

                onMouseEnter={() => setMultiLayoutOpen(true)}

                onMouseLeave={() => setMultiLayoutOpen(false)}

              >

                <button

                  className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200 flex items-center gap-1"

                  onClick={() => setMultiLayoutOpen(!multiLayoutOpen)}

                >

                  Multi-Layout

                </button>

                <div

                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ${

                    multiLayoutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'

                  }`}

                  style={{ zIndex: 100 }}

                >

                  <div className="bg-[#f0ede6] rounded-2xl shadow-xl border border-black/5 p-6 w-[680px]">

                    <div className="grid grid-cols-3 gap-6">

                      {/* Homepages Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Homepages</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Home A', sub: '— Structure', desc: 'Calm structure for fresh ideas and first impressions.' },

                            { title: 'Home B', sub: '— Depth', desc: 'Clarity through details, made for showcasing work and depth.' },

                            { title: 'Home C', sub: '— Scale', desc: 'Crafted to scale with purpose-driven infrastructure projects.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                      {/* About Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">About</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'About A', sub: '— People', desc: 'Faces and roles behind the projects and partnerships.' },

                            { title: 'About B', sub: '— Timeline', desc: 'A quiet look at the milestones that shaped Evermind.' },

                            { title: 'About C', sub: '— Values', desc: 'How we think, work, and approach sustainable design.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                      {/* Contact Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Contact</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Contact A', sub: '— Grounded', desc: 'For honest questions and steady collaborations.' },

                            { title: 'Contact B', sub: '— Open', desc: "Just say hi. We're always curious to hear what you're building." },

                            { title: 'Contact C', sub: '— In Touch', desc: 'Built for thoughtful conversations and project clarity.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Pages Dropdown */}

              <div

                ref={pagesRef}

                className="relative"

                onMouseEnter={() => setPagesOpen(true)}

                onMouseLeave={() => setPagesOpen(false)}

              >

                <button

                  className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200 flex items-center gap-1"

                  onClick={() => setPagesOpen(!pagesOpen)}

                >

                  Pages

                </button>

                <div

                  className={`absolute top-full right-0 mt-2 transition-all duration-300 ${

                    pagesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'

                  }`}

                  style={{ zIndex: 100 }}

                >

                  <div className="bg-[#f0ede6] rounded-2xl shadow-xl border border-black/5 p-6 w-[780px]">

                    <div className="grid grid-cols-2 gap-6">

                      {/* Left: Pages list */}

                      <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Homepages</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Service', desc: 'Clearly outline your services in a modular way.' },

                            { title: 'Customer Stories', desc: 'A highly advanced CMS setup for showcasing case studies.' },

                            { title: 'Pricing', desc: 'Help visitors quickly understand your offer.' },

                            { title: 'Blog', desc: 'Position yourself as a thought leader and boost SEO.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">{item.title}</div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                        <a

                          href="#"

                          className="group relative inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full border border-[#2b2b2b] text-[#2b2b2b] text-sm font-medium overflow-hidden hover:text-white transition-colors duration-300 w-fit"

                        >

                          <span className="relative z-10">Explore more</span>

                          <span className="relative z-10">

                            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 16 16" fill="none">

                              <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                            </svg>

                          </span>

                          <span className="absolute inset-0 bg-[#2b2b2b] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />

                        </a>

                      </div>

                      {/* Right: Customer Stories */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center justify-between mb-1">

                          <div className="flex items-center gap-2">

                            <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                            <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">customer stories</span>

                          </div>

                          <a href="#" className="text-xs text-[#2b2b2b] font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">Show all</a>

                        </div>

                        <div className="grid grid-cols-2 gap-3">

                          {[

                            { img: '[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage.webp)', href: '[https://evermind-template.webflow.io/customer-stories/from-turbine-fields-to-the-browser----how-fold-gave-wind-power-a-digital-edge](https://evermind-template.webflow.io/customer-stories/from-turbine-fields-to-the-browser----how-fold-gave-wind-power-a-digital-edge)' },

                            { img: '[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp)', href: '[https://evermind-template.webflow.io/customer-stories/turning-technical-into-tangible----how-for-human-made-clean-energy-desirable](https://evermind-template.webflow.io/customer-stories/turning-technical-into-tangible----how-for-human-made-clean-energy-desirable)' },

                          ].map((card, i) => (

                            <a

                              key={i}

                              href={card.href}

                              className="group relative flex flex-col rounded-xl overflow-hidden bg-[#2b2b2b]"

                              style={{ minHeight: 160 }}

                            >

                              <div className="relative w-full h-full" style={{ minHeight: 160 }}>

                                <img

                                  src={card.img}

                                  alt=""

                                  loading="lazy"

                                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"

                                  style={{ minHeight: 160 }}

                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                              </div>

                              <img

                                loading="lazy"

                                src="[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg)"

                                alt=""

                                className="absolute top-3 left-3 h-5 w-auto z-10"

                              />

                              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">

                                <div className="flex items-center gap-1.5 text-white text-xs font-medium">

                                  <span>Read case study</span>

                                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="14" height="14" viewBox="0 0 16 16" fill="none">

                                    <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                                  </svg>

                                </div>

                              </div>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </nav>

          {/* Right: CTA + Hamburger */}

          <div className="flex items-center gap-3">

            {/* Get Started Button */}

            <a

              href="#"

              className="group relative inline-flex items-center px-5 py-2.5 rounded-full bg-[#2b2b2b] text-white text-sm font-medium overflow-hidden hover:bg-[#1a1a1a] transition-colors duration-200 max-[991px]:hidden"

            >

              Get Started

            </a>

            {/* Hamburger (mobile) */}

            <button

              className="hidden max-[991px]:flex items-center justify-center w-10 h-10 rounded-full bg-[#2b2b2b] text-white"

              onClick={() => setMobileOpen(!mobileOpen)}

              aria-label="Toggle menu"

            >

              {mobileOpen ? (

                <img

                  loading="lazy"

                  src="[https://byqsupply-components.netlify.app/evermind/images/Close.svg](https://byqsupply-components.netlify.app/evermind/images/Close.svg)"

                  alt=""

                  className="w-5 h-5 invert"

                />

              ) : (

                <img

                  loading="lazy"

                  src="[https://byqsupply-components.netlify.app/evermind/images/IconsHamburger1.svg](https://byqsupply-components.netlify.app/evermind/images/IconsHamburger1.svg)"

                  alt=""

                  className="w-5 h-5 invert"

                />

              )}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      <div

        className={`hidden max-[991px]:block overflow-hidden transition-all duration-400 ${

          mobileOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'

        }`}

      >

        <div className="mx-4 bg-[#ebebeb] rounded-2xl overflow-hidden">

          {/* Mobile Nav Top */}

          <div className="p-4 flex flex-col">

            {/* Divider + Home links */}

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="index.html" className="text-lg font-medium text-[#2b2b2b]">Home A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Home B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Home C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Crafted to scale with purpose-driven infrastructure projects.</div>

              </div>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Service</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Clearly outline your services in a modular way.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">How we think, work, and approach sustainable design.</div>

              </div>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Pricing</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Help visitors quickly understand your offer.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Customer Stories</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">A highly advanced CMS setup for showcasing case studies.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Blog</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Position yourself as a thought leader and boost SEO.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Just say hi. We're always curious to hear what you're building.</div>

              </div>

            </div>

            <div className="border-t border-black/10" />

          </div>

          {/* Mobile Bottom: Success Story Card */}

          <div className="p-4 pt-0">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

              <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Success stories</span>

            </div>

            <a

              href="#"

              className="group relative flex flex-col rounded-xl overflow-hidden bg-[#2b2b2b]"

              style={{ minHeight: 220 }}

            >

              <div className="relative w-full" style={{ minHeight: 220 }}>

                <img

                  src="[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp)"

                  alt=""

                  loading="lazy"

                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"

                  style={{ minHeight: 220 }}

                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

              <img

                loading="lazy"

                src="[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg)"

                alt=""

                className="absolute top-3 left-3 h-5 w-auto z-10"

              />

              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">

                <div className="text-white text-sm font-medium mb-2">

                  How Franco Build turned their mission into a message with Evermind

                </div>

                <div className="flex items-center gap-1.5 text-white text-xs font-medium">

                  <span>Read case study</span>

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="14" height="14" viewBox="0 0 16 16" fill="none">

                    <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </div>

            </a>

          </div>

        </div>

      </div>

    </div>

  );

}

export default NavigationBarSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#2b2b2b`, `#6b6b6b`, `#f0ede6`, `#ebebeb`, `#1a1a1a` → your project's color tokens

- **Font**: `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<NavigationBarSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes





Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a fixed/sticky navigation bar section. It consists of a horizontal navbar with: - Left: Logo (SVG icon + "Evermind™" wordmark) - Center: Navigation links — "Overview" (plain link), "Multi-L...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/NavigationBarSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

NavigationBarSection.tsx

"use client";

/**

 * @fonts Inter

 */

import * as React from 'react';

export function NavigationBarSection() {

  const [multiLayoutOpen, setMultiLayoutOpen] = React.useState(false);

  const [pagesOpen, setPagesOpen] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const multiLayoutRef = React.useRef<HTMLDivElement>(null);

  const pagesRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {

    const handleClick = (e: MouseEvent) => {

      if (multiLayoutRef.current && !multiLayoutRef.current.contains([e.target](http://e.target) as Node)) {

        setMultiLayoutOpen(false);

      }

      if (pagesRef.current && !pagesRef.current.contains([e.target](http://e.target) as Node)) {

        setPagesOpen(false);

      }

    };

    document.addEventListener('mousedown', handleClick);

    return () => document.removeEventListener('mousedown', handleClick);

  }, []);

  return (

    <div className="w-full bg-[#f0ede6] min-h-screen font-['Inter',sans-serif]">

      {/* Navbar */}

      <div className="w-full px-4 pt-3 pb-3 flex items-center justify-center">

        <div className="w-full max-w-[1380px] bg-[#ebebeb] rounded-full px-4 py-2 flex items-center justify-between relative">

          {/* Logo */}

          <a href="index.html" className="flex items-center gap-2 flex-shrink-0">

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/Logo.svg](https://byqsupply-components.netlify.app/evermind/images/Logo.svg)"

              alt=""

              className="h-7 w-auto"

            />

          </a>

          {/* Desktop Nav Links */}

          <nav className="hidden max-[991px]:hidden flex items-center gap-1" style={{ display: 'flex' }}>

            <div className="flex items-center gap-1 max-[991px]:hidden">

              {/* Overview */}

              <a

                href="#"

                className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200"

              >

                Overview

              </a>

              {/* Multi-Layout Dropdown */}

              <div

                ref={multiLayoutRef}

                className="relative"

                onMouseEnter={() => setMultiLayoutOpen(true)}

                onMouseLeave={() => setMultiLayoutOpen(false)}

              >

                <button

                  className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200 flex items-center gap-1"

                  onClick={() => setMultiLayoutOpen(!multiLayoutOpen)}

                >

                  Multi-Layout

                </button>

                <div

                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ${

                    multiLayoutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'

                  }`}

                  style={{ zIndex: 100 }}

                >

                  <div className="bg-[#f0ede6] rounded-2xl shadow-xl border border-black/5 p-6 w-[680px]">

                    <div className="grid grid-cols-3 gap-6">

                      {/* Homepages Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Homepages</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Home A', sub: '— Structure', desc: 'Calm structure for fresh ideas and first impressions.' },

                            { title: 'Home B', sub: '— Depth', desc: 'Clarity through details, made for showcasing work and depth.' },

                            { title: 'Home C', sub: '— Scale', desc: 'Crafted to scale with purpose-driven infrastructure projects.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                      {/* About Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">About</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'About A', sub: '— People', desc: 'Faces and roles behind the projects and partnerships.' },

                            { title: 'About B', sub: '— Timeline', desc: 'A quiet look at the milestones that shaped Evermind.' },

                            { title: 'About C', sub: '— Values', desc: 'How we think, work, and approach sustainable design.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                      {/* Contact Column */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Contact</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Contact A', sub: '— Grounded', desc: 'For honest questions and steady collaborations.' },

                            { title: 'Contact B', sub: '— Open', desc: "Just say hi. We're always curious to hear what you're building." },

                            { title: 'Contact C', sub: '— In Touch', desc: 'Built for thoughtful conversations and project clarity.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="group flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">

                                {item.title} <span className="text-[rgba(43,43,43,0.64)]">{item.sub}</span>

                              </div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Pages Dropdown */}

              <div

                ref={pagesRef}

                className="relative"

                onMouseEnter={() => setPagesOpen(true)}

                onMouseLeave={() => setPagesOpen(false)}

              >

                <button

                  className="px-4 py-2 text-[#2b2b2b] text-sm font-medium rounded-full hover:bg-black/5 transition-colors duration-200 flex items-center gap-1"

                  onClick={() => setPagesOpen(!pagesOpen)}

                >

                  Pages

                </button>

                <div

                  className={`absolute top-full right-0 mt-2 transition-all duration-300 ${

                    pagesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'

                  }`}

                  style={{ zIndex: 100 }}

                >

                  <div className="bg-[#f0ede6] rounded-2xl shadow-xl border border-black/5 p-6 w-[780px]">

                    <div className="grid grid-cols-2 gap-6">

                      {/* Left: Pages list */}

                      <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-2 mb-1">

                          <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                          <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Homepages</span>

                        </div>

                        <div className="flex flex-col gap-3">

                          {[

                            { title: 'Service', desc: 'Clearly outline your services in a modular way.' },

                            { title: 'Customer Stories', desc: 'A highly advanced CMS setup for showcasing case studies.' },

                            { title: 'Pricing', desc: 'Help visitors quickly understand your offer.' },

                            { title: 'Blog', desc: 'Position yourself as a thought leader and boost SEO.' },

                          ].map((item) => (

                            <a key={item.title} href="#" className="flex flex-col gap-0.5 hover:opacity-80 transition-opacity">

                              <div className="text-sm font-medium text-[#2b2b2b]">{item.title}</div>

                              <div className="text-xs text-[rgba(43,43,43,0.48)]">{item.desc}</div>

                            </a>

                          ))}

                        </div>

                        <a

                          href="#"

                          className="group relative inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-full border border-[#2b2b2b] text-[#2b2b2b] text-sm font-medium overflow-hidden hover:text-white transition-colors duration-300 w-fit"

                        >

                          <span className="relative z-10">Explore more</span>

                          <span className="relative z-10">

                            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 16 16" fill="none">

                              <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                            </svg>

                          </span>

                          <span className="absolute inset-0 bg-[#2b2b2b] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 rounded-full" />

                        </a>

                      </div>

                      {/* Right: Customer Stories */}

                      <div className="flex flex-col gap-3">

                        <div className="flex items-center justify-between mb-1">

                          <div className="flex items-center gap-2">

                            <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

                            <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">customer stories</span>

                          </div>

                          <a href="#" className="text-xs text-[#2b2b2b] font-medium uppercase tracking-wide hover:opacity-60 transition-opacity">Show all</a>

                        </div>

                        <div className="grid grid-cols-2 gap-3">

                          {[

                            { img: '[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage.webp)', href: '[https://evermind-template.webflow.io/customer-stories/from-turbine-fields-to-the-browser----how-fold-gave-wind-power-a-digital-edge](https://evermind-template.webflow.io/customer-stories/from-turbine-fields-to-the-browser----how-fold-gave-wind-power-a-digital-edge)' },

                            { img: '[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp)', href: '[https://evermind-template.webflow.io/customer-stories/turning-technical-into-tangible----how-for-human-made-clean-energy-desirable](https://evermind-template.webflow.io/customer-stories/turning-technical-into-tangible----how-for-human-made-clean-energy-desirable)' },

                          ].map((card, i) => (

                            <a

                              key={i}

                              href={card.href}

                              className="group relative flex flex-col rounded-xl overflow-hidden bg-[#2b2b2b]"

                              style={{ minHeight: 160 }}

                            >

                              <div className="relative w-full h-full" style={{ minHeight: 160 }}>

                                <img

                                  src={card.img}

                                  alt=""

                                  loading="lazy"

                                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"

                                  style={{ minHeight: 160 }}

                                />

                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                              </div>

                              <img

                                loading="lazy"

                                src="[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg)"

                                alt=""

                                className="absolute top-3 left-3 h-5 w-auto z-10"

                              />

                              <div className="absolute bottom-0 left-0 right-0 p-3 z-10">

                                <div className="flex items-center gap-1.5 text-white text-xs font-medium">

                                  <span>Read case study</span>

                                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="14" height="14" viewBox="0 0 16 16" fill="none">

                                    <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                                  </svg>

                                </div>

                              </div>

                            </a>

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </nav>

          {/* Right: CTA + Hamburger */}

          <div className="flex items-center gap-3">

            {/* Get Started Button */}

            <a

              href="#"

              className="group relative inline-flex items-center px-5 py-2.5 rounded-full bg-[#2b2b2b] text-white text-sm font-medium overflow-hidden hover:bg-[#1a1a1a] transition-colors duration-200 max-[991px]:hidden"

            >

              Get Started

            </a>

            {/* Hamburger (mobile) */}

            <button

              className="hidden max-[991px]:flex items-center justify-center w-10 h-10 rounded-full bg-[#2b2b2b] text-white"

              onClick={() => setMobileOpen(!mobileOpen)}

              aria-label="Toggle menu"

            >

              {mobileOpen ? (

                <img

                  loading="lazy"

                  src="[https://byqsupply-components.netlify.app/evermind/images/Close.svg](https://byqsupply-components.netlify.app/evermind/images/Close.svg)"

                  alt=""

                  className="w-5 h-5 invert"

                />

              ) : (

                <img

                  loading="lazy"

                  src="[https://byqsupply-components.netlify.app/evermind/images/IconsHamburger1.svg](https://byqsupply-components.netlify.app/evermind/images/IconsHamburger1.svg)"

                  alt=""

                  className="w-5 h-5 invert"

                />

              )}

            </button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}

      <div

        className={`hidden max-[991px]:block overflow-hidden transition-all duration-400 ${

          mobileOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'

        }`}

      >

        <div className="mx-4 bg-[#ebebeb] rounded-2xl overflow-hidden">

          {/* Mobile Nav Top */}

          <div className="p-4 flex flex-col">

            {/* Divider + Home links */}

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="index.html" className="text-lg font-medium text-[#2b2b2b]">Home A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Home B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Home C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Crafted to scale with purpose-driven infrastructure projects.</div>

              </div>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Service</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Clearly outline your services in a modular way.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">About C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">How we think, work, and approach sustainable design.</div>

              </div>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Pricing</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Help visitors quickly understand your offer.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Customer Stories</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">A highly advanced CMS setup for showcasing case studies.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <a href="#" className="flex flex-col gap-1">

                <div className="text-lg font-medium text-[#2b2b2b]">Blog</div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Position yourself as a thought leader and boost SEO.</div>

              </a>

            </div>

            <div className="border-t border-black/10 pt-4 pb-4">

              <div className="flex flex-col gap-1">

                <div className="flex items-center gap-2 flex-wrap">

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact A</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact B</a>

                  <span className="text-[rgba(43,43,43,0.32)]">·</span>

                  <a href="#" className="text-lg font-medium text-[#2b2b2b]">Contact C</a>

                </div>

                <div className="text-sm text-[rgba(43,43,43,0.48)]">Just say hi. We're always curious to hear what you're building.</div>

              </div>

            </div>

            <div className="border-t border-black/10" />

          </div>

          {/* Mobile Bottom: Success Story Card */}

          <div className="p-4 pt-0">

            <div className="flex items-center gap-2 mb-3">

              <div className="w-2 h-2 rounded-full bg-[#2b2b2b]" />

              <span className="text-xs text-[#6b6b6b] font-medium uppercase tracking-wide">Success stories</span>

            </div>

            <a

              href="#"

              className="group relative flex flex-col rounded-xl overflow-hidden bg-[#2b2b2b]"

              style={{ minHeight: 220 }}

            >

              <div className="relative w-full" style={{ minHeight: 220 }}>

                <img

                  src="[https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/TestimonialImage-2.webp)"

                  alt=""

                  loading="lazy"

                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"

                  style={{ minHeight: 220 }}

                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

              <img

                loading="lazy"

                src="[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo.svg)"

                alt=""

                className="absolute top-3 left-3 h-5 w-auto z-10"

              />

              <div className="absolute bottom-0 left-0 right-0 p-4 z-10">

                <div className="text-white text-sm font-medium mb-2">

                  How Franco Build turned their mission into a message with Evermind

                </div>

                <div className="flex items-center gap-1.5 text-white text-xs font-medium">

                  <span>Read case study</span>

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="14" height="14" viewBox="0 0 16 16" fill="none">

                    <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </div>

            </a>

          </div>

        </div>

      </div>

    </div>

  );

}

export default NavigationBarSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#2b2b2b`, `#6b6b6b`, `#f0ede6`, `#ebebeb`, `#1a1a1a` → your project's color tokens

- **Font**: `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<NavigationBarSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a two-section "about/intro" layout stacked vertically. The first section is a hero-style arrangement with a centered headline block overlaid on a scattered collage of 7 floating images posi...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/IntroTextSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

IntroTextSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

export function IntroTextSection() {

  const headlineRef = React.useRef<HTMLDivElement>(null);

  const [headlineVisible, setHeadlineVisible] = React.useState(false);

  const imagesRef = React.useRef<HTMLDivElement>(null);

  const [imagesVisible, setImagesVisible] = React.useState(false);

  const descRef = React.useRef<HTMLDivElement>(null);

  const [descVisible, setDescVisible] = React.useState(false);

  React.useEffect(() => {

    const headlineEl = headlineRef.current;

    if (headlineEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setHeadlineVisible(true); obs.disconnect(); }

      }, { threshold: 0.1 });

      obs.observe(headlineEl);

      return () => obs.disconnect();

    }

  }, []);

  React.useEffect(() => {

    const imagesEl = imagesRef.current;

    if (imagesEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setImagesVisible(true); obs.disconnect(); }

      }, { threshold: 0.05 });

      obs.observe(imagesEl);

      return () => obs.disconnect();

    }

  }, []);

  React.useEffect(() => {

    const descEl = descRef.current;

    if (descEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setDescVisible(true); obs.disconnect(); }

      }, { threshold: 0.1 });

      obs.observe(descEl);

      return () => obs.disconnect();

    }

  }, []);

  return (

    <div className="bg-[#1a1a14] w-full">

      {/* Hero About Section */}

      <section className="relative w-full min-h-[780px] max-[767px]:min-h-[600px] overflow-hidden flex items-center justify-center py-24">

        {/* Dots background */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg](https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg)"

          loading="lazy"

          alt=""

          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"

        />

        {/* Scattered Images */}

        <div

          ref={imagesRef}

          className=`absolute inset-0 transition-all duration-700 ease-out ${imagesVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

          style={{ transitionDelay: '200ms' }}

        >

          {/* Image 1 - top left, aerial river */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '6%', left: '12%', width: '120px', height: '120px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBriver.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBriver.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 2 - left side, greenhouse */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '28%', left: '4%', width: '118px', height: '145px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 3 - lower left, city aerial */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '52%', left: '16%', width: '240px', height: '150px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 4 - right of center, solar panels aerial */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '30%', right: '28%', width: '112px', height: '112px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 5 - top right, wind turbine */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '5%', right: '8%', width: '200px', height: '148px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp](https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 6 - center bottom, solar panel product */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ bottom: '8%', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '120px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBsolar.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBsolar.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 7 - far right, person */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '55%', right: '5%', width: '116px', height: '148px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBperson.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBperson.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

        </div>

        {/* Headline Block */}

        <div className="relative z-10 max-w-[940px] mx-auto px-5 flex items-center justify-center">

          <div

            ref={headlineRef}

            className=`text-center transition-all duration-700 ease-out ${headlineVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

          >

            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-2 mb-6">

              <div className="w-2 h-2 rounded-full bg-[#c8d44e]"></div>

              <span className="text-white text-xs font-medium tracking-[0.15em] uppercase">About</span>

            </div>

            {/* H1 */}

            <h1

              className="text-white font-serif text-[clamp(40px,5vw,68px)] leading-[1.1] font-normal max-w-[640px] mx-auto"

              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

            >

              Softness with precision is our best value

            </h1>

          </div>

        </div>

      </section>

      {/* Description Section */}

      <section className="w-full py-20 max-[767px]:py-12">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={descRef}

            className=`text-center transition-all duration-700 ease-out ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}

          >

            <p

              className="text-white text-[clamp(20px,2.2vw,28px)] leading-[1.5] font-normal max-w-[620px] mx-auto"

              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

            >

              What began as an idea for a consultancy helping Europe meet its green standards… turned into a digital template for brands with standards of their own.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default IntroTextSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a14`, `#c8d44e` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- **Border radius**: `14px` → your `--radius` token

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<IntroTextSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a two-section "about/intro" layout stacked vertically. The first section is a hero-style arrangement with a centered headline block overlaid on a scattered collage of 7 floating images posi...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/IntroTextSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

IntroTextSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

export function IntroTextSection() {

  const headlineRef = React.useRef<HTMLDivElement>(null);

  const [headlineVisible, setHeadlineVisible] = React.useState(false);

  const imagesRef = React.useRef<HTMLDivElement>(null);

  const [imagesVisible, setImagesVisible] = React.useState(false);

  const descRef = React.useRef<HTMLDivElement>(null);

  const [descVisible, setDescVisible] = React.useState(false);

  React.useEffect(() => {

    const headlineEl = headlineRef.current;

    if (headlineEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setHeadlineVisible(true); obs.disconnect(); }

      }, { threshold: 0.1 });

      obs.observe(headlineEl);

      return () => obs.disconnect();

    }

  }, []);

  React.useEffect(() => {

    const imagesEl = imagesRef.current;

    if (imagesEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setImagesVisible(true); obs.disconnect(); }

      }, { threshold: 0.05 });

      obs.observe(imagesEl);

      return () => obs.disconnect();

    }

  }, []);

  React.useEffect(() => {

    const descEl = descRef.current;

    if (descEl) {

      const obs = new IntersectionObserver(([e]) => {

        if (e.isIntersecting) { setDescVisible(true); obs.disconnect(); }

      }, { threshold: 0.1 });

      obs.observe(descEl);

      return () => obs.disconnect();

    }

  }, []);

  return (

    <div className="bg-[#1a1a14] w-full">

      {/* Hero About Section */}

      <section className="relative w-full min-h-[780px] max-[767px]:min-h-[600px] overflow-hidden flex items-center justify-center py-24">

        {/* Dots background */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg](https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg)"

          loading="lazy"

          alt=""

          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"

        />

        {/* Scattered Images */}

        <div

          ref={imagesRef}

          className=`absolute inset-0 transition-all duration-700 ease-out ${imagesVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

          style={{ transitionDelay: '200ms' }}

        >

          {/* Image 1 - top left, aerial river */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '6%', left: '12%', width: '120px', height: '120px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBriver.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBriver.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 2 - left side, greenhouse */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '28%', left: '4%', width: '118px', height: '145px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 3 - lower left, city aerial */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '52%', left: '16%', width: '240px', height: '150px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 4 - right of center, solar panels aerial */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '30%', right: '28%', width: '112px', height: '112px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 5 - top right, wind turbine */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '5%', right: '8%', width: '200px', height: '148px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp](https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 6 - center bottom, solar panel product */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ bottom: '8%', left: '50%', transform: 'translateX(-50%)', width: '80px', height: '120px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBsolar.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBsolar.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

          {/* Image 7 - far right, person */}

          <div className="absolute rounded-[14px] overflow-hidden"

            style={{ top: '55%', right: '5%', width: '116px', height: '148px' }}>

            <img

              loading="lazy"

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutBperson.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBperson.webp)"

              alt=""

              className="w-full h-full object-cover"

            />

          </div>

        </div>

        {/* Headline Block */}

        <div className="relative z-10 max-w-[940px] mx-auto px-5 flex items-center justify-center">

          <div

            ref={headlineRef}

            className=`text-center transition-all duration-700 ease-out ${headlineVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

          >

            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-2 mb-6">

              <div className="w-2 h-2 rounded-full bg-[#c8d44e]"></div>

              <span className="text-white text-xs font-medium tracking-[0.15em] uppercase">About</span>

            </div>

            {/* H1 */}

            <h1

              className="text-white font-serif text-[clamp(40px,5vw,68px)] leading-[1.1] font-normal max-w-[640px] mx-auto"

              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

            >

              Softness with precision is our best value

            </h1>

          </div>

        </div>

      </section>

      {/* Description Section */}

      <section className="w-full py-20 max-[767px]:py-12">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={descRef}

            className=`text-center transition-all duration-700 ease-out ${descVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}

          >

            <p

              className="text-white text-[clamp(20px,2.2vw,28px)] leading-[1.5] font-normal max-w-[620px] mx-auto"

              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

            >

              What began as an idea for a consultancy helping Europe meet its green standards… turned into a digital template for brands with standards of their own.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default IntroTextSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a14`, `#c8d44e` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- **Border radius**: `14px` → your `--radius` token

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<IntroTextSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

Full-viewport hero section with a background video (aerial road footage). The content is layered over the video using absolute/relative positioning. The dominant visual element is the full-bleed vi...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

export function HeroSection() {

  const eyebrowRef = React.useRef<HTMLDivElement>(null);

  const centerRef = React.useRef<HTMLDivElement>(null);

  const bottomRef = React.useRef<HTMLDivElement>(null);

  const [eyebrowVisible, setEyebrowVisible] = React.useState(false);

  const [centerVisible, setCenterVisible] = React.useState(false);

  const [bottomVisible, setBottomVisible] = React.useState(false);

  React.useEffect(() => {

    const makeObserver = (

      ref: React.RefObject<HTMLElement>,

      setter: (v: boolean) => void,

      delay: number

    ) => {

      const el = ref.current;

      if (!el) return () => {};

      const obs = new IntersectionObserver(

        ([entry]) => {

          if (entry.isIntersecting) {

            setTimeout(() => setter(true), delay);

            obs.disconnect();

          }

        },

        { threshold: 0.1 }

      );

      obs.observe(el);

      return () => obs.disconnect();

    };

    const c1 = makeObserver(eyebrowRef, setEyebrowVisible, 0);

    const c2 = makeObserver(centerRef, setCenterVisible, 150);

    const c3 = makeObserver(bottomRef, setBottomVisible, 300);

    return () => {

      c1();

      c2();

      c3();

    };

  }, []);

  return (

    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">

      {/* Background Video */}

      <video

        autoPlay

        loop

        muted

        playsInline

        className="absolute inset-0 w-full h-full object-cover"

        style={{

          backgroundImage:

            'url("[https://cdn.prod.website-files.com/6894a5c18c9035760aabc38b%2F68a2ca6f9aea4e9d52729c2e_evermind-poster-00001.jpg](https://cdn.prod.website-files.com/6894a5c18c9035760aabc38b%2F68a2ca6f9aea4e9d52729c2e_evermind-poster-00001.jpg)")',

        }}

      >

        <source

          src="[https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.mp4](https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.mp4)"

          type="video/mp4"

        />

        <source

          src="[https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.webm](https://byqsupply-components.netlify.app/evermind/videos/evermind-transcode.webm)"

          type="video/webm"

        />

      </video>

      {/* Overlays */}

      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="absolute inset-0 bg-black/10 z-[2]" />

      {/* Content Container */}

      <div className="relative z-10 max-w-[940px] mx-auto px-5 h-full">

        <div className="flex flex-col justify-between h-full py-10 max-[767px]:py-8">

          {/* Top spacer + eyebrow */}

          <div className="flex-1 flex flex-col justify-end pb-6 max-[767px]:pb-4">

            {/* Eyebrow */}

            <div

              ref={eyebrowRef}

              className={`transition-all duration-700 ease-out ${

                eyebrowVisible

                  ? 'opacity-100 blur-0'

                  : 'opacity-0 blur-[12px]'

              }`}

            >

              <div className="mb-4" />

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-[#e8a020] flex-shrink-0" />

                <span

                  className="text-white uppercase tracking-widest"

                  style={{ fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}

                >

                  A modular Webflow template

                </span>

              </div>

            </div>

          </div>

          {/* Center: H1 left + body/CTAs right */}

          <div

            ref={centerRef}

            className={`transition-all duration-700 ease-out flex flex-row items-end gap-8 max-[767px]:flex-col max-[767px]:items-start max-[767px]:gap-6 ${

              centerVisible

                ? 'opacity-100 blur-0'

                : 'opacity-0 blur-[12px]'

            }`}

          >

            {/* Left: H1 */}

            <div className="flex-1 max-[767px]:w-full">

              <h1

                className="text-white leading-[1.05] max-[767px]:text-[2.6rem] max-[991px]:text-[3.2rem]"

                style={{

                  fontFamily: '"Playfair Display", Georgia, serif',

                  fontSize: '4.5rem',

                  fontWeight: 700,

                }}

              >

                A calm structure for modern ideas

              </h1>

            </div>

            {/* Right: body + buttons */}

            <div className="flex flex-col gap-6 max-w-[380px] max-[767px]:max-w-full max-[767px]:w-full">

              <p

                className="text-white leading-relaxed"

                style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px' }}

              >

                A Webflow template crafted for forward-thinking companies and businesses who value clarity, warmth, and adaptability.

              </p>

              {/* Buttons */}

              <div className="flex flex-row items-center gap-3 flex-wrap">

                {/* Explore button */}

                <a

                  href="#"

                  className="relative inline-flex items-center justify-center px-6 py-3 rounded-full overflow-hidden group cursor-pointer no-underline"

                  style={{ backgroundColor: '#c8f135' }}

                >

                  <span

                    className="relative z-10 font-semibold text-[#1a1a1a] text-sm tracking-wide"

                    style={{ fontFamily: 'Inter, sans-serif' }}

                  >

                    Explore

                  </span>

                  <div className="absolute inset-0 bg-[#b8e020] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                </a>

                {/* Book a call button */}

                <a

                  href="#"

                  className="relative inline-flex items-center gap-2 pl-1 pr-5 py-1 rounded-full overflow-hidden group cursor-pointer no-underline"

                  style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}

                >

                  {/* Avatar */}

                  <div className="relative flex-shrink-0 w-9 h-9 rounded-full overflow-hidden border-2 border-white/30">

                    <img

                      src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                      alt=""

                      className="w-full h-full object-cover"

                      loading="lazy"

                    />

                    {/* Online indicator dot */}

                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#c8f135] border border-white" />

                  </div>

                  <span

                    className="relative z-10 text-white text-sm font-medium tracking-wide"

                    style={{ fontFamily: 'Inter, sans-serif' }}

                  >

                    Book a call

                  </span>

                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                </a>

              </div>

            </div>

          </div>

          {/* Bottom tile */}

          <div

            ref={bottomRef}

            className={`transition-all duration-700 ease-out flex flex-row justify-between items-end pt-8 max-[767px]:pt-6 ${

              bottomVisible

                ? 'opacity-100 blur-0'

                : 'opacity-0 blur-[12px]'

            }`}

          >

            <div

              className="text-white/80 uppercase leading-snug"

              style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500 }}

            >

              100% Webflow.

              <br />

              Fully modular.

            </div>

            <div

              className="text-white/80 uppercase leading-snug text-right"

              style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.1em', fontWeight: 500 }}

            >

              Crafted by

              <br />

              BYQ® Studio

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#c8f135`, `#e8a020`, `#1a1a1a`, `#b8e020` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a testimonials slider section. The overall layout is a full-width section with a constrained container (max-w ~940px centered). The header area has a top divider line, an eyebrow label, and...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/TestimonialsSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

TestimonialsSection.tsx

'use client';

/**

 * @fonts Inter

 * @fonts DM Serif Display

 */

import * as React from 'react';

const slides = [

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogo.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogo.svg)',

    eyebrow: 'STROBE',

    quote: '"Working with them felt like being heard, then gently guided toward clarity"',

    author: '— Ricky Martin',

    role: 'Founder of Strobe',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png) 1128w',

  },

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/ForHumanLogo.svg](https://byqsupply-components.netlify.app/evermind/images/ForHumanLogo.svg)',

    eyebrow: 'FOR:HUMAN',

    quote: '"They didn\'t just consult — they co-created. Every meeting left us lighter."',

    author: '— Alan & Jessica Mercedes',

    role: 'Founders of For:Human',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png) 1128w',

  },

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/FrancoLogo.svg](https://byqsupply-components.netlify.app/evermind/images/FrancoLogo.svg)',

    eyebrow: 'FRANCO',

    quote: '"Working with them felt like being heard, then gently guided toward clarity"',

    author: '— Ricky Martin',

    role: 'Founder of FRANCO®',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1600.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1600.png) 1600w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png) 2256w',

  },

];

function ParallaxImage({ src, srcSet }: { src: string; srcSet: string }) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      alt=""

      loading="lazy"

      className="absolute inset-0 w-full h-full object-cover will-change-transform"

      style={{ top: '-30px', bottom: '-30px', height: 'calc(100% + 60px)' }}

    />

  );

}

export function TestimonialsSection() {

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const totalSlides = slides.length;

  const handlePrev = () => {

    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  };

  const handleNext = () => {

    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  };

  return (

    <section className="bg-[#f5f2eb] py-20 max-[767px]:py-12">

      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}

        <div className="mb-10">

          {/* Divider */}

          <div className="w-full h-px bg-[#1a1a1a] opacity-20 mb-4" />

          {/* Eyebrow + Arrows row */}

          <div className="flex items-start justify-between">

            <div className="flex flex-col gap-4">

              {/* Eyebrow */}

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-[#c8f135] flex-shrink-0" />

                <span className="text-[11px] font-medium tracking-widest uppercase text-[#1a1a1a]">

                  Success stories

                </span>

              </div>

              {/* Heading */}

              <h2

                className="text-[48px] max-[991px]:text-[40px] max-[767px]:text-[32px] font-normal leading-[1.1] text-[#1a1a1a] m-0"

                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}

              >

                From idea to sustainable

                <br />

                success

              </h2>

            </div>

            {/* Navigation arrows */}

            <div className="flex items-center gap-3 mt-2 flex-shrink-0">

              <button

                onClick={handlePrev}

                className="w-11 h-11 rounded-full border border-[#1a1a1a] border-opacity-40 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 bg-transparent cursor-pointer"

                aria-label="Previous slide"

              >

                <div className="w-5 h-5">

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 20 20" fill="none">

                    <path d="M15.8307 10.0013L4.9974 10.0013M9.9974 15.8346L4.16406 10.0013L9.99739 4.16797" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </button>

              <button

                onClick={handleNext}

                className="w-11 h-11 rounded-full border border-[#1a1a1a] border-opacity-40 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 bg-transparent cursor-pointer"

                aria-label="Next slide"

              >

                <div className="w-5 h-5">

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 20 20" fill="none">

                    <path d="M4.16406 10.0013H14.9974M9.99739 4.16797L15.8307 10.0013L9.99739 15.8346" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </button>

            </div>

          </div>

        </div>

        {/* Slider */}

        <div className="overflow-hidden rounded-2xl">

          <div

            className="flex transition-transform duration-500 ease-in-out"

            style={{ transform: `translateX(-${currentSlide  (100 / slides.length)}%)`*, width:* `${slides.length  100}%` }}

          >

            {[slides.map](http://slides.map)((slide, index) => (

              <div

                key={index}

                className="flex-shrink-0 relative rounded-2xl overflow-hidden"

                style={{ width: `${100 / slides.length}%`, height: '540px' }}

              >

                {/* Background image with parallax */}

                <div className="absolute inset-0 overflow-hidden rounded-2xl">

                  <ParallaxImage src={slide.image} srcSet={slide.imageSrcSet} />

                </div>

                {/* Top overlay gradient */}

                <div

                  className="absolute inset-x-0 top-0 h-32 rounded-t-2xl z-10"

                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)' }}

                />

                {/* Bottom shadow gradient */}

                <div

                  className="absolute inset-x-0 bottom-0 h-64 rounded-b-2xl z-10"

                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }}

                />

                {/* Card inner content */}

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-7 max-[767px]:p-5">

                  {/* Logo top */}

                  <div>

                    <img

                      src={slide.logo}

                      alt=""

                      loading="lazy"

                      className="h-6 w-auto object-contain"

                    />

                  </div>

                  {/* Bottom content */}

                  <div className="flex flex-col gap-4">

                    {/* Quote section */}

                    <div className="flex flex-col gap-3">

                      {/* Eyebrow */}

                      <div className="flex items-center gap-2">

                        <div className="w-2 h-2 rounded-full bg-[#c8f135] flex-shrink-0" />

                        <span className="text-[11px] font-medium tracking-widest uppercase text-white">

                          {slide.eyebrow}

                        </span>

                      </div>

                      {/* Quote */}

                      <p

                        className="text-white text-[20px] max-[767px]:text-[17px] font-normal leading-[1.3] m-0"

                        style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}

                      >

                        {slide.quote}

                      </p>

                    </div>

                    {/* Bottom tile: author + CTA */}

                    <div className="flex items-end justify-between gap-4">

                      {/* Author */}

                      <div className="flex flex-col gap-0.5">

                        <span className="text-white text-sm leading-snug">{[slide.author](http://slide.author)}</span>

                        <span className="text-white text-sm leading-snug opacity-60">{slide.role}</span>

                      </div>

                      {/* Read case study */}

                      <div className="flex items-center gap-3 flex-shrink-0">

                        <span className="text-white text-sm whitespace-nowrap">Read case study</span>

                        <div className="w-9 h-9 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-200">

                          <div className="w-4 h-4 text-[#1a1a1a]">

                            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 16 16" fill="none">

                              <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                            </svg>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default TestimonialsSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Inter&family=DM+Serif+Display&display=swap](https://fonts.googleapis.com/css2?family=Inter&family=DM+Serif+Display&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Inter, DM_Serif_Display } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a1a`, `#c8f135`, `#f5f2eb` → your project's color tokens

- **Font**: `Inter`, `DM Serif Display` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<TestimonialsSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a testimonials slider section. The overall layout is a full-width section with a constrained container (max-w ~940px centered). The header area has a top divider line, an eyebrow label, and...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/TestimonialsSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

TestimonialsSection.tsx

'use client';

/**

 * @fonts Inter

 * @fonts DM Serif Display

 */

import * as React from 'react';

const slides = [

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogo.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogo.svg)',

    eyebrow: 'STROBE',

    quote: '"Working with them felt like being heard, then gently guided toward clarity"',

    author: '— Ricky Martin',

    role: 'Founder of Strobe',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial1.png) 1128w',

  },

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/ForHumanLogo.svg](https://byqsupply-components.netlify.app/evermind/images/ForHumanLogo.svg)',

    eyebrow: 'FOR:HUMAN',

    quote: '"They didn\'t just consult — they co-created. Every meeting left us lighter."',

    author: '— Alan & Jessica Mercedes',

    role: 'Founders of For:Human',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial2.png) 1128w',

  },

  {

    logo: '[https://byqsupply-components.netlify.app/evermind/images/FrancoLogo.svg](https://byqsupply-components.netlify.app/evermind/images/FrancoLogo.svg)',

    eyebrow: 'FRANCO',

    quote: '"Working with them felt like being heard, then gently guided toward clarity"',

    author: '— Ricky Martin',

    role: 'Founder of FRANCO®',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png)',

    imageSrcSet: '[https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-500.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-500.png) 500w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-800.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-800.png) 800w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1080.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1080.png) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1600.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3-p-1600.png) 1600w, [https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png](https://byqsupply-components.netlify.app/evermind/images/Testimonial3.png) 2256w',

  },

];

function ParallaxImage({ src, srcSet }: { src: string; srcSet: string }) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      alt=""

      loading="lazy"

      className="absolute inset-0 w-full h-full object-cover will-change-transform"

      style={{ top: '-30px', bottom: '-30px', height: 'calc(100% + 60px)' }}

    />

  );

}

export function TestimonialsSection() {

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const totalSlides = slides.length;

  const handlePrev = () => {

    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));

  };

  const handleNext = () => {

    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  };

  return (

    <section className="bg-[#f5f2eb] py-20 max-[767px]:py-12">

      <div className="max-w-[1200px] mx-auto px-5">

        {/* Header */}

        <div className="mb-10">

          {/* Divider */}

          <div className="w-full h-px bg-[#1a1a1a] opacity-20 mb-4" />

          {/* Eyebrow + Arrows row */}

          <div className="flex items-start justify-between">

            <div className="flex flex-col gap-4">

              {/* Eyebrow */}

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-[#c8f135] flex-shrink-0" />

                <span className="text-[11px] font-medium tracking-widest uppercase text-[#1a1a1a]">

                  Success stories

                </span>

              </div>

              {/* Heading */}

              <h2

                className="text-[48px] max-[991px]:text-[40px] max-[767px]:text-[32px] font-normal leading-[1.1] text-[#1a1a1a] m-0"

                style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}

              >

                From idea to sustainable

                <br />

                success

              </h2>

            </div>

            {/* Navigation arrows */}

            <div className="flex items-center gap-3 mt-2 flex-shrink-0">

              <button

                onClick={handlePrev}

                className="w-11 h-11 rounded-full border border-[#1a1a1a] border-opacity-40 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 bg-transparent cursor-pointer"

                aria-label="Previous slide"

              >

                <div className="w-5 h-5">

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 20 20" fill="none">

                    <path d="M15.8307 10.0013L4.9974 10.0013M9.9974 15.8346L4.16406 10.0013L9.99739 4.16797" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </button>

              <button

                onClick={handleNext}

                className="w-11 h-11 rounded-full border border-[#1a1a1a] border-opacity-40 flex items-center justify-center text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors duration-200 bg-transparent cursor-pointer"

                aria-label="Next slide"

              >

                <div className="w-5 h-5">

                  <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 20 20" fill="none">

                    <path d="M4.16406 10.0013H14.9974M9.99739 4.16797L15.8307 10.0013L9.99739 15.8346" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                  </svg>

                </div>

              </button>

            </div>

          </div>

        </div>

        {/* Slider */}

        <div className="overflow-hidden rounded-2xl">

          <div

            className="flex transition-transform duration-500 ease-in-out"

            style={{ transform: `translateX(-${currentSlide  (100 / slides.length)}%)`*, width:* `${slides.length  100}%` }}

          >

            {[slides.map](http://slides.map)((slide, index) => (

              <div

                key={index}

                className="flex-shrink-0 relative rounded-2xl overflow-hidden"

                style={{ width: `${100 / slides.length}%`, height: '540px' }}

              >

                {/* Background image with parallax */}

                <div className="absolute inset-0 overflow-hidden rounded-2xl">

                  <ParallaxImage src={slide.image} srcSet={slide.imageSrcSet} />

                </div>

                {/* Top overlay gradient */}

                <div

                  className="absolute inset-x-0 top-0 h-32 rounded-t-2xl z-10"

                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)' }}

                />

                {/* Bottom shadow gradient */}

                <div

                  className="absolute inset-x-0 bottom-0 h-64 rounded-b-2xl z-10"

                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }}

                />

                {/* Card inner content */}

                <div className="absolute inset-0 z-20 flex flex-col justify-between p-7 max-[767px]:p-5">

                  {/* Logo top */}

                  <div>

                    <img

                      src={slide.logo}

                      alt=""

                      loading="lazy"

                      className="h-6 w-auto object-contain"

                    />

                  </div>

                  {/* Bottom content */}

                  <div className="flex flex-col gap-4">

                    {/* Quote section */}

                    <div className="flex flex-col gap-3">

                      {/* Eyebrow */}

                      <div className="flex items-center gap-2">

                        <div className="w-2 h-2 rounded-full bg-[#c8f135] flex-shrink-0" />

                        <span className="text-[11px] font-medium tracking-widest uppercase text-white">

                          {slide.eyebrow}

                        </span>

                      </div>

                      {/* Quote */}

                      <p

                        className="text-white text-[20px] max-[767px]:text-[17px] font-normal leading-[1.3] m-0"

                        style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}

                      >

                        {slide.quote}

                      </p>

                    </div>

                    {/* Bottom tile: author + CTA */}

                    <div className="flex items-end justify-between gap-4">

                      {/* Author */}

                      <div className="flex flex-col gap-0.5">

                        <span className="text-white text-sm leading-snug">{[slide.author](http://slide.author)}</span>

                        <span className="text-white text-sm leading-snug opacity-60">{slide.role}</span>

                      </div>

                      {/* Read case study */}

                      <div className="flex items-center gap-3 flex-shrink-0">

                        <span className="text-white text-sm whitespace-nowrap">Read case study</span>

                        <div className="w-9 h-9 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0 hover:scale-110 transition-transform duration-200">

                          <div className="w-4 h-4 text-[#1a1a1a]">

                            <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100%" height="100%" viewBox="0 0 16 16" fill="none">

                              <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

                            </svg>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  );

}

export default TestimonialsSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Inter&family=DM+Serif+Display&display=swap](https://fonts.googleapis.com/css2?family=Inter&family=DM+Serif+Display&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Inter, DM_Serif_Display } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a1a`, `#c8f135`, `#f5f2eb` → your project's color tokens

- **Font**: `Inter`, `DM Serif Display` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<TestimonialsSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a content/about section with a two-part layout: 1. A top text block (label + large heading paragraph) spanning the full width 2. A two-column asymmetric image grid below, where the left col...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/ValueFeaturesSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

ValueFeaturesSection.tsx

"use client";

/**

 * @fonts Inter

 * @fonts Playfair Display

 */

import * as React from 'react';

export function ValueFeaturesSection() {

  const leftImgRef = React.useRef<HTMLImageElement>(null);

  const rightImgRef = React.useRef<HTMLImageElement>(null);

  const headingRef = React.useRef<HTMLDivElement>(null);

  const [headingVisible, setHeadingVisible] = React.useState(false);

  const [textVisible, setTextVisible] = React.useState(false);

  const textRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if ([entry.target](http://entry.target) === headingRef.current && entry.isIntersecting) {

            setHeadingVisible(true);

          }

          if ([entry.target](http://entry.target) === textRef.current && entry.isIntersecting) {

            setTextVisible(true);

          }

        });

      },

      { threshold: 0.15 }

    );

    if (headingRef.current) observer.observe(headingRef.current);

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();

  }, []);

  React.useEffect(() => {

    const handleScroll = () => {

      [leftImgRef, rightImgRef].forEach((ref) => {

        if (!ref.current) return;

        const parent = ref.current.parentElement;

        if (!parent) return;

        const rect = parent.getBoundingClientRect();

        const progress = -[rect.top](http://rect.top) / window.innerHeight;

        [ref.current.style](http://ref.current.style).transform = `translateY(${progress * 50}px)`;

      });

    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  return (

    <section className="bg-[#f0ede4] py-20 max-[767px]:py-12">

      <div className="max-w-[940px] mx-auto px-5">

        {/* Top text block */}

        <div

          ref={headingRef}

          className={`mb-20 max-[767px]:mb-12 transition-all duration-700 ease-out ${

            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

          }`}

        >

          {/* Eyebrow */}

          <div className="flex items-center gap-2 mb-6">

            <div className="w-2 h-2 rounded-full bg-[#b5cc2e] flex-shrink-0" />

            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#1a1a1a]">

              Webflow template

            </span>

          </div>

          {/* Heading */}

          <div className="max-w-[600px]">

            <p className="text-[1.75rem] max-[767px]:text-2xl max-[479px]:text-xl leading-[1.3] font-normal text-[#1a1a1a]">

              Evermind™ isn't just pages, it's a calm system for your brand story. With modular layouts and smooth, nature-inspired interactions, every detail brings intelligence, lightness, and flow.

            </p>

          </div>

        </div>

        {/* Image grid */}

        <div className="grid grid-cols-[1fr_1.6fr] gap-8 items-start max-[767px]:grid-cols-1 max-[767px]:gap-6">

          {/* Left column — tall portrait */}

          <div className="overflow-hidden rounded-xl">

            <img

              ref={leftImgRef}

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutImage11.webp](https://byqsupply-components.netlify.app/evermind/images/AboutImage11.webp)"

              loading="lazy"

              alt=""

              className="w-full h-full object-cover block will-change-transform"

              style={{ minHeight: '480px', maxHeight: '600px' }}

            />

          </div>

          {/* Right column — landscape image + text */}

          <div

            ref={textRef}

            className={`flex flex-col gap-8 transition-all duration-700 ease-out delay-200 ${

              textVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

          >

            {/* Landscape image */}

            <div className="overflow-hidden rounded-xl">

              <img

                ref={rightImgRef}

                src="[https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBgreenhouse.webp)"

                loading="lazy"

                alt=""

                className="w-full object-cover block will-change-transform"

                style={{ height: '320px' }}

              />

            </div>

            {/* Body text */}

            <div className="pl-0 max-[767px]:pl-0">

              <p className="text-sm leading-relaxed text-[#1a1a1a] max-w-[420px] max-[767px]:max-w-full">

                Evermind™ may look like a Brussels-based eco consultancy, but let's be real — this is a Webflow template. Just like we'd design a power plant with precision and European standards, we've built this system with variables, modular layouts, and pixel-perfect details.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ValueFeaturesSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap](https://fonts.googleapis.com/css2?family=Inter&family=Playfair+Display&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Inter, Playfair_Display } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a1a`, `#f0ede4`, `#b5cc2e` → your project's color tokens

- **Font**: `Inter`, `Playfair Display` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<ValueFeaturesSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a feature showcase section with a sticky/scrolling left sidebar and a right content column. The overall layout is a two-column grid: a narrow left column (~25%) containing a logo eyebrow + ...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/ValueFeaturesSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

ValueFeaturesSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

interface ParallaxImageProps {

  src: string;

  srcSet?: string;

  sizes?: string;

  alt?: string;

  widgetSrc: string;

  widgetAlt?: string;

  widgetClass?: string;

}

function ParallaxImage({ src, srcSet, sizes, alt, widgetSrc, widgetAlt, widgetClass }: ParallaxImageProps) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.closest('.parallax-parent') as HTMLElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 60}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <div className="parallax-parent relative overflow-hidden rounded-xl w-full h-full">

      <img

        ref={imgRef}

        src={src}

        srcSet={srcSet}

        sizes={sizes}

        alt={alt || ''}

        loading="lazy"

        className="w-full h-full object-cover will-change-transform"

        style={{ minHeight: '100%' }}

      />

      <div className="absolute inset-0 flex items-end justify-center pb-8 px-6">

        <img

          src={widgetSrc}

          loading="lazy"

          alt={widgetAlt || ''}

          className=`max-w-[80%] drop-shadow-2xl ${widgetClass || ''}`}

        />

      </div>

    </div>

  );

}

interface ContentItemProps {

  id: string;

  eyebrowLabel: string;

  heading: string;

  body: string;

  imageSrc: string;

  imageSrcSet?: string;

  imageSizes?: string;

  widgetSrc: string;

  widgetClass?: string;

  index: number;

}

function ContentItem({

  id,

  eyebrowLabel,

  heading,

  body,

  imageSrc,

  imageSrcSet,

  imageSizes,

  widgetSrc,

  widgetClass,

  index,

}: ContentItemProps) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.1 }

    );

    observer.observe(el);

    return () => observer.disconnect();

  }, []);

  return (

    <div

      id={id}

      ref={ref}

      className={`flex flex-row max-[767px]:flex-col gap-8 transition-all duration-700 ease-out ${

        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

      }`}

      style={{ transitionDelay: `${index * 120}ms` }}

    >

      {/* Image */}

      <div className="w-[58%] max-[767px]:w-full flex-shrink-0" style={{ minHeight: '380px', height: '420px' }}>

        <ParallaxImage

          src={imageSrc}

          srcSet={imageSrcSet}

          sizes={imageSizes}

          widgetSrc={widgetSrc}

          widgetClass={widgetClass}

        />

      </div>

      {/* Text */}

      <div className="flex flex-col gap-4 justify-center py-4 flex-1">

        {/* Eyebrow */}

        <div className="flex items-center gap-2">

          <div className="w-2 h-2 rounded-full bg-[#c8ff00] flex-shrink-0" />

          <span className="text-[#c8ff00] text-xs font-medium tracking-widest uppercase">{eyebrowLabel}</span>

        </div>

        {/* Heading */}

        <h3 className="text-white text-xl font-semibold leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>

          {heading}

        </h3>

        {/* Body */}

        <p className="text-[rgba(255,255,255,0.88)] text-sm leading-relaxed">

          {body}

        </p>

      </div>

    </div>

  );

}

export function ValueFeaturesSection() {

  const [activeTab, setActiveTab] = React.useState('eco');

  const tabs = [

    { id: 'eco', label: 'Eco Frameworks' },

    { id: 'green', label: 'Green CMS Engine' },

    { id: 'pages', label: 'Smart, flexible pages' },

  ];

  const handleTabClick = (id: string) => {

    setActiveTab(id);

    const el = document.getElementById(id);

    if (el) {

      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

  };

  const headingRef = React.useRef<HTMLDivElement>(null);

  const [headingVisible, setHeadingVisible] = React.useState(false);

  React.useEffect(() => {

    const el = headingRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setHeadingVisible(true);

          observer.disconnect();

        }

      },

      { threshold: 0.1 }

    );

    observer.observe(el);

    return () => observer.disconnect();

  }, []);

  return (

    <section className="bg-[#141414] py-24 max-[767px]:py-16">

      <div className="max-w-[1200px] mx-auto px-6 max-[991px]:px-5">

        {/* Two-column grid: sidebar + content */}

        <div className="grid grid-cols-[260px_1fr] gap-12 max-[991px]:grid-cols-1 max-[991px]:gap-8">

          {/* LEFT SIDEBAR */}

          <div className="flex flex-col gap-10 max-[991px]:gap-6">

            {/* Eyebrow */}

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-[#c8ff00] flex-shrink-0" />

              <span className="text-[#c8ff00] text-[10px] font-medium tracking-[0.15em] uppercase">EVERMIND SYSTEM</span>

            </div>

            {/* Heading */}

            <div

              ref={headingRef}

              className={`transition-all duration-700 ease-out ${

                headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'

              }`}

            >

              <p

                className="text-white text-2xl max-[991px]:text-3xl max-[767px]:text-2xl font-semibold leading-snug"

                style={{ fontFamily: 'Playfair Display, serif' }}

              >

                Every section, variable, and interaction is designed to create a calm, future-proof foundation for brands that value clarity and durability.

              </p>

            </div>

            {/* Tab list */}

            <nav className="flex flex-col border-t border-[rgba(255,255,255,0.12)] max-[991px]:flex-row max-[991px]:flex-wrap max-[767px]:flex-col">

              {[tabs.map](http://tabs.map)((tab) => (

                <button

                  key={[tab.id](http://tab.id)}

                  onClick={() => handleTabClick([tab.id](http://tab.id))}

                  className={`text-left py-4 border-b border-[rgba(255,255,255,0.12)] text-sm transition-colors duration-200 cursor-pointer bg-transparent outline-none

                    ${activeTab === [tab.id](http://tab.id)

                      ? 'text-white font-semibold'

                      : 'text-[rgba(255,255,255,0.4)] font-normal hover:text-[rgba(255,255,255,0.75)]'

                    }

                    max-[991px]:pr-6 max-[767px]:pr-0

                  `}

                >

                  {tab.label}

                </button>

              ))}

            </nav>

          </div>

          {/* RIGHT CONTENT */}

          <div className="flex flex-col gap-20 max-[767px]:gap-14">

            <ContentItem

              id="eco"

              index={0}

              eyebrowLabel="uno"

              heading="Frameworks built like modern eco-architecture."

              body="Evermind™ delivers a modular foundation engineered for long-term stability. With pixel-perfect layouts and a calm design system, it's built to evolve just like sustainable infrastructure."

              imageSrc="[https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp)"

              imageSrcSet="[https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp](https://byqsupply-components.netlify.app/evermind/images/AboutBcity.webp) 680w"

              imageSizes="(max-width: 680px) 100vw, 680px"

              widgetSrc="[https://byqsupply-components.netlify.app/evermind/images/Widget.svg](https://byqsupply-components.netlify.app/evermind/images/Widget.svg)"

            />

            <ContentItem

              id="green"

              index={1}

              eyebrowLabel="Duo"

              heading="Content flows like renewable energy"

              body="A CMS that powers blogs, case studies, and brand storytelling with zero friction. Designed for efficiency, scalability, and clean data architecture — ready to grow with your brand."

              imageSrc="[https://byqsupply-components.netlify.app/evermind/images/Thumbnail.webp](https://byqsupply-components.netlify.app/evermind/images/Thumbnail.webp)"

              imageSrcSet="[https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-500.webp](https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-500.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-800.webp](https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-800.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-1080.webp](https://byqsupply-components.netlify.app/evermind/images/5aaf33b87d48452a2044d79ef265ab80a8844499-p-1080.webp) 1080w, [https://byqsupply-components.netlify.app/evermind/images/Thumbnail.webp](https://byqsupply-components.netlify.app/evermind/images/Thumbnail.webp) 2400w"

              imageSizes="(max-width: 767px) 100vw, (max-width: 991px) 727.96875px, 939.984375px"

              widgetSrc="[https://byqsupply-components.netlify.app/evermind/images/FeaturedWidgets.webp](https://byqsupply-components.netlify.app/evermind/images/FeaturedWidgets.webp)"

              widgetClass="_2"

            />

            <ContentItem

              id="pages"

              index={2}

              eyebrowLabel="rike"

              heading="Content flows like renewable energy"

              body="A CMS that powers blogs, case studies, and brand storytelling with zero friction. Designed for efficiency, scalability, and clean data architecture — ready to grow with your brand."

              imageSrc="[https://byqsupply-components.netlify.app/evermind/images/TabImage.webp](https://byqsupply-components.netlify.app/evermind/images/TabImage.webp)"

              imageSrcSet="[https://byqsupply-components.netlify.app/evermind/images/TabImage.webp](https://byqsupply-components.netlify.app/evermind/images/TabImage.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/TabImage.webp](https://byqsupply-components.netlify.app/evermind/images/TabImage.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/TabImage.webp](https://byqsupply-components.netlify.app/evermind/images/TabImage.webp) 848w"

              imageSizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 848px"

              widgetSrc="[https://byqsupply-components.netlify.app/evermind/images/Widget1.svg](https://byqsupply-components.netlify.app/evermind/images/Widget1.svg)"

              widgetClass="_3"

            />

          </div>

        </div>

      </div>

    </section>

  );

}

export default ValueFeaturesSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#c8ff00`, `#141414` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<ValueFeaturesSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a split two-column section. The left column contains a headline block (eyebrow label, H3 heading, CTA button) followed by an accordion/tab list of 4 feature items. The right column displays...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/ValueFeaturesSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

ValueFeaturesSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

const tabs = [

  {

    title: 'Adaptive Layouts',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget.svg](https://byqsupply-components.netlify.app/evermind/images/Widget.svg)',

    widgetType: 'svg',

  },

  {

    title: 'Powerful CMS',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-1.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-1.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget1.webp](https://byqsupply-components.netlify.app/evermind/images/Widget1.webp)',

    widgetType: 'img',

  },

  {

    title: 'Human-Centered Design',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-2.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget1.svg](https://byqsupply-components.netlify.app/evermind/images/Widget1.svg)',

    widgetType: 'svg',

  },

  {

    title: 'Future-Proof Setup',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-3.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-3.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Frame1000004139.svg](https://byqsupply-components.netlify.app/evermind/images/Frame1000004139.svg)',

    widgetType: 'svg',

  },

];

export function ValueFeaturesSection() {

  const [activeTab, setActiveTab] = React.useState(0);

  const [prevTab, setPrevTab] = React.useState(0);

  const [imageVisible, setImageVisible] = React.useState(true);

  const handleTabClick = (index: number) => {

    if (index === activeTab) return;

    setImageVisible(false);

    setTimeout(() => {

      setPrevTab(activeTab);

      setActiveTab(index);

      setImageVisible(true);

    }, 200);

  };

  return (

    <section className="bg-[#f0ede6] py-20 max-[767px]:py-12">

      <div className="max-w-[940px] mx-auto px-5">

        <div className="grid grid-cols-[1fr_1fr] gap-10 items-start max-[991px]:grid-cols-1 max-[767px]:grid-cols-1">

          {/* Left Column */}

          <div className="flex flex-col gap-0">

            {/* Headline block */}

            <div className="flex flex-col gap-5 mb-10">

              {/* Divider */}

              <div className="w-full h-px bg-[#d4d0c8]" />

              {/* Eyebrow */}

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-[#8fad2a] flex-shrink-0" />

                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b6b5e] font-['Inter',sans-serif]">

                  Selling Points

                </span>

              </div>

              {/* H3 */}

              <h2 className="text-[#1a1a14] font-['Playfair_Display',serif] text-[44px] font-normal leading-[1.1] tracking-[-0.01em] max-[767px]:text-4xl max-[479px]:text-3xl">

                A system shaped like sustainable projects.

              </h2>

              {/* CTA Button */}

              <a

                href="#"

                className="inline-flex items-center justify-center self-start px-6 py-3 rounded-full border border-[#1a1a14] text-[#1a1a14] text-sm font-['Inter',sans-serif] font-normal tracking-wide transition-all duration-300 hover:bg-[#1a1a14] hover:text-[#f0ede6] cursor-pointer"

              >

                Check pricing

              </a>

            </div>

            {/* Accordion Tabs */}

            <div className="flex flex-col">

              {[tabs.map](http://tabs.map)((tab, i) => {

                const isActive = activeTab === i;

                return (

                  <button

                    key={i}

                    onClick={() => handleTabClick(i)}

                    className="w-full text-left focus:outline-none"

                  >

                    <div className="border-t border-[#d4d0c8] py-4">

                      <div

                        className={`text-sm font-['Inter',sans-serif] font-bold transition-colors duration-300 ${

                          isActive ? 'text-[#1a1a14]' : 'text-[#9b9b8a]'

                        }`}

                      >

                        {tab.title}

                      </div>

                      <div

                        className={`overflow-hidden transition-all duration-300 ease-in-out ${

                          isActive ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'

                        }`}

                      >

                        <p className="text-sm text-[#3d3d30] font-['Inter',sans-serif] leading-relaxed">

                          {tab.body}

                        </p>

                      </div>

                    </div>

                  </button>

                );

              })}

              {/* Bottom divider */}

              <div className="w-full h-px bg-[#d4d0c8]" />

            </div>

          </div>

          {/* Right Column — Image */}

          <div className="relative rounded-xl overflow-hidden max-[991px]:mt-8 max-[767px]:mt-6" style={{ minHeight: '500px' }}>

            {/* Images stacked, fade between them */}

            {[tabs.map](http://tabs.map)((tab, i) => (

              <div

                key={i}

                className="absolute inset-0 transition-opacity duration-300 ease-in-out"

                style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}

              >

                <img

                  src={tab.image}

                  alt=""

                  className="w-full h-full object-cover"

                  loading="lazy"

                />

              </div>

            ))}

            {/* Widget overlay — always shows active tab's widget */}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {[tabs.map](http://tabs.map)((tab, i) => (

                <div

                  key={i}

                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"

                  style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}

                >

                  {i === 0 ? (

                    /* Custom widget for Tab 1 — the "Top states" bar chart card */

                    <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg w-[280px]">

                      <p className="text-[#3d3d30] text-sm font-['Inter',sans-serif] mb-4">Top states</p>

                      <div className="flex flex-col gap-3">

                        {[

                          { label: 'NY', value: '120K', width: '100%' },

                          { label: 'MA', value: '80K', width: '67%' },

                          { label: 'NH', value: '70K', width: '58%' },

                          { label: 'OR', value: '50K', width: '42%' },

                        ].map((row) => (

                          <div key={row.label} className="flex items-center gap-2">

                            <div

                              className="relative flex items-center rounded"

                              style={{ width: row.width, minWidth: '100%' }}

                            >

                              <div

                                className="flex items-center rounded bg-[#8fad2a]/30 w-full h-8 relative overflow-hidden"

                              >

                                <div

                                  className="absolute left-0 top-0 h-full bg-[#8fad2a]/40 rounded"

                                  style={{ width: row.width }}

                                />

                                <span className="relative z-10 text-xs font-bold text-[#1a1a14] font-['Inter',sans-serif] px-2">

                                  {row.label}

                                </span>

                                <span className="relative z-10 ml-auto text-xs text-[#3d3d30] font-['Inter',sans-serif] px-2">

                                  {row.value}

                                </span>

                              </div>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  ) : (

                    <img

                      src={tab.widget}

                      alt=""

                      className="max-w-[60%] max-h-[60%] object-contain drop-shadow-xl"

                      loading="lazy"

                    />

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ValueFeaturesSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a14`, `#d4d0c8`, `#8fad2a`, `#3d3d30`, `#f0ede6`, `#6b6b5e` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<ValueFeaturesSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a split two-column section. The left column contains a headline block (eyebrow label, H3 heading, CTA button) followed by an accordion/tab list of 4 feature items. The right column displays...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/ValueFeaturesSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

ValueFeaturesSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

const tabs = [

  {

    title: 'Adaptive Layouts',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget.svg](https://byqsupply-components.netlify.app/evermind/images/Widget.svg)',

    widgetType: 'svg',

  },

  {

    title: 'Powerful CMS',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-1.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-1.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget1.webp](https://byqsupply-components.netlify.app/evermind/images/Widget1.webp)',

    widgetType: 'img',

  },

  {

    title: 'Human-Centered Design',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-2.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-2.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Widget1.svg](https://byqsupply-components.netlify.app/evermind/images/Widget1.svg)',

    widgetType: 'svg',

  },

  {

    title: 'Future-Proof Setup',

    body: 'Built with Webflow variables and clean architecture — as precise as a modern construction project.',

    image: '[https://byqsupply-components.netlify.app/evermind/images/FeatureImage-3.webp](https://byqsupply-components.netlify.app/evermind/images/FeatureImage-3.webp)',

    widget: '[https://byqsupply-components.netlify.app/evermind/images/Frame1000004139.svg](https://byqsupply-components.netlify.app/evermind/images/Frame1000004139.svg)',

    widgetType: 'svg',

  },

];

export function ValueFeaturesSection() {

  const [activeTab, setActiveTab] = React.useState(0);

  const [prevTab, setPrevTab] = React.useState(0);

  const [imageVisible, setImageVisible] = React.useState(true);

  const handleTabClick = (index: number) => {

    if (index === activeTab) return;

    setImageVisible(false);

    setTimeout(() => {

      setPrevTab(activeTab);

      setActiveTab(index);

      setImageVisible(true);

    }, 200);

  };

  return (

    <section className="bg-[#f0ede6] py-20 max-[767px]:py-12">

      <div className="max-w-[940px] mx-auto px-5">

        <div className="grid grid-cols-[1fr_1fr] gap-10 items-start max-[991px]:grid-cols-1 max-[767px]:grid-cols-1">

          {/* Left Column */}

          <div className="flex flex-col gap-0">

            {/* Headline block */}

            <div className="flex flex-col gap-5 mb-10">

              {/* Divider */}

              <div className="w-full h-px bg-[#d4d0c8]" />

              {/* Eyebrow */}

              <div className="flex items-center gap-2">

                <div className="w-2 h-2 rounded-full bg-[#8fad2a] flex-shrink-0" />

                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#6b6b5e] font-['Inter',sans-serif]">

                  Selling Points

                </span>

              </div>

              {/* H3 */}

              <h2 className="text-[#1a1a14] font-['Playfair_Display',serif] text-[44px] font-normal leading-[1.1] tracking-[-0.01em] max-[767px]:text-4xl max-[479px]:text-3xl">

                A system shaped like sustainable projects.

              </h2>

              {/* CTA Button */}

              <a

                href="#"

                className="inline-flex items-center justify-center self-start px-6 py-3 rounded-full border border-[#1a1a14] text-[#1a1a14] text-sm font-['Inter',sans-serif] font-normal tracking-wide transition-all duration-300 hover:bg-[#1a1a14] hover:text-[#f0ede6] cursor-pointer"

              >

                Check pricing

              </a>

            </div>

            {/* Accordion Tabs */}

            <div className="flex flex-col">

              {[tabs.map](http://tabs.map)((tab, i) => {

                const isActive = activeTab === i;

                return (

                  <button

                    key={i}

                    onClick={() => handleTabClick(i)}

                    className="w-full text-left focus:outline-none"

                  >

                    <div className="border-t border-[#d4d0c8] py-4">

                      <div

                        className={`text-sm font-['Inter',sans-serif] font-bold transition-colors duration-300 ${

                          isActive ? 'text-[#1a1a14]' : 'text-[#9b9b8a]'

                        }`}

                      >

                        {tab.title}

                      </div>

                      <div

                        className={`overflow-hidden transition-all duration-300 ease-in-out ${

                          isActive ? 'max-h-[200px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'

                        }`}

                      >

                        <p className="text-sm text-[#3d3d30] font-['Inter',sans-serif] leading-relaxed">

                          {tab.body}

                        </p>

                      </div>

                    </div>

                  </button>

                );

              })}

              {/* Bottom divider */}

              <div className="w-full h-px bg-[#d4d0c8]" />

            </div>

          </div>

          {/* Right Column — Image */}

          <div className="relative rounded-xl overflow-hidden max-[991px]:mt-8 max-[767px]:mt-6" style={{ minHeight: '500px' }}>

            {/* Images stacked, fade between them */}

            {[tabs.map](http://tabs.map)((tab, i) => (

              <div

                key={i}

                className="absolute inset-0 transition-opacity duration-300 ease-in-out"

                style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}

              >

                <img

                  src={tab.image}

                  alt=""

                  className="w-full h-full object-cover"

                  loading="lazy"

                />

              </div>

            ))}

            {/* Widget overlay — always shows active tab's widget */}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              {[tabs.map](http://tabs.map)((tab, i) => (

                <div

                  key={i}

                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"

                  style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}

                >

                  {i === 0 ? (

                    /* Custom widget for Tab 1 — the "Top states" bar chart card */

                    <div className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg w-[280px]">

                      <p className="text-[#3d3d30] text-sm font-['Inter',sans-serif] mb-4">Top states</p>

                      <div className="flex flex-col gap-3">

                        {[

                          { label: 'NY', value: '120K', width: '100%' },

                          { label: 'MA', value: '80K', width: '67%' },

                          { label: 'NH', value: '70K', width: '58%' },

                          { label: 'OR', value: '50K', width: '42%' },

                        ].map((row) => (

                          <div key={row.label} className="flex items-center gap-2">

                            <div

                              className="relative flex items-center rounded"

                              style={{ width: row.width, minWidth: '100%' }}

                            >

                              <div

                                className="flex items-center rounded bg-[#8fad2a]/30 w-full h-8 relative overflow-hidden"

                              >

                                <div

                                  className="absolute left-0 top-0 h-full bg-[#8fad2a]/40 rounded"

                                  style={{ width: row.width }}

                                />

                                <span className="relative z-10 text-xs font-bold text-[#1a1a14] font-['Inter',sans-serif] px-2">

                                  {row.label}

                                </span>

                                <span className="relative z-10 ml-auto text-xs text-[#3d3d30] font-['Inter',sans-serif] px-2">

                                  {row.value}

                                </span>

                              </div>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  ) : (

                    <img

                      src={tab.widget}

                      alt=""

                      className="max-w-[60%] max-h-[60%] object-contain drop-shadow-xl"

                      loading="lazy"

                    />

                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default ValueFeaturesSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a14`, `#d4d0c8`, `#8fad2a`, `#3d3d30`, `#f0ede6`, `#6b6b5e` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<ValueFeaturesSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero section with a centered headline area at the top, a large image block with floating overlay widgets in the middle, and a logo marquee strip at the bottom. The overall layout is a sin...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

const logos = [

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-7.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-7.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-2.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-2.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-5.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-5.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-8.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-8.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-1.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-1.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-3.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-3.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-6.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-6.svg)',

  '[https://byqsupply-components.netlify.app/evermind/images/Companylogo-4.svg](https://byqsupply-components.netlify.app/evermind/images/Companylogo-4.svg)',

];

export function HeroSection() {

  // Entrance animation for headline block

  const headlineRef = React.useRef<HTMLDivElement>(null);

  const [headlineVisible, setHeadlineVisible] = React.useState(false);

  React.useEffect(() => {

    const el = headlineRef.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {

          setHeadlineVisible(true);

          obs.disconnect();

        }

      },

      { threshold: 0.1 }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, []);

  // Parallax for hero image

  const parallaxRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!parallaxRef.current) return;

      const parent = parallaxRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [parallaxRef.current.style](http://parallaxRef.current.style).transform = `translateY(${progress * 60}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  // Marquee pause on hover

  const [marqueeHovered, setMarqueeHovered] = React.useState(false);

  return (

    <section className="relative bg-[#1e1f1a] overflow-hidden pt-[100px] pb-[80px] max-[767px]:pt-[60px] max-[767px]:pb-[60px]">

      <style>{`

        @import url('[https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap)');

        @keyframes marquee-logos {

          from { transform: translateX(0); }

          to { transform: translateX(-33.3333%); }

        }

        .animate-marquee-logos {

          animation: marquee-logos 30s linear infinite;

        }

        .animate-marquee-logos.paused {

          animation-play-state: paused;

        }

      `}</style>

      <div className="max-w-[940px] mx-auto px-5">

        {/* Headline block */}

        <div

          ref={headlineRef}

          className={`flex flex-col items-center text-center mb-10 transition-all duration-700 ease-out ${

            headlineVisible

              ? 'opacity-100 blur-0'

              : 'opacity-0 blur-[12px]'

          }`}

        >

          {/* Eyebrow */}

          <div className="flex items-center gap-2 mb-6">

            <div className="w-2 h-2 rounded-full bg-[#c8f135]" />

            <span

              className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50"

              style={{ fontFamily: 'Inter, sans-serif' }}

            >

              A modular Webflow template

            </span>

          </div>

          {/* H1 */}

          <h1

            className="text-white font-bold leading-[1.1] mb-8 max-w-[700px] text-[72px] max-[991px]:text-[56px] max-[767px]:text-[40px] max-[479px]:text-[32px]"

            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

          >

            Crafted like sustainable architecture

          </h1>

          {/* Buttons */}

          <div className="flex items-center gap-4 flex-wrap justify-center">

            {/* Buy Template */}

            <a

              href="#"

              className="relative inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#c8f135] text-[#1e1f1a] text-sm font-semibold overflow-hidden transition-all duration-300 hover:bg-[#d4f54a] hover:scale-[1.03]"

              style={{ fontFamily: 'Inter, sans-serif' }}

            >

              Buy Template

            </a>

            {/* Book a call */}

            <a

              href="#"

              className="relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium overflow-hidden transition-all duration-300 hover:bg-white/10"

              style={{ fontFamily: 'Inter, sans-serif' }}

            >

              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">

                <img

                  src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

              Book a call

            </a>

          </div>

        </div>

        {/* Hero image wrap */}

        <div className="relative w-full mb-10">

          {/* Main image container */}

          <div className="relative overflow-hidden rounded-2xl w-full max-[767px]:rounded-xl" style={{ height: '420px' }}>

            <img

              ref={parallaxRef}

              src="[https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp](https://byqsupply-components.netlify.app/evermind/images/AboutB11.webp)"

              alt=""

              className="w-full h-[calc(100%+80px)] object-cover -mt-10"

              loading="lazy"

            />

          </div>

          {/* Overlay widget 1 — Quarter goal card (top-left, overlapping image) */}

          <div className="absolute top-[-30px] left-[-30px] max-[767px]:left-0 max-[767px]:top-[-20px] z-10">

            <div

              className="rounded-2xl p-5 w-[200px] max-[479px]:w-[160px]"

              style={{

                background: 'rgba(180,180,170,0.85)',

                backdropFilter: 'blur(12px)',

              }}

            >

              <p

                className="text-[#2a2a25] text-xs font-medium mb-3 text-center"

                style={{ fontFamily: 'Inter, sans-serif' }}

              >

                Quarter goal

              </p>

              {/* Gauge arc */}

              <div className="flex items-center justify-center mb-3">

                <div className="relative w-[90px] h-[50px]">

                  <svg viewBox="0 0 90 50" className="w-full h-full">

                    <path

                      d="M 10 45 A 35 35 0 0 1 80 45"

                      fill="none"

                      stroke="rgba(0,0,0,0.15)"

                      strokeWidth="6"

                      strokeLinecap="round"

                    />

                    <path

                      d="M 10 45 A 35 35 0 0 1 80 45"

                      fill="none"

                      stroke="#c8f135"

                      strokeWidth="6"

                      strokeLinecap="round"

                      strokeDasharray="110"

                      strokeDashoffset="17"

                    />

                  </svg>

                  <span

                    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[#2a2a25] text-xl font-bold"

                    style={{ fontFamily: 'Inter, sans-serif' }}

                  >

                    84%

                  </span>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <span

                  className="text-[#2a2a25] text-xs"

                  style={{ fontFamily: 'Inter, sans-serif' }}

                >

                  Success Story

                </span>

                <div className="w-6 h-6 rounded-full bg-[#c8f135] flex items-center justify-center flex-shrink-0">

                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">

                    <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="#1e1f1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

                  </svg>

                </div>

              </div>

            </div>

          </div>

          {/* Overlay widget 2 — 8x card (bottom-left, inside image) */}

          <div className="absolute bottom-6 left-6 z-10 max-[479px]:bottom-3 max-[479px]:left-3">

            <div

              className="rounded-xl p-5 w-[160px] max-[479px]:w-[130px]"

              style={{

                background: 'rgba(40,45,30,0.88)',

                backdropFilter: 'blur(10px)',

                borderLeft: '3px solid #c8f135',

              }}

            >

              <p

                className="text-white font-bold mb-1"

                style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', lineHeight: 1 }}

              >

                8x

              </p>

              <p

                className="text-white/60 text-xs"

                style={{ fontFamily: 'Inter, sans-serif' }}

              >

                Faster launch times.

              </p>

            </div>

          </div>

          {/* Overlay widget 3 — Portrait circle (top-right, above image) */}

          <div className="absolute top-[-50px] right-[-10px] max-[767px]:right-0 max-[767px]:top-[-30px] z-10">

            <div className="w-[100px] h-[100px] max-[767px]:w-[70px] max-[767px]:h-[70px] rounded-full overflow-hidden border-4 border-[#1e1f1a] shadow-xl">

              <img

                src="[https://byqsupply-components.netlify.app/evermind/images/HomeC.webp](https://byqsupply-components.netlify.app/evermind/images/HomeC.webp)"

                alt=""

                className="w-full h-full object-cover"

                loading="lazy"

              />

            </div>

          </div>

          {/* Overlay widget 4 — Solar panel product image (bottom-right, outside image) */}

          <div className="absolute bottom-[-60px] right-[-40px] max-[767px]:right-0 max-[767px]:bottom-[-40px] z-10 max-[479px]:hidden">

            <img

              src="[https://byqsupply-components.netlify.app/evermind/images/Satelite_1Satelite.webp](https://byqsupply-components.netlify.app/evermind/images/Satelite_1Satelite.webp)"

              alt=""

              className="w-[140px] max-[991px]:w-[110px] rounded-xl shadow-2xl"

              loading="lazy"

            />

          </div>

        </div>

        {/* Companies label */}

        <div className="flex items-center gap-2 justify-center mt-20 mb-8 max-[767px]:mt-16">

          <div className="w-2 h-2 rounded-full bg-[#c8f135]" />

          <span

            className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/50"

            style={{ fontFamily: 'Inter, sans-serif' }}

          >

            Companies we worked with

          </span>

        </div>

        {/* Logo Marquee */}

        <div

          className="relative overflow-hidden"

          onMouseEnter={() => setMarqueeHovered(true)}

          onMouseLeave={() => setMarqueeHovered(false)}

        >

          {/* Left shadow */}

          <div

            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"

            style={{

              background: 'linear-gradient(to right, #1e1f1a, transparent)',

            }}

          />

          {/* Right shadow */}

          <div

            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"

            style={{

              background: 'linear-gradient(to left, #1e1f1a, transparent)',

            }}

          />

          <div

            className=`flex w-max animate-marquee-logos${marqueeHovered ? ' paused' : ''}`}

          >

            {/* 3 copies for seamless loop */}

            {[0, 1, 2].map((copyIdx) => (

              <div key={copyIdx} className="flex items-center gap-12 px-6">

                {[logos.map](http://logos.map)((src, i) => (

                  <img

                    key={i}

                    src={src}

                    alt=""

                    loading="lazy"

                    className="h-6 max-h-6 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"

                  />

                ))}

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Background dots decoration */}

      <img

        src="[https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg](https://byqsupply-components.netlify.app/evermind/images/DotsLight.svg)"

        loading="lazy"

        alt=""

        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] opacity-30 pointer-events-none"

      />

    </section>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#c8f135`, `#1e1f1a`, `#2a2a25`, `#d4f54a` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero section with two stacked sub-sections. The first section contains a centered headline block (h1 + subtitle + CTA button) followed by a two-image asymmetric layout. The second section...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt, className }: {

  src: string; srcSet: string; sizes: string; alt: string; className?: string;

}) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className={className}

    />

  );

}

export function HeroSection() {

  const headingAnim = useInView(0.1);

  const subtitleAnim = useInView(0.1);

  const img1Anim = useInView(0.1);

  const img2Anim = useInView(0.1);

  const bodyAnim = useInView(0.1);

  return (

    <div className="bg-[#eeeee6] font-['Inter',sans-serif]">

      {/* Section 1 */}

      <section className="relative pt-16 pb-0 overflow-hidden">

        <div className="max-w-[940px] mx-auto px-5">

          {/* Headline block */}

          <div className="flex flex-col items-center text-center mb-16 max-[767px]:mb-10">

            {/* H1 */}

            <div ref={headingAnim.ref}>

              <h1

                className={`font-['Playfair_Display',Georgia,serif] text-[#1e1e1a] text-[clamp(42px,5vw,72px)] leading-[1.1] font-normal mb-6 max-[767px]:text-[40px] transition-all duration-700 ease-out ${

                  headingAnim.visible

                    ? 'opacity-100 blur-0'

                    : 'opacity-0 blur-[12px]'

                }`}

              >

                Wind Farm Advisory Session

              </h1>

            </div>

            {/* Subtitle + CTA */}

            <div

              ref={subtitleAnim.ref}

              className={`flex flex-col items-center gap-5 transition-all duration-700 ease-out ${

                subtitleAnim.visible

                  ? 'opacity-100 blur-0'

                  : 'opacity-0 blur-[12px]'

              }`}

              style={{ transitionDelay: '150ms' }}

            >

              <div className="text-[#1e1e1a] text-base leading-relaxed">

                A focused space for better energy decisions.

              </div>

              {/* CTA Button */}

              <a

                href="#"

                className="relative inline-flex items-center gap-3 border border-[#1e1e1a]/20 rounded-full pl-1 pr-5 py-1 bg-white/60 hover:bg-white/90 transition-colors duration-300 no-underline group overflow-hidden"

              >

                {/* Left side: avatar + green dot */}

                <div className="relative flex-shrink-0">

                  <div className="w-9 h-9 rounded-full overflow-hidden">

                    <img

                      src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                      alt=""

                      loading="lazy"

                      className="w-full h-full object-cover"

                    />

                  </div>

                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#8bc34a] border-2 border-white" />

                </div>

                {/* Button text */}

                <span className="text-[#1e1e1a] text-sm font-medium">Book a call</span>

              </a>

            </div>

          </div>

          {/* Two images staggered */}

          <div className="relative flex items-start justify-center max-[767px]:flex-col max-[767px]:gap-4">

            {/* Image 1 — left, higher */}

            <div

              ref={img1Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl z-10 transition-all duration-700 ease-out ${

                img1Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '100ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 500w, [https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg](https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

            {/* Image 2 — right, lower */}

            <div

              ref={img2Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl -ml-8 mt-16 z-20 max-[767px]:ml-0 max-[767px]:mt-0 transition-all duration-700 ease-out ${

                img2Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '250ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

          </div>

        </div>

        {/* Decorative dots */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

          loading="lazy"

          alt=""

          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 max-w-none"

        />

      </section>

      {/* Section 2 — body text */}

      <section className="py-24 max-[767px]:py-16">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={bodyAnim.ref}

            className={`max-w-[600px] mx-auto text-center transition-all duration-700 ease-out ${

              bodyAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

          >

            <p className="text-[#1e1e1a] text-lg leading-relaxed font-normal max-[767px]:text-base">

              You are building something that will stay with us for decades. You have many questions: about localization, profitability, regulations, environmental impact. This session doesn&apos;t solve everything — but it will help you move forward with confidence.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1e1e1a`, `#eeeee6`, `#8bc34a` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero section with two stacked sub-sections. The first section contains a centered headline block (h1 + subtitle + CTA button) followed by a two-image asymmetric layout. The second section...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt, className }: {

  src: string; srcSet: string; sizes: string; alt: string; className?: string;

}) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className={className}

    />

  );

}

export function HeroSection() {

  const headingAnim = useInView(0.1);

  const subtitleAnim = useInView(0.1);

  const img1Anim = useInView(0.1);

  const img2Anim = useInView(0.1);

  const bodyAnim = useInView(0.1);

  return (

    <div className="bg-[#eeeee6] font-['Inter',sans-serif]">

      {/* Section 1 */}

      <section className="relative pt-16 pb-0 overflow-hidden">

        <div className="max-w-[940px] mx-auto px-5">

          {/* Headline block */}

          <div className="flex flex-col items-center text-center mb-16 max-[767px]:mb-10">

            {/* H1 */}

            <div ref={headingAnim.ref}>

              <h1

                className={`font-['Playfair_Display',Georgia,serif] text-[#1e1e1a] text-[clamp(42px,5vw,72px)] leading-[1.1] font-normal mb-6 max-[767px]:text-[40px] transition-all duration-700 ease-out ${

                  headingAnim.visible

                    ? 'opacity-100 blur-0'

                    : 'opacity-0 blur-[12px]'

                }`}

              >

                Wind Farm Advisory Session

              </h1>

            </div>

            {/* Subtitle + CTA */}

            <div

              ref={subtitleAnim.ref}

              className={`flex flex-col items-center gap-5 transition-all duration-700 ease-out ${

                subtitleAnim.visible

                  ? 'opacity-100 blur-0'

                  : 'opacity-0 blur-[12px]'

              }`}

              style={{ transitionDelay: '150ms' }}

            >

              <div className="text-[#1e1e1a] text-base leading-relaxed">

                A focused space for better energy decisions.

              </div>

              {/* CTA Button */}

              <a

                href="#"

                className="relative inline-flex items-center gap-3 border border-[#1e1e1a]/20 rounded-full pl-1 pr-5 py-1 bg-white/60 hover:bg-white/90 transition-colors duration-300 no-underline group overflow-hidden"

              >

                {/* Left side: avatar + green dot */}

                <div className="relative flex-shrink-0">

                  <div className="w-9 h-9 rounded-full overflow-hidden">

                    <img

                      src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                      alt=""

                      loading="lazy"

                      className="w-full h-full object-cover"

                    />

                  </div>

                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#8bc34a] border-2 border-white" />

                </div>

                {/* Button text */}

                <span className="text-[#1e1e1a] text-sm font-medium">Book a call</span>

              </a>

            </div>

          </div>

          {/* Two images staggered */}

          <div className="relative flex items-start justify-center max-[767px]:flex-col max-[767px]:gap-4">

            {/* Image 1 — left, higher */}

            <div

              ref={img1Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl z-10 transition-all duration-700 ease-out ${

                img1Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '100ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 500w, [https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg](https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

            {/* Image 2 — right, lower */}

            <div

              ref={img2Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl -ml-8 mt-16 z-20 max-[767px]:ml-0 max-[767px]:mt-0 transition-all duration-700 ease-out ${

                img2Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '250ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

          </div>

        </div>

        {/* Decorative dots */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

          loading="lazy"

          alt=""

          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 max-w-none"

        />

      </section>

      {/* Section 2 — body text */}

      <section className="py-24 max-[767px]:py-16">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={bodyAnim.ref}

            className={`max-w-[600px] mx-auto text-center transition-all duration-700 ease-out ${

              bodyAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

          >

            <p className="text-[#1e1e1a] text-lg leading-relaxed font-normal max-[767px]:text-base">

              You are building something that will stay with us for decades. You have many questions: about localization, profitability, regulations, environmental impact. This session doesn&apos;t solve everything — but it will help you move forward with confidence.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1e1e1a`, `#eeeee6`, `#8bc34a` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero section with two stacked sub-sections. The first section contains a centered headline block (h1 + subtitle + CTA button) followed by a two-image asymmetric layout. The second section...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt, className }: {

  src: string; srcSet: string; sizes: string; alt: string; className?: string;

}) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className={className}

    />

  );

}

export function HeroSection() {

  const headingAnim = useInView(0.1);

  const subtitleAnim = useInView(0.1);

  const img1Anim = useInView(0.1);

  const img2Anim = useInView(0.1);

  const bodyAnim = useInView(0.1);

  return (

    <div className="bg-[#eeeee6] font-['Inter',sans-serif]">

      {/* Section 1 */}

      <section className="relative pt-16 pb-0 overflow-hidden">

        <div className="max-w-[940px] mx-auto px-5">

          {/* Headline block */}

          <div className="flex flex-col items-center text-center mb-16 max-[767px]:mb-10">

            {/* H1 */}

            <div ref={headingAnim.ref}>

              <h1

                className={`font-['Playfair_Display',Georgia,serif] text-[#1e1e1a] text-[clamp(42px,5vw,72px)] leading-[1.1] font-normal mb-6 max-[767px]:text-[40px] transition-all duration-700 ease-out ${

                  headingAnim.visible

                    ? 'opacity-100 blur-0'

                    : 'opacity-0 blur-[12px]'

                }`}

              >

                Wind Farm Advisory Session

              </h1>

            </div>

            {/* Subtitle + CTA */}

            <div

              ref={subtitleAnim.ref}

              className={`flex flex-col items-center gap-5 transition-all duration-700 ease-out ${

                subtitleAnim.visible

                  ? 'opacity-100 blur-0'

                  : 'opacity-0 blur-[12px]'

              }`}

              style={{ transitionDelay: '150ms' }}

            >

              <div className="text-[#1e1e1a] text-base leading-relaxed">

                A focused space for better energy decisions.

              </div>

              {/* CTA Button */}

              <a

                href="#"

                className="relative inline-flex items-center gap-3 border border-[#1e1e1a]/20 rounded-full pl-1 pr-5 py-1 bg-white/60 hover:bg-white/90 transition-colors duration-300 no-underline group overflow-hidden"

              >

                {/* Left side: avatar + green dot */}

                <div className="relative flex-shrink-0">

                  <div className="w-9 h-9 rounded-full overflow-hidden">

                    <img

                      src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                      alt=""

                      loading="lazy"

                      className="w-full h-full object-cover"

                    />

                  </div>

                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#8bc34a] border-2 border-white" />

                </div>

                {/* Button text */}

                <span className="text-[#1e1e1a] text-sm font-medium">Book a call</span>

              </a>

            </div>

          </div>

          {/* Two images staggered */}

          <div className="relative flex items-start justify-center max-[767px]:flex-col max-[767px]:gap-4">

            {/* Image 1 — left, higher */}

            <div

              ref={img1Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl z-10 transition-all duration-700 ease-out ${

                img1Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '100ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 500w, [https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg](https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

            {/* Image 2 — right, lower */}

            <div

              ref={img2Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl -ml-8 mt-16 z-20 max-[767px]:ml-0 max-[767px]:mt-0 transition-all duration-700 ease-out ${

                img2Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '250ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

          </div>

        </div>

        {/* Decorative dots */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

          loading="lazy"

          alt=""

          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 max-w-none"

        />

      </section>

      {/* Section 2 — body text */}

      <section className="py-24 max-[767px]:py-16">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={bodyAnim.ref}

            className={`max-w-[600px] mx-auto text-center transition-all duration-700 ease-out ${

              bodyAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

          >

            <p className="text-[#1e1e1a] text-lg leading-relaxed font-normal max-[767px]:text-base">

              You are building something that will stay with us for decades. You have many questions: about localization, profitability, regulations, environmental impact. This session doesn&apos;t solve everything — but it will help you move forward with confidence.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1e1e1a`, `#eeeee6`, `#8bc34a` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero section with two stacked sub-sections. The first section contains a centered headline block (h1 + subtitle + CTA button) followed by a two-image asymmetric layout. The second section...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/HeroSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

HeroSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt, className }: {

  src: string; srcSet: string; sizes: string; alt: string; className?: string;

}) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 50}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className={className}

    />

  );

}

export function HeroSection() {

  const headingAnim = useInView(0.1);

  const subtitleAnim = useInView(0.1);

  const img1Anim = useInView(0.1);

  const img2Anim = useInView(0.1);

  const bodyAnim = useInView(0.1);

  return (

    <div className="bg-[#eeeee6] font-['Inter',sans-serif]">

      {/* Section 1 */}

      <section className="relative pt-16 pb-0 overflow-hidden">

        <div className="max-w-[940px] mx-auto px-5">

          {/* Headline block */}

          <div className="flex flex-col items-center text-center mb-16 max-[767px]:mb-10">

            {/* H1 */}

            <div ref={headingAnim.ref}>

              <h1

                className={`font-['Playfair_Display',Georgia,serif] text-[#1e1e1a] text-[clamp(42px,5vw,72px)] leading-[1.1] font-normal mb-6 max-[767px]:text-[40px] transition-all duration-700 ease-out ${

                  headingAnim.visible

                    ? 'opacity-100 blur-0'

                    : 'opacity-0 blur-[12px]'

                }`}

              >

                Wind Farm Advisory Session

              </h1>

            </div>

            {/* Subtitle + CTA */}

            <div

              ref={subtitleAnim.ref}

              className={`flex flex-col items-center gap-5 transition-all duration-700 ease-out ${

                subtitleAnim.visible

                  ? 'opacity-100 blur-0'

                  : 'opacity-0 blur-[12px]'

              }`}

              style={{ transitionDelay: '150ms' }}

            >

              <div className="text-[#1e1e1a] text-base leading-relaxed">

                A focused space for better energy decisions.

              </div>

              {/* CTA Button */}

              <a

                href="#"

                className="relative inline-flex items-center gap-3 border border-[#1e1e1a]/20 rounded-full pl-1 pr-5 py-1 bg-white/60 hover:bg-white/90 transition-colors duration-300 no-underline group overflow-hidden"

              >

                {/* Left side: avatar + green dot */}

                <div className="relative flex-shrink-0">

                  <div className="w-9 h-9 rounded-full overflow-hidden">

                    <img

                      src="[https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp](https://byqsupply-components.netlify.app/evermind/images/Author_1Author.webp)"

                      alt=""

                      loading="lazy"

                      className="w-full h-full object-cover"

                    />

                  </div>

                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#8bc34a] border-2 border-white" />

                </div>

                {/* Button text */}

                <span className="text-[#1e1e1a] text-sm font-medium">Book a call</span>

              </a>

            </div>

          </div>

          {/* Two images staggered */}

          <div className="relative flex items-start justify-center max-[767px]:flex-col max-[767px]:gap-4">

            {/* Image 1 — left, higher */}

            <div

              ref={img1Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl z-10 transition-all duration-700 ease-out ${

                img1Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '100ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 500w, [https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg](https://byqsupply-components.netlify.app/evermind/images/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.jpg) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

            {/* Image 2 — right, lower */}

            <div

              ref={img2Anim.ref}

              className={`relative w-[48%] max-[767px]:w-full overflow-hidden rounded-2xl -ml-8 mt-16 z-20 max-[767px]:ml-0 max-[767px]:mt-0 transition-all duration-700 ease-out ${

                img2Anim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

              }`}

              style={{ transitionDelay: '250ms' }}

            >

              <div className="overflow-hidden rounded-2xl" style={{ height: '420px' }}>

                <ParallaxImage

                  src="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp)"

                  srcSet="[https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 500w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 800w, [https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp](https://byqsupply-components.netlify.app/evermind/images/ServiceImage.webp) 1080w"

                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 727px, 940px"

                  alt=""

                  className="w-full h-full object-cover"

                />

              </div>

            </div>

          </div>

        </div>

        {/* Decorative dots */}

        <img

          src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

          loading="lazy"

          alt=""

          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 max-w-none"

        />

      </section>

      {/* Section 2 — body text */}

      <section className="py-24 max-[767px]:py-16">

        <div className="max-w-[940px] mx-auto px-5">

          <div

            ref={bodyAnim.ref}

            className={`max-w-[600px] mx-auto text-center transition-all duration-700 ease-out ${

              bodyAnim.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'

            }`}

          >

            <p className="text-[#1e1e1a] text-lg leading-relaxed font-normal max-[767px]:text-base">

              You are building something that will stay with us for decades. You have many questions: about localization, profitability, regulations, environmental impact. This session doesn&apos;t solve everything — but it will help you move forward with confidence.

            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default HeroSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1e1e1a`, `#eeeee6`, `#8bc34a` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<HeroSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero + CMS grid section. It has two main parts: 1. A centered hero header with an eyebrow label, H1 heading, body text, and a horizontal logo marquee strip below. 2. A 2-column card grid ...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/CmsGridSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

CmsGridSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

const logos = [

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo_1.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo_1.svg)', size: 'normal' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-1.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-1.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-2.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-2.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-3.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-3.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-4.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-4.svg)', size: 'small' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-5.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-5.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-6.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-6.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-7.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-7.svg)', size: 'large' },

];

const cards = [

  {

    tag: 'CLIMATE',

    eyebrow: 'STROBE',

    heading: 'Bringing purpose to the surface — how Strobe clarified their urban vision',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png](https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'For:Human',

    heading: 'Turning technical into tangible — how For:Human made clean energy desirable',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/ForHumanLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/ForHumanLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail8.jpg](https://byqsupply-components.netlify.app/evermind/images/Thumbnail8.jpg)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'FRANCO',

    heading: 'How Franco Build turned their mission into a message with Evermind',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/FrancoLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/FrancoLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/blog2.png](https://byqsupply-components.netlify.app/evermind/images/blog2.png)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'STROBE',

    heading: 'Bringing purpose to the surface — how Strobe clarified their urban vision',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png](https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png)',

    href: '#',

  },

];

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt }: { src: string; srcSet?: string; sizes?: string; alt: string }) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 40}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className="w-full h-full object-cover scale-110"

    />

  );

}

function ArrowIcon() {

  return (

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 16 16" fill="none">

      <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function CardItem({ card, index }: { card: typeof cards[0]; index: number }) {

  const { ref, visible } = useInView(0.1);

  return (

    <div

      ref={ref}

      className=`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}

      style={{ transitionDelay: `${index * 120}ms` }}

    >

      <a href={card.href} className="block rounded-2xl overflow-hidden bg-white group cursor-pointer">

        {/* Image */}

        <div className="relative overflow-hidden h-[280px] max-[767px]:h-[220px]">

          <ParallaxImage

            src={card.image}

            alt=""

          />

          {/* Tag overlay */}

          <div className="absolute top-3 left-3 z-10">

            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">

              <span className="text-white text-[10px] font-semibold tracking-widest uppercase">{card.tag}</span>

            </div>

          </div>

        </div>

        {/* Content */}

        <div className="p-6 flex flex-col gap-4">

          <div className="flex flex-col gap-2">

            {/* Eyebrow */}

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-[#c8e600] flex-shrink-0" />

              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a0e]">{card.eyebrow}</span>

            </div>

            {/* Heading */}

            <h5 className="text-[#1a1a0e] text-lg font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

              {card.heading}

            </h5>

          </div>

          {/* Bottom row */}

          <div className="flex items-center justify-between mt-2">

            <img src={card.logo} alt="" loading="lazy" className="h-5 object-contain" />

            <div className="flex items-center gap-2">

              <span className="text-[#1a1a0e] text-sm">Read case study</span>

              <div className="w-8 h-8 rounded-full bg-[#c8e600] flex items-center justify-center text-[#1a1a0e] group-hover:bg-[#b5d100] transition-colors duration-200">

                <ArrowIcon />

              </div>

            </div>

          </div>

        </div>

      </a>

    </div>

  );

}

function LogoStrip() {

  return (

    <div className="flex items-center gap-10 w-max animate-marquee">

      {[0, 1, 2].map((copy) => (

        <div key={copy} className="flex items-center gap-10 flex-shrink-0">

          {[logos.map](http://logos.map)((logo, i) => (

            <img

              key={i}

              src={logo.src}

              alt=""

              loading="lazy"

              className={`object-contain flex-shrink-0 ${

                logo.size === 'large' ? 'h-6' : logo.size === 'small' ? 'h-4' : 'h-5'

              }`}

            />

          ))}

        </div>

      ))}

    </div>

  );

}

export function CmsGridSection() {

  const { ref: heroRef, visible: heroVisible } = useInView(0.1);

  const { ref: marqueeRef, visible: marqueeVisible } = useInView(0.1);

  return (

    <section className="relative bg-[#edeae2] py-20 max-[767px]:py-12 overflow-hidden">

      <style>{`

        @keyframes marquee {

          from { transform: translateX(0); }

          to { transform: translateX(-33.333%); }

        }

        .animate-marquee {

          animation: marquee 30s linear infinite;

        }

        .animate-marquee:hover {

          animation-play-state: paused;

        }

      `}</style>

      <div className="max-w-[940px] mx-auto px-5">

        {/* Hero Header */}

        <div

          ref={heroRef}

          className=`text-center mb-12 transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

        >

          {/* Eyebrow */}

          <div className="flex items-center justify-center gap-2 mb-4">

            <div className="w-2 h-2 rounded-full bg-[#c8e600]" />

            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a0e]">Customer Stories</span>

          </div>

          {/* H1 */}

          <h1

            className="text-[#1a1a0e] text-5xl max-[767px]:text-4xl max-[479px]:text-3xl font-semibold leading-tight mb-5"

            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

          >

            Stories from the field

          </h1>

          {/* Body */}

          <div className="max-w-sm mx-auto text-[#1a1a0e] text-sm leading-relaxed opacity-80">

            How real brands used Evermind to build calm, confident, and credible websites — with results that speak louder than noise.

          </div>

        </div>

        {/* Logo Marquee */}

        <div

          ref={marqueeRef}

          className=`relative overflow-hidden mb-16 transition-all duration-700 ease-out ${marqueeVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

        >

          <LogoStrip />

          {/* Shadow overlays */}

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#edeae2] to-transparent pointer-events-none z-10" />

          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#edeae2] to-transparent pointer-events-none z-10" />

        </div>

        {/* Cards Grid */}

        <div className="grid grid-cols-2 gap-6 max-[767px]:grid-cols-1">

          {[cards.map](http://cards.map)((card, i) => (

            <CardItem key={i} card={card} index={i} />

          ))}

        </div>

      </div>

      {/* Decorative dots */}

      <img

        src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

        loading="lazy"

        alt=""

        className="absolute bottom-0 right-0 w-32 opacity-40 pointer-events-none"

      />

    </section>

  );

}

export default CmsGridSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a0e`, `#c8e600`, `#edeae2`, `#b5d100` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<CmsGridSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routes  
  
  
Use Cursor Agent (⌘I → Agent mode) to integrate this React section component — complete all steps without stopping.

This is a hero + CMS grid section. It has two main parts: 1. A centered hero header with an eyebrow label, H1 heading, body text, and a horizontal logo marquee strip below. 2. A 2-column card grid ...

### 1. Scan the project design first

Before touching any files, open 2–3 existing section or page components and note:

- **CSS approach**: does the project use Tailwind, CSS modules, SCSS/BEM, or plain CSS classes?

- **Container**: max-width and horizontal padding used on other sections

- **Colors**: backgrounds, text, and brand colors already in use

- **Typography**: font family and heading/body scale

### 2. Create an adapted component file

Scan the project to find where section/page components live (e.g. `src/components/`, `app/components/`, `components/sections/`), defaulting to `components/sections/CmsGridSection.tsx` if no pattern exists.

**The reference below uses a different design system than your project.** Use it for layout structure and content only. Write the actual component using the same CSS approach, class patterns, and design tokens as the existing sections — the finished component must be indistinguishable from the rest of the codebase.

**Reference implementation** (structure & content only — do not use its CSS approach or style values):

```tsx

CmsGridSection.tsx

"use client";

/**

 * @fonts Playfair Display

 * @fonts Inter

 */

import * as React from 'react';

const logos = [

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo_1.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo_1.svg)', size: 'normal' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-1.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-1.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-2.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-2.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-3.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-3.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-4.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-4.svg)', size: 'small' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-5.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-5.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-6.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-6.svg)', size: 'large' },

  { src: '[https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-7.svg](https://byqsupply-components.netlify.app/evermind/images/Compnaylogo-7.svg)', size: 'large' },

];

const cards = [

  {

    tag: 'CLIMATE',

    eyebrow: 'STROBE',

    heading: 'Bringing purpose to the surface — how Strobe clarified their urban vision',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png](https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'For:Human',

    heading: 'Turning technical into tangible — how For:Human made clean energy desirable',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/ForHumanLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/ForHumanLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail8.jpg](https://byqsupply-components.netlify.app/evermind/images/Thumbnail8.jpg)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'FRANCO',

    heading: 'How Franco Build turned their mission into a message with Evermind',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/FrancoLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/FrancoLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/blog2.png](https://byqsupply-components.netlify.app/evermind/images/blog2.png)',

    href: '#',

  },

  {

    tag: 'CLIMATE',

    eyebrow: 'STROBE',

    heading: 'Bringing purpose to the surface — how Strobe clarified their urban vision',

    logo: '[https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg](https://byqsupply-components.netlify.app/evermind/images/StrobeLogoDark.svg)',

    image: '[https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png](https://byqsupply-components.netlify.app/evermind/images/Thumbnail7.png)',

    href: '#',

  },

];

function useInView(threshold = 0.1) {

  const ref = React.useRef<HTMLDivElement>(null);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {

    const el = ref.current;

    if (!el) return;

    const obs = new IntersectionObserver(

      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },

      { threshold }

    );

    obs.observe(el);

    return () => obs.disconnect();

  }, [threshold]);

  return { ref, visible };

}

function ParallaxImage({ src, srcSet, sizes, alt }: { src: string; srcSet?: string; sizes?: string; alt: string }) {

  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {

    const onScroll = () => {

      if (!imgRef.current) return;

      const parent = imgRef.current.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const progress = -[rect.top](http://rect.top) / window.innerHeight;

      [imgRef.current.style](http://imgRef.current.style).transform = `translateY(${progress * 40}px)`;

    };

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener('scroll', onScroll);

  }, []);

  return (

    <img

      ref={imgRef}

      src={src}

      srcSet={srcSet}

      sizes={sizes}

      alt={alt}

      loading="lazy"

      className="w-full h-full object-cover scale-110"

    />

  );

}

function ArrowIcon() {

  return (

    <svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="16" height="16" viewBox="0 0 16 16" fill="none">

      <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />

    </svg>

  );

}

function CardItem({ card, index }: { card: typeof cards[0]; index: number }) {

  const { ref, visible } = useInView(0.1);

  return (

    <div

      ref={ref}

      className=`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}

      style={{ transitionDelay: `${index * 120}ms` }}

    >

      <a href={card.href} className="block rounded-2xl overflow-hidden bg-white group cursor-pointer">

        {/* Image */}

        <div className="relative overflow-hidden h-[280px] max-[767px]:h-[220px]">

          <ParallaxImage

            src={card.image}

            alt=""

          />

          {/* Tag overlay */}

          <div className="absolute top-3 left-3 z-10">

            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">

              <span className="text-white text-[10px] font-semibold tracking-widest uppercase">{card.tag}</span>

            </div>

          </div>

        </div>

        {/* Content */}

        <div className="p-6 flex flex-col gap-4">

          <div className="flex flex-col gap-2">

            {/* Eyebrow */}

            <div className="flex items-center gap-2">

              <div className="w-2 h-2 rounded-full bg-[#c8e600] flex-shrink-0" />

              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a0e]">{card.eyebrow}</span>

            </div>

            {/* Heading */}

            <h5 className="text-[#1a1a0e] text-lg font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>

              {card.heading}

            </h5>

          </div>

          {/* Bottom row */}

          <div className="flex items-center justify-between mt-2">

            <img src={card.logo} alt="" loading="lazy" className="h-5 object-contain" />

            <div className="flex items-center gap-2">

              <span className="text-[#1a1a0e] text-sm">Read case study</span>

              <div className="w-8 h-8 rounded-full bg-[#c8e600] flex items-center justify-center text-[#1a1a0e] group-hover:bg-[#b5d100] transition-colors duration-200">

                <ArrowIcon />

              </div>

            </div>

          </div>

        </div>

      </a>

    </div>

  );

}

function LogoStrip() {

  return (

    <div className="flex items-center gap-10 w-max animate-marquee">

      {[0, 1, 2].map((copy) => (

        <div key={copy} className="flex items-center gap-10 flex-shrink-0">

          {[logos.map](http://logos.map)((logo, i) => (

            <img

              key={i}

              src={logo.src}

              alt=""

              loading="lazy"

              className={`object-contain flex-shrink-0 ${

                logo.size === 'large' ? 'h-6' : logo.size === 'small' ? 'h-4' : 'h-5'

              }`}

            />

          ))}

        </div>

      ))}

    </div>

  );

}

export function CmsGridSection() {

  const { ref: heroRef, visible: heroVisible } = useInView(0.1);

  const { ref: marqueeRef, visible: marqueeVisible } = useInView(0.1);

  return (

    <section className="relative bg-[#edeae2] py-20 max-[767px]:py-12 overflow-hidden">

      <style>{`

        @keyframes marquee {

          from { transform: translateX(0); }

          to { transform: translateX(-33.333%); }

        }

        .animate-marquee {

          animation: marquee 30s linear infinite;

        }

        .animate-marquee:hover {

          animation-play-state: paused;

        }

      `}</style>

      <div className="max-w-[940px] mx-auto px-5">

        {/* Hero Header */}

        <div

          ref={heroRef}

          className=`text-center mb-12 transition-all duration-700 ease-out ${heroVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

        >

          {/* Eyebrow */}

          <div className="flex items-center justify-center gap-2 mb-4">

            <div className="w-2 h-2 rounded-full bg-[#c8e600]" />

            <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a1a0e]">Customer Stories</span>

          </div>

          {/* H1 */}

          <h1

            className="text-[#1a1a0e] text-5xl max-[767px]:text-4xl max-[479px]:text-3xl font-semibold leading-tight mb-5"

            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}

          >

            Stories from the field

          </h1>

          {/* Body */}

          <div className="max-w-sm mx-auto text-[#1a1a0e] text-sm leading-relaxed opacity-80">

            How real brands used Evermind to build calm, confident, and credible websites — with results that speak louder than noise.

          </div>

        </div>

        {/* Logo Marquee */}

        <div

          ref={marqueeRef}

          className=`relative overflow-hidden mb-16 transition-all duration-700 ease-out ${marqueeVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-[12px]'}`}

        >

          <LogoStrip />

          {/* Shadow overlays */}

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#edeae2] to-transparent pointer-events-none z-10" />

          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#edeae2] to-transparent pointer-events-none z-10" />

        </div>

        {/* Cards Grid */}

        <div className="grid grid-cols-2 gap-6 max-[767px]:grid-cols-1">

          {[cards.map](http://cards.map)((card, i) => (

            <CardItem key={i} card={card} index={i} />

          ))}

        </div>

      </div>

      {/* Decorative dots */}

      <img

        src="[https://byqsupply-components.netlify.app/evermind/images/Dots.svg](https://byqsupply-components.netlify.app/evermind/images/Dots.svg)"

        loading="lazy"

        alt=""

        className="absolute bottom-0 right-0 w-32 opacity-40 pointer-events-none"

      />

    </section>

  );

}

export default CmsGridSection;

```

## Setup

### Google Fonts

Add to your `app/layout.tsx` (Next.js) or `<head>`:

```html

<link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />

<link href="[https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap](https://fonts.googleapis.com/css2?family=Playfair+Display&family=Inter&display=swap)" rel="stylesheet" />

```

Or with `next/font/google`:

```tsx

import { Playfair_Display, Inter } from 'next/font/google';

```

### npm packages

No additional packages required — uses only React and Tailwind CSS.

### Client component

This component includes `"use client"` — ensure your framework supports React Client Components (Next.js App Router, Remix, etc.).

### Scroll animations

Entrance animations use `IntersectionObserver`. No external library needed — it runs in all modern browsers.

---

**Required adaptations:**

Replace these hardcoded values with your project's tokens — keep all layout, spacing, animations, and interactions unchanged:

- **Colors**: `#1a1a0e`, `#c8e600`, `#edeae2`, `#b5d100` → your project's color tokens

- **Font**: `Playfair Display`, `Inter` → your project's font stack

- Match the container max-width and padding to other sections

- Use the same CSS approach as the existing components (not the reference's)

**Self-check before saving:** Could someone viewing the page tell this section came from an external library? If yes, revise it until it matches the rest of the page.

### 3. Wire it up

Find the most appropriate existing page and import + render `<CmsGridSection />` so it's immediately visible.

### 4. Verify

Confirm the dev server starts with no TypeScript or Tailwind errors.

Notes:

- All images use absolute CDN URLs — no local assets needed

- Replace `href="#"` placeholders with real routescase