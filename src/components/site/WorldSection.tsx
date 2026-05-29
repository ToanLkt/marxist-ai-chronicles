import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import factoryImg from "@/assets/factory.jpg";

const replaced = [
  { role: "Lawyers", value: "78%", note: "Contracts auto-drafted by LLM swarms" },
  { role: "Programmers", value: "84%", note: "Codebases self-maintained by agents" },
  { role: "Writers", value: "71%", note: "Long-form generated in milliseconds" },
  { role: "Analysts", value: "92%", note: "Real-time inference replaces reports" },
];

const stats = [
  { k: "90%", v: "of global wealth controlled by AI corporations" },
  { k: "≈0", v: "marginal cost of production" },
  { k: "2.4B", v: "intellectual jobs automated by 2030" },
  { k: "12x", v: "productivity vs. 2020 baseline" },
];

export function WorldSection() {
  return (
    <section id="world" className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionLabel index="01" label="The World of 2030" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display font-extralight tracking-tight text-glow-white"
              style={{ fontSize: "clamp(2.25rem,6vw,5rem)", lineHeight: 0.95 }}>
            Intellectual labor — <span className="italic text-primary text-glow">obsolete</span>.
            <br />The machine learned to think.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {replaced.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.08}>
              <div className="group relative h-full glass clip-corner p-6 transition-all hover:shadow-neon hover:-translate-y-1">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Sector {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 text-4xl font-light text-primary text-glow">{r.value}</div>
                <div className="mt-2 text-xl font-display">{r.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.note}</p>
                <div className="mt-6 h-px w-full bg-border overflow-hidden">
                  <div className="h-full bg-primary shadow-neon transition-all duration-700 origin-left"
                       style={{ width: r.value }} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <Reveal>
            <div className="relative overflow-hidden clip-corner border border-border">
              <img src={factoryImg} alt="Endless rows of robotic arms in an automated factory" loading="lazy"
                   width={1600} height={1024}
                   className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary text-glow">
                FACILITY 07 // FULLY AUTOMATED
              </div>
            </div>
          </Reveal>
          <div className="space-y-6">
            {stats.map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1}>
                <div className="flex items-baseline gap-6 border-b border-border pb-6">
                  <div className="text-5xl md:text-6xl font-light text-glow-white tabular-nums">{s.k}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{s.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
