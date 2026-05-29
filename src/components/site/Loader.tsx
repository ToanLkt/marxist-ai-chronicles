import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 14 + 4;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 350); }
      setPct(Math.floor(p));
    }, 110);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary text-glow mb-6">
            Initializing Protocol
          </div>
          <div className="text-6xl md:text-8xl font-display font-light tabular-nums text-glow-white">
            {String(pct).padStart(3, "0")}
            <span className="text-primary">%</span>
          </div>
          <div className="mt-8 h-px w-72 bg-border overflow-hidden">
            <div className="h-full bg-primary shadow-neon" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            AI Revolution // 2030
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
