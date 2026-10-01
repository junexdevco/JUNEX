import Typewriter from "@/components/Typewriter";
import ProductsBanner from "@/components/ProductsBanner";
import WireframeGlobe from "@/components/WireframeGlobe";
import FloatingNode from "@/components/FloatingNode";
import ConnectorLine from "@/components/ConnectorLine";
import DeployTerminal from "@/components/DeployTerminal";

const ROTATING_WORDS = ["necesita", "escala", "convierte", "conecta"];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-paper">
      <div className="bg-glow-accent absolute inset-0" />
      <WireframeGlobe />

      <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-28 sm:pt-36">
        <div className="relative">
          <ConnectorLine />
          <FloatingNode type="laptop" className="left-0 top-2 hidden sm:flex" />
          <FloatingNode type="phone" className="right-0 top-2 hidden sm:flex" />
          <FloatingNode
            type="chip"
            className="-left-6 top-116 hidden -translate-y-1/2 sm:flex lg:-left-16"
          />
          <FloatingNode
            type="server"
            className="-right-6 top-116 hidden -translate-y-1/2 sm:flex lg:-right-16"
          />

          <div className="flex flex-col items-center text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper-soft px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-ink/70">
              Software a medida · Infraestructura lista para producción
            </span>

            <h1 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
              Construimos el software
              <br />
              que tu negocio{" "}
              <span className="inline-block text-accent">
                <Typewriter words={ROTATING_WORDS} />
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-ink/70 sm:text-xl">
              JUNEX diseña, desarrolla y despliega productos digitales a la
              medida — desde el primer prototipo hasta una infraestructura
              que escala sin fricción.
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

            <div className="relative mt-20 flex justify-center">
              <DeployTerminal />
            </div>
          </div>
        </div>

        <ProductsBanner />
      </div>
    </section>
  );
}
