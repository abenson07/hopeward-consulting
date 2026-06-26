import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticleContent } from "@/components/blog-article-content";
import { BlogArticleHero } from "@/components/blog-article-hero";
import { HopewardNavigation } from "@/components/hopeward-navigation";
import { MoreBlogs } from "@/components/more-blogs";

import { HopewardFooter } from "@/components/hopeward-footer";
import {
  getHopewardInsight,
  INSIGHT_TEMPLATE_SLUG,
  PUBLISHED_INSIGHT_SLUGS,
} from "@/lib/hopeward-pages";

type InsightPageProps = PageProps<"/insights/[slug]">;

export function generateStaticParams() {
  return PUBLISHED_INSIGHT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata(props: InsightPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const page = getHopewardInsight(slug);
  if (!page) {
    return { title: "Hopeward" };
  }
  return {
    title: page.title,
    description: page.description || undefined,
  };
}

export default async function InsightPage(props: InsightPageProps) {
  const { slug } = await props.params;
  const page = getHopewardInsight(slug);

  if (!page || slug === INSIGHT_TEMPLATE_SLUG) {
    notFound();
  }

  return (
    <>
      <HopewardNavigation />
      <main className="flex flex-1 flex-col">
        <BlogArticleHero />
        <BlogArticleContent />
        <MoreBlogs />
      </main>
      <HopewardFooter />
    </>
  );
}
