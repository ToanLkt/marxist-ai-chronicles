import { Reveal } from "./Reveal";
import oceanFreedomImg from "@/assets/ocean-freedom.jpg";
import rumblingImg from "@/assets/rumbling.jpg";
import transformationImg from "@/assets/transformation.jpg";

export function FinalSection() {
  return (
    <section id="yeager-conclusion" className="relative bg-paper paper-grain border-b-4 border-ink overflow-hidden">
      <div id="yeager" />
      <div id="end" />

      {/* Hero */}
      <div className="border-b-2 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:py-16">
          <div className="font-display uppercase tracking-[0.4em] text-xs blood">VI. KẾT LUẬN</div>
          <h2
            className="mt-3 font-display font-black uppercase leading-[1.2]"
            style={{ fontSize: "clamp(2.4rem, 7.5vw, 6.8rem)" }}
          >
            VẤN ĐỀ <span className="blood">KHÔNG NẰM Ở AI.</span> MÀ NẰM Ở<br />
            <span className="blood">QUYỀN LỰC</span>
          </h2>
          <p className="mt-5 max-w-3xl font-condensed text-[15px] md:text-[16px] leading-[1.6] text-paper/85">
            AI không tự tạo ra thiên đường hay địa ngục. Vấn đề nằm ở việc ai sở hữu AI, AI phục vụ ai,
            và xã hội có còn đủ khả năng chứa đựng sức mạnh mới ấy hay không.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-14 md:py-20">
        {/* Block 01 */}
        <Reveal>
          <div className="border-2 border-ink bg-paper p-6 md:p-8">
            <div className="grid md:grid-cols-[1.05fr_1.4fr] gap-6 md:gap-10 items-start">
              <div>
                <div className="font-display uppercase tracking-[0.35em] text-xs blood">01</div>
                <h3 className="mt-2 font-display font-black uppercase text-3xl md:text-4xl leading-[1.2]">
                  AI <span className="blood">KHÔNG QUYẾT ĐỊNH</span> TƯƠNG LAI
                </h3>
              </div>
              <p className="font-condensed text-[15px] leading-[1.65]">
                AI không tự tạo ra một xã hội tốt đẹp hay tồi tệ. Điều quan trọng là AI thuộc về ai,
                phục vụ ai và thành quả do AI tạo ra được phân phối như thế nào. Khi lực lượng sản xuất mới
                vượt khỏi khuôn khổ cũ, xã hội buộc phải thay đổi.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 md:gap-3">
              {["SỞ HỮU", "PHỤC VỤ", "PHÂN CHIA"].map((k) => (
                <div key={k} className="border border-ink px-3 py-2 text-center font-display uppercase tracking-[0.25em] text-[11px]">
                  {k}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Block 02 */}
        <div className="mt-12 border-t-2 border-ink pt-12">
          <Reveal>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
              <figure className="border-2 border-ink overflow-hidden bg-paper">
                <div className="relative">
                  <img
                    src={transformationImg}
                    alt="Một nhân vật đứng trước nguồn sáng xanh, biểu tượng cho chuyển hóa"
                    loading="lazy"
                    className="w-full h-[46vh] md:h-[58vh] object-cover img-news"
                  />
                  <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.08]" />
                  <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-[11px]">
                    AI 2030 · SỨC MẠNH MỚI
                  </div>
                </div>
                <figcaption className="border-t-2 border-ink bg-paper px-4 py-3 font-condensed uppercase tracking-[0.3em] text-[11px] text-muted-foreground">
                  MỘT SỨC MẠNH MỚI XUẤT HIỆN TRONG MỘT TRẬT TỰ CŨ.
                </figcaption>
              </figure>

              <div className="space-y-5">
                <div className="font-display uppercase tracking-[0.35em] text-xs blood">02</div>
                <h3 className="font-display font-black uppercase text-3xl md:text-4xl leading-[1.2]">
                  SỨC MẠNH MỚI VÀ TRẬT TỰ CŨ
                </h3>
                <p className="font-condensed text-[15px] leading-[1.65]">
                  Cuộc cách mạng AI năm 2030 có thể được nhìn như sự va chạm giữa một sức mạnh sản xuất mới
                  và một trật tự xã hội cũ. AI có khả năng giải phóng lao động, tạo ra của cải dư thừa và thay đổi
                  cách xã hội vận hành. Nhưng nếu quyền sở hữu vẫn nằm trong tay thiểu số, sức mạnh ấy có thể
                  biến thành công cụ thống trị.
                </p>
                <aside className="border-l-4 border-blood pl-5 py-2 font-display text-2xl md:text-3xl uppercase leading-[1.2] font-bold">
                  “VẤN ĐỀ KHÔNG PHẢI AI MẠNH ĐẾN ĐÂU.
                  <br />VẤN ĐỀ LÀ <span className="blood">AI THUỘC VỀ AI</span>.”
                </aside>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Block 03 */}
        <div className="mt-12 border-t-2 border-ink pt-12">
          <Reveal>
            <div className="border-y-2 border-ink py-8">
              <div className="font-display uppercase tracking-[0.35em] text-xs blood">GHI CHÚ / LIÊN TƯỞNG ĐẠI CHÚNG</div>
              <blockquote
                className="mt-6 font-display font-black uppercase leading-[1.2]"
                style={{ fontSize: "clamp(1.5rem, 4.4vw, 3.5rem)" }}
              >
                “TITAN KHÔNG PHẢI NGUYÊN NHÂN DUY NHẤT CỦA BI KỊCH. TRẬT TỰ XÃ HỘI MỚI LÀ THỨ BIẾN SỨC MẠNH THÀNH NỖI SỢ.”
              </blockquote>
              <p className="mt-6 font-condensed text-[15px] leading-[1.65]">
                Khi nói về vấn đề này, chúng tôi nghĩ tới cuộc cách mạng ai năm 2030 và cuộc cách mạng của Eren yeager trong Attack on titan vì cả hai đều bắt đầu từ mâu thuẫn giữa sức mạnh mới và trật tự cũ. Trong tác phẩm, Titan Power là một sức mạnh đủ để làm đảo lộn thế giới, nhưng chính cấu trúc xã hội đầy sợ hãi, thù hận và áp bức mới biến sức mạnh ấy thành bi kịch." 
              </p>
            </div>
          </Reveal>
        </div>

        {/* Block 04 */}
        <div className="mt-12 border-t-2 border-ink pt-12">
          <Reveal>
            <div className="relative border-2 border-ink bg-ink text-paper p-6 md:p-8 overflow-hidden">
              <div className="absolute top-4 right-4 font-display uppercase tracking-[0.3em] text-xs text-paper/70">04</div>
              <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
                <figure className="border-2 border-paper/60 overflow-hidden">
                  <div className="relative">
                    <img
                      src={rumblingImg}
                      alt="Rumbling và thế giới sụp đổ trong chiến tranh"
                      loading="lazy"
                      className="w-full h-[44vh] md:h-[56vh] object-cover img-news-red"
                    />
                    <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.12]" />
                    <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-[11px]">
                      RUMBLING · PHÁ VỠ TRẬT TỰ CŨ
                    </div>
                  </div>
                  <figcaption className="border-t border-paper/50 px-4 py-3 font-condensed uppercase tracking-[0.3em] text-[11px] text-paper/70">
                    ẢNH TƯ LIỆU · HẬU THỜI KỲ SỤP ĐỔ
                  </figcaption>
                </figure>

                <div className="space-y-5">
                  <h3 className="font-display font-black uppercase text-2xl md:text-3xl leading-[1.2]">
                    KHI TRẬT TỰ CŨ KHÔNG CÒN PHÙ HỢP
                  </h3>
                  <div className="space-y-2 font-display uppercase text-xl md:text-2xl leading-tight">
                    <div>1. LỰC LƯỢNG SẢN XUẤT PHÁT TRIỂN.</div>
                    <div>2. QUAN HỆ SẢN XUẤT CŨ KÌM HÃM.</div>
                    <div className="blood">3. CÁCH MẠNG TRỞ THÀNH TẤT YẾU.</div>
                  </div>
                  <p className="font-condensed text-[15px] leading-[1.65] text-paper/85">
                    Rumbling có thể được xem như hình ảnh cực đoan của việc phá bỏ một trật tự đã không còn khả năng duy trì tự do.
                    Liên hệ với Marx, khi lực lượng sản xuất phát triển vượt khỏi quan hệ sản xuất cũ, xã hội sẽ xuất hiện nhu cầu
                    chuyển hóa lịch sử.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Block 05 */}
        <div className="mt-12 border-t-2 border-ink pt-12">
          <Reveal>
            <div className="border-2 border-ink bg-paper p-6 md:p-8">
              <div className="font-display uppercase tracking-[0.35em] text-xs blood">05</div>
              <h3 className="mt-2 font-display font-black uppercase text-3xl md:text-4xl leading-[1.2]">
                AI: GIẢI PHÓNG HAY <span className="blood">THỐNG TRỊ</span>?
              </h3>

              <div className="mt-6 grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-stretch">
                <div className="border border-ink p-5">
                  <div className="font-display uppercase tracking-[0.3em] text-xs blood">GIẢI PHÓNG</div>
                  <ul className="mt-4 space-y-2 font-condensed text-[14px] uppercase tracking-[0.2em]">
                    <li>Giảm lao động nặng nhọc</li>
                    <li>Tạo ra dư thừa của cải</li>
                    <li>Mở rộng khả năng sáng tạo</li>
                  </ul>
                </div>

                <div className="hidden md:flex items-center justify-center">
                  <div className="w-px h-full bg-ink" />
                </div>

                <div className="border border-ink p-5">
                  <div className="font-display uppercase tracking-[0.3em] text-xs blood">THỐNG TRỊ</div>
                  <ul className="mt-4 space-y-2 font-condensed text-[14px] uppercase tracking-[0.2em]">
                    <li>Tập trung quyền lực</li>
                    <li>Gia tăng <span className="blood">bất bình đẳng</span></li>
                    <li>Biến con người thành dữ liệu</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 font-condensed text-[15px] leading-[1.65]">
                AI không tốt hay xấu một cách tự nhiên. Nó trở thành công cụ giải phóng hay thống trị tùy thuộc vào
                cấu trúc xã hội đang <span className="blood font-bold">sở hữu</span> và vận hành nó.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Block 06 */}
        <div className="mt-12 border-t-2 border-ink pt-12">
          <Reveal>
            <div className="border-2 border-ink bg-paper overflow-hidden">
              <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-0">
                <div className="p-6 md:p-8">
                  <div className="font-display uppercase tracking-[0.35em] text-xs blood">06</div>
                  <h3 className="mt-2 font-display font-black uppercase text-3xl md:text-4xl leading-[1.2]">
                    TỰ DO LÀ ĐÍCH ĐẾN CUỐI CÙNG
                  </h3>
                  <p className="mt-4 font-condensed text-[15px] leading-[1.65]">
                    Eren không chỉ muốn phá hủy vì thù hận. Điều Eren thật sự muốn là phá vỡ một trật tự đã khiến tự do
                    trở nên bất khả thi. Cũng như AI năm 2030, vấn đề không nằm ở bản thân sức mạnh, mà nằm ở việc xã hội cũ
                    có còn đủ khả năng chứa đựng sức mạnh ấy hay không. Sau mọi cuộc cách mạng, điều con người tìm kiếm không chỉ
                    là công nghệ hay quyền lực, mà là quyền được tự do tồn tại như một con người.
                  </p>
                  <blockquote
                    className="mt-6 font-display font-black uppercase leading-[1.2]"
                    style={{ fontSize: "clamp(1.4rem, 4.6vw, 3.6rem)" }}
                  >
                    “ĐIỀU CON NGƯỜI TÌM KIẾM SAU MỌI CUỘC CÁCH MẠNG
                    <br />KHÔNG CHỈ LÀ SỨC MẠNH,
                    <br />MÀ LÀ <span className="blood">TỰ DO</span>.”
                  </blockquote>
                </div>

                <figure className="border-t-2 border-ink lg:border-t-0 lg:border-l-2">
                  <div className="relative h-full">
                    <img
                      src={oceanFreedomImg}
                      alt="Eren nhìn ra biển và bầu trời, biểu tượng của tự do"
                      loading="lazy"
                      className="w-full h-[40vh] md:h-full object-cover img-news"
                    />
                    <div className="absolute inset-0 mix-blend-multiply halftone opacity-[0.08]" />
                    <div className="absolute top-4 left-4 brut-red px-3 py-1 font-display uppercase tracking-[0.3em] text-[11px]">
                      TỰ DO · ĐÍCH ĐẾN
                    </div>
                  </div>
                  <figcaption className="border-t-2 border-ink bg-paper px-4 py-3 font-condensed uppercase tracking-[0.3em] text-[11px] text-muted-foreground">
                    BIỂN CẢ KHÔNG CHỈ LÀ ĐÍCH ĐẾN. NÓ LÀ HÌNH ẢNH CỦA TỰ DO.
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 border-t-2 border-ink pt-12">
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="#top" className="brut-red px-7 py-4 font-display uppercase tracking-[0.3em] text-sm">↑ Bắt Đầu Lại</a>
              <a href="#yeager" className="brut px-7 py-4 font-display uppercase tracking-[0.3em] text-sm">Đọc Lại Phần VI</a>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-0 border-2 border-ink text-left">
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

          <div className="mt-10 font-condensed uppercase tracking-[0.35em] text-[11px] text-muted-foreground text-center">
            Tờ Báo Của Cách Mạng · Tờ khổ rộng triết học về AI, tư bản và thế kỷ tới
          </div>
        </div>
      </div>
    </section>
  );
}
