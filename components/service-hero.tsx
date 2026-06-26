const IMG = "/images";

/**
 * Faithful port of the original Hopeward per-service hero
 * (`section.hero-service-section`) from the service detail pages in
 * `hopeward-26/` (source: `hero-assessment-planning` in
 * `assessment-planning.html`). The original Webflow stylesheets are loaded
 * globally in `app/layout.tsx`, so this reproduces the source DOM structure and
 * class names verbatim and lets that CSS do the styling.
 *
 * The hero repeats across every service page with the same layout but different
 * copy, so the varying content (section id, title, body) is exposed as props
 * while the CTA and image structure stay identical to the source.
 */
type ServiceHeroProps = {
  sectionId?: string;
  title?: string;
  body?: string;
};

export function ServiceHero({
  sectionId = "hero-assessment-planning",
  title = "Assessment & Planning",
  body = "Clarify needs, align stakeholders, and chart a credible plan before you invest.",
}: ServiceHeroProps = {}) {
  return (
    <section
      className="section hero-service-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-service">
          <h1 data-id={`${sectionId}-title`}>{title}</h1>
          <div className="service-bottom-tile">
            <div className="text-body">{body}</div>
            <a className="cta-book w-inline-block" href="#">
              <div className="left-cta-book">
                <div className="image-wrap-cta-book">
                  <img
                    alt=""
                    className="image-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                    src={`${IMG}/Author_1.webp`}
                    srcSet={`${IMG}/Author_1Author.webp 500w, ${IMG}/Author_1Author.webp 800w, ${IMG}/Author_1.webp 967w`}
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
        <div className="service-image-halves">
          <div className="image-wrap-service-hero">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={`${IMG}/Service-Image.jpg`}
              srcSet={`${IMG}/Service-Image.webp 500w, ${IMG}/22bba10c06075cf02042be4b2b064ae0a33f2c4a-p-800.jpg 800w, ${IMG}/Service-Image.webp 1080w, ${IMG}/Service-Image.webp 1600w, ${IMG}/Service-Image.webp 2000w, ${IMG}/Service-Image.jpg 2378w`}
            />
          </div>
          <div className="image-wrap-service-hero _2">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={`${IMG}/Service-Image_1.webp`}
            />
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
