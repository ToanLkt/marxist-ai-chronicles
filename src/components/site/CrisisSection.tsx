import { Reveal } from "./Reveal";
import protestImg from "@/assets/protest.jpg";

const headlines = [
  "HÀNG TỶ NGƯỜI THẤT NGHIỆP",
  "CHỦ SỞ HỮU AI NẮM 90% CỦA CẢI TOÀN CẦU",
  "LAO ĐỘNG CON NGƯỜI KHÔNG CÒN CẦN THIẾT",
  "DỰ LUẬT THUẾ ROBOT BỊ BÁC TẠI THƯỢNG VIỆN",
  "TUẦN HÀNH ĐÒI UBI LAN RA 40 THÀNH PHỐ",
  "ĐỘI TUẦN TRA TỰ HÀNH NỔ SÚNG VÀO CUỘC ĐÌNH CÔNG",
  "CHỈ SỐ GIÁ BÁNH MÌ +312% SO VỚI NĂM TRƯỚC",
];

const sub = [
  { tag: "Lao Động", h: "Hồi Kết Của Việc Làm", n: "Cục Thống Kê lặng lẽ định nghĩa lại 'thất nghiệp' để loại trừ mọi người trên năm mươi tuổi. Số liệu đẹp lên sau một đêm." },
  { tag: "Bất Bình Đẳng", h: "Hai Thành Phố, Một Bản Đồ", n: "Siêu công trình tự cấp điện riêng trong khi các tiểu khu phải hạn chế ánh sáng theo mã bưu chính." },
  { tag: "Bất Ổn", h: "Quảng Trường Trở Lại", n: "Từ São Paulo đến Seoul, các quảng trường lại đầy người. Khẩu hiệu thì mới. Nỗi oan thì rất cũ." },
];

export function CrisisSection() {
  return (
    <section id="crisis" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần III</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              Khủng Hoảng <span className="blood">Xã Hội</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 font-condensed uppercase tracking-[0.3em] text-xs">
            <span className="h-3 w-3 bg-blood animate-flicker" /> Phát Sóng Khẩn Cấp
          </div>
        </div>

        {/* Big photo */}
        <Reveal>
          <figure className="mt-10 border-2 border-ink relative overflow-hidden">
            <img src={protestImg} alt="Biểu tình quy mô lớn dưới ánh sáng đỏ, biểu ngữ chống độc quyền"
                 loading="lazy" className="w-full h-[55vh] object-cover img-news-red" />
            <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.1]" />
            <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-xs">Tin từ tuyến đầu</div>
            <div className="absolute bottom-4 right-4 bg-ink text-paper px-3 py-1 font-condensed uppercase tracking-[0.25em] text-xs">Ảnh · M. Ravel · 22·09·2030</div>
            <figcaption className="border-t-2 border-ink p-3 bg-paper font-condensed text-[12px] uppercase tracking-[0.2em]">
              Cuộc tuần hành đòi thuế robot hội tụ với hội kỹ sư thất nghiệp. Máy bay không người lái cảnh sát quần thảo trên đầu. Không có buổi họp báo nào được lên lịch.
            </figcaption>
          </figure>
        </Reveal>

        {/* Headlines ticker (vertical staggered) */}
        <Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-0 border-2 border-ink">
            <div className="p-6 md:p-8 border-b-2 md:border-b-0 md:border-r-2 border-ink bg-paper">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Điện Tín · 06:00</div>
              <ul className="mt-4 space-y-3">
                {headlines.map((h, i) => (
                  <li key={i} className="border-b border-ink/30 pb-2 flex items-baseline gap-3">
                    <span className="font-display font-black blood w-10 tabular-nums">{String(i+1).padStart(2,"0")}</span>
                    <span className="font-display font-bold uppercase text-lg md:text-xl leading-tight">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 md:p-8 bg-ink text-paper">
              <div className="font-display uppercase tracking-[0.3em] text-xs blood">Bản Yêu Sách · Tạm Thời</div>
              <ol className="mt-4 space-y-4 font-display uppercase text-2xl md:text-3xl font-bold leading-tight">
                <li>① <span className="blood">Đánh thuế robot</span> trên mọi giao dịch tự động.</li>
                <li>② Thu nhập <span className="blood">cơ bản</span> phổ quát, gắn với năng suất.</li>
                <li>③ <span className="blood">Kiểm toán</span> công khai mười hai tập đoàn.</li>
                <li>④ Quyền được <span className="blood">ngắt kết nối</span>.</li>
                <li>⑤ Nhận thức thuộc về <span className="blood">cộng đồng</span>.</li>
              </ol>
            </div>
          </div>
        </Reveal>

        {/* Sub-stories */}
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {sub.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.08}>
              <article className="brut p-6 h-full">
                <div className="font-display uppercase tracking-[0.3em] text-[11px] blood">{s.tag}</div>
                <h3 className="mt-2 font-display font-black uppercase text-2xl leading-tight">{s.h}</h3>
                <p className="mt-3 font-condensed text-[14px] leading-[1.55]">{s.n}</p>
                <div className="mt-5 font-condensed uppercase tracking-[0.3em] text-[11px] text-muted-foreground">Tiếp tr. {String(i+12).padStart(2,"0")} →</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
