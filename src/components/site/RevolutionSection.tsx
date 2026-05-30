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
            <h2 className="mt-2 font-display font-black uppercase leading-[1]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              <span className="blood">Cách Mạng</span> / <br />Điểm Vỡ
            </h2>
          </div>
          <span className="hidden md:inline font-condensed uppercase tracking-[0.3em] text-xs blood animate-flicker">● CHUYÊN MỤC TUYÊN TRUYỀN ●</span>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <Reveal>
            <figure className="border-2 border-paper relative overflow-hidden">
              <img src={wallImg} alt="Bức tường khổng lồ dưới bầu trời đỏ thẫm — hệ thống giam giữ chúng ta"
                   loading="lazy" className="w-full h-[60vh] object-cover img-news-red" />
              <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.12]" />
              <div className="absolute top-3 left-3 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Áp Phích · Bức Tường</div>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <p className="font-display text-3xl md:text-4xl uppercase leading-[1.05] font-bold">
                AI có thể <span className="blood">giải phóng</span> loài người.<br/>
                Dưới <span className="blood">quyền sở hữu</span> cũ, nó chỉ áp bức.
              </p>
              <p className="font-condensed text-[15px] leading-[1.65] text-paper/85 max-w-prose">
                Khi lực lượng sản xuất vượt khỏi vỏ chứa của nó, vỏ chứa sẽ vỡ. Chúng ta đã thấy điều này trước đây — trong những khung cửi ở Lancashire, trong những máy in của Cải cách Tin lành, trong mọi thế kỷ nhầm lẫn công cụ với chủ nhân. Câu hỏi của năm 2030 không phải mâu thuẫn có vỡ hay không, mà là ai còn đứng vững khi nó vỡ.
              </p>
              <ul className="grid sm:grid-cols-2 gap-3 font-display uppercase text-lg">
                {["Đốt cháy tương lai đi thuê.", "Kiểm toán thuật toán.", "Đoạt lại mô hình.", "Từ chối bức tường."].map((s, i) => (
                  <li key={i} className="border-2 border-paper px-4 py-3 hover:bg-blood hover:border-blood transition-colors">{s}</li>
                ))}
              </ul>
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
