"use client";

import * as React from "react";

const IMG = "/images";

type ServiceTab = {
  tab: string;
  title: string;
  body: string;
  image: string;
  widget?: {
    className: string;
    src: string;
  };
};

const TABS: ServiceTab[] = [
  {
    tab: "Tab 1",
    title: "Assessment & planning",
    body: "At Hopeward, we believe that starting with a deep understanding of where you are and where you want to go is key to creating a sustainable path forward. Our Assessment & Planning services provide valuable insights that help you define actionable, data-driven strategies grounded in your organization's unique mission, goals, resources, and capacity. Whether you need a comprehensive assessment, a strategic plan, or both, we tailor our approach to meet your specific needs.",
    image: "Feature-Image_1.webp",
  },
  {
    tab: "Tab 2",
    title: "Program Strategy & Execution",
    body: "Turning ideas into action requires clarity, collaboration, and an actionable plan. Our Program Strategy & Execution services help you design, develop, and implement programs that are aligned with your mission and make a real, lasting impact.",
    image: "Feature-Image-1_1.webp",
    widget: { className: "tab-widget _2", src: "Widget-1.webp" },
  },
  {
    tab: "Tab 3",
    title: "Evaluation & Impact Reporting",
    body: "How do you know you're making the difference you set out to achieve? Through thoughtful evaluation and impact reporting, we help you measure success using data-driven methods that provide clarity and insights into what's working and where there's room for improvement. We make data approachable, teaching you how to use existing data effectively without feeling overwhelmed. This continuous learning loop empowers you and your team to refine your efforts, build new skills, and make informed decisions that drive greater impact.",
    image: "Feature-Image-2_1.webp",
    widget: { className: "tab-widget _3", src: "Widget-1.svg" },
  },
  {
    tab: "Tab 4",
    title: "Collaborative Leadership & Collective Impact",
    body: "Complex challenges require collaboration across sectors, organizations, and communities. Our Collaborative Leadership & Collective Impact services help you build and strengthen partnerships that achieve shared goals, ensuring alignment and accountability for lasting results.",
    image: "Feature-Image-3_1.webp",
    widget: { className: "tab-widget _4", src: "Frame-1000004139.svg" },
  },
  {
    tab: "Tab 5",
    title: "Community Engagement & Stakeholder Relations",
    body: "Engaging with your community and stakeholders is key to creating lasting impact. We guide you in building authentic relationships, fostering collaboration, and ensuring all voices are heard. Our community engagement strategies are human-centered and support strengthening your organization's connections to build a more inclusive, supportive network around your work.",
    image: "Gallery-Image_1.webp",
    widget: { className: "tab-widget _5", src: "Widget.svg" },
  },
];

function ServiceTabLink({
  tab,
  isActive,
  onSelect,
}: {
  tab: ServiceTab;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <a
      className={`tab-accordion w-inline-block w-tab-link${
        isActive ? " w--current" : ""
      }`}
      data-w-tab={tab.tab}
      href="#"
      onClick={(event) => {
        event.preventDefault();
        onSelect();
      }}
    >
      <div className="accordion-top-tile">
        <div className="accordion-title">
          <h4 className="text-h7 no-margins">{tab.title}</h4>
        </div>
        <div className="accordion-bottom-tile">
          <div className="acordion-text">{tab.body}</div>
        </div>
      </div>
    </a>
  );
}

function ServiceTabPane({
  tab,
  isActive,
}: {
  tab: ServiceTab;
  isActive: boolean;
}) {
  return (
    <div
      className={`tab-pane-features w-tab-pane${
        isActive ? " w--tab-active" : ""
      }`}
      data-w-tab={tab.tab}
    >
      <div className="features-image-wrap">
        <img
          alt=""
          className="image-cover"
          loading="lazy"
          src={`${IMG}/${tab.image}`}
        />
        {tab.widget && (
          <div className="overlay-with-image">
            <img
              alt=""
              className={tab.widget.className}
              loading="lazy"
              src={`${IMG}/${tab.widget.src}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Faithful port of the original Hopeward services tabs section
 * (`section.home-a-tab-section`, `services-where-we-shine`) from
 * `hopeward-26/index.html`. The Webflow tabs classes are preserved, and a
 * minimal React state layer toggles `w--current` / `w--tab-active` because
 * `webflow.js` is not loaded in this app.
 */
export function ServicesTabSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const activeTab = TABS[activeIndex]?.tab ?? "Tab 1";

  return (
    <section
      className="section home-a-tab-section"
      data-section-id="services-where-we-shine"
      data-section-name="services-where-we-shine"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid process-halves">
          <div className="process-left">
            <div className="headline-selling-points">
              <div className="divider-dark-16" />
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small">Where we shine</div>
              </div>
              <div className="text-h3">
                Grounded in strategy. Strengthen by collaboration.{" "}
                <span className="headline-home-b-accent">Driven by hope</span>.
              </div>
              <p className="text-body">
                We help mission-driven leaders move from complexity to
                coordinated action.
              </p>
              <a className="cta-main w-inline-block" href="/contact">
                <div className="button-text-mask">
                  <div className="button-text">Check pricing</div>
                </div>
                <div className="button-bg w-variant-1fc0c975-6074-8465-5c95-4675ab49fe85" />
              </a>
            </div>
            <div
              className="tabs-features w-tabs"
              data-current={activeTab}
              data-duration-in="400"
              data-duration-out="350"
              data-easing="ease-out-circ"
            >
              <div className="tabs-menu-features w-tab-menu">
                {TABS.map((tab, index) => (
                  <ServiceTabLink
                    key={tab.tab}
                    tab={tab}
                    isActive={index === activeIndex}
                    onSelect={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <div className="tabs-content-features w-tab-content">
                {TABS.map((tab, index) => (
                  <ServiceTabPane
                    key={tab.tab}
                    tab={tab}
                    isActive={index === activeIndex}
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="features-image-placeholder"
            id="w-node-_1069fddd-bb34-eba6-0755-86da506b00cb-0aabc371"
          />
        </div>
      </div>
    </section>
  );
}
