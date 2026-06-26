"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible] as const;
}

const results = [
  { number: "8x", label: "Faster launch times" },
  { number: "3x", label: "More qualified leads" },
  { number: "99%", label: "Performance score" },
];

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
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

export function CaseStudySection() {
  const [headerRef, headerVisible] = useInView<HTMLDivElement>(0.15);
  const [bodyRef, bodyVisible] = useInView<HTMLDivElement>(0.15);

  return (
    <section className="w-full bg-surface py-24 max-[767px]:py-14">
      <div className="mx-auto max-w-[940px] px-5">
        <div
          ref={headerRef}
          className={`mb-12 flex flex-col gap-6 transition-all duration-700 ease-out max-[767px]:mb-8 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-widest text-muted uppercase">
              Case Study
            </span>
          </div>
          <h3 className="m-0 max-w-[720px] font-display text-[2.75rem] leading-[1.1] font-normal text-accent max-[767px]:text-4xl">
            How Franco Build turned their mission into a message
          </h3>
        </div>

        <div className="grid grid-cols-[3fr_2fr] items-start gap-12 max-[991px]:grid-cols-1 max-[991px]:gap-8">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={`${CDN}/TestimonialImage.webp`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
              style={{ minHeight: "420px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <img
              src={`${CDN}/Compnaylogo.svg`}
              alt=""
              loading="lazy"
              className="absolute top-5 left-5 h-6 w-auto"
            />
          </div>

          <div
            ref={bodyRef}
            className={`flex flex-col gap-8 transition-all delay-150 duration-700 ease-out ${
              bodyVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-base leading-relaxed text-accent/70">
              Franco Build came to us with blueprints and a big mission, but no
              clear way to tell their story online. Together we built a modular
              foundation that scaled with their ambition — turning technical
              detail into a message people could feel.
            </p>

            <div className="grid grid-cols-3 gap-0 max-[479px]:grid-cols-1">
              {results.map((result) => (
                <div
                  key={result.label}
                  className="border-l-2 border-brand/60 py-2 pl-4 max-[479px]:border-l-2"
                >
                  <div className="mb-1 font-display text-4xl leading-none font-normal text-accent">
                    {result.number}
                  </div>
                  <div className="text-xs leading-snug text-accent/60">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="m-0 border-l-2 border-accent/15 pl-5 font-display text-xl leading-snug font-normal text-accent">
              &ldquo;We approached Hopeward looking for something flexible yet
              timeless — and that&apos;s exactly what we got.&rdquo;
            </blockquote>

            <a
              href="#"
              className="group relative inline-flex items-center gap-2 self-start overflow-hidden rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors duration-300"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-surface">
                Read the full story
              </span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-surface">
                <ArrowIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
