import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Home",
    posts: "Writing",
    projects: "Projects",
    notes: "Notes",
    papers: "Papers",
    tags: "Tags",
    about: "About",
    archives: "Archives",
    search: "Search",
  },
  post: {
    alsoOn: "Also published on",
    discussOn: "Discuss on",
    minRead: "{{minutes}} min read",
    onThisPage: "On this page",
    citeAs: "Cite this post",
    orBibtex: "Or with BibTeX:",
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  series: {
    label: "Series",
    partOf: "Part {{current}} of {{total}} in",
    pageDesc: "All parts of the series, in reading order.",
    indexDesc: "Multi-part posts, grouped.",
    parts: "parts",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "Social Links",
    featured: "Featured",
    recentPosts: "Latest Writing",
    allPosts: "All Writing",
    selectedProjects: "Selected Projects",
    allProjects: "All Projects",
    subscribe: "Get new posts by email",
    subscribeDesc: "Every post also goes out as a newsletter on Substack.",
    startHere: "New here? Start here",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
    startHere: "Start here",
    now: "Now",
    uses: "Uses",
    colophon: "Colophon",
    rss: "RSS",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Everything tagged",

    tagsTitle: "Tags",
    tagsDesc: "All the tags used in posts, notes and papers.",

    postsTitle: "Writing",
    postsDesc: "Everything I've written, here and on Substack and Medium.",

    projectsTitle: "Projects",
    projectsDesc: "Things I've built, from research to tooling.",

    notesTitle: "Notes",
    notesDesc: "Short notes and things I learned, smaller than a post.",

    papersTitle: "Papers",
    papersDesc: "ML papers I've read or plan to, with my notes.",

    lastUpdated: "Last updated",

    archivesTitle: "Archives",
    archivesDesc: "All the articles I've archived.",

    searchTitle: "Search",
    searchDesc: "Search any article ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
