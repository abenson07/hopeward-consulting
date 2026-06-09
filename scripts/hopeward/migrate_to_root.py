#!/usr/bin/env python3
"""One-shot path migration: hopeward/ → repo root + insights/ depth fix."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent.parent
ASSET_DIRS = ("css/", "js/", "images/", "videos/", "fonts/", "new_images/", "new/")


def strip_one_parent(path_val: str) -> str:
    """Remove one leading ../ from asset URLs."""
    if path_val.startswith(("http://", "https://", "mailto:", "#", "data:", "//", "/")):
        return path_val
    if ", " in path_val and ("w" in path_val or " " in path_val):
        parts = []
        for chunk in path_val.split(", "):
            chunk = chunk.strip()
            if not chunk:
                continue
            tokens = chunk.rsplit(" ", 1)
            if len(tokens) == 2 and tokens[1].endswith("w"):
                url, descriptor = tokens
                parts.append(strip_one_parent(url.strip()) + " " + descriptor)
            else:
                parts.append(strip_one_parent(chunk))
        return ", ".join(parts)
    if path_val.startswith("../"):
        return path_val[3:]
    return path_val


def patch_attr_value(val: str, depth: int) -> str:
    """depth 0 = root HTML, depth 1 = insights/*.html"""
    if val.startswith(("http://", "https://", "mailto:", "#", "data:", "//", "/")):
        return val
    # Strip depth+1 levels of ../ from asset paths
    for _ in range(depth + 1):
        for prefix in ASSET_DIRS:
            if val.startswith("../" * (_ + 1) + prefix if False else ""):
                pass
    # Simpler: repeatedly strip ../ while followed by asset dir
    out = val
    for _ in range(depth + 1):
        for prefix in ASSET_DIRS:
            if out.startswith("../" + prefix):
                out = out[3:]
                break
            if out.startswith(prefix):
                break
        else:
            if out.startswith("../") and not any(out.startswith("../" + p) for p in ASSET_DIRS):
                # sibling page link ../about.html at insights depth
                if out.endswith(".html") or "/" in out[3:]:
                    out = out[3:]
    return out


def fix_root_page(text: str) -> str:
    """Pages at repo root: ../css/ → css/, home.html → index.html"""

    def attr_repl(m: re.Match[str]) -> str:
        attr, quote, val = m.group(1), m.group(2), m.group(3)
        new = val
        for prefix in ASSET_DIRS:
            new = new.replace(f"../{prefix}", prefix)
        new = re.sub(r"url\(&quot;\.\./videos/", "url(&quot;videos/", new)
        new = new.replace("videos/../", "videos/")
        if attr == "href" and new == "../":
            new = ""
        return f"{attr}={quote}{new}{quote}"

    text = re.sub(r'(href|src|srcset|data-poster-url|data-video-urls)=("|\')([^"\']*)\2', attr_repl, text)
    text = text.replace('href="home.html"', 'href="index.html"')
    text = text.replace("href='home.html'", "href='index.html'")
    text = re.sub(r'href="\.\./([a-z0-9][^"]*\.html)"', r'href="\1"', text)
    return text


def fix_insights_page(text: str) -> str:
    """Pages in insights/: ../../css/ → ../css/, ../home.html → ../index.html"""

    def attr_repl(m: re.Match[str]) -> str:
        attr, quote, val = m.group(1), m.group(2), m.group(3)
        new = val
        for prefix in ASSET_DIRS:
            new = new.replace(f"../../{prefix}", f"../{prefix}")
        new = re.sub(r"url\(&quot;\.\./\.\./videos/", "url(&quot;../videos/", new)
        if attr == "href" and new == "../home.html":
            new = "../index.html"
        return f"{attr}={quote}{new}{quote}"

    text = re.sub(r'(href|src|srcset|data-poster-url|data-video-urls)=("|\')([^"\']*)\2', attr_repl, text)
    return text


def remove_sales_cta(text: str) -> str:
    return re.sub(
        r'\n  <div class="sales-cta-master">[\s\S]*?\n  <section class="master-footer">',
        "\n  <section class=\"master-footer\">",
        text,
        count=1,
    )


def clean_footer_legal(text: str) -> str:
    text = re.sub(
        r'\s*<div class="text-small text-dark-64">·</div>\s*<a href="template/[^"]*" class="footer-legal-link">[^<]*</a>',
        "",
        text,
    )
    text = re.sub(
        r'<a href="template/style-guide\.html" class="footer-legal-link">Style Guide</a>\s*',
        "",
        text,
    )
    text = re.sub(
        r'<a href="template/licenses\.html" class="footer-legal-link">Licenses</a>\s*',
        "",
        text,
    )
    text = re.sub(
        r'<a href="template/changelog\.html" class="footer-legal-link">Changelog</a>\s*',
        "",
        text,
    )
    return text


def clean_byq_footer(text: str) -> str:
    return re.sub(
        r'© 2025 Built by <a href="https://byq\.studio/"[^>]*>BYQ® Studio</a> exclusively for Webflow',
        "© 2026 Hopeward",
        text,
    )


def process_file(path: Path) -> None:
    text = path.read_text(encoding="utf-8")
    if path.parent.name == "insights":
        text = fix_insights_page(text)
    else:
        text = fix_root_page(text)
    text = remove_sales_cta(text)
    text = clean_footer_legal(text)
    text = clean_byq_footer(text)
    path.write_text(text, encoding="utf-8")
    print(f"patched {path.relative_to(ROOT)}")


def main() -> None:
    for html in sorted(ROOT.glob("*.html")):
        process_file(html)
    for html in sorted((ROOT / "insights").glob("*.html")):
        process_file(html)
    # Rename home.html → index.html
    home = ROOT / "home.html"
    index = ROOT / "index.html"
    if home.exists():
        if index.exists():
            raise SystemExit("index.html already exists")
        home.rename(index)
        print("renamed home.html → index.html")


if __name__ == "__main__":
    main()
