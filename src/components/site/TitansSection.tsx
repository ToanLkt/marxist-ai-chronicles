import { Reveal } from "./Reveal";
import wallImg from "@/assets/wall.jpg";

export function TitansSection() {
  return (
    <section id="yeager" className="relative bg-paper paper-grain border-b-4 border-ink overflow-hidden">
      {/* Cover image strip */}
      <div className="relative border-b-2 border-ink">
        <img src={wallImg} alt="A lone silhouette before a colossal wall under a red sky"
             loading="lazy" className="w-full h-[68vh] object-cover img-news-red" />
        <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
        <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Philosophical Supplement</div>
        <div className="absolute bottom-6 left-0 right-0 mx-auto max-w-[1400px] px-5">
          <div className="font-display uppercase tracking-[0.4em] text-xs blood">Part VI</div>
          <h2 className="mt-2 font-display font-black uppercase leading-[0.82] text-paper"
              style={{ fontSize: "clamp(2.5rem,9vw,8rem)", textShadow: "4px 4px 0 var(--ink)" }}>
            Eren Yeager <span className="blood">/</span> the desire for freedom
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal>
            <div className="space-y-5">
              <p className="drop-cap text-[15px] leading-[1.65]">
                He was a boy who saw the wall and understood, before anyone wished to admit it, that the wall was not the enemy — the world that needed the wall was. The Titans were power without an owner, terrible and dumb. They could not be reasoned with because they could not reason. The horror was not their strength. The horror was that strength of that magnitude could not exist without rearranging the people beneath it.
              </p>
              <p className="text-[15px] leading-[1.65]">
                AI is the Titan power of our century — except this one <span className="font-bold">has owners</span>. It has shareholders. It has a roadmap. It is rented to you by the hour and to the police by the minute. The question Eren asked, screaming at the sky, is the only one worth asking in 2030: <span className="blood font-bold uppercase">whose freedom are these walls protecting?</span>
              </p>
              <p className="text-[15px] leading-[1.65]">
                Freedom, he understood, is not given. It is taken — by those who refuse the walls and accept the cost of refusal. There is no permission slip for the future. There is only the wall, and what we decide it is for.
              </p>
              <aside className="border-l-4 border-blood pl-5 py-2 font-display text-2xl md:text-3xl uppercase leading-tight font-bold">
                "The problem was never the power itself. <span className="blood">The problem was the world that controlled it.</span>"
              </aside>
            </div>
          </Reveal>

          <div className="space-y-5">
            {[
              { q: "If we lose, we die. If we win, we live. Unless we fight, we cannot win.", a: "Eren Yeager" },
              { q: "This world is cruel — and very beautiful.", a: "Mikasa Ackerman" },
              { q: "Who owns the means of cognition owns the future of the species.", a: "Manifesto Fragment · 2030" },
              { q: "Walls do not protect us from the future. They only decide who stands inside.", a: "Anonymous" },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <blockquote className="brut p-6 relative">
                  <div className="font-display uppercase tracking-[0.3em] text-[11px] blood">Fragment · {String(i + 1).padStart(2, "0")}</div>
                  <p className="mt-3 font-display text-xl md:text-2xl uppercase font-bold leading-[1.1]">"{q.q}"</p>
                  <div className="mt-3 font-condensed uppercase tracking-[0.3em] text-[12px] text-muted-foreground">— {q.a}</div>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing symbolism row */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-0 border-2 border-ink">
            {[
              { t: "Walls", n: "The structure that defines who is free." },
              { t: "Birds", n: "What freedom looks like to those denied it." },
              { t: "Ocean", n: "The world beyond what we were told was the world." },
              { t: "Cycles", n: "Hatred reproduced, generation by generation." },
            ].map((m, i) => (
              <div key={m.t} className={`p-6 ${i !== 3 ? "md:border-r-2 border-ink" : ""} ${i < 2 ? "border-b-2 md:border-b-0 border-ink" : ""} bg-paper`}>
                <div className="font-display font-black uppercase text-4xl leading-none">{m.t}</div>
                <p className="mt-2 font-condensed text-[13.5px] leading-[1.5]">{m.n}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
