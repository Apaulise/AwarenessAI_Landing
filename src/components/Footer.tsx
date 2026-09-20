import { links } from "@/config";
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer style={{ position: "relative", padding: "clamp(44px,6vw,64px) clamp(18px,5vw,48px) 40px", borderTop: "1px solid rgba(255,255,255,.07)", background: "#060810" }}>
      <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ maxWidth: "300px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", fontSize: "19px", letterSpacing: "-.01em", marginBottom: "12px" }}>
            <span style={{ width: "11px", height: "11px", borderRadius: "3px", background: "linear-gradient(135deg,#7C3AED,#22D3EE)" }}></span>
            Awareness
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#3B82F6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
          </div>
          <p style={{ margin: "0 0 16px", fontSize: "14px", lineHeight: "1.55", color: "#64748B" }}>AI solutions built around real businesses.</p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a className="hv9" href={links.linkedin} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", color: "#94A3B8", transition: "all .2s" }} title="LinkedIn">
              <FaLinkedin size={16} />
            </a>
            <a className="hv9" href={links.instagram} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", color: "#94A3B8", transition: "all .2s" }} title="Instagram">
              <FaInstagram size={16} />
            </a>
            <a className="hv9" href={links.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", color: "#94A3B8", transition: "all .2s" }} title="WhatsApp">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>
        <div style={{ display: "flex", gap: "clamp(32px,6vw,72px)", flexWrap: "wrap" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <span className="mono" style={{ fontSize: "11px", color: "#475569", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "2px" }}>Explorar</span>
            <a className="hv9" href="#soluciones" style={{ color: "#94A3B8", fontSize: "14px" }}>Soluciones</a>
            <a className="hv9" href="#servicios" style={{ color: "#94A3B8", fontSize: "14px" }}>Servicios</a>
            <a className="hv9" href="#proyectos" style={{ color: "#94A3B8", fontSize: "14px" }}>Proyectos</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
            <span className="mono" style={{ fontSize: "11px", color: "#475569", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: "2px" }}>Contacto</span>
            <a className="hv9" href={links.cta} style={{ color: "#94A3B8", fontSize: "14px" }}>Agendar llamada</a>
            <a className="hv9" href="#contacto" style={{ color: "#94A3B8", fontSize: "14px" }}>Escribinos</a>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1160px", margin: "36px auto 0", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,.05)", display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "space-between", alignItems: "center" }}>
        <span className="mono" style={{ fontSize: "12px", color: "#475569" }}>© 2026 AwarenessAI · Argentina</span>
        <span className="mono" style={{ fontSize: "12px", color: "#475569" }}>Primero el problema. Después la tecnología.</span>
      </div>
    </footer>
  );
}
