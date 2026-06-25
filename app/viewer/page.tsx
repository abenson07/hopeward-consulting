import { COMPONENT_REGISTRY } from "@/lib/component-registry";
import { ComponentViewer } from "./component-viewer";

export const metadata = {
  title: "Component Viewer",
};

export default function ViewerPage() {
  const items = COMPONENT_REGISTRY.map(({ slug, name, file }) => ({
    slug,
    name,
    file,
  }));

  return <ComponentViewer items={items} />;
}
