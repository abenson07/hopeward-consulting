import type { ComponentType } from "react";

import { AboutHeroSection } from "@/components/about-hero-section";
import { BenefitsSection } from "@/components/benefits-section";
import { CaseStudySection } from "@/components/case-study-section";
import { ContactFormSection } from "@/components/contact-form-section";
import { ContactPrefooterSection } from "@/components/contact-prefooter-section";
import { ExpandableCardsSection } from "@/components/expandable-cards-section";
import { FaqSection } from "@/components/faq-section";
import { FeatureShowcaseSection } from "@/components/feature-showcase-section";
import { HeroSection } from "@/components/hero-section";
import { ScienceOfHopeSection } from "@/components/science-of-hope-section";
import { SellingPointsSection } from "@/components/selling-points-section";
import { ServiceExplainerSection } from "@/components/service-explainer-section";
import { ServicesHeroSection } from "@/components/services-hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SplitFeatureSection } from "@/components/split-feature-section";
import { CaseStudyFeatureSection } from "@/components/case-study-feature-section";
import { SystemStatsSection } from "@/components/system-stats-section";
import { TeamSection } from "@/components/team-section";
import { TestimonialLargeSection } from "@/components/testimonial-large-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { ValueFeaturesSection } from "@/components/value-features-section";
import { VideoSection } from "@/components/video-section";

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

export const COMPONENT_REGISTRY: RegistryEntry[] = [
  { slug: "site-header", name: "SiteHeader", file: "components/site-header.tsx", Component: SiteHeader },
  { slug: "hero-section", name: "HeroSection", file: "components/hero-section.tsx", Component: HeroSection },
  { slug: "about-hero-section", name: "AboutHeroSection", file: "components/about-hero-section.tsx", Component: AboutHeroSection },
  { slug: "services-hero-section", name: "ServicesHeroSection", file: "components/services-hero-section.tsx", Component: ServicesHeroSection },
  { slug: "value-features-section", name: "ValueFeaturesSection", file: "components/value-features-section.tsx", Component: ValueFeaturesSection },
  { slug: "expandable-cards-section", name: "ExpandableCardsSection", file: "components/expandable-cards-section.tsx", Component: ExpandableCardsSection },
  { slug: "selling-points-section", name: "SellingPointsSection", file: "components/selling-points-section.tsx", Component: SellingPointsSection },
  { slug: "case-study-feature-section", name: "CaseStudyFeatureSection", file: "components/case-study-feature-section.tsx", Component: CaseStudyFeatureSection },
  { slug: "system-stats-section", name: "SystemStatsSection", file: "components/system-stats-section.tsx", Component: SystemStatsSection },
  { slug: "feature-showcase-section", name: "FeatureShowcaseSection", file: "components/feature-showcase-section.tsx", Component: FeatureShowcaseSection },
  { slug: "split-feature-section", name: "SplitFeatureSection", file: "components/split-feature-section.tsx", Component: SplitFeatureSectionDemo },
  { slug: "benefits-section", name: "BenefitsSection", file: "components/benefits-section.tsx", Component: BenefitsSection },
  { slug: "service-explainer-section", name: "ServiceExplainerSection", file: "components/service-explainer-section.tsx", Component: ServiceExplainerSection },
  { slug: "science-of-hope-section", name: "ScienceOfHopeSection", file: "components/science-of-hope-section.tsx", Component: ScienceOfHopeSection },
  { slug: "case-study-section", name: "CaseStudySection", file: "components/case-study-section.tsx", Component: CaseStudySection },
  { slug: "testimonial-section", name: "TestimonialSection", file: "components/testimonial-section.tsx", Component: TestimonialSection },
  { slug: "testimonial-large-section", name: "TestimonialLargeSection", file: "components/testimonial-large-section.tsx", Component: TestimonialLargeSection },
  { slug: "team-section", name: "TeamSection", file: "components/team-section.tsx", Component: TeamSection },
  { slug: "video-section", name: "VideoSection", file: "components/video-section.tsx", Component: VideoSection },
  { slug: "faq-section", name: "FaqSection", file: "components/faq-section.tsx", Component: FaqSection },
  { slug: "contact-form-section", name: "ContactFormSection", file: "components/contact-form-section.tsx", Component: ContactFormSection },
  { slug: "contact-prefooter-section", name: "ContactPrefooterSection", file: "components/contact-prefooter-section.tsx", Component: ContactPrefooterSection },
  { slug: "site-footer", name: "SiteFooter", file: "components/site-footer.tsx", Component: SiteFooter },
];

export function getRegistryEntry(slug: string): RegistryEntry | undefined {
  return COMPONENT_REGISTRY.find((entry) => entry.slug === slug);
}
