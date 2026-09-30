// "J" en estilo circuito para el wordmark de JUNEX: trazo principal en
// tinta (igual color que el resto del texto) con ramificaciones y nodos
// en el verde de acento de la marca. Dibujo propio en SVG, sin assets
// de terceros.
export default function JunexMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 36"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 3 L20 23 C20 29 16 32 10.5 32 C6.5 32 3.5 30 2.5 27"
        fill="none"
        stroke="currentColor"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink"
      />

      <g
        className="text-accent"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M20 9 H25 V5" />
        <path d="M20 17 H26 V21" />
        <path d="M9.5 30 V34 H5.5" />

        {/* trazo con flujo animado */}
        <path
          d="M20 9 H25 V5"
          strokeWidth="1.4"
          strokeDasharray="3 20"
          className="animate-flow-sm"
        />
      </g>

      <circle cx="25" cy="5" r="1.6" className="fill-current text-accent animate-pulse" />
      <circle
        cx="26"
        cy="21"
        r="1.6"
        className="fill-current text-accent animate-pulse"
        style={{ animationDelay: "0.4s" }}
      />
      <circle
        cx="5.5"
        cy="34"
        r="1.6"
        className="fill-current text-accent animate-pulse"
        style={{ animationDelay: "0.8s" }}
      />
    </svg>
  );
}
