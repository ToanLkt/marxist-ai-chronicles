import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import skylineImg from "@/assets/skyline.jpg";
import { Reveal } from "./Reveal";

export function FinalSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="end" ref={ref} className="relative bg-paper paper-grain overflow-hidden">
      {/* Parallax cover */}
      <div className="relative h-[70vh] border-b-4 border-ink overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={skylineImg} alt="Đường chân trời lúc bình minh, giữa sụp đổ và tái sinh"
               loading="lazy" className="h-full w-full object-cover img-news-red" />
        </motion.div>
        <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/40 via-transparent to-paper" />
        <div className="absolute inset-x-0 bottom-8 mx-auto max-w-[1400px] px-5">
          <div className="font-display uppercase tracking-[0.4em] text-xs blood">Kết Luận · Trang Cuối</div>
          <h2 className="mt-2 font-display font-black uppercase leading-[0.82]"
              style={{ fontSize: "clamp(2.25rem, 7.5vw, 6.5rem)" }}>
            AI sẽ không quyết định tương lai nhân loại.<br/>
            <span className="blood">Xã hội sẽ.</span>
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 py-20 md:py-28 text-center">
        <Reveal>
          <p className="font-display uppercase text-2xl md:text-3xl leading-[1.15] font-bold max-w-3xl mx-auto">
            Bản thân AI không phải địa đàng cũng chẳng phải địa ngục. Tương lai phụ thuộc vào
            <span className="blood"> ai sở hữu</span> nó, <span className="blood">ai kiểm soát</span> sản xuất,
            và <span className="blood">của cải được phân chia</span> ra sao khi máy móc đã làm xong việc.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <figure className="mt-16 border-t-4 border-b-4 border-ink py-10 relative">
            <div className="absolute inset-0 halftone-red opacity-[0.05] pointer-events-none" />
            <blockquote className="font-display font-black uppercase leading-[0.95] tracking-tight"
                        style={{ fontSize: "clamp(1.75rem, 6vw, 5rem)" }}>
              "Khi lực lượng sản xuất thay đổi,
              <br/><span className="blood">xã hội cũng phải thay đổi cùng nó.</span>"
            </blockquote>
            <figcaption className="mt-8 font-condensed uppercase tracking-[0.4em] text-sm">
              — Ban Biên Tập · Tờ Báo Của Cách Mạng · 2030
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#top" className="brut-red px-7 py-4 font-display uppercase tracking-[0.3em] text-sm">↑ Bắt Đầu Lại</a>
            <a href="#yeager" className="brut px-7 py-4 font-display uppercase tracking-[0.3em] text-sm">Đọc Lại Phần VI</a>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-3 gap-0 border-2 border-ink text-left">
          {[
            { t: "Lượng in", v: "∞" },
            { t: "Ấn bản", v: "Đặc Biệt · 2030" },
            { t: "Phát hành", v: "Bí Mật / Miễn Phí" },
          ].map((c) => (
            <div key={c.t} className="p-5 border-b-2 md:border-b-0 md:[&:not(:last-child)]:border-r-2 border-ink">
              <div className="font-condensed uppercase tracking-[0.3em] text-[11px] text-muted-foreground">{c.t}</div>
              <div className="font-display font-black uppercase text-3xl">{c.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 font-condensed uppercase tracking-[0.35em] text-[11px] text-muted-foreground">
          Tờ Báo Của Cách Mạng · Tờ khổ rộng triết học về AI, tư bản và thế kỷ tới
        </div>
      </div>
    </section>
  );
}
