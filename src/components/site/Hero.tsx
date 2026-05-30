import { motion } from "motion/react";
import heroImg from "@/assets/hero-city.jpg";

export function Hero() {
  return (
    <section id="top" className="relative bg-paper paper-grain border-b-4 border-ink pt-24">
      {/* Top status strip */}
      <div className="border-y-2 border-ink bg-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-1.5 flex items-center justify-between font-condensed text-[11px] uppercase tracking-[0.3em]">
          <span>Ấn Bản Đặc Biệt · Phóng Sự Điều Tra</span>
          <span className="hidden md:inline">Gửi đi từ Khu vực 12 · 04:17</span>
          <span className="blood font-bold animate-flicker">● TRỰC TIẾP</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-10 md:py-14">
        {/* Section line */}
        <div className="flex items-center justify-between border-b-2 border-ink pb-2 mb-6 font-display text-xs uppercase tracking-[0.4em]">
          <span>Trang Nhất · Câu Chuyện Bìa</span>
          <span className="blood">Hồ Sơ 01 / VI</span>
        </div>

        {/* MAIN HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
          className="font-display font-black uppercase leading-[0.82] tracking-[-0.02em]"
          style={{ fontSize: "clamp(3.5rem, 14vw, 13rem)" }}
        >
          <span className="glitch" data-text="AI 2030">AI 2030</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-4 font-display font-light uppercase border-y-2 border-ink py-4 leading-[1.05]"
          style={{ fontSize: "clamp(1.1rem, 2.6vw, 2.1rem)" }}
        >
          Khi lực lượng sản xuất trở nên <span className="blood font-bold italic">mạnh hơn</span> chính cái xã hội đang chứa đựng chúng.
        </motion.h2>

        {/* GRID: image + columns */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.figure
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative border-2 border-ink overflow-hidden">
              <img src={heroImg} alt="Đường chân trời siêu giám sát của siêu đô thị AI, năm 2030"
                   width={1920} height={1080}
                   className="w-full h-[44vh] md:h-[58vh] object-cover img-news" />
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply halftone opacity-[0.06]" />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--ink)_140%)] opacity-40" />
              <div className="absolute top-3 left-3 brut-red px-2 py-1 font-display text-[11px] uppercase tracking-[0.3em]">Mật · Tư Liệu Thu Hồi</div>
              <div className="absolute bottom-3 right-3 bg-ink text-paper px-2 py-1 font-condensed text-[10px] uppercase tracking-[0.3em]">Ảnh · Vô Danh · 11·03·2030</div>
            </div>
            <figcaption className="mt-2 font-condensed text-[12px] uppercase tracking-[0.18em] text-muted-foreground border-b border-ink pb-2">
              Trên — Thành trì tài chính của Tân Quận 7, nơi mười hai tập đoàn được cho là sở hữu các mô hình điều khiển nền văn minh.
            </figcaption>
          </motion.figure>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45 }}
            className="space-y-5"
          >
            <div className="border-b-2 border-ink pb-2 font-display uppercase tracking-[0.3em] text-xs">Bởi / Ban Biên Tập</div>
            <p className="drop-cap text-[15px] leading-[1.6]">
              Vào năm tự động hóa của chúng ta, hai nghìn ba mươi, máy móc không vùng lên. Chúng đã bị sở hữu. Mỗi cử chỉ, mỗi hợp đồng, mỗi chẩn đoán, mỗi dòng mã — đều được tạo ra với chi phí biên gần bằng không bởi những hệ thống không còn cần đến chúng ta. Vậy mà bánh mì lại đắt hơn bao giờ hết.
            </p>
            <p className="text-[15px] leading-[1.6]">
              Ấn bản đặc biệt này được phát hành giữa cơn bão. Đó là biên bản về những gì đã bị bán cho chúng ta dưới cái tên tiến bộ, và là một câu hỏi mà thập niên tới sẽ trả lời bằng bánh mì hoặc lửa: <span className="font-bold uppercase">ai sở hữu các phương tiện nhận thức?</span>
            </p>

            <aside className="brut p-5">
              <div className="font-display uppercase tracking-[0.25em] text-[11px] blood mb-2">Trích Dẫn Của Biên Tập</div>
              <p className="font-display text-2xl md:text-3xl font-bold leading-[1.05] uppercase">
                "Vấn đề không phải AI mạnh đến đâu. <span className="blood">Vấn đề là ai sở hữu nó.</span>"
              </p>
            </aside>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="#world" className="brut-red px-5 py-3 font-display uppercase tracking-[0.25em] text-sm">Đọc Hồ Sơ →</a>
              <a href="#yeager" className="brut px-5 py-3 font-display uppercase tracking-[0.25em] text-sm">VI. Câu Hỏi Yeager</a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ticker */}
      <div className="border-y-2 border-ink bg-ink text-paper overflow-hidden marquee-mask">
        <div className="flex whitespace-nowrap animate-ticker font-display uppercase tracking-[0.3em] text-sm py-2">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0">
              {[
                "HÀNG TỶ NGƯỜI THẤT NGHIỆP",
                "CHỦ SỞ HỮU AI NẮM GIỮ 90% CỦA CẢI TOÀN CẦU",
                "LAO ĐỘNG CON NGƯỜI KHÔNG CÒN CẦN THIẾT",
                "YÊU CẦU ĐÁNH THUẾ ROBOT LAN RỘNG",
                "CHI PHÍ BIÊN SẢN XUẤT TIẾN VỀ KHÔNG",
                "MƯỜI HAI TẬP ĐOÀN · MỘT HÀNH TINH",
                "BẠO LOẠN BÁNH MÌ TẠI KHU VỰC 12",
              ].map((t, i) => (
                <span key={i} className="px-8 flex items-center gap-8">
                  <span className="blood">◆</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
