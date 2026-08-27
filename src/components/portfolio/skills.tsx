import { Section } from "./section";
import { Reveal } from "./reveal";

const GROUPS = [
  {
    title: "Technology",
    items: ["HTML", "CSS", "JavaScript", "PHP", "SQL", "PostgreSQL"],
  },
  {
    title: "Product & Business",
    items: [
      "Product Analysis",
      "Business Analysis",
      "Requirements Gathering",
      "Business Process Analysis",
      "Stakeholder Management",
      "User Experience",
    ],
  },
  { title: "Data & Design", items: ["Power BI", "Figma", "Data Visualisation"] },
  {
    title: "Risk & Compliance",
    items: ["Internal Controls", "Risk Assessment", "AML/CFT Compliance", "Regulatory Compliance"],
  },
  {
    title: "Tools",
    items: [
      "Microsoft Office",
      "Google Workspace",
      "Notion",
      "Microsoft Teams",
      "Zoom",
      "Finacle",
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills" index="04" eyebrow="Capabilities" title="Skills & Tools">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <h3 className="border-b border-border pb-3 font-display text-sm font-semibold tracking-wide">
              {group.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item}>
                  <span className="inline-flex rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
