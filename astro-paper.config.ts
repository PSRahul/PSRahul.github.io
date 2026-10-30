import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://psrahul.github.io/",
    title: "Rahul PS",
    description:
      "Rahul Parthasarathy Srikanth — machine learning engineer in Chennai, writing about ML, computer vision and LLMs.",
    author: "Rahul Parthasarathy Srikanth",
    profile: "https://github.com/PSRahul",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kolkata",
    dir: "ltr",
  },
  posts: {
    perPage: 10,
    perIndex: 6,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  // Syndication targets. Leave a value empty until the account exists;
  // empty entries are skipped for both the social icons and the RSS import.
  syndication: {
    // e.g. "psrahul" → https://psrahul.substack.com
    substack: "",
    // e.g. "psrahul" → https://medium.com/@psrahul
    medium: "",
  },
  // Comments under posts via GitHub Discussions. Get the IDs from
  // https://giscus.app (see README → Comments). Off while IDs are empty.
  comments: {
    giscus: {
      repo: "PSRahul/PSRahul.github.io",
      repoId: "R_kgDOHjyQ1g",
      category: "Comments",
      categoryId: "DIC_kwDOHjyQ1s4DJ-oG",
    },
  },
  // Cookie-free page view counts. Set to your GoatCounter site code, e.g.
  // "psrahul" for https://psrahul.goatcounter.com. Off while empty.
  analytics: {
    goatcounter: "psrahul",
  },
  socials: [
    { name: "github", url: "https://github.com/PSRahul" },
    { name: "linkedin", url: "https://linkedin.com/in/psrahul-ml" },
    // Fill in to show the icon, e.g. "https://scholar.google.com/citations?user=…"
    { name: "googlescholar", url: "", linkTitle: "Rahul PS on Google Scholar" },
    // e.g. "https://huggingface.co/<username>"
    { name: "huggingface", url: "", linkTitle: "Rahul PS on Hugging Face" },
  ],
  shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
