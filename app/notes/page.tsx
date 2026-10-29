import type { Metadata } from 'next';
import Link from 'next/link';
import { formatNoteDate, getNoteIndex } from '@/lib/notes';

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Notes by Faiq Shariff.',
  alternates: { canonical: '/notes' },
};

export default function NotesPage() {
  const notes = getNoteIndex();

  return (
    <main id="main" className="mx-auto w-full max-w-[36rem] px-6">
      <div className="pt-10 md:pt-16">
        <h1 className="text-[2rem] leading-[1.1] tracking-[-0.012em] md:text-[2.4rem]">Notes</h1>

        {notes.length === 0 ? (
          <p className="mt-6 text-muted">Nothing here yet.</p>
        ) : (
          <ul className="mt-10 space-y-8">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link
                  href={`/notes/${note.slug}`}
                  className="link text-[1.18rem] decoration-transparent hover:decoration-accent"
                >
                  {note.title}
                </Link>
                <p className="mt-1 text-[0.95rem] italic text-muted">{formatNoteDate(note.date)}</p>
                {note.summary ? <p className="mt-2 text-muted">{note.summary}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
