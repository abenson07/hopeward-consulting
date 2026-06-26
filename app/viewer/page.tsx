import {
  BUSTED_COMPONENT_REGISTRY,
  PORTED_COMPONENT_REGISTRY,
} from "@/lib/component-registry";
import { ComponentViewer } from "./component-viewer";

export const metadata = {
  title: "Component Viewer",
};

export default function ViewerPage() {
  const ported = PORTED_COMPONENT_REGISTRY.map(({ slug, name, file }) => ({
    slug,
    name,
    file,
  }));
  const busted = BUSTED_COMPONENT_REGISTRY.map(({ slug, name, file }) => ({
    slug,
    name,
    file,
  }));

  return <ComponentViewer ported={ported} busted={busted} />;
}
