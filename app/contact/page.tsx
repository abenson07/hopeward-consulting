import { CenterContact } from "@/components/center-contact";
import { FaqSection } from "@/components/faq-section";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { VideoBlock } from "@/components/video-block";

import { HopewardFooter } from "@/components/hopeward-footer";

export default function ContactPage() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <CenterContact />
        <VideoBlock />
        <FaqSection />
      </main>
      <HopewardFooter />
    </>
  );
}
