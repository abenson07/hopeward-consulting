#!/usr/bin/env python3
"""Replace template nav on insight pages with Hopeward home nav."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HOME = ROOT / "hopeward" / "home.html"
INSIGHTS = ROOT / "hopeward" / "insights"


def extract_master_navigation(html: str) -> str:
    start = html.index('<div class="master-navigation">')
    blur = html.index('    <div class="nav-blur"></div>', start)
    end = html.index("\n", blur) + 1
    end = html.index("\n", end) + 1
    return html[start:end]


def deepen_paths(text: str) -> str:
    text = text.replace('aria-current="page" ', "")
    text = text.replace(" w--current", "")

    def attr_fix(match: re.Match[str]) -> str:
        attr, val = match.group(1), match.group(2)
        if val.startswith(("http://", "https://", "mailto:", "#", "../../")):
            return match.group(0)
        if val.startswith("../"):
            return f'{attr}="../../{val[3:]}"'
        return f'{attr}="../{val}"'

    return re.sub(r'(href|src|srcset)="([^"]*)"', attr_fix, text)


def replace_navigation(page_html: str, nav_html: str) -> str:
    start = page_html.index('<div class="master-navigation">')
    blur = page_html.index('    <div class="nav-blur"></div>', start)
    end = page_html.index("\n", blur) + 1
    end = page_html.index("\n", end) + 1
    return page_html[:start] + nav_html + page_html[end:]


def ensure_hopeward_css(page_html: str) -> str:
    link = '<link href="../../css/hopeward.css" rel="stylesheet" type="text/css">'
    if link in page_html:
        return page_html
    needle = '<link href="../../css/evermind-template.css" rel="stylesheet" type="text/css">'
    return page_html.replace(
        needle,
        needle + "\n  " + link,
        1,
    )


def main() -> None:
    home_html = HOME.read_text(encoding="utf-8")
    nav = deepen_paths(extract_master_navigation(home_html))

    for path in sorted(INSIGHTS.glob("*.html")):
        updated = ensure_hopeward_css(replace_navigation(path.read_text(encoding="utf-8"), nav))
        path.write_text(updated, encoding="utf-8")
        print(path.name)


if __name__ == "__main__":
    main()
