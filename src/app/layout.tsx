import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "ALMA MORENA — Café de especialidad",
  description: "Café boliviano en Barcelona",
};

// src/app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-zinc-900 antialiased">
        <Navbar />
        <main className="flex-1 pt-[160px] md:pt-[180px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

