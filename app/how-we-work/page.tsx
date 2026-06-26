import { HopewardFooter } from "@/components/hopeward-footer";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { ServicesTabSection } from "@/components/services-tab-section";
import { TangiblesIntangibles } from "@/components/tangibles-intangibles";
import { TestimonialSingle } from "@/components/testimonial-single";
import { WhatWeDoHero } from "@/components/what-we-do-hero";

export default function HowWeWork() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <WhatWeDoHero />
        <TangiblesIntangibles />
        <TestimonialSingle />
        <ServicesTabSection />
      </main>
      <HopewardFooter />
    </>
  );
}
