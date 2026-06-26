const IMG = "/images";

type ValueItem = {
  href: string;
  label: string;
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  image: string;
  sizes: string;
  overlay?: string;
};

const VALUES: ValueItem[] = [
  {
    href: "#eco",
    label: "Hope",
    id: "eco",
    eyebrow: "uno",
    heading: "The future is shapeable",
    body: "We believe that the future can be different, and that we each have the power to make it different.",
    image: `${IMG}/About-B_2.webp`,
    sizes: "(max-width: 680px) 100vw, 680px",
  },
  {
    href: "#green",
    label: "Quality",
    id: "green",
    eyebrow: "Duo",
    heading: "Built to last",
    body: "We strive to provide high quality services that make a lasting and positive impact.",
    image: `${IMG}/Modal.webp`,
    sizes:
      "(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.9921875px",
  },
  {
    href: "#pages",
    label: "Connection",
    id: "pages",
    eyebrow: "tres",
    heading: "Start by listening",
    body: "We care about you and the people you serve. We actively listen to the realities of where you are and what you need so that we can provide targeted services and support to help you succeed.",
    image: `${IMG}/Tab-Image_1.webp`,
    sizes:
      "(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 848px",
    overlay: `${IMG}/Widget-1.svg`,
  },
  {
    href: "#four",
    label: "Adaptability",
    id: "four",
    eyebrow: "four",
    heading: "Complexity doesn't scare us",
    body: "We are very comfortable with ambiguity and change. We understand that you are navigating complex and dynamic challenges and being able to adjust quickly and efficiently as things change is vital.",
    image: `${IMG}/Modal.webp`,
    sizes:
      "(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.9921875px",
  },
  {
    href: "#five",
    label: "Authenticity",
    id: "five",
    eyebrow: "five",
    heading: "Partnership over performance",
    body: "We are true to our values and believe that meaningful partnerships include transparency, sincerity, respect, and accountability.",
    image: `${IMG}/About-B_2.webp`,
    sizes: "(max-width: 680px) 100vw, 680px",
  },
];

/**
 * Faithful port of the original Hopeward values section
 * (`section.system-home-b-section`, `what-sets-us-apart`) from
 * `hopeward-26/about.html`. This is a sticky-nav layout (`.tab-list` is
 * `position: sticky`) with the value panels stacked vertically in
 * `.tab-content`, not a switching tab widget, so it needs no JS.
 */
export function ValuesSection() {
  return (
    <section
      className="section system-home-b-section"
      data-section-id="what-sets-us-apart"
      data-section-name="what-sets-us-apart"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-system-home-b">
          <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
            <div className="eyebrow-circle" />
            <div className="label-small" data-id="what-sets-us-apart-eyebrow">
              What sets us apart
            </div>
          </div>
          <div className="heading-system-home-b">
            <div className="text-h3" data-id="what-sets-us-apart-heading">
              What sets us apart
            </div>
            <div className="text-small text-light-88">
              Our values are the reason we do this work. They shape every
              conversation, every decision, and every outcome we&apos;re part
              of.
            </div>
          </div>
        </div>
        <div className="w-layout-grid tab-thirds">
          <div className="tab-list">
            {VALUES.map((value) => (
              <a
                key={value.id}
                className="tab-item w-inline-block"
                href={value.href}
              >
                <div>{value.label}</div>
              </a>
            ))}
          </div>
          <div className="tab-content">
            {VALUES.map((value) => (
              <div key={value.id} className="tab-content-item" id={value.id}>
                <div className="image-wrap-tab">
                  <img
                    alt=""
                    className="image-cover parallax"
                    loading="lazy"
                    sizes={value.sizes}
                    src={value.image}
                  />
                  {value.overlay ? (
                    <div className="overlay-with-image">
                      <img
                        alt=""
                        className="wdiget-tab _3"
                        loading="lazy"
                        src={value.overlay}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="text-wrap-tab">
                  <div className="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
                    <div className="eyebrow-circle" />
                    <div className="label-small">{value.eyebrow}</div>
                  </div>
                  <div className="text-h6">{value.heading}</div>
                  <div className="text-light-88">{value.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
