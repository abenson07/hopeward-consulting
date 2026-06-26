const IMG = "/images";

function LinkArrowIcon() {
  return (
    <div className="icon-link-arrow w-embed">
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

function CaseStudyCard({ headingId }: { headingId: string }) {
  return (
    <a className="card-marquee w-inline-block" href="/blog">
      <div className="card-marquee-top-tile">
        <div className="label-small text-light-48">See how we helped FRANCO</div>
        <div className="text-h4" data-id={headingId}>
          We approached Evermind™ looking for something flexible yet timeless
          solutions.
        </div>
      </div>
      <div className="card-marquee-bottom-tile">
        <div className="cs-number-tile">
          <div className="text-h1">8x</div>
          <div className="text-small text-light-64">Faster launch times.</div>
        </div>
        <div className="link-cs-card">
          <div>Read case study</div>
          <div className="icon-wrap-card-link">
            <div className="icon-inner-card" link-icon="">
              <LinkArrowIcon />
            </div>
            <div className="card-link-bg" link-bg="" />
          </div>
        </div>
      </div>
    </a>
  );
}

function MarqueeTrack({
  headingId,
  ariaHidden = false,
}: {
  headingId: string;
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="single-marquee-images"
      aria-hidden={ariaHidden || undefined}
    >
      <div className="image-wrap-home-b-marquee">
        <img
          alt=""
          className="image-cover parallax"
          loading="lazy"
          sizes="(max-width: 1128px) 100vw, 1128px"
          src={`${IMG}/Testimonial-Image_1.webp`}
        />
      </div>
      <div className="image-wrap-home-b-marquee large">
        <img
          alt=""
          className="image-cover"
          loading="lazy"
          sizes="(max-width: 1592px) 100vw, 1592px"
          src={`${IMG}/Feature-Image_1.webp`}
        />
      </div>
      <div className="image-wrap-home-b-marquee cube">
        <img
          alt=""
          className="image-cover parallax"
          loading="lazy"
          sizes="(max-width: 720px) 100vw, 720px"
          src={`${IMG}/Marquee-Cube_1.webp`}
        />
      </div>
      <div className="image-wrap-home-b-marquee cube">
        <img
          alt=""
          className="image-cover parallax"
          loading="lazy"
          sizes="(max-width: 680px) 100vw, 680px"
          src={`${IMG}/About-B_2.webp`}
        />
        <div className="overlay-with-image">
          <img
            alt=""
            className="wdiget-1-marque"
            loading="lazy"
            src={`${IMG}/Widget.svg`}
          />
        </div>
      </div>
      <CaseStudyCard headingId={headingId} />
      <div className="image-wrap-home-b-marquee large">
        <img
          alt=""
          className="image-cover parallax"
          loading="lazy"
          sizes="(max-width: 1984px) 100vw, 1984px"
          src={`${IMG}/Service-Image_1.webp`}
        />
        <div className="overlay-with-image">
          <img
            alt=""
            className="widget-overlay"
            loading="lazy"
            src={`${IMG}/Widget-1.svg`}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Faithful port of the original Hopeward about hero
 * (`section.hero-home-b-section`, `hero-not-average-consultants`) from
 * `hopeward-26/about.html`.
 */
export function AboutHero() {
  return (
    <section
      className="section hero-home-b-section"
      data-section-id="hero-not-average-consultants"
      data-section-name="hero-not-average-consultants"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-home-b">
          <div className="hero-link-new w-inline-block">
            <div className="text-small">About Hopeward</div>
          </div>
          <h1 data-id="hero-not-average-consultants-title">
            We&apos;re <span className="headline-home-b-accent">not</span> your
            average consultants.
          </h1>
          <div className="headline-home-b-bottom-tile">
            <div className="text-wrap-home-b-hero">
              <div data-id="hero-not-average-consultants-lede-1">
                At Hopeward, we want to change the stereotype about consultants.
                We&apos;re ready to roll up our sleeves, get a little messy, and
                tackle the tough stuff together. We want to understand your team,
                your challenges, and your dreams. Forget the one-size-fits-all
                approach, we&apos;re all about customizing support to fit your
                unique situation.
              </div>
              <div data-id="hero-not-average-consultants-lede-2">
                We believe that meaningful change comes from genuine
                collaboration. If you find yourself in need of some real
                teamwork, we&apos;re committed to walking alongside you every
                step of the way, offering expertise, encouragement, and a bit of
                fun to keep things energized.
              </div>
              <div data-id="hero-not-average-consultants-lede-3">
                Together, we&apos;ll create tangible solutions that feel right
                for your organization, not just another list of items to check
                off your to-do-list.
              </div>
            </div>
            <div className="button-wrap-home-b">
              <a
                className="cta-main w-inline-block"
                data-hopeward-book-modal=""
                data-id="hero-not-average-consultants-cta-1"
                data-wf--cta-main--variant="accent"
                href="#"
              >
                <div className="button-text-mask">
                  <div className="button-text">Submit RFP</div>
                </div>
                <div className="button-bg" />
              </a>
              <a
                className="cta-book w-inline-block"
                data-id="hero-not-average-consultants-cta-2"
                href="#"
              >
                <div className="left-cta-book">
                  <div className="image-wrap-cta-book">
                    <img
                      alt=""
                      className="image-cover"
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                      src={`${IMG}/Author_1.webp`}
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
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
      <div className="master-marquees">
        <div className="marquee-images">
          <MarqueeTrack headingId="hero-not-average-consultants-heading" />
          <MarqueeTrack
            headingId="hero-not-average-consultants-heading-2"
            ariaHidden
          />
          <MarqueeTrack
            headingId="hero-not-average-consultants-heading-3"
            ariaHidden
          />
        </div>
        <div className="shadow-marquee" />
        <div className="shadow-marquee right" />
      </div>
    </section>
  );
}
