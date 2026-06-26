const IMG = "/images";

/**
 * Faithful port of the original Hopeward contact hero + form
 * (`section.hero-contact-b-section`, `hero-every-project-starts-conversation`)
 * from `hopeward-26/contact.html`.
 */
export function CenterContact() {
  return (
    <section
      className="section hero-contact-b-section"
      data-section-id="hero-every-project-starts-conversation"
      data-section-name="hero-every-project-starts-conversation"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-contact-b">
          <div className="headline-contact-b">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div
                className="label-small"
                data-id="hero-every-project-starts-conversation-eyebrow"
              >
                Contact
              </div>
            </div>
            <h1 data-id="hero-every-project-starts-conversation-title">
              Every meaningful project starts with a conversation.
            </h1>
            <div>
              We&apos;re open to grounded ideas, bold questions, and thoughtful
              collaborations. If you&apos;ve got something in mind, let&apos;s
              talk.
            </div>
          </div>
          <div className="form-block w-form">
            <form
              className="form-contact"
              data-name="Email Form"
              id="email-form"
              method="get"
              name="email-form"
            >
              <div className="contact-form-top-tile">
                <div
                  className="text-h6"
                  data-id="hero-every-project-starts-conversation-heading"
                >
                  Got a project in mind? Let&apos;s start with a hello.
                </div>
              </div>
              <div className="contact-form-inner">
                <div className="input-wrap-contact">
                  <div className="label-large">Full Name</div>
                  <input
                    className="text-field light w-input"
                    data-name="Name"
                    id="name"
                    maxLength={256}
                    name="name"
                    placeholder="Your name here"
                    required
                    type="text"
                  />
                </div>
                <div className="w-layout-grid input-halves">
                  <div className="input-wrap-contact">
                    <div className="label-large">Email</div>
                    <input
                      className="text-field light w-input"
                      data-name="Email"
                      id="Email"
                      maxLength={256}
                      name="Email"
                      placeholder="Email address"
                      required
                      type="email"
                    />
                  </div>
                  <div className="input-wrap-contact">
                    <div className="label-large">Budget Range</div>
                    <select
                      className="text-field light select w-select"
                      data-name="Budget"
                      id="Budget"
                      name="Budget"
                    >
                      <option value="">Select a range</option>
                      <option value="First">First choice</option>
                      <option value="Second">Second choice</option>
                      <option value="Third">Third choice</option>
                    </select>
                  </div>
                </div>
                <div className="input-wrap-contact">
                  <div className="label-large">Message</div>
                  <textarea
                    className="text-field light textarea w-input"
                    data-name="Describe your project vision"
                    id="Describe-your-project-vision"
                    maxLength={5000}
                    name="Describe-your-project-vision"
                    placeholder="Describe your project vision"
                    required
                  />
                </div>
                <label className="w-checkbox checkbox">
                  <div className="w-checkbox-input w-checkbox-input--inputType-custom checkbox-contact" />
                  <input
                    data-name="Checkbox"
                    id="Checkbox"
                    name="Checkbox"
                    required
                    style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    type="checkbox"
                  />
                  <span className="checkbox-text w-form-label">
                    I allow Evermind™ to store my details for communication.
                  </span>
                </label>
              </div>
              <div className="contact-form-bottom-tile">
                <div className="contact-form-bottom-left">
                  <div className="text-small">
                    We&apos;ll reply within 24–48h. <br />
                    By sending, you accept our{" "}
                    <a className="link-dark-underline" href="#">
                      Privacy Policy
                    </a>
                    .
                  </div>
                </div>
                <input
                  className="cta-main submit w-button"
                  data-wait="Please wait..."
                  type="submit"
                  value="Send message"
                />
              </div>
            </form>
            <div className="success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
      <img alt="" className="dots" loading="lazy" src={`${IMG}/Dots.svg`} />
    </section>
  );
}
