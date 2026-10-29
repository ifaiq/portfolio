import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-[36rem] px-6 pt-8">
      <div className="flex items-baseline justify-between gap-6 text-[0.95rem]">
        <Link href="/" className="text-ink no-underline hover:text-accent">
          Faiq Shariff
        </Link>
        <nav aria-label="Pages" className="flex gap-5">
          <Link className="link text-muted" href="/notes">
            Notes
          </Link>
          <Link className="link text-muted" href="/quotes">
            Quotes
          </Link>
        </nav>
      </div>
    </header>
  );
}
