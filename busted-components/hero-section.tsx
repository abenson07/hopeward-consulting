"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function useRevealOnView<T extends HTMLElement>(delay = 0) {
  const ref = React.useRef<T>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return [ref, visible] as const;
}

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

function MarqueeSet() {
  return (
    <div className="flex shrink-0 flex-row gap-4">
      <div className="relative h-[400px] w-[282px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={`${CDN}/TestimonialImage.webp`}
          loading="lazy"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative h-[400px] w-[398px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={`${CDN}/FeatureImage.webp`}
          loading="lazy"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-[200px] rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-brand" />
              <span className="text-[10px] font-semibold tracking-widest text-accent uppercase">
                Client Story
              </span>
            </div>
            <p className="mb-4 text-sm leading-snug font-semibold text-accent">
              Evermind helped us from construction blueprints to digital
              templates
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold text-accent">
                  Jessica Mercedes
                </div>
                <div className="text-xs text-accent/60">Marketing</div>
              </div>
              <img
                src={`${CDN}/Author_1Author.webp`}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[400px] w-[180px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={`${CDN}/MarqueeCube.webp`}
          loading="lazy"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative h-[400px] w-[170px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={`${CDN}/AboutBcity.webp`}
          loading="lazy"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <img
            src={`${CDN}/Widget.svg`}
            loading="lazy"
            alt=""
            className="w-20"
          />
        </div>
      </div>

      <a
        href="#"
        className="group flex h-[400px] w-[320px] shrink-0 flex-col justify-between rounded-2xl bg-accent p-8 no-underline"
      >
        <div className="flex flex-col gap-4">
          <div className="text-[11px] font-semibold tracking-widest text-white/48 uppercase">
            See how we helped FRANCO
          </div>
          <div className="text-lg leading-snug font-semibold text-white">
            We approached Evermind&trade; looking for something flexible yet
            timeless solutions.
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-5xl font-bold text-white">8x</div>
            <div className="text-sm text-white/64">Faster launch times.</div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white">Read case study</span>
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/20 text-white">
              <span className="relative z-10">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </div>
      </a>

      <div className="relative h-[400px] w-[496px] shrink-0 overflow-hidden rounded-2xl">
        <img
          src={`${CDN}/ServiceImage.webp`}
          loading="lazy"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute right-4 bottom-4">
          <img
            src={`${CDN}/Widget1.svg`}
            loading="lazy"
            alt=""
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [pillRef, pillVisible] = useRevealOnView<HTMLAnchorElement>(0);
  const [headingRef, headingVisible] = useRevealOnView<HTMLHeadingElement>(150);
  const [bottomRef, bottomVisible] = useRevealOnView<HTMLDivElement>(300);

  return (
    <section className="w-full overflow-hidden bg-surface">
      <div className="mx-auto flex max-w-[940px] flex-col items-center px-5 pt-24 pb-16 text-center max-[767px]:pt-16 max-[767px]:pb-10">
        <a
          ref={pillRef}
          href="#"
          className={`mb-8 inline-flex items-center gap-2 rounded-full border border-accent/10 bg-white/70 px-4 py-2 no-underline transition-all duration-700 ease-out max-[767px]:mb-6 ${
            pillVisible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
          }`}
        >
          <img src={`${CDN}/Icon.svg`} loading="lazy" alt="" className="h-4 w-4" />
          <span className="text-xs font-medium text-accent/80">
            BYQ&reg; Studio celebrates the release of Evermind&trade; template
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="currentColor"
              className="text-accent/48"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </a>

        <h1
          ref={headingRef}
          className={`mb-6 font-display text-7xl leading-[1.1] font-semibold text-accent transition-all duration-700 ease-out max-[991px]:text-6xl max-[767px]:text-5xl max-[479px]:text-4xl ${
            headingVisible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
          }`}
        >
          Every detail brings intelligence
        </h1>

        <div
          ref={bottomRef}
          className={`flex flex-col items-center gap-8 transition-all duration-700 ease-out ${
            bottomVisible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
          }`}
        >
          <div className="max-w-[560px] text-lg leading-relaxed text-accent/70 max-[767px]:text-base">
            A Webflow template crafted for forward-thinking companies and
            businesses who value clarity, warmth, and adaptability.
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-3 max-[479px]:w-full max-[479px]:flex-col">
            <a
              href="#"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand px-7 py-3 text-base font-semibold text-accent no-underline transition-all duration-300 hover:bg-brand-hover max-[479px]:w-full"
            >
              Buy Template
            </a>

            <a
              href="#"
              className="relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-accent/10 bg-white/80 px-5 py-2 text-base font-medium text-accent no-underline transition-all duration-300 hover:bg-white max-[479px]:w-full max-[479px]:justify-center"
            >
              <div className="relative shrink-0">
                <div className="h-9 w-9 overflow-hidden rounded-full">
                  <img
                    src={`${CDN}/Author_1Author.webp`}
                    loading="lazy"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-brand" />
              </div>
              Book a call
            </a>
          </div>
        </div>
      </div>

      <div className="mb-4 flex justify-center opacity-30">
        <img
          src={`${CDN}/Dots.svg`}
          loading="lazy"
          alt=""
          className="w-full max-w-[940px] px-5"
        />
      </div>

      <div className="relative w-full overflow-hidden pb-16 max-[767px]:pb-10">
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

        <div className="animate-marquee-hero flex w-max flex-row gap-4">
          <MarqueeSet />
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </section>
  );
}
