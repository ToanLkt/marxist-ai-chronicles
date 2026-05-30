import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    let p = 0;
    const id = setInterval(() => {
      p += Math.random() * 18 + 6;
      if (p >= 100) { p = 100; clearInterval(id); setTimeout(() => setDone(true), 280); }
      setPct(Math.floor(p));
    }, 90);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper paper-grain"
        >
          <div className="font-display text-xs uppercase tracking-[0.6em] blood mb-4">
            Lên Khuôn · Ấn Bản 2030
          </div>
          <div className="font-display text-7xl md:text-9xl font-black tabular-nums leading-none">
            {String(pct).padStart(3, "0")}<span className="blood">%</span>
          </div>
          <div className="mt-6 h-[6px] w-80 max-w-[80vw] border-2 border-ink bg-paper">
            <div className="h-full bg-ink" style={{ width: `${pct}%` }} />
          </div>
          <div className="mt-6 font-condensed text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
            Đang xếp chữ bản tuyên ngôn…
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
