import type { Metadata } from "next";

import { HomeIntro } from "@/components/home-intro";
import { HopewardFooter } from "@/components/hopeward-footer";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { OrganizationHero } from "@/components/organization-hero";
import {
  ChartIcon,
  ClockIcon,
  OverlapIcon,
  PencilIcon,
  ServiceBenefits,
} from "@/components/service-benefits";
import { ServicesTabSection } from "@/components/services-tab-section";

export const metadata: Metadata = {
  title: "Collectives | Hopeward Consulting",
  description:
    "We help collectives align partners, build trust, and turn complex, multi-stakeholder challenges into clear, actionable steps that deliver measurable outcomes.",
};

export default function CollectivesPage() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <OrganizationHero />
        <HomeIntro />
        <ServiceBenefits
          sectionId="how-we-support-collectives"
          eyebrow="Service"
          title="Providing tools, guidance, and collaborative support to help your team navigate challenges and amplify your impact."
          cards={[
            {
              icon: ClockIcon,
              heading: "Empowering changemakers",
              body: "We work closely with the people who bring vision, coordination, and trust to your collaborative efforts, equipping them to lead with clarity.",
            },
            {
              icon: ChartIcon,
              heading: "Fostering alignment",
              body: "We help you identify shared priorities and create actionable plans that keep everyone moving in the same direction.",
            },
            {
              icon: PencilIcon,
              heading: "Building trust",
              body: "Trust is the foundation of successful collaboration. We facilitate conversations and create structures that ensure everyone has a voice.",
            },
            {
              icon: OverlapIcon,
              heading: "Driving results",
              body: "We help you turn your complex, multi-stakeholder challenges into clear, actionable steps that deliver measurable outcomes.",
            },
          ]}
        />
        <ServicesTabSection />
      </main>
      <HopewardFooter />
    </>
  );
}
