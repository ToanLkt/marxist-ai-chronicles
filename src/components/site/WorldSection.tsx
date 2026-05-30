import { Reveal } from "./Reveal";
import factoryImg from "@/assets/factory.jpg";

const replaced = [
  { role: "Luật sư", value: 78, note: "Hợp đồng được soạn tự động bởi đàn mô hình ngôn ngữ." },
  { role: "Lập trình viên", value: 84, note: "Mã nguồn được duy trì bởi các tác tử tự trị." },
  { role: "Bác sĩ", value: 64, note: "Chẩn đoán giao phó cho các mô hình đa phương thức." },
  { role: "Nghệ sĩ", value: 71, note: "Tác phẩm dài được tạo ra trong mili-giây, bán theo từng giây." },
  { role: "Nhà phân tích", value: 92, note: "Suy luận thay thế báo cáo; báo cáo thay thế con người." },
  { role: "Tài xế", value: 88, note: "Logistics hoàn toàn giao cho đội xe không người lái." },
];

const stats = [
  { k: "90%", v: "Của cải toàn cầu do các tập đoàn sở hữu AI nắm giữ" },
  { k: "≈ 0", v: "Chi phí sản xuất gần như bằng 0" },
  { k: "2,4 tỷ", v: "Việc làm trí óc bị tự động hóa đến năm 2030" },
  { k: "12×", v: "Năng suất tăng so với mốc 2020" },
];

export function WorldSection() {
  return (
    <section id="world" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần I</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[1]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              Thế Giới Năm <span className="blood">2030</span>
            </h2>
          </div>
          <div className="hidden md:block font-condensed uppercase tracking-[0.3em] text-xs text-right max-w-xs">
            Phóng sự thực địa từ thế kỷ mới của <span className="blood font-bold">sự dư thừa tự động</span> và cơn đói thủ công.
          </div>
        </div>

        {/* Three columns lead */}
        <Reveal>
          <div className="mt-10 grid md:grid-cols-3 col-rule gap-8">
            <p className="drop-cap text-[14.5px] leading-[1.65]">
              Máy móc đã học cách tư duy. Đầu tiên trong phòng thí nghiệm, rồi đến các văn phòng luật. Đến mùa xuân 2027, chúng đã viết những hợp đồng thay thế chính những người soạn thảo, và đến mùa đông, chúng viết cả những bài điếu văn. Lao động trí óc — nơi trú ẩn cuối cùng trước cơn bão tự động hóa — lại là nơi đầu tiên sụp đổ.
            </p>
            <p className="text-[14.5px] leading-[1.65]">
              Sản xuất tách rời khỏi con người. Nhà máy không cần ca kíp. Văn phòng không cần ánh sáng. Dọc bờ biển, những siêu công trình rì rầm vận hành không cửa sổ vì không ai bên trong cần một tầm nhìn. Chi phí sản xuất bất cứ thứ gì — một bản tóm tắt, một viên gạch, một bản giao hưởng — tiệm cận giá điện, rồi tụt xuống dưới đó.
            </p>
            <p className="text-[14.5px] leading-[1.65]">
              Vậy mà tiền thuê nhà tăng. Bánh mì tăng. Thị trường duy nhất còn tuyển dụng là thị trường sự chú ý của con người. Của cải mà máy móc tạo ra không biến mất — nó tập trung, gọn gàng, vào tài khoản của những kẻ sở hữu các mô hình. Mười hai tập đoàn nay nắm giữ các phương tiện nhận thức. Mọi người khác chỉ sở hữu thời gian không thể bán.
            </p>
          </div>
        </Reveal>

        {/* Sector grid */}
        <Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-ink">
            {replaced.map((r, i) => (
              <div key={r.role} className={`p-6 border-ink ${i % 3 !== 2 ? "lg:border-r-2" : ""} ${i < replaced.length - (replaced.length % 3 || 3) ? "lg:border-b-2" : ""} border-b-2 ${i % 2 === 1 ? "sm:border-r-0" : "sm:border-r-2"} bg-paper relative overflow-hidden`}>
                <div className="absolute -right-3 -top-3 halftone-red opacity-10 w-24 h-24 rounded-full" />
                <div className="font-condensed text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Ngành {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 flex items-baseline gap-2">
                  <div className="font-display font-black tabular-nums leading-none text-6xl blood">{r.value}<span className="text-3xl ink">%</span></div>
                </div>
                <div className="mt-1 font-display font-bold uppercase text-2xl tracking-tight">{r.role}</div>
                <p className="mt-2 text-[13.5px] leading-[1.55] text-foreground/85">{r.note}</p>
                <div className="mt-4 h-2 border border-ink">
                  <div className="h-full bg-ink" style={{ width: `${r.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Big image + stats */}
        <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal>
            <figure className="border-2 border-ink relative">
              <img src={factoryImg} alt="Hàng dài cánh tay robot trong một nhà máy tự động hóa"
                   loading="lazy" width={1600} height={1024}
                   className="w-full h-[420px] object-cover img-news" />
              <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.07]" />
              <div className="absolute top-3 left-3 bg-ink text-paper px-2 py-1 font-display uppercase tracking-[0.3em] text-[11px]">Cơ Sở 07 · Tự Động Hoàn Toàn</div>
              <figcaption className="border-t-2 border-ink p-3 bg-paper font-condensed text-[12px] uppercase tracking-[0.2em]">
                Dưới — Một dây chuyền sản xuất đã 1.184 ngày không thấy bóng công nhân.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-2 border-ink">
              <div className="bg-ink text-paper px-4 py-2 font-display uppercase tracking-[0.3em] text-xs flex justify-between">
                <span>Chỉ Số · 2030</span><span className="blood">Nguồn: Cục Thống Kê Mới</span>
              </div>
              {stats.map((s, i) => (
                <div key={s.k} className={`flex items-baseline gap-5 px-5 py-4 ${i !== stats.length - 1 ? "border-b border-ink/30" : ""}`}>
                  <div className="font-display font-black tabular-nums text-5xl md:text-6xl leading-none w-40">{s.k}</div>
                  <div className="font-condensed uppercase tracking-[0.18em] text-[13px] text-foreground/85">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
