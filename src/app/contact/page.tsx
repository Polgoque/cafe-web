import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contacto — Alma Morena",
  description: "Escríbenos para muestras, pedidos o colaboraciones.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#FFFCF7] text-[#1A1A1A]">
      <section className="mx-auto max-w-7xl px-6 pt-8">
        <div className="rounded-2xl border border-[#E5DED6] bg-white/70 px-6 py-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#5C4630]">
            Hablemos de café
          </h1>
          <p className="mt-1 text-[#7A5C3A]">
            Muestras para cafeterías, pedidos al por menor o colaboraciones. Te respondemos en 24–48h.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <ContactForm />
      </section>
    </main>
  );
}
