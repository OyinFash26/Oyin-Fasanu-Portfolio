import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { Education } from "@/components/portfolio/education";
import { Focus } from "@/components/portfolio/focus";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";

const TITLE = "Oyin Fasanu — Technology, Product & Business Analysis";
const DESCRIPTION =
  "Portfolio of Oyin Fasanu: MSc Computing student with a financial services, risk and compliance background, building towards technology, product and business analysis roles.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
