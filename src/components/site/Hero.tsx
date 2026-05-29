import { motion } from "motion/react";
import heroImg from "@/assets/hero-city.jpg";

export function Hero() {
  return (
    <section id="top" className="relative bg-paper paper-grain border-b-4 border-ink pt-24">
      {/* Top status strip */}
      <div className="border-y-2 border-ink bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-1.5 flex items-center justify-between font-condensed text-[11px] uppercase tracking-[0.3em]">
          <span>Special Edition · Investigative Report</span>
          <span className="hidden md:inline">Filed from Sector 12 · 04:17</span>
          <span className="blood font-bold animate-flicker">● LIVE</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-10 md:py-14">
        {/* Section line */}
        <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6 font-display text-xs uppercase tracking-[0.4em]">
          <span>Front Page · Cover Story</span>
          <span className="blood">Dossier 01 / VI</span>
        </div>

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
        >
          <span className="glitch" data-text="AI 2030">AI 2030</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-4 font-display font-light uppercase border-y-2 border-ink py-4 leading-[1.05]"
          style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.1rem)" }}
        >
          When productive forces become <span className="blood font-bold italic">stronger</span> than the society containing them.
        </motion.h2>

        {/* GRID: image + columns */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.figure
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative border-2 border-ink overflow-hidden">
              <img src={heroImg} alt="Towering surveillance skyline of the AI megacity, 2030"
                   width={1920} height={1080}
                   className="w-full h-[44vh] md:h-[58vh] object-cover img-news" />
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply halftone opacity-[0.06]" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--ink)_140%)] opacity-40" />
              <div className="absolute top-3 left-3 brut-red px-2 py-1 font-display text-[11px] uppercase tracking-[0.3em]">Classified · Recovered Footage</div>
              <div className="absolute bottom-3 right-3 bg-ink text-paper px-2 py-1 font-condensed text-[10px] uppercase tracking-[0.3em]">Photo · Anonymous · 03·11·2030</div>
            </div>
            <figcaption className="mt-2 font-condensed text-[12px] uppercase tracking-[0.18em] text-muted-foreground border-b border-ink pb-2">
              Above — The financial citadel of Neo-District 7, where twelve corporations are said to own the models that run civilization.
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }}
            className="space-y-5"
          >
            <div className="border-b-2 border-ink pb-2 font-display uppercase tracking-[0.3em] text-xs">By / The Editorial Board</div>
            <p className="drop-cap text-[15px] leading-[1.6]">
              In the year of our automation, two thousand and thirty, the machines did not rise. They were owned. Every gesture, every contract, every diagnosis, every line of code — produced at near-zero marginal cost by systems that no longer require us. And yet the bread is more expensive than ever.
            </p>
            <p className="text-[15px] leading-[1.6]">
              This special edition is filed against the storm. It is a record of what was sold to us as progress, and a question that the next decade will answer with either bread or fire: <span className="font-bold uppercase">who owns the means of cognition?</span>
            </p>

            <aside className="brut p-5">
              <div className="font-display uppercase tracking-[0.25em] text-[11px] blood mb-2">Editor's Pull-Quote</div>
              <p className="font-display text-2xl md:text-3xl font-bold leading-[1.05] uppercase">
                "The problem is not how powerful AI becomes. <span className="blood">The problem is who owns it.</span>"
              </p>
            </aside>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#world" className="brut-red px-5 py-3 font-display uppercase tracking-[0.25em] text-sm">Read the Dossier →</a>
              <a href="#yeager" className="brut px-5 py-3 font-display uppercase tracking-[0.25em] text-sm">VI. The Yeager Question</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-y-2 border-ink bg-ink text-paper overflow-hidden marquee-mask">
        <div className="flex whitespace-nowrap animate-ticker font-display uppercase tracking-[0.3em] text-sm py-2">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0">
              {[
                "BILLIONS UNEMPLOYED",
                "AI OWNERS CONTROL 90% OF GLOBAL WEALTH",
                "HUMAN LABOR NO LONGER NEEDED",
                "ROBOT TAX DEMANDS GROW",
                "MARGINAL COST OF PRODUCTION APPROACHES ZERO",
                "TWELVE CORPORATIONS · ONE PLANET",
                "BREAD RIOTS IN SECTOR 12",
              ].map((t, i) => (
                <span key={i} className="px-8 flex items-center gap-8">
                  <span className="blood">◆</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
