import { links } from "@/config";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ position: "relative", padding: "clamp(44px,6vw,64px) clamp(18px,5vw,48px) 40px", background: "linear-gradient(180deg, var(--surface), var(--bg) clamp(80px,15vw,180px))" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ maxWidth: "300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "9px", fontWeight: "600", fontSize: "18px", letterSpacing: "-.01em", marginBottom: "12px", color: "var(--ink)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/awareness-mark.png" alt="" style={{ width: 20, height: 20, objectFit: "contain" }} />
            Awareness<span style={{ color: "var(--ink-3)" }}>AI</span>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: "14px", lineHeight: "1.55", color: "var(--ink-3)" }}>Soluciones de IA construidas alrededor de negocios reales.</p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a className="foot-link icon-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36 }} title="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a className="foot-link icon-link" href={links.instagram} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36 }} title="Instagram">
              <FaInstagram size={16} />
            </a>
            <a className="foot-link icon-link" href={links.whatsapp} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36 }} title="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "clamp(32px,6vw,72px)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "2px" }}>Explorar</span>
            <a className="foot-link" href="#soluciones" style={{ fontSize: "14px" }}>Soluciones</a>
            <a className="foot-link" href="#proyectos" style={{ fontSize: "14px" }}>Proyectos</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <span className="mono" style={{ fontSize: "11px", color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "2px" }}>Contacto</span>
            <a className="foot-link" href={links.cta} style={{ fontSize: "14px" }}>Agendar llamada</a>
            <a className="foot-link" href="#contacto" style={{ fontSize: "14px" }}>Escribinos</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1160px", margin: "36px auto 0", paddingTop: "24px", borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono" style={{ fontSize: "12px", color: "var(--ink-3)" }}>© 2026 AwarenessAI · Argentina</span>
        <span className="mono" style={{ fontSize: "12px", color: "var(--ink-3)" }}>Primero el problema. Después la tecnología.</span>
      </div>
    </footer>
  );
}
