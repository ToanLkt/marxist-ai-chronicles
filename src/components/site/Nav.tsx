import { useEffect, useState } from "react";

const links = [
  { href: "#world", label: "2030" },
  { href: "#force", label: "Force" },
  { href: "#contradiction", label: "Contradiction" },
  { href: "#futures", label: "Futures" },
  { href: "#titans", label: "Titans" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3 glass-strong" : "py-6"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary shadow-neon animate-pulse-glow" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-glow-white">AI/2030</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#end" className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent text-glow-crimson hidden sm:inline">
          Manifesto →
        </a>
      </div>
    </header>
  );
}
