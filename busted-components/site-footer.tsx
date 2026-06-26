"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind";

type FooterLink = { label: string; href: string };

const multilayoutLinks: FooterLink[] = [
  { label: "Home A", href: "#" },
  { label: "Home B", href: "#" },
  { label: "Contact A", href: "#" },
  { label: "Contact B", href: "#" },
  { label: "Contact C", href: "#" },
  { label: "About A", href: "#" },
  { label: "About B", href: "#" },
  { label: "About C", href: "#" },
  { label: "Home C", href: "#" },
];

const pagesLinks: FooterLink[] = [
  { label: "Service", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Blog Article", href: "#" },
  { label: "Customer Stories", href: "#" },
  { label: "Customer Story", href: "#" },
  { label: "Pricing", href: "#" },
];

const moreLinks: FooterLink[] = [
  { label: "Legal", href: "#" },
  { label: "404", href: "#" },
  { label: "Password", href: "#" },
  { label: "More Templates", href: "#" },
];

const legalLinks: FooterLink[] = [
  { label: "Legal", href: "#" },
  { label: "Style Guide", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "Changelog", href: "#" },
];

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-4 max-[767px]:hidden">
      <div className="mb-2 text-xs font-semibold tracking-[0.1em] text-accent/50 uppercase">
        {title}
      </div>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-accent transition-all duration-200 hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function AccordionColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col border-t border-accent/12">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="text-xs font-semibold tracking-[0.1em] text-accent/50 uppercase">
          {title}
        </span>
        <span className="relative flex h-4 w-4 items-center justify-center">
          <span
            className={`absolute h-3 w-px bg-accent transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : "opacity-100"
            }`}
          />
          <span className="absolute h-px w-3 bg-accent" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 pb-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-accent transition-all duration-200 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const socials: {
  label: string;
  href: string;
  icon: React.ReactNode;
}[] = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9617 0.36377C14.1251 0.388457 16.0796 0.920165 17.825 1.95889C19.5497 2.97688 20.9843 4.42031 21.9918 6.15114C23.0242 7.90712 23.5527 9.87341 23.5773 12.05C23.516 15.0281 22.5767 17.5718 20.7594 19.6808C18.942 21.7899 16.6144 23.0948 14.2049 23.595V15.2452H16.4829L16.9981 11.964H13.5487V9.81485C13.5295 9.36932 13.6704 8.93164 13.9459 8.58095C14.2218 8.2293 14.7075 8.04448 15.4032 8.02648H17.4862V5.15218C17.4563 5.14256 17.1727 5.10454 16.6354 5.0381C16.0261 4.96681 15.4133 4.92873 14.7998 4.92403C13.4113 4.93043 12.3131 5.32211 11.5054 6.09906C10.6976 6.87579 10.285 7.99956 10.2675 9.47035V11.964H7.64246V15.2452H10.2675V23.595C7.30895 23.0948 4.98137 21.7899 3.16402 19.6808C1.34668 17.5718 0.407399 15.0281 0.346077 12.05C0.370611 9.87331 0.899105 7.90702 1.93156 6.15114C2.93903 4.42031 4.3737 2.97689 6.09836 1.95889C7.84378 0.920365 9.79822 0.388657 11.9617 0.36377Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <>
        <path
          d="M12 14.4609C13.3591 14.4609 14.4609 13.3591 14.4609 12C14.4609 10.6409 13.3591 9.53906 12 9.53906C10.6409 9.53906 9.53906 10.6409 9.53906 12C9.53906 13.3591 10.6409 14.4609 12 14.4609Z"
          fill="currentColor"
        />
        <path
          d="M12 0C5.37259 0 0 5.37259 0 12C0 18.6274 5.37259 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0ZM19.414 15.0499C19.3564 16.1908 19.0358 17.3158 18.2044 18.1384C17.3649 18.9688 16.2346 19.2782 15.0827 19.3352H8.91734C7.76534 19.2782 6.63514 18.969 5.79566 18.1384C4.96421 17.3158 4.64366 16.1908 4.58606 15.0499V8.95008C4.64366 7.80922 4.96426 6.68419 5.79566 5.86157C6.63514 5.03117 7.76549 4.72176 8.91734 4.66478H15.0827C16.2347 4.72176 17.3649 5.03102 18.2043 5.86157C19.0358 6.68419 19.3563 7.80922 19.4139 8.95008L19.414 15.0499Z"
          fill="currentColor"
        />
        <path
          d="M14.9344 6.19397C13.4678 6.15375 10.5325 6.15375 9.066 6.19397C8.30283 6.21492 7.43766 6.40491 6.89391 6.98569C6.32888 7.58939 6.11536 8.31877 6.0937 9.13472C6.05564 10.5668 6.0937 14.8653 6.0937 14.8653C6.1185 15.6811 6.32888 16.4106 6.89391 17.0143C7.43766 17.5953 8.30283 17.7851 9.066 17.806C10.5325 17.8462 13.4678 17.8462 14.9344 17.806C15.6975 17.7851 16.5627 17.5951 17.1065 17.0143C17.6715 16.4106 17.885 15.6812 17.9067 14.8653V9.13472C17.885 8.31877 17.6715 7.58939 17.1065 6.98569C16.5625 6.40472 15.6974 6.21492 14.9344 6.19397ZM12 15.8145C11.2456 15.8145 10.5081 15.5907 9.8808 15.1716C9.25352 14.7525 8.76461 14.1567 8.4759 13.4597C8.1872 12.7627 8.11166 11.9958 8.25884 11.2558C8.40602 10.5159 8.76931 9.83624 9.30277 9.30277C9.83624 8.76931 10.5159 8.40602 11.2558 8.25884C11.9958 8.11166 12.7627 8.1872 13.4597 8.47591C14.1567 8.76461 14.7525 9.25352 15.1716 9.8808C15.5907 10.5081 15.8145 11.2456 15.8145 12C15.8145 13.0117 15.4126 13.9819 14.6972 14.6972C13.9819 15.4126 13.0117 15.8145 12 15.8145ZM15.8307 8.97291C15.6798 8.97287 15.5323 8.9281 15.4069 8.84425C15.2815 8.7604 15.1837 8.64124 15.126 8.50183C15.0683 8.36243 15.0532 8.20904 15.0827 8.06107C15.1121 7.91309 15.1848 7.77718 15.2915 7.6705C15.3982 7.56383 15.5341 7.49119 15.6821 7.46177C15.8301 7.43235 15.9835 7.44747 16.1228 7.50521C16.2622 7.56296 16.3814 7.66074 16.4652 7.7862C16.549 7.91165 16.5938 8.05914 16.5938 8.21002C16.5938 8.31022 16.574 8.40943 16.5357 8.502C16.4973 8.59457 16.4411 8.67868 16.3702 8.74953C16.2994 8.82037 16.2153 8.87656 16.1227 8.91489C16.0301 8.95322 15.9309 8.97293 15.8307 8.97291Z"
          fill="currentColor"
        />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <path
        d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM8.51294 18.1406H5.59039V9.34808H8.51294V18.1406ZM7.05176 8.14746H7.03271C6.052 8.14746 5.41772 7.47235 5.41772 6.6286C5.41772 5.76581 6.07141 5.10938 7.07117 5.10938C8.07092 5.10938 8.68616 5.76581 8.7052 6.6286C8.7052 7.47235 8.07092 8.14746 7.05176 8.14746ZM19.051 18.1406H16.1288V13.4368C16.1288 12.2547 15.7057 11.4485 14.6483 11.4485C13.8409 11.4485 13.3601 11.9923 13.1488 12.5173C13.0715 12.7051 13.0527 12.9677 13.0527 13.2305V18.1406H10.1303C10.1303 18.1406 10.1686 10.173 10.1303 9.34808H13.0527V10.593C13.441 9.9939 14.1359 9.14172 15.6865 9.14172C17.6093 9.14172 19.051 10.3984 19.051 13.099V18.1406Z"
        fill="currentColor"
      />
    ),
  },
];

export function SiteFooter() {
  const ctaRef = React.useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCtaVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="w-full">
      <div className="relative flex min-h-[480px] w-full flex-col overflow-hidden max-[767px]:min-h-[420px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={`${CDN}/videos/outputcompress-video-onlinecom-1-transcode.mp4`}
            type="video/mp4"
          />
          <source
            src={`${CDN}/videos/outputcompress-video-onlinecom-1-transcode.webm`}
            type="video/webm"
          />
        </video>

        <div className="absolute inset-0 bg-black/30" />

        <div
          ref={ctaRef}
          className="relative z-10 flex max-w-[700px] flex-col justify-center px-8 pt-16 pb-20 max-[767px]:px-5 max-[767px]:pt-12 max-[767px]:pb-16"
        >
          <div
            className={`mb-6 flex items-center gap-2 transition-all duration-700 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
              A modular Webflow template
            </span>
          </div>

          <div
            className={`mb-8 transition-all delay-100 duration-700 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="m-0 font-display text-[clamp(40px,5vw,68px)] leading-[1.05] font-normal text-white">
              Ready to build
              <br />
              with Hopeward?
            </h2>
          </div>

          <div
            className={`flex flex-wrap gap-3 transition-all delay-200 duration-700 ease-out ${
              ctaVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href="#"
              className="relative inline-flex items-center overflow-hidden rounded-full bg-brand px-6 py-3 text-sm font-semibold text-accent no-underline transition-colors duration-300 hover:bg-brand-hover"
            >
              Buy Template
            </a>
            <a
              href="#"
              className="relative inline-flex items-center overflow-hidden rounded-full border border-white px-6 py-3 text-sm font-semibold text-white no-underline transition-colors duration-300 hover:bg-white/10"
            >
              More Templates
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 -mt-5 rounded-t-[20px] bg-surface">
        <div className="mx-auto max-w-[1200px] px-8 pt-14 pb-0 max-[767px]:px-5">
          <div className="grid grid-cols-[1fr_2fr] gap-12 border-b border-accent/12 pb-12 max-[991px]:grid-cols-1 max-[991px]:gap-8">
            <div className="flex flex-col gap-6">
              <a href="/" className="inline-block">
                <img
                  src={`${CDN}/images/Logo.svg`}
                  alt="Hopeward"
                  className="h-8 w-auto"
                  loading="lazy"
                />
              </a>
              <p className="max-w-[340px] text-sm leading-relaxed text-accent/64">
                A modular Webflow template shaped like sustainable
                infrastructures — designed for brands that value clarity,
                adaptability, and modern aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 max-[767px]:grid-cols-1 max-[767px]:gap-0">
              <LinkColumn title="Multilayout" links={multilayoutLinks} />
              <LinkColumn title="Pages" links={pagesLinks} />
              <LinkColumn title="More" links={moreLinks} />

              <div className="col-span-1 hidden flex-col max-[767px]:flex">
                <AccordionColumn title="Multilayout" links={multilayoutLinks} />
                <AccordionColumn title="Pages" links={pagesLinks} />
                <AccordionColumn title="More" links={moreLinks} />
              </div>
            </div>
          </div>

          <div className="border-b border-accent/12 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4 max-[767px]:flex-col max-[767px]:items-start">
              <div className="text-xs text-accent/64">
                © 2025 Built by{" "}
                <a
                  href="#"
                  className="text-accent/64 underline transition-colors duration-200 hover:text-accent"
                >
                  Hopeward
                </a>{" "}
                exclusively for the web
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {legalLinks.map((link, i) => (
                  <React.Fragment key={link.label}>
                    {i > 0 ? (
                      <span className="text-xs text-accent/64">·</span>
                    ) : null}
                    <a
                      href={link.href}
                      className="text-xs text-accent/64 transition-colors duration-200 hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-8 py-6 max-[767px]:flex-col">
            <div className="max-w-[680px]">
              <p className="text-xs leading-relaxed text-accent/64">
                Hopeward is a fictional eco-consulting brand concept, crafted as
                part of a modular Webflow template. Any references to companies,
                projects, or services are purely illustrative. This template is
                designed for modern brands, agencies, and businesses, offering a
                modular framework with a unique eco-inspired aesthetic. All
                rights reserved.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-6 w-6 text-accent transition-opacity duration-200 hover:opacity-60"
                >
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
