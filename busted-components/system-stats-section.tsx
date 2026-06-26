"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function useInView<T extends HTMLElement>(threshold = 0.1) {
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

const stats = [
  { number: "50+", label: "Pre-built sections and layouts." },
  { number: "1500+", label: "Happy creators using our templates." },
  { number: "99%", label: "Lighthouse performance score" },
  { number: "50+", label: "Responsive and fully scalable design" },
];

export function SystemStatsSection() {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [headingRef, headingVisible] = useInView<HTMLDivElement>(0.1);
  const [contentRef, contentVisible] = useInView<HTMLDivElement>(0.1);

  React.useEffect(() => {
    const onScroll = () => {
      const img = imgRef.current;
      const parent = img?.parentElement;
      if (!img || !parent) return;
      const rect = parent.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      img.style.transform = `translateY(${progress * 60}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-accent py-20 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <div
          ref={headingRef}
          className={`mb-12 transition-all duration-700 ease-out max-[767px]:mb-8 ${
            headingVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="m-0 font-display text-5xl leading-tight font-normal text-surface max-[991px]:text-4xl max-[767px]:text-3xl">
            A calm structure for
            <br />
            ambitious brands
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 max-[991px]:grid-cols-1 max-[767px]:gap-8">
          <div className="relative overflow-hidden rounded-sm">
            <img
              ref={imgRef}
              src={`${CDN}/GalleryImage.webp`}
              loading="lazy"
              alt=""
              className="block h-full w-full object-cover will-change-transform"
              style={{ minHeight: "500px", maxHeight: "600px" }}
            />
            <div className="absolute bottom-4 left-4">
              <div className="rounded-full bg-accent/80 px-3 py-2 backdrop-blur-sm">
                <div className="text-[10px] tracking-widest text-surface/70 uppercase">
                  It&apos;s a good place to describe image
                </div>
              </div>
            </div>
          </div>

          <div
            ref={contentRef}
            className={`flex flex-col gap-10 transition-all delay-200 duration-700 ease-out ${
              contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-5">
              <div className="h-px w-full bg-white/10" />

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <div className="text-[11px] tracking-widest text-surface/70 uppercase">
                  well-designed system
                </div>
              </div>

              <div className="text-base leading-relaxed text-surface/70">
                Hopeward isn&apos;t just a set of pages — it&apos;s a fully
                modular Webflow template built like sustainable infrastructure.
                <br />
                <br />
                With reusable sections, clean variables, and flexible layouts,
                you can create websites that feel both modern and timeless. Each
                detail — from typography to interactions — is crafted to give
                your brand a foundation that grows with you, just like a
                well-designed system built for the future.
              </div>

              <div>
                <a
                  href="#"
                  className="relative inline-flex cursor-pointer items-center overflow-hidden rounded-full bg-brand px-6 py-3 no-underline transition-transform duration-300 ease-out hover:scale-105"
                >
                  <span className="relative text-sm font-medium text-accent">
                    About company
                  </span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-0">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border-l-2 border-brand/60 py-4 pl-4"
                >
                  <div className="mb-2 font-display text-5xl leading-none font-normal text-surface max-[991px]:text-4xl">
                    {stat.number}
                  </div>
                  <div className="text-sm leading-snug text-surface/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
