const IMG = "/images";

/**
 * Faithful port of the original Hopeward homepage hero
 * (`section.hero-home-b-section`, `hero-actionable-pathways-forward`) from
 * `hopeward-26/index.html`. The original Webflow stylesheets are loaded
 * globally in `app/layout.tsx`, so this reproduces the source DOM structure
 * and class names verbatim and lets that CSS do the styling. The image
 * marquee runs on the pure-CSS fallback defined in `public/css/hopeward.css`.
 */
function MarqueeImages({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="single-marquee-images single-marquee-images-100"
      aria-hidden={ariaHidden || undefined}
    >
      <div className="image-wrap-home-b-marquee">
        <img
          alt="Workshop presentation with participants seated around tables"
          className="image-cover parallax"
          loading="lazy"
          src={`${IMG}/hero-marquee-workshop.jpg`}
        />
      </div>
      <div className="image-wrap-home-b-marquee large">
        <img
          alt=""
          className="image-cover"
          loading="lazy"
          src={`${IMG}/Feature-Image_1.webp`}
        />
        <div className="overlay-with-image">
          <img
            alt=""
            className="widget-overlay"
            loading="lazy"
            src={`${IMG}/Frame-1000004139.svg`}
          />
        </div>
      </div>
      <div className="image-wrap-home-b-marquee cube">
        <img
          alt="Presenter leading a workshop with participants seated around a conference table"
          className="image-cover parallax"
          loading="lazy"
          src={`${IMG}/hero-marquee-presentation.jpg`}
        />
      </div>
      <div className="image-wrap-home-b-marquee cube">
        <img
          alt="Presenter leading a workshop with participants seated around a conference table"
          className="image-cover parallax"
          loading="lazy"
          src={`${IMG}/hero-marquee-presentation.jpg`}
        />
      </div>
      <div className="image-wrap-home-b-marquee large">
        <img
          alt=""
          className="image-cover"
          loading="lazy"
          src={`${IMG}/Feature-Image_1.webp`}
        />
        <div className="overlay-with-image">
          <img
            alt=""
            className="widget-overlay"
            loading="lazy"
            src={`${IMG}/Frame-1000004139.svg`}
          />
        </div>
      </div>
    </div>
  );
}

export function PortedHomeHero() {
  return (
    <section
      className="section hero-home-b-section"
      data-section-id="hero-actionable-pathways-forward"
      data-section-name="hero-actionable-pathways-forward"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-home-b">
          <div className="hero-link-new w-inline-block">
            <div className="text-small">A Collaborative Consultancy</div>
          </div>
          <h1>
            When the work feels tangled, we help you build{" "}
            <span className="headline-home-b-accent">
              actionable pathways forward
            </span>
            .
          </h1>
          <div className="headline-home-b-bottom-tile">
            <div className="text-wrap-home-b-hero">
              <div>
                You need a thoughtful partner who understands the weight of
                leading mission-driven work and the systems that shape it.
              </div>
              <div>
                Hopeward works alongside nonprofit and collaborative network
                leaders to ground decisions in strategy, strengthen progress
                through collaboration, and build the structures that turn good
                ideas into sustained action.
              </div>
            </div>
            <div className="button-wrap-home-b">
              <a className="cta-main w-inline-block" href="#">
                <div className="button-text-mask">
                  <div className="button-text">Find your path forward</div>
                </div>
                <div className="button-bg" />
              </a>
              <a className="cta-book w-inline-block" href="#">
                <div className="left-cta-book">
                  <div className="image-wrap-cta-book">
                    <img
                      alt="Danielle Brower"
                      className="image-cover"
                      loading="lazy"
                      src={`${IMG}/danielle-brower.jpg`}
                    />
                  </div>
                  <div className="circle-cta-book" />
                </div>
                <div className="button-text-mask">
                  <div className="book-button-text">Book a call</div>
                </div>
                <div className="book-button-bg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        className="dots"
        loading="lazy"
        src={`${IMG}/Dots.svg`}
      />
      <div className="master-marquees">
        <div className="marquee-images">
          <MarqueeImages />
          <MarqueeImages ariaHidden />
        </div>
        <div className="shadow-marquee" />
        <div className="shadow-marquee right" />
      </div>
    </section>
  );
}
