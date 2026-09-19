import { NextResponse } from "next/server";

const TEAM_SIZES = ["Solo yo", "2–10 personas", "11–50 personas", "51–200 personas", "Más de 200"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success so they don't retry.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const teamSize = clean(body.teamSize, 40);
  const details = clean(body.details, 4000);
  const source = clean(body.source, 500);

  if (!name || !EMAIL_RE.test(email) || !company) {
    return NextResponse.json({ error: "Completá nombre, email y empresa." }, { status: 400 });
  }
  if (teamSize && !TEAM_SIZES.includes(teamSize)) {
    return NextResponse.json({ error: "Tamaño de equipo inválido." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return NextResponse.json({ error: "El envío no está disponible por el momento." }, { status: 500 });
  }

  const rows: [string, string][] = [
    ["Nombre", name],
    ["Email", email],
    ["Empresa", company],
    ["Tamaño del equipo", teamSize || "—"],
    ["Qué quiere mejorar", details || "—"],
    ["Cómo nos conoció", source || "—"],
  ];

  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#111">
    <h2 style="margin:0 0 16px">Nuevo mensaje desde la landing</h2>
    ${rows
      .map(([k, v]) => `<p style="margin:0 0 12px"><strong>${k}</strong><br>${escapeHtml(v).replace(/\n/g, "<br>")}</p>`)
      .join("")}
  </div>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL || "AwarenessAI <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Nuevo contacto: ${name} (${company})`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    console.error("Contact form: Resend error", res.status, await res.text());
    return NextResponse.json({ error: "No pudimos enviar tu mensaje. Probá de nuevo en un rato." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
