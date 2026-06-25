"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function useRevealOnView<T extends HTMLElement>(threshold = 0.15) {
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

export function ValueFeaturesSection() {
  const [headingRef, headingVisible] = useRevealOnView<HTMLDivElement>();
  const [textRef, textVisible] = useRevealOnView<HTMLDivElement>();

  const leftImgRef = React.useRef<HTMLImageElement>(null);
  const rightImgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      [leftImgRef, rightImgRef].forEach((ref) => {
        const img = ref.current;
        const parent = img?.parentElement;
        if (!img || !parent) return;
        const rect = parent.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        img.style.transform = `translateY(${progress * 50}px)`;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-surface py-20 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <div
          ref={headingRef}
          className={`mb-20 transition-all duration-700 ease-out max-[767px]:mb-12 ${
            headingVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6 flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">
              Webflow template
            </span>
          </div>
          <div className="max-w-[600px]">
            <p className="text-[1.75rem] leading-[1.3] font-normal text-accent max-[767px]:text-2xl max-[479px]:text-xl">
              Evermind&trade; isn&apos;t just pages, it&apos;s a calm system for
              your brand story. With modular layouts and smooth, nature-inspired
              interactions, every detail brings intelligence, lightness, and
              flow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_1.6fr] items-start gap-8 max-[767px]:grid-cols-1 max-[767px]:gap-6">
          <div className="overflow-hidden rounded-xl">
            <img
              ref={leftImgRef}
              src={`${CDN}/AboutImage11.webp`}
              loading="lazy"
              alt=""
              className="block h-full w-full object-cover will-change-transform"
              style={{ minHeight: "480px", maxHeight: "600px" }}
            />
          </div>

          <div
            ref={textRef}
            className={`flex flex-col gap-8 transition-all delay-200 duration-700 ease-out ${
              textVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                ref={rightImgRef}
                src={`${CDN}/AboutBgreenhouse.webp`}
                loading="lazy"
                alt=""
                className="block w-full object-cover will-change-transform"
                style={{ height: "320px" }}
              />
            </div>

            <div>
              <p className="max-w-[420px] text-sm leading-relaxed text-accent max-[767px]:max-w-full">
                Evermind&trade; may look like a Brussels-based eco consultancy,
                but let&apos;s be real &mdash; this is a Webflow template. Just
                like we&apos;d design a power plant with precision and European
                standards, we&apos;ve built this system with variables, modular
                layouts, and pixel-perfect details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
