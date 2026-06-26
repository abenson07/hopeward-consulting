import {
  FeatureShowcaseSection,
  type ShowcaseItem,
} from "@/busted-components/feature-showcase-section";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

const items: ShowcaseItem[] = [
  {
    id: "leadership",
    tabLabel: "Leadership",
    eyebrow: "uno",
    heading: "Leaders who put the mission first",
    body: "Our leadership pairs deep field experience with a steady, long-term outlook. They set direction with clarity and protect the focus that keeps our work durable and honest.",
    image: `${CDN}/AboutBcity.webp`,
    widget: `${CDN}/Widget.svg`,
  },
  {
    id: "programs",
    tabLabel: "Programs",
    eyebrow: "Duo",
    heading: "Program teams close to the work",
    body: "The people designing and running our programs stay close to the communities they serve. That proximity keeps our efforts grounded, responsive, and genuinely useful.",
    image: `${CDN}/Thumbnail.webp`,
    widget: `${CDN}/FeaturedWidgets.webp`,
  },
  {
    id: "partners",
    tabLabel: "Partners",
    eyebrow: "rike",
    heading: "Partners who extend our reach",
    body: "We collaborate with a network of partners and volunteers who share our values. Together we scale impact further than any single team could on its own.",
    image: `${CDN}/TabImage.webp`,
    widget: `${CDN}/Widget1.svg`,
  },
];

export function TeamSection() {
  return (
    <FeatureShowcaseSection
      eyebrow="OUR TEAM"
      heading="Behind every step forward is a team of people united by a single belief: that steady, thoughtful work creates lasting change."
      items={items}
    />
  );
}
