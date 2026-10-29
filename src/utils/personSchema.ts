import bioPhoto from "@/assets/images/bio-photo.jpg";
import config from "@/config";

/**
 * schema.org Person for the site owner. Shared by the home page, the about
 * page and post authorship, so search engines can tie the site and the
 * linked profiles (`sameAs`) to one person.
 */
export function getPersonSchema() {
  const { site, socials } = config;
  return {
    "@type": "Person",
    "@id": new URL("/#person", site.url).href,
    name: site.author,
    url: site.url,
    image: new URL(bioPhoto.src, site.url).href,
    jobTitle: "Machine Learning Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Technical University of Munich",
      url: "https://www.tum.de/en/",
    },
    sameAs: socials.map(({ url }) => url).filter(url => url.startsWith("http")),
  };
}
