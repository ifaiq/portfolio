import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatNoteDate, getNote, getNotes } from '@/lib/notes';

export const dynamicParams = false;

export function generateStaticParams() {
  return getNotes().map((note) => ({ slug: note.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const note = getNote(params.slug);
  if (!note) return {};

  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: `/notes/${note.slug}` },
    openGraph: {
      type: 'article',
      title: note.title,
      description: note.summary,
      publishedTime: note.date,
    },
  };
}

export default function NotePage({ params }: { params: { slug: string } }) {
  const note = getNote(params.slug);
  if (!note) notFound();

  return (
    <main id="main" className="mx-auto w-full max-w-[36rem] px-6">
      <article className="pt-10 md:pt-16">
        <Link href="/notes" className="link text-[0.95rem] italic text-muted">
          Notes
        </Link>
        <h1 className="mt-6 text-[2rem] leading-[1.15] tracking-[-0.012em] md:text-[2.3rem]">{note.title}</h1>
        {note.date ? <p className="mt-3 text-[0.95rem] italic text-muted">{formatNoteDate(note.date)}</p> : null}
        <div className="note-body mt-10" dangerouslySetInnerHTML={{ __html: note.html }} />
      </article>
    </main>
  );
}
