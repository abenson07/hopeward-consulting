/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

export type ResourceType = "video" | "books" | "articles";

/**
 * Per-variant presentation: the source uses a different tag label and CTA verb
 * for each resource type, but the card markup is otherwise identical.
 */
export const RESOURCE_VARIANTS: Record<
  ResourceType,
  { tag: string; linkLabel: string }
> = {
  video: { tag: "Video", linkLabel: "Watch resource" },
  books: { tag: "Books", linkLabel: "View resource" },
  articles: { tag: "Articles", linkLabel: "Read resource" },
};

export type ResourceCardData = {
  type: ResourceType;
  author: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

function CardLinkArrow() {
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
          d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987M8.0026 12.6654"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Faithful port of the `a.card-cs` resource card from
 * `hopeward-26/resources.html`. Renders one of three variants
 * (video / books / articles) selected by `card.type`.
 */
export function ResourceCard({ card }: { card: ResourceCardData }) {
  const variant = RESOURCE_VARIANTS[card.type];

  return (
    <a
      className="card-cs w-inline-block"
      href={card.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="image-wrap-cs-card">
        <img
          alt={card.imageAlt}
          className="image-cover parallax"
          loading="lazy"
          src={card.image}
        />
        <div className="overlay-tag-card">
          <div className="card-tag">
            <div className="label-small">{variant.tag}</div>
          </div>
        </div>
      </div>
      <div className="content-cs-card">
        <div className="cs-card-top-tile">
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small">{card.author}</div>
          </div>
          <div className="text-h7">{card.title}</div>
        </div>
        <div className="cs-card-bottom-tile">
          <div className="link-cs-card">
            <div>{variant.linkLabel}</div>
            <div className="icon-wrap-card-link">
              <div className="icon-inner-card">
                <CardLinkArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
