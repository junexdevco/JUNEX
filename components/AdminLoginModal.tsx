"use client";

import { useEffect, useState } from "react";

export default function AdminLoginModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [token, setToken] = useState("");
  const [attempted, setAttempted] = useState(false);

  const handleClose = () => {
    setToken("");
    setAttempted(false);
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

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/60 px-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-login-title"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-ink/10 bg-paper p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="font-mono text-xs uppercase tracking-widest text-ink/50">
          Acceso restringido
        </span>
        <h2
          id="admin-login-title"
          className="font-display mt-2 text-2xl text-ink"
        >
          Panel de administración
        </h2>
        <p className="mt-2 text-sm text-ink/60">
          Este acceso es exclusivo para administradores de JUNEX. Ingresa tu
          token de autenticación.
        </p>

        <form
          className="mt-6"
          onSubmit={(e) => {
            e.preventDefault();
            setAttempted(true);
          }}
        >
          <label htmlFor="admin-token" className="sr-only">
            Token de autenticación
          </label>
          <input
            id="admin-token"
            type="password"
            autoComplete="off"
            autoFocus
            placeholder="Token de autenticación"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
              setAttempted(false);
            }}
            className="w-full rounded-lg border border-ink/15 bg-paper-soft px-4 py-2.5 font-mono text-sm text-ink outline-none placeholder:text-ink/30 focus:border-ink/40"
          />

          {attempted && (
            <p className="mt-3 font-mono text-xs text-ink/50">
              Acceso denegado. Este panel es solo para administradores
              autorizados de JUNEX.
            </p>
          )}

          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 rounded-full border border-ink/15 px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:border-ink/40"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 rounded-full bg-ink px-4 py-2.5 font-mono text-sm text-paper transition-colors hover:bg-ink-soft"
            >
              Verificar acceso
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
