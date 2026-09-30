// Trazos que "viajan" entre los nodos del hero, dibujados sobre un lienzo
// propio (no reutiliza ningún asset de terceros). El viewBox usa unidades
// que aproximan el tamaño real del contenedor del hero en escritorio.
const PATHS = [
  // chip (abajo-izq) -> celular (arriba-der)
  "M 20 460 C 300 460, 480 160, 960 40",
  // laptop (arriba-izq) -> servidor (abajo-der)
  "M 40 40 C 300 40, 520 640, 980 464",
];

export default function ConnectorLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1000 800"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 hidden h-full w-full text-accent sm:block ${className ?? ""}`}
      aria-hidden="true"
    >
      {PATHS.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2" />
          <path
            d={d}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="40 900"
            className="animate-flow"
            style={{ animationDelay: `${i * -1.4}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
