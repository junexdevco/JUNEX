// Esfera "wireframe" decorativa de fondo, dibujada con SVG propio
// (elipses de latitud/longitud), sin reutilizar ningún asset de terceros.
export default function WireframeGlobe() {
  const latitudes = [0.92, 0.72, 0.42, 0, -0.42, -0.72, -0.92];

  return (
    <svg
      viewBox="0 0 1000 1000"
      className="pointer-events-none absolute left-1/2 top-0 h-[1000px] w-[1000px] -translate-x-1/2 text-ink/10"
      aria-hidden="true"
    >
      <circle
        cx="500"
        cy="500"
        r="480"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      {latitudes.map((t) => (
        <ellipse
          key={t}
          cx="500"
          cy={500 - 480 * t}
          rx={480 * Math.sqrt(1 - t * t)}
          ry={60 * Math.sqrt(1 - t * t) + 4}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}

      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI;
        const rx = Math.abs(480 * Math.cos(angle)) || 2;
        return (
          <ellipse
            key={i}
            cx="500"
            cy="500"
            rx={rx}
            ry="480"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
