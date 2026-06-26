const IMG = "/images";

const COLUMN_IMAGE_SRCSET = [
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-500.webp 500w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-800.webp 800w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-1080.webp 1080w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-1600.webp 1600w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-2000.webp 2000w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-2600.webp 2600w`,
  `${IMG}/ad00bc9e3833b57da59864910e1aefa274793489-p-3200.webp 3200w`,
  `${IMG}/Column-Image.webp 4096w`,
].join(", ");

/**
 * Faithful port of the original Hopeward "what is <service>" explainer
 * (`section.home-a-column-section`, `what-is-assessment-planning`) from the
 * service detail pages in `hopeward-26/` (source: `assessment-planning.html`).
 * The original Webflow stylesheets are loaded globally in `app/layout.tsx`, so
 * this reproduces the source DOM structure and class names verbatim and lets
 * that CSS do the styling.
 *
 * The section repeats across every service page with the same layout but
 * different copy/imagery, so the varying content is exposed as props while the
 * structure stays identical to the source.
 */
type ServiceExplainerProps = {
  sectionId?: string;
  eyebrow?: string;
  tag?: string;
  heading?: string;
  intro?: string;
  bullets?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  image?: string;
  imageSrcSet?: string;
};

export function ServiceExplainer({
  sectionId = "what-is-assessment-planning",
  eyebrow = "What is",
  tag = "Stakeholder workshop",
  heading = "Assessment & Planning",
  intro = "We help you understand context, map opportunities and constraints, and translate what you learn into priorities everyone can stand behind. The result is a practical roadmap—owners, sequence, and measures included—that guides investment with confidence.",
  bullets = [
    "Discovery and needs assessment rooted in the people and systems you serve",
    "Facilitation that builds agreement across staff, partners, and communities",
    "Prioritized recommendations with clear rationale, timelines, and accountability",
  ],
  ctaLabel = "Check pricing",
  ctaHref = "/contact",
  image = `${IMG}/Column-Image.webp`,
  imageSrcSet = COLUMN_IMAGE_SRCSET,
}: ServiceExplainerProps = {}) {
  return (
    <section
      className="section home-a-column-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid column-halves reverse">
          <div className="image-wrap-column">
            <img
              alt=""
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={image}
              srcSet={imageSrcSet}
            />
            <div className="overlay-tag-card align-bottom">
              <div className="card-tag">
                <div className="label-small">{tag}</div>
              </div>
            </div>
          </div>
          <div className="content-column">
            <div className="headline-column">
              <div className="divider-dark-16" />
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small" data-id={`${sectionId}-eyebrow`}>
                  {eyebrow}
                </div>
              </div>
              <div className="text-h3" data-id={`${sectionId}-lede-1`}>
                {heading}
              </div>
              <div data-id={`${sectionId}-lede-2`}>
                <div>{intro}</div>
                <ul className="home-a-column-bullets">
                  {bullets.map((bullet, index) => (
                    <li key={index} data-id={`${sectionId}-bullet-${index + 1}`}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="button-wrap-figma-x-webflow"
                data-id={`${sectionId}-lede-3`}
              >
                <a
                  className="cta-main w-inline-block"
                  data-id={`${sectionId}-cta-1`}
                  href={ctaHref}
                >
                  <div className="button-text-mask">
                    <div className="button-text">{ctaLabel}</div>
                  </div>
                  <div className="button-bg w-variant-1fc0c975-6074-8465-5c95-4675ab49fe85" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
