import Link from 'next/link';
import { site } from '@/lib/content';
import { getNoteIndex } from '@/lib/notes';

export function SiteFooter() {
  const hasNotes = getNoteIndex().length > 0;

  return (
    <footer className="mx-auto w-full max-w-[36rem] px-6 pb-16">
      <div className="mt-16 border-t border-rule pt-5 text-[0.95rem] text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="mt-2">
          <a className="link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          {hasNotes ? (
            <>
              {' · '}
              <Link className="link" href="/notes">
                Notes
              </Link>
            </>
          ) : null}
        </p>
      </div>
    </footer>
  );
}