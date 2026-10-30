import config from "@/config";

/**
 * Feed readers and the Medium/Substack importers resolve relative URLs
 * inconsistently, so root-relative src/href values are made absolute.
 */
export function absolutizeUrls(html: string): string {
  return html.replace(
    /(\s(?:src|href)=")\/(?!\/)/g,
    `$1${config.site.url.replace(/\/$/, "")}/`
  );
}
