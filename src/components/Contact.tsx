"use client";

import { useState } from "react";
import { links } from "@/config";

const TEAM_SIZES = ["Solo yo", "2–10 personas", "11–50 personas", "51–200 personas", "Más de 200"];

const BULLETS = [
  "Contanos cómo trabaja hoy tu empresa",
  "Detectamos dónde la tecnología puede generar impacto",
  "Te respondemos por mail, sin compromiso",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "No pudimos enviar tu mensaje.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tu mensaje.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(#080B14,#060810)", borderTop: "1px solid rgba(255,255,255,.05)" }}>
      <div data-contact-grid style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "clamp(32px,6vw,80px)", alignItems: "start" }}>
        <div data-reveal>
          <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: 16 }}>— Contacto</div>
          <h2 style={{ margin: "0 0 28px", fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.05, letterSpacing: "-.025em", fontWeight: 700, textWrap: "balance" }}>Hablemos de tu negocio.</h2>
          <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {BULLETS.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 16, color: "#CBD5E1" }}>
                <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "rgba(255,255,255,.06)", color: "#94A3B8" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
          <p style={{ margin: "0 0 14px", fontSize: 15, color: "#64748B" }}>¿Preferís hablar directamente?</p>
          <a className="hv2" href={links.cal} style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "13px 22px", borderRadius: 13, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.12)", color: "#F8FAFC", fontSize: 15, fontWeight: 600, transition: "background .2s,border-color .2s" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Agendar llamada
          </a>
        </div>

        <div data-reveal style={{ padding: "clamp(22px,3vw,36px)", borderRadius: 20, background: "#0A0D16", border: "1px solid rgba(255,255,255,.08)", boxShadow: "0 30px 80px -40px rgba(0,0,0,.9)" }}>
          {status === "sent" ? (
            <div role="status" style={{ padding: "40px 8px", textAlign: "center", animation: "ctaIn .6s cubic-bezier(.16,1,.3,1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "50%", background: "rgba(45,212,191,.12)", color: "#2DD4BF", marginBottom: 18 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 700 }}>¡Mensaje enviado!</h3>
              <p style={{ margin: "0 0 22px", fontSize: 15, lineHeight: 1.6, color: "#94A3B8" }}>Gracias por escribirnos. Te respondemos por mail lo antes posible.</p>
              <button type="button" className="hv2" onClick={() => setStatus("idle")} style={{ padding: "11px 20px", borderRadius: 11, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.12)", color: "#F8FAFC", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {/* Honeypot: hidden from people, filled by bots */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

              <div data-contact-row style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label className="cf-field">
                  <span>Nombre completo</span>
                  <input className="cf-input" name="name" type="text" required maxLength={120} autoComplete="name" placeholder="Tu nombre" />
                </label>
                <label className="cf-field">
                  <span>Email</span>
                  <input className="cf-input" name="email" type="email" required maxLength={200} autoComplete="email" placeholder="tu@empresa.com" />
                </label>
              </div>

              <div data-contact-row style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label className="cf-field">
                  <span>Empresa</span>
                  <input className="cf-input" name="company" type="text" required maxLength={160} autoComplete="organization" placeholder="Nombre de tu empresa" />
                </label>
                <label className="cf-field">
                  <span>Tamaño del equipo</span>
                  <select className="cf-input" name="teamSize" defaultValue="">
                    <option value="" disabled>Cantidad de personas</option>
                    {TEAM_SIZES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="cf-field">
                <span>¿Qué te gustaría mejorar? <em>(opcional)</em></span>
                <textarea className="cf-input" name="details" rows={5} maxLength={4000} placeholder="Contanos sobre tu negocio y qué procesos te gustaría mejorar..." />
              </label>

              <label className="cf-field">
                <span>¿Cómo nos conociste? <em>(opcional)</em></span>
                <textarea className="cf-input" name="source" rows={3} maxLength={500} placeholder="Contanos dónde nos encontraste..." />
              </label>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                <button type="submit" disabled={status === "sending"} className="hv1" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", borderRadius: 13, border: "none", background: "linear-gradient(90deg,#7C3AED,#3B82F6)", color: "#fff", fontSize: 16, fontWeight: 600, fontFamily: "inherit", cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1, boxShadow: "0 12px 32px -8px rgba(124,58,237,.65)", transition: "transform .2s,box-shadow .2s" }}>
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                </button>
                {status === "error" && (
                  <span role="alert" style={{ fontSize: 14, color: "#F87171" }}>{error}</span>
                )}
              </div>

              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "#64748B" }}>
                Usamos tus datos solamente para responderte. No los compartimos con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
