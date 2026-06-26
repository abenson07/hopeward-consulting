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

export function TestimonialSection() {
  const [sectionRef, visible] = useRevealOnView<HTMLDivElement>();

  return (
    <section className="w-full bg-surface py-[120px] max-[991px]:py-20 max-[767px]:py-16">
      <div
        ref={sectionRef}
        className="mx-auto flex max-w-[940px] flex-col items-center px-5"
      >
        <div
          className={`flex flex-col items-center gap-6 text-center transition-all duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
            <span className="text-xs font-medium tracking-[0.12em] text-accent uppercase">
              From Founder
            </span>
          </div>

          <h3
            className={`m-0 text-center font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.15] font-semibold text-accent transition-all delay-100 duration-700 ease-out max-[991px]:text-[2.5rem] max-[767px]:text-[1.875rem] max-[479px]:text-[1.5rem] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            &ldquo;Designing Evermind&trade; was never just about template
            &mdash; it was about creating a system that feels alive, modular,
            and timeless.&rdquo;
          </h3>
        </div>

        <div
          className={`mt-10 flex flex-col items-center gap-3 transition-all delay-200 duration-700 ease-out ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="h-[64px] w-[88px] shrink-0 overflow-hidden rounded-[40px]">
            <img
              src={`${CDN}/AboutImage11.webp`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <div className="text-sm font-medium text-accent">
              &mdash; Mati Vermeer
            </div>
            <div className="text-sm text-accent opacity-60">
              Founder of Evermind&trade;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
