import type { Root, Element } from "hast";

/**
 * Adds `loading="lazy"` and `decoding="async"` to Markdown images. Astro only
 * does this for images it optimises; images served from public/ (the project
 * screenshots and animated WebPs) would otherwise all load up front.
 */
export default function rehypeLazyImages() {
  return (tree: Root) => {
    const visit = (node: Root | Element) => {
      for (const child of node.children) {
        if (child.type !== "element") continue;
        if (child.tagName === "img") {
          child.properties.loading ??= "lazy";
          child.properties.decoding ??= "async";
        }
        visit(child);
      }
    };
    visit(tree);
  };
}
