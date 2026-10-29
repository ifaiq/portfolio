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
      className="mt-16 border-t border-rule pt-5 md:mt-20"
    >
      <h2 id={`${id}-heading`} className="text-[0.95rem] italic text-accent">
        {label}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}