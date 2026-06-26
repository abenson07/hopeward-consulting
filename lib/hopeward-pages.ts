/** Auto-derived from hopeward-26/*.html — source paths for porting. */

export type HopewardPageMeta = {
  slug: string;
  title: string;
  description: string;
  sourceHtml: string;
  sections: string[];
};

export type ServiceHeroMeta = {
  sectionId: string;
  title: string;
  body: string;
};

export const HOPEWARD_PAGES: Record<string, HopewardPageMeta> = {
  "about": {
    slug: "about",
    title: "About | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/about.html",
    sections: ["hero-not-average-consultants", "what-sets-us-apart", "audience-cards-empowering-mission", "partner-logos", "science-of-hope", "meet-the-team", "contact-build-something-grounded", "footer-cta"],
  },
  "assessment-planning": {
    slug: "assessment-planning",
    title: "Assessment & Planning | Hopeward Consulting",
    description: "Ground strategy in evidence with assessments, stakeholder alignment, and practical plans that prioritize what matters.",
    sourceHtml: "hopeward-26/assessment-planning.html",
    sections: ["hero-assessment-planning", "service-overview", "what-is-assessment-planning", "benefits-assessment-planning", "client-story-assessment", "explore-other-services", "footer-cta"],
  },
  "blog": {
    slug: "blog",
    title: "Blog | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/blog.html",
    sections: ["blog-hero", "blog-articles", "footer-cta"],
  },
  "case-study-template": {
    slug: "case-study-template",
    title: "Case Study Template | Hopeward Consulting",
    description: "Hopeward case study page template with static example content.",
    sourceHtml: "hopeward-26/case-study-template.html",
    sections: [],
  },
  "collaborative-leadership-collective-impact": {
    slug: "collaborative-leadership-collective-impact",
    title: "Collaborative Leadership & Collective Impact | Hopeward Consulting",
    description: "Facilitate coalitions, align partners, and coordinate action across organizations toward shared results.",
    sourceHtml: "hopeward-26/collaborative-leadership-collective-impact.html",
    sections: ["hero-collaborative-leadership", "service-overview", "what-is-collaborative-leadership", "benefits-collaborative-leadership", "client-story-collaborative-leadership", "explore-other-services", "footer-cta"],
  },
  "collaboratives": {
    slug: "collaboratives",
    title: "Collaboratives | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/collaboratives.html",
    sections: ["hero-collaboratives", "collaboratives-align-stakeholders", "how-we-support-collaboratives", "services-where-we-shine", "footer-cta"],
  },
  "community-engagement-stakeholder-relations": {
    slug: "community-engagement-stakeholder-relations",
    title: "Community Engagement & Stakeholder Relations | Hopeward Consulting",
    description: "Engage residents and stakeholders authentically\u2014from inclusive outreach to dialogue and feedback that informs decisions.",
    sourceHtml: "hopeward-26/community-engagement-stakeholder-relations.html",
    sections: ["hero-community-engagement", "service-overview", "what-is-community-engagement", "benefits-community-engagement", "client-story-community-engagement", "explore-other-services", "footer-cta"],
  },
  "contact": {
    slug: "contact",
    title: "Contact | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/contact.html",
    sections: ["hero-every-project-starts-conversation", "evermind-system-testimonial", "contact-faq", "footer-cta"],
  },
  "evaluation-impact-reporting": {
    slug: "evaluation-impact-reporting",
    title: "Evaluation & Impact Reporting | Hopeward Consulting",
    description: "Measure outcomes, learn what works, and communicate impact to funders, boards, and communities.",
    sourceHtml: "hopeward-26/evaluation-impact-reporting.html",
    sections: ["hero-evaluation-impact-reporting", "service-overview", "what-is-evaluation-impact-reporting", "benefits-evaluation-impact-reporting", "client-story-evaluation", "explore-other-services", "footer-cta"],
  },
  "how-we-work": {
    slug: "how-we-work",
    title: "How We Work | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/how-we-work.html",
    sections: ["hero-strategy-collaboration-impact", "deliverables-tangibles-intangibles", "client-voices-testimonial", "services-where-we-shine", "footer-cta"],
  },
  "index": {
    slug: "index",
    title: "Home | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/index.html",
    sections: ["hero-actionable-pathways-forward", "home-hope-definition", "audience-cards-organizations-collaboratives", "partner-logos", "founder-testimonial", "services-where-we-shine", "home-case-studies", "footer-cta"],
  },
  "organizations": {
    slug: "organizations",
    title: "Organizations | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/organizations.html",
    sections: ["hero-organizations", "organizations-mission-capacity", "how-we-support-organizations", "services-where-we-shine", "footer-cta"],
  },
  "program-strategy-execution": {
    slug: "program-strategy-execution",
    title: "Program Strategy & Execution | Hopeward Consulting",
    description: "Design, implement, and refine programs with clear strategy, alignment, and execution that stick.",
    sourceHtml: "hopeward-26/program-strategy-execution.html",
    sections: ["hero-program-strategy-execution", "service-overview", "what-is-program-strategy-execution", "benefits-program-strategy-execution", "client-story-program-strategy", "explore-other-services", "footer-cta"],
  },
  "resources": {
    slug: "resources",
    title: "Resources | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/resources.html",
    sections: ["hero-resources-for-work-ahead", "footer-cta"],
  },
  "service-template": {
    slug: "service-template",
    title: "Service Template | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/service-template.html",
    sections: [],
  },
  "services": {
    slug: "services",
    title: "Services | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/services.html",
    sections: ["services-hero", "services-list", "services-column", "services-system", "services-testimonial", "services-selling-points", "services-social-proof", "footer-cta"],
  },
  "the-science-of-hope": {
    slug: "the-science-of-hope",
    title: "The Science of Hope | Hopeward Consulting",
    description: "Evermind\u2122 is more than a template \u2014 it\u2019s a synchronized design & development framework for modern brands. Built with variables, modular layouts, and pixel-perfect systems designed for growth, clarity, and long-term consistency.",
    sourceHtml: "hopeward-26/the-science-of-hope.html",
    sections: ["hero-softness-with-precision", "eco-inspired-design", "evermind-system", "calm-structure-ambitious-brands", "meet-the-team", "about-us-clarity-adaptability", "company-insights", "contact-every-project-starts-conversation", "footer-cta"],
  },
};

export const HOPEWARD_INSIGHTS: Record<string, HopewardPageMeta> = {
  "7-tips-to-make-grant-writing-a-winning-process": {
    slug: "7-tips-to-make-grant-writing-a-winning-process",
    title: "7 Tips to Make Grant Writing a Winning Process | Hopeward Consulting",
    description: "Grant writing can be a daunting process and while there is no perfect formula to guarantee success; there are certainly steps you can take to increase your organization's likelihood of being awarded funding.",
    sourceHtml: "hopeward-26/insights/7-tips-to-make-grant-writing-a-winning-process.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "cake-connections-how-to-not-get-stuck-asking-whats-next-to-a-new-grad": {
    slug: "cake-connections-how-to-not-get-stuck-asking-whats-next-to-a-new-grad",
    title: "Cake Connections: How to not get stuck asking \"what's next\" to a new grad | Hopeward Consulting",
    description: "As we celebrate academic milestones, instead of asking about future plans, consider having a unique conversation. Skip the usual inquiries about college and explore different topics over your next slice of graduation cake.",
    sourceHtml: "hopeward-26/insights/cake-connections-how-to-not-get-stuck-asking-whats-next-to-a-new-grad.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "detail-blog": {
    slug: "detail-blog",
    title: "",
    description: "",
    sourceHtml: "hopeward-26/insights/detail-blog.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "embracing-hope-to-ignite-collective-impact": {
    slug: "embracing-hope-to-ignite-collective-impact",
    title: "Embracing Hope to Ignite Collective Impact | Hopeward Consulting",
    description: "Ignite collaboration through hope! Discover how to increase resilience and innovation within your collaborative and create a future where challenges spark new ideas and collective action. Let's move hopeward together by generating pathways that turn aspirations into achievements.",
    sourceHtml: "hopeward-26/insights/embracing-hope-to-ignite-collective-impact.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "hope-when-its-hard": {
    slug: "hope-when-its-hard",
    title: "Hope When It\u2019s Hard | Hopeward Consulting",
    description: "These past few days have been sad and scary for a lot of people. And, just like Mr. Rogers\u2019 mother used to tell him, there are helpers everywhere. Friends who are safe and supportive. Businesases that are adding benefits. Voters that are ready to vote. Having hope isn\u2019t about miracle solutions",
    sourceHtml: "hopeward-26/insights/hope-when-its-hard.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "how-hope-can-help-your-new-years-resolutions-stick": {
    slug: "how-hope-can-help-your-new-years-resolutions-stick",
    title: "How Hope Can Help Your New Year\u2019s Resolutions Stick | Hopeward Consulting",
    description: "New Year's resolutions often lose steam as life intervenes. Sustain hope by adapting to challenges. Reflect on goals, consider shifts, and create new pathways. Seek alternative solutions and perspectives, track progress regularly, and stay hopeful for lasting success.",
    sourceHtml: "hopeward-26/insights/how-hope-can-help-your-new-years-resolutions-stick.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "launching-problems-into-space": {
    slug: "launching-problems-into-space",
    title: "Launching Problems Into Space | Hopeward Consulting",
    description: "We tend to rely on our past experiences and knowledge to solve problems. When we get stuck though, that\u2019s the time to look beyond our expertise and figure out how quilting (or whatever unique ways of fixing the problem we can find) can help launch us to new heights.",
    sourceHtml: "hopeward-26/insights/launching-problems-into-space.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "lived-experience-is-data": {
    slug: "lived-experience-is-data",
    title: "Lived Experience Is Data | Hopeward Consulting",
    description: "Data helps us see patterns, but it doesn\u2019t always reveal how programs and systems are actually experienced. At Hopeward, we believe lived experience and community knowledge are foundational data. This post explores why listening to the people closest to the work helps organizations move beyond numbers toward deeper understanding and more meaningful change.",
    sourceHtml: "hopeward-26/insights/lived-experience-is-data.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "measuring-impact-why-evaluation-matters-in-nonprofit-work": {
    slug: "measuring-impact-why-evaluation-matters-in-nonprofit-work",
    title: "Measuring Impact: Why Evaluation Matters in Nonprofit Work | Hopeward Consulting",
    description: "In a sector where resources are limited, and the needs are vast, effective evaluation is more than just a \u201cnice-to-have\u201d \u2013 it is essential. Let\u2019s explore why evaluation matters so much in nonprofit work and how it can strengthen your organization\u2019s mission.",
    sourceHtml: "hopeward-26/insights/measuring-impact-why-evaluation-matters-in-nonprofit-work.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "play-ball-how-spring-training-strategies-can-improve-your-work-game": {
    slug: "play-ball-how-spring-training-strategies-can-improve-your-work-game",
    title: "Play Ball! How Spring Training Strategies Can Improve Your Work Game | Hopeward Consulting",
    description: "Many of us lack a ritual that will bring renewed hope and a chance for a fresh start. Amid daily grind, rediscover excitement in work. Don't take growth for granted. Consider your personalized \"spring training\" as the baseball season begins.",
    sourceHtml: "hopeward-26/insights/play-ball-how-spring-training-strategies-can-improve-your-work-game.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "the-difference-between-coordination-and-collaboration": {
    slug: "the-difference-between-coordination-and-collaboration",
    title: "The Difference Between Coordination and Collaboration | Hopeward Consulting",
    description: "Most teams default to more structure when things feel stuck. But sometimes the real gap isn't coordination, its collaboration. There's a difference between a team that knowns who is doing what and a team that is genuinely working together. Both matter. And getting both right is where lasting momentum comes from. Check out our new article exploring the difference.",
    sourceHtml: "hopeward-26/insights/the-difference-between-coordination-and-collaboration.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "the-science-of-hope-series-understanding-the-elements-of-hope": {
    slug: "the-science-of-hope-series-understanding-the-elements-of-hope",
    title: "The Science of Hope Series: Understanding the Elements of Hope | Hopeward Consulting",
    description: "This blog post dives into Shane Lopez\u2019s framework of hope. Examining the three key elements of hope: goals, pathways, and agency and explaining how each element contributes to a hope mindset.",
    sourceHtml: "hopeward-26/insights/the-science-of-hope-series-understanding-the-elements-of-hope.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "the-science-of-hope-series-you-can-measure-hope": {
    slug: "the-science-of-hope-series-you-can-measure-hope",
    title: "The Science of Hope Series: You Can Measure Hope? | Hopeward Consulting",
    description: "Grounded in the pioneering work of psychologist C.R. Snyder, hope theory has provided profound insights into the human capacity for resilience and optimism. At the heart of this theory lies the Hope Scale, a tool designed to measure and nurture hope in individuals. In this installment of our Science",
    sourceHtml: "hopeward-26/insights/the-science-of-hope-series-you-can-measure-hope.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "this-one-skill-could-have-more-impact-on-thriving-than-you-think": {
    slug: "this-one-skill-could-have-more-impact-on-thriving-than-you-think",
    title: "This One Skill Could Have More Impact on Thriving Than You Think | Hopeward Consulting",
    description: "As seasons change, reflect on summer's moments. Assess happiness, accomplishments, and changes. Thriving requires continuous reflection. Embrace fall to ponder, celebrate, and plan for what's next. We offer questions and tips for a simple, impactful practice\u2014alone or with others.",
    sourceHtml: "hopeward-26/insights/this-one-skill-could-have-more-impact-on-thriving-than-you-think.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "unlocking-the-power-of-ritual-to-improve-wellbeing": {
    slug: "unlocking-the-power-of-ritual-to-improve-wellbeing",
    title: "Unlocking the Power of Ritual to Improve Wellbeing | Hopeward Consulting",
    description: "Embark on a transformative journey: reshape daily routines into purposeful rituals. Enhance psychological detachment, boost life satisfaction, and elevate productivity. Gain insights for a seamless, fulfilling life.",
    sourceHtml: "hopeward-26/insights/unlocking-the-power-of-ritual-to-improve-wellbeing.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
  "what-does-hopeward-even-mean": {
    slug: "what-does-hopeward-even-mean",
    title: "What Does Hopeward Even Mean? | Hopeward Consulting",
    description: "Hopeward supports nonprofits and social services in cultivating hope for positive change. Join us in moving hopeward and creating a better world together...",
    sourceHtml: "hopeward-26/insights/what-does-hopeward-even-mean.html",
    sections: ["article-hero", "article-body", "more-insights", "footer-cta"],
  },
};

export const SERVICE_PAGE_SLUGS = ["assessment-planning", "collaborative-leadership-collective-impact", "community-engagement-stakeholder-relations", "evaluation-impact-reporting", "program-strategy-execution"] as const;
export type ServicePageSlug = (typeof SERVICE_PAGE_SLUGS)[number];

export const SERVICE_HEROES: Record<ServicePageSlug, ServiceHeroMeta> = {
  "assessment-planning": {
    sectionId: "hero-assessment-planning",
    title: "Assessment & Planning",
    body: "Clarify needs, align stakeholders, and chart a credible plan before you invest.",
  },
  "collaborative-leadership-collective-impact": {
    sectionId: "hero-collaborative-leadership",
    title: "Collaborative Leadership & Collective Impact",
    body: "Lead together, align efforts, and move networks toward shared results.",
  },
  "community-engagement-stakeholder-relations": {
    sectionId: "hero-community-engagement",
    title: "Community Engagement & Stakeholder Relations",
    body: "Listen deeply, communicate clearly, and build trust with the people you serve.",
  },
  "evaluation-impact-reporting": {
    sectionId: "hero-evaluation-impact-reporting",
    title: "Evaluation & Impact Reporting",
    body: "Learn what works, improve what doesn\u2019t, and show results with confidence.",
  },
  "program-strategy-execution": {
    sectionId: "hero-program-strategy-execution",
    title: "Program Strategy & Execution",
    body: "Strategy, alignment, and execution that stick.",
  },
};

/** Top-level pages that already have dedicated app/ routes. */
export const IMPLEMENTED_PAGE_SLUGS = [
  "index",
  "about",
  "services",
  "contact",
  "blog",
  "how-we-work",
  "resources",
] as const;

export const PENDING_PAGE_SLUGS = Object.keys(HOPEWARD_PAGES).filter(
  (slug) => !IMPLEMENTED_PAGE_SLUGS.includes(slug as (typeof IMPLEMENTED_PAGE_SLUGS)[number]),
);

/** CMS template — not a public article. */
export const INSIGHT_TEMPLATE_SLUG = "detail-blog";

export const PUBLISHED_INSIGHT_SLUGS = Object.keys(HOPEWARD_INSIGHTS).filter(
  (slug) => slug !== INSIGHT_TEMPLATE_SLUG,
);

/**
 * Links to the other service pages, excluding the current one — used by
 * ServiceOtherServices so each service page lists the 4 services that aren't it.
 */
export function otherServiceLinks(
  currentSlug: ServicePageSlug,
): { heading: string; href: string }[] {
  return SERVICE_PAGE_SLUGS.filter((slug) => slug !== currentSlug).map((slug) => ({
    heading: SERVICE_HEROES[slug].title,
    href: pageRoute(slug),
  }));
}

export function getHopewardPage(slug: string): HopewardPageMeta | undefined {
  return HOPEWARD_PAGES[slug];
}

export function getHopewardInsight(slug: string): HopewardPageMeta | undefined {
  return HOPEWARD_INSIGHTS[slug];
}

export function pageRoute(slug: string): string {
  return slug === "index" ? "/" : `/${slug}`;
}

export function insightRoute(slug: string): string {
  return `/insights/${slug}`;
}
