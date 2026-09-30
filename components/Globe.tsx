"use client";

import { useEffect, useRef } from "react";

// Globo de puntos generado con canvas (distribución Fibonacci sobre una
// esfera + rotación), dibujado desde cero — no reutiliza ningún asset ni
// código de terceros.
export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const POINT_COUNT = 420;
    const points: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < POINT_COUNT; i++) {
      const y = 1 - (i / (POINT_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = golden * i;
      points.push({
        x: Math.cos(theta) * radiusAtY,
        y,
        z: Math.sin(theta) * radiusAtY,
      });
    }

    let angle = 0;
    let frameId = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      if (!canvas) return;
      const size = canvas.parentElement
        ? Math.min(canvas.parentElement.clientWidth, canvas.parentElement.clientHeight)
        : 400;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    }

    function draw() {
      if (!canvas || !ctx) return;
      const size = canvas.width;
      const radius = size * 0.38;
      const cx = size / 2;
      const cy = size / 2;

      ctx.clearRect(0, 0, size, size);

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const projected = points.map((p) => {
        const x = p.x * cosA - p.z * sinA;
        const z = p.x * sinA + p.z * cosA;
        return { x, y: p.y, z };
      });

      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const depth = (p.z + 1) / 2; // 0..1
        const screenX = cx + p.x * radius;
        const screenY = cy + p.y * radius;
        const dotSize = (0.6 + depth * 1.6) * dpr;
        const opacity = 0.15 + depth * 0.75;

        ctx.beginPath();
        ctx.arc(screenX, screenY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(46, 255, 155, ${opacity.toFixed(3)})`;
        ctx.fill();
      }

      // Anillo sutil delimitando el globo
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(230, 229, 222, 0.12)";
      ctx.lineWidth = dpr;
      ctx.stroke();
    }

    function tick() {
      angle += 0.0032;
      draw();
      frameId = requestAnimationFrame(tick);
    }

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    if (!prefersReducedMotion) {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      if (frameId) cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      aria-hidden="true"
    />
  );
}
