const NEW_IMG = "/new_images";

/**
 * Faithful port of the original Hopeward per-service client story / testimonial
 * (`section.column-home-c-section`, `client-story-assessment`) from the service
 * detail pages in `hopeward-26/` (source: `assessment-planning.html`). The
 * original Webflow stylesheets are loaded globally in `app/layout.tsx`, so this
 * reproduces the source DOM structure and class names verbatim and lets that
 * CSS do the styling.
 *
 * The section repeats across every service page with the same layout but
 * different copy/imagery, so the varying content is exposed as props while the
 * structure stays identical to the source.
 */
type ServiceClientStoryProps = {
  sectionId?: string;
  tag?: string;
  eyebrow?: string;
  quote?: string;
  authorName?: string;
  authorOrg?: string;
  image?: string;
  imageAlt?: string;
};

export function ServiceClientStory({
  sectionId = "client-story-assessment",
  tag = "Community voices",
  eyebrow = "The challenge",
  quote = "\"We needed one shared picture of community needs before we committed funding. Hopeward's assessment process gave our board clarity—and confidence—in what to do next.\"",
  authorName = "— Director of Programs",
  authorOrg = "Regional housing collaborative",
  image = `${NEW_IMG}/katie-killen.png`,
  imageAlt = "Community partners in discussion",
}: ServiceClientStoryProps = {}) {
  return (
    <section
      className="section column-home-c-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid column-halves reverse">
          <div className="image-wrap-column">
            <img
              alt={imageAlt}
              className="image-cover parallax"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
              src={image}
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
              <div className="eyebrow" data-id={`${sectionId}-lede-1`}>
                <div className="eyebrow-circle" />
                <div className="label-small" data-id={`${sectionId}-eyebrow`}>
                  {eyebrow}
                </div>
              </div>
              <div className="text-h3" data-id={`${sectionId}-lede-2`}>
                {quote}
              </div>
              <div className="author-case-long" data-id={`${sectionId}-lede-3`}>
                <div className="text-small">{authorName}</div>
                <div className="text-small text-dark-64">{authorOrg}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
