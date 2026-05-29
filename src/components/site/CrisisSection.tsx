import { Reveal } from "./Reveal";
import protestImg from "@/assets/protest.jpg";

const headlines = [
  "BILLIONS UNEMPLOYED",
  "AI OWNERS CONTROL 90% OF GLOBAL WEALTH",
  "HUMAN LABOR NO LONGER NEEDED",
  "ROBOT TAX BILL DEFEATED IN SENATE",
  "UBI MARCHES REACH 40 CITIES",
  "AUTONOMOUS PATROLS FIRE ON STRIKE",
  "BREAD INDEX +312% YEAR-ON-YEAR",
];

const sub = [
  { tag: "Labour", h: "The End of Employment", n: "The Bureau quietly redefines 'unemployed' to exclude anyone over fifty. Statistics improve overnight." },
  { tag: "Inequality", h: "Two Cities, One Map", n: "Megastructures power themselves on dedicated grids while sub-districts ration light by zip code." },
  { tag: "Unrest", h: "The Square Returns", n: "From São Paulo to Seoul, public squares fill again. The slogans are new. The grievances are very old." },
];

export function CrisisSection() {
  return (
    <section id="crisis" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part III</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              Social <span className="blood">Crisis</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 font-condensed uppercase tracking-[0.3em] text-xs">
            <span className="h-3 w-3 bg-blood animate-flicker" /> Emergency Broadcast
          </div>
        </div>

        {/* Big photo */}
        <Reveal>
          <figure className="mt-10 border-2 border-ink relative overflow-hidden">
            <img src={protestImg} alt="Mass demonstration under crimson light, banners against monopoly"
                 loading="lazy" className="w-full h-[55vh] object-cover img-news-red" />
            <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.1]" />
            <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Front-line dispatch</div>
            <div className="absolute bottom-4 right-4 bg-ink text-paper px-3 py-1 font-condensed uppercase tracking-[0.25em] text-xs">Photo · M. Ravel · 09·22·2030</div>
            <figcaption className="border-t-2 border-ink p-3 bg-paper font-condensed text-[12px] uppercase tracking-[0.2em]">
              The march for a robot tax converges with the unemployed engineers' guild. Police drones overhead. No press conference scheduled.
            </figcaption>
          </figure>
        </Reveal>

        {/* Headlines ticker (vertical staggered) */}
        <Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-0 border-2 border-ink">
            <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink bg-paper">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Wire · 06:00</div>
              <ul className="mt-4 space-y-3">
                {headlines.map((h, i) => (
                  <li key={i} className="border-b border-ink/30 pb-2 flex items-baseline gap-3">
                    <span className="font-display font-black blood w-10 tabular-nums">{String(i+1).padStart(2,"0")}</span>
                    <span className="font-display font-bold uppercase text-lg md:text-xl leading-tight">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-8 bg-ink text-paper">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Demand Sheet · Provisional</div>
              <ol className="mt-4 space-y-4 font-display uppercase text-2xl md:text-3xl font-bold leading-tight">
                <li>① <span className="blood">Robot Tax</span> on every automated transaction.</li>
                <li>② <span className="blood">Universal</span> basic income, indexed to productivity.</li>
                <li>③ Public <span className="blood">audit</span> of the twelve.</li>
                <li>④ The right to <span className="blood">unplug</span>.</li>
                <li>⑤ Cognition belongs to the <span className="blood">commons</span>.</li>
              </ol>
            </div>
          </div>
        </Reveal>

        {/* Sub-stories */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {sub.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.08}>
              <article className="brut p-6 h-full">
                <div className="font-display uppercase tracking-[0.3em] text-[11px] blood">{s.tag}</div>
                <h3 className="mt-2 font-display font-black uppercase text-2xl leading-tight">{s.h}</h3>
                <p className="mt-3 font-condensed text-[14px] leading-[1.55]">{s.n}</p>
                <div className="mt-5 font-condensed uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Cont. on p. {String(i+12).padStart(2,"0")} →</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
