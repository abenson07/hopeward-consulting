"use client";

import * as React from "react";

const faqs = [
  {
    question: "Is Hopeward really just a website template?",
    answer:
      "Not just. Hopeward is more like a design framework — clean, modular, and future-proof, just like sustainable architecture. It's built with reusable variables and a clear logic that makes customization effortless.",
  },
  {
    question: "Who is Hopeward designed for?",
    answer:
      "Organizations, teams, and creators who value clarity and durability. The modular structure adapts to a wide range of missions without forcing you into a rigid template.",
  },
  {
    question: "Do I need coding skills to use it?",
    answer:
      "No. The system is built so you can swap content, colors, and sections with confidence. Clean structure and sensible defaults keep customization approachable.",
  },
  {
    question: "Can I import my brand colors and fonts?",
    answer:
      "Yes. Design tokens drive the whole system, so updating a handful of variables restyles everything consistently across the site.",
  },
  {
    question: "Does Hopeward include content collections?",
    answer:
      "Yes. Reusable, data-driven sections make it easy to manage blogs, stories, and case studies as your content grows.",
  },
  {
    question: "What kind of support do I get?",
    answer:
      "Thoughtful, responsive help when you need it — guidance, resources, and a steady hand to keep you moving forward with confidence.",
  },
];

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

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [sectionRef, visible] = useInView<HTMLDivElement>(0.1);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="w-full bg-surface py-24 max-[767px]:py-14">
      <div ref={sectionRef} className="mx-auto max-w-[940px] px-5">
        <div className="grid grid-cols-[2fr_3fr] gap-20 max-[991px]:grid-cols-1 max-[991px]:gap-12">
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-2 h-px w-full bg-accent/20" />

            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-brand" />
              <span className="text-xs font-medium tracking-widest text-muted uppercase">
                FAQ
              </span>
            </div>

            <h3 className="m-0 font-display text-[2.75rem] leading-[1.1] font-bold text-accent max-[767px]:text-4xl">
              Questions, answered with clarity.
            </h3>

            <p className="m-0 text-base leading-relaxed text-accent/70">
              We believe a good foundation should be as intuitive as it is
              beautiful. Here&apos;s everything you might want to know about
              Hopeward — from customization options to why it feels different
              from anything else out there.
            </p>

            <a
              href="#"
              className="group relative inline-flex items-center gap-2 self-start overflow-hidden rounded-full border border-accent px-5 py-2.5 text-sm font-medium text-accent transition-colors duration-300"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
              <span className="relative z-10 transition-colors duration-300 group-hover:text-surface">
                Learn more
              </span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-surface">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl bg-surface-muted transition-all duration-700 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 80 + 100}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-7 py-6 text-left outline-none"
                  aria-expanded={openIndex === i}
                >
                  <span className="pr-4 text-base leading-snug font-bold text-accent">
                    {faq.question}
                  </span>

                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30">
                    <span className="absolute h-px w-3.5 bg-accent transition-all duration-300" />
                    <span
                      className={`absolute h-3.5 w-px bg-accent transition-all duration-300 ${
                        openIndex === i ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === i ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="m-0 px-7 pb-6 text-sm leading-relaxed text-accent/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
