"use client";

import { useState } from "react";
import { links } from "@/config";

const ArrowUpRight = ({ size, style }: { size: number; style?: React.CSSProperties }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={size > 20 ? 1.8 : 2} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="8 7 17 7 17 16" />
  </svg>
);

export default function FinalCta() {
  const [clicked, setClicked] = useState(false);

  return (
    <section style={{ position: "relative", padding: "clamp(80px,10vw,140px) clamp(18px,5vw,48px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "80vw", height: "80vw", maxWidth: 900, maxHeight: 900, background: "radial-gradient(circle,rgba(124,58,237,.22),rgba(6,182,212,.1) 45%,transparent 68%)", filter: "blur(30px)", animation: "glowpulse 10s ease-in-out infinite" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(148,163,184,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.045) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%,#000,transparent 75%)" }} />
      </div>
      <div data-reveal style={{ position: "relative", zIndex: 1, maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        {!clicked ? (
          <>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}>
              <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
                <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#2DD4BF", opacity: 0.75, animation: "glowpulse 1.8s ease-in-out infinite" }} />
                <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "#22D3EE" }} />
              </span>
              <span className="mono" style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#94A3B8" }}>Disponibles para nuevos proyectos</span>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setClicked(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setClicked(true);
                }
              }}
              style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 22, cursor: "pointer" }}
            >
              <h2 style={{ margin: 0, fontSize: "clamp(30px,5vw,58px)", lineHeight: 1.05, letterSpacing: "-.025em", fontWeight: 700, textWrap: "balance" }}>
                Trabajemos juntos
                <br />
                <span style={{ color: "#64748B" }}>en tu próximo gran cambio.</span>
              </h2>
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, color: "#F8FAFC" }}>
                <div className="cta-ring" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid rgba(255,255,255,.16)" }} />
                <ArrowUpRight size={26} />
              </div>
            </div>
            <p style={{ margin: "26px auto 0", maxWidth: 460, fontSize: 15, lineHeight: 1.6, color: "#64748B" }}>
              Contanos cómo trabajás hoy. Nosotros buscamos dónde la tecnología puede generar impacto.
            </p>
          </>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, animation: "ctaIn .6s cubic-bezier(.16,1,.3,1)" }}>
            <div>
              <div className="mono" style={{ fontSize: 12, letterSpacing: ".28em", textTransform: "uppercase", color: "#64748B", marginBottom: 8 }}>Perfecto</div>
              <h3 style={{ margin: 0, fontSize: "clamp(24px,3.4vw,36px)", fontWeight: 400, letterSpacing: "-.01em", color: "#F8FAFC" }}>Agendemos una llamada.</h3>
            </div>
            <a
              href={links.cal}
              data-cta="final_cta_call"
              className="cta-call"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "16px 30px", borderRadius: 999, border: "1px solid rgba(139,92,246,.4)", background: "linear-gradient(90deg,#7C3AED,#3B82F6)", color: "#fff", fontSize: 16, fontWeight: 600, boxShadow: "0 16px 44px -10px rgba(124,58,237,.7)", transition: "transform .2s,box-shadow .2s" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar llamada
              <ArrowUpRight size={18} />
            </a>
            <span className="mono" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#475569" }}>Charla de 15 minutos, sin compromiso</span>
          </div>
        )}
      </div>
    </section>
  );
}
