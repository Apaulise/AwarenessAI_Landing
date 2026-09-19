"use client";

import { useEffect } from "react";

/**
 * Scroll reveal: every `[data-reveal]` element fades/slides in once it enters the viewport.
 * The hidden state lives in CSS behind `html.reveal-ready`, so content stays visible
 * without JS and under prefers-reduced-motion (the class is never added).
 */
export default function RevealProvider() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const html = document.documentElement;
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    html.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      html.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
