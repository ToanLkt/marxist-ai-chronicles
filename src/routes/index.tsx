import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/site/Loader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WorldSection } from "@/components/site/WorldSection";
import { ContradictionSection } from "@/components/site/ContradictionSection";
import { CrisisSection } from "@/components/site/CrisisSection";
import { RevolutionSection } from "@/components/site/RevolutionSection";
import { FuturesSection } from "@/components/site/FuturesSection";
import { FinalSection } from "@/components/site/FinalSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI 2030 — Khi Lực Lượng Sản Xuất Mới Va Chạm Với Cấu Trúc Xã Hội Cũ" },
      { name: "description", content: "Tờ báo khổ lớn theo phong cách brutalist về AI, chủ nghĩa tư bản, xung đột giai cấp và tương lai xã hội năm 2030." },
      { property: "og:title", content: "AI 2030 — Tờ Báo Của Cách Mạng" },
      { property: "og:description", content: "Bài xã luận điều tra về AI, quyền sở hữu, lao động và cách mạng." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <main className="relative bg-paper text-foreground">
        <Nav />
        <Hero />
        <WorldSection />
        <ContradictionSection />
        <CrisisSection />
        <RevolutionSection />
        <FuturesSection />
        <FinalSection />
      </main>
    </>
  );
}
