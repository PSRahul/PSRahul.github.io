import type { Loader } from "astro/loaders";
import { XMLParser } from "fast-xml-parser";

export type ExternalSource = "substack" | "medium";

export interface ExternalFeed {
  source: ExternalSource;
  url: string;
}

interface RssItem {
  title?: string;
  link?: string;
  pubDate?: string;
  description?: string;
  // Medium puts the full article here and often omits `description`
  "content:encoded"?: string;
  category?: string | string[];
}

const FETCH_TIMEOUT_MS = 10_000;

/** Removes tags and collapses whitespace so feed HTML can be used as a plain-text description. */
function toPlainText(html: string | undefined, maxLength = 200): string {
  const text = (html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength
    ? `${text.slice(0, maxLength).replace(/\s+\S*$/, "")}…`
    : text;
}

/** Strips tracking query params (Medium appends `?source=rss-…`) for stable ids and dedup. */
function cleanUrl(url: string): string {
  try {
    const parsed = new URL(url);
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return url;
  }
}

async function fetchFeed(feed: ExternalFeed): Promise<RssItem[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(feed.url, { signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const parsed = new XMLParser({ ignoreAttributes: true }).parse(xml);
    const items = parsed?.rss?.channel?.item ?? [];
    return Array.isArray(items) ? items : [items];
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Content-layer loader that pulls posts published on Substack/Medium via their
 * public RSS feeds. Feed failures are logged and skipped so a platform outage
 * (or building offline) never breaks the site build.
 */
export function externalFeedsLoader(feeds: ExternalFeed[]): Loader {
  return {
    name: "external-feeds",
    load: async ({ store, logger, parseData }) => {
      store.clear();
      for (const feed of feeds) {
        let items: RssItem[];
        try {
          items = await fetchFeed(feed);
        } catch (err) {
          logger.warn(
            `Skipping ${feed.source} feed (${feed.url}): ${(err as Error).message}`
          );
          continue;
        }

        for (const item of items) {
          if (!item.title || !item.link || !item.pubDate) continue;
          const url = cleanUrl(item.link);
          const id = `${feed.source}:${url}`;
          const tags = item.category
            ? Array.isArray(item.category)
              ? item.category
              : [item.category]
            : [];
          const data = await parseData({
            id,
            data: {
              title: item.title,
              url,
              source: feed.source,
              pubDatetime: new Date(item.pubDate),
              description: toPlainText(
                item.description || item["content:encoded"]
              ),
              tags,
            },
          });
          store.set({ id, data });
        }
        logger.info(`Loaded ${items.length} posts from ${feed.source}`);
      }
    },
  };
}
