import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

// Feed readers and the Medium/Substack importers resolve relative URLs
// inconsistently, so root-relative src/href values are made absolute.
const absolutize = (html: string) =>
  html.replace(
    /(\s(?:src|href)=")\/(?!\/)/g,
    `$1${config.site.url.replace(/\/$/, "")}/`
  );

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);

  return rss({
    title: config.site.title,
    description: config.site.description,
    site: config.site.url,
    items: sortedPosts.map(({ data, id, filePath, rendered }) => ({
      link: getPostUrl(id, filePath, config.site.lang),
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime),
      // Full text for .md posts; .mdx posts aren't pre-rendered and fall
      // back to the description.
      ...(rendered?.html && { content: absolutize(rendered.html) }),
    })),
  });
}
