const IMG = "/images";

/**
 * Faithful port of the original Hopeward homepage intro/definition section
 * (`section.home-b-about-section`, `home-hope-definition`) from
 * `hopeward-26/index.html`. Styled entirely by the global Webflow stylesheets.
 *
 * The `id` on the right column is kept verbatim because the source CSS targets
 * it for grid placement (`#w-node-..._9f2277ec { justify-self: end }`).
 */
export function HomeIntro() {
  return (
    <section
      className="section home-b-about-section"
      data-section-id="home-hope-definition"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-home-b-about">
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small">
              What it feels like to move Hopeward
            </div>
          </div>
          <div className="heading-slider-home-a">
            <div className="text-h5">
              Hope isn&apos;t optimism. It&apos;s a cognitive process with clear
              goals, particle pathways, and the sustained agency to keep moving
              forward.
            </div>
          </div>
        </div>
        <div className="w-layout-grid home-b-about-images">
          <div className="left-home-b-about">
            <div className="home-b-about-image">
              <img
                alt=""
                className="image-cover parallax"
                loading="lazy"
                src={`${IMG}/home-b-about-left.jpg`}
              />
            </div>
          </div>
          <div
            className="right-home-b-about"
            id="w-node-_0e74643d-89ff-26a6-18e4-31a1dc29b317-9f2277ec"
          >
            <div className="home-b-about-image small">
              <img
                alt=""
                className="image-cover parallax"
                loading="lazy"
                src={`${IMG}/home-b-about-right.jpg`}
              />
            </div>
            <div className="text-wrap-home-b-about">
              <div>
                Most mission-driven leaders aren&apos;t lacking ideas of
                commitment, what gets in the way is complexity, competing
                priorities, and the slow erosion of energy that comes from
                working hard without always seeing traction. If you&apos;ve sat
                in a room where the mission feels clear, but the path forward
                doesn&apos;t you already understand why hope matters in this
                work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
