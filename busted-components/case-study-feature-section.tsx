"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function ParallaxImage({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
}) {
  const imgRef = React.useRef<HTMLImageElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      const img = imgRef.current;
      const wrap = wrapRef.current;
      if (!img || !wrap) return;
      const rect = wrap.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      img.style.transform = `translateY(${progress * 60}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative h-[380px] w-full overflow-hidden rounded-2xl max-[991px]:h-[320px] max-[767px]:h-[260px]"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className="h-[calc(100%+80px)] w-full object-cover object-center will-change-transform"
        style={{ marginTop: "-40px" }}
      />
      {children}
    </div>
  );
}

function FadeUpSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

type Feature = {
  title: string;
  body: string;
  image: string;
  alt: string;
  widget?: string;
  widgetAlt?: string;
};

const features: Feature[] = [
  {
    title: "Eco Precision",
    body: "Crafted like sustainable architecture — clean grid, pixel-perfect details, and fluid variables for effortless scaling.",
    image: `${CDN}/AboutImage.webp`,
    alt: "Team in a studio",
  },
  {
    title: "Adaptive System",
    body: "Every section and layout is fully modular. Swap, edit, or expand with zero friction, thanks to a design built on flexible Webflow variables.",
    image: `${CDN}/ServiceImage.webp`,
    alt: "Wind turbine nacelle",
    widget: `${CDN}/WidgetSystem.webp`,
    widgetAlt: "Top Salesman widget",
  },
  {
    title: "Future-Proof Design",
    body: "From CMS to animations, everything is optimized to stay relevant and functional for years — no quick trends, only solid foundations.",
    image: `${CDN}/SystemImage.webp`,
    alt: "Green architectural facade",
  },
];

export function CaseStudyFeatureSection() {
  return (
    <section className="bg-accent py-20 max-[991px]:py-16 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <FadeUpSection>
          <div className="mb-12 max-w-[620px] max-[991px]:max-w-full max-[767px]:mb-8">
            <div className="mb-6 flex items-center gap-2">
              <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
              <span className="text-xs font-medium tracking-[0.15em] text-white uppercase">
                EVERMIND SYSTEM
              </span>
            </div>
            <h2 className="font-display text-[2.75rem] leading-[1.2] font-normal tracking-[-0.01em] text-white max-[991px]:text-[2.25rem] max-[767px]:text-[1.75rem]">
              Just like we&apos;d design a power plant with precision and
              European standards, we&apos;ve built this system with variables,
              modular layouts, and pixel-perfect details.
            </h2>
          </div>
        </FadeUpSection>

        <div className="grid grid-cols-3 gap-6 max-[991px]:grid-cols-1">
          {features.map((feature, i) => (
            <FadeUpSection key={feature.title} delay={(i + 1) * 100}>
              <div className="flex flex-col gap-5">
                <ParallaxImage src={feature.image} alt={feature.alt}>
                  {feature.widget ? (
                    <div className="absolute bottom-6 left-1/2 w-[55%] -translate-x-1/2 max-[767px]:w-[60%]">
                      <img
                        src={feature.widget}
                        alt={feature.widgetAlt ?? ""}
                        className="h-auto w-full rounded-xl shadow-2xl"
                      />
                    </div>
                  ) : null}
                </ParallaxImage>
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-display text-[1.375rem] leading-snug font-normal text-white max-[767px]:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/64">
                    {feature.body}
                  </p>
                </div>
              </div>
            </FadeUpSection>
          ))}
        </div>
      </div>
    </section>
  );
}
