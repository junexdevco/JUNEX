import NodeIcon, { type NodeIconType } from "@/components/NodeIcon";

type Project = {
  name: string;
  icon: NodeIconType;
  status: "En producción" | "En desarrollo";
  description: string;
  highlights: string[];
  stack: string;
};

const PROJECTS: Project[] = [
  {
    name: "AquaRural Pro",
    icon: "water",
    status: "En producción",
    description:
      "Plataforma SaaS multiempresa para administración, facturación y recaudo digital de acueductos veredales en Colombia.",
    highlights: [
      "Pagos con Wompi (PSE, tarjeta, Nequi) y carné QR firmado digitalmente",
      "Facturación masiva en 1 clic y carga de suscriptores vía Excel",
      "App móvil en React Native/Expo con GPS, facturas en PDF y notificaciones",
    ],
    stack: "Node.js · MongoDB · React · React Native",
  },
  {
    name: "Asogacentro",
    icon: "cattle",
    status: "En producción",
    description:
      "Plataforma replicable (landing + admin + app) para asociaciones ganaderas, con gestión de asociados y aportes.",
    highlights: [
      "Pagos de aportes con Wompi y estado automático (al día / en mora)",
      "Módulos propios: Ganadero TV, mercado ganadero y eventos con RSVP",
      "Marca, logo y color configurables por asociación desde el panel admin",
    ],
    stack: "Node.js · MongoDB · React · React Native · Firebase",
  },
  {
    name: "Ganadería Berlín",
    icon: "cattle",
    status: "En desarrollo",
    description:
      "Marketplace privado para comercialización de ganado bovino de registro, genética e insumos.",
    highlights: [
      "Catálogo por raza con ficha genealógica y certificación Asocebu",
      "Checkout con Wompi (tarjeta, PSE, Nequi) y emails transaccionales",
      "Panel admin con KPIs de ventas online vs. presenciales en finca",
    ],
    stack: "Next.js · Node.js · MongoDB · Wompi",
  },
  {
    name: "San.tv",
    icon: "broadcast",
    status: "En producción",
    description:
      "Sistema de noticias para San.tv, medio de comunicación del Huila con 87.000 seguidores.",
    highlights: [
      "Panel de administración y publicación de noticias en tiempo real",
      "Actualización automática sin refresh y filtros por categoría",
      "Costo operativo mínimo, con capacidad hasta 50.000 visitas/mes",
    ],
    stack: "JavaScript · Firebase · Vercel",
  },
];

const STATUS_STYLES: Record<Project["status"], string> = {
  "En producción": "bg-accent/20 text-ink",
  "En desarrollo": "bg-ink/10 text-ink/70",
};

export default function Projects() {
  return (
    <section id="proyectos" className="bg-paper px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
          Casos reales
        </span>
        <h2 className="font-display mt-4 max-w-2xl text-4xl leading-tight text-ink sm:text-5xl">
          Proyectos que hemos construido
        </h2>
        <p className="mt-4 max-w-2xl text-ink/65">
          Plataformas propias y de clientes, en producción real — no
          mockups.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.name}
              className="flex flex-col rounded-2xl border border-ink/10 bg-paper-soft p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-paper">
                    <NodeIcon type={project.icon} />
                  </span>
                  <h3 className="font-display text-xl text-ink">
                    {project.name}
                  </h3>
                </div>
                <span
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${STATUS_STYLES[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-ink/65">{project.description}</p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2.5 text-sm text-ink/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <p className="mt-6 border-t border-ink/10 pt-4 font-mono text-xs text-ink/40">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
