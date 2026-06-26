const IMG = "/images";

/**
 * Faithful port of the deliverables section
 * (`section.home-a-system-section`, `deliverables-tangibles-intangibles`) from
 * `hopeward-26/how-we-work.html`. Reproduces the source DOM and class names
 * verbatim so the global Webflow CSS (loaded in `app/layout.tsx`) styles it.
 */
export function TangiblesIntangibles() {
  return (
    <section
      className="section home-a-system-section home-a-system-section--how-we"
      data-section-id="deliverables-tangibles-intangibles"
      data-section-name="deliverables-tangibles-intangibles"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-system-home-a">
          <h2>
            Hopeward exists at the intersection of strategy, collaboration, and
            sustained impact
          </h2>
        </div>
        <div className="w-layout-grid column-halves reverse">
          <div className="image-wrap-column image-wrap-column--sticky-how-we">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={`${IMG}/Gallery-Image_1.webp`}
            />
          </div>
          <div
            className="content-column content-column--how-we-system"
            id="w-node-_4de5fbbb-68b3-6789-f9d7-6428af4325e0-0aabc371"
          >
            <div className="headline-column">
              <div className="divider-light-16" />
              <div
                className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c"
                data-wf--eyebrow--variant="light"
              >
                <div className="eyebrow-circle" />
                <div className="label-small">deliverables</div>
              </div>
              <div className="text-large">
                At Hopeward, we believe a key ingredient often missing in the
                journey toward programmatic, organizational, and community success
                is hope. We understand that to achieve true success within
                ourselves, our teams, and our communities, we must ignite and
                stoke the flames of possibility.
                <br />
                <br />
                It&apos;s about fostering a deep-seated belief in the
                transformative potential of the future and recognizing that each
                one of us holds the power to enact meaningful change.
              </div>
            </div>
            <div className="hopeward-stats-stack">
              <div className="hopeward-sectioned-list__group">
                <p className="text-h7 no-margins">Tangibles</p>
                <ul className="hopeward-tangible-list text-body">
                  <li>Services tailored to meet your needs</li>
                  <li>Clear timelines and milestones</li>
                  <li>Regular project updates</li>
                  <li>Deliverables that amplify your work</li>
                  <li>Iteration and quality improvement</li>
                  <li>End results that maximize your impact</li>
                </ul>
              </div>
              <div className="hopeward-sectioned-list__group">
                <p className="text-h7 no-margins">The Intangibles</p>
                <ul className="hopeward-tangible-list text-body">
                  <li>
                    We care about you and the people you serve - we are ready to
                    work alongside you
                  </li>
                  <li>
                    Life happens and things change - we are ready to adapt with
                    you
                  </li>
                  <li>
                    Sometimes things don&apos;t go as planned- we navigate the
                    unexpected challenges, keeping momentum and moving towards
                    your end goals
                  </li>
                  <li>
                    We have been there - our consultants have direct experience
                    and bring a realistic understanding of what it takes to do
                    the job
                  </li>
                  <li>
                    We focus on hope - we believe the future can be different,
                    and that we each have the power to make it different
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
