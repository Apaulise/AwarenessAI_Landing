import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-hanken", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jetbrains", display: "swap" });

export const metadata: Metadata = {
  title: "AwarenessAI — Tu negocio puede funcionar mejor",
  description:
    "Analizamos cómo funciona tu empresa, detectamos procesos que pueden mejorar y construimos soluciones con Inteligencia Artificial, automatización y software.",
  icons: { icon: "/awareness-mark.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${hanken.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
