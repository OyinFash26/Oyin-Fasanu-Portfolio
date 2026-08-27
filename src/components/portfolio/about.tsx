import { Section } from "./section";
import { Reveal } from "./reveal";

const HIGHLIGHTS = [
  { label: "Background", value: "Financial Services & Accounting" },
  { label: "Currently", value: "MSc Computing" },
  { label: "Focus", value: "Technology • Product • Business Analysis" },
  { label: "Based in", value: "United Kingdom" },
];

const LENSES = [
  "Business problems",
  "Controls & risk",
  "Requirements",
  "Data",
  "Product thinking",
  "Software",
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I work where business logic meets technical logic. My career started in accounting and
            financial services, where I spent my time inside internal controls, risk and compliance,
            and investment management — the places where a small process gap quietly becomes an
            expensive problem.
          </p>
          <p>
            That work taught me how organisations actually operate: how decisions get made, where
            processes break, and how to talk to the people who own them. I&apos;m now building the
            technical half of that picture through an{" "}
            <span className="text-foreground">MSc Computing at the University of Sunderland</span>,
            alongside hands-on work in web development, data and product design.
          </p>
          <p>
            The combination is the point. I can sit with a stakeholder, understand the real problem
            behind the request, and then work with the people building the solution in language they
            recognise.
          </p>
        </Reveal>

        <Reveal delay={120} className="space-y-6">
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">How I think</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {LENSES.map((lens) => (
                <span
                  key={lens}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  {lens}
                </span>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="bg-card p-5">
                <dt className="eyebrow">{item.label}</dt>
                <dd className="mt-2 font-display text-sm font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
