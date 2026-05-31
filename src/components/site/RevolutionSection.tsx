import { Reveal } from "./Reveal";
import wallImg from "@/assets/wall.jpg";

export function RevolutionSection() {
  return (
    <section id="revolution" className="relative bg-ink text-paper border-b-4 border-ink overflow-hidden">
      <div className="absolute inset-0 halftone-red opacity-[0.06] pointer-events-none" />
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24 relative">
        <div className="flex items-end justify-between border-b-2 border-paper pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần IV</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[1.2]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
            Khi <span className="blood">Tương lai </span> <br />Không còn vừa với <span className="blood">Hiện tại </span> 
            </h2>
          </div>
          <span className="hidden md:inline font-condensed uppercase tracking-[0.3em] text-xs blood animate-flicker">● CHUYÊN MỤC TUYÊN TRUYỀN ●</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[0.84fr_1.16fr] gap-14 items-start">
          <Reveal>
            <figure className="border-2 border-paper relative overflow-hidden">
              <img src={wallImg} alt="Bức tường khổng lồ dưới bầu trời đỏ thẫm — hệ thống giam giữ chúng ta"
                   loading="lazy" className="w-full h-[60vh] object-cover img-news-red" />
              <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.12]" />
              <div className="absolute top-3 left-3 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Áp Phích · Bức Tường</div>
              <figcaption className="absolute bottom-3 left-3 border border-paper/60 bg-ink/70 px-3 py-2 font-display uppercase text-xs tracking-[0.2em] text-paper/90">
                SỨC MẠNH MỚI KHÔNG TỰ TẠO RA TỰ DO.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-3">
                
                <p className="font-display text-3xl md:text-4xl uppercase leading-[1.12] font-black">
                  AI CÓ THỂ <span className="blood">GIẢI PHÓNG</span> CON NGƯỜI.<br />
                  NHƯNG NÓ CŨNG CÓ THỂ LÀM <span className="blood">SÂU SẮC</span> HƠN NHỮNG <span className="blood">MÂU THUẪN CŨ</span>.
                </p>
              </div>
              <div className="space-y-4 max-w-prose">
                <p className="font-condensed text-[15px] leading-[1.7] text-paper/85">
                  AI đang tạo ra bước nhảy vọt về năng suất và của cải cho nhân loại. Nhưng vấn đề không nằm ở AI, mà nằm ở cách AI được sở hữu và phân phối.
                </p>
                <p className="font-condensed text-[15px] leading-[1.7] text-paper/85">
                  Khi lực lượng sản xuất phát triển vượt khỏi khuôn khổ cũ, mâu thuẫn xã hội sẽ xuất hiện. AI có thể giải phóng con người hoặc làm gia tăng bất bình đẳng — điều đó phụ thuộc vào việc thành quả của nó thuộc về ai.
                </p>
              </div>
              <blockquote className="border-l-2 border-blood/70 pl-5 py-3 font-display uppercase text-xl md:text-2xl leading-[1.2] text-paper/90">
                “TƯƠNG LAI <span className="blood">KHÔNG PHỤ THUỘC</span> VÀO AI MẠNH ĐẾN ĐÂU.<br />
                MÀ PHỤ THUỘC VÀO CÁCH XÃ HỘI <span className="blood">TỔ CHỨC</span> VÀ <span className="blood">PHÂN PHỐI</span> THÀNH QUẢ CỦA NÓ.”
              </blockquote>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "AI LÀ LỰC LƯỢNG SẢN XUẤT MỚI.",
                  "NĂNG SUẤT TĂNG, MÂU THUẪN CŨNG TĂNG.",
                  "QUAN HỆ CŨ KHÔNG THỂ CHỨA ĐỰNG MÃI LỰC LƯỢNG MỚI.",
                  "TƯƠNG LAI PHỤ THUỘC VÀO CÁCH CHÚNG TA SỞ HỮU AI.",
                ].map((s, i) => (
                  <div key={i} className="border border-paper/70 bg-ink/40 px-4 py-3 hover:bg-blood/10 transition-colors">
                    <div className="font-display uppercase text-[10px] tracking-[0.25em] text-paper/60">{String(i + 1).padStart(2, "0")}</div>
                    <div className="mt-2 font-display uppercase text-sm text-paper/90">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Slogans bar */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-0 border-2 border-paper">
            {[
              { n: "01", t: "Tường thành sụp đổ" },
              { n: "02", t: "Hệ thống tan vỡ" },
              { n: "03", t: "Báo chí cháy rực" },
            ].map((m, i) => (
              <div key={m.n} className={`p-7 ${i !== 2 ? "md:border-r-2 border-paper" : ""} bg-ink text-paper`}>
                <div className="font-display font-black blood text-7xl leading-none">{m.n}</div>
                <div className="mt-3 font-display uppercase text-2xl font-bold">{m.t}</div>
                <div className="mt-2 h-1 w-12 bg-blood" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
