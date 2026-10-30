import rss from "@astrojs/rss";
import { getSortedNotes, getNoteUrl } from "@/utils/getNotesAndPapers";
import { absolutizeUrls } from "@/utils/absolutizeUrls";
import config from "@/config";

export async function GET() {
  const notes = await getSortedNotes();

  return rss({
    title: `${config.site.title} — Notes`,
    description: "Short notes and things I learned.",
    site: config.site.url,
    items: notes.map(({ id, data, rendered }) => ({
      link: getNoteUrl(id),
      title: data.title,
      description: data.description,
      pubDate: data.pubDatetime,
      ...(rendered?.html && { content: absolutizeUrls(rendered.html) }),
    })),
  });
}
