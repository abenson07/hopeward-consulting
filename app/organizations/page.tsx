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
import { hopewardPageMetadata } from "@/lib/hopeward-page";

export const metadata = hopewardPageMetadata("organizations");

export default function OrganizationsPage() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <OrganizationHero />
        <HomeIntro />
        <ServiceBenefits
          sectionId="how-we-support-organizations"
          eyebrow="Service"
          title="Providing tools, guidance, and collaborative support to help your team navigate challenges and amplify your impact."
          cards={[
            {
              icon: ClockIcon,
              heading: "Human-centered approach",
              body: "We focus on the people who make your mission possible, ensuring their strengths and needs drive the work.",
            },
            {
              icon: ChartIcon,
              heading: "Collaborative process",
              body: "We work alongside your team to co-create solutions that align with your values, goals, and capacity.",
            },
            {
              icon: PencilIcon,
              heading: "Adaptable tools",
              body: "We tailor our strategies to your unique challenges, building pathways that fit your organization.",
            },
            {
              icon: OverlapIcon,
              heading: "Results-driven",
              body: "Everything we do is geared towards achieving realistic, tangible outcomes that move your mission forward.",
            },
          ]}
        />
        <ServicesTabSection />
      </main>
      <HopewardFooter />
    </>
  );
}
