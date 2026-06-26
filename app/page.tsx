import { CaseStudiesSlider } from "@/components/case-studies-slider";
import { HomeIntro } from "@/components/home-intro";
import { HopewardFooter } from "@/components/hopeward-footer";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { OrgCollabSection } from "@/components/org-collab-section";
import { PartnersMarquee } from "@/components/partners-marquee";
import { PortedHomeHero } from "@/components/ported-home-hero";
import { ServicesTabSection } from "@/components/services-tab-section";
import { TestimonialSingle } from "@/components/testimonial-single";

export default function Home() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <PortedHomeHero />
        <HomeIntro />
        <OrgCollabSection />
        <PartnersMarquee />
        <TestimonialSingle />
        <ServicesTabSection />
        <CaseStudiesSlider />
      </main>
      <HopewardFooter />
    </>
  );
}
