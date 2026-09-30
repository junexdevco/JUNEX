const PRODUCTS = [
  "Proyecto A",
  "Proyecto B",
  "Proyecto C",
  "Proyecto D",
  "Proyecto E",
];

export default function ProductsBanner() {
  return (
    <div className="mx-auto mt-14 flex w-full max-w-4xl flex-col items-center gap-6 rounded-2xl border border-ink/10 bg-paper-soft px-8 py-6 sm:flex-row sm:justify-between">
      <span className="font-mono text-xs uppercase leading-relaxed tracking-widest text-ink/50 sm:text-left">
        Productos que hemos
        <br className="hidden sm:block" /> construido
      </span>

      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-end">
        {PRODUCTS.map((name) => (
          <li
            key={name}
            className="font-display text-lg tracking-wide text-ink/70 transition-colors hover:text-ink"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
