"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const onChange =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setOk(null);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setOk(res.ok);
      if (res.ok) {
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      setOk(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-[#E5DED6] bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-[#5C4630]">
            Nombre
          </label>
          <input
            type="text"
            value={form.name}
            onChange={onChange("name")}
            required
            className="mt-1 w-full rounded-xl border border-[#E5DED6] px-3 py-2 focus:ring-2 focus:ring-[#C9A777]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#5C4630]">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={onChange("email")}
            required
            className="mt-1 w-full rounded-xl border border-[#E5DED6] px-3 py-2 focus:ring-2 focus:ring-[#C9A777]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#5C4630]">
            Teléfono
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={onChange("phone")}
            className="mt-1 w-full rounded-xl border border-[#E5DED6] px-3 py-2 focus:ring-2 focus:ring-[#C9A777]"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-[#5C4630]">
            Mensaje
          </label>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            rows={6}
            required
            className="mt-1 w-full rounded-xl border border-[#E5DED6] px-3 py-2 focus:ring-2 focus:ring-[#C9A777]"
          />
        </div>
      </div>

      {ok === true && (
        <p className="mt-4 rounded-xl bg-[#F1E7D7] px-3 py-2 text-sm text-[#5C4630]">
          ¡Gracias! Hemos recibido tu mensaje.
        </p>
      )}
      {ok === false && (
        <p className="mt-4 rounded-xl bg-[#fde8e2] px-3 py-2 text-sm text-[#7A5C3A]">
          No se pudo enviar. Intenta de nuevo.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-xl bg-[#C9A777] px-5 py-2.5 text-white font-medium shadow-sm hover:brightness-95 disabled:opacity-50"
      >
        {loading ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
