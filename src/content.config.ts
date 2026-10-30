import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";
import {
  externalFeedsLoader,
  type ExternalFeed,
} from "@/loaders/externalFeeds";

export const BLOG_PATH = "src/content/posts";

/** Display order of the groups on /projects/ */
export const PROJECT_CATEGORIES = [
  "Large Language Models",
  "Generative Models",
  "Deep Learning for Computer Vision",
  "Machine Learning",
  "Master Thesis",
  "Training Frameworks",
  "Traditional Computer Vision",
] as const;

const { substack, medium } = config.syndication;
const externalFeeds: ExternalFeed[] = [
  ...(substack
    ? [
        {
          source: "substack",
          url: `https://${substack}.substack.com/feed`,
        } as const,
      ]
    : []),
  ...(medium
    ? [{ source: "medium", url: `https://medium.com/feed/@${medium}` } as const]
    : []),
];

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      // Copies of this post on other platforms, shown as "Also published on"
      syndication: z
        .object({
          substack: z.url().optional(),
          medium: z.url().optional(),
        })
        .optional(),
      // Threads where the post is being discussed, shown under "Also published on"
      discussion: z
        .object({
          hackernews: z.url().optional(),
          reddit: z.url().optional(),
          linkedin: z.url().optional(),
        })
        .optional(),
      // Posts sharing a series name are linked as "Part N of M"
      series: z.string().optional(),
      // Sticky table of contents on wide screens (needs 3+ headings)
      toc: z.boolean().default(true),
      // "Cite this post" block with BibTeX
      cite: z.boolean().default(true),
    }),
});

// Posts that exist only on Substack/Medium, pulled from their RSS feeds at build time
const external = defineCollection({
  loader: externalFeedsLoader(externalFeeds),
  schema: z.object({
    title: z.string(),
    url: z.url(),
    source: z.enum(["substack", "medium"]),
    pubDatetime: z.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(PROJECT_CATEGORIES),
    // Set for projects without a writeup here; the card links straight to the repo
    repo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

// Short notes / TILs, published at /notes/<slug>/
const notes = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/notes" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDatetime: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().optional(),
  }),
});

export const PAPER_STATUSES = ["reading", "read", "to-read"] as const;

// Reading list. A paper with a Markdown body gets its own page at /papers/<slug>/
const papers = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/papers" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number().int(),
    url: z.url(),
    status: z.enum(PAPER_STATUSES),
    rating: z.number().int().min(1).max(5).optional(),
    readDate: z.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    // Shown as "Last updated" on /now and /uses
    updated: z.date().optional(),
  }),
});

export const collections = { posts, pages, external, projects, notes, papers };
