// Línea de conexión animada (trazo con flujo) entre un nodo y el bloque
// de despliegue, dibujada con SVG + CSS propios.
export default function ConnectorLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 140"
      className={`pointer-events-none absolute text-accent ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M 10 10 C 90 10, 40 130, 210 130"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="3"
      />
      <path
        d="M 10 10 C 90 10, 40 130, 210 130"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="24 200"
        className="animate-flow"
      />
    </svg>
  );
}
