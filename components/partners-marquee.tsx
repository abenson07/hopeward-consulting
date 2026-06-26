const PARTNERS = "/new_images/partners";

type PartnerLogo = {
  file: string;
  /** Size modifier class from the source ("" = default, "large", "small"). */
  size: "" | "large" | "small";
};

const LOGOS: PartnerLogo[] = [
  { file: "artskc.png", size: "" },
  { file: "cti.png", size: "large" },
  { file: "emm.png", size: "large" },
  { file: "hmg.svg", size: "large" },
  { file: "ku.png", size: "small" },
  { file: "lisc.png", size: "large" },
  { file: "mac.png", size: "large" },
  { file: "thedrop.png", size: "large" },
  { file: "young-women-on-the-move.png", size: "large" },
  { file: "gkcrhp.png", size: "large" },
  { file: "masn.png", size: "large" },
  { file: "charlotte-street.png", size: "" },
  { file: "hall-family-foundation.png", size: "large" },
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="single-logo-marquee"
      aria-hidden={ariaHidden || undefined}
    >
      {LOGOS.map((logo) => (
        <img
          key={logo.file}
          alt=""
          className={`marquee-logo${logo.size ? ` ${logo.size}` : ""}`}
          loading="lazy"
          src={`${PARTNERS}/${logo.file}`}
        />
      ))}
    </div>
  );
}

/**
 * Faithful port of the original Hopeward partner-logos section
 * (`section.home-a-logo-section`, `partner-logos`) from `hopeward-26/index.html`.
 * Styled by the global Webflow stylesheets; the logo marquee runs on the
 * pure-CSS `hopeward-logo-marquee` fallback in `public/css/hopeward.css`.
 *
 * The source nests an inner `section.logo-section` inside the outer section;
 * that structure is preserved verbatim.
 */
export function PartnersMarquee() {
  return (
    <section
      className="section home-a-logo-section"
      data-section-id="partner-logos"
      data-section-name="partner-logos"
    >
      <section className="section logo-section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="headline-logos">
            <div className="divider-dark-16" />
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">Companies we worked with</div>
            </div>
          </div>
          <div className="master-marquees logo-marquee">
            <div className="wrap-marquee-logos">
              <LogoTrack />
              <LogoTrack ariaHidden />
            </div>
            <div className="logo-shadow" />
            <div className="logo-shadow right" />
          </div>
        </div>
      </section>
    </section>
  );
}
