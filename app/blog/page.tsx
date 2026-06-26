import { BlogHero } from "@/components/blog-hero";
import { BlogPage } from "@/components/blog-page";
import { HopewardNavigation } from "@/components/hopeward-navigation";

import { HopewardFooter } from "@/components/hopeward-footer";

export default function BlogRoute() {
  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <BlogHero />
        <BlogPage />
      </main>
      <HopewardFooter />
    </>
  );
}
