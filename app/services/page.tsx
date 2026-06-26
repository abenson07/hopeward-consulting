import { ServiceBenefits } from "@/components/service-benefits";
import { ServiceClientStory } from "@/components/service-client-story";
import { ServiceExplainer } from "@/components/service-explainer";
import { ServiceHero } from "@/components/service-hero";
import { ServiceOtherServices } from "@/components/service-other-services";
import { ServiceOverview } from "@/components/service-overview";

import { SiteFooter } from "@/busted-components/site-footer";
import { SiteHeader } from "@/busted-components/site-header";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ServiceHero />
        <ServiceOverview />
        <ServiceExplainer />
        <ServiceBenefits />
        <ServiceClientStory />
        <ServiceOtherServices />
      </main>
      <SiteFooter />
    </>
  );
}
