const IMG = "/images";

type TeamMember = {
  name: string;
  photo: string;
  nameId: string;
  photoId: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Danielle Brower",
    photo: `${IMG}/Team-Member-Image_1.webp`,
    nameId: "meet-the-team-danielle-brower-name",
    photoId: "meet-the-team-danielle-brower-photo",
  },
  {
    name: "Rebecca Gillam",
    photo: `${IMG}/Team-Member-Image-1_1.webp`,
    nameId: "meet-the-team-rebecca-gillam-name",
    photoId: "meet-the-team-rebecca-gillam-photo",
  },
];

/**
 * Faithful port of the original Hopeward team section
 * (`section.about-team-section`, `meet-the-team`) from
 * `hopeward-26/about.html`.
 */
export function TeamBlock() {
  return (
    <section
      className="section about-team-section"
      data-section-id="meet-the-team"
      data-section-name="meet-the-team"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-team">
          <div className="divider-dark-16" />
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small" data-id="meet-the-team-eyebrow">
              Team
            </div>
          </div>
          <h2 className="no-margins" data-id="meet-the-team-title">
            Meet the team
          </h2>
          <div className="text-large" data-id="meet-the-team-lede-1">
            We are a national team of consultants with over 40 years of
            experience in helping non-profits reach their goals.
          </div>
          <a
            className="cta-main w-inline-block"
            data-id="meet-the-team-cta-1"
            data-wf--cta-main--variant="secondary-dark"
            href="/contact"
          >
            <div className="button-text-mask">
              <div className="button-text">Join our collective</div>
            </div>
            <div className="button-bg" />
          </a>
        </div>
        <div className="w-layout-grid team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="card-team">
              <div className="image-wrap-team">
                <img
                  alt={member.name}
                  className="image-cover"
                  data-id={member.photoId}
                  loading="lazy"
                  sizes="100vw"
                  src={member.photo}
                />
              </div>
              <div className="text-wrap-team">
                <div data-id={member.nameId}>
                  <strong>{member.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
