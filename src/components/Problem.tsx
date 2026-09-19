export default function Problem() {
  return (
    <section style={{ position: "relative", padding: "clamp(64px,8vw,104px) clamp(18px,5vw,48px)", background: "linear-gradient(#080B14,#060810)" }}>
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div data-reveal style={{ maxWidth: "760px", marginBottom: "clamp(36px,5vw,56px)" }}>
          <div className="mono" style={{ fontSize: "12px", letterSpacing: ".12em", textTransform: "uppercase", color: "#22D3EE", marginBottom: "16px" }}>— El problema real</div>
          <h2 style={{ margin: "0", fontSize: "clamp(26px,3.6vw,42px)", lineHeight: "1.12", letterSpacing: "-.02em", fontWeight: "700", textWrap: "balance" }}>
            La mayoría de los negocios no necesitan más herramientas.
            <span style={{ color: "#94A3B8" }}>Necesitan mejores procesos.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "12px" }}>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“Respondemos las mismas preguntas todos los días.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“Tenemos información de clientes pero nunca la usamos.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“Todavía hacemos demasiadas cosas en Excel.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“No sabemos qué clientes dejaron de venir.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“Las tareas administrativas consumen demasiado tiempo.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "#0B0E18", border: "1px solid rgba(255,255,255,.06)", color: "#CBD5E1", fontSize: "15px", lineHeight: "1.5" }}>“Nuestras herramientas no se comunican entre sí.”</div>
          <div data-reveal style={{ padding: "20px 22px", borderRadius: "14px", background: "linear-gradient(135deg,rgba(124,58,237,.14),rgba(37,99,235,.08))", border: "1px solid rgba(139,92,246,.28)", color: "#E2E8F0", fontSize: "15px", lineHeight: "1.5", fontWeight: "500" }}>“Sabemos que podríamos usar IA, pero no sabemos dónde.”</div>
        </div>
      </div>
    </section>
  );
}
