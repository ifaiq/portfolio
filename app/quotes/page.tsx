import type { Metadata } from 'next';
import { getQuotes } from '@/lib/quotes';

export const metadata: Metadata = {
  title: 'Quotes',
  description: 'Lines worth keeping, by Faiq Shariff.',
  alternates: { canonical: '/quotes' },
};

export default function QuotesPage() {
  const quotes = getQuotes();

  return (
    <main id="main" className="mx-auto w-full max-w-[36rem] px-6">
      <div className="pt-10 md:pt-16">
        <h1 className="text-[2rem] leading-[1.1] tracking-[-0.012em] md:text-[2.4rem]">Quotes</h1>

        {quotes.length === 0 ? (
          <p className="mt-6 text-muted">Nothing here yet.</p>
        ) : (
          <ul className="mt-10 divide-y divide-rule border-t border-rule">
            {quotes.map((quote) => (
              <li key={quote.text} className="py-8 last:pb-0">
                <blockquote className="text-[1.18rem] leading-[1.55]">{quote.text}</blockquote>
                {quote.source ? <p className="mt-2 text-[0.95rem] italic text-muted">{quote.source}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
