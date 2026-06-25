"use client";

import * as React from "react";

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

export type SplitFeature = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

export type SplitFeatureSectionProps = {
  image: string;
  caption: string;
  eyebrow: string;
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  features: SplitFeature[];
  imageSide?: "left" | "right";
};

export function SplitFeatureSection({
  image,
  caption,
  eyebrow,
  heading,
  body,
  ctaLabel,
  ctaHref = "#",
  features,
  imageSide = "left",
}: SplitFeatureSectionProps) {
  const parallaxRef = React.useRef<HTMLImageElement>(null);
  const [contentRef, contentVisible] = useInView<HTMLDivElement>(0.15);
  const [featuresRef, featuresVisible] = useInView<HTMLDivElement>(0.2);

  React.useEffect(() => {
    const onScroll = () => {
      const img = parallaxRef.current;
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

  const imageColumn = (
    <div
      className="relative overflow-hidden rounded-xl max-[991px]:w-full"
      style={{ minHeight: "500px" }}
    >
      <img
        ref={parallaxRef}
        src={image}
        loading="lazy"
        alt=""
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
        style={{ minHeight: "560px" }}
      />
      <div className="absolute bottom-4 left-4 z-10">
        <div className="rounded-full bg-accent/65 px-4 py-2">
          <p className="text-[10px] leading-none font-medium tracking-[0.12em] text-white uppercase">
            {caption}
          </p>
        </div>
      </div>
    </div>
  );

  const contentColumn = (
    <div
      ref={contentRef}
      className={`flex flex-col justify-between transition-all duration-700 ease-out ${
        contentVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="h-px w-full bg-accent/20" />

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
          <span className="text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
            {eyebrow}
          </span>
        </div>

        <h3 className="font-display text-4xl leading-tight font-normal text-accent max-[991px]:text-3xl max-[767px]:text-2xl">
          {heading}
        </h3>

        <p className="text-base leading-relaxed text-accent/80">{body}</p>

        <div className="mt-2">
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full border border-accent px-6 py-3 text-sm font-medium tracking-wide text-accent transition-all duration-300 hover:bg-accent hover:text-surface"
          >
            {ctaLabel}
          </a>
        </div>
      </div>

      <div ref={featuresRef} className="mt-10 flex flex-col gap-6 max-[991px]:mt-8">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={`flex items-start gap-4 transition-all duration-700 ease-out ${
              featuresVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
            }`}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand">
              <div className="h-6 w-6 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  {feature.icon}
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm leading-snug font-semibold text-accent">
                {feature.title}
              </p>
              <p className="text-sm leading-relaxed text-accent/80">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-surface py-20 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <div className="grid grid-cols-2 gap-8 max-[991px]:grid-cols-1 max-[991px]:gap-6">
          {imageSide === "left" ? (
            <>
              {imageColumn}
              {contentColumn}
            </>
          ) : (
            <>
              <div className="max-[991px]:order-2">{contentColumn}</div>
              <div className="max-[991px]:order-1">{imageColumn}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
