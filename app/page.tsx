import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ValueFeaturesSection } from "@/components/value-features-section";
import { ExpandableCardsSection } from "@/components/expandable-cards-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { SellingPointsSection } from "@/components/selling-points-section";
import { CaseStudyFeatureSection } from "@/components/case-study-feature-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection />
        <ValueFeaturesSection />
        {/* TODO: add centered intro text above this section */}
        <ExpandableCardsSection />
        <TestimonialSection />
        <SellingPointsSection />
        <CaseStudyFeatureSection />
      </main>
      <SiteFooter />
    </>
  );
}
