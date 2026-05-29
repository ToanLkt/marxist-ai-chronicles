import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import utopiaImg from "@/assets/utopia.jpg";
import dystopiaImg from "@/assets/dystopia.jpg";

const utopia = ["Universal Basic Income", "Creativity as profession", "Freedom from toil", "Human flourishing"];
const dystopia = ["Permanent surveillance", "Mass precarity", "Algorithmic violence", "Walled megacities"];

export function FuturesSection() {
  return (
    <section id="futures" className="relative py-32 md:py-48 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal><SectionLabel index="04" label="Two Possible Futures" /></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 max-w-4xl font-display font-extralight tracking-tight text-glow-white"
              style={{ fontSize: "clamp(2.25rem,6vw,5rem)", lineHeight: 0.95 }}>
            The same machine. <span className="italic">Two endings.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-6 md:gap-1 md:grid-cols-2">
          {/* Utopia */}
          <Reveal>
            <div className="group relative h-[640px] overflow-hidden clip-corner border border-primary/30">
              <img src={utopiaImg} alt="Bright sunlit atrium with humans painting and creating" loading="lazy"
                   width={1280} height={1600}
                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary text-glow">Branch A</div>
                <div className="mt-4 text-4xl md:text-5xl font-display font-light text-glow-white">Post-Labor Society</div>
                <ul className="mt-8 space-y-3">
                  {utopia.map((u) => (
                    <li key={u} className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-foreground/90">
                      <span className="h-px w-6 bg-primary shadow-neon" /> {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Dystopia */}
          <Reveal delay={0.15}>
            <div className="group relative h-[640px] overflow-hidden clip-corner border border-accent/30">
              <img src={dystopiaImg} alt="Collapsed neon-soaked dystopian megacity in rain" loading="lazy"
                   width={1280} height={1600}
                   className="absolute inset-0 h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
              <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-accent text-glow-crimson">Branch B</div>
                <div className="mt-4 text-4xl md:text-5xl font-display font-light text-glow-white">Social Collapse</div>
                <ul className="mt-8 space-y-3">
                  {dystopia.map((u) => (
                    <li key={u} className="flex items-center gap-3 text-sm font-mono uppercase tracking-[0.2em] text-foreground/90">
                      <span className="h-px w-6 bg-accent shadow-crimson" /> {u}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 mx-auto max-w-3xl text-center text-muted-foreground text-lg leading-relaxed">
            The technology is neutral. The <span className="text-foreground">ownership</span> is not.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
