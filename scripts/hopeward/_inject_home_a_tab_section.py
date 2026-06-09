#!/usr/bin/env python3
"""Inject shared home-a-tab-section into Hopeward HTML pages.

Edit hopeward/components/home-a-tab-section.html, then run from repo root:

    python3 hopeward/_inject_home_a_tab_section.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
COMPONENT_PATH = ROOT / "components" / "home-a-tab-section.html"
SECTION_RE = re.compile(
    r"<section class=\"section home-a-tab-section\">.*?</section>\s*"
    r"(?=<section class=\"master-footer\">)",
    re.DOTALL,
)
def load_component() -> str:
    text = COMPONENT_PATH.read_text(encoding="utf-8")
    lines = text.splitlines()
    if lines and lines[0].startswith("<!-- hopeward:component"):
        lines = lines[1:]
    return "\n".join(lines).strip() + "\n"


def inject(html: str, component: str) -> tuple[str, bool]:
    if not SECTION_RE.search(html):
        return html, False
    return SECTION_RE.sub(component, html, count=1), True


def main() -> None:
    component = load_component()
    updated = 0
    for path in sorted(ROOT.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        new_text, changed = inject(text, component)
        if changed:
            path.write_text(new_text, encoding="utf-8")
            updated += 1
            print("updated", path.name)
    if updated == 0:
        print("no pages updated")
    else:
        print(f"done — {updated} page(s)")


if __name__ == "__main__":
    main()
