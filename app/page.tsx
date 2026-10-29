import Link from 'next/link';
import { lately, site } from '@/lib/content';
import { formatNoteDate, getNoteIndex } from '@/lib/notes';
import { Section } from '@/components/Section';
import { SiteFooter } from '@/components/SiteFooter';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  const notes = getNoteIndex();

  return (
    <>
      <main id="main" className="mx-auto w-full max-w-[36rem] px-6">
        <header className="pt-20 md:pt-28">
          <h1 className="text-[2.3rem] leading-[1.08] tracking-[-0.012em] md:text-[2.8rem]">{site.name}</h1>
          <p className="mt-4 text-[1.2rem] italic text-muted md:text-[1.32rem]">{site.tagline}</p>
          <p className="mt-8">
            I&apos;m a software engineer in Pakistan, and I&apos;ve spent eight years on backends — mostly SaaS
            products, mostly Node and TypeScript, Python when there&apos;s data or a model involved. Lately more of it
            is AI.
          </p>
        </header>

        {notes.length > 0 ? (
          <Section id="notes" label="Notes">
            <ul className="space-y-5">
              {notes.slice(0, 3).map((note) => (
                <li key={note.slug}>
                  <Link
                    href={`/notes/${note.slug}`}
                    className="link text-[1.12rem] decoration-transparent hover:decoration-accent"
                  >
                    {note.title}
                  </Link>
                  <p className="mt-0.5 text-[0.95rem] italic text-muted">{formatNoteDate(note.date)}</p>
                </li>
              ))}
            </ul>
            {notes.length > 3 ? (
              <p className="mt-6 text-[1rem]">
                <Link href="/notes" className="link">
                  All notes
                </Link>
              </p>
            ) : null}
          </Section>
        ) : null}

        <Section id="lately" label="Lately">
          <ul className="space-y-4">
            {lately.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section id="about" label="About">
          <p>
            The work has mostly been at small companies, where one person tends to own the whole backend. That suits
            me. I like knowing how the parts depend on each other, and where a system will break first.
          </p>
          <p className="mt-4">Outside work: fitness, philosophy, and how things work.</p>
        </Section>

        <Section id="work" label="Work">
          <p>
            Eight years of backend work at small product companies: a warehouse system, a consumer app, an AI platform.
          </p>
          <p className="mt-4">
            Titles, dates and companies are on{' '}
            <a className="link" href={site.links.linkedin} {...external}>
              LinkedIn
            </a>
            , which stays current. This page doesn&apos;t.
          </p>
        </Section>

        <Section id="contact" label="Contact">
          <p>Email is the easiest way to reach me.</p>
          <p className="mt-3">
            <a className="link text-[1.12rem]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-8 text-[0.95rem] text-muted">
            <a className="link" href={site.links.github} {...external}>
              GitHub
            </a>
            {' · '}
            <a className="link" href={site.links.linkedin} {...external}>
              LinkedIn
            </a>
            {' · '}
            <a className="link" href={site.cv} {...external}>
              CV
            </a>
          </p>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}