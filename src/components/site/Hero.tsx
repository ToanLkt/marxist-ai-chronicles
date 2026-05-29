import { motion } from "motion/react";
import heroImg from "@/assets/hero-city.jpg";
import { Particles } from "./Particles";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden noise scanlines">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Futuristic AI megacity with giant glowing servers and holograms" width={1920} height={1080}
             className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>
      <Particles density={90} />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.5em] text-primary text-glow"
        >
          <span className="h-px w-12 bg-primary" />
          A Cinematic Essay // Year 2030
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-8 font-display font-extralight leading-[0.88] tracking-tight text-glow-white"
          style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
        >
          AI <span className="italic font-light text-primary text-glow">Revolution</span>
          <br />
          <span className="text-accent text-glow-crimson">2030</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          When artificial intelligence becomes the new productive force of humanity —
          and the old world struggles to contain it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a href="#contradiction"
             className="group relative inline-flex items-center gap-3 bg-primary px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground clip-corner shadow-neon transition-all hover:shadow-neon hover:-translate-y-0.5">
            <span className="h-1.5 w-1.5 bg-primary-foreground" />
            Explore the Crisis
          </a>
          <a href="#futures"
             className="group relative inline-flex items-center gap-3 glass px-8 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground clip-corner border border-border hover:border-primary hover:text-primary transition-all">
            The Future of Society
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-float">
        Scroll ↓
      </div>
    </section>
  );
}
