const IMG = "/images";

function ArrowIcon() {
  return (
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
  );
}

/**
 * Faithful port of the original Hopeward audience cards section
 * (`section.template-home-a-section`, `audience-cards-empowering-mission`)
 * from `hopeward-26/about.html`.
 */
export function EmpoweringMission() {
  return (
    <section
      className="section template-home-a-section"
      data-section-id="audience-cards-empowering-mission"
      data-section-name="audience-cards-empowering-mission"
      id="templates"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-template">
          <div className="headline-template-top-tile">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div
                className="label-small"
                data-id="audience-cards-empowering-mission-eyebrow"
              >
                Webflow template
              </div>
            </div>
            <h2
              className="text-h4 no-margins"
              data-id="audience-cards-empowering-mission-heading"
            >
              Empowering you and your mission
            </h2>
          </div>
        </div>
        <div className="w-layout-grid expandable-halves">
          <a
            className="card-expandable w-inline-block"
            data-id="audience-cards-empowering-mission-organizations-card"
            href="/organizations"
          >
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
              <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                <div className="eyebrow-circle" />
                <div
                  className="label-small"
                  data-id="audience-cards-empowering-mission-eyebrow-2"
                >
                  Green Cities
                </div>
              </div>
              <div
                className="text-h6"
                data-id="audience-cards-empowering-mission-organizations-card-title"
              >
                Organizations
              </div>
              <div className="text-small">and the people who power them</div>
            </div>
            <div className="expandable-bottom-tile">
              <div className="expandable-cta">
                <span className="expandable-hover-label">
                  How we work with organizations
                </span>
                <div className="expandable-icon">
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <div className="overlay-expandable" />
          </a>
          <a
            className="card-expandable w-inline-block"
            data-id="audience-cards-empowering-mission-collaboratives-card"
            href="/collaboratives"
          >
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
              <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                <div className="eyebrow-circle" />
                <div
                  className="label-small"
                  data-id="audience-cards-empowering-mission-eyebrow-3"
                >
                  Sustainability
                </div>
              </div>
              <div
                className="text-h6"
                data-id="audience-cards-empowering-mission-collaboratives-card-title"
              >
                Collaboratives
              </div>
              <div className="text-small">the change makers within them</div>
            </div>
            <div className="expandable-bottom-tile">
              <div className="expandable-cta">
                <span className="expandable-hover-label">
                  How we work with collaboratives
                </span>
                <div className="expandable-icon">
                  <ArrowIcon />
                </div>
              </div>
            </div>
            <div className="overlay-expandable" />
          </a>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
