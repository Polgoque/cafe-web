/* eslint-disable @next/next/no-img-element */

export const metadata = {
  title: "Origen — Alma Morena",
  description: "Café de especialidad boliviano desde Los Yungas.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#FDF7EE] text-zinc-900">
      {/* HERO */}
      <section className="relative">
        <img
          src="/images/yungas-paisaje.jpg"
          alt="Los Yungas, Bolivia"
          className="h-[44vh] w-full object-cover md:h-[52vh] lg:h-[58vh]"
        />
        {/* Velo cálido */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FDF7EE] via-[#F9EBD4]/60 to-transparent" />
        {/* Titular */}
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-10">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#5C4630]">
              Origen: Los Yungas, Bolivia
            </h1>
            <p className="mt-2 max-w-2xl text-[#7A5C3A]">
              Alturas, biodiversidad y tradición cafetalera. De allí nace el alma de nuestro café.
            </p>
          </div>
        </div>
      </section>

      {/* TEXTO PRINCIPAL */}
      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#5C4630]">
              Un café con origen y propósito
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-[17px] text-zinc-800">
              <p>
                En <span className="font-medium text-[#8a5f1f]">Alma Morena</span> producimos y llevamos hasta tu taza un café de especialidad boliviano
                cultivado en los cerros de Los Yungas (1.500 – 1.700 msnm), una de las regiones más
                reconocidas por su riqueza cafetalera.
              </p>
              <p>
                Nuestro compromiso empieza en origen: trabajamos junto a productores locales para
                garantizar prácticas sostenibles y una calidad excepcional en cada grano. El resultado
                es un café con cuerpo equilibrado, notas intensas y un perfil único que refleja el alma
                de Bolivia.
              </p>
              <p>
                Hoy, ese orgullo boliviano cruza fronteras. Estamos presentes tanto en el mercado
                nacional como en España, acercando a los consumidores un café auténtico, trazable y de
                excelencia.
              </p>
              <p>
                Alma Morena es más que café: es origen, calidad y una experiencia que conecta al
                productor con el consumidor en cada sorbo.
              </p>
            </div>
          </div>

          <div className="md:col-span-5">
            {/* Tarjetas sencillas */}
            <div className="grid gap-4">
              <div className="rounded-2xl border border-[#E8DCC6] bg-white/70 p-4 shadow-sm">
                <h3 className="text-[#5C4630] font-semibold">Trabajo en origen</h3>
                <p className="mt-1 text-sm text-[#7A5C3A]/90">
                  Relación directa con productores y apoyo a prácticas sostenibles.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E8DCC6] bg-white/70 p-4 shadow-sm">
                <h3 className="text-[#5C4630] font-semibold">Calidad de especialidad</h3>
                <p className="mt-1 text-sm text-[#7A5C3A]/90">
                  Selección cuidadosa y tueste que realza el carácter de cada lote.
                </p>
              </div>
              <div className="rounded-2xl border border-[#E8DCC6] bg-white/70 p-4 shadow-sm">
                <h3 className="text-[#5C4630] font-semibold">Trazabilidad</h3>
                <p className="mt-1 text-sm text-[#7A5C3A]/90">
                  Transparencia desde la finca hasta tu taza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOSAICO DE IMÁGENES */}
      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-[#E8DCC6] bg-white shadow-sm">
            <img
              src="/images/yungas-cosecha.png"
              alt="Paisaje cafetalero en Los Yungas"
              className="h-[320px] w-full object-cover md:h-[380px]"
            />
            <figcaption className="px-4 py-3 text-sm text-[#7A5C3A]">
              Los Yungas: selva alta, humedad y suelos fértiles que favorecen la calidad del café.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-[#E8DCC6] bg-white shadow-sm">
            <img
              src="/images/yungas-secado.jpg"
              alt="Campesinos cosechando café"
              className="h-[320px] w-full object-cover md:h-[380px]"
            />
            <figcaption className="px-4 py-3 text-sm text-[#7A5C3A]">
              Cosecha manual y selección en finca: detalle que se siente en la taza.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CITA / CIERRE */}
      <section className="bg-[#F9EBD4] border-y border-[#E8DCC6]">
        <div className="mx-auto max-w-4xl px-6 py-10 text-center">
          <p className="text-lg md:text-xl text-[#5C4630]">
            “Creemos en un café que cuenta de dónde viene. En cada sorbo hay paisaje, manos y
            memoria.”
          </p>
        </div>
      </section>
    </main>
  );
}
