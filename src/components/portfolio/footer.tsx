const LINKEDIN = "https://www.linkedin.com/in/oyinkansola-kola-fasanu-b6a9001b7";
const GITHUB = "https://github.com/OyinFash26";
const EMAIL = "oyinfasanu@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm font-bold tracking-[0.22em] uppercase">Oyin Fash</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Technology • Product • Business Analysis
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm">
          <a
            className="text-muted-foreground transition-colors hover:text-accent"
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-accent"
            href={GITHUB}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
          <a
            className="text-muted-foreground transition-colors hover:text-accent"
            href={`mailto:${EMAIL}`}
          >
            Email
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 w-full max-w-6xl px-6">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 Oyin Fash. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
