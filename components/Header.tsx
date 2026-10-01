"use client";

import { useEffect, useState } from "react";
import AdminLoginModal from "@/components/AdminLoginModal";
import ContactModal from "@/components/ContactModal";

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
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
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

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setLoginOpen(true)}
            className="hidden items-center whitespace-nowrap rounded-full border border-ink/15 px-4 py-2 font-mono text-sm text-ink transition-colors hover:border-ink/40 md:flex"
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="flex items-center whitespace-nowrap rounded-full bg-ink px-4 py-2 font-mono text-sm text-paper transition-colors hover:bg-ink-soft"
          >
            Hablemos
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/15 md:hidden"
          >
            <span
              className={`h-[1.5px] w-4 bg-ink transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-4 bg-ink transition-transform ${menuOpen ? "translate-y-[-3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-sm text-ink/70 transition-colors hover:bg-paper-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              setLoginOpen(true);
            }}
            className="mt-3 flex w-full items-center justify-center rounded-full border border-ink/15 px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-ink/40"
          >
            Iniciar sesión
          </button>
        </div>
      )}

      <AdminLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  );
}
