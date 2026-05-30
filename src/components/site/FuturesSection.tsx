import { Reveal } from "./Reveal";
import utopiaImg from "@/assets/utopia.jpg";
import dystopiaImg from "@/assets/dystopia.jpg";

const branchA = [
  "AI thuộc sở hữu chung.",
  "Thu nhập cơ bản phổ quát.",
  "Tuần làm việc bốn giờ.",
  "Nghệ thuật, khoa học, giáo dục trở thành nghề nghiệp.",
  "Chấm dứt sự lao dịch bắt buộc.",
];

const branchB = [
  "Độc quyền AI bám rễ.",
  "Thất nghiệp hàng loạt vĩnh viễn.",
  "Cảnh sát thuật toán.",
  "Chiến tranh giai cấp, rồi tận diệt giai cấp.",
  "Giám sát trở thành tôn giáo công dân.",
];

export function FuturesSection() {
  return (
    <section id="futures" className="relative bg-paper paper-grain border-b-4 border-ink">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:py-24">
        <div className="flex items-end justify-between border-b-2 border-ink pb-3">
          <div>
            <div className="font-display uppercase tracking-[0.4em] text-xs blood">Phần V</div>
            <h2 className="mt-2 font-display font-black uppercase leading-[0.85]" style={{ fontSize: "clamp(2.5rem,8vw,7rem)" }}>
              Hai <span className="blood">Tương Lai</span> Có Thể
            </h2>
          </div>
          <div className="hidden md:block font-condensed uppercase tracking-[0.3em] text-xs">Cùng một cỗ máy. Hai kết cục.</div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-0 border-2 border-ink">
          {/* Utopia */}
          <Reveal>
            <article className="relative border-b-2 md:border-b-0 md:border-r-2 border-ink bg-paper p-6 md:p-8">
              <header className="flex items-center justify-between border-b-2 border-ink pb-2">
                <span className="font-display uppercase tracking-[0.3em] text-xs">Khả Năng I</span>
                <span className="font-condensed text-xs uppercase tracking-[0.3em]">Nhánh A</span>
              </header>
              <h3 className="mt-4 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Xã Hội Hậu <span className="blood">Lao Động</span>
              </h3>
              <figure className="mt-5 border-2 border-ink overflow-hidden">
                <img src={utopiaImg} alt="Sảnh ngập nắng nơi người ta đọc, vẽ và giảng dạy"
                     loading="lazy" className="w-full h-64 object-cover img-news" />
              </figure>
              <ul className="mt-5 space-y-2.5 font-condensed text-[14px]">
                {branchA.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-ink/30 pb-2"><span className="font-display font-black">+</span><span>{t}</span></li>
                ))}
              </ul>
              <p className="mt-5 font-condensed text-[14px] leading-[1.55] italic">
                Thanh thản, vị lai, tự do trí tuệ. Công việc trở thành lựa chọn. Cái đẹp trở thành một tiện ích công cộng.
              </p>
            </article>
          </Reveal>

          {/* Dystopia */}
          <Reveal delay={0.1}>
            <article className="relative bg-ink text-paper p-6 md:p-8 scanlines-paper">
              <header className="flex items-center justify-between border-b-2 border-paper pb-2">
                <span className="font-display uppercase tracking-[0.3em] text-xs blood">Khả Năng II</span>
                <span className="font-condensed text-xs uppercase tracking-[0.3em]">Nhánh B</span>
              </header>
              <h3 className="mt-4 font-display font-black uppercase text-4xl md:text-5xl leading-[0.9]">
                Sụp Đổ <span className="blood">Xã Hội</span>
              </h3>
              <figure className="mt-5 border-2 border-paper overflow-hidden">
                <img src={dystopiaImg} alt="Siêu đô thị đổ nát ngập ánh neon trong mưa"
                     loading="lazy" className="w-full h-64 object-cover img-news-red" />
              </figure>
              <ul className="mt-5 space-y-2.5 font-condensed text-[14px] text-paper/90">
                {branchB.map((t) => (
                  <li key={t} className="flex gap-3 border-b border-paper/30 pb-2"><span className="font-display font-black blood">×</span><span>{t}</span></li>
                ))}
              </ul>
              <p className="mt-5 font-condensed text-[14px] leading-[1.55] italic blood">
                ⚠ Giao diện khẩn cấp đã kích hoạt. Chức năng dân sự bị đình chỉ. Tuân thủ là một đức tính.
              </p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <p className="mt-10 mx-auto max-w-3xl text-center font-display uppercase text-xl md:text-2xl leading-tight">
            Công nghệ thì <span className="blood">trung lập</span>. Quyền sở hữu thì không.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
