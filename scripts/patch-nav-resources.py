#!/usr/bin/env python3
"""Align Resources nav mega-menu markup with What we do / About panels."""
from pathlib import Path

START = '                    <div class="nav-resources-columns">'
END = '                    <div class="nav-customer-stories">'

SNIPPET = (Path(__file__).resolve().parent / "nav-resources-snippet.html").read_text(encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1] / "hopeward"
updated = 0
for path in sorted(ROOT.glob("*.html")):
    text = path.read_text(encoding="utf-8")
    if START not in text:
        continue
    before, rest = text.split(START, 1)
    _old, after = rest.split(END, 1)
    path.write_text(before + SNIPPET + END + after, encoding="utf-8")
    updated += 1
    print(path.name)

print(f"Updated {updated} files")
