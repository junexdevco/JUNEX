import NodeIcon, { type NodeIconType } from "@/components/NodeIcon";

export default function FloatingNode({
  type,
  className,
}: {
  type: NodeIconType;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-paper shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ${className ?? ""}`}
      aria-hidden="true"
    >
      <NodeIcon type={type} />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-paper bg-accent" />
    </div>
  );
}
