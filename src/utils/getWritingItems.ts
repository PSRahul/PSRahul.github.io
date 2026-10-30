import { getCollection } from "astro:content";
import { getPostUrl } from "./getPostPaths";
import { getSortedPosts } from "./getSortedPosts";
import { getReadingTime } from "./readingTime";

export type WritingSource = "site" | "substack" | "medium";

export interface WritingItem {
  title: string;
  description: string;
  url: string;
  source: WritingSource;
  pubDatetime: Date;
  modDatetime?: Date | null;
  timezone?: string;
  /** Local posts marked `featured`, shown with a star */
  featured?: boolean;
  readingTime?: number;
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const stripQuery = (url: string) => url.split(/[?#]/)[0].replace(/\/$/, "");

/**
 * Returns posts written on this site plus posts that only live on
 * Substack/Medium, newest first. An external post is dropped when it is a
 * syndicated copy of a local post (matched by URL in `syndication`, or by title).
 */
export async function getWritingItems(locale?: string): Promise<WritingItem[]> {
  const posts = getSortedPosts(
    await getCollection("posts", ({ data }) => !data.draft)
  );
  const external = await getCollection("external");

  const syndicatedUrls = new Set(
    posts.flatMap(({ data }) =>
      Object.values(data.syndication ?? {})
        .filter((url): url is string => Boolean(url))
        .map(stripQuery)
    )
  );
  const localTitles = new Set(posts.map(({ data }) => normalize(data.title)));

  const localItems: WritingItem[] = posts.map(
    ({ id, filePath, data, body }) => ({
      title: data.title,
      description: data.description,
      url: getPostUrl(id, filePath, locale),
      source: "site",
      pubDatetime: data.pubDatetime,
      modDatetime: data.modDatetime,
      timezone: data.timezone,
      featured: data.featured,
      readingTime: getReadingTime(body),
    })
  );

  const externalItems: WritingItem[] = external
    .filter(
      ({ data }) =>
        !syndicatedUrls.has(stripQuery(data.url)) &&
        !localTitles.has(normalize(data.title))
    )
    .map(({ data }) => ({
      title: data.title,
      description: data.description,
      url: data.url,
      source: data.source,
      pubDatetime: data.pubDatetime,
    }));

  const sortDate = (item: WritingItem) =>
    new Date(item.modDatetime ?? item.pubDatetime).getTime();

  return [...localItems, ...externalItems].sort(
    (a, b) => sortDate(b) - sortDate(a)
  );
}
