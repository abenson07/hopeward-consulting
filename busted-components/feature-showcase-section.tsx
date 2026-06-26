"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function ParallaxImage({
  src,
  widgetSrc,
}: {
  src: string;
  widgetSrc: string;
}) {
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      const img = imgRef.current;
      const parent = img?.closest(".parallax-parent") as HTMLElement | null;
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
    <div className="parallax-parent relative h-full w-full overflow-hidden rounded-xl">
      <img
        ref={imgRef}
        src={src}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover will-change-transform"
        style={{ minHeight: "100%" }}
      />
      <div className="absolute inset-0 flex items-end justify-center px-6 pb-8">
        <img
          src={widgetSrc}
          loading="lazy"
          alt=""
          className="max-w-[80%] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export type ShowcaseItem = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  widget: string;
};

const defaultEyebrow = "HOPEWARD SYSTEM";

const defaultHeading =
  "Every section, variable, and interaction is designed to create a calm, future-proof foundation for brands that value clarity and durability.";

const defaultItems: ShowcaseItem[] = [
  {
    id: "eco",
    tabLabel: "Eco Frameworks",
    eyebrow: "uno",
    heading: "Frameworks built like modern eco-architecture.",
    body: "Hopeward delivers a modular foundation engineered for long-term stability. With pixel-perfect layouts and a calm design system, it's built to evolve just like sustainable infrastructure.",
    image: `${CDN}/AboutBcity.webp`,
    widget: `${CDN}/Widget.svg`,
  },
  {
    id: "green",
    tabLabel: "Green CMS Engine",
    eyebrow: "Duo",
    heading: "Content flows like renewable energy",
    body: "A CMS that powers blogs, case studies, and brand storytelling with zero friction. Designed for efficiency, scalability, and clean data architecture — ready to grow with your brand.",
    image: `${CDN}/Thumbnail.webp`,
    widget: `${CDN}/FeaturedWidgets.webp`,
  },
  {
    id: "pages",
    tabLabel: "Smart, flexible pages",
    eyebrow: "rike",
    heading: "Smart, flexible pages for every story",
    body: "Mix and match modular sections to assemble pages that fit your message. Every layout stays responsive, accessible, and effortless to extend as your needs change.",
    image: `${CDN}/TabImage.webp`,
    widget: `${CDN}/Widget1.svg`,
  },
];

function ContentItem({ item, index }: { item: ShowcaseItem; index: number }) {
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={item.id}
      ref={ref}
      className={`flex scroll-mt-28 flex-row gap-8 transition-all duration-700 ease-out max-[767px]:flex-col ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div
        className="w-[58%] shrink-0 max-[767px]:w-full"
        style={{ minHeight: "380px", height: "420px" }}
      >
        <ParallaxImage src={item.image} widgetSrc={item.widget} />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-4 py-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
          <span className="text-xs font-medium tracking-widest text-brand uppercase">
            {item.eyebrow}
          </span>
        </div>
        <h3 className="font-display text-xl leading-snug font-semibold text-white">
          {item.heading}
        </h3>
        <p className="text-sm leading-relaxed text-white/88">{item.body}</p>
      </div>
    </div>
  );
}

export type FeatureShowcaseSectionProps = {
  eyebrow?: string;
  heading?: string;
  items?: ShowcaseItem[];
};

export function FeatureShowcaseSection({
  eyebrow = defaultEyebrow,
  heading = defaultHeading,
  items = defaultItems,
}: FeatureShowcaseSectionProps = {}) {
  const [activeTab, setActiveTab] = React.useState(items[0]?.id ?? "");
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
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-accent py-24 max-[767px]:py-16">
      <div className="mx-auto max-w-[940px] px-5">
        <div className="grid grid-cols-[260px_1fr] gap-12 max-[991px]:grid-cols-1 max-[991px]:gap-8">
          <div className="flex flex-col gap-10 max-[991px]:gap-6 md:sticky md:top-28 md:self-start">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
              <span className="text-[10px] font-medium tracking-[0.15em] text-brand uppercase">
                {eyebrow}
              </span>
            </div>

            <div
              ref={headingRef}
              className={`transition-all duration-700 ease-out ${
                headingVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              <p className="font-display text-2xl leading-snug font-semibold text-white max-[991px]:text-3xl max-[767px]:text-2xl">
                {heading}
              </p>
            </div>

            <nav className="flex flex-col border-t border-white/12 max-[991px]:flex-row max-[991px]:flex-wrap max-[767px]:flex-col">
              {items.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabClick(tab.id)}
                  className={`cursor-pointer border-b border-white/12 bg-transparent py-4 text-left text-sm outline-none transition-colors duration-200 max-[991px]:pr-6 max-[767px]:pr-0 ${
                    activeTab === tab.id
                      ? "font-semibold text-white"
                      : "font-normal text-white/40 hover:text-white/75"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-20 max-[767px]:gap-14">
            {items.map((item, i) => (
              <ContentItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
