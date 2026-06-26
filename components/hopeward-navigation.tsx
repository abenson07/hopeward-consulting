const LOGO = "/new_images/logo.svg";
const IMG = "/images";

/**
 * Faithful port of the visible Hopeward navigation bar (`div.master-navigation`)
 * from `hopeward-26/index.html`. The source also contains large Webflow
 * mega-dropdown panels; this component preserves the selected/visible navbar
 * structure and classes while using route-style links for the React app.
 */
export function HopewardNavigation() {
  return (
    <div className="master-navigation">
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
          <a
            aria-current="page"
            className="brand-navbar w-nav-brand w--current"
            href="/"
          >
            <img alt="" className="logo-nav" loading="lazy" src={LOGO} />
          </a>
          <nav className="nav-menu w-nav-menu" role="navigation">
            <div className="wrap-nav-links">
              <a className="nav-link w-inline-block" href="/services">
                <div>What we do</div>
              </a>
              <a className="nav-link w-inline-block" href="/about">
                <div>About us</div>
              </a>
              <a className="nav-link w-inline-block" href="/resources">
                <div>Resources</div>
              </a>
            </div>
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
            <div className="menu-button w-nav-button">
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
