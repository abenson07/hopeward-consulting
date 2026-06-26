const IMG = "/images";

type AudienceCard = {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  hoverLabel: string;
};

const CARDS: AudienceCard[] = [
  {
    href: "/organizations",
    image: `${IMG}/organizations-card.jpg`,
    eyebrow: "Organizational Strategy",
    title: "Organizations",
    subtitle: "and the people who power them",
    hoverLabel: "How we work with organizations",
  },
  {
    href: "/collaboratives",
    image: `${IMG}/collaboratives-card.jpg`,
    eyebrow: "Collective Impact",
    title: "Collaboratives",
    subtitle: "the change makers within them",
    hoverLabel: "How we work with collaboratives",
  },
];

function ArrowIcon() {
  return (
    <div className="icon-link-arrow large-light w-embed">
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

function ExpandableCard({ card }: { card: AudienceCard }) {
  return (
    <a className="card-expandable w-inline-block" href={card.href}>
      <div className="image-wrap-expandable">
        <img
          alt=""
          className="image-cover parallax"
          loading="lazy"
          src={card.image}
        />
      </div>
      <div className="expandable-top-tile">
        <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
          <div className="eyebrow-circle" />
          <div className="label-small">{card.eyebrow}</div>
        </div>
        <div className="expandable-title-stack">
          <div className="text-h6">{card.title}</div>
          <div className="text-small">{card.subtitle}</div>
        </div>
      </div>
      <div className="expandable-bottom-tile">
        <div className="expandable-cta">
          <span className="expandable-hover-label">{card.hoverLabel}</span>
          <div className="expandable-icon">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className="overlay-expandable" />
    </a>
  );
}

/**
 * Faithful port of the original Hopeward "audience cards" section
 * (`section.template-home-a-section`, `audience-cards-organizations-collaboratives`)
 * from `hopeward-26/index.html`. Styled by the global Webflow stylesheets.
 *
 * Source card links (`organizations.html`, `collaboratives.html`) are mapped to
 * the app routes `/organizations` and `/collaboratives`.
 */
export function OrgCollabSection() {
  return (
    <section
      className="section template-home-a-section"
      data-section-id="audience-cards-organizations-collaboratives"
      data-section-name="audience-cards-organizations-collaboratives"
      id="templates"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-template">
          <div className="headline-template-top-tile">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">
                Trusted by Mission-Driven Leaders
              </div>
            </div>
            <h2 className="text-h4 no-margins">
              Whether you lead an organization or convene a network, we meet you
              where the work is the hardest and help you move it forward.
            </h2>
          </div>
        </div>
        <div className="w-layout-grid expandable-halves">
          {CARDS.map((card) => (
            <ExpandableCard key={card.href} card={card} />
          ))}
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
