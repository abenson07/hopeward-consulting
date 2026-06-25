import { SiteHeader } from "@/components/site-header";
import { ServicesHeroSection } from "@/components/services-hero-section";
import { ServiceExplainerSection } from "@/components/service-explainer-section";
import { TestimonialLargeSection } from "@/components/testimonial-large-section";
import { CaseStudySection } from "@/components/case-study-section";
import { SiteFooter } from "@/components/site-footer";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ServicesHeroSection />
        <ServiceExplainerSection />
        <TestimonialLargeSection />
        <CaseStudySection />
      </main>
      <SiteFooter />
    </>
  );
}
