import { links } from "@/config";

export default function Projects() {
  return (
    <section id="proyectos" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(#060810,#0B0E18)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "720px", marginBottom: "clamp(44px,6vw,68px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "16px" }}>— Proyectos</div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(28px,4vw,46px)", lineHeight: "1.08", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            De problemas reales
            <br />
            a herramientas reales.
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#94A3B8", maxWidth: "560px" }}>
            Prototipos y sistemas que estamos construyendo. Cada uno nace de un problema concreto de negocio.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,52px)" }}>
          <article data-reveal data-showcase style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "6px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.3)", color: "#C4B5FD", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>01 / Auditoría</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", letterSpacing: "-.02em" }}>AI Business Audit</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#64748B" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Problema:</span>
                {" las oportunidades de mejora están escondidas dentro de la operación diaria."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "#CBD5E1" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Solución:</span>
                {" un sistema que analiza digitalmente un negocio y prioriza dónde la tecnología genera más impacto."}
              </p>
              <a className="hv3" href={links.cta} style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", color: "#22D3EE" }}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ position: "relative", borderRadius: "16px", background: "#0D1020", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(0,0,0,.8)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 14px", background: "#111426", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#334155" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#334155" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#334155" }}></span>
                <span className="mono" style={{ marginLeft: "8px", fontSize: "10px", color: "#64748B" }}>audit.awarenessai.app</span>
              </div>
              <div style={{ padding: "18px" }}>
                <div className="mono" style={{ fontSize: "10px", color: "#64748B", letterSpacing: ".06em", marginBottom: "12px" }}>OPORTUNIDADES DETECTADAS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "10px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.05)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F87171", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "#E2E8F0", flex: "1" }}>Consultas repetidas por WhatsApp</span>
                    <span className="mono" style={{ fontSize: "11px", color: "#F87171" }}>alto</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "10px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.05)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#FBBF24", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "#E2E8F0", flex: "1" }}>Datos de clientes sin usar</span>
                    <span className="mono" style={{ fontSize: "11px", color: "#FBBF24" }}>medio</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "10px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.05)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#2DD4BF", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "#E2E8F0", flex: "1" }}>Reportes manuales en Excel</span>
                    <span className="mono" style={{ fontSize: "11px", color: "#2DD4BF" }}>rápido</span>
                  </div>
                </div>
                <div style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,.06)" }}>
                  <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>Impacto estimado</span>
                  <span style={{ fontSize: "15px", fontWeight: "700", background: "linear-gradient(90deg,#8B5CF6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>~30h / mes</span>
                </div>
              </div>
            </div>
          </article>
          <article data-reveal data-showcase-rev style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "16px", background: "#0D1020", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(0,0,0,.8)", maxWidth: "360px", margin: "0 auto" }}>
              <div style={{ padding: "14px 16px", background: "linear-gradient(135deg,#075E54,#128C7E)", display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 21l2.2-5.6A8.4 8.4 0 1 1 21 11.5z" />
                  </svg>
                </span>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff" }}>Asistente AwarenessAI</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,.75)" }}>en línea</div>
                </div>
              </div>
              <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "9px", background: "#0B141A" }}>
                <div style={{ alignSelf: "flex-start", maxWidth: "82%", padding: "9px 12px", borderRadius: "12px 12px 12px 3px", background: "#1F2C33", color: "#E2E8F0", fontSize: "12.5px", lineHeight: "1.4" }}>Hola, ¿tienen turnos disponibles esta semana?</div>
                <div style={{ alignSelf: "flex-end", maxWidth: "82%", padding: "9px 12px", borderRadius: "12px 12px 3px 12px", background: "#056162", color: "#F8FAFC", fontSize: "12.5px", lineHeight: "1.4" }}>¡Hola! Sí 🙌 Tengo jueves 15:00 y viernes 10:30. ¿Cuál te queda mejor?</div>
                <div style={{ alignSelf: "flex-start", maxWidth: "82%", padding: "9px 12px", borderRadius: "12px 12px 12px 3px", background: "#1F2C33", color: "#E2E8F0", fontSize: "12.5px", lineHeight: "1.4" }}>Jueves 15hs</div>
                <div style={{ alignSelf: "flex-end", maxWidth: "82%", padding: "9px 12px", borderRadius: "12px 12px 3px 12px", background: "#056162", color: "#F8FAFC", fontSize: "12.5px", lineHeight: "1.4" }}>Listo ✅ Reservé jueves 15:00. Te envío recordatorio 1h antes.</div>
                <div className="mono" style={{ alignSelf: "center", fontSize: "9px", color: "#64748B", marginTop: "2px" }}>clasificado · agendado · seguimiento automático</div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "6px", background: "rgba(45,212,191,.14)", border: "1px solid rgba(45,212,191,.3)", color: "#5EEAD4", letterSpacing: ".08em" }}>DEMO</span>
                <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>02 / Atención</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", letterSpacing: "-.02em" }}>WhatsApp AI Assistant</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#64748B" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Problema:</span>
                {" se responden las mismas consultas todos los días y se pierden oportunidades."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "#CBD5E1" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Solución:</span>
                {" un asistente que responde, clasifica consultas y ejecuta acciones directamente por WhatsApp."}
              </p>
              <a className="hv3" href={links.cta} style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", color: "#22D3EE" }}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </article>
          <article data-reveal data-showcase style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "6px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.3)", color: "#C4B5FD", letterSpacing: ".08em" }}>PROTOTYPE</span>
                <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>03 / Clientes</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "700", letterSpacing: "-.02em" }}>Customer Intelligence</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "#64748B" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Problema:</span>
                {" no se sabe qué clientes dejaron de venir ni a quién hacer seguimiento."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "#CBD5E1" }}>
                <span style={{ color: "#94A3B8", fontWeight: "600" }}>Solución:</span>
                {" registra clientes, analiza recurrencia, detecta inactivos y facilita seguimientos personalizados."}
              </p>
              <a className="hv3" href={links.cta} style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", color: "#22D3EE" }}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ position: "relative", borderRadius: "16px", background: "#0D1020", border: "1px solid rgba(255,255,255,.08)", overflow: "hidden", boxShadow: "0 24px 60px -24px rgba(0,0,0,.8)" }}>
              <div style={{ padding: "16px 18px", borderBottom: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "#E2E8F0" }}>Clientes</span>
                <span className="mono" style={{ fontSize: "10px", color: "#64748B" }}>últimos 90 días</span>
              </div>
              <div style={{ padding: "8px 10px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "8px 10px" }}>
                  <span className="mono" style={{ fontSize: "9px", color: "#64748B" }}>CLIENTE</span>
                  <span className="mono" style={{ fontSize: "9px", color: "#64748B" }}>ÚLTIMA VISITA</span>
                  <span className="mono" style={{ fontSize: "9px", color: "#64748B", textAlign: "right" }}>ESTADO</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "9px", background: "#0B0E18", alignItems: "center", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12.5px", color: "#E2E8F0" }}>M. Fernández</span>
                  <span className="mono" style={{ fontSize: "11px", color: "#94A3B8" }}>hace 5 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: "rgba(45,212,191,.14)", color: "#5EEAD4" }}>activo</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "9px", background: "#0B0E18", alignItems: "center", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12.5px", color: "#E2E8F0" }}>J. Gómez</span>
                  <span className="mono" style={{ fontSize: "11px", color: "#94A3B8" }}>hace 68 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: "rgba(251,191,36,.14)", color: "#FBBF24" }}>en riesgo</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "9px", background: "#0B0E18", alignItems: "center" }}>
                  <span style={{ fontSize: "12.5px", color: "#E2E8F0" }}>C. Ruiz</span>
                  <span className="mono" style={{ fontSize: "11px", color: "#94A3B8" }}>hace 112 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "5px", background: "rgba(248,113,113,.14)", color: "#F87171" }}>inactivo</span>
                  </span>
                </div>
              </div>
              <div style={{ padding: "12px 18px", borderTop: "1px solid rgba(255,255,255,.06)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
                <span className="mono" style={{ fontSize: "11px", color: "#A5B4FC" }}>3 clientes listos para recontactar automáticamente</span>
              </div>
            </div>
          </article>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px" }}>
            <article data-reveal style={{ padding: "24px", borderRadius: "16px", background: "#0D1020", border: "1px solid rgba(255,255,255,.07)" }}>
              <div style={{ borderRadius: "11px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", overflow: "hidden", marginBottom: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "#111426" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#334155" }}></span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#334155" }}></span>
                  <span className="mono" style={{ fontSize: "9px", color: "#64748B", marginLeft: "6px" }}>site-audit</span>
                </div>
                <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ position: "relative", width: "64px", height: "64px", flex: "none", borderRadius: "50%", background: "conic-gradient(#22D3EE 0 78%,rgba(255,255,255,.07) 78% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#0B0E18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700", color: "#67E8F9" }}>78</div>
                  </div>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px" }}>
                    <div>
                      <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginBottom: "3px" }}>UX</div>
                      <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,.06)" }}>
                        <div style={{ height: "100%", width: "82%", borderRadius: "3px", background: "linear-gradient(90deg,#7C3AED,#22D3EE)" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginBottom: "3px" }}>Conversión</div>
                      <div style={{ height: "5px", borderRadius: "3px", background: "rgba(255,255,255,.06)" }}>
                        <div style={{ height: "100%", width: "64%", borderRadius: "3px", background: "linear-gradient(90deg,#7C3AED,#22D3EE)" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "6px", background: "rgba(59,130,246,.14)", border: "1px solid rgba(59,130,246,.3)", color: "#93C5FD", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>04 / Web</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em" }}>Website Intelligence Audit</h3>
              <p style={{ margin: "0 0 16px", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>
                Analiza páginas web y detecta oportunidades de comunicación, UX, conversión y posicionamiento.
              </p>
              <a className="hv4" href={links.cta} style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", color: "#22D3EE" }}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
            <article data-reveal style={{ padding: "24px", borderRadius: "16px", background: "#0D1020", border: "1px solid rgba(255,255,255,.07)" }}>
              <div style={{ borderRadius: "11px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", padding: "18px 16px", marginBottom: "18px" }}>
                <div className="mono" style={{ fontSize: "9px", color: "#64748B", marginBottom: "14px" }}>RENDIMIENTO DEL CANAL</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "78px" }}>
                  <div style={{ flex: "1", height: "38%", borderRadius: "5px 5px 0 0", background: "rgba(124,58,237,.35)", transformOrigin: "bottom", animation: "barrise .8s ease .1s both" }}></div>
                  <div style={{ flex: "1", height: "56%", borderRadius: "5px 5px 0 0", background: "rgba(59,130,246,.4)", transformOrigin: "bottom", animation: "barrise .8s ease .2s both" }}></div>
                  <div style={{ flex: "1", height: "44%", borderRadius: "5px 5px 0 0", background: "rgba(34,211,238,.4)", transformOrigin: "bottom", animation: "barrise .8s ease .3s both" }}></div>
                  <div style={{ flex: "1", height: "72%", borderRadius: "5px 5px 0 0", background: "rgba(124,58,237,.5)", transformOrigin: "bottom", animation: "barrise .8s ease .4s both" }}></div>
                  <div style={{ flex: "1", height: "88%", borderRadius: "5px 5px 0 0", background: "linear-gradient(#22D3EE,#7C3AED)", transformOrigin: "bottom", animation: "barrise .8s ease .5s both" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "6px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.3)", color: "#C4B5FD", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "#64748B" }}>05 / Contenido</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em" }}>YouTube & Personal Brand Intelligence</h3>
              <p style={{ margin: "0 0 16px", fontSize: "14.5px", lineHeight: "1.55", color: "#94A3B8" }}>Análisis de canales, contenido, posicionamiento y estrategia para marca personal.</p>
              <a className="hv4" href={links.cta} style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: "600", color: "#22D3EE" }}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
