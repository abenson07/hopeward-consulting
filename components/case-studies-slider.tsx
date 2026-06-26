"use client";

import * as React from "react";

const IMG = "/images";
const PARTNERS = "/new_images/partners";

type CaseStudy = {
  image: string;
  logo: string;
  author: string;
  authorRole: string;
  eyebrow: string;
  quote: string;
  stat: string;
  statCaption: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    image: `${IMG}/About-Image_2.webp`,
    logo: `${PARTNERS}/cti.png`,
    author: "— Tom Vellenga",
    authorRole: "Executive Director, Communities Together, Inc.",
    eyebrow: "Communities Together",
    quote:
      "\u201CWorking with Hopeward felt like being heard, then gently guided toward clarity across our board and staff.\u201D",
    stat: "40%",
    statCaption: "Increase in cross-team alignment within the first year",
  },
  {
    image: `${IMG}/Gallery-Image_1.webp`,
    logo: `${PARTNERS}/lisc.png`,
    author: "— Maria Santos",
    authorRole: "Program Director, Local Initiatives Support Corporation",
    eyebrow: "LISC",
    quote:
      "\u201CHopeward helped us turn a fragmented network conversation into a shared plan partners could actually execute.\u201D",
    stat: "3x",
    statCaption: "More network partners engaged in coordinated planning",
  },
  {
    image: `${IMG}/Team-Member-Image_1.webp`,
    logo: `${PARTNERS}/masn.png`,
    author: "— James Porter",
    authorRole: "Executive Director, Missouri AfterSchool Network",
    eyebrow: "Missouri AfterSchool Network",
    quote:
      "\u201CTheir evaluation expertise went above and beyond our expectations, with flexibility that matched how we work.\u201D",
    stat: "72%",
    statCaption: "Of partners reporting clearer pathways to sustained action",
  },
];

/** Decorative blurred backdrops behind the slider (`.slide-large-image`). */
const BACKDROPS = [
  `${IMG}/Testimonial-Image-2_1.webp`,
  `${IMG}/Testimonial-Image_1.webp`,
  `${IMG}/Testimonial-Image-1_1.webp`,
];

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <div
      className={`icon-team-slider${direction === "prev" ? " prev" : ""} w-embed`}
    >
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 20 20"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "prev" ? (
          <path
            d="M15.8307 10.0013L4.9974 10.0013M9.9974 15.8346L4.16406 10.0013L9.99739 4.16797"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M4.16406 10.0013H14.9974M9.99739 4.16797L15.8307 10.0013L9.99739 15.8346"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </div>
  );
}

function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <a className="card-case-long w-inline-block" href="/case-study-template">
      <div className="left-case-long">
        <div className="image-wrap-case-long">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            src={study.image}
          />
          <div className="overlay-top-cs" />
          <div className="overlay-image-case-long" />
        </div>
        <img
          alt=""
          className="logo-cs-card large"
          loading="lazy"
          src={study.logo}
        />
        <div className="author-case-long">
          <div className="text-small">{study.author}</div>
          <div className="text-small text-light-64">{study.authorRole}</div>
        </div>
      </div>
      <div className="right-case-long">
        <div className="case-long-top-tile">
          <div className="eyebrow light">
            <div className="eyebrow-circle" />
            <div className="label-small">{study.eyebrow}</div>
          </div>
          <div className="text-h4">{study.quote}</div>
        </div>
        <div className="case-long-bottom-tile">
          <div className="cs-number-tile">
            <div className="text-h1">{study.stat}</div>
            <div className="text-small text-light-64">{study.statCaption}</div>
          </div>
          <div className="link-cs-card">
            <div>Read case study</div>
            <div className="icon-wrap-card-link">
              <div className="icon-inner-card">
                <div className="icon-link-arrow w-embed">
                  <svg
                    fill="none"
                    height="100%"
                    viewBox="0 0 16 16"
                    width="100%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987M8.0026 12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="card-link-bg" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

/**
 * Faithful port of the original Hopeward case-studies slider
 * (`section.slider-home-b-section`, `home-case-studies`) from
 * `hopeward-26/index.html`. The Webflow `w-slider` classes are preserved for
 * styling, with a minimal React state layer driving the prev/next track
 * because `webflow.js` is not loaded in this app.
 */
export function CaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const total = CASE_STUDIES.length;

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section
      className="section slider-home-b-section"
      data-section-id="home-case-studies"
    >
      {BACKDROPS.map((src, index) => (
        <div className={`slide-large-image _${index + 1}`} key={src}>
          <img alt="" className="image-cover" loading="lazy" src={src} />
        </div>
      ))}
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-slider-home-b">
          <div className="divider-light-16" />
          <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
            <div className="eyebrow-circle" />
            <div className="label-small">Success stories</div>
          </div>
          <div className="heading-home-b-slider">
            <h2 className="no-margins">From idea to sustainable success</h2>
          </div>
        </div>
        <div className="slider w-slider">
          <div
            className="mask-testimonial-home-b w-slider-mask"
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                display: "flex",
                transition: "transform 0.9s cubic-bezier(0.6, 0.04, 0.35, 1)",
                transform: `translateX(calc(${currentSlide} * (100% + 8px) * -1))`,
              }}
            >
              {CASE_STUDIES.map((study) => (
                <div
                  className="slide-testimonial-home-b w-slide"
                  key={study.eyebrow}
                  style={{ flex: "0 0 100%" }}
                >
                  <CaseCard study={study} />
                </div>
              ))}
            </div>
          </div>
          <div
            className="slider-button-features prev dark w-slider-arrow-left"
            onClick={handlePrev}
            role="button"
            tabIndex={0}
            aria-label="Previous slide"
          >
            <ArrowIcon direction="prev" />
          </div>
          <div
            className="slider-button-features next dark w-slider-arrow-right"
            onClick={handleNext}
            role="button"
            tabIndex={0}
            aria-label="Next slide"
          >
            <ArrowIcon direction="next" />
          </div>
          <div className="navigation-testimonial-slider w-slider-nav w-round" />
        </div>
      </div>
      <div className="image-wrap-home-b-slider">
        <img
          alt=""
          className="image-cover"
          loading="lazy"
          src={`${IMG}/Testimonial-Image-2_1.webp`}
        />
      </div>
      <div className="overlay-dark-64" />
    </section>
  );
}
