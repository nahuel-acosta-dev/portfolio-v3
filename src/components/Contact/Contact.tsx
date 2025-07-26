"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch(formEndpoint, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
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
    <section
      id="contact"
      className="relative min-h-[90vh] flex bg-black text-gray-100 px-6 sm:px-12 md:px-24 overflow-visible section-max"
    >
      <div className="w-full flex flex-col md:flex-row gap-16 mt-32 z-10">
        {/* Columna izquierda */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t("contact.title", "Contact")}
          </h2>
          <p className="text-base sm:text-md text-gray-400">
            {t(
              "contact.description",
              "Feel free to reach out for collaborations or just a friendly hello!"
            )}
          </p>

          <div className="mt-6 space-y-3 text-gray-300">
            <p>
              <strong>{t("contact.info.name")}:</strong> Nahuel Acosta
            </p>
            <p>
              <strong>{t("contact.info.address")}:</strong> Buenos Aires,
              Argentina
            </p>
            <p>
              <strong>{t("contact.info.email")}:</strong>{" "}
              brianacostanahuel2000@gmail.com
            </p>
            <a
              href="/cv-nahuel-acosta.pdf" // Asegurate de poner tu archivo PDF en `public/`
              download
              className="inline-flex items-center gap-2 mt-6 px-5 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 hover:scale-105 transition-transform duration-300 w-fit shadow-md"
            >
              <FaDownload className="text-lg" />
              {t("contact.downloadCv", "Descargar CV")}
            </a>
          </div>
        </div>

        {/* Columna derecha - formulario */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 space-y-4 pb-5"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact.form.name")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contact.form.email")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder={t("contact.form.subject")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <textarea
            name="message"
            placeholder={t("contact.form.message")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            rows={5}
            required
          ></textarea>

          {submitted && (
            <p className="text-green-400">
              {t("contact.form.success", "Mensaje enviado con éxito.")}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 rounded bg-gray-300 text-black font-semibold transition-transform duration-300 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 hover:bg-white"
            }`}
          >
            {loading ? t("contact.form.sending") : t("contact.form.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
