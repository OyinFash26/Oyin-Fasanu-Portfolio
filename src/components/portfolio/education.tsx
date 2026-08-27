import { Section } from "./section";
import { Reveal } from "./reveal";

const EDUCATION = [
  {
    school: "University of Sunderland",
    qualification: "MSc Computing",
    detail: "Current",
  },
  {
    school: "Caleb University",
    qualification: "BSc Accounting",
    detail: "Second Class Upper Division (2:1) • 2020",
  },
];

const CERTIFICATIONS = [
  { title: "Develop AI-Powered Prototypes in Google AI Studio", issuer: "Google" },
  { title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals", issuer: "Microsoft" },
  { title: "Product Design Certification", issuer: "I4GxZURI" },
  { title: "Responsive Web Design Certification", issuer: "freeCodeCamp" },
  { title: "Network Security Fundamentals", issuer: "BitDegree" },
  { title: "AML/CFT & CPF Compliance Training", issuer: "DataPro Limited" },
  { title: "AML/CFT Training", issuer: "Plant Governance Advisory Limited" },
];

export function Education() {
  return (
    <Section id="education" index="05" eyebrow="Learning" title="Education & Certifications">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          {EDUCATION.map((item, i) => (
            <Reveal
              key={item.school}
              delay={i * 80}
              className="rounded-lg border border-border bg-card p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <h3 className="text-lg font-semibold md:text-xl">{item.school}</h3>
              <p className="mt-1 text-sm text-accent">{item.qualification}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <h3 className="border-b border-border pb-3 font-display text-sm font-semibold tracking-wide">
            Certifications
          </h3>
          <ul className="mt-4 divide-y divide-border">
            {CERTIFICATIONS.map((cert) => (
              <li key={cert.title} className="flex items-baseline justify-between gap-4 py-4">
                <span className="text-sm md:text-base">{cert.title}</span>
                {cert.issuer ? <span className="eyebrow shrink-0">{cert.issuer}</span> : null}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
