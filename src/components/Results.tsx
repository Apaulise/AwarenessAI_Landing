import { links } from "@/config";

export default function Results() {
  if (!links.showResults) return null;
  return (
    <section style={{ position: "relative", padding: "clamp(64px,8vw,104px) clamp(18px,5vw,48px)", background: "linear-gradient(180deg, var(--surface), var(--bg) clamp(80px,15vw,180px))" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "700px", marginBottom: "36px" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: "16px" }}>— Impacto</div>
          <h2 style={{ margin: "0 0 14px", fontSize: "clamp(26px,3.6vw,42px)", lineHeight: "1.1", letterSpacing: "-.02em", fontWeight: "600", textWrap: "balance", color: "var(--ink)" }}>
            La tecnología importa.
            <br />
            <span style={{ color: "var(--ink-2)" }}>El resultado importa más.</span>
          </h2>
        </div>
        <div data-reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: "clamp(32px,5vw,56px)", alignItems: "center", marginBottom: "clamp(56px,7vw,84px)", paddingBottom: "clamp(48px,6vw,72px)", borderBottom: "1px solid var(--line)" }}>
          <div>
            <div className="mono" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 12px", borderRadius: "var(--radius-sm)", background: "var(--success-soft)", border: "1px solid var(--success)", color: "var(--success)", fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "18px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Caso real
            </div>
            <h3 style={{ margin: "0 0 16px", fontSize: "clamp(21px,2.7vw,29px)", fontWeight: "600", letterSpacing: "-.01em", lineHeight: "1.25", textWrap: "balance", color: "var(--ink)" }}>TH Barbershop — de local sin registro a sistema de retención de clientes</h3>
            <p style={{ margin: "0 0 14px", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)" }}>
              TH Barbershop, una barbería con equipo de 3 barberos, no tenía forma de saber quién era cliente nuevo, quién volvía y quién se estaba yendo sin avisar. Cada visita se perdía en la memoria del dueño o del barbero de turno, y las promociones de reactivación se disparaban a ciegas.
            </p>
            <p style={{ margin: "0 0 14px", fontSize: "15px", lineHeight: "1.65", color: "var(--ink-2)" }}>
              Desarrollé un CRM a medida que registra cada visita en segundos —servicio, monto, medio de pago y barbero— y clasifica automáticamente a cada cliente según su comportamiento real: nuevo, activo, próximo a regresar o en riesgo de perderse.
            </p>
            <p style={{ margin: "0 0 22px", fontSize: "15px", lineHeight: "1.65", color: "var(--ink)" }}>
              {"El resultado: "}
              <span style={{ color: "var(--signal-text)", fontWeight: "600" }}>92%</span>
              {" de las visitas quedan identificadas con ficha de cliente (vs. registro nulo antes), con seguimiento automático de tasa de recurrencia, facturación por medio de pago y horarios pico. Hoy TH Barbershop sabe, en tiempo real, cuánto factura, quién está por volver y a quién tiene que escribirle antes de perderlo."}
            </p>
          </div>
          <div style={{ position: "relative", background: "var(--surface)", border: "1px solid var(--line-strong)", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 30px 70px -28px rgba(0,0,0,.6)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "1px solid var(--line)", background: "var(--raised)" }}>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F56" }}></span>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }}></span>
              <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#27C93F" }}></span>
              <span className="mono" style={{ marginLeft: "8px", fontSize: "11px", color: "var(--ink-3)" }}>TH Barber — Clientes</span>
            </div>
            <div style={{ display: "flex" }}>
              <div data-th-sidebar style={{ width: "118px", flex: "none", padding: "16px 10px", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: "600", color: "var(--ink)" }}>TH</span>
                  <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".02em", color: "var(--ink)" }}>TH BARBER</span>
                </div>
                <span style={{ fontSize: "11.5px", color: "var(--ink-3)" }}>Registrar</span>
                <span style={{ fontSize: "11.5px", color: "var(--ink)", fontWeight: "600" }}>Clientes</span>
                <span style={{ fontSize: "11.5px", color: "var(--ink-3)" }}>Seguimientos</span>
                <span style={{ fontSize: "11.5px", color: "var(--ink-3)" }}>Números</span>
              </div>
              <div style={{ flex: "1", minWidth: "0", padding: "16px 18px" }}>
                <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--ink)", marginBottom: "2px" }}>Clientes</div>
                <div className="mono" style={{ fontSize: "10.5px", color: "var(--ink-3)", marginBottom: "12px" }}>84 fichas</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  <span className="mono" style={{ fontSize: "9.5px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--line-strong)", color: "var(--ink)" }}>Todos 84</span>
                  <span className="mono" style={{ fontSize: "9.5px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--line)", color: "var(--ink-2)" }}>Nuevo 52</span>
                  <span className="mono" style={{ fontSize: "9.5px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--success)", color: "var(--success)" }}>Activo 6</span>
                  <span className="mono" style={{ fontSize: "9.5px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--signal)", color: "var(--signal-text)" }}>Próx. 3</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                  <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--smoke-4)" }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "600", color: "var(--ink)" }}>M. ALVAREZ</div>
                    <div className="mono" style={{ fontSize: "9.5px", color: "var(--ink-3)", marginTop: "2px" }}>Vino una sola vez, hace 6 días · Nuevo</div>
                  </div>
                  <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--signal)" }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "600", color: "var(--ink)" }}>J. FERREYRA</div>
                    <div className="mono" style={{ fontSize: "9.5px", color: "var(--ink-3)", marginTop: "2px" }}>Cada 18 días, pasaron 24 · Próximo a regresar</div>
                  </div>
                  <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--danger)" }}>
                    <div style={{ fontSize: "11.5px", fontWeight: "600", color: "var(--ink)" }}>L. SUAREZ</div>
                    <div className="mono" style={{ fontSize: "9.5px", color: "var(--ink-3)", marginTop: "2px" }}>Sin visitas hace 21 días · En riesgo</div>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
                  <div>
                    <div className="mono" style={{ fontSize: "8.5px", color: "var(--ink-3)", textTransform: "uppercase" }}>Facturación</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)", marginTop: "2px" }}>$890.000</div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "8.5px", color: "var(--ink-3)", textTransform: "uppercase" }}>Ticket prom.</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)", marginTop: "2px" }}>$21.500</div>
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: "8.5px", color: "var(--ink-3)", textTransform: "uppercase" }}>Cobertura</div>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--signal-text)", marginTop: "2px" }}>92%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
