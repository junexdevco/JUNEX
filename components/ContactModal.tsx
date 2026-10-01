"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const WHATSAPP_URL = "https://wa.me/qr/JOX2EIKCEJQEG1";

export default function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- detecta montaje en cliente para el portal, sin alternativa sin efecto
    setMounted(true);
  }, []);

  const handleClose = () => {
    setName("");
    setPhone("");
    setEmail("");
    onClose();
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-ink/10 bg-paper p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
          Hablemos
        </span>
        <h2 id="contact-modal-title" className="font-display mt-2 text-2xl text-ink">
          Cuéntanos tu proyecto
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Déjanos tus datos y te escribimos por WhatsApp.
        </p>

        <form
          className="mt-6 space-y-3"
          onSubmit={(e) => {
            e.preventDefault();

            const message = `Hola JUNEX, soy ${name}.\nTeléfono: ${phone}\nCorreo: ${email}\n\nQuiero conversar sobre un proyecto.`;
            const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank", "noopener,noreferrer");
            handleClose();
          }}
        >
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Nombre
            </label>
            <input
              id="contact-name"
              type="text"
              required
              autoFocus
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/40"
            />
          </div>

          <div>
            <label htmlFor="contact-phone" className="sr-only">
              Teléfono
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/40"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="sr-only">
              Correo
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/40"
            />
          </div>

          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-full border border-ink/15 px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-ink/40"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 rounded-full bg-accent px-4 py-2.5 font-mono text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
}
