#!/usr/bin/env python3
"""Restore blog.html hero + articles grid linking to live insight pages."""
from __future__ import annotations

import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
BLOG = ROOT / "blog.html"
INSIGHTS = ROOT / "insights"


def parse_insight(path: Path) -> dict | None:
    if path.name == "detail-blog.html":
        return None
    text = path.read_text(encoding="utf-8")
    title_m = re.search(r"<h1[^>]*>([^<]+)</h1>", text)
    date_m = re.search(
        r'hero-article-section[\s\S]*?<div class="label-small">([^<]*)</div>',
        text,
    )
    img_m = re.search(
        r'hero-article-section[\s\S]*?<img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"',
        text,
    )
    summary_m = re.search(r'<meta content="([^"]*)" name="description">', text)
    if not title_m:
        return None
    return {
        "slug": path.stem,
        "href": f"insights/{path.name}",
        "title": title_m.group(1).strip(),
        "date": (date_m.group(1) if date_m else "").strip(),
        "image": img_m.group(1) if img_m else "images/About-Image_1.webp",
        "summary": (summary_m.group(1) if summary_m else "").strip(),
    }


def card_article(post: dict, extra_class: str = "") -> str:
    cls = f"card-article w-inline-block {extra_class}".strip()
    return f"""        <a href="{html.escape(post['href'])}" class="{cls}">
          <div class="image-wrap-article-card"><img src="{html.escape(post['image'], quote=True)}" loading="lazy" alt="{html.escape(post['title'])}" class="image-cover parallax"></div>
          <div class="text-wrap-article-card">
            <div class="eyebrow">
              <div class="eyebrow-circle"></div>
              <div class="label-small">{html.escape(post['date'])}</div>
            </div>
            <div class="text-h5">{html.escape(post['title'])}</div>
            <div>{html.escape(post['summary'])}</div>
          </div>
        </a>"""


def side_card(post: dict) -> str:
    return f"""            <a href="{html.escape(post['href'])}" class="article-side-card w-inline-block">
              <div class="article-side-top-tile">
                <div data-wf--eyebrow--variant="base" class="eyebrow">
                  <div class="eyebrow-circle"></div>
                  <div class="label-small">{html.escape(post['date'])}</div>
                </div>
                <div class="text-h6">{html.escape(post['title'])}</div>
              </div>
              <div class="link-underline-animated">
                <div>Read article</div>
                <div class="link-underline"></div>
              </div>
            </a>"""


def build_blog_sections(posts: list[dict]) -> str:
    featured = posts[0]
    side = posts[1:4]
    grid = posts[:12]
    side_html = "\n".join(side_card(p) for p in side)
    grid_html = "\n".join(card_article(p) for p in grid)
    hero_img = html.escape(featured["image"], quote=True)
    return f"""  <section data-section-name="blog-hero" data-section-id="blog-hero" class="section hero-blog-section">
    <div class="blog-overlay-gradient"></div>
    <div class="hero-featured">
      <div class="blog-bg"><img src="{hero_img}" loading="lazy" sizes="100vw" alt="{html.escape(featured['title'])}" class="image-cover">
        <div class="overlay-blog-hero"></div>
      </div>
    </div>
  </section>
  <section data-section-name="blog-articles" data-section-id="blog-articles" class="section articles-section">
    <div class="w-layout-blockcontainer main-container w-container">
      <div class="headline-blog">
        <div data-wf--eyebrow--variant="light" class="eyebrow w-variant-d0c116b2-ccca-6779-50e7-85c81eef344c">
          <div class="eyebrow-circle"></div>
          <div class="label-small">Insights</div>
        </div>
        <h1 heading-load="">Insights &amp; News</h1>
      </div>
      <div class="w-layout-grid blog-halves">
        <div class="featured-main-article">
          <div class="featured-article-list">
            <div class="featured-article-item">
              <a href="{html.escape(featured['href'])}" class="featured-article w-inline-block">
                <div class="content-featured-article">
                  <div data-wf--eyebrow--variant="base" class="eyebrow">
                    <div class="eyebrow-circle"></div>
                    <div class="label-small">{html.escape(featured['date'])}</div>
                  </div>
                  <div class="text-h5">{html.escape(featured['title'])}</div>
                  <div class="text-dark-88">{html.escape(featured['summary'])}</div>
                  <div class="link-cs-card">
                    <div>Read article</div>
                  </div>
                </div>
                <div class="image-wrap-featured-article"><img src="{hero_img}" loading="lazy" alt="{html.escape(featured['title'])}" class="image-cover parallax">
                  <div class="overlay-featured-article"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="featured-side-articles">
          <div class="blog-side-list">
{side_html}
          </div>
        </div>
      </div>
      <div class="headline-article-list">
        <div class="divider-dark-16"></div>
        <div data-wf--eyebrow--variant="base" class="eyebrow">
          <div class="eyebrow-circle"></div>
          <div class="label-small">All insights</div>
        </div>
      </div>
      <div class="w-layout-grid article-grid">
{grid_html}
      </div>
    </div>
  </section>
"""


def main() -> None:
    posts: list[dict] = []
    for path in sorted(INSIGHTS.glob("*.html")):
        post = parse_insight(path)
        if post:
            posts.append(post)
    if not posts:
        raise SystemExit("No insight posts found")

    blog_html = BLOG.read_text(encoding="utf-8")
    marker_start = '    <div class="nav-blur"></div>\n  </div>\n'
    marker_end = '  <section data-section-name="footer-cta"'
    if marker_start not in blog_html:
        raise SystemExit("blog.html nav marker not found")
    if marker_end not in blog_html:
        marker_end = '  <section class="master-footer"'
    start = blog_html.index(marker_start) + len(marker_start)
    end = blog_html.index(marker_end)
    new_html = blog_html[:start] + build_blog_sections(posts) + "\n" + blog_html[end:]
    BLOG.write_text(new_html, encoding="utf-8")
    print(f"Updated {BLOG.name} with {len(posts)} insight links")


if __name__ == "__main__":
    main()
