"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { links } from "@/config";

const TEAM_SIZES = ["Solo yo", "2–10 personas", "11–50 personas", "51–200 personas", "Más de 200"];

const BULLETS = [
  "Contanos cómo trabaja hoy tu empresa",
  "Detectamos dónde la tecnología puede generar impacto",
  "Te respondemos por mail, sin compromiso",
];

type Status = "idle" | "sending" | "sent" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "company", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(data: Record<string, FormDataEntryValue>): FieldErrors {
  const errs: FieldErrors = {};
  if (!String(data.name ?? "").trim()) errs.name = "Escribí tu nombre.";
  const email = String(data.email ?? "").trim();
  if (!email) errs.email = "Escribí tu email.";
  else if (!EMAIL_RE.test(email)) errs.email = "Revisá el email: parece incompleto.";
  if (!String(data.company ?? "").trim()) errs.company = "Escribí el nombre de tu empresa.";
  return errs;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const errs = validate(data);
    setFieldErrors(errs);
    const first = (["name", "email", "company"] as const).find((k) => errs[k]);
    if (first) {
      setStatus("idle");
      setError("");
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const out = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(out.error || "No pudimos enviar tu mensaje.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No pudimos enviar tu mensaje.");
      setStatus("error");
    }
  }

  return (
    <section id="contacto" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(180deg, var(--bg), var(--surface) clamp(80px,15vw,180px))" }}>
      <div data-contact-grid style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "clamp(32px,6vw,80px)", alignItems: "start" }}>
        <div data-reveal>
          <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: 16 }}>— Contacto</div>
          <h2 style={{ margin: "0 0 28px", fontSize: "clamp(32px,4.6vw,54px)", lineHeight: 1.05, letterSpacing: "-.025em", fontWeight: 600, textWrap: "balance", color: "var(--ink)" }}>Hablemos de tu negocio.</h2>
          <ul style={{ listStyle: "none", margin: "0 0 32px", padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {BULLETS.map((b) => (
              <li key={b} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 16, color: "var(--ink-2)" }}>
                <span style={{ flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "var(--raised)", color: "var(--ink-2)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
          <p style={{ margin: "0 0 14px", fontSize: 15, color: "var(--ink-3)" }}>¿Preferís hablar directamente?</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a className="btn btn-secondary" href={links.cal} style={{ padding: "13px 22px", fontSize: 15 }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar llamada
            </a>
            <a className="btn btn-wa" href={links.whatsapp} target="_blank" rel="noopener noreferrer" style={{ padding: "13px 22px", fontSize: 15 }}>
              <span aria-hidden="true" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 26, height: 26, borderRadius: "50%", background: "#25D366", flexShrink: 0 }}>
                <FaWhatsapp size={17} color="#fff" />
              </span>
              WhatsApp
            </a>
          </div>
        </div>

        <div data-reveal style={{ padding: "clamp(22px,3vw,36px)", borderRadius: "var(--radius-lg)", background: "var(--bg)", border: "1px solid var(--line-strong)", boxShadow: "0 30px 80px -40px rgba(0,0,0,.7)" }}>
          {status === "sent" ? (
            <div role="status" style={{ padding: "40px 8px", textAlign: "center", animation: "ctaIn .6s cubic-bezier(.16,1,.3,1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "50%", background: "var(--success-soft)", color: "var(--success)", marginBottom: 18 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 style={{ margin: "0 0 8px", fontSize: 24, fontWeight: 600, color: "var(--ink)" }}>¡Mensaje enviado!</h3>
              <p style={{ margin: "0 0 22px", fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>Gracias por escribirnos. Te respondemos por mail lo antes posible.</p>
              <button type="button" className="btn btn-secondary" onClick={() => setStatus("idle")} style={{ padding: "11px 20px", fontSize: 14 }}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {/* Honeypot: hidden from people, filled by bots */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />

              <div data-contact-row style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label className="cf-field">
                  <span>Nombre completo</span>
                  <input className="cf-input" name="name" type="text" required aria-required="true" aria-invalid={!!fieldErrors.name} aria-describedby={fieldErrors.name ? "err-name" : undefined} onChange={() => fieldErrors.name && setFieldErrors((f) => ({ ...f, name: undefined }))} maxLength={120} autoComplete="name" placeholder="Tu nombre" />
                  {fieldErrors.name && <small id="err-name" role="alert" className="cf-error">{fieldErrors.name}</small>}
                </label>
                <label className="cf-field">
                  <span>Email</span>
                  <input className="cf-input" name="email" type="email" required aria-required="true" aria-invalid={!!fieldErrors.email} aria-describedby={fieldErrors.email ? "err-email" : undefined} onChange={() => fieldErrors.email && setFieldErrors((f) => ({ ...f, email: undefined }))} maxLength={200} autoComplete="email" placeholder="tu@empresa.com" />
                  {fieldErrors.email && <small id="err-email" role="alert" className="cf-error">{fieldErrors.email}</small>}
                </label>
              </div>

              <div data-contact-row style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                <label className="cf-field">
                  <span>Empresa</span>
                  <input className="cf-input" name="company" type="text" required aria-required="true" aria-invalid={!!fieldErrors.company} aria-describedby={fieldErrors.company ? "err-company" : undefined} onChange={() => fieldErrors.company && setFieldErrors((f) => ({ ...f, company: undefined }))} maxLength={160} autoComplete="organization" placeholder="Nombre de tu empresa" />
                  {fieldErrors.company && <small id="err-company" role="alert" className="cf-error">{fieldErrors.company}</small>}
                </label>
                <label className="cf-field">
                  <span>Tamaño del equipo <em>(opcional)</em></span>
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
                <textarea className="cf-input" name="details" rows={4} maxLength={4000} placeholder="Contanos sobre tu negocio y qué procesos te gustaría mejorar..." />
              </label>

              <label className="cf-field">
                <span>¿Cómo nos conociste? <em>(opcional)</em></span>
                <input className="cf-input" name="source" type="text" maxLength={500} placeholder="Instagram, recomendación, Google..." />
              </label>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
                <button type="submit" disabled={status === "sending"} className="btn btn-primary" style={{ padding: "14px 26px", fontSize: 16, cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}>
                  {status === "sending" ? "Enviando…" : "Enviar mensaje"}
                </button>
                {status === "error" && (
                  <span role="alert" style={{ fontSize: 14, color: "var(--danger)", display: "inline-flex", alignItems: "center", gap: 6 }}>⚠ {error}</span>
                )}
              </div>

              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: "var(--ink-3)" }}>
                Usamos tus datos solamente para responderte. No los compartimos con terceros.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
