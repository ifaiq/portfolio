import Link from 'next/link';
import { current, lately, site, testimonials } from '@/lib/content';
import { formatNoteDate, getNoteIndex } from '@/lib/notes';
import { Section } from '@/components/Section';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Home() {
  const notes = getNoteIndex();

  return (
    <main id="main" className="mx-auto w-full max-w-[36rem] px-6">
      <div className="pt-10 md:pt-16">
        <h1 className="text-[2.1rem] leading-[1.12] tracking-[-0.015em] md:text-[2.6rem]">
          I build the part of your app you can&apos;t see.
        </h1>
        <p className="mt-4 text-[1.2rem] leading-[1.5] md:text-[1.3rem]">
          It keeps your data safe, sends your messages, connects to other software, and makes AI do something useful.
          If it works, nobody notices. If it breaks, everyone does.
        </p>
        <p className="mt-8">
          I&apos;ve done this for eight years, mostly for other people&apos;s products rather than my own.
        </p>
        <p className="mt-6 text-[0.95rem] italic text-muted">{site.tagline}</p>
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[0.95rem]">
          <li>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </li>
          <li>
            <a className="link" href={site.links.github} {...external}>
              GitHub
            </a>
          </li>
          <li>
            <a className="link" href={site.links.linkedin} {...external}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <Section id="now" label="What I&apos;m doing now">
        <ul className="space-y-6">
          {current.map((item) => (
            <li key={item.name}>
              <h3 className="text-[1.08rem] italic">{item.name}</h3>
              <p className="mt-1.5">{item.problem}</p>
              <p className="mt-2">{item.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[0.95rem] text-muted">
          I can&apos;t share the code or name the clients. That&apos;s how client work goes.
        </p>
        {testimonials.length > 0 ? (
          <ul className="mt-8 space-y-5 border-t border-rule pt-6">
            {testimonials.map((item) => (
              <li key={item.text}>
                <blockquote>
                  &ldquo;{item.text}&rdquo;
                </blockquote>
                <p className="mt-1 text-[0.95rem] italic text-muted">{item.who}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </Section>

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
            <p className="mt-6">
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
          I&apos;m Faiq. I&apos;ve spent eight years building the back end of apps: the part that holds the data and
          talks to everything else.
        </p>
        <p className="mt-4">
          I&apos;m good at the boring questions. Where does this number come from? What happens if two people click at
          once? What breaks first when the site gets busy?
        </p>
        <p className="mt-4">Outside work: fitness, philosophy, and finding out how things work.</p>
      </Section>

      <Section id="contact" label="Contact">
        <p>
          Email me and tell me what you&apos;re building and where it&apos;s stuck. I&apos;ll tell you straight if I can
          help.
        </p>
        <p className="mt-3">
          <a className="link text-[1.12rem]" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
        <p className="mt-6 text-muted">I&apos;m open to side projects, and to full-time work if it&apos;s the right fit.</p>
      </Section>
    </main>
  );
}
