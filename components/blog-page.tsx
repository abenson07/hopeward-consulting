/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

import { BlogCard, articleHref, type ArticleCard } from "@/components/blog-card";

const FEATURED_MAIN: ArticleCard = {
  slug: "7-tips-to-make-grant-writing-a-winning-process",
  date: "February 1, 2023",
  title: "7 Tips to Make Grant Writing a Winning Process",
  excerpt:
    "Grant writing can be a daunting process and while there is no perfect formula to guarantee success; there are certainly steps you can take to increase your organization's likelihood of being awarded funding.",
  image:
    "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c607f5947824a1a2bd6fd_7%20Tips%20to%20Make%20Grant%20Writing%20a%20Winning%20Process.jpeg",
  imageAlt: "7 Tips to Make Grant Writing a Winning Process",
};

const SIDE_ARTICLES: Pick<ArticleCard, "slug" | "date" | "title">[] = [
  {
    slug: "cake-connections-how-to-not-get-stuck-asking-whats-next-to-a-new-grad",
    date: "May 31, 2022",
    title:
      'Cake Connections: How to not get stuck asking "what\'s next" to a new grad',
  },
  {
    slug: "embracing-hope-to-ignite-collective-impact",
    date: "February 1, 2024",
    title: "Embracing Hope to Ignite Collective Impact",
  },
  {
    slug: "hope-when-its-hard",
    date: "June 28, 2022",
    title: "Hope When It\u2019s Hard",
  },
];

const ARTICLE_GRID: ArticleCard[] = [
  FEATURED_MAIN,
  {
    slug: "cake-connections-how-to-not-get-stuck-asking-whats-next-to-a-new-grad",
    date: "May 31, 2022",
    title:
      'Cake Connections: How to not get stuck asking "what\'s next" to a new grad',
    excerpt:
      "As we celebrate academic milestones, instead of asking about future plans, consider having a unique conversation. Skip the usual inquiries about college and explore different topics over your next slice of graduation cake.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c614bc830e982d24923b2_Cake%20Connections.jpeg",
    imageAlt:
      'Cake Connections: How to not get stuck asking "what\'s next" to a new grad',
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
    slug: "hope-when-its-hard",
    date: "June 28, 2022",
    title: "Hope When It\u2019s Hard",
    excerpt:
      "These past few days have been sad and scary for a lot of people. And, just like Mr. Rogers\u2019 mother used to tell him, there are helpers everywhere. Friends who are safe and supportive. Businesases that are adding benefits. Voters that are ready to vote. Having hope isn\u2019t about miracle solutions",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c612b4e0b67cd2ac1ed59_Hope%20When%20It%E2%80%99s%20Hard%20.jpeg",
    imageAlt: "Hope When It\u2019s Hard",
  },
  {
    slug: "how-hope-can-help-your-new-years-resolutions-stick",
    date: "January 1, 2023",
    title: "How Hope Can Help Your New Year\u2019s Resolutions Stick",
    excerpt:
      "New Year's resolutions often lose steam as life intervenes. Sustain hope by adapting to challenges. Reflect on goals, consider shifts, and create new pathways. Seek alternative solutions and perspectives, track progress regularly, and stay hopeful for lasting success.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c60c6c9db159de3d3cd8c_How%20Hope%20Can%20Help%20Your%20New%20Year%E2%80%99s%20Resolutions%20Stick.jpeg",
    imageAlt: "How Hope Can Help Your New Year\u2019s Resolutions Stick",
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
  {
    slug: "lived-experience-is-data",
    date: "March 4, 2026",
    title: "Lived Experience Is Data",
    excerpt:
      "Data helps us see patterns, but it doesn\u2019t always reveal how programs and systems are actually experienced. At Hopeward, we believe lived experience and community knowledge are foundational data. This post explores why listening to the people closest to the work helps organizations move beyond numbers toward deeper understanding and more meaningful change.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/69a99c7ef95c5aee9f529b96_hopeward-blog-header%20(2).png",
    imageAlt: "Lived Experience Is Data",
  },
  {
    slug: "measuring-impact-why-evaluation-matters-in-nonprofit-work",
    date: "September 1, 2024",
    title: "Measuring Impact: Why Evaluation Matters in Nonprofit Work",
    excerpt:
      "In a sector where resources are limited, and the needs are vast, effective evaluation is more than just a \u201cnice-to-have\u201d \u2013 it is essential. Let\u2019s explore why evaluation matters so much in nonprofit work and how it can strengthen your organization\u2019s mission.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c5d74b78fbacdc44c2939_passion-led-us-here.png",
    imageAlt: "Measuring Impact: Why Evaluation Matters in Nonprofit Work",
  },
  {
    slug: "play-ball-how-spring-training-strategies-can-improve-your-work-game",
    date: "February 1, 2023",
    title: "Play Ball! How Spring Training Strategies Can Improve Your Work Game",
    excerpt:
      'Many of us lack a ritual that will bring renewed hope and a chance for a fresh start. Amid daily grind, rediscover excitement in work. Don\'t take growth for granted. Consider your personalized "spring training" as the baseball season begins.',
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c60488128ff5c0088fc64_play-ball.jpeg",
    imageAlt: "Play Ball! How Spring Training Strategies Can Improve Your Work Game",
  },
  {
    slug: "the-difference-between-coordination-and-collaboration",
    date: "March 16, 2026",
    title: "The Difference Between Coordination and Collaboration",
    excerpt:
      "Most teams default to more structure when things feel stuck. But sometimes the real gap isn't coordination, its collaboration. There's a difference between a team that knowns who is doing what and a team that is genuinely working together. Both matter. And getting both right is where lasting momentum comes from. Check out our new article exploring the difference.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/69b843b3115ac681288649d9_hopeward_header_var_3%20(1).png",
    imageAlt: "The Difference Between Coordination and Collaboration",
  },
  {
    slug: "the-science-of-hope-series-understanding-the-elements-of-hope",
    date: "April 1, 2024",
    title: "The Science of Hope Series: Understanding the Elements of Hope",
    excerpt:
      "This blog post dives into Shane Lopez\u2019s framework of hope. Examining the three key elements of hope: goals, pathways, and agency and explaining how each element contributes to a hope mindset.",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c5eb3e28e0dd616b5f87d_hope-paradigm.png",
    imageAlt: "The Science of Hope Series: Understanding the Elements of Hope",
  },
  {
    slug: "the-science-of-hope-series-you-can-measure-hope",
    date: "April 1, 2024",
    title: "The Science of Hope Series: You Can Measure Hope?",
    excerpt:
      "Grounded in the pioneering work of psychologist C.R. Snyder, hope theory has provided profound insights into the human capacity for resilience and optimism. At the heart of this theory lies the Hope Scale, a tool designed to measure and nurture hope in individuals. In this installment of our Science",
    image:
      "https://cdn.prod.website-files.com/670c32c226922ed61a286833/670c5e33c830e982d2475aaa_hope-scale.png",
    imageAlt: "The Science of Hope Series: You Can Measure Hope?",
  },
];

function ArticleEyebrow({ date }: { date: string }) {
  return (
    <div className="eyebrow">
      <div className="eyebrow-circle" />
      <div className="label-small">{date}</div>
    </div>
  );
}

/**
 * Faithful port of `section.articles-section` (`blog-articles`) from
 * `hopeward-26/blog.html`.
 */
export function BlogPage() {
  return (
    <section
      className="section articles-section"
      data-section-id="blog-articles"
      data-section-name="blog-articles"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-blog">
          <div className="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
            <div className="eyebrow-circle" />
            <div className="label-small">Insights</div>
          </div>
          <h1>Insights & News</h1>
        </div>
        <div className="w-layout-grid blog-halves">
          <div className="featured-main-article">
            <div className="featured-article-list">
              <div className="featured-article-item">
                <a
                  className="featured-article w-inline-block"
                  href={articleHref(FEATURED_MAIN.slug)}
                >
                  <div className="content-featured-article">
                    <ArticleEyebrow date={FEATURED_MAIN.date} />
                    <div className="text-h5">{FEATURED_MAIN.title}</div>
                    <div className="text-dark-88">{FEATURED_MAIN.excerpt}</div>
                    <div className="link-cs-card">
                      <div>Read article</div>
                    </div>
                  </div>
                  <div className="image-wrap-featured-article">
                    <img
                      alt={FEATURED_MAIN.imageAlt}
                      className="image-cover parallax"
                      loading="lazy"
                      src={FEATURED_MAIN.image}
                    />
                    <div className="overlay-featured-article" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="featured-side-articles">
            <div className="blog-side-list">
              {SIDE_ARTICLES.map((article) => (
                <a
                  key={article.slug}
                  className="article-side-card w-inline-block"
                  href={articleHref(article.slug)}
                >
                  <div className="article-side-top-tile">
                    <ArticleEyebrow date={article.date} />
                    <div className="text-h6">{article.title}</div>
                  </div>
                  <div className="link-underline-animated">
                    <div>Read article</div>
                    <div className="link-underline" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="headline-article-list">
          <div className="divider-dark-16" />
          <div className="eyebrow">
            <div className="eyebrow-circle" />
            <div className="label-small">All insights</div>
          </div>
        </div>
        <div className="w-layout-grid article-grid">
          {ARTICLE_GRID.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
