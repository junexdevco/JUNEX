export default function FloatingNode({ className }: { className?: string }) {
  return (
    <div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-paper shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ${className ?? ""}`}
      aria-hidden="true"
    >
      <div className="grid grid-cols-3 gap-[3px] rounded-md bg-ink p-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-[3px] w-[3px] rounded-full bg-accent/80" />
        ))}
      </div>
    </div>
  );
}
