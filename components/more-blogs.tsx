import { BlogCard, type ArticleCard } from "@/components/blog-card";

const MORE_ARTICLES: ArticleCard[] = [
  {
    slug: "this-one-skill-could-have-more-impact-on-thriving-than-you-think",
    date: "August 22, 2022",
    title: "This One Skill Could Have More Impact on Thriving Than You Think",
    excerpt:
      "As seasons change, reflect on summer's moments. Assess happiness, accomplishments, and changes. Thriving requires continuous reflection. Embrace fall to ponder, celebrate, and plan for what's next. We offer questions and tips for a simple, impactful practice\u2014alone or with others.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c63ab6b16bdfbeb74abd0_This%20One%20Skill%20Could%20Have%20More%20Impact%20on%20Thriving%20Than%20You%20Think%20.png",
    imageAlt: "This One Skill Could Have More Impact on Thriving Than You Think",
  },
  {
    slug: "embracing-hope-to-ignite-collective-impact",
    date: "February 1, 2024",
    title: "Embracing Hope to Ignite Collective Impact",
    excerpt:
      "Ignite collaboration through hope! Discover how to increase resilience and innovation within your collaborative and create a future where challenges spark new ideas and collective action. Let's move hopeward together by generating pathways that turn aspirations into achievements.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c5e866b16bdfbeb71912c_embrace-hope.jpg",
    imageAlt: "Embracing Hope to Ignite Collective Impact",
  },
  {
    slug: "launching-problems-into-space",
    date: "March 1, 2023",
    title: "Launching Problems Into Space",
    excerpt:
      "We tend to rely on our past experiences and knowledge to solve problems. When we get stuck though, that\u2019s the time to look beyond our expertise and figure out how quilting (or whatever unique ways of fixing the problem we can find) can help launch us to new heights.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c601320d4b38fdb8d72b4_launching-problems.jpeg",
    imageAlt: "Launching Problems Into Space",
  },
];

type MoreBlogsProps = {
  articles?: ArticleCard[];
};

/**
 * Faithful port of `section.more-articles-section` (`more-insights`) from the
 * Hopeward insight detail pages (e.g.
 * `hopeward-26/insights/7-tips-to-make-grant-writing-a-winning-process.html`).
 */
export function MoreBlogs({ articles = MORE_ARTICLES }: MoreBlogsProps = {}) {
  return (
    <section
      className="section more-articles-section"
      data-section-id="more-insights"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-article-list">
          <div className="divider-dark-16" />
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small">more insights</div>
          </div>
        </div>
        <div className="blogs w-dyn-list">
          <div className="article-grid w-dyn-items" role="list">
            {articles.map((article) => (
              <div key={article.slug} className="w-dyn-item" role="listitem">
                <BlogCard
                  article={article}
                  dataIdPrefix="more-insights-card"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
