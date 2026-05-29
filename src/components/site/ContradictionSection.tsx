import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import protestImg from "@/assets/protest.jpg";

export function ContradictionSection() {
  return (
    <section id="contradiction" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal><SectionLabel index="03" label="Contradiction" accent="red" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-5xl font-display font-extralight tracking-tight"
              style={{ fontSize: "clamp(2.25rem,6vw,5rem)", lineHeight: 0.95 }}>
            <span className="text-glow-white">Old relations</span>
            <br />
            <span className="italic text-accent text-glow-crimson">of production</span>
            <span className="text-muted-foreground"> vs. </span>
            <span className="text-primary text-glow">new forces</span>.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="relative h-full overflow-hidden clip-corner border border-accent/30">
              <img src={protestImg} alt="Crowd of protesters under crimson light with surveillance drones" loading="lazy"
                   width={1600} height={1024}
                   className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-accent animate-flicker">
                <span className="h-2 w-2 bg-accent rounded-full shadow-crimson" /> LIVE · SECTOR 12
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.3em] text-accent text-glow-crimson">Unrest Index</div>
                <div className="mt-2 text-5xl md:text-6xl font-light tabular-nums text-glow-white">94.7</div>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { t: "Concentration", n: "Twelve corporations own the models that run civilization." },
              { t: "Displacement", n: "Billions of workers — surplus to a system that no longer needs them." },
              { t: "Surveillance", n: "Every gesture priced. Every thought predicted." },
              { t: "Revolt", n: "Streets burning under the gaze of autonomous patrols." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.1}>
                <div className="group glass clip-corner p-6 flex gap-6 hover:border-accent/40 transition-all">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent text-glow-crimson pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-2xl font-display">{item.t}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.n}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mt-24 mx-auto max-w-4xl text-center font-display font-extralight italic text-glow-white"
                      style={{ fontSize: "clamp(1.5rem,3.5vw,2.5rem)", lineHeight: 1.2 }}>
            &ldquo;At a certain stage of development, the material productive forces come
            into conflict with the existing relations of production…&rdquo;
            <span className="block mt-6 font-mono text-[11px] not-italic uppercase tracking-[0.4em] text-muted-foreground">
              — Marx, 1859
            </span>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
