/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

const HERO_IMAGE =
  "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c607f5947824a1a2bd6fd_7%20Tips%20to%20Make%20Grant%20Writing%20a%20Winning%20Process.jpeg";

/**
 * Faithful port of `section.hero-blog-section` (`blog-hero`) from
 * `hopeward-26/blog.html`. The original Webflow stylesheets are loaded
 * globally in `app/layout.tsx`, so this keeps the source DOM and classes
 * intact and lets that CSS style the section.
 */
export function BlogHero() {
  return (
    <section
      className="section hero-blog-section"
      data-section-id="blog-hero"
      data-section-name="blog-hero"
    >
      <div className="blog-overlay-gradient" />
      <div className="hero-featured">
        <div className="blog-bg">
          <img
            alt="7 Tips to Make Grant Writing a Winning Process"
            className="image-cover"
            loading="lazy"
            sizes="100vw"
            src={HERO_IMAGE}
          />
          <div className="overlay-blog-hero" />
        </div>
      </div>
    </section>
  );
}
