import { notFound } from "next/navigation";

import { COMPONENT_REGISTRY, getRegistryEntry } from "@/lib/component-registry";

export function generateStaticParams() {
  return COMPONENT_REGISTRY.map((entry) => ({ slug: entry.slug }));
}

export default async function PreviewPage(props: PageProps<"/preview/[slug]">) {
  const { slug } = await props.params;
  const entry = getRegistryEntry(slug);

  if (!entry) {
    notFound();
  }

  const { Component } = entry;

  return <Component />;
}
