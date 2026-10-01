"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED_MS = 55;
const DELETE_SPEED_MS = 35;
const HOLD_MS = 1800;
const PAUSE_BEFORE_TYPE_MS = 300;

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Typewriter({ words }: { words: string[] }) {
  const reducedMotion = prefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(reducedMotion ? words[0] ?? "" : "");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "pausing">(
    "typing"
  );

  useEffect(() => {
    if (reducedMotion) return;

    const current = words[wordIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED_MS
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_MS);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(text.slice(0, -1)),
          DELETE_SPEED_MS
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_BEFORE_TYPE_MS);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [text, phase, wordIndex, words, reducedMotion]);

  return (
    <span className="inline-flex items-baseline">
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.85em] w-[0.08em] animate-pulse bg-accent align-[-0.05em]"
      />
    </span>
  );
}
