#!/usr/bin/env python3
"""Post-migration cleanup: template nav links, video paths, footer CTAs on Hopeward pages."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent

BYQ_TEMPLATE = re.compile(
    r'href="https://www\.byq\.studio/template/evermind[^"]*"'
)


def fix_footer_video_urls(text: str, prefix: str) -> str:
    """Normalize data-video-urls comma-separated mp4/webm paths."""
    def repl(m: re.Match[str]) -> str:
        urls = m.group(1)
        fixed = []
        for part in urls.split(","):
            part = part.strip()
            if part.startswith(("http://", "https://", "../", prefix)):
                fixed.append(part)
            elif part.startswith("videos/"):
                fixed.append(prefix + part)
            else:
                fixed.append(part)
        return f'data-video-urls="{",".join(fixed)}"'

    return re.sub(r'data-video-urls="([^"]*)"', repl, text)


def clean_shared(text: str, contact_href: str) -> str:
    text = BYQ_TEMPLATE.sub(f'href="{contact_href}"', text)
    text = text.replace('href="https://www.byq.studio/"', f'href="{contact_href}"')
    text = text.replace('href="https://byq.studio/"', f'href="{contact_href}"')
    text = text.replace('href="https://byq.studio"', f'href="{contact_href}"')
    text = text.replace('>Buy Template<', '>Contact us<')
    text = text.replace('>Buy template<', '>Contact us<')
    text = re.sub(
        r'<a href="/customer-stories/[^"]*" class="footer-link">Customer Story</a>\s*',
        "",
        text,
    )
    text = re.sub(
        r'<a href="customer-stories\.html" class="footer-link">Customer Stories</a>\s*',
        "",
        text,
    )
    return text


def clean_root_html(text: str) -> str:
    text = text.replace('url(&quot;../videos/', 'url(&quot;videos/')
    text = fix_footer_video_urls(text, prefix="")
    text = clean_shared(text, "contact.html")

    replacements = [
        ('href="customer-stories.html"', 'href="blog.html"'),
        ('href="story-no-cms.html"', 'href="blog.html"'),
        ('href="pricing.html"', 'href="contact.html"'),
        ('href="overview.html"', 'href="about.html"'),
    ]
    for old, new in replacements:
        text = text.replace(old, new)

    text = re.sub(
        r'<div class="mobile-menu-link-wrap">.*?homepage/home-[abc]\.html.*?</div>\s*',
        "",
        text,
        flags=re.DOTALL,
    )
    return text


def clean_insight_html(text: str) -> str:
    text = text.replace('url(&quot;../../videos/', 'url(&quot;../videos/')
    text = fix_footer_video_urls(text, prefix="../")
    text = clean_shared(text, "../contact.html")
    text = text.replace('href="customer-stories.html"', 'href="../blog.html"')
    text = text.replace('href="../../customer-stories.html"', 'href="../blog.html"')
    text = text.replace('href="../../story-no-cms.html"', 'href="../blog.html"')
    text = text.replace('href="../../pricing.html"', 'href="../contact.html"')
    return text


def main() -> None:
    for path in sorted(ROOT.glob("*.html")):
        if path.name.startswith("."):
            continue
        text = path.read_text(encoding="utf-8")
        path.write_text(clean_root_html(text), encoding="utf-8")
        print("root", path.name)

    for path in sorted((ROOT / "insights").glob("*.html")):
        text = path.read_text(encoding="utf-8")
        path.write_text(clean_insight_html(text), encoding="utf-8")
        print("insight", path.name)


if __name__ == "__main__":
    main()
