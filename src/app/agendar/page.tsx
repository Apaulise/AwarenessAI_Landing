import type { Metadata } from "next";
import { links } from "@/config";
import CalEmbed from "@/components/CalEmbed";

export const metadata: Metadata = {
  title: "Agendar llamada — SmokIA",
  description: "Elegí día y horario para una llamada de diagnóstico sin compromiso con SmokIA.",
};

export default function AgendarPage() {
  const calLink = links.calSlug.replace(/^https?:\/\/(app\.)?cal\.com\//, "").replace(/^\/+|\/+$/g, "");

  return (
    <main style={{ position: "relative", minHeight: "100vh", padding: "clamp(20px,3vw,32px) clamp(14px,4vw,48px) 64px", overflow: "hidden", background: "var(--bg)" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: "70vw", height: "50vw", maxWidth: 900, maxHeight: 620, background: "radial-gradient(circle,rgba(242,193,78,.14),rgba(138,141,146,.06) 50%,transparent 70%)", filter: "blur(30px)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(236,234,229,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(236,234,229,.04) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%,#000,transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 20%,#000,transparent 80%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: "clamp(24px,4vw,44px)" }}>
          <a href="/" aria-label="SmokIA inicio" style={{ display: "flex", alignItems: "center", gap: 9, color: "var(--ink)", fontWeight: 600, fontSize: 18, letterSpacing: "-.01em" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/smokia-mark.png" alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />
            <span>
              Smok<span style={{ color: "var(--ink-3)" }}>IA</span>
            </span>
          </a>
          <a className="foot-link" href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Volver al sitio
          </a>
        </header>

        <div style={{ textAlign: "center", marginBottom: "clamp(24px,4vw,40px)" }}>
          <div className="mono" style={{ fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: 14 }}>— Agendar llamada</div>
          <h1 style={{ margin: 0, fontSize: "clamp(28px,4.4vw,46px)", lineHeight: 1.08, letterSpacing: "-.025em", fontWeight: 600, textWrap: "balance", color: "var(--ink)" }}>Elegí el día y horario que te quede cómodo.</h1>
          <p style={{ margin: "14px auto 0", maxWidth: 520, fontSize: 16, lineHeight: 1.6, color: "var(--ink-2)" }}>
            Al confirmar, la reunión queda agendada en nuestro calendario y te llega la invitación por mail.
          </p>
        </div>

        {calLink ? (
          <div style={{ minHeight: 640, borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--line-strong)", background: "var(--surface)", boxShadow: "0 30px 80px -30px rgba(0,0,0,.7)" }}>
            <CalEmbed calLink={calLink} />
          </div>
        ) : (
          <div style={{ padding: "48px 24px", textAlign: "center", borderRadius: "var(--radius-lg)", border: "1px dashed var(--line-strong)", background: "var(--surface)", color: "var(--ink-2)", fontSize: 15, lineHeight: 1.6 }}>
            El calendario todavía no está configurado. Definí <span className="mono" style={{ color: "var(--signal-text)" }}>NEXT_PUBLIC_CAL_LINK</span> (por ejemplo <span className="mono" style={{ color: "var(--signal-text)" }}>usuario/llamada-diagnostico</span>) y reiniciá el servidor.
          </div>
        )}

        <p style={{ margin: "26px 0 0", textAlign: "center", fontSize: 14, color: "var(--ink-3)" }}>
          ¿Preferís escribirnos? <a href="/#contacto">Dejanos un mensaje</a> y te respondemos por mail.
        </p>
      </div>
    </main>
  );
}
