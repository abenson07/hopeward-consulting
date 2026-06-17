#!/usr/bin/env python3
"""Inject Site Manager annotation bridge into Hopeward HTML pages.

Run from repo root: python3 scripts/hopeward/_inject_site_manager_bridge.py
"""
from __future__ import annotations

from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SCRIPT_MARKER = "site-manager-bridge.js"
ANCHORS = (
    '  <script src="js/evermind-template.js" type="text/javascript"></script>',
    '<script src="js/evermind-template.js" type="text/javascript"></script>',
)
INSIGHTS_ANCHORS = (
    '  <script src="../js/evermind-template.js" type="text/javascript"></script>',
    '<script src="../js/evermind-template.js" type="text/javascript"></script>',
)
ROOT_SCRIPT = '<script src="js/site-manager-bridge.js" type="text/javascript"></script>'
INSIGHTS_SCRIPT = '<script src="../js/site-manager-bridge.js" type="text/javascript"></script>'


def inject_script(html: str, script_tag: str, anchors: tuple[str, ...]) -> str:
    if SCRIPT_MARKER in html:
        return html
    for anchor in anchors:
        if anchor in html:
            return html.replace(anchor, anchor + "\n" + script_tag, 1)
    raise ValueError(f"anchor not found for script injection ({SCRIPT_MARKER})")


def main() -> None:
    for path in sorted(ROOT.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        text = inject_script(text, ROOT_SCRIPT, ANCHORS)
        path.write_text(text, encoding="utf-8")
        print("updated", path.name)

    insights_dir = ROOT / "insights"
    if insights_dir.is_dir():
        for path in sorted(insights_dir.glob("*.html")):
            text = path.read_text(encoding="utf-8")
            text = inject_script(text, INSIGHTS_SCRIPT, INSIGHTS_ANCHORS)
            path.write_text(text, encoding="utf-8")
            print("updated", f"insights/{path.name}")


if __name__ == "__main__":
    main()
