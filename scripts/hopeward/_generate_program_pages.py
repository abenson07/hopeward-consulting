#!/usr/bin/env python3
"""Regenerate Hopeward program HTML from hopeward/service-template.html.

WARNING: Running this overwrites the five program pages. As of 2026, detailed
copy for each program is maintained in those HTML files (and may diverge from
PROGRAMS below). Update PROGRAMS or merge from HTML before regenerating.

Run from repo root: python3 hopeward/_generate_program_pages.py
"""
from __future__ import annotations

import html
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TEMPLATE = (ROOT / "service-template.html").read_text(encoding="utf-8")

SERVICE_ORDER: list[tuple[str, str]] = [
    ("assessment-planning.html", "Assessment &amp; Planning"),
    ("evaluation-impact-reporting.html", "Evaluation &amp; Impact Reporting"),
    ("program-strategy-execution.html", "Program Strategy &amp; Execution"),
    ("collaborative-leadership-collective-impact.html", "Collaborative Leadership &amp; Collective Impact"),
    ("community-engagement-stakeholder-relations.html", "Community Engagement &amp; Stakeholder Relations"),
]

ARROW_SVG = """<svg width="100%" height="100%" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>"""


def service_list_html(exclude_href: str) -> str:
    rows: list[str] = []
    n = 0
    for href, title in SERVICE_ORDER:
        if href == exclude_href:
            continue
        n += 1
        label = f"{n:02d}"
        rows.append(
            f"""        <a href="{href}" class="service-item w-inline-block">
          <div class="left-service-item">
            <div class="text-h7">{title}</div>
            <div class="icon-service-arrow w-embed">{ARROW_SVG}</div>
          </div>
          <div data-wf--eyebrow--variant="light-64" class="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
            <div class="eyebrow-circle"></div>
            <div class="label-small">{label}</div>
          </div>
        </a>"""
        )
    inner = "\n".join(rows)
    return f"""      <div class="service-list">
{inner}
      </div>"""


def bullets_ul(items: list[str]) -> str:
    lis = "\n".join(f"                <li>{html.escape(x)}</li>" for x in items)
    return f"""              <ul class="home-a-column-bullets">
{lis}
              </ul>"""


PROGRAMS: list[dict] = [
    {
        "filename": "program-strategy-execution.html",
        "exclude_href": "program-strategy-execution.html",
        "doc_title": "Program Strategy & Execution | Hopeward",
        "meta_desc": "Design, implement, and refine programs with clear strategy, alignment, and execution that stick.",
        "h1": "Program Strategy & Execution",
        "hero_sub": "Strategy, alignment, and execution that stick.",
        "about_lead": " Turning ideas into action requires clarity, collaboration, and an actionable plan. Our Program Strategy & Execution services help you design, develop, and implement programs that are aligned with your mission and make a real, lasting impact.\n        ",
        "overlay_label": "Program working session",
        "column_eyebrow": "How we work",
        "column_h3": "What is Program Strategy & Execution",
        "column_intro": "We work alongside you to transform your vision into concrete programs with clear objectives and measurable outcomes. From program design to execution, we ensure each initiative has a strong foundation and the resources needed for success.",
        "bullets": [
            "Collaborative program design aligned with your mission",
            "Development of clear implementation plans with timelines and objectives",
            "Ongoing monitoring and adjustments to ensure success",
        ],
        "benefits_h2": "Benefits of Program Strategy & Execution",
        "b1t": "Alignment with Mission and Goals",
        "b1d": "Every program is tailored to meet your specific mission, ensuring that all efforts are aligned with the larger goals of your organization. This focus guarantees that your initiatives directly contribute to your core objectives.",
        "b2t": "Clear Outcomes and Accountability",
        "b2d": "By establishing clear objectives and measurable outcomes, we create a framework that ensures your programs are on track and producing the results you need. This allows for greater accountability and success tracking.",
        "b3t": "Efficient Implementation",
        "b3d": "With a well-structured implementation plan, you can execute programs smoothly and effectively. Our support ensures that resources are used efficiently, reducing the risk of delays or missteps.",
    },
    {
        "filename": "assessment-planning.html",
        "exclude_href": "assessment-planning.html",
        "doc_title": "Assessment & Planning | Hopeward",
        "meta_desc": "Ground strategy in evidence with assessments, stakeholder alignment, and practical plans that prioritize what matters.",
        "h1": "Assessment & Planning",
        "hero_sub": "Ground decisions in evidence, alignment, and a clear path forward.",
        "about_lead": " Strong assessment and planning create the foundation for programs that work. We help you understand context, engage stakeholders, and prioritize what matters most before resources are committed.\n        ",
        "overlay_label": "Stakeholder workshop",
        "column_eyebrow": "Assessment",
        "column_h3": "What is Assessment & Planning",
        "column_intro": "We partner with you to clarify needs, map opportunities, and build a shared understanding of what success looks like. The result is a practical plan that aligns teams and guides investment.",
        "bullets": [
            "Discovery and needs assessment tailored to your community or organization",
            "Facilitation that builds consensus across stakeholders and partners",
            "Prioritized recommendations with timelines, owners, and measures",
        ],
        "benefits_h2": "Benefits of Assessment & Planning",
        "b1t": "Shared Understanding",
        "b1d": "Teams and partners move forward from a common fact base and shared language, reducing friction and rework.",
        "b2t": "Smarter Investments",
        "b2d": "Focus limited resources on the initiatives most likely to deliver impact for the people you serve.",
        "b3t": "Clear Baselines",
        "b3d": "Start implementation knowing where you are today so progress and outcomes can be tracked with confidence.",
    },
    {
        "filename": "evaluation-impact-reporting.html",
        "exclude_href": "evaluation-impact-reporting.html",
        "doc_title": "Evaluation & Impact Reporting | Hopeward",
        "meta_desc": "Measure outcomes, learn what works, and communicate impact to funders, boards, and communities.",
        "h1": "Evaluation & Impact Reporting",
        "hero_sub": "Learn what works, improve what doesn’t, and show results with confidence.",
        "about_lead": " Evaluation should be practical, not performative. We help you design lightweight measurement, interpret findings, and tell a credible story about outcomes—so learning drives the next decision.\n        ",
        "overlay_label": "Data review",
        "column_eyebrow": "Evaluation",
        "column_h3": "What is Evaluation & Impact Reporting",
        "column_intro": "From logic models to dashboards and narrative reports, we translate activity into evidence. You gain insight into what is changing for participants and communities, and where programs need to adapt.",
        "bullets": [
            "Evaluation frameworks aligned to your theory of change and funder requirements",
            "Data collection and analysis that fits your team’s capacity",
            "Reporting formats designed for boards, partners, and public audiences",
        ],
        "benefits_h2": "Benefits of Evaluation & Impact Reporting",
        "b1t": "Data-Informed Decisions",
        "b1d": "Use timely evidence to adjust activities, support staff, and strengthen participant outcomes.",
        "b2t": "Improved Program Effectiveness",
        "b2d": "See which components drive results so you can refine delivery without guessing.",
        "b3t": "Demonstrating Impact",
        "b3d": "Communicate results clearly to funders and stakeholders with narratives backed by credible data.",
    },
    {
        "filename": "collaborative-leadership-collective-impact.html",
        "exclude_href": "collaborative-leadership-collective-impact.html",
        "doc_title": "Collaborative Leadership & Collective Impact | Hopeward",
        "meta_desc": "Facilitate coalitions, align partners, and coordinate action across organizations toward shared results.",
        "h1": "Collaborative Leadership & Collective Impact",
        "hero_sub": "Lead together, align efforts, and move networks toward shared results.",
        "about_lead": " Lasting change rarely happens in silos. We help leaders facilitate trust, structure governance, and align partners around a common agenda—so collaboration produces collective impact, not just meetings.\n        ",
        "overlay_label": "Coalition convening",
        "column_eyebrow": "Collaboration",
        "column_h3": "What is Collaborative Leadership & Collective Impact",
        "column_intro": "We support backbone functions, partner engagement, and shared metrics so multi-organization efforts stay focused. Whether you are launching a coalition or strengthening an existing network, we help leadership and process work together.",
        "bullets": [
            "Neutral facilitation and meeting design for complex stakeholder groups",
            "Structures for roles, decision-making, and accountability across partners",
            "Roadmaps for shared measurement and continuous learning",
        ],
        "benefits_h2": "Benefits of Collaborative Leadership & Collective Impact",
        "b1t": "Stronger Partnerships",
        "b1d": "Clarity on goals and roles helps partners invest time where it matters and sustain relationships over time.",
        "b2t": "Aligned Resources",
        "b2d": "Reduce duplication and maximize complementary strengths across organizations and sectors.",
        "b3t": "Sustainable Change",
        "b3d": "Embed habits of collaboration so progress continues beyond a single initiative or grant cycle.",
    },
    {
        "filename": "community-engagement-stakeholder-relations.html",
        "exclude_href": "community-engagement-stakeholder-relations.html",
        "doc_title": "Community Engagement & Stakeholder Relations | Hopeward",
        "meta_desc": "Engage residents and stakeholders authentically—from inclusive outreach to dialogue and feedback that informs decisions.",
        "h1": "Community Engagement & Stakeholder Relations",
        "hero_sub": "Listen deeply, communicate clearly, and build trust with the people you serve.",
        "about_lead": " Programs succeed when communities shape them. We help you design engagement that is accessible, respectful, and actionable—turning input into decisions stakeholders can see and trust.\n        ",
        "overlay_label": "Community listening",
        "column_eyebrow": "Engagement",
        "column_h3": "What is Community Engagement & Stakeholder Relations",
        "column_intro": "From outreach strategy to facilitation and feedback loops, we help you meet people where they are. Engagement becomes a backbone practice—not a one-time survey—so relationships strengthen over time.",
        "bullets": [
            "Inclusive outreach and facilitation for diverse participants",
            "Tools to capture feedback and close the loop with communities",
            "Alignment between front-line experience and program or policy decisions",
        ],
        "benefits_h2": "Benefits of Community Engagement & Stakeholder Relations",
        "b1t": "Legitimacy & Trust",
        "b1d": "People support what they help create; transparent engagement builds confidence in your mission.",
        "b2t": "Better Solutions",
        "b2d": "Local knowledge surfaces practical ideas that top-down planning often misses.",
        "b3t": "Stronger Outcomes",
        "b3d": "Programs reflect real needs, which improves uptake, retention, and long-term impact.",
    },
]


def apply_program(base: str, p: dict) -> str:
    s = base
    old_title = "  <title>Service Template | Evermind - Webflow HTML website template</title>"
    s = s.replace(old_title, f"  <title>{html.escape(p['doc_title'])}</title>", 1)

    old_desc = '  <meta content="Evermind™ is more than a template — it’s a synchronized design &amp; development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency." name="description">'
    s = s.replace(old_desc, f'  <meta content="{html.escape(p["meta_desc"])}" name="description">', 1)

    old_og_title = '  <meta content="Service Template | Evermind - Webflow HTML website template" property="og:title">'
    s = s.replace(old_og_title, f'  <meta content="{html.escape(p["doc_title"])}" property="og:title">', 1)

    old_og_desc = '  <meta content="Evermind™ is more than a template — it’s a synchronized design &amp; development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency." property="og:description">'
    s = s.replace(old_og_desc, f'  <meta content="{html.escape(p["meta_desc"])}" property="og:description">', 1)

    old_tw_title = '  <meta content="Service Template | Evermind - Webflow HTML website template" property="twitter:title">'
    s = s.replace(old_tw_title, f'  <meta content="{html.escape(p["doc_title"])}" property="twitter:title">', 1)

    old_tw_desc = '  <meta content="Evermind™ is more than a template — it’s a synchronized design &amp; development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency." property="twitter:description">'
    s = s.replace(old_tw_desc, f'  <meta content="{html.escape(p["meta_desc"])}" property="twitter:description">', 1)

    old_h1 = '<h1 heading-load="" data-w-id="bc335b94-7e47-a576-e0e1-862fb16b9fbc" style="filter:blur(12px);opacity:0">Program Strategy & Execution</h1>'
    s = s.replace(
        old_h1,
        f'<h1 heading-load="" data-w-id="bc335b94-7e47-a576-e0e1-862fb16b9fbc" style="filter:blur(12px);opacity:0">{html.escape(p["h1"])}</h1>',
        1,
    )

    s = s.replace(
        '<div class="text-body">Strategy, alignment, and execution that stick.</div>',
        f'<div class="text-body">{html.escape(p["hero_sub"])}</div>',
        1,
    )

    old_about = "        <div class=\"text-h6 service-about-lead-serif\"> Turning ideas into action requires clarity, collaboration, and an actionable plan. Our Program Strategy & Execution services help you design, develop, and implement programs that are aligned with your mission and make a real, lasting impact.\n        </div>"
    s = s.replace(
        old_about,
        f'        <div class="text-h6 service-about-lead-serif">{html.escape(p["about_lead"].rstrip())}\n        </div>',
        1,
    )

    s = s.replace(
        "              <div class=\"label-small\">It\u2019s a good place to describe image</div>",
        f'              <div class="label-small">{html.escape(p["overlay_label"])}</div>',
        1,
    )

    s = s.replace(
        "              <div class=\"label-small\">Eco-Inspired Design</div>",
        f'              <div class="label-small">{html.escape(p["column_eyebrow"])}</div>',
        1,
    )

    s = s.replace(
        "            <div class=\"text-h3\">What is Program Strategy & Execution</div>",
        f'            <div class="text-h3">{html.escape(p["column_h3"])}</div>',
        1,
    )

    old_column_block = """            <div>
              <div>We work alongside you to transform your vision into concrete programs with clear objectives and measurable outcomes. From program design to execution, we ensure each initiative has a strong foundation and the resources needed for success.</div>
              <ul class="home-a-column-bullets">
                <li>Collaborative program design aligned with your mission</li>
                <li>Development of clear implementation plans with timelines and objectives</li>
                <li>Ongoing monitoring and adjustments to ensure success</li>
              </ul>
            </div>"""

    new_column_block = f"""            <div>
              <div>{html.escape(p["column_intro"])}</div>
{bullets_ul(p["bullets"])}
            </div>"""

    s = s.replace(old_column_block, new_column_block, 1)

    s = s.replace(
        "        <h2 class=\"no-margins\">Benefits of Program Strategy & Execution</h2>",
        f'        <h2 class="no-margins">{html.escape(p["benefits_h2"])}</h2>',
        1,
    )

    old_b1 = """            <div class=\"text-h7\">Alignment with Mission and Goals</div>
          </div>
          <div class=\"text-dark-88\">Every program is tailored to meet your specific mission, ensuring that all efforts are aligned with the larger goals of your organization. This focus guarantees that your initiatives directly contribute to your core objectives.

          </div>"""

    new_b1 = f"""            <div class="text-h7">{html.escape(p["b1t"])}</div>
          </div>
          <div class="text-dark-88">{html.escape(p["b1d"])}
          </div>"""

    s = s.replace(old_b1, new_b1, 1)

    old_b2 = """            <div class=\"text-h7\">Clear Outcomes and Accountability</div>
          </div>
          <div class=\"text-dark-88\">By establishing clear objectives and measurable outcomes, we create a framework that ensures your programs are on track and producing the results you need. This allows for greater accountability and success tracking.          </div>"""

    new_b2 = f"""            <div class="text-h7">{html.escape(p["b2t"])}</div>
          </div>
          <div class="text-dark-88">{html.escape(p["b2d"])}          </div>"""

    s = s.replace(old_b2, new_b2, 1)

    old_b3 = """            <div class=\"text-h7\">Efficient Implementation</div>
          </div>
          <div class=\"text-dark-88\">With a well-structured implementation plan, you can execute programs smoothly and effectively. Our support ensures that resources are used efficiently, reducing the risk of delays or missteps. </div>"""

    new_b3 = f"""            <div class="text-h7">{html.escape(p["b3t"])}</div>
          </div>
          <div class="text-dark-88">{html.escape(p["b3d"])} </div>"""

    s = s.replace(old_b3, new_b3, 1)

    OLD_SERVICE_LIST = """      <div class="service-list">
        <a href="../service.html" class="service-item w-inline-block">
          <div class="left-service-item">
            <div class="text-h7">Assessment &amp; Planning</div>
            <div class="icon-service-arrow w-embed"><svg width="100%" height="100%" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
          </div>
          <div data-wf--eyebrow--variant="light-64" class="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
            <div class="eyebrow-circle"></div>
            <div class="label-small">uno</div>
          </div>
        </a>
        <a href="../service.html" class="service-item w-inline-block">
          <div class="left-service-item">
            <div class="text-h7">Evaluation &amp; Impact Reporting</div>
            <div class="icon-service-arrow w-embed"><svg width="100%" height="100%" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
          </div>
          <div data-wf--eyebrow--variant="light-64" class="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
            <div class="eyebrow-circle"></div>
            <div class="label-small">Duo</div>
          </div>
        </a>
        <a href="../service.html" class="service-item w-inline-block">
          <div class="left-service-item">
            <div class="text-h7">Collaborative Leadership &amp; Collective Impact</div>
            <div class="icon-service-arrow w-embed"><svg width="100%" height="100%" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
          </div>
          <div data-wf--eyebrow--variant="light-64" class="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
            <div class="eyebrow-circle"></div>
            <div class="label-small">rike</div>
          </div>
        </a>
        <a href="../service.html" class="service-item w-inline-block">
          <div class="left-service-item">
            <div class="text-h7">Community Engagement &amp; Stakeholder Relations</div>
            <div class="icon-service-arrow w-embed"><svg width="100%" height="100%" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.33594 12.9987H23.0026M13.0026 1.33203L24.6693 12.9987L13.0026 24.6654" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg></div>
          </div>
          <div data-wf--eyebrow--variant="light-64" class="eyebrow w-variant-28acc736-5214-c16f-feb0-b6f750193894">
            <div class="eyebrow-circle"></div>
            <div class="label-small">fake</div>
          </div>
        </a>
      </div>"""

    s = s.replace(OLD_SERVICE_LIST, service_list_html(p["exclude_href"]), 1)

    return s


def main() -> None:
    base = TEMPLATE
    for p in PROGRAMS:
        out = apply_program(base, p)
        path = ROOT / p["filename"]
        path.write_text(out, encoding="utf-8")
        print(f"Wrote {path.relative_to(ROOT.parent)}")


if __name__ == "__main__":
    main()
