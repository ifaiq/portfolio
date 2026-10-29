# magicfaiq.com

Personal site. Next.js App Router, one typeface, no database, no JavaScript beyond analytics.

## Running it

```
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Adding a note

Notes are markdown files in `content/notes/`. Add one and it appears at `/notes/<filename>`:

```md
---
title: Why I stopped using queues
date: 2026-11-02
summary: Optional line shown in the index.
---

Body in markdown. Headings, lists, code and quotes are styled.
```

- The filename is the URL, so `why-i-stopped-using-queues.md` becomes `/notes/why-i-stopped-using-queues`.
- `date` is `YYYY-MM-DD`. Newest first.
- The homepage lists the three most recent notes. The Notes section, the footer link and the sitemap entry appear only once at least one note exists.
- Nothing else is needed: `lib/notes.ts` reads the folder at build time and `marked` turns the markdown into HTML.

There is no login, no admin page and no public form. A note exists because it was committed to this repository, which is the only way in.

## Where things live

| Path | What it holds |
| --- | --- |
| `content/notes/` | One markdown file per note |
| `app/page.tsx` | The homepage, in reading order |
| `app/notes/page.tsx` | The notes index |
| `app/notes/[slug]/page.tsx` | A single note |
| `lib/notes.ts` | Reads and renders notes |
| `lib/content.ts` | Name, tagline, email, links, current work, the "Lately" list |
| `components/` | Section wrapper and footer |
| `app/globals.css` | Colour tokens, base type, note typography |

## Deploying

Static pages, no environment variables. `robots.txt` and `sitemap.xml` are generated from `site.url`.