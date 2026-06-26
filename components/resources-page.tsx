"use client";

/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

import { useState } from "react";

import {
  ResourceCard,
  type ResourceCardData,
  type ResourceType,
} from "@/components/resource-card";

const IMG = "/images";

const FILTERS: { value: ResourceType; label: string }[] = [
  { value: "video", label: "Video" },
  { value: "books", label: "Books" },
  { value: "articles", label: "Articles" },
];

const CARDS: ResourceCardData[] = [
  {
    type: "video",
    author: "Jean Wright",
    title: "Sew Sisters to the Stars: How Sewing Transformed the World of Flight",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/6778a5ed0b5424b9eff7d536_Screenshot%202025-01-03%20at%207.07.06%E2%80%AFPM.png",
    imageAlt:
      "Sew Sisters to the Stars: How Sewing Transformed the World of Flight",
    href: "https://www.youtube.com/watch?v=YX35k2LIf4A",
  },
  {
    type: "books",
    author: "Book C.R. Synder, Ph.D.",
    title: "Handbook of Hope: Theory, Measures, & Applications",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/67789259633bd6ebc93a6481_book_handbook-of-hope.jpg",
    imageAlt: "Handbook of Hope: Theory, Measures, & Applications",
    href: "https://www.amazon.com/Handbook-Hope-Theory-Measures-Applications/dp/0126540500",
  },
  {
    type: "articles",
    author: "David B. Feldman, Diane E Dreher",
    title:
      "\u201cCan Hope be Changed in 90 Minutes? Testing the Efficacy of Single-Session Goal-Pursuit Intervention for College Students\u201d",
    image: `${IMG}/CS-Thumbnail_1.webp`,
    imageAlt:
      "\u201cCan Hope be Changed in 90 Minutes? Testing the Efficacy of Single-Session Goal-Pursuit Intervention for College Students\u201d",
    href: "https://www.researchgate.net/publication/257589312_Can_Hope_be_Changed_in_90_Minutes_Testing_the_Efficacy_of_a_Single-Session_Goal-Pursuit_Intervention_for_College_Students",
  },
  {
    type: "video",
    author: "TedX Talks",
    title: "TEDxTC - Peter Benson - Sparks: How Youth Thrive",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/6778ae1177d43b89f3adf049_Screenshot%202025-01-03%20at%207.41.48%E2%80%AFPM.png",
    imageAlt: "TEDxTC - Peter Benson - Sparks: How Youth Thrive",
    href: "https://www.youtube.com/watch?v=TqzUHcW58Us",
  },
  {
    type: "books",
    author: "Gwinn & Hellman",
    title: "Hope Rising: How the Science of Hope Can Change Your Life",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/677892d8f6ef7ca3e1f159fd_book_hope-rising.jpg",
    imageAlt: "Hope Rising: How the Science of Hope Can Change Your Life",
    href: "https://www.amazon.com/Hope-Rising-Science-HOPE-Change/dp/168350965X",
  },
  {
    type: "articles",
    author: "C. R. Snyder, Kevin L. Rand, & David R. Sigmon",
    title: "\u201cHope Theory\u201d",
    image: `${IMG}/CS-Thumbnail_1.webp`,
    imageAlt: "\u201cHope Theory\u201d",
    href: "https://teachingpsychology.files.wordpress.com/2012/02/hope-theory.pdf",
  },
  {
    type: "books",
    author: "Book Shane J Lopez, Ph.D.",
    title: "Making Hope Happen",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/677892185f630d5a2dbac268_book_making-hope-happen.jpg",
    imageAlt: "Making Hope Happen",
    href: "https://www.amazon.com/Making-Hope-Happen-Create-Yourself/dp/1451666233",
  },
  {
    type: "articles",
    author: "Elijah R. Murphy",
    title: "\u201cHope and Well-Being: A Decade of Research\u201d",
    image: `${IMG}/CS-Thumbnail_1.webp`,
    imageAlt: "\u201cHope and Well-Being: A Decade of Research\u201d",
    href: "https://www.sciencedirect.com/science/article/abs/pii/S2352250X23000039",
  },
  {
    type: "books",
    author: "C.R. Synder, Ph.D.",
    title: "Psychology of Hope: You Can Get Here from There",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/67789149ddcd251706c9e4a2_book_psychology-of-hope.jpg",
    imageAlt: "Psychology of Hope: You Can Get Here from There",
    href: "https://www.amazon.com/Psychology-Hope-You-Here-There/dp/0743254449/?adgrpid=61851652213",
  },
];

/**
 * Faithful port of `section.hero-cs-section`
 * (`hero-resources-for-work-ahead`) from `hopeward-26/resources.html`.
 * The type-filter behavior reproduces the source page's inline script: clicking
 * an active filter clears it; matching is by `data-resource-type`.
 */
export function ResourcesPage() {
  const [activeFilter, setActiveFilter] = useState<ResourceType | null>(null);

  function handleFilter(value: ResourceType) {
    setActiveFilter((current) => (current === value ? null : value));
  }

  return (
    <section
      className="section hero-cs-section"
      data-section-id="hero-resources-for-work-ahead"
      data-section-name="hero-resources-for-work-ahead"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-cs-hero">
          <div className="headline-cs">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">Resources</div>
            </div>
            <h1>Resources for the work ahead</h1>
            <div className="text-wrap-cs-hero">
              <div>
                Practical guides, templates, and tools to help nonprofits and
                collaboratives plan, execute, and measure impact.
              </div>
            </div>
          </div>
          <div
            aria-label="Filter resources by type"
            className="resources-filters"
            role="group"
          >
            {FILTERS.map((filter) => {
              const active = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  aria-pressed={active}
                  className={`cta-main resources-filter w-inline-block${
                    active ? " is-active" : ""
                  }`}
                  data-resource-filter={filter.value}
                  type="button"
                  onClick={() => handleFilter(filter.value)}
                >
                  <div className="button-text-mask">
                    <div className="button-text">{filter.label}</div>
                  </div>
                  <div className="button-bg" />
                </button>
              );
            })}
          </div>
        </div>
        <div className="customer-stories">
          <div className="cs-halves">
            {CARDS.map((card, index) => {
              const hidden = activeFilter !== null && card.type !== activeFilter;
              return (
                <div
                  key={`${card.type}-${index}`}
                  className="cs-item"
                  data-resource-type={card.type}
                  hidden={hidden}
                >
                  <ResourceCard card={card} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
