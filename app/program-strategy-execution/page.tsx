import { HopewardFooter } from "@/components/hopeward-footer";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { ServiceBenefits } from "@/components/service-benefits";
import { ServiceClientStory } from "@/components/service-client-story";
import { ServiceExplainer } from "@/components/service-explainer";
import { ServiceHero } from "@/components/service-hero";
import { ServiceOtherServices } from "@/components/service-other-services";
import { ServiceOverview } from "@/components/service-overview";
import { hopewardPageMetadata } from "@/lib/hopeward-page";
import { SERVICE_HEROES, otherServiceLinks } from "@/lib/hopeward-pages";

const SLUG = "program-strategy-execution" as const;

export const metadata = hopewardPageMetadata(SLUG);

export default function Page() {
  const hero = SERVICE_HEROES[SLUG];
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <ServiceHero sectionId={hero.sectionId} title={hero.title} body={hero.body} />
        <ServiceOverview />
        <ServiceExplainer />
        <ServiceBenefits />
        <ServiceClientStory />
        <ServiceOtherServices items={otherServiceLinks(SLUG)} />
      </main>
      <HopewardFooter />
    </>
  );
}
