const ITEMS = [
  {
    title: "Diseño a medida",
    body: "Cada producto parte de tu operación real, no de una plantilla. Arquitectura y UX pensadas para tu equipo y tus usuarios.",
  },
  {
    title: "Entrega continua",
    body: "Ciclos cortos con entregables visibles desde la primera semana, para que valides avances sin sorpresas al final.",
  },
  {
    title: "Escala sin reescribir",
    body: "Construimos sobre bases que aguantan crecimiento: código mantenible, infraestructura versionada y observabilidad desde el día uno.",
  },
];

export default function NextGen() {
  return (
    <section id="producto" className="bg-paper-soft px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
          Software de nueva generación para equipos que quieren avanzar rápido
        </h2>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.title}>
              <div className="mb-4 h-1 w-10 bg-accent" />
              <h3 className="font-mono text-base text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
