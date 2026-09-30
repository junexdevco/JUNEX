const COLUMNS = [
  {
    title: "Servicios",
    links: ["Desarrollo de producto", "Infraestructura", "Integraciones", "Modernización"],
  },
  {
    title: "Empresa",
    links: ["Nosotros", "Trabaja con nosotros", "Contacto"],
  },
  {
    title: "Legal",
    links: ["Términos", "Privacidad"],
  },
];

export default function Footer() {
  return (
    <footer id="nosotros" className="border-t border-ink/10 bg-paper px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-[1.2fr_repeat(3,1fr)]">
        <div>
          <span className="font-display text-2xl text-ink">JUNEX</span>
          <p className="mt-4 max-w-xs text-sm text-ink/60">
            Software e infraestructura a la medida para equipos que quieren
            construir rápido y sin deuda técnica.
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink/50">
              {col.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-5xl border-t border-ink/10 pt-6 font-mono text-xs text-ink/40">
        © {new Date().getFullYear()} JUNEX. Todos los derechos reservados.
      </div>
    </footer>
  );
}
