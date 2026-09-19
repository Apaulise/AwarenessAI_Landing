export default function Services() {
  return (
    <section id="servicios" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "720px", marginBottom: "clamp(44px,6vw,64px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "16px" }}>— Capacidades</div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(28px,4vw,46px)", lineHeight: "1.08", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            Distintos problemas.
            <br />
            <span style={{ color: "#94A3B8" }}>Distintas soluciones.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "14px" }}>
          <article className="hv5" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(124,58,237,.35),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="6" height="6" rx="1" />
                <rect x="15" y="15" width="6" height="6" rx="1" />
                <path d="M9 6h6a2 2 0 0 1 2 2v7" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Automatización de procesos</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>Automatizamos tareas repetitivas y conectamos herramientas para reducir trabajo manual.</p>
          </article>
          <article className="hv6" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(59,130,246,.35),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="8" width="16" height="12" rx="2" />
                <path d="M12 8V4M8 3h8" />
                <circle cx="9" cy="14" r="1" />
                <circle cx="15" cy="14" r="1" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Agentes de Inteligencia Artificial</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>
              Sistemas inteligentes capaces de analizar información y ejecutar tareas dentro de procesos reales.
            </p>
          </article>
          <article className="hv7" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(34,211,238,.32),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(34,211,238,.12)", border: "1px solid rgba(34,211,238,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 10h8M8 14h5" />
                <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4V6a1 1 0 0 1 1-1z" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Atención y seguimiento de clientes</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>WhatsApp, clasificación de consultas, recordatorios y recuperación de oportunidades.</p>
          </article>
          <article className="hv5" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(124,58,237,.32),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M9 9v11" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Sistemas internos</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>Dashboards, CRM simples, herramientas administrativas y sistemas personalizados.</p>
          </article>
          <article className="hv6" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(59,130,246,.32),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
                <path d="M11 8v6M8 11h6" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Auditoría de procesos</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>
              Analizamos cómo trabaja una empresa y detectamos oportunidades de mejora mediante tecnología.
            </p>
          </article>
          <article className="hv7" data-svc style={{ position: "relative", padding: "26px 24px", borderRadius: "18px", background: "linear-gradient(160deg,#111426,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden", transition: "transform .3s,border-color .3s,box-shadow .3s" }}>
            <div data-svc-glow style={{ position: "absolute", top: "-40px", right: "-40px", width: "150px", height: "150px", background: "radial-gradient(circle,rgba(45,212,191,.32),transparent 70%)", opacity: ".5", transition: "opacity .3s" }}></div>
            <div style={{ position: "relative", width: "46px", height: "46px", borderRadius: "12px", background: "rgba(45,212,191,.12)", border: "1px solid rgba(45,212,191,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#5EEAD4" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l2 4 4 .6-3 3 .7 4.4L12 13l-3.7 2 .7-4.4-3-3 4-.6z" />
                <path d="M5 20h14" />
              </svg>
            </div>
            <h3 style={{ position: "relative", margin: "0 0 10px", fontSize: "18px", fontWeight: "700" }}>Soluciones a medida</h3>
            <p style={{ position: "relative", margin: "0", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>Si existe un problema que puede resolverse con tecnología, analizamos cómo construirlo.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
