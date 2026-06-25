import {
  SplitFeatureSection,
  type SplitFeature,
} from "@/components/split-feature-section";

const CDN = "https://byqsupply-components.netlify.app/evermind/images";

const features: SplitFeature[] = [
  {
    title: "Smooth Interactions",
    body: "Subtle animations designed to feel natural.",
    icon: (
      <path
        d="M8 12H0V11H8V12ZM20.5 11H20.325C21.346 10.174 22 8.912 22 7.5C22 5.019 19.981 3 17.5 3C15.019 3 13 5.019 13 7.5V8H14V7.5C14 5.57 15.57 4 17.5 4C19.43 4 21 5.57 21 7.5C21 9.43 19.43 11 17.5 11H10V12H20.5C21.878 12 23 13.121 23 14.5C23 15.879 21.878 17 20.5 17C19.122 17 18 15.879 18 14.5V14H17V14.5C17 16.43 18.57 18 20.5 18C22.43 18 24 16.43 24 14.5C24 12.57 22.43 11 20.5 11ZM11 16H0V17H11C12.654 17 14 18.346 14 20C14 21.654 12.654 23 11 23C9.346 23 8 21.654 8 20H7C7 22.206 8.794 24 11 24C13.206 24 15 22.206 15 20C15 17.794 13.206 16 11 16ZM11 3.5C11 1.57 9.43 0 7.5 0C5.57 0 4 1.57 4 3.5V4H5V3.5C5 2.121 6.122 1 7.5 1C8.878 1 10 2.121 10 3.5C10 4.879 8.878 6 7.5 6H0V7H7.5C9.43 7 11 5.43 11 3.5Z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Modular Structure",
    body: "Pre-built sections, ready to mix and match.",
    icon: (
      <path
        d="M17.924 5.068C17.471 2.194 14.946 0 12 0C9.054 0 6.529 2.194 6.076 5.068C2.637 5.523 0 8.491 0 12C0 15.859 3.14 19 7 19H11.5V24H12.5V19H17C20.86 19 24 15.859 24 12C24 8.491 21.363 5.523 17.924 5.068ZM17 18H12.5V15.207L16.354 11.353L15.647 10.646L12.501 13.792V8.999H11.501V13.792L8.355 10.646L7.648 11.353L11.502 15.207V18H7C3.691 18 1 15.309 1 12C1 8.875 3.442 6.249 6.56 6.023L6.985 5.992L7.022 5.567C7.242 3.005 9.429 1 12 1C14.571 1 16.758 3.006 16.978 5.567L17.015 5.992L17.44 6.023C20.558 6.249 23 8.875 23 12C23 15.309 20.309 18 17 18Z"
        fill="currentColor"
      />
    ),
  },
];

export function ServiceExplainerSection() {
  return (
    <SplitFeatureSection
      image={`${CDN}/ColumnImage.webp`}
      caption="It's a good place to describe image"
      eyebrow="Eco-Inspired Design"
      heading="Building templates like eco infrastructures"
      body="Hopeward may look like a Brussels-based eco consultancy, but let's be real — this is a Webflow template. Just like we'd design a power plant with precision and European standards, we've built this system with variables, modular layouts, and pixel-perfect details."
      ctaLabel="Check pricing"
      features={features}
    />
  );
}
