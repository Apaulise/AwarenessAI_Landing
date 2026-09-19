import { links } from "@/config";
import FlowLines from "./FlowLines";

export default function Hero() {
  return (
    <header id="top" style={{ position: "relative", padding: "clamp(120px,15vh,168px) clamp(18px,5vw,48px) clamp(60px,8vw,100px)", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: "0", zIndex: "0", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-8%", left: "8%", width: "52vw", height: "52vw", maxWidth: "720px", maxHeight: "720px", background: "radial-gradient(circle,rgba(124,58,237,.28),transparent 62%)", filter: "blur(20px)", animation: "glowpulse 9s ease-in-out infinite" }}></div>
        <div style={{ position: "absolute", bottom: "-14%", right: "2%", width: "44vw", height: "44vw", maxWidth: "600px", maxHeight: "600px", background: "radial-gradient(circle,rgba(6,182,212,.20),transparent 64%)", filter: "blur(24px)", animation: "glowpulse 11s ease-in-out infinite .8s" }}></div>
        <div style={{ position: "absolute", inset: "0", backgroundImage: "linear-gradient(rgba(148,163,184,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,.05) 1px,transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 50% 30%,#000,transparent 80%)" }}></div>
      <FlowLines />
      </div>
      <div style={{ position: "relative", zIndex: "1", maxWidth: "1240px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(0,1.02fr) minmax(0,.98fr)", gap: "clamp(36px,5vw,72px)", alignItems: "center" }} data-hero-grid>
        <div data-reveal>
          <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "6px 13px", border: "1px solid rgba(139,92,246,.3)", borderRadius: "999px", background: "rgba(139,92,246,.08)", fontSize: "12px", letterSpacing: ".06em", textTransform: "uppercase", color: "#C4B5FD", marginBottom: "26px" }}>
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#22D3EE", boxShadow: "0 0 10px #22D3EE", animation: "blink 2.4s ease-in-out infinite" }}></span>
            AI · Automatización · Software
          </div>
          <h1 style={{ margin: "0 0 22px", fontSize: "clamp(38px,6vw,66px)", lineHeight: "1.03", letterSpacing: "-.025em", fontWeight: "700", textWrap: "balance" }}>
            Tu negocio puede
            <br />
            funcionar mejor.
            <br />
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#3B82F6,#22D3EE,#8B5CF6)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", animation: "gshift 8s linear infinite" }}>Encontramos cómo.</span>
          </h1>
          <p style={{ margin: "0 0 34px", maxWidth: "540px", fontSize: "clamp(16px,1.5vw,19px)", lineHeight: "1.6", color: "#94A3B8", textWrap: "pretty" }}>
            Analizamos cómo funciona tu empresa, detectamos procesos que pueden mejorar y construimos soluciones usando Inteligencia Artificial, automatización y software.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
            <a className="hv1" href={links.cta} data-cta="hero_cta" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 26px", borderRadius: "13px", background: "linear-gradient(90deg,#7C3AED,#3B82F6)", color: "#fff", fontSize: "16px", fontWeight: "600", boxShadow: "0 12px 32px -8px rgba(124,58,237,.65)", transition: "transform .2s,box-shadow .2s" }}>
              Analicemos tu negocio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a className="hv2" href="#proyectos" data-cta="solutions_cta" style={{ display: "inline-flex", alignItems: "center", gap: "9px", padding: "15px 24px", borderRadius: "13px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.12)", color: "#F8FAFC", fontSize: "16px", fontWeight: "600", transition: "background .2s,border-color .2s" }}>Ver soluciones</a>
          </div>
          <p className="mono" style={{ margin: "22px 0 0", fontSize: "12.5px", color: "#64748B", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Primera conversación sin compromiso.
          </p>
        </div>
        <div data-reveal style={{ position: "relative" }}>
          <div style={{ position: "absolute", inset: "8% 14%", background: "radial-gradient(circle,rgba(124,58,237,.4),rgba(6,182,212,.15) 55%,transparent 72%)", filter: "blur(30px)", animation: "glowpulse 7s ease-in-out infinite", zIndex: "0" }}></div>
          <div style={{ position: "relative", zIndex: "1", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.09)", borderRadius: "22px", padding: "22px 20px 20px", boxShadow: "0 30px 80px -30px rgba(0,0,0,.9),inset 0 1px 0 rgba(255,255,255,.04)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "2px", background: "linear-gradient(135deg,#7C3AED,#22D3EE)" }}></span>
                <span className="mono" style={{ fontSize: "12px", color: "#CBD5E1", letterSpacing: ".04em" }}>AwarenessAI · Intelligence Layer</span>
              </div>
              <span className="mono" style={{ fontSize: "10px", padding: "3px 8px", borderRadius: "6px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.3)", color: "#C4B5FD", letterSpacing: ".08em" }}>DEMO</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "9px" }}>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "12px", background: "#111426", border: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#E2E8F0" }}>WhatsApp</div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginTop: "2px" }}>142 consultas</div>
              </div>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "12px", background: "#111426", border: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#E2E8F0" }}>CRM</div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginTop: "2px" }}>clientes</div>
              </div>
              <div style={{ textAlign: "center", padding: "11px 6px", borderRadius: "12px", background: "#111426", border: "1px solid rgba(255,255,255,.07)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#E2E8F0" }}>Instagram</div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginTop: "2px" }}>mensajes</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "2px", height: "34px", background: "linear-gradient(#7C3AED,#3B82F6)", overflow: "hidden", margin: "4px 0" }} data-flow>
                <span style={{ position: "absolute", left: "-2px", width: "6px", height: "6px", borderRadius: "50%", background: "#22D3EE", boxShadow: "0 0 8px #22D3EE", "--tl": "34px", animation: "travel 2.2s linear infinite" } as React.CSSProperties}></span>
              </div>
            </div>
            <div style={{ position: "relative", padding: "16px 18px", borderRadius: "16px", background: "linear-gradient(135deg,rgba(124,58,237,.22),rgba(37,99,235,.14))", border: "1px solid rgba(139,92,246,.45)", boxShadow: "0 0 34px -8px rgba(124,58,237,.6)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "38px", height: "38px", flex: "none", borderRadius: "11px", background: "linear-gradient(135deg,#7C3AED,#22D3EE)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(124,58,237,.6)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
                    <circle cx="12" cy="12" r="3.2" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#F8FAFC" }}>Capa de inteligencia</div>
                  <div className="mono" style={{ fontSize: "10px", color: "#A5B4FC", marginTop: "2px" }}>analiza · decide · ejecuta</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: "2px", height: "34px", background: "linear-gradient(#3B82F6,#22D3EE)", overflow: "hidden", margin: "4px 0" }}>
                <span style={{ position: "absolute", left: "-2px", width: "6px", height: "6px", borderRadius: "50%", background: "#2DD4BF", boxShadow: "0 0 8px #2DD4BF", "--tl": "34px", animation: "travel 2.2s linear infinite .7s" } as React.CSSProperties}></span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "9px" }}>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "11px", background: "#0D1020", border: "1px solid rgba(34,211,238,.2)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#67E8F9" }}>Datos</div>
              </div>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "11px", background: "#0D1020", border: "1px solid rgba(34,211,238,.2)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#67E8F9" }}>Acción</div>
              </div>
              <div style={{ textAlign: "center", padding: "10px 4px", borderRadius: "11px", background: "#0D1020", border: "1px solid rgba(34,211,238,.2)" }}>
                <div style={{ fontSize: "11px", fontWeight: "600", color: "#67E8F9" }}>Automatización</div>
              </div>
            </div>
            <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,.07)", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px" }}>
              <div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em" }}>Automatizados</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#F8FAFC", marginTop: "3px" }}>12</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em" }}>Horas rec.</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#F8FAFC", marginTop: "3px" }}>34h</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em" }}>Consultas</div>
                <div style={{ fontSize: "20px", fontWeight: "700", color: "#F8FAFC", marginTop: "3px" }}>142</div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", textTransform: "uppercase", letterSpacing: ".05em" }}>Eficiencia</div>
                <div style={{ fontSize: "20px", fontWeight: "700", background: "linear-gradient(90deg,#8B5CF6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", marginTop: "3px" }}>+27%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
