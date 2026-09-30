const SERVICES = [
  {
    tag: "01",
    title: "Desarrollo de producto",
    body: "Aplicaciones web y móviles a medida, de cero a producción, con equipos dedicados a tu proyecto.",
  },
  {
    tag: "02",
    title: "Infraestructura y DevOps",
    body: "Despliegues automatizados, monitoreo y arquitectura cloud lista para escalar con tu tráfico.",
  },
  {
    tag: "03",
    title: "Integraciones y APIs",
    body: "Conectamos tus sistemas, pagos, CRMs y proveedores externos sin puntos ciegos.",
  },
  {
    tag: "04",
    title: "Modernización",
    body: "Migramos sistemas legacy a arquitecturas mantenibles sin detener la operación.",
  },
];

export default function CoreServices() {
  return (
    <section id="servicios" className="bg-grid-dark dark relative bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <span className="font-mono text-xs uppercase tracking-widest text-accent">
          Lo que hacemos
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-paper sm:text-5xl">
          El runtime completo para construir tu producto
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.tag} className="bg-ink p-8">
              <span className="font-mono text-sm text-accent">
                {service.tag}
              </span>
              <h3 className="font-display mt-4 text-2xl text-paper">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/60">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
