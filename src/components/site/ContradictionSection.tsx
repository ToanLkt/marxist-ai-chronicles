import { Reveal } from "./Reveal";
import factoryImg from "@/assets/factory.jpg";
import dystopiaImg from "@/assets/dystopia.jpg";

export function ContradictionSection() {
  return (
    <section id="contradiction" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part II</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              The <span className="blood">Contradiction</span>
            </h2>
          </div>
          <span className="stamp animate-flicker hidden md:inline-block">Editorial</span>
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl font-display text-2xl md:text-3xl uppercase leading-[1.1] font-light">
            New productive forces <span className="blood font-bold">colliding</span> with old relations of production.
          </p>
        </Reveal>

        {/* Split screen */}
        <div className="mt-12 grid md:grid-cols-2 border-2 border-ink">
          <Reveal>
            <div className="relative bg-paper p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink">
              <div className="font-display uppercase tracking-[0.3em] text-xs">Side A · Below</div>
              <h3 className="mt-2 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Workers losing <span className="blood">everything</span>
              </h3>
              <figure className="mt-5 border-2 border-ink overflow-hidden">
                <img src={factoryImg} alt="Empty assembly hall after the last shift"
                     loading="lazy" className="w-full h-56 object-cover img-news-red" />
              </figure>
              <ul className="mt-5 space-y-3 font-condensed text-[14px]">
                {[
                  "Collapse of the middle class — engineers queue at food banks.",
                  "Universal eviction notices issued algorithmically at 03:00.",
                  "Skill is no longer a contract — it is a memory.",
                  "Children study trades that will not exist by graduation.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3"><span className="blood font-bold">▼</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative bg-ink text-paper p-6 md:p-8">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Side B · Above</div>
              <h3 className="mt-2 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Ultra-rich AI <span className="blood">corporations</span>
              </h3>
              <figure className="mt-5 border-2 border-paper overflow-hidden">
                <img src={dystopiaImg} alt="Luxury data-monopoly skyline at dusk"
                     loading="lazy" className="w-full h-56 object-cover img-news" />
              </figure>
              <ul className="mt-5 space-y-3 font-condensed text-[14px]">
                {[
                  "Data monopolies priced by the gigabyte of human attention.",
                  "Luxury towers cooled by oceans you cannot fish in.",
                  "Boards that meet quarterly to decide what citizenship means.",
                  "Private armies of inference. Public hunger of the displaced.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3"><span className="blood font-bold">▲</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Marx monument quote */}
        <Reveal>
          <figure className="mt-16 border-t-4 border-b-4 border-ink py-10 md:py-14 relative">
            <div className="absolute inset-0 halftone-red opacity-[0.04] pointer-events-none" />
            <div className="font-display uppercase tracking-[0.4em] text-xs blood text-center">From the Archives · 1859</div>
            <blockquote className="mt-6 font-display font-black uppercase text-center leading-[0.95] tracking-tight"
                        style={{ fontSize: "clamp(1.6rem,5.5vw,4.5rem)" }}>
              "At a certain stage of development, the relations of production become
              <span className="blood"> chains </span>
              upon the productive forces."
            </blockquote>
            <figcaption className="mt-8 text-center font-condensed uppercase tracking-[0.4em] text-sm">
              — Karl Marx · A Contribution to the Critique of Political Economy
            </figcaption>
          </figure>
        </Reveal>

        {/* Metaphor row */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-0 border-2 border-ink">
            {[
              { t: "Chains", n: "Old contracts strapped to new machines." },
              { t: "Cages", n: "Walled platforms that bill you for breathing." },
              { t: "Walls", n: "Citizenship redrawn around the server farms." },
            ].map((m, i) => (
              <div key={m.t} className={`p-7 ${i !== 2 ? "md:border-r-2 border-ink" : ""} ${i !== 2 ? "border-b-2 md:border-b-0 border-ink" : ""} bg-paper`}>
                <div className="font-display font-black uppercase text-6xl leading-none">{m.t}</div>
                <p className="mt-3 font-condensed text-[14px] leading-[1.5]">{m.n}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
