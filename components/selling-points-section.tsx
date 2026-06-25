"use client";

import * as React from "react";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

type Tab = {
  title: string;
  body: string;
  image: string;
  widget: string;
};

const tabs: Tab[] = [
  {
    title: "Adaptive Layouts",
    body: "Built with Webflow variables and clean architecture — as precise as a modern construction project.",
    image: `${CDN}/FeatureImage.webp`,
    widget: `${CDN}/Widget.svg`,
  },
  {
    title: "Powerful CMS",
    body: "Built with Webflow variables and clean architecture — as precise as a modern construction project.",
    image: `${CDN}/FeatureImage-1.webp`,
    widget: `${CDN}/Widget1.webp`,
  },
  {
    title: "Human-Centered Design",
    body: "Built with Webflow variables and clean architecture — as precise as a modern construction project.",
    image: `${CDN}/FeatureImage-2.webp`,
    widget: `${CDN}/Widget1.svg`,
  },
  {
    title: "Future-Proof Setup",
    body: "Built with Webflow variables and clean architecture — as precise as a modern construction project.",
    image: `${CDN}/FeatureImage-3.webp`,
    widget: `${CDN}/Frame1000004139.svg`,
  },
];

const topStates = [
  { label: "NY", value: "120K", width: "100%" },
  { label: "MA", value: "80K", width: "67%" },
  { label: "NH", value: "70K", width: "58%" },
  { label: "OR", value: "50K", width: "42%" },
];

export function SellingPointsSection() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [imageVisible, setImageVisible] = React.useState(true);

  const handleTabClick = (index: number) => {
    if (index === activeTab) return;
    setImageVisible(false);
    setTimeout(() => {
      setActiveTab(index);
      setImageVisible(true);
    }, 200);
  };

  return (
    <section className="bg-surface py-20 max-[767px]:py-12">
      <div className="mx-auto max-w-[940px] px-5">
        <div className="grid grid-cols-[1fr_1fr] items-start gap-10 max-[991px]:grid-cols-1">
          <div className="flex flex-col">
            <div className="mb-10 flex flex-col gap-5">
              <div className="h-px w-full bg-accent/15" />

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                <span className="text-[11px] font-medium tracking-[0.12em] text-muted uppercase">
                  Selling Points
                </span>
              </div>

              <h2 className="font-display text-[44px] leading-[1.1] font-normal tracking-[-0.01em] text-accent max-[767px]:text-4xl max-[479px]:text-3xl">
                A system shaped like sustainable projects.
              </h2>

              <a
                href="#"
                className="inline-flex cursor-pointer items-center justify-center self-start rounded-full border border-accent px-6 py-3 text-sm font-normal tracking-wide text-accent transition-all duration-300 hover:bg-accent hover:text-surface"
              >
                Check pricing
              </a>
            </div>

            <div className="flex flex-col">
              {tabs.map((tab, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={tab.title}
                    type="button"
                    onClick={() => handleTabClick(i)}
                    className="w-full text-left focus:outline-none"
                  >
                    <div className="border-t border-accent/15 py-4">
                      <div
                        className={`text-sm font-bold transition-colors duration-300 ${
                          isActive ? "text-accent" : "text-muted"
                        }`}
                      >
                        {tab.title}
                      </div>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          isActive
                            ? "mt-3 max-h-[200px] opacity-100"
                            : "mt-0 max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm leading-relaxed text-accent/80">
                          {tab.body}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
              <div className="h-px w-full bg-accent/15" />
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-xl max-[991px]:mt-8 max-[767px]:mt-6"
            style={{ minHeight: "500px" }}
          >
            {tabs.map((tab, i) => (
              <div
                key={tab.title}
                className="absolute inset-0 transition-opacity duration-300 ease-in-out"
                style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}
              >
                <img
                  src={tab.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {tabs.map((tab, i) => (
                <div
                  key={tab.title}
                  className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out"
                  style={{ opacity: activeTab === i && imageVisible ? 1 : 0 }}
                >
                  {i === 0 ? (
                    <div className="w-[280px] rounded-xl bg-white/70 p-6 shadow-lg backdrop-blur-md">
                      <p className="mb-4 text-sm text-accent/80">Top states</p>
                      <div className="flex flex-col gap-3">
                        {topStates.map((row) => (
                          <div
                            key={row.label}
                            className="relative flex h-8 w-full items-center overflow-hidden rounded bg-brand/30"
                          >
                            <div
                              className="absolute top-0 left-0 h-full rounded bg-brand/40"
                              style={{ width: row.width }}
                            />
                            <span className="relative z-10 px-2 text-xs font-bold text-accent">
                              {row.label}
                            </span>
                            <span className="relative z-10 ml-auto px-2 text-xs text-accent/80">
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img
                      src={tab.widget}
                      alt=""
                      className="max-h-[60%] max-w-[60%] object-contain drop-shadow-xl"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
