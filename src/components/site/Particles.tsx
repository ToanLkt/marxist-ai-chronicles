import { useEffect, useRef } from "react";

export function Particles({ density = 80 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", onResize);

    const parts = Array.from({ length: density }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.4,
      hue: Math.random() > 0.85 ? 15 : 220,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 8);
        g.addColorStop(0, `hsla(${p.hue},90%,70%,0.9)`);
        g.addColorStop(1, `hsla(${p.hue},90%,70%,0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 8, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [density]);

  return <canvas ref={ref} className="absolute inset-0 h-full w-full pointer-events-none" />;
}
