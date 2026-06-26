import {
  FeatureShowcaseSection,
  type ShowcaseItem,
} from "@/busted-components/feature-showcase-section";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

const items: ShowcaseItem[] = [
  {
    id: "talk",
    tabLabel: "Start a conversation",
    eyebrow: "uno",
    heading: "Tell us what you're working toward",
    body: "Share your goals and questions and we'll help you find the clearest next step. No pressure — just a focused conversation about what matters to you.",
    image: `${CDN}/AboutBcity.webp`,
    widget: `${CDN}/Widget.svg`,
  },
  {
    id: "partner",
    tabLabel: "Partner with us",
    eyebrow: "Duo",
    heading: "Build something lasting together",
    body: "Whether you're an organization, funder, or volunteer, there's a place for you here. Let's explore how a partnership could extend our shared impact.",
    image: `${CDN}/Thumbnail.webp`,
    widget: `${CDN}/FeaturedWidgets.webp`,
  },
  {
    id: "support",
    tabLabel: "Get support",
    eyebrow: "rike",
    heading: "We're here when you need us",
    body: "Reach out for guidance, resources, or a steady hand. Our team responds with care and clarity, ready to help you move forward with confidence.",
    image: `${CDN}/TabImage.webp`,
    widget: `${CDN}/Widget1.svg`,
  },
];

export function ContactPrefooterSection() {
  return (
    <FeatureShowcaseSection
      eyebrow="GET IN TOUCH"
      heading="However you'd like to connect, we'd love to hear from you — start a conversation, explore a partnership, or simply reach out for support."
      items={items}
    />
  );
}
