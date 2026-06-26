import type { Metadata } from "next";

import { HopewardPageShell } from "@/components/hopeward-page-shell";
import { PagePlaceholder } from "@/components/page-placeholder";
import { getHopewardPage } from "@/lib/hopeward-pages";

export function hopewardPageMetadata(slug: string): Metadata {
  const page = getHopewardPage(slug);
  if (!page) {
    return { title: "Hopeward" };
  }
  return {
    title: page.title,
    description: page.description || undefined,
  };
}

type HopewardPlaceholderPageProps = {
  slug: string;
  portedSections?: string[];
};

export function HopewardPlaceholderPage({
  slug,
  portedSections,
}: HopewardPlaceholderPageProps) {
  const page = getHopewardPage(slug);
  if (!page) {
    return null;
  }

  return (
    <HopewardPageShell>
      <PagePlaceholder page={page} portedSections={portedSections} />
    </HopewardPageShell>
  );
}
