import { links } from "@/config";

export default function Methodology() {
  return (
    <section id="metodologia" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(#0B0E18,#060810)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "780px", marginBottom: "clamp(48px,6vw,72px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "18px" }}>— Metodología</div>
          <h2 style={{ margin: "0", fontSize: "clamp(26px,3.8vw,42px)", lineHeight: "1.14", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            No empezamos hablando de Inteligencia Artificial.
            <br />
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Empezamos hablando de tu negocio.</span>
          </h2>
        </div>
        <div data-timeline style={{ position: "relative", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#C4B5FD" }}>01</span>
              <span data-line style={{ flex: "1", width: "2px", background: "linear-gradient(rgba(139,92,246,.4),rgba(59,130,246,.2))", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Descubrimiento</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Conversamos sobre cómo funciona actualmente tu negocio.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "rgba(99,102,241,.14)", border: "1px solid rgba(99,102,241,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#A5B4FC" }}>02</span>
              <span data-line style={{ flex: "1", width: "2px", background: "linear-gradient(rgba(99,102,241,.4),rgba(59,130,246,.2))", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Auditoría</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Analizamos procesos y encontramos oportunidades concretas.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "rgba(59,130,246,.14)", border: "1px solid rgba(59,130,246,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#93C5FD" }}>03</span>
              <span data-line style={{ flex: "1", width: "2px", background: "linear-gradient(rgba(59,130,246,.4),rgba(34,211,238,.2))", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Propuesta</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Definimos una solución concreta y el impacto esperado.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "rgba(45,212,191,.14)", border: "1px solid rgba(45,212,191,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#5EEAD4" }}>04</span>
              <span data-line style={{ flex: "1", width: "2px", background: "linear-gradient(rgba(45,212,191,.4),rgba(34,211,238,.2))", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Prototipo</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Construimos rápidamente una primera versión funcional.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "rgba(34,211,238,.14)", border: "1px solid rgba(34,211,238,.35)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#67E8F9" }}>05</span>
              <span data-line style={{ flex: "1", width: "2px", background: "linear-gradient(rgba(34,211,238,.4),rgba(34,211,238,.1))", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Implementación</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Integramos la solución dentro del flujo real de trabajo.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "12px", background: "linear-gradient(135deg,rgba(124,58,237,.25),rgba(34,211,238,.2))", border: "1px solid rgba(34,211,238,.4)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", color: "#67E8F9" }}>06</span>
            </div>
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "700" }}>Medición</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Analizamos resultados y buscamos nuevas mejoras.</p>
            </div>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "44px", textAlign: "center" }}>
          <a className="hv8" href={links.cta} data-cta="methodology_cta" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 26px", borderRadius: "13px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(139,92,246,.3)", color: "#F8FAFC", fontSize: "15px", fontWeight: "600", transition: "background .2s,border-color .2s" }}>
            {"Empecemos por el paso 01 "}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
