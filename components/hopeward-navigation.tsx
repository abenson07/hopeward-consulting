"use client";

import * as React from "react";

const LOGO = "/new_images/logo.svg";
const IMG = "/images";

type DropdownId = "what-we-do" | "about-us" | "resources";

function ArrowIcon() {
  return (
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
  );
}

function CtaArrowButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      className="cta-main w-inline-block"
      href={href}
    >
      <div className="button-text-mask">
        <div className="button-text">{label}</div>
      </div>
      <div className="button-icon-wrap">
        <div className="icon-button prev w-variant-1fc0c975-6074-8465-5c95-4675ab49fe85 w-embed">
          <ArrowIcon />
        </div>
        <div className="icon-button w-embed">
          <ArrowIcon />
        </div>
      </div>
      <div className="button-bg w-variant-1fc0c975-6074-8465-5c95-4675ab49fe85" />
    </a>
  );
}

function CardLinkArrow() {
  return (
    <div className="icon-wrap-card-link">
      <div className="icon-inner-card">
        <div className="icon-link-arrow w-embed">
          <ArrowIcon />
        </div>
      </div>
      <div className="card-link-bg" />
    </div>
  );
}

type NavDropdownProps = {
  id: DropdownId;
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  children: React.ReactNode;
};

function NavDropdown({
  id,
  label,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  children,
}: NavDropdownProps) {
  return (
    <div
      className="dropdown w-dropdown"
      data-delay="0"
      data-hover="true"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <div
        aria-controls={`nav-dropdown-${id}`}
        aria-expanded={isOpen}
        className={`dropdown-toggle w-dropdown-toggle${isOpen ? " w--open" : ""}`}
        id={`nav-dropdown-toggle-${id}`}
        onClick={onToggle}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onToggle();
          }
        }}
        role="button"
        tabIndex={0}
      >
        <div className="nav-link">
          <div>{label}</div>
        </div>
      </div>
      <nav
        aria-labelledby={`nav-dropdown-toggle-${id}`}
        className={`dropdown-list w-dropdown-list${isOpen ? " w--open" : ""}`}
        id={`nav-dropdown-${id}`}
      >
        {children}
      </nav>
    </div>
  );
}

function WhatWeDoPanel() {
  return (
    <div className="nav-dropdown-list">
      <div className="w-layout-grid nav-thirds">
        <div className="nav-pages-left">
          <div className="nav-column">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">Services</div>
              </div>
            </div>
            <div className="nav-column-inner">
              <a
                className="nav-column-item w-inline-block"
                href="/assessment-planning"
              >
                <div>
                  <span>Assessment &amp; Planning</span>
                </div>
                <div className="text-small text-dark-48">
                  Ground strategy in evidence with assessments, stakeholder
                  alignment, and practical plans that prioritize what matters.
                </div>
              </a>
              <a
                className="nav-column-item w-inline-block"
                href="/program-strategy-execution"
              >
                <div>
                  <span>Program Strategy &amp; Execution</span>
                </div>
                <div className="text-small text-dark-48">
                  Design, implement, and refine programs with clear strategy,
                  alignment, and execution that stick.
                </div>
              </a>
              <a
                className="nav-column-item w-inline-block"
                href="/evaluation-impact-reporting"
              >
                <div>
                  <span>Evaluation &amp; Impact Reporting</span>
                </div>
                <div className="text-small text-dark-48">
                  Measure outcomes, learn what works, and communicate impact to
                  funders, boards, and communities.
                </div>
              </a>
              <a
                className="nav-column-item w-inline-block"
                href="/collaborative-leadership-collective-impact"
              >
                <div>
                  <span>Collaborative Leadership &amp; Collective Impact</span>
                </div>
                <div className="text-small text-dark-48">
                  Facilitate coalitions, align partners, and coordinate action
                  across organizations toward shared results.
                </div>
              </a>
              <a
                className="nav-column-item w-inline-block"
                href="/community-engagement-stakeholder-relations"
              >
                <div>
                  <span>
                    Community Engagement &amp; Stakeholder Relations
                  </span>
                </div>
                <div className="text-small text-dark-48">
                  Engage residents and stakeholders authentically—from inclusive
                  outreach to dialogue and feedback that informs decisions.
                </div>
              </a>
            </div>
          </div>
          <CtaArrowButton href="/how-we-work" label="See how we work" />
        </div>
        <div className="nav-customer-stories">
          <div className="nav-cs-title">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">Audiences</div>
              </div>
            </div>
            <a className="nav-cs-link label-small" href="/how-we-work">
              Overview
            </a>
          </div>
          <div className="w-layout-grid customer-halves">
            <a
              className="card-customer-story nav-card w-inline-block"
              href="/organizations"
            >
              <div className="image-wrap-cs">
                <img
                  alt=""
                  className="image-cover"
                  loading="lazy"
                  src={`${IMG}/About-B_2.webp`}
                />
                <div className="overlay-top-cs" />
                <div className="overlay-bottom-cs" />
              </div>
              <div className="logo-cs-card nav-audience-card-titles">
                <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                  <div className="eyebrow-circle" />
                  <div className="label-small">Green Cities</div>
                </div>
                <div className="text-h6 text-light-88">Organizations</div>
                <div className="text-small text-light-64">
                  and the people who power them
                </div>
              </div>
              <div className="card-cs-bottom-tile">
                <div className="link-cs-card">
                  <div>How we work with organizations</div>
                  <CardLinkArrow />
                </div>
              </div>
            </a>
            <a
              className="card-customer-story nav-card w-inline-block"
              href="/collaboratives"
            >
              <div className="image-wrap-cs">
                <img
                  alt=""
                  className="image-cover"
                  loading="lazy"
                  src={`${IMG}/Modal.webp`}
                />
                <div className="overlay-top-cs" />
                <div className="overlay-bottom-cs" />
              </div>
              <div className="logo-cs-card nav-audience-card-titles">
                <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                  <div className="eyebrow-circle" />
                  <div className="label-small">Sustainability</div>
                </div>
                <div className="text-h6 text-light-88">Collaboratives</div>
                <div className="text-small text-light-64">
                  the change makers within them
                </div>
              </div>
              <div className="card-cs-bottom-tile">
                <div className="link-cs-card">
                  <div>How we work with collaboratives</div>
                  <CardLinkArrow />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUsPanel() {
  return (
    <div className="nav-dropdown-list">
      <div className="w-layout-grid nav-thirds">
        <div className="nav-pages-left">
          <div className="nav-column">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">About</div>
              </div>
            </div>
            <div className="nav-column-inner">
              <a className="nav-column-item w-inline-block" href="/about">
                <div>
                  <span>About Hopeward</span>
                </div>
                <div className="text-small text-dark-48">
                  Who we are and what drives Hopeward.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/how-we-work">
                <div>
                  <span>How We Work</span>
                </div>
                <div className="text-small text-dark-48">
                  Our process and what it&apos;s like to partner with us.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/contact">
                <div>
                  <span>Join Hopeward (contractors)</span>
                </div>
                <div className="text-small text-dark-48">
                  Work with us as a contractor or specialist partner.
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="nav-customer-stories">
          <div className="nav-cs-title">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">Case studies</div>
              </div>
            </div>
            <a className="nav-cs-link label-small" href="/blog">
              Show all
            </a>
          </div>
          <div className="w-layout-grid customer-halves">
            <a className="card-customer-story nav-card w-inline-block" href="/blog">
              <div className="image-wrap-cs">
                <img
                  alt=""
                  className="image-cover"
                  loading="lazy"
                  src={`${IMG}/Testimonial-Image_1.webp`}
                />
                <div className="overlay-top-cs" />
                <div className="overlay-bottom-cs" />
              </div>
              <img
                alt=""
                className="logo-cs-card"
                loading="lazy"
                src={`${IMG}/Compnay-logo.svg`}
              />
              <div className="card-cs-bottom-tile">
                <div className="link-cs-card">
                  <div>Read case study</div>
                  <CardLinkArrow />
                </div>
              </div>
            </a>
            <a className="card-customer-story nav-card w-inline-block" href="/blog">
              <div className="image-wrap-cs">
                <img
                  alt=""
                  className="image-cover"
                  loading="lazy"
                  src={`${IMG}/Testimonial-Image-2_1.webp`}
                />
                <div className="overlay-top-cs" />
                <div className="overlay-bottom-cs" />
              </div>
              <img
                alt=""
                className="logo-cs-card"
                loading="lazy"
                src={`${IMG}/Compnay-logo.svg`}
              />
              <div className="card-cs-bottom-tile">
                <div className="link-cs-card">
                  <div>Read case study</div>
                  <CardLinkArrow />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResourcesPanel() {
  return (
    <div className="nav-dropdown-list">
      <div className="w-layout-grid nav-thirds nav-resources-thirds">
        <div className="nav-pages-left">
          <div className="nav-column">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">Insights</div>
              </div>
            </div>
            <div className="nav-column-inner">
              <a
                className="nav-column-item w-inline-block"
                href="/insights/why-modular-design-wins-5"
              >
                <div>
                  <span>Why hope belongs in strategy conversations</span>
                </div>
                <div className="text-small text-dark-48">
                  How a hope-centered lens strengthens planning, leadership,
                  and sustained results.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/blog">
                <div>
                  <span>From complexity to coordinated action</span>
                </div>
                <div className="text-small text-dark-48">
                  Frameworks for aligning partners and moving from insight to
                  coordinated execution.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/blog">
                <div>
                  <span>Building trust across cross-sector partnerships</span>
                </div>
                <div className="text-small text-dark-48">
                  Approaches that deepen relationships and sustain collaboration
                  across sectors.
                </div>
              </a>
            </div>
          </div>
          <CtaArrowButton href="/blog" label="More insights" />
        </div>
        <div className="nav-pages-left">
          <div className="nav-column">
            <div className="nav-title">
              <div className="eyebrow">
                <div className="eyebrow-circle" />
                <div className="label-small text-everstone">Resources</div>
              </div>
            </div>
            <div className="nav-column-inner">
              <a className="nav-column-item w-inline-block" href="/resources">
                <div>
                  <span>Strategic planning toolkit</span>
                </div>
                <div className="text-small text-dark-48">
                  Templates and guides to clarify goals, priorities, and
                  measurable outcomes.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/resources">
                <div>
                  <span>Stakeholder engagement guide</span>
                </div>
                <div className="text-small text-dark-48">
                  Tools for inclusive outreach, dialogue, and feedback that
                  informs decisions.
                </div>
              </a>
              <a className="nav-column-item w-inline-block" href="/resources">
                <div>
                  <span>Impact measurement workbook</span>
                </div>
                <div className="text-small text-dark-48">
                  Worksheets and examples to track progress and communicate
                  impact.
                </div>
              </a>
            </div>
          </div>
          <CtaArrowButton href="/resources" label="Non-profit resources" />
        </div>
        <div className="nav-customer-stories">
          <a
            className="card-customer-story nav-card w-inline-block"
            href="/the-science-of-hope"
          >
            <div className="image-wrap-cs">
              <img
                alt=""
                className="image-cover"
                loading="lazy"
                src={`${IMG}/About-Image_2.webp`}
              />
              <div className="overlay-top-cs" />
              <div className="overlay-bottom-cs" />
            </div>
            <div className="logo-cs-card nav-audience-card-titles">
              <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
                <div className="eyebrow-circle" />
                <div className="label-small">Research</div>
              </div>
              <div className="text-h6 text-light-88">The Science of Hope</div>
              <div className="text-small text-light-64">
                How hope shapes leadership, teams, and sustained impact
              </div>
            </div>
            <div className="card-cs-bottom-tile">
              <div className="link-cs-card">
                <div>Explore the science of hope</div>
                <CardLinkArrow />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className="wrap-mobile-menu">
      <div className="mobile-nav-top-tile">
        <div className="divider-dark-16" />
        <div className="nav-column-item">
          <div className="mobile-links-wrap">
            <a className="text-large text-dark" href="/">
              Home A
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/">
              Home B
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/">
              Home C
            </a>
          </div>
          <div className="text-small text-dark-48">
            Crafted to scale with purpose-driven infrastructure projects.
          </div>
        </div>
        <div className="divider-dark-16" />
        <a className="nav-column-item w-inline-block" href="/services">
          <div className="mobile-links-wrap">
            <div className="text-large text-dark">Service</div>
          </div>
          <div className="text-small text-dark-48">
            Clearly outline your services in a modular way.
          </div>
        </a>
        <div className="divider-dark-16" />
        <div className="nav-column-item">
          <div className="mobile-links-wrap">
            <a className="text-large text-dark" href="/about">
              About A
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/about">
              About B
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/about">
              About C
            </a>
          </div>
          <div className="text-small text-dark-48">
            How we think, work, and approach sustainable design.
          </div>
        </div>
        <div className="divider-dark-16" />
        <a className="nav-column-item w-inline-block" href="/contact">
          <div className="mobile-links-wrap">
            <div className="text-large text-dark">Pricing</div>
          </div>
          <div className="text-small text-dark-48">
            Help visitors quickly understand your offer.
          </div>
        </a>
        <div className="divider-dark-16" />
        <a className="nav-column-item w-inline-block" href="/blog">
          <div className="mobile-links-wrap">
            <div className="text-large text-dark">Customer Stories</div>
          </div>
          <div className="text-small text-dark-48">
            A highly advanced CMS setup for showcasing case studies.
          </div>
        </a>
        <div className="divider-dark-16" />
        <a className="nav-column-item w-inline-block" href="/blog">
          <div className="mobile-links-wrap">
            <div className="text-large text-dark">Blog</div>
          </div>
          <div className="text-small text-dark-48">
            Position yourself as a thought leader and boost SEO.
          </div>
        </a>
        <div className="divider-dark-16" />
        <div className="nav-column-item">
          <div className="mobile-links-wrap">
            <a className="text-large text-dark" href="/contact">
              Contact A
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/contact">
              Contact B
            </a>
            <div className="text-dark-32">·</div>
            <a className="text-large text-dark" href="/contact">
              Contact C
            </a>
          </div>
          <div className="text-small text-dark-48">
            Just say hi. We&apos;re always curious to hear what you&apos;re
            building.
          </div>
        </div>
        <div className="divider-dark-16" />
      </div>
      <div className="mobile-nav-bottom-tile">
        <div className="nav-mobile-ss">
          <div className="nav-title">
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="label-small text-everstone">Success stories</div>
            </div>
          </div>
          <a className="card-customer-story mobile-nav-card w-inline-block" href="/blog">
            <div className="image-wrap-cs">
              <img
                alt=""
                className="image-cover"
                loading="lazy"
                src={`${IMG}/Testimonial-Image-2_1.webp`}
              />
              <div className="overlay-top-cs" />
              <div className="overlay-bottom-cs" />
            </div>
            <img
              alt=""
              className="logo-cs-card"
              loading="lazy"
              src={`${IMG}/Compnay-logo.svg`}
            />
            <div className="card-cs-bottom-tile">
              <div className="text-left-mobile-nav-cta">
                <div>
                  How Franco Build turned their mission into a message with
                  Evermind
                </div>
              </div>
              <div className="link-cs-card">
                <div>Read case study</div>
                <CardLinkArrow />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Faithful port of `div.master-navigation` from `hopeward-26/index.html`.
 * A minimal React state layer toggles `w--open` / `data-nav-menu-open` because
 * `webflow.js` is not loaded; dropdown and mobile menu styling lives in the
 * existing Webflow CSS bundles.
 */
export function HopewardNavigation() {
  const navRef = React.useRef<HTMLDivElement>(null);
  const [openDropdown, setOpenDropdown] = React.useState<DropdownId | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const openDropdownPanel = React.useCallback((id: DropdownId) => {
    setOpenDropdown(id);
  }, []);

  const closeDropdownPanel = React.useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const toggleDropdown = React.useCallback((id: DropdownId) => {
    setOpenDropdown((current) => (current === id ? null : id));
  }, []);

  const toggleMobileMenu = React.useCallback(() => {
    setMobileOpen((current) => !current);
    setOpenDropdown(null);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, []);

  return (
    <div className="master-navigation" ref={navRef}>
      <div
        className="navbar w-nav"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
      >
        <div className="nav-bg-wrap desktop">
          <div className="nav-bg" />
        </div>
        <div className="nav-bg-wrap mobile">
          <div className="nav-bg" />
        </div>
        <div className="nav-wrap">
          <a className="brand-navbar w-nav-brand" href="/">
            <img alt="" className="logo-nav" loading="lazy" src={LOGO} />
          </a>
          <nav
            className="nav-menu w-nav-menu"
            {...(mobileOpen ? { "data-nav-menu-open": "" } : {})}
            role="navigation"
          >
            <div className="wrap-nav-links">
              <NavDropdown
                id="what-we-do"
                isOpen={openDropdown === "what-we-do"}
                label="What we do"
                onClose={closeDropdownPanel}
                onOpen={() => openDropdownPanel("what-we-do")}
                onToggle={() => toggleDropdown("what-we-do")}
              >
                <WhatWeDoPanel />
              </NavDropdown>
              <NavDropdown
                id="about-us"
                isOpen={openDropdown === "about-us"}
                label="About us"
                onClose={closeDropdownPanel}
                onOpen={() => openDropdownPanel("about-us")}
                onToggle={() => toggleDropdown("about-us")}
              >
                <AboutUsPanel />
              </NavDropdown>
              <NavDropdown
                id="resources"
                isOpen={openDropdown === "resources"}
                label="Resources"
                onClose={closeDropdownPanel}
                onOpen={() => openDropdownPanel("resources")}
                onToggle={() => toggleDropdown("resources")}
              >
                <ResourcesPanel />
              </NavDropdown>
            </div>
            <MobileMenu />
          </nav>
          <div className="nav-right">
            <a
              className="cta-main w-variant-c8d912e0-a082-df05-874a-b6f42434fbdb w-inline-block"
              href="/contact"
            >
              <div className="button-text-mask">
                <div className="button-text">Start a conversation</div>
              </div>
              <div className="button-bg w-variant-c8d912e0-a082-df05-874a-b6f42434fbdb" />
            </a>
            <div
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className={`menu-button w-nav-button${mobileOpen ? " w--open" : ""}`}
              onClick={toggleMobileMenu}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleMobileMenu();
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="menu-button-inner open">
                <img
                  alt=""
                  className="icon-menu"
                  loading="lazy"
                  src={`${IMG}/Icons-Hamburger-1.svg`}
                />
              </div>
              <div className="menu-button-inner close">
                <img
                  alt=""
                  className="icon-menu"
                  loading="lazy"
                  src={`${IMG}/Close.svg`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-blur" />
    </div>
  );
}
