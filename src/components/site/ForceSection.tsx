import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const compare = [
  {
    era: "Industrial Revolution",
    year: "1760 — 1840",
    force: "Steam · Coal · Iron",
    multiplier: "10×",
    note: "Human hands amplified by machines.",
    accent: "muted",
  },
  {
    era: "AI Revolution",
    year: "2020 — 2030",
    force: "Compute · Data · Models",
    multiplier: "1000×",
    note: "Human minds replaced by machines.",
    accent: "neon",
  },
];

export function ForceSection() {
  return (
    <section id="force" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal><SectionLabel index="02" label="A New Productive Force" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display font-extralight tracking-tight"
              style={{ fontSize: "clamp(2.25rem,6vw,5rem)", lineHeight: 0.95 }}>
            <span className="text-glow-white">Marx wrote of</span>{" "}
            <span className="italic text-primary text-glow">productive forces</span>.
            <br />He could not have imagined this one.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            For two centuries, productive forces multiplied muscle. AI is the first force in
            history that multiplies <span className="text-foreground">cognition</span> itself —
            collapsing the cost of thought toward zero.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {compare.map((c, i) => (
            <Reveal key={c.era} delay={i * 0.15}>
              <div className={`relative h-full p-10 clip-corner border ${
                c.accent === "neon"
                  ? "border-primary/40 glass-strong shadow-neon"
                  : "border-border glass"
              }`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">{c.year}</div>
                <div className={`mt-4 text-3xl md:text-4xl font-display ${c.accent === "neon" ? "text-glow-white" : ""}`}>
                  {c.era}
                </div>
                <div className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">Productive Force</div>
                <div className="mt-2 text-xl">{c.force}</div>
                <div className="mt-8 flex items-end gap-4">
                  <div className={`text-7xl md:text-8xl font-light tabular-nums ${
                    c.accent === "neon" ? "text-primary text-glow" : "text-muted-foreground"
                  }`}>{c.multiplier}</div>
                  <div className="pb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">productivity gain</div>
                </div>
                <p className="mt-8 text-sm text-muted-foreground leading-relaxed border-t border-border pt-6">{c.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Floating hologram diagram */}
        <Reveal delay={0.2}>
          <div className="mt-24 relative glass clip-corner p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-30 animate-drift" />
            <div className="relative grid gap-8 md:grid-cols-3 text-center">
              {["Labor", "Capital", "Cognition"].map((n, i) => (
                <div key={n} className="flex flex-col items-center">
                  <div className={`h-24 w-24 rounded-full border ${i === 2 ? "border-primary shadow-neon animate-pulse-glow" : "border-border"} flex items-center justify-center`}>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={`mt-6 text-2xl font-display ${i === 2 ? "text-primary text-glow" : ""}`}>{n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {i === 0 ? "displaced" : i === 1 ? "concentrated" : "synthesized"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
