export default function HowWeWork() {
  return (
    <section id="soluciones" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "720px", marginBottom: "clamp(44px,6vw,64px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "16px" }}>— Cómo lo hacemos</div>
          <h2 style={{ margin: "0 0 18px", fontSize: "clamp(28px,4vw,46px)", lineHeight: "1.08", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            Encontramos oportunidades.
            <br />
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Construimos soluciones.</span>
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#94A3B8", maxWidth: "560px" }}>
            Del negocio a la oportunidad, de la oportunidad a la tecnología, de la tecnología al impacto. Un camino claro, sin humo.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px" }}>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "rgba(139,92,246,.16)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>01</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(139,92,246,.14)", border: "1px solid rgba(139,92,246,.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em" }}>Entender</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Entendemos cómo funciona hoy tu negocio: sus procesos, herramientas y cuellos de botella.</p>
          </div>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "rgba(59,130,246,.16)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>02</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(59,130,246,.14)", border: "1px solid rgba(59,130,246,.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em" }}>Detectar</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Encontramos procesos lentos, repetitivos o información que hoy se está desaprovechando.</p>
          </div>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "18px", background: "linear-gradient(160deg,#0D1020,#0B0E18)", border: "1px solid rgba(255,255,255,.07)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "rgba(34,211,238,.16)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>03</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "rgba(34,211,238,.14)", border: "1px solid rgba(34,211,238,.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "700", letterSpacing: "-.01em" }}>Construir</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#94A3B8" }}>Diseñamos e implementamos soluciones a medida, adaptadas a cómo trabajás realmente.</p>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "6px", padding: "18px 20px", borderRadius: "16px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)" }}>
          <span className="mono" style={{ fontSize: "12px", color: "#E2E8F0", padding: "6px 12px", borderRadius: "8px", background: "rgba(255,255,255,.05)" }}>Negocio</span>
          <span style={{ color: "#475569" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "#C4B5FD", padding: "6px 12px", borderRadius: "8px", background: "rgba(139,92,246,.1)" }}>Oportunidad</span>
          <span style={{ color: "#475569" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "#93C5FD", padding: "6px 12px", borderRadius: "8px", background: "rgba(59,130,246,.1)" }}>Tecnología</span>
          <span style={{ color: "#475569" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "#67E8F9", padding: "6px 12px", borderRadius: "8px", background: "rgba(34,211,238,.12)" }}>Impacto</span>
        </div>
      </div>
    </section>
  );
}
