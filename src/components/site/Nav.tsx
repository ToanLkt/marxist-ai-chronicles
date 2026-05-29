import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const links = [
  { href: "#world", label: "I. 2030" },
  { href: "#contradiction", label: "II. Contradiction" },
  { href: "#crisis", label: "III. Crisis" },
  { href: "#revolution", label: "IV. Revolution" },
  { href: "#futures", label: "V. Futures" },
  { href: "#yeager", label: "VI. Yeager" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const today = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

  return (
    <header className={`fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-paper transition-shadow ${scrolled ? "shadow-[0_4px_0_0_var(--ink)]" : ""}`}>
      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-1 flex items-center justify-between font-condensed text-[11px] uppercase tracking-[0.25em]">
          <span>Vol. MMXXX · No. 01</span>
          <span className="hidden md:inline">{today}</span>
          <span className="blood font-bold">★ FREE PRESS ★</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-5 py-2 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display font-black text-2xl md:text-3xl leading-none tracking-tight">THE&nbsp;PRESS&nbsp;OF&nbsp;THE&nbsp;<span className="blood">REVOLUTION</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-5 font-condensed text-[12px] uppercase tracking-[0.18em] font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:blood transition-colors border-b-2 border-transparent hover:border-blood pb-0.5">{l.label}</a>
          ))}
        </nav>
        <a href="#end" className="hidden sm:inline-flex items-center gap-2 brut-red px-3 py-1.5 font-display text-[12px] tracking-[0.2em] uppercase">
          Read Manifesto →
        </a>
      </div>
      <motion.div className="progress-bar origin-left" style={{ scaleX: progress }} />
    </header>
  );
}
