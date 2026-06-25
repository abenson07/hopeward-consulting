"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

function useInView(threshold = 0.1) {
  const ref = React.useRef<HTMLDivElement>(null);
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

  return { ref, visible };
}

function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
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
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
}

export function ServicesHeroSection() {
  const headingAnim = useInView();
  const subtitleAnim = useInView();
  const img1Anim = useInView();
  const img2Anim = useInView();
  const bodyAnim = useInView();

  return (
    <div className="bg-surface">
      <section className="relative overflow-hidden pt-16 pb-0">
        <div className="mx-auto max-w-[940px] px-5">
          <div className="mb-16 flex flex-col items-center text-center max-[767px]:mb-10">
            <div ref={headingAnim.ref}>
              <h1
                className={`mb-6 font-display text-[clamp(42px,5vw,72px)] leading-[1.1] font-normal text-accent transition-all duration-700 ease-out max-[767px]:text-[40px] ${
                  headingAnim.visible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
                }`}
              >
                Wind Farm Advisory Session
              </h1>
            </div>

            <div
              ref={subtitleAnim.ref}
              className={`flex flex-col items-center gap-5 transition-all delay-150 duration-700 ease-out ${
                subtitleAnim.visible ? "opacity-100 blur-0" : "opacity-0 blur-[12px]"
              }`}
            >
              <div className="text-base leading-relaxed text-accent">
                A focused space for better energy decisions.
              </div>

              <a
                href="#"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-accent/20 bg-white/60 py-1 pr-5 pl-1 no-underline transition-colors duration-300 hover:bg-white/90"
              >
                <div className="relative shrink-0">
                  <div className="h-9 w-9 overflow-hidden rounded-full">
                    <img
                      src={`${CDN}/Author_1Author.webp`}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-white bg-brand" />
                </div>
                <span className="text-sm font-medium text-accent">
                  Book a call
                </span>
              </a>
            </div>
          </div>

          <div className="relative flex items-start justify-center max-[767px]:flex-col max-[767px]:gap-4">
            <div
              ref={img1Anim.ref}
              className={`relative z-10 w-[48%] overflow-hidden rounded-2xl transition-all delay-100 duration-700 ease-out max-[767px]:w-full ${
                img1Anim.visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className="overflow-hidden rounded-2xl"
                style={{ height: "420px" }}
              >
                <ParallaxImage
                  src={`${CDN}/ServiceImage.jpg`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              ref={img2Anim.ref}
              className={`relative z-20 -ml-8 mt-16 w-[48%] overflow-hidden rounded-2xl transition-all delay-[250ms] duration-700 ease-out max-[767px]:mt-0 max-[767px]:ml-0 max-[767px]:w-full ${
                img2Anim.visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <div
                className="overflow-hidden rounded-2xl"
                style={{ height: "420px" }}
              >
                <ParallaxImage
                  src={`${CDN}/ServiceImage.webp`}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <img
          src={`${CDN}/Dots.svg`}
          loading="lazy"
          alt=""
          className="pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40"
        />
      </section>

      <section className="py-24 max-[767px]:py-16">
        <div className="mx-auto max-w-[940px] px-5">
          <div
            ref={bodyAnim.ref}
            className={`mx-auto max-w-[600px] text-center transition-all duration-700 ease-out ${
              bodyAnim.visible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-lg leading-relaxed font-normal text-accent max-[767px]:text-base">
              You are building something that will stay with us for decades. You
              have many questions: about localization, profitability,
              regulations, environmental impact. This session doesn&apos;t solve
              everything — but it will help you move forward with confidence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
