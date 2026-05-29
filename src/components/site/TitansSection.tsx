import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import wallImg from "@/assets/wall.jpg";

export function TitansSection() {
  return (
    <section id="titans" className="relative overflow-hidden">
      <div className="relative h-[90vh] min-h-[640px] w-full">
        <img src={wallImg} alt="A lone figure standing before a colossal wall under a crimson sky"
             loading="lazy" width={1920} height={1080}
             className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-background" />
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="relative h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24">
          <Reveal><SectionLabel index="05" label="The Wall Metaphor" accent="red" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 max-w-4xl font-display font-extralight tracking-tight text-glow-white"
                style={{ fontSize: "clamp(2.25rem,7vw,6rem)", lineHeight: 0.9 }}>
              We built the wall <br/>
              <span className="italic text-accent text-glow-crimson">to keep us safe.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="relative py-32 md:py-40">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[1fr_1.2fr] items-start">
          <Reveal>
            <div className="space-y-8 font-display text-2xl md:text-3xl font-extralight leading-snug">
              <p className="text-glow-white">
                The Titans were power without an owner.
              </p>
              <p className="text-muted-foreground">
                AI is power that <span className="text-primary text-glow">has one</span>.
              </p>
              <p className="text-glow-white">
                Walls don&apos;t protect us from the future. They only decide
                <span className="italic text-accent text-glow-crimson"> who is inside</span>.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { q: "If we lose, we die. If we win, we live. Unless we fight, we cannot win.", a: "Eren Yeager" },
              { q: "Freedom is not given. It is taken — by those who refuse the walls.", a: "Anonymous, 2030" },
              { q: "Who owns the means of cognition owns the future of the species.", a: "Manifesto Fragment" },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <blockquote className="glass clip-corner p-8 relative">
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.3em] text-accent text-glow-crimson">
                    Fragment · {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-6 text-lg md:text-xl font-display italic font-light leading-relaxed">
                    &ldquo;{q.q}&rdquo;
                  </p>
                  <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    — {q.a}
                  </div>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
