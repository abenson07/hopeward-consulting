const IMG = "/images";
const NEW_IMAGES = "/new_images";
const VIDEO = "/videos";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
  noBorders?: boolean;
};

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "What we do",
    links: [
      { label: "Assessment & Planning", href: "/assessment-planning" },
      { label: "Program Strategy & Execution", href: "/program-strategy-execution" },
      { label: "Evaluation & Impact Reporting", href: "/evaluation-impact-reporting" },
      {
        label: "Collaborative Leadership & Collective Impact",
        href: "/collaborative-leadership-collective-impact",
      },
      {
        label: "Community Engagement & Stakeholder Relations",
        href: "/community-engagement-stakeholder-relations",
      },
      { label: "Helping organizations", href: "/organizations" },
      { label: "Helping collaboratives", href: "/collaboratives" },
    ],
  },
  {
    title: "About hopeward",
    noBorders: true,
    links: [
      { label: "About Hopeward", href: "/about" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Join Hopeward (contractors)", href: "/contact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "The science of hope", href: "/the-science-of-hope" },
      { label: "Nonprofit resources", href: "/resources" },
      { label: "Insights", href: "/blog" },
    ],
  },
];

function FooterColumnLinks({ column }: { column: FooterColumn }) {
  return (
    <div className={`footer-column${column.noBorders ? " no-borders" : ""}`}>
      <div className="column-expand-top-tile">
        <div className="label-large text-everstone">{column.title}</div>
        <div className="footer-expand-icon">
          <div className="line-expand-footer vertical" />
          <div className="line-expand-footer horizontal" />
        </div>
      </div>
      <div className="wrap-column">
        <div className="footer-links-column">
          {column.links.map((link) => (
            <a className="footer-link" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function SocialSvg({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <path
        d="M14 8.5h2.2V5H14c-2.8 0-4.5 1.7-4.5 4.5V12H7v3.5h2.5V24h3.8v-8.5h2.6l.5-3.5h-3.1V9.8c0-.8.3-1.3.7-1.3Z"
        fill="currentColor"
      />
    );
  }

  if (label === "Instagram") {
    return (
      <>
        <path
          d="M12 8.4A3.6 3.6 0 1 0 12 15.6A3.6 3.6 0 0 0 12 8.4Zm0 5.9A2.3 2.3 0 1 1 12 9.7A2.3 2.3 0 0 1 12 14.3Z"
          fill="currentColor"
        />
        <path
          d="M16 7.7a.85.85 0 1 0 0-1.7a.85.85 0 0 0 0 1.7Z"
          fill="currentColor"
        />
        <path
          d="M15 3H9C5.7 3 3 5.7 3 9v6c0 3.3 2.7 6 6 6h6c3.3 0 6-2.7 6-6V9c0-3.3-2.7-6-6-6Zm4.1 12c0 2.3-1.8 4.1-4.1 4.1H9A4.1 4.1 0 0 1 4.9 15V9A4.1 4.1 0 0 1 9 4.9h6c2.3 0 4.1 1.8 4.1 4.1v6Z"
          fill="currentColor"
        />
      </>
    );
  }

  return (
    <path
      d="M6.5 8.9H3V21h3.5V8.9ZM4.8 7.3A2 2 0 1 0 4.8 3.2A2 2 0 0 0 4.8 7.3ZM21 21h-3.5v-6.4c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5V8.9h3.4v1.7h.1c.5-.9 1.6-2 3.3-2c3.6 0 4.7 2.4 4.7 5.5V21Z"
      fill="currentColor"
    />
  );
}

function SocialIcon({ label, href }: { label: string; href: string }) {
  return (
    <a
      aria-label={label}
      className="social-link w-inline-block"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="icon-social w-embed">
        <svg
          fill="currentColor"
          height="100%"
          viewBox="0 0 24 24"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <SocialSvg label={label} />
        </svg>
      </div>
    </a>
  );
}

/** Faithful port of `section.master-footer` (`footer-cta`) from `hopeward-26/index.html`. */
export function HopewardFooter() {
  return (
    <section
      className="master-footer"
      data-section-id="footer-cta"
      data-section-name="footer-cta"
    >
      <div
        className="video-footer w-background-video w-background-video-atom"
        data-autoplay="true"
        data-loop="true"
        data-poster-url={`${VIDEO}/outputcompress-video-onlinecom-1-poster-00001.jpg`}
        data-video-urls={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.mp4,${VIDEO}/outputcompress-video-onlinecom-1-transcode.webm`}
        data-wf-ignore="true"
      >
        <video
          autoPlay
          data-object-fit="cover"
          data-wf-ignore="true"
          loop
          muted
          playsInline
          poster={`${VIDEO}/outputcompress-video-onlinecom-1-poster-00001.jpg`}
        >
          <source
            data-wf-ignore="true"
            src={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.mp4`}
          />
          <source
            data-wf-ignore="true"
            src={`${VIDEO}/outputcompress-video-onlinecom-1-transcode.webm`}
          />
        </video>
        <div className="cta-master">
          <div className="cta-content-wrap">
            <div className="eyebrow light">
              <div className="eyebrow-circle" />
              <div className="label-small">
                Hopeward is a Collaborative Consultancy
              </div>
            </div>
            <div className="heading-cta">
              <h2 className="no-margins">
                Ready to move from complexity to coordinated action.
              </h2>
            </div>
            <div className="button-wrap-cta">
              <a className="cta-main w-inline-block" href="/contact">
                <div className="button-text-mask">
                  <div className="button-text">Contact us</div>
                </div>
                <div className="button-bg" />
              </a>
              <a className="cta-main secondary-light w-inline-block" href="/how-we-work">
                <div className="button-text-mask secondary-light-2">
                  <div className="button-text secondary-light-3">
                    See How We Work
                  </div>
                </div>
                <div className="button-bg secondary-light-7" />
              </a>
            </div>
          </div>
        </div>
        <div className="wrap-footer">
          <div className="footer">
            <div className="w-layout-blockcontainer main-container w-container">
              <div className="content-footer">
                <div className="w-layout-grid footer-halves">
                  <div className="footer-left">
                    <div className="footer-top-tile">
                      <div className="heading-footer">
                        <a className="brand-footer w-inline-block" href="/">
                          <img
                            alt=""
                            className="logo-footer"
                            loading="lazy"
                            src={`${NEW_IMAGES}/logo.svg`}
                          />
                        </a>
                      </div>
                      <div className="text-dark-64">
                        Hopeward partners with nonprofits and collaborative
                        networks to clarify direction, design practical
                        strategies, and build the structures that turn good
                        ideas into sustained action.
                      </div>
                    </div>
                  </div>
                  <div
                    className="footer-right"
                    id="w-node-_35599212-db8e-f5b0-2c77-ba58395b979d-d0446e59"
                  >
                    {FOOTER_COLUMNS.map((column) => (
                      <FooterColumnLinks column={column} key={column.title} />
                    ))}
                  </div>
                </div>
                <div className="footer-bottom-wrap">
                  <div className="footer-legal-tile">
                    <div className="text-small text-dark-64">
                      &copy; 2026 Hopeward - Built by{" "}
                      <a
                        className="footer-link-underline"
                        href="https://midwesternoriginals.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        MWO
                      </a>
                    </div>
                    <div className="footer-legal-column">
                      <a className="footer-legal-link" href="/legal">
                        Legal
                      </a>
                    </div>
                  </div>
                  <div className="footer-last-block">
                    <div className="footer-member-row">
                      <div className="footer-member-logo">
                        <a
                          aria-label="Visit Nonprofit Connect"
                          className="footer-member-logo-link w-inline-block"
                          href="https://www.npconnect.org/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            alt="Nonprofit Connect"
                            className="footer-member-logo-img"
                            height={116}
                            loading="lazy"
                            src={`${NEW_IMAGES}/nonprofit-connect.png`}
                            width={300}
                          />
                        </a>
                      </div>
                      <div className="limit-680">
                        <div className="text-small text-dark-64">
                          Hopeward is a proud member of Nonprofit Connect, a
                          peer network of mission-driven teams sharing ideas,
                          resources, and encouragement as we work toward
                          healthier communities and lasting environmental
                          stewardship.
                        </div>
                      </div>
                    </div>
                    <div className="footer-social-wrap">
                      <SocialIcon href="https://facebook.com" label="Facebook" />
                      <SocialIcon href="https://instagram.com" label="Instagram" />
                      <SocialIcon href="https://linkedin.com" label="LinkedIn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
