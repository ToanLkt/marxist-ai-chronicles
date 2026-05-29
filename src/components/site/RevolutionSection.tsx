import { Reveal } from "./Reveal";
import wallImg from "@/assets/wall.jpg";

export function RevolutionSection() {
  return (
    <section id="revolution" className="relative bg-ink text-paper border-b-4 border-ink overflow-hidden">
      <div className="absolute inset-0 halftone-red opacity-[0.06] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24 relative">
        <div className="flex items-end justify-between border-b-2 border-paper pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part IV</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              <span className="blood">Revolution</span> / Breaking Point
            </h2>
          </div>
          <span className="hidden md:inline font-condensed uppercase tracking-[0.3em] text-xs blood animate-flicker">● PROPAGANDA SECTION ●</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <Reveal>
            <figure className="border-2 border-paper relative overflow-hidden">
              <img src={wallImg} alt="A colossal wall under crimson sky — the system that contains us"
                   loading="lazy" className="w-full h-[60vh] object-cover img-news-red" />
              <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.12]" />
              <div className="absolute top-3 left-3 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Poster · The Wall</div>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="font-display text-3xl md:text-4xl uppercase leading-[1.05] font-bold">
                AI could <span className="blood">liberate</span> the species.<br/>
                Under the old <span className="blood">ownership</span>, it merely oppresses it.
              </p>
              <p className="font-condensed text-[15px] leading-[1.65] text-paper/85 max-w-prose">
                When the productive forces outgrow their containers, the containers crack. We have seen this before — in the looms of Lancashire, in the printing presses of the Reformation, in every century that confused a tool for a master. The question of 2030 is not whether the contradiction breaks, but who is standing when it does.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 font-display uppercase text-lg">
                {["Burn the rented future.", "Audit the algorithm.", "Reclaim the model.", "Refuse the wall."].map((s, i) => (
                  <li key={i} className="border-2 border-paper px-4 py-3 hover:bg-blood hover:border-blood transition-colors">{s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Slogans bar */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-0 border-2 border-paper">
            {[
              { n: "01", t: "Collapsing walls" },
              { n: "02", t: "Broken systems" },
              { n: "03", t: "Burning newspapers" },
            ].map((m, i) => (
              <div key={m.n} className={`p-7 ${i !== 2 ? "md:border-r-2 border-paper" : ""} bg-ink text-paper`}>
                <div className="font-display font-black blood text-7xl leading-none">{m.n}</div>
                <div className="mt-3 font-display uppercase text-2xl font-bold">{m.t}</div>
                <div className="mt-2 h-1 w-12 bg-blood" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
