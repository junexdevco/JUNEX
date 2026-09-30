const POINTS = [
  { label: "SLA dedicado", value: "99.9%" },
  { label: "Soporte directo", value: "Canal privado" },
  { label: "Entrega", value: "Sprints de 2 semanas" },
  { label: "Seguridad", value: "Revisión en cada release" },
];

export default function Enterprise() {
  return (
    <section id="enterprise" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">
          Listos para acompañar a empresas en crecimiento.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-ink/65">
          Trabajamos como una extensión de tu equipo: comunicación directa,
          entregas predecibles y una arquitectura que no te ata a nosotros.
        </p>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-10 sm:grid-cols-4">
          {POINTS.map((point) => (
            <div key={point.label}>
              <dt className="font-mono text-xs uppercase tracking-widest text-ink/50">
                {point.label}
              </dt>
              <dd className="font-display mt-2 text-2xl text-ink">
                {point.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
