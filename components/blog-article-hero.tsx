/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

const IMG = "/images";

type BlogArticleHeroProps = {
  date?: string;
  title?: string;
  image?: string;
  imageAlt?: string;
};

const DEFAULT_PROPS: Required<BlogArticleHeroProps> = {
  date: "February 1, 2023",
  title: "7 Tips to Make Grant Writing a Winning Process",
  image:
    "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c607f5947824a1a2bd6fd_7%20Tips%20to%20Make%20Grant%20Writing%20a%20Winning%20Process.jpeg",
  imageAlt: "7 Tips to Make Grant Writing a Winning Process",
};

/**
 * Faithful port of `section.hero-article-section` (`article-hero`) from the
 * Hopeward insight detail pages (e.g.
 * `hopeward-26/insights/7-tips-to-make-grant-writing-a-winning-process.html`).
 * Props default to that article so the standalone preview matches the source.
 */
export function BlogArticleHero(props: BlogArticleHeroProps = {}) {
  const { date, title, image, imageAlt } = { ...DEFAULT_PROPS, ...props };

  return (
    <section className="section hero-article-section" data-section-id="article-hero">
      <div className="w-layout-blockcontainer main-container static w-container">
        <div className="w-layout-grid article-hero-halves">
          <div className="left-article-hero">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small">{date}</div>
            </div>
            <h1>{title}</h1>
          </div>
          <div className="article-image-placeholder">
            <div className="image-wrap-article">
              <img
                alt={imageAlt}
                className="image-cover parallax"
                loading="lazy"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
