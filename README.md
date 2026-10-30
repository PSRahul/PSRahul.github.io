# psrahul.github.io

Personal site and blog of Rahul Parthasarathy Srikanth, built with [Astro](https://astro.build/) on the [AstroPaper](https://github.com/satnaing/astro-paper) theme (v6.1.0, MIT — see [`licenses/astro-paper.txt`](licenses/astro-paper.txt)). It deploys to GitHub Pages through GitHub Actions.

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, build to dist/, and build the Pagefind search index
npm run preview   # serve dist/
```

## Where things live

| Path                           | What                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `astro-paper.config.ts`        | Site title, author, socials (incl. Google Scholar / Hugging Face), handles    |
| `src/content/posts/`           | Posts (`/writing/<slug>/`). Start from `_template.md` or `_template.mdx`      |
| `src/content/notes/`           | Short notes / TILs (`/notes/<slug>/`, feed at `/notes/rss.xml`)               |
| `src/content/papers/`          | Reading list (`/papers/`). A paper with a body gets its own page              |
| `src/content/projects/`        | Projects (`/projects/<slug>/`). Set `repo:` for GitHub-only entries           |
| `src/content/pages/`           | `about`, `start-here`, and `now` / `uses` / `colophon` (served at `/<name>/`) |
| `src/components/mdx/`          | `Figure` and `Embed` (Hugging Face Space, YouTube, Colab) for `.mdx` posts    |
| `public/assets/`               | Images and `pdf/resume.pdf`, served at `/assets/...`                          |
| `src/loaders/externalFeeds.ts` | Pulls Substack/Medium RSS into the writing list at build time                 |

### Post options

Set in a post's frontmatter (all optional):

- `featured: true`: starred in lists and shown on `/start-here/`.
- `series: "Name"`: posts sharing a name get a "Part N of M" box and a `/series/<name>/` page.
- `discussion: { hackernews, reddit, linkedin }`: thread URLs, shown as "Discuss on".
- `toc: false`: hides the sticky table of contents (shown on wide screens when a post has 3+ headings).
- `cite: false`: hides the "Cite this post" / BibTeX block.

### Now and Uses

`src/content/pages/now.md` and `uses.md` are skeletons with `TODO(Rahul)` comments. Once they're filled in, bump `updated:`, then list them:

- [nownownow.com](https://nownownow.com/about): submit the `/now/` URL.
- [uses.tech](https://uses.tech): open a PR to [wesbos/awesome-uses](https://github.com/wesbos/awesome-uses).

## Publishing a post (POSSE)

This site holds the canonical copy of each post. Substack and Medium get copies so the post reaches their audiences.

1. Copy `src/content/posts/_template.md` to `src/content/posts/<slug>.md`, write the post, set `draft: false`, and push to `main`.
2. **Medium:** go to _Import a story_ and paste `https://psrahul.github.io/writing/<slug>/`. Medium sets `rel=canonical` back to this site. Check it on the published story.
3. **Substack:** paste the same article as a new post or newsletter. Put `Originally published at https://psrahul.github.io/writing/<slug>/` at the top, because Substack can't set a canonical link.
4. Add the two URLs to the post's frontmatter so the post page shows "Also published on":

   ```yaml
   syndication:
     substack: "https://<name>.substack.com/p/<slug>"
     medium: "https://medium.com/@<handle>/<slug>"
   ```

`/rss.xml` carries the full text of each post, with absolute image and link URLs, so feed readers and importers get the whole article rather than a summary.

Posts written only on Substack or Medium show up in the writing list automatically, with a platform badge that links out. This needs `syndication.substack` / `syndication.medium` set in `astro-paper.config.ts`. A nightly Actions run rebuilds the site to pick up new ones. Syndicated copies of local posts are deduplicated by URL or title.

## Comments (Giscus)

Comments are stored in this repo's GitHub Discussions and show under posts once configured.

1. Enable **Discussions** in the repository settings and create a category named `Comments` (type: Announcements, so only Giscus creates threads).
2. Install the [giscus app](https://github.com/apps/giscus) on this repository.
3. On [giscus.app](https://giscus.app), enter `PSRahul/PSRahul.github.io`, pick the `Comments` category, and copy `data-repo-id` and `data-category-id` into `comments.giscus` in `astro-paper.config.ts`.

## Analytics (GoatCounter)

Page views are counted with [GoatCounter](https://www.goatcounter.com/). It sets no cookies and stores no personal data, so no consent banner is needed ([privacy policy](https://www.goatcounter.com/help/privacy)). Sign up, then put your site code in `analytics.goatcounter` in `astro-paper.config.ts`. The script is only included in production builds.

## Images

Project images are WebP files in `public/assets/images/`. Convert new GIFs or PNGs before adding them; `sharp` is already a dependency:

```bash
node -e 'require("sharp")(process.argv[1],{animated:true}).webp({quality:70}).toFile(process.argv[2])' in.gif out.webp
```

## Deployment

`.github/workflows/deploy.yml` builds on every PR and deploys `main` to GitHub Pages. It also runs nightly and on manual dispatch. In the repository settings, Pages → Source must be set to **GitHub Actions**.
