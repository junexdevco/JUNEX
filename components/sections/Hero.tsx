import Globe from "@/components/Globe";
import Typewriter from "@/components/Typewriter";
import ProductsBanner from "@/components/ProductsBanner";

const ROTATING_WORDS = ["necesita", "escala", "convierte", "conecta"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <div className="bg-glow-accent absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-soft px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink/70">
          Software a medida · Infraestructura lista para producción
        </span>

        <h1 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Construimos el software
          <br />
          que tu negocio{" "}
          <span className="inline-block translate-y-[0.1em] bg-accent px-2 py-1 leading-[0.95] text-ink">
            <Typewriter words={ROTATING_WORDS} />
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-ink/70 sm:text-xl">
          JUNEX diseña, desarrolla y despliega productos digitales a la medida
          — desde el primer prototipo hasta una infraestructura que escala sin
          fricción.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-ink px-7 py-3 font-mono text-sm text-paper transition-transform hover:-translate-y-0.5"
          >
            Cuéntanos tu proyecto
          </a>
          <a
            href="#producto"
            className="rounded-full border border-ink/20 px-7 py-3 font-mono text-sm text-ink transition-colors hover:border-ink/50"
          >
            Ver qué hacemos
          </a>
        </div>

        <div className="bg-grid-dark relative mt-20 flex aspect-[16/9] w-full max-w-4xl items-center justify-center overflow-hidden rounded-3xl border border-black/10 bg-ink">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(46,255,155,0.12),transparent_70%)]" />
          <div className="relative h-[70%] max-h-80 aspect-square">
            <Globe />
          </div>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-paper/40">
            Infraestructura desplegada globalmente
          </span>
        </div>

        <ProductsBanner />
      </div>
    </section>
  );
}
