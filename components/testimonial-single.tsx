const IMG = "/images";

/**
 * Faithful port of the original Hopeward founder testimonial section
 * (`section.cs-testimonial-section`, `founder-testimonial`) from
 * `hopeward-26/index.html`. Styled by the global Webflow stylesheets.
 */
export function TestimonialSingle() {
  return (
    <section
      className="section cs-testimonial-section"
      data-section-id="founder-testimonial"
      data-section-name="founder-testimonial"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-testimonial">
          <div className="testimonial-top-tile">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">From Founder</div>
            </div>
            <h4 className="no-margins">
              &ldquo;Working with Hopeward was incredible! Their savviness in
              navigating challenges across both our Board and Staff showed
              exceptional emotional intelligence. Their evaluation expertise
              went above and beyond our expectations. Plus their ability to
              manage the project with skill and flexibility, always responding
              to our internal needs, was a standout&rdquo;
            </h4>
          </div>
          <div className="testimonial-bottom-tile">
            <div className="image-wrap-testimonial">
              <img
                alt="Tom Vellenga"
                className="image-cover"
                loading="lazy"
                src={`${IMG}/tom-vellenga.png`}
              />
            </div>
            <div className="text-wrap-testimonial-author">
              <div className="text-small">&mdash; Tom Vellenga</div>
              <div className="text-small text-dark-64">
                Executive Director, Communities Together, Inc. | Bethesda,
                Maryland
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
