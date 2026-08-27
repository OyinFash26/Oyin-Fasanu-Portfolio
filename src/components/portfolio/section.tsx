import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Section({
  id,
  index,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  index?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 border-t border-border py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="mb-12 md:mb-16">
          <div className="flex items-baseline gap-4">
            {index ? <span className="eyebrow">{index}</span> : null}
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          </div>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
          ) : null}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
