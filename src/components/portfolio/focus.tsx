import { Section } from "./section";
import { Reveal } from "./reveal";

const CARDS = [
  {
    number: "01",
    title: "Technology",
    body: "Building stronger technical skills and developing practical software projects.",
  },
  {
    number: "02",
    title: "Product",
    body: "Learning how technology can solve real user and business problems.",
  },
  {
    number: "03",
    title: "Business Analysis",
    body: "Combining business knowledge with technical understanding to translate problems into effective solutions.",
  },
];

export function Focus() {
  return (
    <Section
      id="focus"
      index="06"
      eyebrow="Direction"
      title="What I'm Building Towards"
      className="bg-surface"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal
            key={card.number}
            delay={i * 80}
            className="group bg-card p-7 transition-colors duration-300 hover:bg-background md:p-9"
          >
            <span className="font-mono text-xs text-accent">{card.number}</span>
            <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            <div className="mt-8 h-px w-10 bg-border transition-all duration-500 group-hover:w-full group-hover:bg-accent" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
