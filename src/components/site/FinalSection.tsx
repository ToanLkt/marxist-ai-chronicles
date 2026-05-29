import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import skylineImg from "@/assets/skyline.jpg";
import { Reveal } from "./Reveal";

export function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="end" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={skylineImg} alt="Futuristic skyline at dawn through soft fog"
             loading="lazy" width={1920} height={1080}
             className="h-full w-full object-cover opacity-80" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-40 flex flex-col items-center text-center min-h-screen justify-center">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.5em] text-primary text-glow">
            · Final Frame ·
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <motion.h2
            className="mt-12 font-display font-extralight tracking-tight text-glow-white"
            style={{ fontSize: "clamp(1.875rem,5vw,4rem)", lineHeight: 1.1 }}
          >
            &ldquo;The future is not determined by{" "}
            <span className="italic text-primary text-glow">how powerful</span> AI becomes,
            but by <span className="italic text-accent text-glow-crimson">who owns it</span>{" "}
            and who benefits from it.&rdquo;
          </motion.h2>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-20 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
            <span className="h-px w-16 bg-border" />
            Soundtrack suggestion · Hans Zimmer — &ldquo;Time&rdquo;
            <span className="h-px w-16 bg-border" />
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <a href="#top" className="mt-16 group relative inline-flex items-center gap-3 glass-strong px-10 py-5 clip-corner border border-primary/40 shadow-neon hover:shadow-neon transition-all animate-pulse-glow">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-glow-white">Begin Again</span>
            <span className="text-primary group-hover:-translate-y-1 transition-transform">↑</span>
          </a>
        </Reveal>

        <div className="mt-32 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground/60">
          AI / 2030 — A cinematic essay through the lens of Marxism
        </div>
      </div>
    </section>
  );
}
