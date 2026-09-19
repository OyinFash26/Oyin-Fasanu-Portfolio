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
  note?: string;
  links?: Array<{ label: string; href: string }>;
  designs?: Array<{ label: string; href: string }>;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Product Design",
    title: "Product Design & UI/UX",
    description:
      "A collection of product and interface explorations focused on user flow, strategic thinking, visual clarity and practical design decisions.",
    tech: ["Figma", "UI/UX", "Design Systems"],
    designs: [
      { label: "Agency Website", href: "https://www.figma.com/" },
      { label: "Facility Mobile App", href: "https://www.figma.com/" },
    ],
  },
  {
    number: "02",
    category: "Data & Analytics",
    title: "Data Visualisation",
    description:
      "A data visualisation project exploring how complex information can be transformed into clear, understandable visual insights.",
    tech: ["JavaScript", "D3.js", "Data Visualisation"],
    href: "https://codepen.io/",
    links: [{ label: "View Visualisation", href: "https://codepen.io/" }],
  },
  {
    number: "03",
    category: "Web Development",
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio site designed and developed to showcase experience, projects and technical work in a clear editorial style.",
    tech: ["React", "TypeScript", "Tailwind"],
    href: "https://github.com/OyinFash26/Oyin-Fasanu-Portfolio",
    links: [{ label: "GitHub Repository", href: "https://github.com/OyinFash26/Oyin-Fasanu-Portfolio" }],
  },
  {
    number: "04",
    category: "Web Development",
    title: "Responsive Web Design",
    description:
      "Responsive web development work demonstrating semantic HTML, CSS, accessible layouts and thoughtful, user-centred design decisions.",
    tech: ["HTML", "CSS", "Responsive Design"],
    href: "https://example.com",
    links: [{ label: "View Project", href: "https://example.com" }],
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
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

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

            <div className="mt-8 flex flex-wrap items-center gap-3 pt-2">
              {project.designs?.map((design) => (
                <a
                  key={design.label}
                  href={design.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  {design.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}

              {project.links?.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}

              {!project.links?.length && !project.designs?.length && project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
                >
                  View Project
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : null}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
