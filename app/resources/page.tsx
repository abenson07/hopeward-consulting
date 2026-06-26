import { HopewardNavigation } from "@/components/hopeward-navigation";
import { ResourcesPage } from "@/components/resources-page";

import { HopewardFooter } from "@/components/hopeward-footer";

export default function ResourcesRoute() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <ResourcesPage />
      </main>
      <HopewardFooter />
    </>
  );
}
