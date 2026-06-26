import {
  FeatureShowcaseSection,
  type ShowcaseItem,
} from "@/busted-components/feature-showcase-section";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

const items: ShowcaseItem[] = [
  {
    id: "evidence",
    tabLabel: "Evidence-based",
    eyebrow: "uno",
    heading: "Hope grounded in real evidence",
    body: "Every program is shaped by research and measured outcomes. We build on what works — calm, durable foundations that hold up under scrutiny and scale with the communities we serve.",
    image: `${CDN}/AboutBcity.webp`,
    widget: `${CDN}/Widget.svg`,
  },
  {
    id: "resilience",
    tabLabel: "Resilience",
    eyebrow: "Duo",
    heading: "Resilience that compounds over time",
    body: "Small, consistent support creates outsized change. Our approach is designed for efficiency and longevity, so progress keeps building long after the first step.",
    image: `${CDN}/Thumbnail.webp`,
    widget: `${CDN}/FeaturedWidgets.webp`,
  },
  {
    id: "community",
    tabLabel: "Community-led",
    eyebrow: "rike",
    heading: "Solutions led by the people closest to them",
    body: "The best ideas come from within communities. We provide flexible tools and frameworks that adapt to local needs instead of imposing a fixed template from the outside.",
    image: `${CDN}/TabImage.webp`,
    widget: `${CDN}/Widget1.svg`,
  },
];

export function ScienceOfHopeSection() {
  return (
    <FeatureShowcaseSection
      eyebrow="THE SCIENCE OF HOPE"
      heading="Hope isn't wishful thinking — it's a practice grounded in evidence, resilience, and community that builds a durable foundation for change."
      items={items}
    />
  );
}
