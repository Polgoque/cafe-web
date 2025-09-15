"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";

// Enlaces (solo se muestran en modo GRANDE)
const LINKS = [
  { href: "/about", label: "Origen" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [small, setSmall] = useState(false);

  // ---- Spacer dinàmic (mide altura real del header) ----
  const headerRef = useRef<HTMLElement | null>(null);
  const [spacerH, setSpacerH] = useState(0);

  const recalc = useCallback(() => {
    if (!headerRef.current) return;
    const h = headerRef.current.getBoundingClientRect().height;
    setSpacerH(h); // si quieres un pelín más de aire: setSpacerH(h + 8)
  }, []);

  useEffect(() => {
    const onScroll = () => setSmall(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, { passive: true });
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc);
    };
  }, [recalc, small]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 bg-white border-b-2 border-[#C9A777] shadow-sm transition-all duration-300
        ${small ? "py-1" : "py-3"}`}
      >
        <div className="mx-auto max-w-7xl px-4 transition-all duration-300">
          {/* ===== Vista GRANDE (arriba del todo): logo centrado + menú a la derecha ===== */}
          {!small ? (
            <>
              {/* Fila 1: logo centrado */}
              <div className="grid grid-cols-3 items-center">
                <div />
                <Link
                  href="/"
                  className="justify-self-center flex flex-col items-center gap-2"
                >
                  <img
                    src="/images/logo.png"
                    alt="Logo Alma Morena"
                    className="w-auto h-32 transition-all duration-300"
                  />
                  <img
                    src="/images/alma-morena.svg"
                    alt="Texto Alma Morena"
                    className="w-auto h-12 transition-all duration-300"
                  />
                </Link>
                <div />
              </div>

              {/* Fila 2: menú a la derecha */}
              <nav className="flex justify-end gap-8 pb-2 pr-1 text-sm md:text-base font-medium text-zinc-800">
                {LINKS.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`group relative transition-colors ${
                        active ? "text-[#8a5f1f]" : "hover:text-[#C9A777]"
                      }`}
                    >
                      {label}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-[#C9A777] transition-transform
                          ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </>
          ) : (
            /* ===== Vista COMPACTA (al hacer scroll): logo a la izquierda ===== */
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/images/logo.png"
                  alt="Logo Alma Morena"
                  className="w-auto h-20 transition-all duration-300"
                />
                <img
                  src="/images/alma-morena.svg"
                  alt="Texto Alma Morena"
                  className="w-auto h-10 transition-all duration-300"
                />
              </Link>

              {/* En modo compacto ocultamos los enlaces */}
              <nav className="hidden" aria-hidden />
            </div>
          )}
        </div>
      </header>

      {/* Spacer FUERA del header: reserva el espacio exacto bajo el header fijo */}
      <div style={{ height: spacerH }} aria-hidden />
    </>
  );
}
