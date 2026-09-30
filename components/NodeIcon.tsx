export type NodeIconType =
  | "laptop"
  | "phone"
  | "chip"
  | "server"
  | "water"
  | "cattle"
  | "education"
  | "broadcast";

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
    case "water":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <path
            d="M12 3.5c3 3.8 6 7.3 6 10.7a6 6 0 1 1-12 0c0-3.4 3-6.9 6-10.7Z"
            {...common}
          />
          <path d="M9.3 14.3a2.8 2.8 0 0 0 2.8 2.8" {...common} />
        </svg>
      );
    case "cattle":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <path d="M4 8.5 2.5 6M20 8.5 21.5 6" {...common} />
          <path
            d="M6 9.5c0-2 1.8-3.2 6-3.2s6 1.2 6 3.2c0 3-1.2 4-1.2 6.3a4.8 4.8 0 0 1-9.6 0c0-2.3-1.2-3.3-1.2-6.3Z"
            {...common}
          />
          <circle cx="9.7" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.3" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
          <path d="M10.3 14.5h3.4" {...common} />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" {...common} />
          <path d="M6.5 11v4.2c0 1.5 2.5 2.8 5.5 2.8s5.5-1.3 5.5-2.8V11" {...common} />
          <path d="M21.5 9v5.5" {...common} />
        </svg>
      );
    case "broadcast":
      return (
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-ink" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
          <path d="M8.3 8.3a5.2 5.2 0 0 0 0 7.4M15.7 8.3a5.2 5.2 0 0 1 0 7.4" {...common} />
          <path d="M5.1 5.1a9.5 9.5 0 0 0 0 13.8M18.9 5.1a9.5 9.5 0 0 1 0 13.8" {...common} />
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
