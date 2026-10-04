import { links } from "@/config";
import ImageStack, { type StackSlide } from "./ImageStack";
import CrmMockup from "./CrmMockup";

// The real storefront photo plus the illustrated CRM screen; add more entries to extend the stack.
const TH_SLIDES: StackSlide[] = [
  { label: "La fachada real", src: "/th-barber-fachada.jpg", alt: "Fachada de TH Barbershop Studio: cartel de madera con el logo, poste de barbero y el local visto a través de la vidriera" },
  { label: "El sistema (ilustrativo)", content: <CrmMockup />, designWidth: 400, alt: "Ilustración del sistema de TH Barbershop: lista de clientes clasificados como nuevos, activos, próximos a regresar o en riesgo, con facturación y cobertura" },
];

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
              Desarrollamos un CRM a medida que registra cada visita en segundos —servicio, monto, medio de pago y barbero— y clasifica automáticamente a cada cliente según su comportamiento real: nuevo, activo, próximo a regresar o en riesgo de perderse.
            </p>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.65", color: "var(--ink)" }}>
              {"El resultado: "}
              <span style={{ color: "var(--signal-text)", fontWeight: "600" }}>92%</span>
              {" de las visitas quedan identificadas con ficha de cliente (vs. registro nulo antes), con seguimiento automático de tasa de recurrencia, facturación por medio de pago y horarios pico. Hoy TH Barbershop sabe, en tiempo real, cuánto factura, quién está por volver y a quién tiene que escribirle antes de perderlo."}
            </p>
          </div>
          <ImageStack slides={TH_SLIDES} />
        </div>
      </div>
    </section>
  );
}
