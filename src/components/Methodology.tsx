import { links } from "@/config";

export default function Methodology() {
  return (
    <section id="metodologia" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(180deg, var(--bg), var(--surface) clamp(80px,15vw,180px))" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "780px", marginBottom: "clamp(48px,6vw,72px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: "18px" }}>— Metodología</div>
          <h2 style={{ margin: "0", fontSize: "clamp(26px,3.8vw,42px)", lineHeight: "1.14", letterSpacing: "-.02em", fontWeight: "600", textWrap: "balance", color: "var(--ink)" }}>
            No empezamos hablando de Inteligencia Artificial.
            <br />
            <span style={{ background: "linear-gradient(90deg,var(--signal),var(--smoke-4))", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Empezamos hablando de tu negocio.</span>
          </h2>
        </div>
        <div data-timeline style={{ position: "relative", display: "flex", flexDirection: "column", gap: "6px" }}>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--ink-2)" }}>01</span>
              <span data-line style={{ flex: "1", width: "2px", background: "var(--line-strong)", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Descubrimiento</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Conversamos sobre cómo funciona actualmente tu negocio.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--ink-2)" }}>02</span>
              <span data-line style={{ flex: "1", width: "2px", background: "var(--line-strong)", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Auditoría</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Analizamos procesos y encontramos oportunidades concretas.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--ink-2)" }}>03</span>
              <span data-line style={{ flex: "1", width: "2px", background: "var(--line-strong)", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Propuesta</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Definimos una solución concreta y el impacto esperado.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--ink-2)" }}>04</span>
              <span data-line style={{ flex: "1", width: "2px", background: "var(--line-strong)", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Prototipo</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Construimos rápidamente una primera versión funcional.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--ink-2)" }}>05</span>
              <span data-line style={{ flex: "1", width: "2px", background: "var(--line-strong)", marginTop: "6px" }}></span>
            </div>
            <div style={{ paddingBottom: "8px" }}>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Implementación</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Integramos la solución dentro del flujo real de trabajo.</p>
            </div>
          </div>
          <div data-reveal data-step style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "22px", padding: "18px 0" }}>
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span className="mono" style={{ width: "44px", height: "44px", flex: "none", borderRadius: "var(--radius-md)", background: "var(--signal-soft)", border: "1px solid var(--signal)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", fontSize: "14px", color: "var(--signal-text)" }}>06</span>
            </div>
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "19px", fontWeight: "600", color: "var(--ink)" }}>Medición</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Analizamos resultados y buscamos nuevas mejoras.</p>
            </div>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "44px", textAlign: "center" }}>
          <a className="hv8" href={links.cta} data-cta="methodology_cta" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "14px 26px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line-strong)", color: "var(--ink)", fontSize: "15px", fontWeight: "600", transition: "background .2s,border-color .2s" }}>
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
