import { Section } from "./section";
import { Reveal } from "./reveal";

const ROLES = [
  {
    company: "Stanbic IBTC Insurance Brokers Ltd",
    role: "Internal Control Officer",
    period: "Sep 2025 – Jan 2026",
    points: [
      "Led control oversight across three branches.",
      "Helped reduce regulatory infractions by 30%.",
      "Improved control effectiveness to 95%.",
      "Worked with stakeholders to identify and address control and process gaps.",
    ],
  },
  {
    company: "Fidelity Bank Plc",
    role: "Internal Control Officer",
    period: "Sep 2023 – Aug 2025",
    points: [
      "Internal controls and control testing across banking operations.",
      "Risk assessment and regulatory compliance monitoring.",
      "Process improvement and stakeholder management.",
      "Day-to-day financial-services operations support.",
    ],
  },
  {
    company: "Investment / Asset Management",
    role: "Investment & Asset Management Experience",
    period: "Earlier experience",
    points: [
      "Investment analysis supporting portfolio and asset management activity.",
      "Research, reporting and analysis of financial information for decision-making.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" index="02" eyebrow="Career" title="Experience">
      <ol className="relative border-l border-border pl-8 md:pl-12">
        {ROLES.map((role, i) => (
          <Reveal as="li" key={role.company} delay={i * 90} className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[calc(2rem+5px)] size-2.5 rounded-full bg-accent ring-4 ring-background md:-left-[calc(3rem+5px)]"
            />
            <p className="eyebrow">{role.period}</p>
            <h3 className="mt-3 text-xl font-semibold md:text-2xl">{role.company}</h3>
            <p className="mt-1 text-sm text-accent">{role.role}</p>
            <ul className="mt-4 space-y-2">
              {role.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                >
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-border" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
