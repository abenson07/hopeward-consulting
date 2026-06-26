const IMG = "/images";

function MailIcon() {
  return (
    <div className="icon-24 w-embed">
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 24 24"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.5 2H2.5C1.122 2 0 3.122 0 4.5V22H24V4.5C24 3.122 22.878 2 21.5 2ZM2.5 3H21.5C22.034 3 22.5 3.282 22.766 3.703L14.494 11.975C13.832 12.636 12.954 13 12.015 13H11.998C11.084 12.983 10.172 12.64 9.506 11.975L1.234 3.703C1.5 3.282 1.966 3 2.5 3ZM1 21V4.883L8.799 12.682C9.65 13.533 10.779 14 11.976 14H12.02C13.222 14 14.351 13.533 15.202 12.682L23.001 4.883V21H1Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

function CollectiveIcon() {
  return (
    <div className="icon-24 w-embed">
      <svg
        fill="none"
        height="100%"
        viewBox="0 0 24 24"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_28197_8663)">
          <path
            d="M9 18H0V9C0 4.037 4.038 0 9 0C13.962 0 18 4.037 18 9C18 13.963 13.962 18 9 18ZM1 17H9C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9V17ZM19.996 9.08C19.993 9.462 19.971 9.839 19.93 10.211C21.782 11.472 23 13.596 23 16V23H16C13.596 23 11.472 21.781 10.211 19.93C9.839 19.971 9.462 19.994 9.08 19.996C10.465 22.385 13.045 24 16 24H24V16C24 13.045 22.385 10.465 19.996 9.08Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_28197_8663">
            <rect fill="currentColor" height="100%" width="100%" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Faithful port of the original Hopeward contact CTA section
 * (`section.hero-contact-a`, `contact-build-something-grounded`) from
 * `hopeward-26/about.html`.
 */
export function ContactPrefooter() {
  return (
    <section
      className="section hero-contact-a"
      data-section-id="contact-build-something-grounded"
      data-section-name="contact-build-something-grounded"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-contact-a-hero">
          <div className="headline-contact-a">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div
                className="label-small"
                data-id="contact-build-something-grounded-eyebrow"
              >
                Contact
              </div>
            </div>
            <h1 data-id="contact-build-something-grounded-title">
              Let&apos;s build something grounded
            </h1>
          </div>
          <div className="w-layout-grid contact-a-halves">
            <div className="contact-a-tile">
              <div className="contact-a-top-tile">
                <div className="text-wrap-contact-a-tile">
                  <div className="label-small text-everstone">
                    Let&apos;s collaborate
                  </div>
                  <a
                    className="cta-main w-inline-block"
                    data-id="contact-build-something-grounded-cta-1"
                    data-wf--cta-main--variant="secondary-dark"
                    href="/contact"
                  >
                    <div className="button-text-mask">
                      <div className="button-text">Start a conversation</div>
                    </div>
                    <div className="button-bg" />
                  </a>
                </div>
                <div className="icon-wrap-40">
                  <MailIcon />
                </div>
              </div>
              <div className="text-small">
                Exploring a partnership or ready to start a project? Tell us what
                you&apos;re building—we&apos;ll follow up to talk next steps.
              </div>
            </div>
            <div className="contact-a-tile">
              <div className="contact-a-top-tile">
                <div className="text-wrap-contact-a-tile">
                  <div className="label-small text-everstone">
                    Join our collective
                  </div>
                  <a
                    className="cta-main w-inline-block"
                    data-id="contact-build-something-grounded-cta-2"
                    data-wf--cta-main--variant="secondary-dark"
                    href="/contact"
                  >
                    <div className="button-text-mask">
                      <div className="button-text">Join our collective</div>
                    </div>
                    <div className="button-bg" />
                  </a>
                </div>
                <div className="icon-wrap-40">
                  <CollectiveIcon />
                </div>
              </div>
              <div className="text-small">
                The Hopeward collective is a network of contractors who work
                together on mission-driven projects. Interested in joining?
                We&apos;d love to hear from you.
              </div>
            </div>
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
