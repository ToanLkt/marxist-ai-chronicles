import { Reveal } from "./Reveal";
import wallImg from "@/assets/wall.jpg";

export function TitansSection() {
  return (
    <section id="yeager" className="relative bg-paper paper-grain border-b-4 border-ink overflow-hidden">
      {/* Cover image strip */}
      <div className="relative border-b-2 border-ink">
        <img src={wallImg} alt="Một bóng người đơn độc trước bức tường khổng lồ dưới bầu trời đỏ"
             loading="lazy" className="w-full h-[68vh] object-cover img-news-red" />
        <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
        <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Phụ Lục Triết Học</div>
        <div className="absolute bottom-6 left-0 right-0 mx-auto max-w-[1400px] px-5">
          <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần VI</div>
          <h2 className="mt-2 font-display font-black uppercase leading-[0.82] text-paper"
              style={{ fontSize: "clamp(2.5rem,9vw,8rem)", textShadow: "4px 4px 0 var(--ink)" }}>
            Eren Yeager <span className="blood">/</span> khát vọng tự do
          </h2>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <Reveal>
            <div className="space-y-5">
              <p className="drop-cap text-[15px] leading-[1.65]">
                Cậu là một thiếu niên đã nhìn thấy bức tường và hiểu, trước khi ai dám thừa nhận, rằng bức tường không phải kẻ thù — thế giới cần tới bức tường ấy mới là. Titan là quyền lực không có chủ, kinh khủng và ngu muội. Không thể nói lý vì chúng không thể lý luận. Nỗi khiếp đảm không nằm ở sức mạnh của chúng. Nỗi khiếp đảm là sức mạnh ở quy mô ấy không thể tồn tại mà không sắp đặt lại con người bên dưới nó.
              </p>
              <p className="text-[15px] leading-[1.65]">
                AI là sức mạnh Titan của thế kỷ này — chỉ khác, lần này nó <span className="font-bold">có chủ</span>. Nó có cổ đông. Nó có lộ trình. Nó được cho bạn thuê theo giờ và cho cảnh sát thuê theo phút. Câu hỏi mà Eren đã hét lên với bầu trời, chính là câu hỏi duy nhất đáng hỏi vào năm 2030: <span className="blood font-bold uppercase">những bức tường này đang bảo vệ tự do của ai?</span>
              </p>
              <p className="text-[15px] leading-[1.65]">
                Tự do, cậu hiểu, không phải được ban tặng. Nó phải được giành lấy — bởi những kẻ từ chối các bức tường và chấp nhận cái giá của sự từ chối. Không có giấy phép nào cho tương lai. Chỉ có bức tường, và điều chúng ta quyết định nó dùng để làm gì.
              </p>
              <aside className="border-l-4 border-blood pl-5 py-2 font-display text-2xl md:text-3xl uppercase leading-tight font-bold">
                "Vấn đề chưa bao giờ là bản thân quyền lực. <span className="blood">Vấn đề là thế giới đang nắm giữ nó.</span>"
              </aside>
            </div>
          </Reveal>

          <div className="space-y-5">
            {[
              { q: "Nếu thua, ta chết. Nếu thắng, ta sống. Trừ khi chiến đấu, ta không thể thắng.", a: "Eren Yeager" },
              { q: "Thế giới này thật tàn nhẫn — và rất đẹp đẽ.", a: "Mikasa Ackerman" },
              { q: "Kẻ sở hữu phương tiện nhận thức sở hữu tương lai của loài người.", a: "Mảnh Tuyên Ngôn · 2030" },
              { q: "Bức tường không bảo vệ ta khỏi tương lai. Chúng chỉ quyết định ai được đứng bên trong.", a: "Vô Danh" },
            ].map((q, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <blockquote className="brut p-6 relative">
                  <div className="font-display uppercase tracking-[0.3em] text-[11px] blood">Mảnh · {String(i + 1).padStart(2, "0")}</div>
                  <p className="mt-3 font-display text-xl md:text-2xl uppercase font-bold leading-[1.1]">"{q.q}"</p>
                  <div className="mt-3 font-condensed uppercase tracking-[0.3em] text-[12px] text-muted-foreground">— {q.a}</div>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing symbolism row */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-4 gap-0 border-2 border-ink">
            {[
              { t: "Tường", n: "Cấu trúc xác định ai được tự do." },
              { t: "Chim", n: "Hình dáng của tự do trong mắt kẻ bị tước đoạt." },
              { t: "Biển", n: "Thế giới ngoài cái mà ta được kể là thế giới." },
              { t: "Vòng Lặp", n: "Hận thù tái sinh, qua từng thế hệ." },
            ].map((m, i) => (
              <div key={m.t} className={`p-6 ${i !== 3 ? "md:border-r-2 border-ink" : ""} ${i < 2 ? "border-b-2 md:border-b-0 border-ink" : ""} bg-paper`}>
                <div className="font-display font-black uppercase text-4xl leading-none">{m.t}</div>
                <p className="mt-2 font-condensed text-[13.5px] leading-[1.5]">{m.n}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
