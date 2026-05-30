import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const links = [
  { href: "#world", label: "I. Sơ Lượt" },
  { href: "#contradiction", label: "II. Mâu Thuẫn" },
  { href: "#crisis", label: "III. Nguyên Nhân" },
  { href: "#revolution", label: "IV. Cách Mạng" },
  { href: "#futures", label: "V. Dự Báo" },
  { href: "#yeager", label: "VI. Kết Luận" },
];

export function Nav() {
  const headerRef = useRef<HTMLElement>(null);
  const sectionOffsetsRef = useRef<number[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const progressRaw = useMotionValue(0);
  const progress = useSpring(progressRaw, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", ""));
    const updateOffsets = () => {
      sectionOffsetsRef.current = ids
        .map((id) => document.getElementById(id))
        .filter(Boolean)
        .map((el) => (el as HTMLElement).offsetTop);
    };

    updateOffsets();
    window.addEventListener("resize", updateOffsets);
    return () => window.removeEventListener("resize", updateOffsets);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const offsets = sectionOffsetsRef.current;
      if (!offsets.length) return;

      const headerOffset = headerRef.current?.offsetHeight ?? 0;
      const y = window.scrollY + headerOffset + 1;
      const start = offsets[0];
      const end = offsets[offsets.length - 1];

      if (y <= start) {
        progressRaw.set(0);
        return;
      }
      if (y >= end) {
        progressRaw.set(1);
        return;
      }

      let index = 0;
      while (index < offsets.length - 1 && y >= offsets[index + 1]) {
        index += 1;
      }

      const curr = offsets[index];
      const next = offsets[index + 1];
      const sectionProgress = next > curr ? (y - curr) / (next - curr) : 0;
      const ratio = (index + sectionProgress) / (offsets.length - 1);
      progressRaw.set(Math.min(Math.max(ratio, 0), 1));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [progressRaw]);

  const today = new Date().toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "long", year: "numeric" });

  return (
    <header ref={headerRef} className={`fixed top-0 inset-x-0 z-50 border-b-2 border-ink bg-paper transition-shadow ${scrolled ? "shadow-[0_4px_0_0_var(--ink)]" : ""}`}>
      <div className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-1 flex items-center justify-between font-condensed text-[11px] uppercase tracking-[0.25em]">
          <span>Tập MMXXX · Số 01</span>
          <span className="hidden md:inline">{today}</span>
          <span className="blood font-bold">★ BÁO CHÍ TỰ DO ★</span>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-5 py-2 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display font-black text-2xl md:text-3xl leading-none tracking-tight">TỜ&nbsp;BÁO&nbsp;CỦA&nbsp;<span className="blood">CÁCH&nbsp;MẠNG</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-5 font-condensed text-[12px] uppercase tracking-[0.18em] font-semibold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:blood transition-colors border-b-2 border-transparent hover:border-blood pb-0.5">{l.label}</a>
          ))}
        </nav>
        <a href="#end" className="hidden sm:inline-flex items-center gap-2 brut-red px-3 py-1.5 font-display text-[12px] tracking-[0.2em] uppercase">
          Đọc Tuyên Ngôn →
        </a>
      </div>
      <motion.div className="progress-bar origin-left" style={{ scaleX: progress }} />
    </header>
  );
}
