const IMG = "/images";

/**
 * Faithful port of the original Hopeward organizations hero
 * (`section.hero-about-b-section`, `hero-organizations`) from
 * `hopeward-26/organizations.html`. The original Webflow stylesheets are loaded
 * globally in `app/layout.tsx`, so this reproduces the source DOM structure and
 * class names verbatim and lets that CSS do the styling.
 */
export function OrganizationHero() {
  return (
    <section
      className="section hero-about-b-section"
      data-section-id="hero-organizations"
      data-section-name="hero-organizations"
    >
      <div className="w-layout-blockcontainer main-container static w-container">
        <div className="master-about-b">
          <div className="headline-about-b">
            <div
              className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c"
              data-wf--eyebrow--variant="light"
            >
              <div className="eyebrow-circle" />
              <div className="label-small" data-id="hero-organizations-eyebrow">
                Organizations
              </div>
            </div>
            <h1 data-id="hero-organizations-title">
              Partnering with organizations to align, build, and deliver
            </h1>
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots-Light.svg`} />
      <div className="master-images-about-b">
        <div className="image-wrap-about-b _1" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            src={`${IMG}/About-B_5.webp`}
          />
        </div>
        <div className="image-wrap-about-b _2" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            sizes="(max-width: 680px) 100vw, 680px"
            src={`${IMG}/About-B_1.webp`}
          />
        </div>
        <div className="image-wrap-about-b _3" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            sizes="(max-width: 680px) 100vw, 680px"
            src={`${IMG}/About-B_2.webp`}
          />
        </div>
        <div className="image-wrap-about-b _4" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            sizes="(max-width: 1984px) 100vw, 1984px"
            src={`${IMG}/Service-Image_1.webp`}
          />
        </div>
        <div className="image-wrap-about-b _5" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            sizes="(max-width: 3992px) 100vw, 3992px"
            src={`${IMG}/About-B_3.webp`}
          />
        </div>
        <div className="image-wrap-about-b _6" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            src={`${IMG}/About-B_4.webp`}
          />
        </div>
        <div className="image-wrap-about-b _7" image-effect="">
          <img
            alt=""
            className="image-cover"
            loading="lazy"
            src={`${IMG}/About-B_6.webp`}
          />
        </div>
      </div>
    </section>
  );
}
