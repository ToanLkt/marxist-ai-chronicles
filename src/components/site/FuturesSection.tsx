import { Reveal } from "./Reveal";
import utopiaImg from "@/assets/utopia.jpg";
import dystopiaImg from "@/assets/dystopia.jpg";

const branchA = [
  "AI held in common.",
  "Universal basic income.",
  "Four-hour working week.",
  "Art, science, education as profession.",
  "The end of obligatory toil.",
];

const branchB = [
  "AI monopoly entrenched.",
  "Permanent mass unemployment.",
  "Algorithmic policing.",
  "Class war, then class extermination.",
  "Surveillance as civic religion.",
];

export function FuturesSection() {
  return (
    <section id="futures" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part V</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              Two Possible <span className="blood">Futures</span>
            </h2>
          </div>
          <div className="hidden md:block font-condensed uppercase tracking-[0.3em] text-xs">The same machine. Two endings.</div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-0 border-2 border-ink">
          {/* Utopia */}
          <Reveal>
            <article className="relative border-b-2 md:border-b-0 md:border-r-2 border-ink bg-paper p-6 md:p-8">
              <header className="flex items-center justify-between border-b-2 border-ink pb-2">
                <span className="font-display uppercase tracking-[0.3em] text-xs">Possibility I</span>
                <span className="font-condensed text-xs uppercase tracking-[0.3em]">Branch A</span>
              </header>
              <h3 className="mt-4 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Post-Labor <span className="blood">Society</span>
              </h3>
              <figure className="mt-5 border-2 border-ink overflow-hidden">
                <img src={utopiaImg} alt="Sunlit atrium where people read, paint, and teach"
                     loading="lazy" className="w-full h-64 object-cover img-news" />
              </figure>
              <ul className="mt-5 space-y-2.5 font-condensed text-[14px]">
                {branchA.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-ink/30 pb-2"><span className="font-display font-black">+</span><span>{t}</span></li>
                ))}
              </ul>
              <p className="mt-5 font-condensed text-[14px] leading-[1.55] italic">
                Calm, futuristic, intellectually free. Work becomes choice. Beauty becomes a public utility.
              </p>
            </article>
          </Reveal>

          {/* Dystopia */}
          <Reveal delay={0.1}>
            <article className="relative bg-ink text-paper p-6 md:p-8 scanlines-paper">
              <header className="flex items-center justify-between border-b-2 border-paper pb-2">
                <span className="font-display uppercase tracking-[0.3em] text-xs blood">Possibility II</span>
                <span className="font-condensed text-xs uppercase tracking-[0.3em]">Branch B</span>
              </header>
              <h3 className="mt-4 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Social <span className="blood">Collapse</span>
              </h3>
              <figure className="mt-5 border-2 border-paper overflow-hidden">
                <img src={dystopiaImg} alt="Neon-soaked collapsed megacity in the rain"
                     loading="lazy" className="w-full h-64 object-cover img-news-red" />
              </figure>
              <ul className="mt-5 space-y-2.5 font-condensed text-[14px] text-paper/90">
                {branchB.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-paper/30 pb-2"><span className="font-display font-black blood">×</span><span>{t}</span></li>
                ))}
              </ul>
              <p className="mt-5 font-condensed text-[14px] leading-[1.55] italic blood">
                ⚠ Emergency UI active. Civic functions suspended. Compliance is a virtue.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 mx-auto max-w-3xl text-center font-display uppercase text-xl md:text-2xl leading-tight">
            The technology is <span className="blood">neutral</span>. The ownership is not.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
