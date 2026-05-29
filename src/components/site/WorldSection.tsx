import { Reveal } from "./Reveal";
import factoryImg from "@/assets/factory.jpg";

const replaced = [
  { role: "Lawyers", value: 78, note: "Contracts auto-drafted by language-model swarms." },
  { role: "Programmers", value: 84, note: "Codebases maintained by autonomous agents." },
  { role: "Doctors", value: 64, note: "Diagnosis delegated to multi-modal models." },
  { role: "Artists", value: 71, note: "Long-form generated in milliseconds, sold by the second." },
  { role: "Analysts", value: 92, note: "Inference replaces reports; reports replace humans." },
  { role: "Drivers", value: 88, note: "Logistics fully delegated to fleets without drivers." },
];

const stats = [
  { k: "90%", v: "Global wealth controlled by AI-owning corporations" },
  { k: "≈ 0", v: "Marginal cost of intellectual production" },
  { k: "2.4 B", v: "Cognitive jobs automated by 2030" },
  { k: "12×", v: "Productivity gain over 2020 baseline" },
];

export function WorldSection() {
  return (
    <section id="world" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part I</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              The World of <span className="blood">2030</span>
            </h2>
          </div>
          <div className="hidden md:block font-condensed uppercase tracking-[0.3em] text-xs text-right max-w-xs">
            Field report from the new century of <span className="blood font-bold">automatic abundance</span> and manual hunger.
          </div>
        </div>

        {/* Three columns lead */}
        <Reveal>
          <div className="mt-10 grid md:grid-cols-3 col-rule gap-8">
            <p className="drop-cap text-[14.5px] leading-[1.65]">
              The machine learned to think. First in laboratories, then in law firms. By the spring of 2027 it was writing the contracts that displaced its writers, and by the winter it was writing the eulogies. Intellectual labor — once the last refuge against automation — became the first to fall.
            </p>
            <p className="text-[14.5px] leading-[1.65]">
              Production decoupled from people. The factory needed no shifts. The office needed no light. Across the seaboard, megastructures hummed without windows because no one inside required a view. The cost of producing anything — a brief, a brick, a symphony — approached the cost of electricity, then dipped below it.
            </p>
            <p className="text-[14.5px] leading-[1.65]">
              And yet rent rose. Bread rose. The market for human attention was the only market still hiring. The wealth produced by the machines did not vanish — it concentrated, neatly, in the accounts of those who owned the models. Twelve corporations now own the means of cognition. Everyone else owns time they cannot sell.
            </p>
          </div>
        </Reveal>

        {/* Sector grid */}
        <Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-ink">
            {replaced.map((r, i) => (
              <div key={r.role} className={`p-6 border-ink ${i % 3 !== 2 ? "lg:border-r-2" : ""} ${i < replaced.length - (replaced.length % 3 || 3) ? "lg:border-b-2" : ""} border-b-2 ${i % 2 === 1 ? "sm:border-r-0" : "sm:border-r-2"} bg-paper relative overflow-hidden`}>
                <div className="absolute -right-3 -top-3 halftone-red opacity-10 w-24 h-24 rounded-full" />
                <div className="font-condensed text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Sector {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="font-display font-black tabular-nums leading-none text-6xl blood">{r.value}<span className="text-3xl ink">%</span></div>
                </div>
                <div className="mt-1 font-display font-bold uppercase text-2xl tracking-tight">{r.role}</div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-foreground/85">{r.note}</p>
                <div className="mt-4 h-2 border border-ink">
                  <div className="h-full bg-ink" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Big image + stats */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal>
            <figure className="border-2 border-ink relative">
              <img src={factoryImg} alt="Endless rows of robotic arms in an automated facility"
                   loading="lazy" width={1600} height={1024}
                   className="w-full h-[420px] object-cover img-news" />
              <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.07]" />
              <div className="absolute top-3 left-3 bg-ink text-paper px-2 py-1 font-display uppercase tracking-[0.3em] text-[11px]">Facility 07 · Fully Automated</div>
              <figcaption className="border-t-2 border-ink p-3 bg-paper font-condensed text-[12px] uppercase tracking-[0.2em]">
                Below — A production line that has not seen a worker in 1,184 days.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-2 border-ink">
              <div className="bg-ink text-paper px-4 py-2 font-display uppercase tracking-[0.3em] text-xs flex justify-between">
                <span>Indicators · 2030</span><span className="blood">Source: Bureau of New Statistics</span>
              </div>
              {stats.map((s, i) => (
                <div key={s.k} className={`flex items-baseline gap-5 px-5 py-4 ${i !== stats.length - 1 ? "border-b border-ink/30" : ""}`}>
                  <div className="font-display font-black tabular-nums text-5xl md:text-6xl leading-none w-40">{s.k}</div>
                  <div className="font-condensed uppercase tracking-[0.18em] text-[13px] text-foreground/85">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
