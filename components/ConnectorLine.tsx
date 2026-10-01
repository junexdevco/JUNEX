// Trazos que "viajan" entre los nodos del hero, dibujados sobre un lienzo
// propio (no reutiliza ningún asset de terceros). Hay dos juegos de
// coordenadas porque los nodos se reposicionan en móvil: el viewBox de
// cada <svg> aproxima el tamaño real del contenedor del hero en ese
// breakpoint.
const DESKTOP_PATHS = [
  // chip (abajo-izq) -> celular (arriba-der)
  "M 20 460 C 300 460, 480 160, 960 40",
  // laptop (arriba-izq) -> servidor (abajo-der)
  "M 40 40 C 300 40, 520 640, 980 464",
];

const MOBILE_PATHS = [
  // chip (abajo-izq) -> celular (arriba-der)
  "M 28 686 C 150 686, 200 360, 307 28",
  // laptop (arriba-izq) -> servidor (abajo-der)
  "M 20 28 C 150 28, 200 360, 299 686",
];

function Paths({ paths }: { paths: string[] }) {
  return (
    <>
      {paths.map((d, i) => (
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
    </>
  );
}

export default function ConnectorLine({ className }: { className?: string }) {
  return (
    <>
      <svg
        viewBox="0 0 330 1076"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute inset-0 block h-full w-full text-accent sm:hidden ${className ?? ""}`}
        aria-hidden="true"
      >
        <Paths paths={MOBILE_PATHS} />
      </svg>

      <svg
        viewBox="0 0 1000 800"
        preserveAspectRatio="none"
        className={`pointer-events-none absolute inset-0 hidden h-full w-full text-accent sm:block ${className ?? ""}`}
        aria-hidden="true"
      >
        <Paths paths={DESKTOP_PATHS} />
      </svg>
    </>
  );
}
