import Link from "next/link";
import ProductCarousel from "../components/ProductCarousel";

const products = [
  {
    name: "Café Alma Morena — Yungas",
    description: "Café boliviano de especialidad. 250g.",
    price: "€12,00",
    image: "/images/bolsaCafe.png",
  },
  {
    name: "Café Alma Morena — Caranavi",
    description: "Notas a cacao y frutas rojas. 250g.",
    price: "€13,50",
    image: "/images/bolsa2.png",
  },
  {
    name: "Edición Limitada — Geisha",
    description: "Lote pequeño, floral y cítrico. 200g.",
    price: "€19,90",
    image: "/images/bolsaCafe.png",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO cálido (sin imagen) */}
      <section className="bg-[#F9EBD4] border-b border-[#E8DCC6]">
        <div className="mx-auto max-w-7xl px-6 py-10 text-center">
          <p className="uppercase tracking-[0.18em] text-xs md:text-sm text-[#7A5C3A]">
            Café de especialidad boliviano
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-[#5C4630]">
            Del productor a tu taza
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[#7A5C3A]">
            Relación directa con origen, tueste fresco y perfil de taza transparente.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="#cafes"
              className="rounded-xl bg-[#C9A777] px-5 py-2.5 text-white font-medium shadow-sm hover:brightness-95"
            >
           
              Nuestro origen
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque “razones” breve (coherente con Origen) */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-[#E5DED6] bg-white/70 p-4 shadow-sm">
            <h3 className="text-[#5C4630] font-semibold">Trabajo en origen</h3>
            <p className="mt-1 text-sm text-[#7A5C3A]/90">
              Productores locales, prácticas sostenibles y trazabilidad real.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DED6] bg-white/70 p-4 shadow-sm">
            <h3 className="text-[#5C4630] font-semibold">Calidad de especialidad</h3>
            <p className="mt-1 text-sm text-[#7A5C3A]/90">
              Selección cuidada y tueste que realza el carácter de cada lote.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E5DED6] bg-white/70 p-4 shadow-sm">
            <h3 className="text-[#5C4630] font-semibold">Entrega fresca</h3>
            <p className="mt-1 text-sm text-[#7A5C3A]/90">
              Barcelona & envíos a toda España. Tu café, en su mejor momento.
            </p>
          </div>
        </div>
      </section>

      {/* Carrusel enmarcado */}
      <section id="cafes" className="mx-auto max-w-7xl px-6 pb-4">
        <div className="rounded-2xl border border-[#E5DED6] bg-white/70 px-2 sm:px-4 py-4">
          <h2 className="sr-only">Nuestros cafés</h2>
          <ProductCarousel products={products} />
        </div>
      </section>

      {/* Franja de confianza / servicio */}
      <section className="bg-[#F1E7D7] border-y border-[#E8DCC6]">
        <div className="mx-auto max-w-4xl px-6 py-8 text-center text-[#5C4630]">
          Tostamos en lotes cortos. Envíos 24–48h. Compromiso con origen y transparencia.
        </div>
      </section>
    </>
  );
}
