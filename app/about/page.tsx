import { SiteHeader } from "@/components/site-header";
import { AboutHeroSection } from "@/components/about-hero-section";
import { SystemStatsSection } from "@/components/system-stats-section";
import { FeatureShowcaseSection } from "@/components/feature-showcase-section";
import { TeamSection } from "@/components/team-section";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <AboutHeroSection />
        <SystemStatsSection />
        <FeatureShowcaseSection />
        <TeamSection />
      </main>
      <SiteFooter />
    </>
  );
}
