import { site } from '@/lib/content';

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[52rem] px-6 pb-12 md:px-10">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-rule pt-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          <a href="#main" className="link">
            Top
          </a>
        </p>
      </div>
    </footer>
  );
}
