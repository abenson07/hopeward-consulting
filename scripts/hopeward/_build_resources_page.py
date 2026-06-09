#!/usr/bin/env python3
"""Rebuild cs-halves on hopeward/resources.html from hopeward/data/resources.csv.

Run from repo root: python3 hopeward/_build_resources_page.py
"""
from __future__ import annotations

import csv
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
SCRIPT_DIR = Path(__file__).resolve().parent
CSV_PATH = SCRIPT_DIR / "data" / "resources.csv"
RESOURCES_HTML = ROOT / "resources.html"
FALLBACK_IMAGE = "images/CS-Thumbnail_1.webp"
D = "motion.div".replace("motion.", "")  # "div"

TYPE_FILTER = {
    "book": "books",
    "video": "video",
    "article": "articles",
}

TYPE_TAG = {
    "book": "Books",
    "video": "Video",
    "article": "Articles",
}

LINK_LABEL = {
    "book": "View resource",
    "video": "Watch resource",
    "article": "Read resource",
}

ARROW_SVG = """<div class="icon-link-arrow w-embed"><svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewbox="0 0 16 16" fill="none">
                            <path d="M3.33594 7.9987L12.0026 7.9987M8.0026 3.33203L12.6693 7.9987M8.0026 12.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg></div>"""


def truthy(value: str) -> bool:
    return value.strip().lower() in ("true", "1", "yes")


def should_show_on_resources(row: dict[str, str]) -> bool:
    if truthy(row.get("Archived", "")):
        return False
    if truthy(row.get("Hide from Resources page", "")):
        return False
    return True


def resource_href(row: dict[str, str]) -> str:
    rtype = row.get("Resource Type", "").strip().lower()
    if rtype == "video":
        return row.get("Video Link", "").strip() or row.get("Resource Link", "").strip()
    return row.get("Resource Link", "").strip()


def resource_image(row: dict[str, str]) -> str:
    rtype = row.get("Resource Type", "").strip().lower()
    if rtype == "book":
        return row.get("Book Image", "").strip() or FALLBACK_IMAGE
    if rtype == "video":
        return row.get("Video Thumbnail", "").strip() or FALLBACK_IMAGE
    return FALLBACK_IMAGE


def card_html(row: dict[str, str]) -> str:
    rtype = row.get("Resource Type", "").strip().lower()
    filter_type = TYPE_FILTER.get(rtype, rtype)
    tag = TYPE_TAG.get(rtype, rtype.title())
    name = row.get("Name", "").strip()
    source = row.get("Source Name", "").strip()
    href = resource_href(row)
    img = resource_image(row)
    link_label = LINK_LABEL.get(rtype, "Read resource")
    alt = html.escape(name)

    return f"""        <{D} class="cs-item" data-resource-type="{html.escape(filter_type)}">
            <a href="{html.escape(href, quote=True)}" target="_blank" rel="noopener noreferrer" class="card-cs w-inline-block">
              <{D} class="image-wrap-cs-card"><img src="{html.escape(img)}" loading="lazy" alt="{alt}" class="image-cover parallax">
                <{D} class="overlay-tag-card">
                  <{D} class="card-tag">
                    <{D} class="label-small">{html.escape(tag)}</{D}>
                  </{D}>
                </{D}>
              </{D}>
              <{D} class="content-cs-card">
                <{D} class="cs-card-top-tile">
                  <{D} data-wf--eyebrow--variant="base" class="eyebrow">
                    <{D} class="eyebrow-circle"></{D}>
                    <{D} class="label-small">{html.escape(source)}</{D}>
                  </{D}>
                  <{D} class="text-h7">{html.escape(name)}</{D}>
                </{D}>
                <{D} class="cs-card-bottom-tile">
                  <{D} class="link-cs-card">
                    <{D}>{html.escape(link_label)}</{D}>
                    <{D} class="icon-wrap-card-link">
                      <{D} link-icon="" class="icon-inner-card">
                        {ARROW_SVG}
                      </{D}>
                    </{D}>
                  </{D}>
                </{D}>
              </{D}>
            </a>
          </{D}>"""


def mixed_resource_order(rows: list[dict[str, str]]) -> list[dict[str, str]]:
    """Interleave books, videos, and articles instead of CSV block order."""
    visible = [r for r in rows if should_show_on_resources(r)]
    buckets: dict[str, list[dict[str, str]]] = {"book": [], "video": [], "article": []}
    for row in visible:
        rtype = row.get("Resource Type", "").strip().lower()
        buckets.setdefault(rtype, []).append(row)
    # Start with video so the grid does not lead with four books in a row.
    order = ("video", "book", "article")
    mixed: list[dict[str, str]] = []
    lists = [buckets.get(key, []) for key in order]
    from itertools import zip_longest

    for group in zip_longest(*lists):
        for row in group:
            if row is not None:
                mixed.append(row)
    return mixed


def build_halves(rows: list[dict[str, str]]) -> str:
    cards = [card_html(row) for row in mixed_resource_order(rows)]
    if not cards:
        raise SystemExit("No resources to render after filtering.")
    return f'        <{D} class="cs-halves">\n' + "\n".join(cards) + f"\n        </{D}>"


def patch_resources_html(halves: str) -> None:
    text = RESOURCES_HTML.read_text(encoding="utf-8")
    pattern = re.compile(
        r'        <div class="cs-halves">.*?</div>\s*'
        r'(?=</div>\s*</div>\s*<img src="\.\./images/Dots\.svg")',
        re.DOTALL,
    )
    new_text, count = pattern.subn(halves + "\n      ", text, count=1)
    if count != 1:
        raise SystemExit("Could not find cs-halves block in resources.html")
    RESOURCES_HTML.write_text(new_text, encoding="utf-8")


def main() -> None:
    with CSV_PATH.open(newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    visible = mixed_resource_order(rows)
    halves = build_halves(rows)
    patch_resources_html(halves)
    print(f"Wrote {len(visible)} resource cards to {RESOURCES_HTML.name}")


if __name__ == "__main__":
    main()
