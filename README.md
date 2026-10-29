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

## Adding a quote

Quotes are one block each in `content/quotes.md`. Write them as blockquotes, with the attribution as the last line in asterisks:

```md
> The best way out is always through.
> *Robert Frost*

> We are what we repeatedly do.
> *Will Durant*
```

- Blank line between quotes.
- No asterisk line means no attribution.
- The file starts with an HTML comment showing the format. Delete it whenever.
- Once there is at least one quote, `/quotes` lists them and a Quotes link appears in the footer and the sitemap.

## Adding a testimonial

Testimonials appear on the homepage at the end of "What I'm doing now". They live in `lib/content.ts`:

```ts
export const testimonials: Testimonial[] = [
  { text: 'He untangled a payment bug we had lived with for a year.', who: 'Engineering lead, client project' },
];
```

While the array is empty the block does not render at all.

## Where things live

| Path | What it holds |
| --- | --- |
| `content/notes/` | One markdown file per note |
| `content/quotes.md` | Quotes, one blockquote each |
| `app/page.tsx` | The homepage, in reading order |
| `app/notes/page.tsx` | The notes index |
| `app/notes/[slug]/page.tsx` | A single note |
| `app/quotes/page.tsx` | The quotes page |
| `lib/notes.ts` | Reads and renders notes |
| `lib/quotes.ts` | Reads `quotes.md` |
| `lib/content.ts` | Name, tagline, email, links, current work, "Lately", testimonials |
| `components/` | Section wrapper and footer |
| `app/globals.css` | Colour tokens, base type, note typography |

## Deploying

Static pages, no environment variables. `robots.txt` and `sitemap.xml` are generated from `site.url`.