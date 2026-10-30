const WORDS_PER_MINUTE = 230;

/** Estimated minutes to read a Markdown body, at least 1. */
export function getReadingTime(body: string | undefined): number {
  const words = (body ?? "")
    .replace(/^---[\s\S]*?---/, "") // frontmatter, if present
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
