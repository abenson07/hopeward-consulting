#!/usr/bin/env python3
"""Inject modal-book component and script into all Hopeward HTML pages.

Run from repo root: python3 hopeward/_inject_book_modal.py
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
MODAL = (Path(__file__).resolve().parent / "components" / "modal-book.html").read_text(encoding="utf-8").strip()
MODAL_MARKER = 'id="hopeward-book-modal"'
SCRIPT_TAG = '  <script src="js/hopeward-book-modal.js" type="text/javascript"></script>'
SCRIPT_MARKER = 'src="js/hopeward-book-modal.js"'
INSERT_BEFORE = '  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery'


def inject_modal(html: str) -> str:
    start = html.find("<!-- Hopeward book consultation modal")
    if start != -1:
        end = html.find(INSERT_BEFORE, start)
        if end != -1:
            return html[:start] + MODAL + "\n" + html[end:]
    if MODAL_MARKER in html:
        return html
    if INSERT_BEFORE not in html:
        raise ValueError("jquery script anchor not found")
    return html.replace(INSERT_BEFORE, MODAL + "\n" + INSERT_BEFORE, 1)


def inject_script(html: str) -> str:
    if SCRIPT_MARKER in html:
        return html
    anchor = '  <script src="js/evermind-template.js" type="text/javascript"></script>'
    if anchor not in html:
        raise ValueError("evermind-template.js script not found")
    return html.replace(anchor, anchor + "\n" + SCRIPT_TAG, 1)


def fix_submit_rfp(html: str) -> str:
    old = (
        'href="https://www.byq.studio/" button="" data-wf--cta-main--variant="accent" '
        'target="_blank" class="cta-main w-inline-block">'
    )
    new = (
        'href="#" data-hopeward-book-modal button="" data-wf--cta-main--variant="accent" '
        'class="cta-main w-inline-block">'
    )
    return html.replace(old, new)


def fix_case_study_book_call(html: str) -> str:
    return re.sub(
        r'(<a\s+)href="contact\.html"(\s+class="link-cs-card w-inline-block">)\s*<div>Book a call</div>',
        r'\1href="#" data-hopeward-book-modal\2\n                <div>Book a call</div>',
        html,
        count=1,
    )


def main() -> None:
    for path in sorted(ROOT.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        text = fix_submit_rfp(text)
        text = fix_case_study_book_call(text)
        text = inject_modal(text)
        text = inject_script(text)
        path.write_text(text, encoding="utf-8")
        print("updated", path.name)


if __name__ == "__main__":
    main()
