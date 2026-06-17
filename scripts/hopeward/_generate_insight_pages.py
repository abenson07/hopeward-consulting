#!/usr/bin/env python3
"""Populate insights/*.html from Webflow blog CSV export."""
from __future__ import annotations

import csv
import html
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
INSIGHTS = ROOT / "insights"
TEMPLATE_PATH = INSIGHTS / "detail-blog.html"
DEFAULT_CSV = Path(
    "/Users/alexbenson/Downloads/Hopeward 2024 - Blog Posts - 670c32f84458519e4d4a1a53.csv"
)

AUTHOR_NAMES = {
    "danielle-brower": "Danielle Brower",
    "rebecca-gillam": "Rebecca Gillam",
}


def format_posted_date(raw: str) -> str:
    raw = (raw or "").strip()
    if not raw:
        return ""
    try:
        dt = datetime.strptime(raw.split(" GMT")[0], "%a %b %d %Y %H:%M:%S")
        return dt.strftime("%B %d, %Y").replace(" 0", " ")
    except ValueError:
        return raw


def clean_cms_html(fragment: str) -> str:
    if not fragment:
        return ""
    fragment = fragment.replace('id=""""', "")
    fragment = re.sub(r'\s+id=""{0,4}"?', "", fragment)
    fragment = re.sub(r'\s+id=">', "", fragment)
    fragment = fragment.replace('href=""', 'href="')
    fragment = fragment.replace('target=""_blank""', 'target="_blank"')
    fragment = re.sub(r'""(?=[>\s/])', '"', fragment)
    return fragment.strip()


def author_display(slug: str) -> str:
    slug = (slug or "").strip()
    if not slug:
        return ""
    return AUTHOR_NAMES.get(slug, slug.replace("-", " ").title())


def build_body(row: dict) -> str:
    parts: list[str] = []
    body = clean_cms_html(row.get("Post Body", "") or "")
    if body:
        parts.append(body)
    video = (row.get("Video Link") or "").strip()
    if video:
        safe_url = html.escape(video, quote=True)
        parts.append(
            f'<p><a href="{safe_url}" target="_blank" rel="noopener noreferrer">Watch video</a></p>'
        )
    cited = clean_cms_html(row.get("Works Cited") or "")
    if cited:
        parts.append(cited)
    return "\n".join(parts)


def related_cards_html(current_slug: str, related_raw: str, by_slug: dict[str, dict]) -> str:
    slugs = [s.strip() for s in (related_raw or "").split(";") if s.strip()]
    slugs = [s for s in slugs if s != current_slug][:3]
    lines: list[str] = []
    for slug in slugs:
        post = by_slug.get(slug)
        if not post:
            continue
        name = html.escape(post["Name"])
        summary = html.escape(post.get("Post Summary") or "")
        date = html.escape(format_posted_date(post.get("Date Posted (if backdated or advance dated)", "")))
        img = html.escape(post.get("Main Image") or "", quote=True)
        href = html.escape(f"{slug}.html", quote=True)
        lines.append(
            f"""          <div role="listitem" class="w-dyn-item">
            <a href="{href}" class="card-article w-inline-block" data-id="more-insights-card-{slug}">
              <div class="image-wrap-article-card"><img src="{img}" loading="lazy" alt="" class="image-cover parallax"></div>
              <div class="text-wrap-article-card">
                <div class="eyebrow">
                  <div class="eyebrow-circle"></div>
                  <div class="label-small">{date}</div>
                </div>
                <div class="text-h5">{name}</div>
                <div>{summary}</div>
              </div>
            </a>
          </div>"""
        )
    return "\n".join(lines)


def render_post(template: str, row: dict, by_slug: dict[str, dict]) -> str:
    slug = row["Slug"].strip()
    name = row["Name"].strip()
    summary = (row.get("Post Summary") or "").strip()
    image = (row.get("Main Image") or row.get("Thumbnail image") or "").strip()
    date_label = format_posted_date(row.get("Date Posted (if backdated or advance dated)", ""))
    author = author_display(row.get("Author") or "")
    body_html = build_body(row)
    title_esc = html.escape(f"{name} | Hopeward")
    summary_esc = html.escape(summary)
    name_esc = html.escape(name)
    image_esc = html.escape(image, quote=True)
    date_esc = html.escape(date_label)
    author_esc = html.escape(author)
    alt_esc = html.escape(name)

    out = template
    out = out.replace("<title></title>", f"<title>{title_esc}</title>")
    out = re.sub(
        r'<meta content="" name="description">',
        f'<meta content="{summary_esc}" name="description">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="og:title">',
        f'<meta content="{title_esc}" property="og:title">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="og:description">',
        f'<meta content="{summary_esc}" property="og:description">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="og:image">',
        f'<meta content="{image_esc}" property="og:image">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="twitter:title">',
        f'<meta content="{title_esc}" property="twitter:title">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="twitter:description">',
        f'<meta content="{summary_esc}" property="twitter:description">',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta content="" property="twitter:image">',
        f'<meta content="{image_esc}" property="twitter:image">',
        out,
        count=1,
    )
    out = out.replace(
        'style="filter:blur(12px);opacity:0" class="left-article-hero"',
        'class="left-article-hero"',
    )

    hero_block = f"""        <div class="left-article-hero">
          <div data-wf--eyebrow--variant="base" class="eyebrow">
            <div class="eyebrow-circle"></div>
            <div class="label-small" data-id="{slug}-hero-date">{date_esc}</div>
          </div>
          <h1 data-id="{slug}-hero-title">{name_esc}</h1>
        </div>
        <div class="article-image-placeholder">
          <div data-w-id="267c43ad-7411-0cae-3c26-40a6d3d0b5eb" class="image-wrap-article"><img src="{image_esc}" loading="lazy" alt="{alt_esc}" class="image-cover parallax" data-id="{slug}-hero-image"></div>
        </div>"""

    out = re.sub(
        r'<div class="w-layout-grid article-hero-halves">.*?</div>\s*</div>\s*</div>',
        f'<div class="w-layout-grid article-hero-halves">\n{hero_block}\n      </div>',
        out,
        count=1,
        flags=re.DOTALL,
    )

    author_block = f'<div class="label-small">{author_esc}</div>' if author else ""
    out = out.replace(
        '<div class="label-small">Written by</div>\n              <div class="label-small w-dyn-bind-empty"></div>',
        f'<div class="label-small">Written by</div>\n              {author_block}',
    )

    body_block = f"""      <div class="master-body-article">
        <div class="article-body-small">
          <div class="body-article w-richtext" data-id="{slug}-article-body">{body_html}</div>
        </div>
      </div>"""

    out = re.sub(
        r'<div class="master-body-article">[\s\S]*?</section>\s*<section class="section more-articles-section">',
        body_block + "\n    </div>\n  </section>\n  <section class=\"section more-articles-section\">",
        out,
        count=1,
    ).replace('<div class="master-body-article">', '<div class="master-body-article">', 0)

    related = related_cards_html(slug, row.get("Related Blog(s)", ""), by_slug)
    if related:
        out = re.sub(
            r'<div role="list" class="article-grid w-dyn-items">.*?</div>\s*<div class="w-dyn-empty">',
            f'<div role="list" class="article-grid w-dyn-items">\n{related}\n        </div>\n        <div class="w-dyn-empty" style="display:none">',
            out,
            count=1,
            flags=re.DOTALL,
        )

    return out


def main() -> None:
    csv_path = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_CSV
    template = TEMPLATE_PATH.read_text(encoding="utf-8")
    with csv_path.open(newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    by_slug = {r["Slug"].strip(): r for r in rows}
    for row in rows:
        slug = row["Slug"].strip()
        (INSIGHTS / f"{slug}.html").write_text(render_post(template, row, by_slug), encoding="utf-8")
        print(f"Wrote {slug}.html")
    print(f"Done — {len(rows)} insight pages.")
    print("Applying Hopeward nav from index.html …")
    import runpy

    runpy.run_path(str(ROOT / "scripts" / "hopeward" / "_patch_insights_nav.py"), run_name="__main__")
    print("Injecting annotation IDs on insight pages …")
    import subprocess

    insight_paths = [f"insights/{p.name}" for p in sorted(INSIGHTS.glob("*.html"))]
    subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "hopeward" / "_inject_annotation_ids.py"), *insight_paths],
        check=True,
        cwd=ROOT,
    )


if __name__ == "__main__":
    main()
