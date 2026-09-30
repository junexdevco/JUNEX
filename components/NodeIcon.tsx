export type NodeIconType = "laptop" | "phone" | "chip" | "server";

// Iconos de línea propios (SVG, trazos simples) — un dispositivo distinto
// por nodo, sin reutilizar ningún set de iconos de terceros.
export default function NodeIcon({ type }: { type: NodeIconType }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "laptop":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <rect x="5" y="4.5" width="14" height="9.5" rx="1.2" {...common} />
          <path d="M3 17.5h18l-1.6 2.3a1 1 0 0 1-.82.4H5.42a1 1 0 0 1-.82-.4L3 17.5Z" {...common} />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" {...common} />
          <path d="M11 18.2h2" {...common} />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <rect x="4" y="4" width="16" height="6.5" rx="1.2" {...common} />
          <rect x="4" y="13.5" width="16" height="6.5" rx="1.2" {...common} />
          <circle cx="8" cy="7.25" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="8" cy="16.75" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "chip":
    default:
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <rect x="7" y="7" width="10" height="10" rx="1.4" {...common} />
          <path
            d="M9 2.5v2.3M12 2.5v2.3M15 2.5v2.3M9 19.2v2.3M12 19.2v2.3M15 19.2v2.3M2.5 9v2.3M2.5 12v2.3M2.5 15v2.3M19.2 9v2.3M19.2 12v2.3M19.2 15v2.3"
            {...common}
          />
        </svg>
      );
  }
}
