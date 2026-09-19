export default function Differentiators() {
  return (
    <section style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "760px", marginBottom: "clamp(44px,6vw,64px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "16px" }}>— Por qué nosotros</div>
          <h2 style={{ margin: "0", fontSize: "clamp(26px,3.8vw,44px)", lineHeight: "1.1", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            No vendemos Inteligencia Artificial.
            <br />
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#3B82F6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Resolvemos problemas con ella.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "16px" }}>
          <div data-reveal style={{ padding: "30px 28px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139,92,246,.12)", border: "1px solid rgba(139,92,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 2" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: "700", letterSpacing: "-.01em" }}>Tecnología con propósito</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#94A3B8" }}>No implementamos IA simplemente porque pueda hacerse. La usamos cuando resuelve algo.</p>
          </div>
          <div data-reveal style={{ padding: "30px 28px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21V8l9-5 9 5v13" />
                <path d="M9 21v-6h6v6" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: "700", letterSpacing: "-.01em" }}>Construido alrededor del negocio</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#94A3B8" }}>La solución se adapta al proceso, no el negocio al software.</p>
          </div>
          <div data-reveal style={{ padding: "30px 28px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)" }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(34,211,238,.12)", border: "1px solid rgba(34,211,238,.28)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 12px", fontSize: "19px", fontWeight: "700", letterSpacing: "-.01em" }}>Medimos impacto</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#94A3B8" }}>
              Buscamos resultados observables: tiempo, eficiencia, atención, ventas, control e información.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
