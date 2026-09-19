"use client";

import { useEffect, useRef, useState } from "react";
import { links } from "@/config";

const NAV_LINKS = [
  { href: "#soluciones", label: "Soluciones" },
  { href: "#servicios", label: "Servicios" },
  { href: "#metodologia", label: "Cómo trabajamos" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the panel when the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav
      data-nav
      className={scrolled ? "nav nav-scrolled" : "nav"}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px clamp(18px,5vw,48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#top" aria-label="AwarenessAI inicio" style={{ display: "flex", alignItems: "center", gap: 10, color: "#F8FAFC", fontWeight: 700, fontSize: 19, letterSpacing: "-.01em" }}>
          <span style={{ width: 11, height: 11, borderRadius: 3, background: "linear-gradient(135deg,#7C3AED,#22D3EE)", boxShadow: "0 0 14px rgba(124,58,237,.7)" }} />
          <span>
            Awareness
            <span style={{ background: "linear-gradient(90deg,#8B5CF6,#3B82F6,#22D3EE)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>AI</span>
          </span>
        </a>
        <div className="nav-desk" style={{ alignItems: "center", gap: 30 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href={links.cta} data-cta="nav_cta" className="nav-cta">
            Analicemos tu negocio
          </a>
          <button
            className="nav-burger"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        ref={menuRef}
        className="nav-mobile"
        style={{ maxHeight: open ? (menuRef.current?.scrollHeight ?? 400) : 0 }}
      >
        <div style={{ padding: "14px clamp(18px,5vw,48px) 26px", display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ padding: "13px 4px", color: "#CBD5E1", fontSize: 16, fontWeight: 500, borderBottom: i < NAV_LINKS.length - 1 ? "1px solid rgba(255,255,255,.05)" : undefined }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
