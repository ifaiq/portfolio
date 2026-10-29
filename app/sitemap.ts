import type { MetadataRoute } from 'next';
import { site } from '@/lib/content';
import { getNotes } from '@/lib/notes';
import { getQuotes } from '@/lib/quotes';

export default function sitemap(): MetadataRoute.Sitemap {
  const notes = getNotes();
  const quotes = getQuotes();

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${site.url}/notes`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...notes.map((note) => ({
      url: `${site.url}/notes/${note.slug}`,
      lastModified: note.date ? new Date(`${note.date}T00:00:00Z`) : new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
    ...(quotes.length > 0
      ? [
          {
            url: `${site.url}/quotes`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.4,
          },
        ]
      : []),
  ];
}