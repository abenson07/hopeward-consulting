const IMG = "/images";

const MARQUEE_LOGOS = [
  { src: "Compnay-logo_1.svg", className: "marquee-logo" },
  { src: "Compnay-logo-1.svg", className: "marquee-logo large" },
  { src: "Compnay-logo-2.svg", className: "marquee-logo large" },
  { src: "Compnay-logo-3.svg", className: "marquee-logo large" },
  { src: "Compnay-logo-4.svg", className: "marquee-logo small" },
  { src: "Compnay-logo-5.svg", className: "marquee-logo large" },
  { src: "Compnay-logo-6.svg", className: "marquee-logo large" },
  { src: "Compnay-logo-7.svg", className: "marquee-logo large" },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="single-logo-marquee" aria-hidden={ariaHidden || undefined}>
      {MARQUEE_LOGOS.map((logo, index) => (
        <img
          key={index}
          alt=""
          className={logo.className}
          loading="lazy"
          src={`${IMG}/${logo.src}`}
        />
      ))}
    </div>
  );
}

/**
 * Faithful port of the "what we do" hero
 * (`section.hero-about-a-section`, `hero-strategy-collaboration-impact`) from
 * `hopeward-26/how-we-work.html`. Reproduces the source DOM and class names
 * verbatim so the global Webflow CSS (loaded in `app/layout.tsx`) styles it.
 * Includes the nested company-logo marquee, which runs on the pure-CSS
 * fallback defined in `public/css/hopeward.css`.
 */
export function WhatWeDoHero() {
  return (
    <section
      className="section hero-about-a-section"
      data-section-id="hero-strategy-collaboration-impact"
      data-section-name="hero-strategy-collaboration-impact"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-about-a">
          <div className="eyebrow" data-wf--eyebrow--variant="base">
            <div className="eyebrow-circle" />
            <div className="label-small">What we do</div>
          </div>
          <h1>
            Hopeward exists at the intersection of strategy, collaboration, and
            sustained impact
          </h1>
          <div>
            At Hopeward, we partner with organizations to design strategies that
            align with your mission, build internal capacity, and achieve the
            results that matter most to you and the communities that you serve.
            <br />
            <br />
            Our focus is on organizations and collaboratives, and most
            importantly the people within them. We provide tools, guidance, and
            collaborative support to help individuals in your team navigate
            challenges and amplify your impact.
          </div>
        </div>
        <div className="w-layout-grid expandable-halves">
          <a className="card-expandable w-inline-block" href="service.html">
            <div className="image-wrap-expandable">
              <img
                alt=""
                className="image-cover parallax"
                loading="lazy"
                sizes="(max-width: 680px) 100vw, 680px"
                src={`${IMG}/About-B_2.webp`}
              />
            </div>
            <div className="expandable-top-tile">
              <div
                className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c"
                data-wf--eyebrow--variant="light"
              >
                <div className="eyebrow-circle" />
                <div className="label-small">Green Cities</div>
              </div>
              <div className="text-h6">Organizations</div>
              <div className="text-small">and the people who power them</div>
            </div>
            <div className="expandable-bottom-tile">
              <div className="expandable-cta">
                <span className="expandable-hover-label">
                  How we work with organizations
                </span>
                <div className="expandable-icon">
                  <div className="icon-link-arrow large-light w-embed">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-expandable" />
          </a>
          <a className="card-expandable w-inline-block" href="service.html">
            <div className="image-wrap-expandable">
              <img
                alt=""
                className="image-cover parallax"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.9921875px"
                src={`${IMG}/Modal.webp`}
              />
            </div>
            <div className="expandable-top-tile">
              <div
                className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c"
                data-wf--eyebrow--variant="light"
              >
                <div className="eyebrow-circle" />
                <div className="label-small">Sustainability</div>
              </div>
              <div className="text-h6">Collaboratives</div>
              <div className="text-small">the change makers within them</div>
            </div>
            <div className="expandable-bottom-tile">
              <div className="expandable-cta">
                <span className="expandable-hover-label">
                  How we work with collaboratives
                </span>
                <div className="expandable-icon">
                  <div className="icon-link-arrow large-light w-embed">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay-expandable" />
          </a>
        </div>
      </div>
      <section className="section logo-section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="headline-logos">
            <div className="divider-dark-16" />
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">Companies we worked with</div>
            </div>
          </div>
          <div className="master-marquees logo-marquee">
            <div className="wrap-marquee-logos">
              <LogoTrack />
              <LogoTrack ariaHidden />
              <LogoTrack ariaHidden />
            </div>
          </div>
          <div className="logo-shadow" />
          <div className="logo-shadow right" />
        </div>
      </section>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
