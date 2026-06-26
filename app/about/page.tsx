import { ContactPrefooter } from "@/components/contact-prefooter";
import { EmpoweringMission } from "@/components/empowering-mission";
import { HopeIntroBlock } from "@/components/hope-intro-block";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { PartnersMarquee } from "@/components/partners-marquee";
import { PortedHomeHero } from "@/components/ported-home-hero";
import { TeamBlock } from "@/components/team-block";
import { ValuesSection } from "@/components/values-section";

import { HopewardFooter } from "@/components/hopeward-footer";

export default function AboutPage() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <PortedHomeHero />
        <ValuesSection />
        <EmpoweringMission />
        <PartnersMarquee />
        <HopeIntroBlock />
        <TeamBlock />
        <ContactPrefooter />
      </main>
      <HopewardFooter />
    </>
  );
}
