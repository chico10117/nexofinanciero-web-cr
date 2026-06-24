import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="gradient-hero text-white">
      <div className="container-page py-16 md:py-24">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
        )}
        <h1 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-base text-white/85 md:text-lg">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-light">{eyebrow}</p>}
      <h2 className="font-display text-2xl font-bold text-primary md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
