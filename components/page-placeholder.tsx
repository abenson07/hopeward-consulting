import type { HopewardPageMeta } from "@/lib/hopeward-pages";

type PagePlaceholderProps = {
  page: HopewardPageMeta;
  /** Section ids already ported on this route (hidden from the queue). */
  portedSections?: string[];
};

/**
 * Dev-facing scaffold shown while a Hopeward HTML page is being ported section
 * by section. Lists remaining `data-section-id` values from the source file.
 */
export function PagePlaceholder({
  page,
  portedSections = [],
}: PagePlaceholderProps) {
  const ported = new Set(portedSections);
  const pending = page.sections.filter((id) => !ported.has(id));

  return (
    <section className="section" data-section-id="page-port-queue">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="text-wrap-service-about">
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small">Port in progress</div>
          </div>
          <h1 className="text-h3">{page.title.replace(/ \| Hopeward Consulting$/, "")}</h1>
          {page.description ? (
            <p className="text-body" style={{ marginTop: "1rem" }}>
              {page.description}
            </p>
          ) : null}
          <p className="text-body" style={{ marginTop: "1rem", opacity: 0.7 }}>
            Source: <code>{page.sourceHtml}</code>
          </p>
          {pending.length > 0 ? (
            <>
              <h2 className="text-h5" style={{ marginTop: "2rem" }}>
                Sections to port ({pending.length})
              </h2>
              <ul
                className="text-body"
                style={{ marginTop: "0.75rem", paddingLeft: "1.25rem" }}
              >
                {pending.map((sectionId) => (
                  <li key={sectionId} style={{ marginBottom: "0.35rem" }}>
                    <code>{sectionId}</code>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
