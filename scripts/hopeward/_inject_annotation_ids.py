#!/usr/bin/env python3
"""Inject data-section-id and data-id attributes on live Hopeward HTML pages.

Naming convention (website manager / Linear ingester):
  - data-section-id on <section> wrappers groups annotatable content.
  - data-id on individual elements (headlines, copy, CTAs, cards, images).
  - Pattern: {section-id}-{role} in kebab-case.
  - Reuses existing data-section-name values when present.

Run from repo root:
  python3 scripts/hopeward/_inject_annotation_ids.py
  python3 scripts/hopeward/_inject_annotation_ids.py --dry-run
"""
from __future__ import annotations

import argparse
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

INSIGHT_GLOB = "insights/*.html"

# Per-file section class -> data-section-id when data-section-name is absent.
PAGE_SECTION_CLASS_IDS: dict[str, dict[str, str]] = {
    "index.html": {
        "home-b-about-section": "home-hope-definition",
        "slider-home-b-section": "home-case-studies",
    },
    "services.html": {
        "hero-home-c-section": "services-hero",
        "services-home-c-section": "services-list",
        "column-home-c-section": "services-column",
        "system-home-c-section": "services-system",
        "testimonial-video-section": "services-testimonial",
        "home-c-selling-points-section": "services-selling-points",
        "ss-home-c-section": "services-social-proof",
    },
    "contact.html": {
        "faq-section": "contact-faq",
    },
    "blog.html": {
        "hero-blog-section": "blog-hero",
        "articles-section": "blog-articles",
    },
}

INSIGHT_SECTION_CLASS_IDS = {
    "hero-article-section": "article-hero",
    "article-body-section": "article-body",
    "more-articles-section": "more-insights",
}

FOOTER_SECTION_ID = "footer-cta"

TEXT_HEADING_CLASSES = ("text-h3", "text-h4", "text-h5", "text-h6", "text-h7")
TEXT_BODY_CLASSES = ("text-body", "text-large", "text-h5", "text-h6", "text-h7")
SKIP_IMG_ALT = frozenset({"", "Danielle Brower", "Rebecca Gillam"})


def slugify(value: str, max_len: int = 48) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^\w\s-]", "", value)
    value = re.sub(r"[\s_]+", "-", value)
    value = re.sub(r"-+", "-", value).strip("-")
    if len(value) > max_len:
        value = value[:max_len].rstrip("-")
    return value or "item"


def live_html_files() -> list[Path]:
    files: list[Path] = [ROOT / name for name in LIVE_ROOT_PAGES]
    for path in sorted((ROOT / "insights").glob("*.html")):
        files.append(path)
    return files


def rel_path(path: Path) -> str:
    return str(path.relative_to(ROOT)).replace("\\", "/")


def page_slug(path: Path) -> str:
    rel = rel_path(path)
    if rel == "index.html":
        return "home"
    if rel.startswith("insights/"):
        return Path(rel).stem
    return Path(rel).stem


def section_class_map(path: Path) -> dict[str, str]:
    rel = rel_path(path)
    if rel.startswith("insights/"):
        return dict(INSIGHT_SECTION_CLASS_IDS)
    return dict(PAGE_SECTION_CLASS_IDS.get(rel, {}))


def has_class(tag_classes: list[str] | str | None, needle: str) -> bool:
    if not tag_classes:
        return False
    if isinstance(tag_classes, str):
        return needle in tag_classes.split()
    return needle in tag_classes


def ensure_attr(tag, name: str, value: str, stats: dict) -> None:
    if tag.get(name):
        return
    tag[name] = value
    stats[f"attr_{name}"] = stats.get(f"attr_{name}", 0) + 1


def unique_id(base: str, used: set[str]) -> str:
    candidate = base
    n = 2
    while candidate in used:
        candidate = f"{base}-{n}"
        n += 1
    used.add(candidate)
    return candidate


def inject_section_ids(soup, path: Path, stats: dict) -> None:
    class_map = section_class_map(path)
    for section in soup.find_all("section"):
        if section.get("data-section-id"):
            continue
        name = section.get("data-section-name")
        if name:
            section["data-section-id"] = name
            stats["sections_from_name"] = stats.get("sections_from_name", 0) + 1
            continue
        if has_class(section.get("class"), "master-footer"):
            section["data-section-id"] = FOOTER_SECTION_ID
            stats["sections_footer"] = stats.get("sections_footer", 0) + 1
            continue
        for cls, sid in class_map.items():
            if has_class(section.get("class"), cls):
                section["data-section-id"] = sid
                stats["sections_from_class"] = stats.get("sections_from_class", 0) + 1
                break


def inject_footer_items(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", FOOTER_SECTION_ID)
    eyebrow = section.select_one(".eyebrow.light .label-small")
    if eyebrow:
        ensure_attr(eyebrow, "data-id", f"{sid}-eyebrow", stats)
    h2 = section.find("h2")
    if h2:
        ensure_attr(h2, "data-id", f"{sid}-heading", stats)
    ctas = section.select("a.cta-main")
    for i, cta in enumerate(ctas, 1):
        role = "contact" if "contact" in (cta.get("href") or "") else f"cta-{i}"
        ensure_attr(cta, "data-id", f"{sid}-{role}", stats)


def inject_generic_section(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id")
    if not sid:
        return

    if sid == FOOTER_SECTION_ID:
        inject_footer_items(section, used, stats)
        return

    for tag_name in ("h1", "h2", "h3", "h4", "h5", "h6"):
        for i, el in enumerate(section.find_all(tag_name, recursive=True), 1):
            suffix = "" if i == 1 else f"-{i}"
            ensure_attr(el, "data-id", unique_id(f"{sid}-title{suffix}", used), stats)

    for cls in TEXT_HEADING_CLASSES:
        for i, el in enumerate(section.select(f".{cls}"), 1):
            if el.name in ("h1", "h2", "h3", "h4", "h5", "h6"):
                continue
            if el.find_parent("a", class_=lambda c: c and ("card-expandable" in c or "card-article" in c or "card-cs" in c)):
                continue
            suffix = "" if i == 1 else f"-{i}"
            role = "heading" if cls.startswith("text-h") else "text"
            ensure_attr(el, "data-id", unique_id(f"{sid}-{role}{suffix}", used), stats)

    for i, el in enumerate(section.select(".eyebrow .label-small"), 1):
        suffix = "" if i == 1 else f"-{i}"
        ensure_attr(el, "data-id", unique_id(f"{sid}-eyebrow{suffix}", used), stats)

    for i, el in enumerate(section.select("a.cta-main, a.cta-book"), 1):
        ensure_attr(el, "data-id", unique_id(f"{sid}-cta-{i}", used), stats)

    for i, el in enumerate(section.select(".body-article"), 1):
        suffix = "" if i == 1 else f"-{i}"
        ensure_attr(el, "data-id", unique_id(f"{sid}-body{suffix}", used), stats)

    for i, el in enumerate(section.select("ul.home-a-column-bullets li"), 1):
        ensure_attr(el, "data-id", unique_id(f"{sid}-bullet-{i}", used), stats)

    for i, el in enumerate(section.select(".faq-paragraph"), 1):
        ensure_attr(el, "data-id", unique_id(f"{sid}-faq-a-{i}", used), stats)

    for i, el in enumerate(section.select(".accordion-top-tile .text-h6, .acordion-top-tile .text-h6"), 1):
        ensure_attr(el, "data-id", unique_id(f"{sid}-faq-q-{i}", used), stats)


def inject_audience_cards(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", "audience-cards")
    h2 = section.find(["h1", "h2"])
    if h2 and not h2.get("data-id"):
        ensure_attr(h2, "data-id", f"{sid}-heading", stats)
    for i, card in enumerate(section.select("a.card-expandable"), 1):
        if "organizations" in (card.get("href") or ""):
            role = "organizations"
        elif "collaboratives" in (card.get("href") or ""):
            role = "collaboratives"
        else:
            role = f"card-{i}"
        ensure_attr(card, "data-id", unique_id(f"{sid}-{role}-card", used), stats)
        title = card.select_one(".text-h6")
        if title and not title.get("data-id"):
            ensure_attr(title, "data-id", unique_id(f"{sid}-{role}-card-title", used), stats)


def inject_team_section(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", "meet-the-team")
    for card in section.select(".card-team"):
        img = card.find("img")
        name = (img.get("alt") if img else "") or card.get_text(strip=True)
        member = slugify(name.split()[0] + "-" + name.split()[-1] if name else "member")
        if img:
            ensure_attr(img, "data-id", unique_id(f"{sid}-{member}-photo", used), stats)
        name_el = card.select_one(".text-wrap-team div, .text-wrap-team strong")
        if name_el:
            ensure_attr(name_el, "data-id", unique_id(f"{sid}-{member}-name", used), stats)


def inject_resource_cards(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", "hero-resources-for-work-ahead")
    for item in section.select(".cs-item"):
        title_el = item.select_one(".text-h7")
        title = title_el.get_text(strip=True) if title_el else "resource"
        card_slug = slugify(title)[:40]
        link = item.select_one("a.card-cs")
        if link:
            ensure_attr(link, "data-id", unique_id(f"resources-card-{card_slug}", used), stats)


def inject_article_cards(section, used: set[str], stats: dict, prefix: str) -> None:
    sid = section.get("data-section-id", prefix)
    for card in section.select("a.card-article"):
        href = card.get("href") or ""
        slug = Path(href).stem if href.endswith(".html") else slugify(card.get_text())[:40]
        ensure_attr(card, "data-id", unique_id(f"{sid}-card-{slug}", used), stats)


def inject_service_benefits(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", "benefits")
    for i, card in enumerate(section.select(".card-service"), 1):
        title = card.select_one(".text-h7")
        label = slugify(title.get_text())[:30] if title else f"benefit-{i}"
        if title and not title.get("data-id"):
            ensure_attr(title, "data-id", unique_id(f"{sid}-{label}-title", used), stats)
        body = card.select_one(".text-dark-88")
        if body and not body.get("data-id"):
            ensure_attr(body, "data-id", unique_id(f"{sid}-{label}-body", used), stats)


def inject_service_list(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id", "explore-other-services")
    for link in section.select("a.service-item"):
        href = Path(link.get("href") or "").stem
        ensure_attr(link, "data-id", unique_id(f"{sid}-{href}", used), stats)


def inject_insight_hero(section, used: set[str], stats: dict, slug: str) -> None:
    h1 = section.find("h1")
    if h1:
        ensure_attr(h1, "data-id", unique_id(f"{slug}-hero-title", used), stats)
    date = section.select_one(".eyebrow .label-small")
    if date:
        ensure_attr(date, "data-id", unique_id(f"{slug}-hero-date", used), stats)
    img = section.select_one("img.image-cover")
    if img and img.get("alt"):
        ensure_attr(img, "data-id", unique_id(f"{slug}-hero-image", used), stats)


def inject_text_wrap_divs(section, used: set[str], stats: dict) -> None:
    sid = section.get("data-section-id")
    if not sid:
        return
    selectors = [
        ".text-wrap-home-b-hero > div",
        ".text-wrap-home-b-about > div",
        ".text-wrap-cs-hero > div",
        ".text-wrap-service-about .text-h6",
        ".text-large",
        ".headline-home-b-about .text-h5",
        ".content-column > div > div",
    ]
    seen: set[int] = set()
    counter = 0
    for sel in selectors:
        for el in section.select(sel):
            el_id = id(el)
            if el_id in seen:
                continue
            if el.get("data-id"):
                seen.add(el_id)
                continue
            text = el.get_text(strip=True)
            if not text or len(text) < 12:
                continue
            if el.find_parent(class_="card-team"):
                continue
            seen.add(el_id)
            counter += 1
            ensure_attr(el, "data-id", unique_id(f"{sid}-lede-{counter}", used), stats)


def inject_item_ids(soup, path: Path, stats: dict) -> None:
    slug = page_slug(path)
    used: set[str] = set()
    for section in soup.find_all("section"):
        sid = section.get("data-section-id")
        if not sid:
            continue
        if "audience-cards" in sid or sid.endswith("organizations-collaboratives") or "empowering-mission" in sid:
            inject_audience_cards(section, used, stats)
        if sid == "meet-the-team":
            inject_team_section(section, used, stats)
        if sid == "hero-resources-for-work-ahead":
            inject_resource_cards(section, used, stats)
        if sid in ("more-insights", "blog-articles"):
            inject_article_cards(section, used, stats, sid)
        if sid.startswith("benefits-"):
            inject_service_benefits(section, used, stats)
        if sid == "explore-other-services":
            inject_service_list(section, used, stats)
        if rel_path(path).startswith("insights/") and sid == "article-hero" and slug != "detail-blog":
            inject_insight_hero(section, used, stats, slug)
        inject_text_wrap_divs(section, used, stats)
        inject_generic_section(section, used, stats)


def process_file(path: Path, dry_run: bool) -> dict:
    html = path.read_text(encoding="utf-8")
    try:
        from bs4 import BeautifulSoup
    except ImportError:
        print("Install beautifulsoup4: pip install beautifulsoup4", file=sys.stderr)
        sys.exit(1)

    soup = BeautifulSoup(html, "html.parser")
    stats: dict = {}
    inject_section_ids(soup, path, stats)
    inject_item_ids(soup, path, stats)
    out = str(soup)
    if out != html and not dry_run:
        path.write_text(out, encoding="utf-8")
    stats["changed"] = out != html
    return stats


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("files", nargs="*", help="Optional specific files (repo-relative)")
    args = parser.parse_args()

    if args.files:
        paths = [ROOT / f for f in args.files]
    else:
        paths = live_html_files()

    total_sections = 0
    total_ids = 0
    changed = 0
    for path in paths:
        if not path.is_file():
            print(f"skip missing {path}")
            continue
        stats = process_file(path, args.dry_run)
        if stats.get("changed"):
            changed += 1
        sec = (
            stats.get("sections_from_name", 0)
            + stats.get("sections_from_class", 0)
            + stats.get("sections_footer", 0)
        )
        ids = stats.get("attr_data-id", 0)
        total_sections += sec
        total_ids += ids
        print(f"{rel_path(path)}: sections+={sec} data-id+={ids} {'(dry)' if args.dry_run else ''}")

    print(f"\nDone: {changed} files changed, ~{total_ids} data-id attributes added")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
