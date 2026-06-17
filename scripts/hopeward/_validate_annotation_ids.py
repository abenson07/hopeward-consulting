#!/usr/bin/env python3
"""Validate data-section-id and data-id coverage on live Hopeward pages.

Exit code 0 when valid, 1 when issues found.

Run from repo root:
  python3 scripts/hopeward/_validate_annotation_ids.py
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent

LIVE_ROOT_PAGES = [
    "index.html",
    "about.html",
    "contact.html",
    "how-we-work.html",
    "organizations.html",
    "collaboratives.html",
    "the-science-of-hope.html",
    "assessment-planning.html",
    "program-strategy-execution.html",
    "evaluation-impact-reporting.html",
    "collaborative-leadership-collective-impact.html",
    "community-engagement-stakeholder-relations.html",
    "services.html",
    "blog.html",
    "resources.html",
]

SECTION_RE = re.compile(
    r"<section\b([^>]*)>",
    re.IGNORECASE,
)
DATA_SECTION_ID_RE = re.compile(r'data-section-id="([^"]+)"')
DATA_ID_RE = re.compile(r'data-id="([^"]+)"')
MASTER_NAV_END = re.compile(r'<div class="nav-blur"></div>\s*</div>', re.IGNORECASE)


def live_html_files() -> list[Path]:
    files = [ROOT / name for name in LIVE_ROOT_PAGES]
    files.extend(sorted((ROOT / "insights").glob("*.html")))
    return files


def content_sections(html: str) -> list[tuple[str, str]]:
    """Return section ids for top-level content <section> elements after nav."""
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        print("Install beautifulsoup4 for validation", file=sys.stderr)
        sys.exit(1)

    soup = BeautifulSoup(html, "html.parser")
    nav = soup.select_one(".master-navigation")
    sections: list[tuple[str, str]] = []
    for section in soup.find_all("section"):
        if nav and section.find_parent(class_="master-navigation"):
            continue
        parent_section = section.find_parent("section")
        if parent_section is not None:
            continue
        sid = section.get("data-section-id") or ""
        sections.append((str(section.attrs), sid))
    return sections


def validate_file(path: Path) -> list[str]:
    rel = str(path.relative_to(ROOT))
    html = path.read_text(encoding="utf-8")
    errors: list[str] = []

    sections = content_sections(html)
    if not sections:
        errors.append(f"{rel}: no <section> tags found after nav")
        return errors

    missing_sid = [i for i, (_, sid) in enumerate(sections, 1) if not sid]
    if missing_sid:
        errors.append(f"{rel}: {len(missing_sid)} section(s) missing data-section-id")

    ids = DATA_ID_RE.findall(html)
    if not ids:
        errors.append(f"{rel}: no data-id attributes found")
    dupes = {x for x in ids if ids.count(x) > 1}
    if dupes:
        errors.append(f"{rel}: duplicate data-id within file: {sorted(dupes)[:5]}")

  # blog should have more than footer
    if rel == "blog.html":
        if len(sections) < 3:
            errors.append(f"{rel}: expected blog-hero + blog-articles + footer (found {len(sections)} sections)")

    return errors


def main() -> int:
    all_errors: list[str] = []
    total_ids = 0
    total_sections = 0
    for path in live_html_files():
        if not path.is_file():
            all_errors.append(f"missing file: {path.relative_to(ROOT)}")
            continue
        html = path.read_text(encoding="utf-8")
        total_ids += len(DATA_ID_RE.findall(html))
        total_sections += sum(1 for _, sid in content_sections(html) if sid)
        all_errors.extend(validate_file(path))

    if all_errors:
        print("Validation FAILED:\n")
        for err in all_errors:
            print(f"  - {err}")
        print(f"\nSummary: {total_sections} sections with ids, {total_ids} data-id attrs across live pages")
        return 1

    print(f"Validation OK: {len(live_html_files())} pages, {total_sections} sections, {total_ids} data-id attributes")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
