const links = [
  { href: '#notes', label: 'Notes' },
  { href: '#work', label: 'Work' },
  { href: '#exploring', label: 'Exploring' },
  { href: '#about', label: 'About' },
];

export function SiteHeader() {
  return (
    <div className="mx-auto w-full max-w-[52rem] px-6 pt-8 md:px-10 md:pt-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-rule pb-4 font-mono text-[0.7rem] uppercase tracking-[0.16em]">
        <a href="#main" className="text-ink no-underline">
          Faiq Shariff
        </a>
        <nav aria-label="Sections" className="flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted underline-offset-4 hover:text-accent hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
