import { Reveal } from "./Reveal";
import factoryImg from "@/assets/factory.jpg";
import dystopiaImg from "@/assets/dystopia.jpg";

export function ContradictionSection() {
  return (
    <section id="contradiction" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần II</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              <span className="blood">Mâu Thuẫn</span> Lớn
            </h2>
          </div>
          <span className="stamp animate-flicker hidden md:inline-block">Xã Luận</span>
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl font-display text-2xl md:text-3xl uppercase leading-[1.1] font-light">
            Lực lượng sản xuất mới <span className="blood font-bold">va chạm</span> với quan hệ sản xuất cũ.
          </p>
        </Reveal>

        {/* Split screen */}
        <div className="mt-12 grid md:grid-cols-2 border-2 border-ink">
          <Reveal>
            <div className="relative bg-paper p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink">
              <div className="font-display uppercase tracking-[0.3em] text-xs">Phía A · Bên Dưới</div>
              <h3 className="mt-2 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Người lao động mất <span className="blood">tất cả</span>
              </h3>
              <figure className="mt-5 border-2 border-ink overflow-hidden">
                <img src={factoryImg} alt="Phân xưởng trống vắng sau ca làm cuối cùng"
                     loading="lazy" className="w-full h-56 object-cover img-news-red" />
              </figure>
              <ul className="mt-5 space-y-3 font-condensed text-[14px]">
                {[
                  "Tầng lớp trung lưu sụp đổ — kỹ sư xếp hàng tại ngân hàng thực phẩm.",
                  "Lệnh trục xuất phổ quát được phát ra bởi thuật toán lúc 03:00.",
                  "Kỹ năng không còn là hợp đồng — nó chỉ còn là ký ức.",
                  "Trẻ em học những nghề sẽ không còn tồn tại khi tốt nghiệp.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3"><span className="blood font-bold">▼</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative bg-ink text-paper p-6 md:p-8">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Phía B · Bên Trên</div>
              <h3 className="mt-2 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Các <span className="blood">tập đoàn</span> AI siêu giàu
              </h3>
              <figure className="mt-5 border-2 border-paper overflow-hidden">
                <img src={dystopiaImg} alt="Đường chân trời của độc quyền dữ liệu xa hoa lúc hoàng hôn"
                     loading="lazy" className="w-full h-56 object-cover img-news" />
              </figure>
              <ul className="mt-5 space-y-3 font-condensed text-[14px]">
                {[
                  "Độc quyền dữ liệu được định giá theo từng gigabyte sự chú ý.",
                  "Các tòa tháp xa hoa làm mát bằng đại dương mà bạn không được phép đánh cá.",
                  "Hội đồng họp hàng quý để quyết định ý nghĩa của công dân.",
                  "Đội quân suy luận tư nhân. Cơn đói công cộng của người bị thay thế.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3"><span className="blood font-bold">▲</span><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Marx monument quote */}
        <Reveal>
          <figure className="mt-16 border-t-4 border-b-4 border-ink py-10 md:py-14 relative">
            <div className="absolute inset-0 halftone-red opacity-[0.04] pointer-events-none" />
            <div className="font-display uppercase tracking-[0.4em] text-xs blood text-center">Từ Tàng Thư · 1859</div>
            <blockquote className="mt-6 font-display font-black uppercase text-center leading-[0.95] tracking-tight"
                        style={{ fontSize: "clamp(1.6rem,5.5vw,4.5rem)" }}>
              "Đến một giai đoạn phát triển nhất định, quan hệ sản xuất trở thành
              <span className="blood"> xiềng xích </span>
              của lực lượng sản xuất."
            </blockquote>
            <figcaption className="mt-8 text-center font-condensed uppercase tracking-[0.4em] text-sm">
              — Karl Marx · Góp Phần Phê Phán Khoa Kinh Tế Chính Trị
            </figcaption>
          </figure>
        </Reveal>

        {/* Metaphor row */}
        <Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-0 border-2 border-ink">
            {[
              { t: "Xiềng", n: "Những hợp đồng cũ buộc chặt vào máy móc mới." },
              { t: "Lồng", n: "Những nền tảng có tường rào tính phí cả việc bạn hít thở." },
              { t: "Tường", n: "Quyền công dân được vẽ lại quanh các nông trại máy chủ." },
            ].map((m, i) => (
              <div key={m.t} className={`p-7 ${i !== 2 ? "md:border-r-2 border-ink" : ""} ${i !== 2 ? "border-b-2 md:border-b-0 border-ink" : ""} bg-paper`}>
                <div className="font-display font-black uppercase text-6xl leading-none">{m.t}</div>
                <p className="mt-3 font-condensed text-[14px] leading-[1.5]">{m.n}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
