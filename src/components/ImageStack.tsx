"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type StackSlide = {
  /** Short name shown under the stack and used in the button label. */
  label: string;
  alt: string;
  /** A photo... */
  src?: string;
  /** ...optionally cropped: scale around `origin` so one picture can yield different shots. */
  zoom?: number;
  origin?: string;
  /** ...or arbitrary markup (e.g. an illustrated UI) rendered at `designWidth` px and scaled to fit the card. */
  content?: ReactNode;
  designWidth?: number;
};

/** Renders children at a fixed design width and scales them to the card, centred vertically. */
function Scaled({ designWidth, children }: { designWidth: number; children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ scale: 0, top: 0 });

  useEffect(() => {
    const w = wrap.current;
    const i = inner.current;
    if (!w || !i) return;
    const measure = () => {
      const scale = w.clientWidth / designWidth;
      setFit({ scale, top: Math.max(0, (w.clientHeight - i.offsetHeight * scale) / 2) });
    };
    measure();
    const ro = new ResizeObserver(measure); // fires every frame while the card animates its size
    ro.observe(w);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div ref={wrap} className="stack-scaled" aria-hidden>
      <div ref={inner} style={{ position: "absolute", left: 0, top: fit.top, width: designWidth, transformOrigin: "top left", transform: `scale(${fit.scale})`, visibility: fit.scale ? "visible" : "hidden" }}>
        {children}
      </div>
    </div>
  );
}

/**
 * Two overlapping cards: a large one and a smaller, tilted one.
 * Clicking either advances the stack: the small card grows into the large slot and the next one enters.
 * Every slide is always mounted and only changes role, so the swap animates with CSS transitions.
 */
export default function ImageStack({ slides, sizes = "(max-width: 760px) 90vw, 460px" }: { slides: StackSlide[]; sizes?: string }) {
  const [active, setActive] = useState(0);
  const n = slides.length;
  const pad = (v: number) => String(v).padStart(2, "0");

  return (
    <div className="stack" role="group" aria-roledescription="carrusel" aria-label="Fotos y sistema de TH Barbershop">
      <div className="stack-stage">
        {slides.map((s, i) => {
          const offset = (i - active + n) % n;
          const role = offset === 0 ? "main" : offset === 1 ? "side" : "hidden";
          return (
            <button
              key={s.label}
              type="button"
              className={`stack-card stack-${role}`}
              onClick={() => setActive(role === "main" ? (active + 1) % n : i)}
              tabIndex={role === "hidden" ? -1 : 0}
              aria-hidden={role === "hidden"}
              aria-label={role === "main" ? `Ver ${slides[(i + 1) % n].label}` : `Ampliar: ${s.label}`}
            >
              {s.content ? (
                <Scaled designWidth={s.designWidth ?? 400}>{s.content}</Scaled>
              ) : (
                <span className="stack-zoom" style={{ transform: `scale(${s.zoom ?? 1})`, transformOrigin: s.origin ?? "50% 50%" }}>
                  <Image src={s.src ?? ""} alt={role === "hidden" ? "" : s.alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="stack-meta mono" aria-live="polite">
        <span>
          {pad(active + 1)} / {pad(n)} · {slides[active].label}
        </span>
        <span className="stack-hint">Tocá una imagen para ver la siguiente</span>
      </p>
    </div>
  );
}
