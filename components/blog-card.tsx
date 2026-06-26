/* eslint-disable @next/next/no-img-element -- Faithful Webflow ports preserve source <img> markup. */

export type ArticleCard = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export function articleHref(slug: string) {
  return `/insights/${slug}`;
}

function ArticleEyebrow({ date }: { date: string }) {
  return (
    <div className="eyebrow">
      <div className="eyebrow-circle" />
      <div className="label-small">{date}</div>
    </div>
  );
}

type BlogCardProps = {
  article: ArticleCard;
  dataIdPrefix?: string;
};

export function BlogCard({
  article,
  dataIdPrefix = "blog-articles-card",
}: BlogCardProps) {
  return (
    <a
      className="card-article w-inline-block"
      data-id={`${dataIdPrefix}-${article.slug}`}
      href={articleHref(article.slug)}
    >
      <div className="image-wrap-article-card">
        <img
          alt={article.imageAlt}
          className="image-cover parallax"
          loading="lazy"
          src={article.image}
        />
      </div>
      <div className="text-wrap-article-card">
        <ArticleEyebrow date={article.date} />
        <div className="text-h5">{article.title}</div>
        <div>{article.excerpt}</div>
      </div>
    </a>
  );
}
