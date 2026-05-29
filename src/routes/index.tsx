import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WorldSection } from "@/components/site/WorldSection";
import { ForceSection } from "@/components/site/ForceSection";
import { ContradictionSection } from "@/components/site/ContradictionSection";
import { FuturesSection } from "@/components/site/FuturesSection";
import { TitansSection } from "@/components/site/TitansSection";
import { FinalSection } from "@/components/site/FinalSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Revolution 2030 — A Cinematic Essay through Marxism" },
      { name: "description", content: "When AI becomes the new productive force of humanity. A cinematic, philosophical essay on the AI Revolution of 2030." },
      { property: "og:title", content: "AI Revolution 2030" },
      { property: "og:description", content: "When AI becomes the new productive force of humanity." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <main className="relative bg-background text-foreground">
        <Nav />
        <Hero />
        <WorldSection />
        <ForceSection />
        <ContradictionSection />
        <FuturesSection />
        <TitansSection />
        <FinalSection />
      </main>
    </>
  );
}
