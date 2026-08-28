import { Section } from "./section";
import { Reveal } from "./reveal";

const PROFILE_SNAPSHOT = [
  {
    label: "Background",
    title: "Financial Services • Accounting • Risk & Compliance",
  },
  {
    label: "Currently",
    title: "MSc Computing",
    detail: "University of Sunderland",
  },
  {
    label: "Focus",
    title: "Technology • Product • Business Analysis",
  },
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
      <div className="space-y-12">
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

          <Reveal delay={120}>
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
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="border-y border-border">
            <p className="eyebrow px-1 py-5">Profile Snapshot</p>
            <dl className="grid md:grid-cols-3">
              {PROFILE_SNAPSHOT.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={240 + index * 100}
                  className={`group border-border px-1 py-7 transition-colors duration-300 hover:bg-surface md:px-7 ${
                    index > 0 ? "border-t md:border-t-0 md:border-l" : ""
                  } ${index === 1 ? "md:border-t-2 md:border-t-accent" : ""}`}
                >
                  <dt className="eyebrow transition-colors duration-300 group-hover:text-accent">{item.label}</dt>
                  <dd className="mt-4 max-w-sm font-display text-xl font-semibold leading-snug md:text-2xl">
                    {item.title}
                  </dd>
                  {item.detail && (
                    <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</dd>
                  )}
                </Reveal>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
