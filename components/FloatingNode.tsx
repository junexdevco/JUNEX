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
      className={`absolute flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-paper shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] sm:h-14 sm:w-14 sm:rounded-2xl ${className ?? ""}`}
      aria-hidden="true"
    >
      <NodeIcon type={type} />
      <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-paper bg-accent" />
    </div>
  );
}
