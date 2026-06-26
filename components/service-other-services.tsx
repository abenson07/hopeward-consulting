const ArrowIcon = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 26 26"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Faithful port of the original Hopeward "explore our other services" list
 * (`section.services-home-c-section`, `explore-other-services`) from the
 * service detail pages in `hopeward-26/` (source: `assessment-planning.html`).
 * The original Webflow stylesheets are loaded globally in `app/layout.tsx`, so
 * this reproduces the source DOM structure and class names verbatim and lets
 * that CSS do the styling. The section's dark-on-light color treatment comes
 * from the service-page inline-<style> rules ported into
 * `public/css/hopeward.css`.
 *
 * The section repeats across every service page with the same layout but a
 * different list of other services, so the items are exposed as props.
 */
type ServiceOtherServicesItem = {
  heading: string;
  href: string;
};

type ServiceOtherServicesProps = {
  sectionId?: string;
  title?: string;
  items?: ServiceOtherServicesItem[];
};

export function ServiceOtherServices({
  sectionId = "explore-other-services",
  title = "Explore our other services",
  items = [
    {
      heading: "Evaluation & Impact Reporting",
      href: "/evaluation-impact-reporting",
    },
    {
      heading: "Program Strategy & Execution",
      href: "/program-strategy-execution",
    },
    {
      heading: "Collaborative Leadership & Collective Impact",
      href: "/collaborative-leadership-collective-impact",
    },
    {
      heading: "Community Engagement & Stakeholder Relations",
      href: "/community-engagement-stakeholder-relations",
    },
  ],
}: ServiceOtherServicesProps = {}) {
  return (
    <section
      className="section services-home-c-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="title-service-grid">
          <h2 className="no-margins" data-id={`${sectionId}-title`}>
            {title}
          </h2>
        </div>
        <div className="service-list">
          {items.map((item, index) => (
            <a
              className="service-item w-inline-block"
              href={item.href}
              key={index}
            >
              <div className="left-service-item">
                <div className="text-h7">{item.heading}</div>
                <div className="icon-service-arrow w-embed">{ArrowIcon}</div>
              </div>
              <div className="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
                <div className="eyebrow-circle" />
                <div className="label-small">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
