/**
 * Faithful port of the original Hopeward per-service overview lede
 * (`section.service-about-section`, `service-overview`) from the service detail
 * pages in `hopeward-26/` (source: `assessment-planning.html`). The original
 * Webflow stylesheets are loaded globally in `app/layout.tsx`, so this
 * reproduces the source DOM structure and class names verbatim and lets that
 * CSS do the styling.
 *
 * The section repeats across every service page with the same layout but
 * different copy, so the lede text is exposed as a prop while the structure
 * stays identical to the source.
 */
type ServiceOverviewProps = {
  sectionId?: string;
  lede?: string;
};

export function ServiceOverview({
  sectionId = "service-overview",
  lede = "Assessment & Planning turns complexity into a shared picture of what matters: who is affected, what resources you have, and what a realistic path forward looks like—so the programs you build reflect real conditions and real priorities.",
}: ServiceOverviewProps = {}) {
  return (
    <section
      className="section service-about-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="text-wrap-service-about">
          <div
            className="text-h6 service-about-lead-serif"
            data-id={`${sectionId}-lede-1`}
          >
            {lede}
          </div>
        </div>
      </div>
    </section>
  );
}
