"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

type NavLinkItem = {
  title: string;
  sub?: string;
  desc: string;
  href?: string;
};

const homepages: NavLinkItem[] = [
  {
    title: "Home A",
    sub: "— Structure",
    desc: "Calm structure for fresh ideas and first impressions.",
  },
  {
    title: "Home B",
    sub: "— Depth",
    desc: "Clarity through details, made for showcasing work and depth.",
  },
  {
    title: "Home C",
    sub: "— Scale",
    desc: "Crafted to scale with purpose-driven infrastructure projects.",
  },
];

const aboutPages: NavLinkItem[] = [
  {
    title: "About A",
    sub: "— People",
    desc: "Faces and roles behind the projects and partnerships.",
  },
  {
    title: "About B",
    sub: "— Timeline",
    desc: "A quiet look at the milestones that shaped Evermind.",
  },
  {
    title: "About C",
    sub: "— Values",
    desc: "How we think, work, and approach sustainable design.",
  },
];

const contactPages: NavLinkItem[] = [
  {
    title: "Contact A",
    sub: "— Grounded",
    desc: "For honest questions and steady collaborations.",
  },
  {
    title: "Contact B",
    sub: "— Open",
    desc: "Just say hi. We're always curious to hear what you're building.",
  },
  {
    title: "Contact C",
    sub: "— In Touch",
    desc: "Built for thoughtful conversations and project clarity.",
  },
];

const utilityPages: NavLinkItem[] = [
  {
    title: "Service",
    desc: "Clearly outline your services in a modular way.",
  },
  {
    title: "Customer Stories",
    desc: "A highly advanced CMS setup for showcasing case studies.",
  },
  {
    title: "Pricing",
    desc: "Help visitors quickly understand your offer.",
  },
  {
    title: "Blog",
    desc: "Position yourself as a thought leader and boost SEO.",
  },
];

const caseStudies = [
  {
    img: `${CDN}/TestimonialImage.webp`,
    href: "https://evermind-template.webflow.io/customer-stories/from-turbine-fields-to-the-browser----how-fold-gave-wind-power-a-digital-edge",
  },
  {
    img: `${CDN}/TestimonialImage-2.webp`,
    href: "https://evermind-template.webflow.io/customer-stories/turning-technical-into-tangible----how-for-human-made-clean-energy-desirable",
  },
];

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987L8.0026 12.6654"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DropdownColumn({
  label,
  items,
}: {
  label: string;
  items: NavLinkItem[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="mb-1 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-medium tracking-wide text-muted uppercase">
          {label}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href ?? "#"}
            className="group flex flex-col gap-0.5 transition-opacity hover:opacity-80"
          >
            <div className="text-sm font-medium text-accent">
              {item.title}
              {item.sub ? (
                <span className="text-accent/64"> {item.sub}</span>
              ) : null}
            </div>
            <div className="text-xs text-accent/48">{item.desc}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCard({
  image,
  href,
  minHeight = 160,
}: {
  image: string;
  href: string;
  minHeight?: number;
}) {
  return (
    <a
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-accent"
      style={{ minHeight }}
    >
      <div className="relative h-full w-full" style={{ minHeight }}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ minHeight }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <img
        loading="lazy"
        src={`${CDN}/Compnaylogo.svg`}
        alt=""
        className="absolute top-3 left-3 z-10 h-5 w-auto"
      />
      <div className="absolute right-0 bottom-0 left-0 z-10 p-3">
        <div className="flex items-center gap-1.5 text-xs font-medium text-white">
          <span>Read case study</span>
          <ArrowIcon size={14} />
        </div>
      </div>
    </a>
  );
}

function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onClose: () => void,
) {
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}

export function SiteHeader() {
  const [multiLayoutOpen, setMultiLayoutOpen] = React.useState(false);
  const [pagesOpen, setPagesOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const multiLayoutRef = React.useRef<HTMLDivElement>(null);
  const pagesRef = React.useRef<HTMLDivElement>(null);

  useClickOutside(multiLayoutRef, () => setMultiLayoutOpen(false));
  useClickOutside(pagesRef, () => setPagesOpen(false));

  const navLinkClass =
    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-black/5";

  return (
    <header className="sticky top-0 z-50 w-full bg-surface">
      <div className="flex w-full items-center justify-center px-4 pt-3 pb-3">
        <div className="relative flex w-full max-w-[1380px] items-center justify-between rounded-full bg-surface-muted px-4 py-2">
          <a href="/" className="flex shrink-0 items-center gap-2">
            <img
              loading="lazy"
              src={`${CDN}/Logo.svg`}
              alt="Hopeward"
              className="h-7 w-auto"
            />
          </a>

          <nav className="flex items-center gap-1 max-[991px]:hidden">
            <a href="#" className={navLinkClass}>
              Overview
            </a>

            <div
              ref={multiLayoutRef}
              className="relative"
              onMouseEnter={() => setMultiLayoutOpen(true)}
              onMouseLeave={() => setMultiLayoutOpen(false)}
            >
              <button
                type="button"
                className={navLinkClass}
                onClick={() => setMultiLayoutOpen((open) => !open)}
              >
                Multi-Layout
              </button>
              <div
                className={`absolute top-full left-1/2 z-[100] mt-2 -translate-x-1/2 transition-all duration-300 ${
                  multiLayoutOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="w-[680px] rounded-2xl border border-black/5 bg-surface p-6 shadow-xl">
                  <div className="grid grid-cols-3 gap-6">
                    <DropdownColumn label="Homepages" items={homepages} />
                    <DropdownColumn label="About" items={aboutPages} />
                    <DropdownColumn label="Contact" items={contactPages} />
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={pagesRef}
              className="relative"
              onMouseEnter={() => setPagesOpen(true)}
              onMouseLeave={() => setPagesOpen(false)}
            >
              <button
                type="button"
                className={navLinkClass}
                onClick={() => setPagesOpen((open) => !open)}
              >
                Pages
              </button>
              <div
                className={`absolute top-full right-0 z-[100] mt-2 transition-all duration-300 ${
                  pagesOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-2 opacity-0"
                }`}
              >
                <div className="w-[780px] rounded-2xl border border-black/5 bg-surface p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="mb-1 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <span className="text-xs font-medium tracking-wide text-muted uppercase">
                          Homepages
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        {utilityPages.map((item) => (
                          <a
                            key={item.title}
                            href="#"
                            className="flex flex-col gap-0.5 transition-opacity hover:opacity-80"
                          >
                            <div className="text-sm font-medium text-accent">
                              {item.title}
                            </div>
                            <div className="text-xs text-accent/48">
                              {item.desc}
                            </div>
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="group relative mt-2 inline-flex w-fit items-center gap-2 overflow-hidden rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors duration-300 hover:text-white"
                      >
                        <span className="relative z-10">Explore more</span>
                        <span className="relative z-10">
                          <ArrowIcon />
                        </span>
                        <span className="absolute inset-0 translate-x-[-101%] rounded-full bg-accent transition-transform duration-300 group-hover:translate-x-0" />
                      </a>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-accent" />
                          <span className="text-xs font-medium tracking-wide text-muted uppercase">
                            customer stories
                          </span>
                        </div>
                        <a
                          href="#"
                          className="text-xs font-medium tracking-wide text-accent uppercase transition-opacity hover:opacity-60"
                        >
                          Show all
                        </a>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {caseStudies.map((card) => (
                          <CaseStudyCard
                            key={card.href}
                            image={card.img}
                            href={card.href}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover max-[991px]:hidden"
            >
              Get Started
            </a>

            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-accent text-white max-[991px]:flex"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <img
                loading="lazy"
                src={
                  mobileOpen
                    ? `${CDN}/Close.svg`
                    : `${CDN}/IconsHamburger1.svg`
                }
                alt=""
                className="h-5 w-5 invert"
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`hidden overflow-hidden transition-all duration-400 max-[991px]:block ${
          mobileOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl bg-surface-muted">
          <div className="flex flex-col p-4">
            <div className="border-t border-black/10 pt-4 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a href="/" className="text-lg font-medium text-accent">
                    Home A
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    Home B
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    Home C
                  </a>
                </div>
                <div className="text-sm text-accent/48">
                  Crafted to scale with purpose-driven infrastructure projects.
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <a href="#" className="flex flex-col gap-1">
                <div className="text-lg font-medium text-accent">Service</div>
                <div className="text-sm text-accent/48">
                  Clearly outline your services in a modular way.
                </div>
              </a>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a href="#" className="text-lg font-medium text-accent">
                    About A
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    About B
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    About C
                  </a>
                </div>
                <div className="text-sm text-accent/48">
                  How we think, work, and approach sustainable design.
                </div>
              </div>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <a href="#" className="flex flex-col gap-1">
                <div className="text-lg font-medium text-accent">Pricing</div>
                <div className="text-sm text-accent/48">
                  Help visitors quickly understand your offer.
                </div>
              </a>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <a href="#" className="flex flex-col gap-1">
                <div className="text-lg font-medium text-accent">
                  Customer Stories
                </div>
                <div className="text-sm text-accent/48">
                  A highly advanced CMS setup for showcasing case studies.
                </div>
              </a>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <a href="#" className="flex flex-col gap-1">
                <div className="text-lg font-medium text-accent">Blog</div>
                <div className="text-sm text-accent/48">
                  Position yourself as a thought leader and boost SEO.
                </div>
              </a>
            </div>

            <div className="border-t border-black/10 pt-4 pb-4">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2">
                  <a href="#" className="text-lg font-medium text-accent">
                    Contact A
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    Contact B
                  </a>
                  <span className="text-accent/32">·</span>
                  <a href="#" className="text-lg font-medium text-accent">
                    Contact C
                  </a>
                </div>
                <div className="text-sm text-accent/48">
                  Just say hi. We&apos;re always curious to hear what
                  you&apos;re building.
                </div>
              </div>
            </div>

            <div className="border-t border-black/10" />
          </div>

          <div className="p-4 pt-0">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-medium tracking-wide text-muted uppercase">
                Success stories
              </span>
            </div>
            <a
              href="#"
              className="group relative flex flex-col overflow-hidden rounded-xl bg-accent"
              style={{ minHeight: 220 }}
            >
              <div className="relative w-full" style={{ minHeight: 220 }}>
                <img
                  src={`${CDN}/TestimonialImage-2.webp`}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ minHeight: 220 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <img
                loading="lazy"
                src={`${CDN}/Compnaylogo.svg`}
                alt=""
                className="absolute top-3 left-3 z-10 h-5 w-auto"
              />
              <div className="absolute right-0 bottom-0 left-0 z-10 p-4">
                <div className="mb-2 text-sm font-medium text-white">
                  How Franco Build turned their mission into a message with
                  Evermind
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-white">
                  <span>Read case study</span>
                  <ArrowIcon size={14} />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
