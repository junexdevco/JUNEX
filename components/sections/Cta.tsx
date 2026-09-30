export default function Cta() {
  return (
    <section
      id="contacto"
      className="dark bg-grid-dark relative overflow-hidden bg-ink px-6 py-28 text-center"
    >
      <div className="bg-glow-accent pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-display text-4xl leading-tight text-paper sm:text-5xl">
          ¿Listo para construir con JUNEX?
        </h2>
        <p className="mt-6 text-lg text-paper/65">
          Cuéntanos qué necesitas y te respondemos con una propuesta concreta
          en menos de 48 horas.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hola@junex.dev"
            className="rounded-full bg-accent px-7 py-3 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
          >
            Escribir a JUNEX
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-paper/20 px-7 py-3 font-mono text-sm text-paper transition-colors hover:border-paper/50"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
