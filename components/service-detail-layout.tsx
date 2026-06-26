import { ServiceBenefits } from "@/components/service-benefits";
import { ServiceClientStory } from "@/components/service-client-story";
import { ServiceExplainer } from "@/components/service-explainer";
import { ServiceHero } from "@/components/service-hero";
import { ServiceOtherServices } from "@/components/service-other-services";
import { ServiceOverview } from "@/components/service-overview";
import type { ServiceHeroMeta } from "@/lib/hopeward-pages";

type ServiceDetailLayoutProps = {
  hero: ServiceHeroMeta;
};

/**
 * Shared layout for Hopeward per-service detail pages. Individual sections
 * still use assessment-planning defaults until each service page is ported.
 */
export function ServiceDetailLayout({ hero }: ServiceDetailLayoutProps) {
  return (
    <>
      <ServiceHero
        sectionId={hero.sectionId}
        title={hero.title}
        body={hero.body}
      />
      <ServiceOverview />
      <ServiceExplainer />
      <ServiceBenefits />
      <ServiceClientStory />
      <ServiceOtherServices />
    </>
  );
}
