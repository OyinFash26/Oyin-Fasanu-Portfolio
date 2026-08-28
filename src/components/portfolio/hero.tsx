import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div
        aria-hidden="true"
        className="rule-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(circle_at_70%_20%,black,transparent_70%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 lg:grid-cols-[1.35fr_1fr] lg:items-end">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            <span className="text-xs text-muted-foreground">
              Open to technology, product &amp; business analysis opportunities
            </span>
          </div>

          <p className="eyebrow mt-8">Oyin Fasanu</p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Building at the intersection of technology, business{" "}
            <span className="text-accent">&amp;</span> people.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Technology-focused professional with experience across financial services, risk and
            compliance, now pursuing an MSc Computing and building towards a career in technology,
            product and business analysis.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              View My Work
              <ArrowDownRight className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:border-accent hover:text-accent"
            >
              Let&apos;s Connect
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-6 delay-150 duration-1000">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">Operating model</p>
            <ul className="mt-5 space-y-4">
              {[
                { k: "01", t: "Business problem", d: "Controls, risk, process and stakeholders" },
                { k: "02", t: "Translation", d: "Requirements, analysis, clear documentation" },
                { k: "03", t: "Technical solution", d: "Software, data and product thinking" },
              ].map((row) => (
                <li key={row.k} className="flex gap-4 border-b border-border/70 pb-4 last:border-0">
                  <span className="font-mono text-xs text-accent">{row.k}</span>
                  <div>
                    <p className="font-display text-sm font-semibold">{row.t}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{row.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
