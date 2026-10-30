import { getCollection } from "astro:content";
import { postFilter } from "./postFilter";
import { slugifyStr } from "./slugify";

type Tag = { tag: string; tagName: string };

/**
 * De-duplicated, sorted tags across posts, notes and papers. Like
 * `getUniqueTags()`, `tag` is the URL slug and `tagName` the display label.
 */
export async function getAllTags(): Promise<Tag[]> {
  const posts = (
    await getCollection("posts", ({ data }) => !data.draft)
  ).filter(postFilter);
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  const papers = await getCollection("papers");

  const byTag = new Map<string, string>();
  for (const tagName of [...posts, ...notes, ...papers].flatMap(
    ({ data }) => data.tags
  )) {
    const tag = slugifyStr(tagName);
    if (!byTag.has(tag)) byTag.set(tag, tagName);
  }
  return [...byTag]
    .map(([tag, tagName]) => ({ tag, tagName }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}
