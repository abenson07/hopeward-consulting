import { SiteHeader } from "@/components/site-header";
import { ContactFormSection } from "@/components/contact-form-section";
import { SiteFooter } from "@/components/site-footer";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <ContactFormSection />
      </main>
      <SiteFooter />
    </>
  );
}
