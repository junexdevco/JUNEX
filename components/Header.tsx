"use client";

import { useEffect, useState } from "react";
import AdminLoginModal from "@/components/AdminLoginModal";

const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Producto", href: "#producto" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Nosotros", href: "#nosotros" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-paper/90 backdrop-blur"
          : "border-b border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-4 px-6 py-4 md:grid-cols-[minmax(min-content,14rem)_auto_minmax(min-content,18rem)]">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl tracking-wide text-ink">
            JUNEX
          </span>
        </a>

        <nav className="hidden justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="hidden items-center whitespace-nowrap rounded-full border border-ink/15 px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-ink/40 md:flex"
          >
            Iniciar sesión
          </button>
          <a
            href="#contacto"
            className="flex items-center whitespace-nowrap rounded-full bg-ink px-4 py-2 font-mono text-sm text-paper transition-colors hover:bg-ink-soft"
          >
            Hablemos
          </a>
        </div>
      </div>

      <AdminLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </header>
  );
}
