"use client";

import * as React from "react";

type FaqItem = {
  questionId: string;
  answerId: string;
  question: React.ReactNode;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    questionId: "contact-faq-lede-1",
    answerId: "contact-faq-faq-a-1",
    question: (
      <strong>
        Is Hopeward another consultancy that delivers a polished report and walks
        away?
      </strong>
    ),
    answer:
      "No. We're built for mission-driven leaders who need a partner when the work is heavy. We stay grounded in strategy, strengthen collaboration, and help teams sustain momentum — not just hand off a document and leave.",
  },
  {
    questionId: "contact-faq-lede-2",
    answerId: "contact-faq-faq-a-2",
    question: <strong>Who do you work with?</strong>,
    answer:
      "Nonprofit and backbone leaders, cross-sector collaboratives, and teams where multiple partners need to move together — especially when growth, complexity, or change makes the path feel unclear.",
  },
  {
    questionId: "contact-faq-lede-3",
    answerId: "contact-faq-faq-a-3",
    question: <strong>What challenges do you usually help with?</strong>,
    answer:
      "We're often brought in when priorities compete, coordination gets strained, or strategy needs to become shared action. Common focuses include clarifying direction, aligning leadership, improving how partners work together, and designing lightweight systems that keep progress moving.",
  },
  {
    questionId: "contact-faq-lede-4",
    answerId: "contact-faq-faq-a-4",
    question: <strong>How does an engagement typically work?</strong>,
    answer:
      "We start by understanding context, constraints, and relationships. Then we co-create actionable pathways — facilitation, planning, and practical supports — so decisions stay owned by your team and momentum is easier to maintain.",
  },
  {
    questionId: "contact-faq-lede-5",
    answerId: "contact-faq-faq-a-5",
    question: (
      <strong>Do you support collaboratives and cross-sector partnerships?</strong>
    ),
    answer:
      "Yes. We work often where sectors meet — helping groups build trust, shared language, and operating rhythms so partnerships can move from intent to coordinated execution.",
  },
  {
    questionId: "contact-faq-lede-6",
    answerId: "contact-faq-faq-a-6",
    question: <strong>How do we get started?</strong>,
    answer:
      "Usually with a conversation about what feels stuck, what outcomes matter, and what a sensible first step looks like. We'll be clear about scope, cadence, and how we'll collaborate before the work begins.",
  },
];

function FaqArrowIcon() {
  return (
    <svg
      fill="none"
      height="100%"
      viewBox="0 0 16 16"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
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

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`expandable-single${isOpen ? " w--open" : ""}`}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onToggle();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="expandable-top">
        <div className="text-large" data-id={item.questionId}>
          {item.question}
        </div>
        <div className="faq-animated-box">
          <div className="faq-horizontal" />
          <div className="faq-vertical" />
        </div>
      </div>
      <div className="expandable-bottom">
        <p className="faq-paragraph" data-id={item.answerId}>
          {item.answer}
        </p>
      </div>
    </div>
  );
}

/**
 * Faithful port of the original Hopeward contact FAQ section
 * (`section.faq-section`, `contact-faq`) from `hopeward-26/contact.html`.
 * A minimal React state layer toggles `w--open` because `webflow.js` is not
 * loaded; accordion behavior is styled in `public/css/hopeward.css`.
 */
export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="padding-bottom-small">
      <section
        className="section faq-section"
        data-section-id="contact-faq"
        data-wf--faq-section--variant="base"
      >
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="w-layout-grid faq-halves">
            <div className="headline-faq">
              <div className="divider-dark-16" />
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small" data-id="contact-faq-eyebrow">
                  Working with us
                </div>
              </div>
              <h3 className="no-margins" data-id="contact-faq-title">
                What It Feels Like to Move Hopeward.
              </h3>
              <div>
                Hopeward isn&apos;t just a name, it&apos;s a direction. It takes
                shape in grounded strategy, aligned leadership, and systems that
                transform complexity into clarity and conversation into
                coordinated, sustained action.
              </div>
              <a
                className="cta-main secondary-dark w-inline-block"
                data-id="contact-faq-cta-1"
                href="/contact"
                target="_blank"
              >
                <div className="button-text-mask secondary-dark-2">
                  <div className="button-text secondary-dark-3">
                    More templates
                  </div>
                </div>
                <div className="button-icon-wrap secondary-dark-4">
                  <div className="icon-button secondary-dark-6 prev secondary-dark-5 w-embed">
                    <FaqArrowIcon />
                  </div>
                  <div className="icon-button secondary-dark-6 w-embed">
                    <FaqArrowIcon />
                  </div>
                </div>
                <div className="button-bg secondary-dark-7" />
              </a>
            </div>
            <div className="faq-block">
              {FAQ_ITEMS.map((item, index) => (
                <FaqAccordionItem
                  key={item.questionId}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
