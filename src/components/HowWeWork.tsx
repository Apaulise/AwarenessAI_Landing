import FlowLines from "./FlowLines";

export default function HowWeWork() {
  return (
    <section id="soluciones" style={{ position: "relative", padding: "clamp(72px,9vw,120px) clamp(18px,5vw,48px)", background: "linear-gradient(180deg, var(--bg), var(--surface) clamp(80px,15vw,180px))" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "clamp(480px,85vh,820px)",
          zIndex: 0,
          pointerEvents: "none",
          transform: "scaleY(-1)",
          maskImage: "linear-gradient(to bottom, transparent, black 65%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent, black 65%)",
        }}
      >
        <FlowLines />
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: "1160px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "720px", marginBottom: "clamp(44px,6vw,64px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "var(--signal-text)", marginBottom: "16px" }}>— Cómo lo hacemos</div>
          <h2 style={{ margin: "0 0 18px", fontSize: "clamp(28px,4vw,46px)", lineHeight: "1.08", letterSpacing: "-.02em", fontWeight: "600", textWrap: "balance", color: "var(--ink)" }}>
            Encontramos oportunidades.
            <br />
            <span style={{ background: "linear-gradient(90deg,var(--signal),var(--smoke-4))", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Construimos soluciones.</span>
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "var(--ink-2)", maxWidth: "560px" }}>
            Del negocio a la oportunidad, de la oportunidad a la tecnología, de la tecnología al impacto. Un camino claro, sin humo.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "16px" }}>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "var(--radius-lg)", background: "var(--raised)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "var(--overlay)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>01</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: "var(--signal-soft)", border: "1px solid var(--signal)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--signal-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "600", letterSpacing: "-.01em", color: "var(--ink)" }}>Entender</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Entendemos cómo funciona hoy tu negocio: sus procesos, herramientas y cuellos de botella.</p>
          </div>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "var(--radius-lg)", background: "var(--raised)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "var(--overlay)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>02</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: "var(--overlay)", border: "1px solid var(--line-strong)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h4l3 8 4-16 3 8h4" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "600", letterSpacing: "-.01em", color: "var(--ink)" }}>Detectar</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Encontramos procesos lentos, repetitivos o información que hoy se está desaprovechando.</p>
          </div>
          <div data-reveal style={{ position: "relative", padding: "28px 26px", borderRadius: "var(--radius-lg)", background: "var(--raised)", border: "1px solid var(--line)", overflow: "hidden" }}>
            <span className="mono" style={{ fontSize: "52px", fontWeight: "600", color: "var(--overlay)", lineHeight: "1", position: "absolute", top: "14px", right: "20px" }}>03</span>
            <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: "var(--signal-soft)", border: "1px solid var(--signal)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--signal-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <h3 style={{ margin: "0 0 10px", fontSize: "20px", fontWeight: "600", letterSpacing: "-.01em", color: "var(--ink)" }}>Construir</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "var(--ink-2)" }}>Diseñamos e implementamos soluciones a medida, adaptadas a cómo trabajás realmente.</p>
          </div>
        </div>
        <div data-reveal style={{ marginTop: "22px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "6px", padding: "18px 20px", borderRadius: "var(--radius-lg)", background: "var(--bg)", border: "1px solid var(--line)" }}>
          <span className="mono" style={{ fontSize: "12px", color: "var(--ink)", padding: "6px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>Negocio</span>
          <span style={{ color: "var(--ink-3)" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", padding: "6px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>Oportunidad</span>
          <span style={{ color: "var(--ink-3)" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "var(--ink-2)", padding: "6px 12px", borderRadius: "var(--radius-sm)", background: "var(--raised)" }}>Tecnología</span>
          <span style={{ color: "var(--ink-3)" }}>→</span>
          <span className="mono" style={{ fontSize: "12px", color: "var(--signal-text)", padding: "6px 12px", borderRadius: "var(--radius-sm)", background: "var(--signal-soft)" }}>Impacto</span>
        </div>
      </div>
    </section>
  );
}
