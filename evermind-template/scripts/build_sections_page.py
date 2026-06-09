#!/usr/bin/env python3
"""Generate sections/index.html — catalog of all top-level <section> blocks from HTML pages."""

from __future__ import annotations

import hashlib
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_PATH = ROOT / "sections" / "index.html"

SECTION_OPEN = re.compile(r"<section\b", re.IGNORECASE)
SECTION_CLOSE = re.compile(r"</section\s*>", re.IGNORECASE)


def iter_outer_section_blocks(page_html: str):
    """Yield complete <section>...</section> strings, outermost first (nested sections are not yielded separately)."""
    pos = 0
    while True:
        m_open = SECTION_OPEN.search(page_html, pos)
        if not m_open:
            return
        start = m_open.start()
        i = m_open.end()
        depth = 1
        while depth > 0:
            m_next_open = SECTION_OPEN.search(page_html, i)
            m_close = SECTION_CLOSE.search(page_html, i)
            if m_close is None:
                raise ValueError("Unbalanced section tags")
            next_open_at = m_next_open.start() if m_next_open else len(page_html)
            close_at = m_close.start()
            if m_next_open and next_open_at < close_at:
                depth += 1
                i = m_next_open.end()
            else:
                depth -= 1
                i = m_close.end()
        yield page_html[start:i]
        pos = i


DIV_OPEN = re.compile(r"<div\b", re.IGNORECASE)
DIV_CLOSE = re.compile(r"</div\s*>", re.IGNORECASE)


def extract_master_navigation(html: str) -> str:
    """Return the opening <div class="master-navigation">...</div> block (balanced divs)."""
    m = re.search(r'<div\s+[^>]*\bclass="[^"]*\bmaster-navigation\b[^"]*"[^>]*>', html, re.I)
    if not m:
        return ""
    start = m.start()
    i = m.end()
    depth = 1
    while depth > 0 and i < len(html):
        mo = DIV_OPEN.search(html, i)
        mc = DIV_CLOSE.search(html, i)
        if mc is None:
            return ""
        if mo and mo.start() < mc.start():
            depth += 1
            i = mo.end()
        else:
            depth -= 1
            i = mc.end()
    return html[start:i]


def label_from_section_html(section_html: str, index: int) -> str:
    opener = section_html[: min(800, len(section_html))]
    cm = re.search(r'class\s*=\s*["\']([^"\']+)["\']', opener, re.I)
    classes = (cm.group(1) if cm else "").split()
    primary = next(
        (c for c in classes if c not in ("section",) and not c.startswith("w-variant-")),
        None,
    )
    if primary:
        return primary
    im = re.search(r'\bid\s*=\s*["\']([^"\']+)["\']', opener, re.I)
    if im:
        return im.group(1)
    return f"section-{index}"


def rewrite_paths_for_catalog(html_fragment: str, source_rel: str) -> str:
    """Adjust relative URLs so assets/links work from sections/index.html."""
    skip = ("http://", "https://", "//", "mailto:", "tel:", "javascript:", "#", "data:")
    _parent = Path(source_rel).parent
    src_dir = "" if _parent == Path(".") else _parent.as_posix()

    def fix_val(val: str) -> str:
        v = val.strip()
        while v.startswith("./"):
            v = v[2:]
        if not v or any(v.startswith(p) for p in skip):
            return val.strip()
        if v.startswith("/"):
            return val
        if v.startswith("../"):
            return v
        if "/" in v:
            return f"../{v}"
        if src_dir:
            return f"../{src_dir}/{v}"
        return f"../{v}"

    def sub_attr(m: re.Match) -> str:
        name, q, val = m.group(1), m.group(2), m.group(3)
        return f'{name}={q}{fix_val(val)}{q}'

    out = html_fragment
    out = re.sub(
        r"\b(href|src|poster)\s*=\s*([\"'])((?:(?!\2).)*?)\2",
        sub_attr,
        out,
        flags=re.DOTALL,
    )

    def sub_data_video(m: re.Match) -> str:
        q = m.group(1)
        body = m.group(2)
        fixed = ",".join(fix_val(p.strip()) for p in body.split(","))
        return f"data-video-urls={q}{fixed}{q}"

    out = re.sub(
        r"data-video-urls\s*=\s*([\"'])([^\"']*)\1",
        sub_data_video,
        out,
    )

    def sub_srcset(m: re.Match) -> str:
        q = m.group(1)
        body = m.group(2)
        chunks = []
        for part in body.split(","):
            part = part.strip()
            if not part:
                continue
            bits = part.split()
            if bits:
                bits[0] = fix_val(bits[0])
                chunks.append(" ".join(bits))
        return f"srcset={q}{', '.join(chunks)}{q}"

    out = re.sub(
        r"srcset\s*=\s*([\"'])(.*?)\1",
        sub_srcset,
        out,
        flags=re.DOTALL,
    )

    def sub_style_url(m: re.Match) -> str:
        g1, g2 = m.group(1), m.group(2)
        return f"url({g1}{fix_val(g2)}{g1})"

    out = re.sub(
        r"url\(\s*(['\"]?)([^'\"]+\.[^'\"]+)\1\s*\)",
        sub_style_url,
        out,
    )
    return out


def slug(s: str) -> str:
    s = re.sub(r"[^a-zA-Z0-9_-]+", "-", s.strip().lower()).strip("-")
    return s or "section"


def main() -> None:
    html_files = sorted(
        {
            p
            for p in ROOT.rglob("*.html")
            if "sections" not in p.parts and "scripts" not in p.parts
        }
    )

    footer_hashes: set[str] = set()
    catalog_parts: list[str] = []

    for html_path in html_files:
        rel = html_path.relative_to(ROOT).as_posix()
        text = html_path.read_text(encoding="utf-8")

        try:
            sections_found = list(iter_outer_section_blocks(text))
        except ValueError:
            continue

        for i, raw in enumerate(sections_found):
            is_footer = bool(
                re.search(r'class\s*=\s*["\'][^"\']*\bmaster-footer\b', raw[:1200], re.I)
            )
            h = hashlib.sha256(raw.encode()).hexdigest()[:16]
            if is_footer:
                if h in footer_hashes:
                    continue
                footer_hashes.add(h)

            label = label_from_section_html(raw, i)
            page_key = slug(rel.replace("/", "-"))
            unique = f"{page_key}__{slug(label)}__{i}"
            raw = rewrite_paths_for_catalog(raw, rel)

            safe_title = html.escape(f"{rel} — {label}")

            catalog_parts.append(
                f'<article class="section-catalog" id="{html.escape(unique)}">\n'
                f'  <header class="section-catalog-header" tabindex="0" title="Click to copy section id">\n'
                f'    <div class="section-catalog-name">{safe_title}</div>\n'
                f'    <div class="section-catalog-id"><code>{html.escape(unique)}</code></div>\n'
                f"  </header>\n"
                f'  <div class="section-catalog-body">\n{raw}\n  </div>\n'
                f"</article>\n"
            )

    nav_block = ""
    nav_src = ROOT / "index.html"
    if nav_src.is_file():
        nav_block = extract_master_navigation(nav_src.read_text(encoding="utf-8"))
        if nav_block:
            nav_block = rewrite_paths_for_catalog(nav_block, "index.html")

    head_title = "Section catalog — Hopeward"
    doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>{head_title}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <link href="../css/normalize.css" rel="stylesheet" type="text/css">
  <link href="../css/components.css" rel="stylesheet" type="text/css">
  <link href="../css/evermind-template.css" rel="stylesheet" type="text/css">
  <link href="../images/favicon.svg" rel="shortcut icon" type="image/x-icon">
  <style>
    .section-catalog-page-intro {{
      padding: 4rem 1.5rem 2rem;
      max-width: 56rem;
      margin: 0 auto;
    }}
    .section-catalog-page-intro h1 {{
      margin-bottom: 0.5rem;
    }}
    .section-catalog-page-intro p {{
      color: rgba(24, 30, 37, 0.64);
      line-height: 1.5;
    }}
    .section-catalog {{
      border-top: 2px dashed rgba(24, 30, 37, 0.16);
      scroll-margin-top: 6rem;
    }}
    .section-catalog-header {{
      position: sticky;
      top: 0;
      z-index: 50;
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      justify-content: space-between;
      gap: 0.5rem 1rem;
      padding: 0.75rem 1.5rem;
      background: rgba(253, 252, 249, 0.92);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(24, 30, 37, 0.12);
      cursor: pointer;
      transition: background 0.15s ease, border-color 0.15s ease;
    }}
    .section-catalog-header:hover {{
      background: rgba(244, 241, 232, 0.96);
    }}
    .section-catalog-header:focus-visible {{
      outline: 2px solid rgba(73, 130, 115, 0.85);
      outline-offset: -2px;
    }}
    .section-catalog-header--copied {{
      background: rgba(220, 240, 232, 0.95);
      border-bottom-color: rgba(73, 130, 115, 0.35);
    }}
    .section-catalog-name {{
      font-size: 0.875rem;
      font-weight: 600;
    }}
    .section-catalog-id code {{
      font-size: 0.75rem;
      color: rgba(24, 30, 37, 0.56);
    }}
  </style>
  <script type="text/javascript">!function(o,c){{var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}}(window,document);</script>
</head>
<body>
{nav_block}
  <div class="section-catalog-page-intro">
    <h1>Section catalog</h1>
    <p>Every top-level <code>&lt;section&gt;</code> from each HTML page (nested sections stay inside their parent block). Duplicate <code>master-footer</code> blocks are included once. Each preview has a stable <code>id</code> for reference. Regenerate with <code>python3 scripts/build_sections_page.py</code>.</p>
    <p><strong>Tip:</strong> Serve or open from <code>sections/index.html</code> so paths like <code>../css/</code> resolve. <strong>Click any catalog header bar</strong> to copy that section&rsquo;s stable <code>id</code> (e.g. <code>about-about-a-html__hero-about-a-section__0</code>) for prompts.</p>
  </div>

{"".join(catalog_parts)}

  <script>
  (function () {{
    function copySectionId(header) {{
      var article = header.closest(".section-catalog");
      if (!article || !article.id) return;
      var id = article.id;
      function flash(ok) {{
        header.classList.toggle("section-catalog-header--copied", ok);
        clearTimeout(header._copyFlash);
        if (ok) header._copyFlash = setTimeout(function () {{
          header.classList.remove("section-catalog-header--copied");
        }}, 1400);
      }}
      function ok() {{ flash(true); }}
      function fail() {{ flash(false); }}
      if (navigator.clipboard && navigator.clipboard.writeText) {{
        navigator.clipboard.writeText(id).then(ok).catch(function () {{
          legacyCopy();
        }});
      }} else {{
        legacyCopy();
      }}
      function legacyCopy() {{
        var ta = document.createElement("textarea");
        ta.value = id;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;left:-9999px;top:0";
        document.body.appendChild(ta);
        ta.select();
        try {{
          document.execCommand("copy");
          ok();
        }} catch (e) {{
          fail();
        }}
        document.body.removeChild(ta);
      }}
    }}
    document.body.addEventListener("click", function (e) {{
      var header = e.target.closest(".section-catalog-header");
      if (!header) return;
      copySectionId(header);
    }});
    document.body.addEventListener("keydown", function (e) {{
      if (e.key !== "Enter" && e.key !== " ") return;
      var header = e.target.closest(".section-catalog-header");
      if (!header || document.activeElement !== header) return;
      e.preventDefault();
      copySectionId(header);
    }});
  }})();
  </script>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6894a5c18c9035760aabc38b" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="../js/evermind-template.js" type="text/javascript"></script>
  <script src="https://cdn.prod.website-files.com/gsap/3.13.0/gsap.min.js" type="text/javascript"></script>
  <script src="https://cdn.prod.website-files.com/gsap/3.13.0/SplitText.min.js" type="text/javascript"></script>
  <script src="https://cdn.prod.website-files.com/gsap/3.13.0/ScrollTrigger.min.js" type="text/javascript"></script>
</body>
</html>
"""

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(doc, encoding="utf-8")
    print(f"Wrote {OUT_PATH} ({len(catalog_parts)} sections)")


if __name__ == "__main__":
    main()
