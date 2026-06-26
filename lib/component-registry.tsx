import type { ComponentType } from "react";

import { AboutHero } from "@/components/about-hero";
import { BlogArticleContent } from "@/components/blog-article-content";
import { BlogArticleHero } from "@/components/blog-article-hero";
import { BlogHero } from "@/components/blog-hero";
import { BlogPage } from "@/components/blog-page";
import { CaseStudiesSlider } from "@/components/case-studies-slider";
import { CenterContact } from "@/components/center-contact";
import { ContactPrefooter } from "@/components/contact-prefooter";
import { VideoBlock } from "@/components/video-block";
import { EmpoweringMission } from "@/components/empowering-mission";
import { FaqSection } from "@/components/faq-section";
import { MoreBlogs } from "@/components/more-blogs";
import { HopeIntroBlock } from "@/components/hope-intro-block";
import { HopewardFooter } from "@/components/hopeward-footer";
import { HomeIntro } from "@/components/home-intro";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { OrganizationHero } from "@/components/organization-hero";
import { OrgCollabSection } from "@/components/org-collab-section";
import { PartnersMarquee } from "@/components/partners-marquee";
import { PortedHomeHero } from "@/components/ported-home-hero";
import { ResourcesPage } from "@/components/resources-page";
import { ServiceBenefits } from "@/components/service-benefits";
import { ServiceClientStory } from "@/components/service-client-story";
import { ServiceExplainer } from "@/components/service-explainer";
import { ServiceHero } from "@/components/service-hero";
import { ServiceOtherServices } from "@/components/service-other-services";
import { ServiceOverview } from "@/components/service-overview";
import { ServicesTabSection } from "@/components/services-tab-section";
import { TangiblesIntangibles } from "@/components/tangibles-intangibles";
import { TeamBlock } from "@/components/team-block";
import { TestimonialSingle } from "@/components/testimonial-single";
import { ValuesSection } from "@/components/values-section";
import { WhatWeDoHero } from "@/components/what-we-do-hero";

import { AboutHeroSection } from "@/busted-components/about-hero-section";
import { BenefitsSection } from "@/busted-components/benefits-section";
import { CaseStudySection } from "@/busted-components/case-study-section";
import { ContactFormSection } from "@/busted-components/contact-form-section";
import { ContactPrefooterSection } from "@/busted-components/contact-prefooter-section";
import { ExpandableCardsSection } from "@/busted-components/expandable-cards-section";
import { FeatureShowcaseSection } from "@/busted-components/feature-showcase-section";
import { HeroSection } from "@/busted-components/hero-section";
import { NewHomeHero } from "@/busted-components/new-home-hero";
import { ScienceOfHopeSection } from "@/busted-components/science-of-hope-section";
import { SellingPointsSection } from "@/busted-components/selling-points-section";
import { SiteFooter } from "@/busted-components/site-footer";
import { SiteHeader } from "@/busted-components/site-header";
import { SplitFeatureSection } from "@/busted-components/split-feature-section";
import { CaseStudyFeatureSection } from "@/busted-components/case-study-feature-section";
import { SystemStatsSection } from "@/busted-components/system-stats-section";
import { TeamSection } from "@/busted-components/team-section";
import { TestimonialSection } from "@/busted-components/testimonial-section";
import { ValueFeaturesSection } from "@/busted-components/value-features-section";
import { VideoSection } from "@/busted-components/video-section";

function SplitFeatureSectionDemo() {
  return (
    <SplitFeatureSection
      image="https://byqsupply-components.netlify.app/evermind/images/feature-1.jpg"
      caption="Member dashboard"
      eyebrow="How it works"
      heading="A calmer way to track what matters"
      body="A split layout primitive used across the site. This preview shows it with example content so you can see the layout, spacing, and parallax behavior."
      ctaLabel="Learn more"
      features={[
        { title: "Daily check-ins", body: "Lightweight prompts that build a consistent habit.", icon: <span>1</span> },
        { title: "Shared progress", body: "Keep your circle in the loop without extra effort.", icon: <span>2</span> },
        { title: "Gentle nudges", body: "Reminders that meet people where they are.", icon: <span>3</span> },
      ]}
      imageSide="left"
    />
  );
}

export type RegistryEntry = {
  /** URL-safe identifier, matches the source file name. */
  slug: string;
  /** PascalCase export name used in the generated import statement. */
  name: string;
  /** Source file path, useful for @-mentioning in chat. */
  file: string;
  /** The component to render in the preview iframe. */
  Component: ComponentType;
};

/**
 * Homepage port queue (from hopeward-26/index.html):
 * 1. hero-actionable-pathways-forward  → ported-home-hero ✓
 * 2. home-hope-definition               → home-intro ✓
 * 3. audience-cards-organizations-collaboratives → org-collab-section ✓
 * 4. partner-logos                       → partners-marquee ✓
 * 5. founder-testimonial                 → testimonial-single ✓
 * 6. services-where-we-shine             → services-tab-section ✓
 * 7. home-case-studies                   → case-studies-slider ✓
 * 8. footer-cta                          → hopeward-footer ✓
 * nav → hopeward-navigation ✓
 */
export const PORTED_COMPONENT_REGISTRY: RegistryEntry[] = [
  {
    slug: "hopeward-navigation",
    name: "HopewardNavigation",
    file: "components/hopeward-navigation.tsx",
    Component: HopewardNavigation,
  },
  {
    slug: "ported-home-hero",
    name: "PortedHomeHero",
    file: "components/ported-home-hero.tsx",
    Component: PortedHomeHero,
  },
  {
    slug: "home-intro",
    name: "HomeIntro",
    file: "components/home-intro.tsx",
    Component: HomeIntro,
  },
  {
    slug: "org-collab-section",
    name: "OrgCollabSection",
    file: "components/org-collab-section.tsx",
    Component: OrgCollabSection,
  },
  {
    slug: "partners-marquee",
    name: "PartnersMarquee",
    file: "components/partners-marquee.tsx",
    Component: PartnersMarquee,
  },
  {
    slug: "testimonial-single",
    name: "TestimonialSingle",
    file: "components/testimonial-single.tsx",
    Component: TestimonialSingle,
  },
  {
    slug: "services-tab-section",
    name: "ServicesTabSection",
    file: "components/services-tab-section.tsx",
    Component: ServicesTabSection,
  },
  {
    slug: "case-studies-slider",
    name: "CaseStudiesSlider",
    file: "components/case-studies-slider.tsx",
    Component: CaseStudiesSlider,
  },
  {
    slug: "service-hero",
    name: "ServiceHero",
    file: "components/service-hero.tsx",
    Component: ServiceHero,
  },
  {
    slug: "service-overview",
    name: "ServiceOverview",
    file: "components/service-overview.tsx",
    Component: ServiceOverview,
  },
  {
    slug: "service-explainer",
    name: "ServiceExplainer",
    file: "components/service-explainer.tsx",
    Component: ServiceExplainer,
  },
  {
    slug: "service-benefits",
    name: "ServiceBenefits",
    file: "components/service-benefits.tsx",
    Component: ServiceBenefits,
  },
  {
    slug: "service-client-story",
    name: "ServiceClientStory",
    file: "components/service-client-story.tsx",
    Component: ServiceClientStory,
  },
  {
    slug: "service-other-services",
    name: "ServiceOtherServices",
    file: "components/service-other-services.tsx",
    Component: ServiceOtherServices,
  },
  {
    slug: "what-we-do-hero",
    name: "WhatWeDoHero",
    file: "components/what-we-do-hero.tsx",
    Component: WhatWeDoHero,
  },
  {
    slug: "organization-hero",
    name: "OrganizationHero",
    file: "components/organization-hero.tsx",
    Component: OrganizationHero,
  },
  {
    slug: "tangibles-intangibles",
    name: "TangiblesIntangibles",
    file: "components/tangibles-intangibles.tsx",
    Component: TangiblesIntangibles,
  },
  {
    slug: "about-hero",
    name: "AboutHero",
    file: "components/about-hero.tsx",
    Component: AboutHero,
  },
  {
    slug: "values-section",
    name: "ValuesSection",
    file: "components/values-section.tsx",
    Component: ValuesSection,
  },
  {
    slug: "empowering-mission",
    name: "EmpoweringMission",
    file: "components/empowering-mission.tsx",
    Component: EmpoweringMission,
  },
  {
    slug: "hope-intro-block",
    name: "HopeIntroBlock",
    file: "components/hope-intro-block.tsx",
    Component: HopeIntroBlock,
  },
  {
    slug: "team-block",
    name: "TeamBlock",
    file: "components/team-block.tsx",
    Component: TeamBlock,
  },
  {
    slug: "contact-prefooter",
    name: "ContactPrefooter",
    file: "components/contact-prefooter.tsx",
    Component: ContactPrefooter,
  },
  {
    slug: "center-contact",
    name: "CenterContact",
    file: "components/center-contact.tsx",
    Component: CenterContact,
  },
  {
    slug: "video-block",
    name: "VideoBlock",
    file: "components/video-block.tsx",
    Component: VideoBlock,
  },
  {
    slug: "faq-section",
    name: "FaqSection",
    file: "components/faq-section.tsx",
    Component: FaqSection,
  },
  {
    slug: "blog-hero",
    name: "BlogHero",
    file: "components/blog-hero.tsx",
    Component: BlogHero,
  },
  {
    slug: "blog-page",
    name: "BlogPage",
    file: "components/blog-page.tsx",
    Component: BlogPage,
  },
  {
    slug: "blog-article-hero",
    name: "BlogArticleHero",
    file: "components/blog-article-hero.tsx",
    Component: BlogArticleHero,
  },
  {
    slug: "blog-article-content",
    name: "BlogArticleContent",
    file: "components/blog-article-content.tsx",
    Component: BlogArticleContent,
  },
  {
    slug: "more-blogs",
    name: "MoreBlogs",
    file: "components/more-blogs.tsx",
    Component: MoreBlogs,
  },
  {
    slug: "resources-page",
    name: "ResourcesPage",
    file: "components/resources-page.tsx",
    Component: ResourcesPage,
  },
  {
    slug: "hopeward-footer",
    name: "HopewardFooter",
    file: "components/hopeward-footer.tsx",
    Component: HopewardFooter,
  },
];

export const BUSTED_COMPONENT_REGISTRY: RegistryEntry[] = [
  { slug: "site-header", name: "SiteHeader", file: "busted-components/site-header.tsx", Component: SiteHeader },
  { slug: "hero-section", name: "HeroSection", file: "busted-components/hero-section.tsx", Component: HeroSection },
  { slug: "new-home-hero", name: "NewHomeHero", file: "busted-components/new-home-hero.tsx", Component: NewHomeHero },
  { slug: "about-hero-section", name: "AboutHeroSection", file: "busted-components/about-hero-section.tsx", Component: AboutHeroSection },
  { slug: "value-features-section", name: "ValueFeaturesSection", file: "busted-components/value-features-section.tsx", Component: ValueFeaturesSection },
  { slug: "expandable-cards-section", name: "ExpandableCardsSection", file: "busted-components/expandable-cards-section.tsx", Component: ExpandableCardsSection },
  { slug: "selling-points-section", name: "SellingPointsSection", file: "busted-components/selling-points-section.tsx", Component: SellingPointsSection },
  { slug: "case-study-feature-section", name: "CaseStudyFeatureSection", file: "busted-components/case-study-feature-section.tsx", Component: CaseStudyFeatureSection },
  { slug: "system-stats-section", name: "SystemStatsSection", file: "busted-components/system-stats-section.tsx", Component: SystemStatsSection },
  { slug: "feature-showcase-section", name: "FeatureShowcaseSection", file: "busted-components/feature-showcase-section.tsx", Component: FeatureShowcaseSection },
  { slug: "split-feature-section", name: "SplitFeatureSection", file: "busted-components/split-feature-section.tsx", Component: SplitFeatureSectionDemo },
  { slug: "benefits-section", name: "BenefitsSection", file: "busted-components/benefits-section.tsx", Component: BenefitsSection },
  { slug: "science-of-hope-section", name: "ScienceOfHopeSection", file: "busted-components/science-of-hope-section.tsx", Component: ScienceOfHopeSection },
  { slug: "case-study-section", name: "CaseStudySection", file: "busted-components/case-study-section.tsx", Component: CaseStudySection },
  { slug: "testimonial-section", name: "TestimonialSection", file: "busted-components/testimonial-section.tsx", Component: TestimonialSection },
  { slug: "team-section", name: "TeamSection", file: "busted-components/team-section.tsx", Component: TeamSection },
  { slug: "video-section", name: "VideoSection", file: "busted-components/video-section.tsx", Component: VideoSection },
  { slug: "contact-form-section", name: "ContactFormSection", file: "busted-components/contact-form-section.tsx", Component: ContactFormSection },
  { slug: "contact-prefooter-section", name: "ContactPrefooterSection", file: "busted-components/contact-prefooter-section.tsx", Component: ContactPrefooterSection },
  { slug: "site-footer", name: "SiteFooter", file: "busted-components/site-footer.tsx", Component: SiteFooter },
];

export const COMPONENT_REGISTRY: RegistryEntry[] = [
  ...PORTED_COMPONENT_REGISTRY,
  ...BUSTED_COMPONENT_REGISTRY,
];

export function getRegistryEntry(slug: string): RegistryEntry | undefined {
  return COMPONENT_REGISTRY.find((entry) => entry.slug === slug);
}
