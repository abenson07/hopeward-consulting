"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

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

function ParallaxImage({
  src,
  srcSet,
  sizes,
}: {
  src: string;
  srcSet?: string;
  sizes?: string;
}) {
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      const img = imgRef.current;
      const parent = img?.parentElement;
      if (!img || !parent) return;
      const rect = parent.getBoundingClientRect();
      const progress = -rect.top / window.innerHeight;
      img.style.transform = `translateY(${progress * 50}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <img
      ref={imgRef}
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt=""
      loading="lazy"
      className="absolute inset-0 h-full w-full scale-110 object-cover will-change-transform"
    />
  );
}

type FeatureCard = {
  href: string;
  eyebrow: string;
  title: string;
  image: string;
  srcSet?: string;
  sizes?: string;
};

const cards: FeatureCard[] = [
  {
    href: "#",
    eyebrow: "Green Cities",
    title: "Sustainable Construction",
    image: `${CDN}/AboutBcity.webp`,
    srcSet: `${CDN}/AboutBcity.webp 500w, ${CDN}/AboutBcity.webp 680w`,
    sizes: "(max-width: 680px) 100vw, 680px",
  },
  {
    href: "#",
    eyebrow: "Sustainability",
    title: "Wind Farms",
    image: `${CDN}/Thumbnail.webp`,
    srcSet: `${CDN}/5aaf33b87d48452a2044d79ef265ab80a8844499-p-500.webp 500w, ${CDN}/5aaf33b87d48452a2044d79ef265ab80a8844499-p-800.webp 800w, ${CDN}/5aaf33b87d48452a2044d79ef265ab80a8844499-p-1080.webp 1080w, ${CDN}/5aaf33b87d48452a2044d79ef265ab80a8844499-p-1600.webp 1600w, ${CDN}/5aaf33b87d48452a2044d79ef265ab80a8844499-p-2000.webp 2000w, ${CDN}/Thumbnail.webp 2400w`,
    sizes: "(max-width: 767px) 100vw, (max-width: 991px) 727.96875px, 939.984375px",
  },
];

type Logo = { src: string; size: "small" | "normal" | "large" };

const logos: Logo[] = [
  { src: `${CDN}/Compnaylogo_1.svg`, size: "normal" },
  { src: `${CDN}/Compnaylogo-1.svg`, size: "large" },
  { src: `${CDN}/Compnaylogo-2.svg`, size: "large" },
  { src: `${CDN}/Compnaylogo-3.svg`, size: "large" },
  { src: `${CDN}/Compnaylogo-4.svg`, size: "small" },
  { src: `${CDN}/Compnaylogo-5.svg`, size: "large" },
  { src: `${CDN}/Compnaylogo-6.svg`, size: "large" },
  { src: `${CDN}/Compnaylogo-7.svg`, size: "large" },
];

const logoHeight: Record<Logo["size"], string> = {
  small: "h-5",
  normal: "h-6",
  large: "h-8",
};

function LogoSet() {
  return (
    <div className="flex shrink-0 items-center gap-12">
      {logos.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          loading="lazy"
          alt=""
          className={`${logoHeight[logo.size]} w-auto object-contain opacity-70`}
        />
      ))}
    </div>
  );
}

export function ExpandableCardsSection() {
  return (
    <section className="bg-surface py-20 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <div className="grid grid-cols-2 gap-6 max-[767px]:grid-cols-1">
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative block h-[500px] overflow-hidden rounded-2xl no-underline max-[767px]:h-[380px]"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={card.image}
                  srcSet={card.srcSet}
                  sizes={card.sizes}
                />
              </div>

              <div className="absolute inset-0 z-10 rounded-2xl bg-black/30 transition-all duration-500 group-hover:bg-black/40" />
              <div className="absolute inset-0 z-10 rounded-2xl bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  <span className="text-xs font-medium tracking-[0.15em] text-white uppercase">
                    {card.eyebrow}
                  </span>
                </div>
                <div className="font-display text-2xl leading-tight font-medium text-white max-[767px]:text-xl">
                  {card.title}
                </div>
              </div>

              <div className="absolute right-6 bottom-6 z-20">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white transition-all duration-300 group-hover:bg-white/30">
                  <ArrowIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[940px] px-5 max-[767px]:mt-12">
        <div className="mb-8">
          <div className="mb-4 h-px w-full bg-accent/15" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-[0.15em] text-accent uppercase">
              Companies we worked with
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-24"
            style={{
              background: "linear-gradient(to right, var(--surface), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-24"
            style={{
              background: "linear-gradient(to left, var(--surface), transparent)",
            }}
          />

          <div className="animate-marquee-hero flex w-max items-center gap-12">
            <LogoSet />
            <LogoSet />
            <LogoSet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandableCardsSection;
