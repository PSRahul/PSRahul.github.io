import { type CollectionEntry, getCollection } from "astro:content";
import { postFilter } from "./postFilter";
import { slugifyStr } from "./slugify";

/** Published posts in a series, oldest first (part 1 is the first post). */
export async function getSeriesPosts(
  series: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await getCollection(
    "posts",
    ({ data }) =>
      !data.draft &&
      data.series !== undefined &&
      slugifyStr(data.series) === slugifyStr(series)
  );
  return posts
    .filter(postFilter)
    .sort(
      (a, b) => a.data.pubDatetime.getTime() - b.data.pubDatetime.getTime()
    );
}

export function getSeriesUrlSlug(series: string): string {
  return slugifyStr(series);
}
