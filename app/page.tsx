import { exploring, notes, site, work, type Work } from '@/lib/content';
import { Section } from '@/components/Section';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

function WorkEntry({ item }: { item: Work }) {
  return (
    <article className="border-t border-rule pt-6 first:border-t-0 first:pt-0">
      <h3 className="text-[1.2rem] leading-snug">{item.role}</h3>
      <p className="mt-2 max-w-[38rem] text-muted">{item.scope}</p>
      {item.points ? (
        <ul className="mt-4 max-w-[38rem] space-y-2">
          {item.points.map((point) => (
            <li key={point} className="flex gap-3">
              <span aria-hidden="true" className="select-none text-muted/60">
                —
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-4 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
        {item.stack.join(' · ')}
      </p>
    </article>
  );
}

export default function Home() {
  const recent = work.filter((item) => !item.earlier);
  const earlier = work.filter((item) => item.earlier);

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto w-full max-w-[52rem] px-6 md:px-10">
        <div className="pt-14 md:pt-20">
          <h1 className="text-[2.6rem] leading-[1.02] tracking-[-0.015em] md:text-[3.4rem]">
            {site.name}
          </h1>
          <p className="mt-5 text-[1.3rem] italic text-muted md:text-[1.45rem]">{site.tagline}</p>
          <div className="mt-8 max-w-[36rem] space-y-5">
            <p>
              Software engineer in Pakistan. Eight years of backend work — Node.js, TypeScript, Python and the
              infrastructure underneath them — mostly on SaaS products, with more of it involving AI lately.
            </p>
            <p>A place for the things I&apos;ve built, the things I&apos;m working out, and the occasional note.</p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.7rem] uppercase tracking-[0.14em]">
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

        <div className="mt-16 md:mt-20">
          <Section id="notes" label="Notes">
            {notes.length > 0 ? (
              <ul className="space-y-7">
                {notes.map((note) => (
                  <li key={note.href} className="max-w-[38rem]">
                    <h3 className="text-[1.15rem]">
                      <a className="link decoration-transparent" href={note.href}>
                        {note.title}
                      </a>
                    </h3>
                    <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">
                      <time dateTime={note.date}>{note.date}</time>
                      {note.summary ? ` · ${note.summary}` : null}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="max-w-[36rem] text-muted">
                Nothing here yet. For now, whatever I write goes to{' '}
                <a className="link" href={site.links.medium} {...external}>
                  Medium
                </a>
                .
              </p>
            )}
          </Section>

          <Section id="work" label="Work">
            <div className="space-y-8">
              {recent.map((item) => (
                <WorkEntry key={`${item.role}-${item.scope.slice(0, 24)}`} item={item} />
              ))}
            </div>
            <div className="mt-10 border-t border-rule pt-6">
              <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-muted">Earlier</p>
              <div className="mt-6 space-y-6">
                {earlier.map((item) => (
                  <WorkEntry key={`${item.role}-${item.scope.slice(0, 24)}`} item={item} />
                ))}
              </div>
            </div>
          </Section>

          <Section id="exploring" label="Exploring">
            <ul className="max-w-[38rem] space-y-6">
              {exploring.map((topic) => (
                <li key={topic.title}>
                  <h3 className="text-[1.08rem]">{topic.title}</h3>
                  <p className="mt-1 text-muted">{topic.body}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="about" label="About">
            <div className="max-w-[36rem] space-y-5">
              <p>
                I&apos;m a software engineer in Pakistan, eight years in. Most of it has been backend work: APIs,
                data models, queues, migrations and deployments, with a fair amount of distributed systems in the mix.
              </p>
              <p>
                I&apos;ve worked on SaaS at a few different sizes, from a warehouse system used in daily operations to
                an AI platform sold to enterprises.
              </p>
              <p>Outside work: fitness, philosophy, AI, and a general interest in how things work.</p>
            </div>
          </Section>

          <Section id="contact" label="Contact">
            <p className="max-w-[36rem]">Email is the fastest way to reach me.</p>
            <p className="mt-3">
              <a className="link text-[1.15rem]" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="mt-8 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
              <a className="link" href={site.cv} {...external}>
                CV (PDF)
              </a>
            </p>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}