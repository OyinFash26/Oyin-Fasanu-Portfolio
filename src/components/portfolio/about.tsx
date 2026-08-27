import { Section } from "./section";
import { Reveal } from "./reveal";

const CAREER_JOURNEY = [
  {
    number: "01",
    label: "Where I started",
    title: "Accounting & Financial Services",
    detail: "Internal Controls • Risk • Compliance • Investment Management",
  },
  {
    number: "02",
    label: "Where I am",
    title: "MSc Computing",
    detail: "University of Sunderland",
    current: true,
  },
  {
    number: "03",
    label: "Where I'm going",
    title: "Technology • Product • Business Analysis",
    detail: "Building practical technical and problem-solving skills.",
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

          <div className="relative grid gap-3 md:grid-cols-3 md:gap-5">
            <div className="absolute left-[16.67%] right-[16.67%] top-6 hidden h-px bg-border md:block" />
            {CAREER_JOURNEY.map((stage, index) => (
              <Reveal key={stage.number} delay={180 + index * 100} className="relative h-full">
                <div
                  className={`group h-full border p-5 transition-colors duration-300 ${
                    stage.current
                      ? "border-accent bg-accent/[0.07]"
                      : "border-border bg-card hover:border-accent/60"
                  }`}
                >
                  <div
                    className={`relative z-10 mx-auto flex h-3 w-3 items-center justify-center rounded-full border-2 bg-background transition-colors duration-300 ${
                      stage.current ? "border-accent" : "border-border group-hover:border-accent"
                    }`}
                  >
                    <span className={`h-1 w-1 rounded-full ${stage.current ? "bg-accent" : "bg-border"}`} />
                  </div>
                  <p className="eyebrow mt-5">
                    {stage.number} — {stage.label}
                  </p>
                  <h3 className="mt-3 text-base font-semibold leading-snug">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
