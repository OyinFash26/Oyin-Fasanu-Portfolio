import { useState, type FormEvent } from "react";
import { Section } from "./section";
import { Reveal } from "./reveal";

const EMAIL = "oyinfasanu@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/oyinkansola-kola-fasanu-b6a9001b7";
const GITHUB = "https://github.com/OyinFash26";

type Errors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const set = (key: keyof typeof values) => (value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
    setStatus("idle");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10)
      next.message = "Please write at least 10 characters so I know how to help.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("idle");
      return;
    }

    // Placeholder submission: opens the user's mail client until a backend is connected.
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setValues({ name: "", email: "", message: "" });
  };

  const field =
    "mt-2 w-full rounded-md border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

  return (
    <Section
      id="contact"
      index="07"
      eyebrow="Contact"
      title="Let's Work Together"
      subtitle="I'm always interested in connecting with people working on interesting products, technology and business problems."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={(e) => set("name")(e.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={field}
                placeholder="Your name"
              />
              {errors.name ? (
                <p id="name-error" role="alert" className="mt-2 text-xs text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => set("email")(e.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={field}
                placeholder="you@company.com"
              />
              {errors.email ? (
                <p id="email-error" role="alert" className="mt-2 text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={(e) => set("message")(e.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={field}
                placeholder="Tell me a little about the role, team or problem."
              />
              {errors.message ? (
                <p id="message-error" role="alert" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="inline-flex rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              Send Message
            </button>

            <p aria-live="polite" className="min-h-5 text-sm">
              {status === "success" ? (
                <span className="text-accent">
                  Thanks — your email draft is ready to send. I&apos;ll reply as soon as I can.
                </span>
              ) : null}
            </p>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <dl className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            <div className="p-6">
              <dt className="eyebrow">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm transition-colors hover:text-accent md:text-base"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="p-6">
              <dt className="eyebrow">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm break-all transition-colors hover:text-accent md:text-base"
                >
                  linkedin.com/in/oyinkansola-kola-fasanu-b6a9001b7
                </a>
              </dd>
            </div>
            <div className="p-6">
              <dt className="eyebrow">GitHub</dt>
              <dd className="mt-2">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm break-all transition-colors hover:text-accent md:text-base"
                >
                  github.com/OyinFash26
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
