// Illustrative TH Barbershop CRM screen. Rendered inside the image stack at a fixed width.
export default function CrmMockup() {
  return (
    <div style={{ background: "var(--surface)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "12px 16px", borderBottom: "1px solid var(--line)", background: "var(--raised)" }}>
        <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FF5F56" }}></span>
        <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#FFBD2E" }}></span>
        <span style={{ width: "11px", height: "11px", borderRadius: "50%", background: "#27C93F" }}></span>
        <span className="mono" style={{ marginLeft: "8px", fontSize: "12px", color: "var(--ink-2)" }}>TH Barber — Clientes</span>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "118px", flex: "none", padding: "16px 10px", borderRight: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
            <span style={{ width: "20px", height: "20px", borderRadius: "50%", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "8px", fontWeight: "600", color: "var(--ink)" }}>TH</span>
            <span style={{ fontSize: "11px", fontWeight: "600", letterSpacing: ".02em", color: "var(--ink)" }}>TH BARBER</span>
          </div>
          <span style={{ fontSize: "12.5px", color: "var(--ink-3)" }}>Registrar</span>
          <span style={{ fontSize: "12.5px", color: "var(--ink)", fontWeight: "600" }}>Clientes</span>
          <span style={{ fontSize: "12.5px", color: "var(--ink-3)" }}>Seguimientos</span>
          <span style={{ fontSize: "12.5px", color: "var(--ink-3)" }}>Números</span>
        </div>
        <div style={{ flex: "1", minWidth: "0", padding: "16px 18px" }}>
          <div style={{ fontSize: "15px", fontWeight: "600", color: "var(--ink)", marginBottom: "2px" }}>Clientes</div>
          <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginBottom: "12px" }}>84 fichas</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
            <span className="mono" style={{ fontSize: "12px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--line-strong)", color: "var(--ink)" }}>Todos 84</span>
            <span className="mono" style={{ fontSize: "12px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--line)", color: "var(--ink-2)" }}>Nuevo 52</span>
            <span className="mono" style={{ fontSize: "12px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--success)", color: "var(--success)" }}>Activo 6</span>
            <span className="mono" style={{ fontSize: "12px", padding: "4px 9px", borderRadius: "999px", border: "1px solid var(--signal)", color: "var(--signal-text)" }}>Próx. 3</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
            <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--smoke-4)" }}>
              <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>M. ALVAREZ</div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>Vino una sola vez, hace 6 días · Nuevo</div>
            </div>
            <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--signal)" }}>
              <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>J. FERREYRA</div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>Cada 18 días, pasaron 24 · Próximo a regresar</div>
            </div>
            <div style={{ padding: "10px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)", borderLeft: "2px solid var(--danger)" }}>
              <div style={{ fontSize: "12.5px", fontWeight: "600", color: "var(--ink)" }}>L. SUAREZ</div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", marginTop: "2px" }}>Sin visitas hace 21 días · En riesgo</div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid var(--line)" }}>
            <div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase" }}>Facturación</div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)", marginTop: "2px" }}>$890.000</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase" }}>Ticket prom.</div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)", marginTop: "2px" }}>$21.500</div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", textTransform: "uppercase" }}>Cobertura</div>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--signal-text)", marginTop: "2px" }}>92%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
