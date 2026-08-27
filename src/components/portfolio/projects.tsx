import { ArrowUpRight } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";

type Project = {
  number: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  href?: string;
  designs?: { title: string; href: string }[];
  note?: string;
};

// Replace `href` with real project links when available.
const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website designed and developed to showcase professional experience, technical skills and selected projects.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    category: "Web Development",
    title: "Responsive Web Design",
    description:
      "Responsive web development work demonstrating semantic HTML, CSS, responsive layouts and modern web design principles.",
    tech: ["HTML", "CSS"],
  },
  {
    number: "03",
    category: "Product Design",
    title: "Product Design & Dashboard",
    description:
      "A dashboard concept designed in Figma, focusing on information architecture, user experience, visual hierarchy and presenting complex information clearly.",
    tech: ["Figma"],
    designs: [
      {
        title: "Railway Corporation Website & Mobile App Rebrand",
        href: "https://www.figma.com/design/F7UvM4ms175VZlbJSWBWe2/Introduction-to-Figma--OyinFash?node-id=0-1&t=vn2leWfFeLn0YAh8-1",
      },
      {
        title: "Agency Website",
        href: "https://www.figma.com/proto/xyY4ZOqteUJqEg8fttPOxV/Mini-Project---OyinFash?node-id=0-1&t=MNJjHAba9dCj8110-1",
      },
      {
        title: "Facility Mobile App Design",
        href: "https://www.figma.com/design/VgcACdzHtGrJR0FmudtVNG/Project?node-id=0-1&t=H0MNGoQDDtUzWwxs-1",
      },
    ],
  },
  {
    number: "04",
    category: "Data & Analytics",
    title: "Data Visualisation",
    description:
      "A data visualisation project exploring how complex information can be transformed into clear, understandable visual graphics.",
    tech: ["Data Visualisation", "Power BI"],
  },
  {
    number: "05",
    category: "MSc Computing / Research",
    title: "AI-Based Auditing for Corporate Accounting Fraud Detection",
    description:
      "An academic project exploring the potential application of artificial intelligence to identify patterns associated with corporate accounting fraud.",
    tech: ["Artificial Intelligence", "Research"],
    note: "Academic / research project",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Work"
      title="Selected Projects"
      subtitle="A selection of projects exploring technology, design, data and problem-solving."
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <Reveal
            key={project.number}
            delay={i * 70}
            className="group relative flex flex-col bg-card p-7 transition-colors duration-300 hover:bg-surface md:p-9"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-xs text-accent">Project {project.number}</span>
              <span className="eyebrow">{project.category}</span>
            </div>

            <h3 className="mt-6 text-xl leading-snug font-semibold md:text-2xl">{project.title}</h3>
            {project.note ? (
              <span className="mt-3 inline-flex w-fit rounded-full border border-accent/40 px-2.5 py-1 font-mono text-[0.625rem] tracking-wider text-accent uppercase">
                {project.note}
              </span>
            ) : null}
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2">
              {project.designs ? (
                <div className="space-y-3">
                  {project.designs.map((design) => (
                    <a
                      key={design.href}
                      href={design.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/design inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                    >
                      View Design: {design.title}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/design:translate-x-0.5 group-hover/design:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              ) : project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  View Project
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  title="Project link coming soon"
                  className="inline-flex cursor-not-allowed items-center gap-2 text-sm font-medium text-muted-foreground"
                >
                  View Project
                  <span className="font-mono text-[0.625rem] tracking-wider uppercase">
                    Link coming soon
                  </span>
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
