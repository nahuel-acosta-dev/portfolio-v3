"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(formEndpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Hubo un error al enviar el mensaje.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center">
          <h3 className="font-heading text-5xl md:text-6xl">
            {t("contact.title", "Contact")}
            <span className="text-accent">.</span>
          </h3>
        </div>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-2"
        >
          <input
            name="name"
            placeholder={t("contact.form.name")}
            required
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder={`${t("contact.form.email")}*`}
            required
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            type="tel"
            name="phone"
            placeholder={`${t("contact.info.phone")}`}
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <input
            name="subject"
            placeholder={t("contact.form.subject")}
            className="w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            required
            rows={6}
            className="col-span-full w-full rounded-md bg-white/10 px-3 py-3 outline-none ring-1 ring-white/10 focus:ring-accent"
          />

          {/* honeypot opcional anti‑bots */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="col-span-full text-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3 disabled:opacity-60"
            >
              <span>
                {loading ? t("contact.form.sending") : t("contact.form.send")}
              </span>
              <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black">
                →
              </span>
            </button>

            {submitted && (
              <p className="mt-3 text-green-400">
                {" "}
                {t("contact.form.success", "Mensaje enviado con éxito.")}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
