const LINES: { text: string; tone?: "comment" | "success" | "accent" }[] = [
  { text: "# Instalar JUNEX CLI", tone: "comment" },
  { text: "$ curl https://junex.dev/install.sh | bash" },
  { text: "" },
  { text: "# Desplegar tu proyecto en producción", tone: "comment" },
  { text: "$ junex deploy . \\" },
  { text: "    --env production \\" },
  { text: "    --region latam \\" },
  { text: "    --type web" },
  { text: "" },
  { text: "Compilando...  ✓", tone: "success" },
  { text: "Desplegando... Disponible en mi-proyecto.junex.app 🚀", tone: "accent" },
  { text: "" },
  { text: "# Conectar tu dominio propio", tone: "comment" },
  { text: "$ junex domains add app.tuempresa.com --attach-to mi-proyecto" },
  { text: "" },
  { text: "Listo en https://app.tuempresa.com ✨", tone: "accent" },
];

export default function DeployTerminal() {
  return (
    <div className="w-full max-w-lg overflow-hidden rounded-xl border border-black/10 bg-[#161616] text-left shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-1.5 bg-black px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-relaxed text-paper/80">
        {LINES.map((line, i) => (
          <div
            key={i}
            className={
              line.tone === "comment"
                ? "text-paper/40"
                : line.tone === "success"
                  ? "text-emerald-400"
                  : line.tone === "accent"
                    ? "text-accent"
                    : undefined
            }
          >
            {line.text || " "}
          </div>
        ))}
      </pre>
    </div>
  );
}
