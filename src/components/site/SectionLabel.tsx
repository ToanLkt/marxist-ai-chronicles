export function SectionLabel({ index, label, accent = "blue" }: { index: string; label: string; accent?: "blue" | "red" }) {
  const color = accent === "red" ? "text-accent text-glow-crimson" : "text-primary text-glow";
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.4em]">
      <span className={color}>{index}</span>
      <span className="h-px w-12 bg-border" />
      <span className="text-muted-foreground">{label}</span>
    </div>
  );
}
