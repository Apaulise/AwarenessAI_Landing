import { links } from "@/config";
import FlowLines from "./FlowLines";

export default function Hero() {
  return (
    <header id="top" style={{ position: "relative", padding: "clamp(120px,15vh,168px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0", zIndex: "0", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-8%", left: "8%", width: "52vw", height: "52vw", maxWidth: "720px", maxHeight: "720px", background: "radial-gradient(circle,rgba(242,193,78,.20),transparent 62%)", filter: "blur(20px)", animation: "glowpulse 9s ease-in-out infinite" }}></div>
        <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(236,234,229,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(236,234,229,.045) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 80%)" }}></div>
      <FlowLines />
      </div>
      <div style={{ position: "relative", zIndex: "1", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.02fr) minmax(0,.98fr)", gap: "clamp(36px,5vw,72px)", alignItems: "center" }} data-hero-grid>
        <div data-reveal>
          <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "6px 13px", border: "1px solid var(--line-strong)", borderRadius: "999px", background: "var(--raised)", fontSize: "12px", letterSpacing: ".06em", textTransform: "uppercase", color: "var(--ink-2)", marginBottom: "26px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 10px var(--signal)", animation: "blink 2.4s ease-in-out infinite" }}></span>
            AI · Automatización · Software
          </div>
          <h1 style={{ margin: "0 0 22px", fontSize: "clamp(38px,6vw,66px)", lineHeight: "1.03", letterSpacing: "-.025em", fontWeight: "600", textWrap: "balance", color: "var(--ink)" }}>
            Tu negocio puede
            <br />
            funcionar mejor.
            <br />
            <span style={{ background: "linear-gradient(90deg,var(--signal),var(--signal-hover))", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Encontramos cómo.</span>
          </h1>
          <p style={{ margin: "0 0 34px", maxWidth: "540px", fontSize: "clamp(16px,1.5vw,19px)", lineHeight: "1.6", color: "var(--ink-2)", textWrap: "pretty" }}>
            Analizamos cómo funciona tu empresa, detectamos procesos que pueden mejorar y construimos soluciones usando Inteligencia Artificial, automatización y software.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
            <a className="btn btn-primary" href={links.cta} data-cta="hero_cta" style={{ padding: "15px 26px", fontSize: "16px" }}>
              Analicemos tu negocio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a className="btn btn-secondary" href="#proyectos" data-cta="solutions_cta" style={{ padding: "15px 24px", fontSize: "16px" }}>Ver soluciones</a>
          </div>
          <p className="mono" style={{ margin: "22px 0 0", fontSize: "12.5px", color: "var(--ink-3)", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Primera conversación sin compromiso.
          </p>
        </div>
        <div data-reveal style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "8% 14%", background: "radial-gradient(circle,rgba(242,193,78,.28),rgba(138,141,146,.12) 55%,transparent 72%)", filter: "blur(30px)", animation: "glowpulse 7s ease-in-out infinite", zIndex: "0" }}></div>
          <div style={{ position: "relative", zIndex: "1", background: "var(--surface)", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-lg)", padding: "22px 20px 20px", boxShadow: "0 30px 80px -30px rgba(0,0,0,.7)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "var(--smoke-4)" }}></span>
                <span className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", letterSpacing: ".04em" }}>SmokIA · Intelligence Layer</span>
              </div>
              <span className="mono" style={{ fontSize: "12px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--signal)", color: "var(--signal-text)", letterSpacing: ".08em" }}>EJEMPLO ILUSTRATIVO</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "9px" }}>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>WhatsApp</div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>142 consultas</div>
              </div>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>CRM</div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>clientes</div>
              </div>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>Instagram</div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>mensajes</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "2px", height: "34px", background: "linear-gradient(var(--smoke-3),var(--smoke-4))", overflow: "hidden", margin: "4px 0" }} data-flow>
                <span style={{ position: "absolute", left: "-2px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 8px var(--signal)", "--tl": "34px", animation: "travel 2.2s linear infinite" } as React.CSSProperties}></span>
              </div>
            </div>
            <div style={{ position: "relative", padding: "16px 18px", borderRadius: "var(--radius-md)", background: "var(--signal-soft)", border: "1px solid var(--signal)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "var(--radius-sm)", background: "var(--signal)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--on-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                    <circle cx="12" cy="12" r="3.2" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "600", color: "var(--ink)" }}>Capa de inteligencia</div>
                  <div className="mono" style={{ fontSize: "12px", color: "var(--signal-text)", marginTop: "2px" }}>analiza · decide · ejecuta</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "2px", height: "34px", background: "linear-gradient(var(--smoke-3),var(--smoke-4))", overflow: "hidden", margin: "4px 0" }}>
                <span style={{ position: "absolute", left: "-2px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--signal)", boxShadow: "0 0 8px var(--signal)", "--tl": "34px", animation: "travel 2.2s linear infinite .7s" } as React.CSSProperties}></span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "9px" }}>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink-2)" }}>Datos</div>
              </div>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink-2)" }}>Acción</div>
              </div>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink-2)" }}>Automatización</div>
              </div>
            </div>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--line)", display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px 12px" }}>
              <div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".05em" }}>Automatizados</div>
                <div style={{ fontSize: "19px", fontWeight: "500", color: "var(--ink)", marginTop: "3px" }}>12</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".05em" }}>Horas rec.</div>
                <div style={{ fontSize: "19px", fontWeight: "500", color: "var(--ink)", marginTop: "3px" }}>34h</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".05em" }}>Consultas</div>
                <div style={{ fontSize: "19px", fontWeight: "500", color: "var(--ink)", marginTop: "3px" }}>142</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: ".05em" }}>Eficiencia</div>
                <div style={{ fontSize: "19px", fontWeight: "500", color: "var(--signal-text)", marginTop: "3px" }}>+27%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
