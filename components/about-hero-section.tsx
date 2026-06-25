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

type ScatterImage = {
  src: string;
  style: React.CSSProperties;
};

const scatterImages: ScatterImage[] = [
  {
    src: `${CDN}/AboutBriver.webp`,
    style: { top: "6%", left: "12%", width: "120px", height: "120px" },
  },
  {
    src: `${CDN}/AboutBgreenhouse.webp`,
    style: { top: "28%", left: "4%", width: "118px", height: "145px" },
  },
  {
    src: `${CDN}/AboutBcity.webp`,
    style: { top: "52%", left: "16%", width: "240px", height: "150px" },
  },
  {
    src: `${CDN}/ServiceImage.webp`,
    style: { top: "30%", right: "28%", width: "112px", height: "112px" },
  },
  {
    src: `${CDN}/AboutB11.webp`,
    style: { top: "5%", right: "8%", width: "200px", height: "148px" },
  },
  {
    src: `${CDN}/AboutBsolar.webp`,
    style: {
      bottom: "8%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "120px",
    },
  },
  {
    src: `${CDN}/AboutBperson.webp`,
    style: { top: "55%", right: "5%", width: "116px", height: "148px" },
  },
];

export function AboutHeroSection() {
  const [headlineRef, headlineVisible] = useInView<HTMLDivElement>(0.1);
  const [imagesRef, imagesVisible] = useInView<HTMLDivElement>(0.05);
  const [descRef, descVisible] = useInView<HTMLDivElement>(0.1);

  return (
    <div className="w-full bg-accent">
      <section className="relative flex min-h-[780px] w-full items-center justify-center overflow-hidden py-24 max-[767px]:min-h-[600px]">
        <img
          src={`${CDN}/DotsLight.svg`}
          loading="lazy"
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
        />

        <div
          ref={imagesRef}
          className={`absolute inset-0 transition-all delay-200 duration-700 ease-out ${
            imagesVisible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
          }`}
        >
          {scatterImages.map((image) => (
            <div
              key={image.src}
              className="absolute overflow-hidden rounded-[14px]"
              style={image.style}
            >
              <img
                loading="lazy"
                src={image.src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto flex max-w-[940px] items-center justify-center px-5">
          <div
            ref={headlineRef}
            className={`text-center transition-all duration-700 ease-out ${
              headlineVisible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
            }`}
          >
            <div className="mb-6 flex items-center justify-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-xs font-medium tracking-[0.15em] text-white uppercase">
                About
              </span>
            </div>
            <h1 className="mx-auto max-w-[640px] font-display text-[clamp(40px,5vw,68px)] leading-[1.1] font-normal text-white">
              Softness with precision is our best value
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full py-20 max-[767px]:py-12">
        <div className="mx-auto max-w-[940px] px-5">
          <div
            ref={descRef}
            className={`text-center transition-all duration-700 ease-out ${
              descVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mx-auto max-w-[620px] font-display text-[clamp(20px,2.2vw,28px)] leading-[1.5] font-normal text-white">
              What began as an idea for a consultancy helping Europe meet its
              green standards… turned into a digital template for brands with
              standards of their own.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
