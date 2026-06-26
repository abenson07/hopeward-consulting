import type { ReactNode } from "react";

/**
 * Faithful port of the original Hopeward per-service benefits grid
 * (`section.service-services-section`, `benefits-assessment-planning`) from the
 * service detail pages in `hopeward-26/` (source: `assessment-planning.html`).
 * The original Webflow stylesheets are loaded globally in `app/layout.tsx`, so
 * this reproduces the source DOM structure and class names verbatim and lets
 * that CSS do the styling. The 3-column `.service-grid` layout comes from the
 * service-page inline-<style> rules ported into `public/css/hopeward.css`.
 *
 * The section repeats across every service page with the same layout but
 * different copy/icons, so the title and cards are exposed as props while the
 * structure stays identical to the source.
 */
export const ClockIcon = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_28197_5951)">
      <path
        d="M12 24C5.383 24 0 18.617 0 12C0 5.383 5.383 0 12 0C18.617 0 24 5.383 24 12C24 18.617 18.617 24 12 24ZM12 1C5.935 1 1 5.935 1 12C1 18.065 5.935 23 12 23C18.065 23 23 18.065 23 12C23 5.935 18.065 1 12 1ZM15.395 16.693L12 12.329V5H11V12.671L14.605 17.307L15.394 16.693H15.395Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_28197_5951">
        <rect fill="currentColor" height="100%" width="100%" />
      </clipPath>
    </defs>
  </svg>
);

export const ChartIcon = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_28197_5957)">
      <path
        d="M9.868 9.582C10.061 9.94 10.04 10.374 9.815 10.714L8.061 14.236L7.166 13.789L8.951 10.214C9.004 10.127 9.006 10.091 8.987 10.055C8.968 10.019 8.937 10 8.896 10H6.116C5.76 10 5.433 9.836 5.22 9.549C5.008 9.263 4.945 8.903 5.049 8.562L7.234 4.494L8.114 4.969L6.001 8.884C6.001 8.914 6.012 8.939 6.024 8.954C6.04 8.975 6.068 9.001 6.116 9.001H8.896C9.303 9.001 9.676 9.224 9.868 9.583V9.582ZM24 1V5.5C24 6.327 23.327 7 22.5 7H22V17.5C22 18.879 20.878 20 19.5 20H15V24H0V2.5C0 1.121 1.122 0 2.5 0H12.5C13.878 0 15 1.121 15 2.5V19H19.5C20.327 19 21 18.327 21 17.5V7H20.5C19.673 7 19 6.327 19 5.5V1H20V3H23V1H24ZM14 23V10H12V9H14V2.5C14 1.673 13.327 1 12.5 1H2.5C1.673 1 1 1.673 1 2.5V9H3V10H1V23H14ZM23 4H20V5.5C20 5.775 20.224 6 20.5 6H22.5C22.776 6 23 5.775 23 5.5V4Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_28197_5957">
        <rect fill="currentColor" height="100%" width="100%" />
      </clipPath>
    </defs>
  </svg>
);

export const PencilIcon = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_28197_5963)">
      <path
        d="M23.9704 8.06725L23.2634 7.36025L20.2344 10.3893L13.6124 3.76725L16.6414 0.73825L15.9344 0.03125L12.6284 3.33625L4.11944 6.49325L0.0234375 23.9783L17.5084 19.8813L20.6654 11.3723L23.9704 8.06725ZM16.7574 19.0303L2.28944 22.4202L8.12644 16.5823C8.52144 16.8442 8.99444 16.9993 9.50244 16.9993C10.8804 16.9993 12.0024 15.8773 12.0024 14.4993C12.0024 13.1213 10.8804 11.9993 9.50244 11.9993C8.12444 11.9993 7.00244 13.1213 7.00244 14.4993C7.00244 15.0083 7.15644 15.4803 7.41944 15.8753L1.58144 21.7133L4.97244 7.24425L12.7794 4.34725L19.6544 11.2222L16.7574 19.0303ZM8.00344 14.4993C8.00344 13.6723 8.67644 12.9993 9.50344 12.9993C10.3304 12.9993 11.0034 13.6723 11.0034 14.4993C11.0034 15.3263 10.3304 15.9993 9.50344 15.9993C8.67644 15.9993 8.00344 15.3263 8.00344 14.4993Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_28197_5963">
        <rect fill="currentColor" height="100%" width="100%" />
      </clipPath>
    </defs>
  </svg>
);

export const OverlapIcon = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 24 24"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_28197_5979)">
      <path
        d="M9 18H0V9C0 4.037 4.038 0 9 0C13.962 0 18 4.037 18 9C18 13.963 13.962 18 9 18ZM1 17H9C13.411 17 17 13.411 17 9C17 4.589 13.411 1 9 1C4.589 1 1 4.589 1 9V17ZM19.996 9.08C19.993 9.462 19.971 9.839 19.93 10.211C21.782 11.472 23 13.596 23 16V23H16C13.596 23 11.472 21.781 10.211 19.93C9.839 19.971 9.462 19.994 9.08 19.996C10.465 22.385 13.045 24 16 24H24V16C24 13.045 22.385 10.465 19.996 9.08Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_28197_5979">
        <rect fill="currentColor" height="100%" width="100%" />
      </clipPath>
    </defs>
  </svg>
);

type ServiceBenefitCard = {
  icon: ReactNode;
  heading: string;
  body: string;
};

type ServiceBenefitsProps = {
  sectionId?: string;
  eyebrow?: string;
  title?: string;
  cards?: ServiceBenefitCard[];
};

export function ServiceBenefits({
  sectionId = "benefits-assessment-planning",
  eyebrow = "Service",
  title = "Benefits of Assessment & Planning",
  cards = [
    {
      icon: ClockIcon,
      heading: "Data-Driven Decision Making",
      body: "Ground priorities in evidence—so investments, programs, and policies respond to real conditions, not assumptions.",
    },
    {
      icon: ChartIcon,
      heading: "Strategic Direction & Sustainable Growth",
      body: "Clarify goals, sequencing, and ownership so teams can pursue impact today without losing sight of the mission tomorrow.",
    },
    {
      icon: PencilIcon,
      heading: "Accountability & Stakeholder Communication",
      body: "Build transparent plans and reporting rhythms that keep partners, boards, and communities aligned on what is changing and why it matters.",
    },
  ],
}: ServiceBenefitsProps = {}) {
  return (
    <section
      className="section service-services-section"
      data-section-id={sectionId}
      data-section-name={sectionId}
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="title-service-grid">
          <div className="headline-service-grid">
            <div className="divider-dark-16" />
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small" data-id={`${sectionId}-eyebrow`}>
                {eyebrow}
              </div>
            </div>
          </div>
          <h2 className="no-margins" data-id={`${sectionId}-title`}>
            {title}
          </h2>
        </div>
        <div className="w-layout-grid service-grid">
          {cards.map((card, index) => (
            <div className="card-service" key={index}>
              <div className="card-service-top-tile">
                <div className="icon-wrap-40">
                  <div className="icon-24 w-embed">{card.icon}</div>
                </div>
                <div className="text-h7">{card.heading}</div>
              </div>
              <div className="text-dark-88">{card.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
