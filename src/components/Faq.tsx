"use client";

import { useRef, useState } from "react";

const ITEMS = [
  { q: "¿Qué tipo de empresas pueden trabajar con AwarenessAI?", a: "Pequeñas y medianas empresas, negocios locales, profesionales y empresas de servicios. Si tenés procesos, probablemente haya algo que mejorar." },
  { q: "¿Necesito saber de Inteligencia Artificial?", a: "No. Nuestro trabajo es entender tu negocio y traducir la tecnología a resultados concretos. Vos ponés el conocimiento del negocio." },
  { q: "¿Qué procesos se pueden automatizar?", a: "Atención de consultas, seguimiento de clientes, tareas administrativas, reportes, recordatorios y conexión entre herramientas que hoy no se comunican." },
  { q: "¿Todas las soluciones utilizan IA?", a: "No. A veces la mejor solución es una automatización simple o un sistema interno. La IA es una herramienta más, no un objetivo." },
  { q: "¿Cuánto tarda una implementación?", a: "Depende del alcance. Solemos empezar con un prototipo rápido para validar el impacto antes de una implementación completa." },
  { q: "¿Pueden integrarse con herramientas que ya usamos?", a: "Sí. Trabajamos con WhatsApp, planillas, CRMs y las herramientas que ya forman parte de tu operación." },
  { q: "¿Cuánto cuesta desarrollar una solución?", a: "Depende del problema y del impacto esperado. La primera conversación y el análisis inicial no tienen costo ni compromiso." },
  { q: "¿Cómo sé si mi empresa tiene algo que automatizar?", a: "No necesitás saberlo. Nuestro trabajo comienza justamente analizando cómo funciona hoy tu empresa y detectando oportunidades donde la tecnología pueda generar impacto.", highlight: true },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section id="faq" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)" }}>
      <div style={{ maxWidth: 840, margin: "0 auto" }}>
        <div data-reveal style={{ marginBottom: "clamp(36px,5vw,52px)" }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: 16 }}>— Preguntas frecuentes</div>
          <h2 style={{ margin: 0, fontSize: "clamp(26px,3.6vw,42px)", lineHeight: 1.1, letterSpacing: "-.02em", fontWeight: 700 }}>Lo que suelen preguntarnos.</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  background: item.highlight ? "linear-gradient(135deg,rgba(124,58,237,.1),rgba(37,99,235,.05))" : "#0B0E18",
                  border: `1px solid ${item.highlight ? "rgba(139,92,246,.28)" : "rgba(255,255,255,.07)"}`,
                }}
              >
                <button
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "20px 22px", background: "none", border: "none", color: "#F8FAFC", fontSize: 16, fontWeight: 600, textAlign: "left", cursor: "pointer", fontFamily: "inherit" }}
                >
                  {item.q}
                  <span style={{ flex: "none", transition: "transform .3s", color: "#8B5CF6", transform: isOpen ? "rotate(135deg)" : "rotate(0deg)" }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  ref={(el) => {
                    panels.current[i] = el;
                  }}
                  style={{ maxHeight: isOpen ? (panels.current[i]?.scrollHeight ?? 400) : 0, overflow: "hidden", transition: "max-height .35s ease" }}
                >
                  <p style={{ margin: 0, padding: "0 22px 22px", fontSize: 15, lineHeight: 1.6, color: item.highlight ? "#CBD5E1" : "#94A3B8" }}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
