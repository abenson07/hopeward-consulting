const IMG = "/images";

/**
 * Faithful port of the original Hopeward science of hope section
 * (`section.hero-about-a-section`, `science-of-hope`) from
 * `hopeward-26/about.html`.
 */
export function HopeIntroBlock() {
  return (
    <section
      className="section hero-about-a-section"
      data-section-id="science-of-hope"
      data-section-name="science-of-hope"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-about-a">
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small" data-id="science-of-hope-eyebrow">
              The science of hope
            </div>
          </div>
          <h1 data-id="science-of-hope-title">
            It all begins with{" "}
            <span className="headline-home-b-accent">Hope</span>.
          </h1>
          <div>
            Our approach centers on the transformative power of hope and draw on
            insights from influential researchers such as Shane J. Lopez,
            Charles R. Snyder. At Hopeward, we help individuals and
            organizations cultivate hope, so that they can create the futures
            they want to see. We believe in supporting and developing Hope
            Champions within organizations and provide coaching to cultivate a
            hope-centered mindset.
          </div>
          <a
            className="cta-main w-inline-block"
            data-id="science-of-hope-cta-1"
            data-wf--cta-main--variant="secondary-dark"
            href="/the-science-of-hope"
          >
            <div className="button-text-mask">
              <div className="button-text">Learn more</div>
            </div>
            <div className="button-bg" />
          </a>
        </div>
        <div className="w-layout-grid about-a-hero-halves">
          <div className="image-wrap-about-a">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={`${IMG}/About-Image_2.webp`}
            />
          </div>
          <div className="image-wrap-about-a">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={`${IMG}/About-Image_1.webp`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
