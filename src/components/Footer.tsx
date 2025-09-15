// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-gray-300 py-10">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-3">
        {/* Columna 1: Identidad */}
        <div>
          <h4 className="text-xl font-semibold text-white">Alma Morena</h4>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Café de especialidad boliviano en Barcelona.  
            Del productor a tu taza, con pasión y transparencia.
          </p>
        </div>

        {/* Columna 2: Contacto */}
        <div>
          <h4 className="text-lg font-semibold text-white">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              📧{" "}
              <a
                href="mailto:almamorena@gmail.com"
                className="hover:underline"
              >
                almamorena@gmail.com
              </a>
            </li>
            <li>
              📱{" "}
              <a href="tel:+34622225108" className="hover:underline">
                +34 622 225 108
              </a>
            </li>
            <li>📍 Barcelona · Bolivia</li>
          </ul>
        </div>

        {/* Columna 3: Instagram */}
        <div>
          <h4 className="text-lg font-semibold text-white">Síguenos</h4>
          <p className="mt-3 text-sm">
            <a
              href="https://instagram.com/alma.morena.cafe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C9A777] transition-colors"
            >
              @alma.morena.cafe
            </a>
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Alma Morena — Todos los derechos reservados
      </div>
    </footer>
  );
}
