#!/usr/bin/env python3
"""Replace template nav on insight pages with Hopeward home nav."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
HOME = ROOT / "index.html"
INSIGHTS = ROOT / "insights"


def extract_master_navigation(html: str) -> str:
    start = html.index('<div class="master-navigation">')
    blur = html.index('    <div class="nav-blur"></div>', start)
    end = html.index("\n", blur) + 1
    end = html.index("\n", end) + 1
    return html[start:end]


def deepen_paths_for_insights(text: str) -> str:
    """Root nav uses css/, images/ — insights need ../ prefix on relative paths."""
    text = text.replace('aria-current="page" ', "")
    text = text.replace(" w--current", "")

    def fix_srcset(val: str) -> str:
        parts: list[str] = []
        for chunk in val.split(", "):
            chunk = chunk.strip()
            if not chunk:
                continue
            tokens = chunk.rsplit(" ", 1)
            if len(tokens) == 2 and tokens[1].endswith("w"):
                url, descriptor = tokens[0].strip(), tokens[1]
                if not url.startswith(("http://", "https://", "mailto:", "#", "/", "../")):
                    url = "../" + url
                parts.append(f"{url} {descriptor}")
            elif not chunk.startswith(("http://", "https://", "mailto:", "#", "/", "../")):
                parts.append("../" + chunk)
            else:
                parts.append(chunk)
        return ", ".join(parts)

    def attr_fix(match: re.Match[str]) -> str:
        attr, val = match.group(1), match.group(2)
        if val.startswith(("http://", "https://", "mailto:", "#", "/")):
            return match.group(0)
        if attr == "srcset":
            return f'srcset="{fix_srcset(val)}"'
        if val.startswith("../"):
            return match.group(0)
        return f'{attr}="../{val}"'

    return re.sub(r'(href|src|srcset)="([^"]*)"', attr_fix, text)


def replace_navigation(page_html: str, nav_html: str) -> str:
    start = page_html.index('<div class="master-navigation">')
    blur = page_html.index('    <div class="nav-blur"></div>', start)
    end = page_html.index("\n", blur) + 1
    end = page_html.index("\n", end) + 1
    return page_html[:start] + nav_html + page_html[end:]


def ensure_hopeward_css(page_html: str) -> str:
    link = '<link href="../css/hopeward.css" rel="stylesheet" type="text/css">'
    if link in page_html:
        return page_html
    needle = '<link href="../css/evermind-template.css" rel="stylesheet" type="text/css">'
    return page_html.replace(needle, needle + "\n  " + link, 1)


def main() -> None:
    home_html = HOME.read_text(encoding="utf-8")
    nav = deepen_paths_for_insights(extract_master_navigation(home_html))

    for path in sorted(INSIGHTS.glob("*.html")):
        updated = ensure_hopeward_css(replace_navigation(path.read_text(encoding="utf-8"), nav))
        path.write_text(updated, encoding="utf-8")
        print(path.name)


if __name__ == "__main__":
    main()
