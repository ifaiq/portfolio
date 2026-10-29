import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

export function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid gap-x-8 gap-y-4 border-t border-rule py-12 md:grid-cols-[7rem_minmax(0,1fr)] md:py-16"
    >
      <h2
        id={`${id}-heading`}
        className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted md:pt-1.5"
      >
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
