import { type CollectionEntry, getCollection } from "astro:content";
import { getRelativeLocaleUrl } from "astro:i18n";
import config from "@/config";

/** Published notes, newest first. */
export async function getSortedNotes(): Promise<CollectionEntry<"notes">[]> {
  const notes = await getCollection("notes", ({ data }) => !data.draft);
  return notes.sort(
    (a, b) => b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime()
  );
}

export function getNoteUrl(id: string, locale = config.site.lang): string {
  return getRelativeLocaleUrl(locale, `notes/${id}`);
}

/** Papers with written notes get a page here; the rest link to the paper. */
export function hasPaperPage(paper: CollectionEntry<"papers">): boolean {
  return Boolean(paper.body?.trim());
}

export function getPaperUrl(
  paper: CollectionEntry<"papers">,
  locale = config.site.lang
): string {
  return hasPaperPage(paper)
    ? getRelativeLocaleUrl(locale, `papers/${paper.id}`)
    : paper.data.url;
}
