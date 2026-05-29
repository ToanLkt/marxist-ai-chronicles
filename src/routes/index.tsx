import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WorldSection } from "@/components/site/WorldSection";
import { ContradictionSection } from "@/components/site/ContradictionSection";
import { CrisisSection } from "@/components/site/CrisisSection";
import { RevolutionSection } from "@/components/site/RevolutionSection";
import { FuturesSection } from "@/components/site/FuturesSection";
import { TitansSection } from "@/components/site/TitansSection";
import { FinalSection } from "@/components/site/FinalSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI 2030 — When New Productive Forces Collide With Old Social Structures" },
      { name: "description", content: "A brutalist editorial broadsheet on AI, capitalism, class conflict, and the future of society in 2030." },
      { property: "og:title", content: "AI 2030 — The Press of the Revolution" },
      { property: "og:description", content: "Investigative editorial on AI, ownership, labor and revolution." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <main className="relative bg-paper text-foreground">
        <Nav />
        <Hero />
        <WorldSection />
        <ContradictionSection />
        <CrisisSection />
        <RevolutionSection />
        <FuturesSection />
        <TitansSection />
        <FinalSection />
      </main>
    </>
  );
}
