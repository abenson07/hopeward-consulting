type BlogArticleContentProps = {
  author?: string;
  bodyHtml?: string;
};

const DEFAULT_AUTHOR = "Danielle Brower";

const DEFAULT_BODY_HTML = `<p>It\u2019s almost grant writing season! Are you ready to write and submit successful proposals?<br/><br/>Grant writing can be a daunting process and while there is no perfect formula to guarantee success; there are certainly steps you can take to increase your organization's likelihood of being awarded funding.<br/><br/>Our team has written over $50 million in successful grant proposals, here are our top 7 tips to make grant writing a winning process:<br/><br/></p><ul><li>Don\u2019t apply if the funding opportunity doesn\u2019t match your needs. Applications that don\u2019t have a clear alignment with the funding opportunity are less likely to get awarded. These opportunities will also take you off course from your mission. Be patient, and wait for the right funding for your project or organization.</li><li>Write to the requirements. It may seem simple, and it is, but often we focus too much on our idea and not enough on the requirements of the funding opportunity. Convey excitement and passion for your proposal within the context of the grant\u2019s specific requirements.</li><li>Differentiate yourself from other applicants.  Tell your organization's unique story and clearly outline your \u201cwhy\u201d, \u201cwhat\u201d and \u201chow\u201d.  Understanding what sets you apart can help you stand out from the crowd. </li><li>Focus on solutions rather than problems.  Remember grant writing is supporting <em>how </em>you make a difference.  The tone of your proposal should clearly reflect your organization\u2019s ability and passion to do so. </li><li>Write to any reader. Grant reviewers come from a wide range of backgrounds, it is important when writing your proposal to limit industry specific jargon.  </li><li>Get words on paper. Grant writing is an iterative process. It\u2019s a lot easier to edit and add than it is to fill a blank page. Dump in notes or bullet points to get started. </li><li>Plan your writing timeline. It never fails that grant deadlines sneak up on you. Starting early, and setting internal milestones, will help keep the inevitable last minute work to a minimum.</li></ul><p>\u200d</p>`;

/**
 * Faithful port of `section.article-body-section` (`article-body`) from the
 * Hopeward insight detail pages (e.g.
 * `hopeward-26/insights/7-tips-to-make-grant-writing-a-winning-process.html`).
 * The body renders into the Webflow `.w-richtext` container; props default to
 * the "7 Tips" article so the standalone preview matches the source.
 */
export function BlogArticleContent({
  author = DEFAULT_AUTHOR,
  bodyHtml = DEFAULT_BODY_HTML,
}: BlogArticleContentProps = {}) {
  return (
    <section className="section article-body-section" data-section-id="article-body">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="article-body-small">
          <div className="headline-article-author">
            <div className="divider-dark-16" />
            <div className="eyebrow">
              <div className="eyebrow-circle" />
              <div className="article-author">
                <div className="label-small">Written by</div>
                <div className="label-small">{author}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="master-body-article">
          <div className="article-body-small">
            <div
              className="body-article w-richtext"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
