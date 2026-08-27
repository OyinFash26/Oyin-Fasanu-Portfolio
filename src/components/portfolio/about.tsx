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
           I’m a technology-focused professional with a background in accounting, financial services, 
           risk and compliance, currently pursuing an{" "}
           <span className="text-foreground">MSc Computing</span> at the University of Sunderland.
          </p>
          <p>
            I’m building on my professional experience through hands-on work in web development, 
            data visualisation and product design, with an interest in using technology to solve real 
            business and user problems.
          </p>
          <p>
            My goal is to combine my business knowledge and technical skills to contribute to technology, 
            product and business analysis projects.
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
