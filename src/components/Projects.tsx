import { links } from "@/config";

export default function Projects() {
  return (
    <section id="proyectos" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(180deg, var(--surface), var(--bg) clamp(80px,15vw,180px))" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "720px", marginBottom: "clamp(44px,6vw,68px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: "16px" }}>— Proyectos</div>
          <h2 style={{ margin: "0 0 16px", fontSize: "clamp(28px,4vw,46px)", lineHeight: "1.08", letterSpacing: "-.02em", fontWeight: "600", textWrap: "balance", color: "var(--ink)" }}>
            De problemas reales
            <br />
            a herramientas reales.
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-2)", maxWidth: "560px" }}>
            Prototipos y sistemas que estamos construyendo. Cada uno nace de un problema concreto de negocio.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(28px,4vw,52px)" }}>
          <article data-reveal data-showcase style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line-strong)", color: "var(--ink-2)", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>01 / Auditoría</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "600", letterSpacing: "-.02em", color: "var(--ink)" }}>AI Business Audit</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "var(--ink-3)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Problema:</span>
                {" las oportunidades de mejora están escondidas dentro de la operación diaria."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Solución:</span>
                {" un sistema que analiza digitalmente un negocio y prioriza dónde la tecnología genera más impacto."}
              </p>
              <a className="link-arrow hl" href={links.cta}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", background: "var(--surface)", border: "1px solid var(--line-strong)", overflow: "hidden" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 14px", background: "var(--raised)", borderBottom: "1px solid var(--line)" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--smoke-3)" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--smoke-3)" }}></span>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--smoke-3)" }}></span>
                <span className="mono" style={{ marginLeft: "8px", fontSize: "10px", color: "var(--ink-3)" }}>audit.awarenessai.app</span>
              </div>
              <div style={{ padding: "18px" }}>
                <div className="mono" style={{ fontSize: "10px", color: "var(--ink-3)", letterSpacing: ".06em", marginBottom: "12px" }}>OPORTUNIDADES DETECTADAS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--danger)", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "var(--ink)", flex: "1" }}>Consultas repetidas por WhatsApp</span>
                    <span className="mono" style={{ fontSize: "11px", color: "var(--danger)" }}>alto</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--signal)", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "var(--ink)", flex: "1" }}>Datos de clientes sin usar</span>
                    <span className="mono" style={{ fontSize: "11px", color: "var(--signal-text)" }}>medio</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "11px 13px", borderRadius: "var(--radius-sm)", background: "var(--raised)", border: "1px solid var(--line)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--success)", flex: "none" }}></span>
                    <span style={{ fontSize: "13px", color: "var(--ink)", flex: "1" }}>Reportes manuales en Excel</span>
                    <span className="mono" style={{ fontSize: "11px", color: "var(--success)" }}>rápido</span>
                  </div>
                </div>
                <div style={{ marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                  <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>Impacto estimado</span>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "var(--signal-text)" }}>~30h / mes</span>
                </div>
              </div>
            </div>
          </article>
          <article data-reveal data-showcase-rev style={{ display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: "clamp(28px,4vw,56px)", alignItems: "center" }}>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", background: "var(--surface)", border: "1px solid var(--line-strong)", overflow: "hidden", maxWidth: "360px", margin: "0 auto" }}>
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
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line-strong)", color: "var(--ink-2)", letterSpacing: ".08em" }}>DEMO</span>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>02 / Atención</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "600", letterSpacing: "-.02em", color: "var(--ink)" }}>WhatsApp AI Assistant</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "var(--ink-3)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Problema:</span>
                {" se responden las mismas consultas todos los días y se pierden oportunidades."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Solución:</span>
                {" un asistente que responde, clasifica consultas y ejecuta acciones directamente por WhatsApp."}
              </p>
              <a className="link-arrow hl" href={links.cta}>
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
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line-strong)", color: "var(--ink-2)", letterSpacing: ".08em" }}>PROTOTYPE</span>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>03 / Clientes</span>
              </div>
              <h3 style={{ margin: "0 0 14px", fontSize: "clamp(22px,2.6vw,30px)", fontWeight: "600", letterSpacing: "-.02em", color: "var(--ink)" }}>Customer Intelligence</h3>
              <p style={{ margin: "0 0 8px", fontSize: "14px", color: "var(--ink-3)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Problema:</span>
                {" no se sabe qué clientes dejaron de venir ni a quién hacer seguimiento."}
              </p>
              <p style={{ margin: "0 0 20px", fontSize: "15px", lineHeight: "1.6", color: "var(--ink)" }}>
                <span style={{ color: "var(--ink-2)", fontWeight: "600" }}>Solución:</span>
                {" registra clientes, analiza recurrencia, detecta inactivos y facilita seguimientos personalizados."}
              </p>
              <a className="link-arrow hl" href={links.cta}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
            <div style={{ position: "relative", borderRadius: "var(--radius-lg)", background: "var(--surface)", border: "1px solid var(--line-strong)", overflow: "hidden" }}>
              <div style={{ padding: "16px 18px", borderBottom: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)" }}>Clientes</span>
                <span className="mono" style={{ fontSize: "10px", color: "var(--ink-3)" }}>últimos 90 días</span>
              </div>
              <div style={{ padding: "8px 10px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "8px 10px" }}>
                  <span className="mono" style={{ fontSize: "9px", color: "var(--ink-3)" }}>CLIENTE</span>
                  <span className="mono" style={{ fontSize: "9px", color: "var(--ink-3)" }}>ÚLTIMA VISITA</span>
                  <span className="mono" style={{ fontSize: "9px", color: "var(--ink-3)", textAlign: "right" }}>ESTADO</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "var(--radius-sm)", background: "var(--raised)", alignItems: "center", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--ink)" }}>M. Fernández</span>
                  <span className="mono" style={{ fontSize: "11px", color: "var(--ink-2)" }}>hace 5 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "var(--radius-xs)", background: "var(--success-soft)", color: "var(--success)" }}>activo</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "var(--radius-sm)", background: "var(--raised)", alignItems: "center", marginBottom: "5px" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--ink)" }}>J. Gómez</span>
                  <span className="mono" style={{ fontSize: "11px", color: "var(--ink-2)" }}>hace 68 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "var(--radius-xs)", background: "var(--signal-soft)", color: "var(--signal-text)" }}>en riesgo</span>
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr .8fr", gap: "8px", padding: "11px 10px", borderRadius: "var(--radius-sm)", background: "var(--raised)", alignItems: "center" }}>
                  <span style={{ fontSize: "12.5px", color: "var(--ink)" }}>C. Ruiz</span>
                  <span className="mono" style={{ fontSize: "11px", color: "var(--ink-2)" }}>hace 112 días</span>
                  <span style={{ textAlign: "right" }}>
                    <span className="mono" style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "var(--radius-xs)", background: "var(--danger-soft)", color: "var(--danger)" }}>inactivo</span>
                  </span>
                </div>
              </div>
              <div style={{ padding: "12px 18px", borderTop: "1px solid var(--line)", display: "flex", alignItems: "center", gap: "8px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--signal-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>3 clientes listos para recontactar automáticamente</span>
              </div>
            </div>
          </article>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "16px" }}>
            <article data-reveal style={{ padding: "24px", borderRadius: "var(--radius-lg)", background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line)", overflow: "hidden", marginBottom: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "9px 12px", background: "var(--overlay)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--smoke-3)" }}></span>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--smoke-3)" }}></span>
                  <span className="mono" style={{ fontSize: "9px", color: "var(--ink-3)", marginLeft: "6px" }}>site-audit</span>
                </div>
                <div style={{ padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ position: "relative", width: "64px", height: "64px", flex: "none", borderRadius: "50%", background: "conic-gradient(var(--smoke-4) 0 78%,var(--overlay) 78% 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--raised)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "600", color: "var(--ink)" }}>78</div>
                  </div>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "7px" }}>
                    <div>
                      <div className="mono" style={{ fontSize: "9px", color: "var(--ink-3)", marginBottom: "3px" }}>UX</div>
                      <div style={{ height: "5px", borderRadius: "var(--radius-xs)", background: "var(--overlay)" }}>
                        <div style={{ height: "100%", width: "82%", borderRadius: "var(--radius-xs)", background: "var(--smoke-5)" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: "9px", color: "var(--ink-3)", marginBottom: "3px" }}>Conversión</div>
                      <div style={{ height: "5px", borderRadius: "var(--radius-xs)", background: "var(--overlay)" }}>
                        <div style={{ height: "100%", width: "64%", borderRadius: "var(--radius-xs)", background: "var(--smoke-5)" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line-strong)", color: "var(--ink-2)", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>04 / Web</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "600", letterSpacing: "-.01em", color: "var(--ink)" }}>Website Intelligence Audit</h3>
              <p style={{ margin: "0 0 16px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--ink-2)" }}>
                Analiza páginas web y detecta oportunidades de comunicación, UX, conversión y posicionamiento.
              </p>
              <a className="link-arrow" href={links.cta}>
                {"Ver solución "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
            <article data-reveal style={{ padding: "24px", borderRadius: "var(--radius-lg)", background: "var(--surface)", border: "1px solid var(--line)" }}>
              <div style={{ borderRadius: "var(--radius-md)", background: "var(--raised)", border: "1px solid var(--line)", padding: "18px 16px", marginBottom: "18px" }}>
                <div className="mono" style={{ fontSize: "9px", color: "var(--ink-3)", marginBottom: "14px" }}>RENDIMIENTO DEL CANAL</div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "78px" }}>
                  <div style={{ flex: "1", height: "38%", borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: "var(--smoke-2)", transformOrigin: "bottom", animation: "barrise .8s ease .1s both" }}></div>
                  <div style={{ flex: "1", height: "56%", borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: "var(--smoke-3)", transformOrigin: "bottom", animation: "barrise .8s ease .2s both" }}></div>
                  <div style={{ flex: "1", height: "44%", borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: "var(--smoke-2)", transformOrigin: "bottom", animation: "barrise .8s ease .3s both" }}></div>
                  <div style={{ flex: "1", height: "72%", borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: "var(--smoke-4)", transformOrigin: "bottom", animation: "barrise .8s ease .4s both" }}></div>
                  <div style={{ flex: "1", height: "88%", borderRadius: "var(--radius-xs) var(--radius-xs) 0 0", background: "var(--signal)", transformOrigin: "bottom", animation: "barrise .8s ease .5s both" }}></div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "12px" }}>
                <span className="mono" style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "var(--radius-sm)", border: "1px solid var(--line-strong)", color: "var(--ink-2)", letterSpacing: ".08em" }}>CONCEPT</span>
                <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)" }}>05 / Contenido</span>
              </div>
              <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "600", letterSpacing: "-.01em", color: "var(--ink)" }}>YouTube & Personal Brand Intelligence</h3>
              <p style={{ margin: "0 0 16px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--ink-2)" }}>Análisis de canales, contenido, posicionamiento y estrategia para marca personal.</p>
              <a className="link-arrow" href={links.cta}>
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
