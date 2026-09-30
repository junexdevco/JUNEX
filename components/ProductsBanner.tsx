import NodeIcon, { type NodeIconType } from "@/components/NodeIcon";

const PRODUCTS: { name: string; icon: NodeIconType }[] = [
  { name: "AquaRural", icon: "water" },
  { name: "Asogacentro", icon: "cattle" },
  { name: "Ganadería Berlín", icon: "marketplace" },
  { name: "San.tv", icon: "broadcast" },
];

// Se duplica la lista para que el marquee haga loop sin costuras.
const TRACK = [...PRODUCTS, ...PRODUCTS];

export default function ProductsBanner() {
  return (
    <div className="mx-auto mt-14 flex w-full max-w-4xl flex-col items-center gap-6 overflow-hidden rounded-2xl border border-ink/10 bg-paper-soft px-8 py-6 sm:flex-row">
      <span className="shrink-0 font-mono text-xs uppercase leading-relaxed tracking-widest text-ink/50 sm:text-left">
        Productos que hemos
        <br className="hidden sm:block" /> construido
      </span>

      <div
        className="group relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        aria-hidden="false"
      >
        <ul className="animate-marquee group-hover:[animation-play-state:paused] flex w-max items-center gap-10">
          {TRACK.map((product, i) => (
            <li
              key={`${product.name}-${i}`}
              className="flex shrink-0 items-center gap-2 font-display text-lg tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              <NodeIcon type={product.icon} />
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
