"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulación de envío
    setTimeout(() => {
      setLoading(false);
      alert("Mensaje enviado");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[90vh] flex bg-black text-gray-100 px-6 sm:px-12 md:px-24 overflow-visible"
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
              <strong>{t("contact.info.phone")}:</strong> +54 9 11 6472-9851
            </p>
          </div>
        </div>

        {/* Columna derecha - formulario */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
          <input
            type="text"
            placeholder={t("contact.form.name")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <input
            type="text"
            placeholder={t("contact.form.subject")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            required
          />
          <textarea
            placeholder={t("contact.form.message")}
            className="w-full px-4 py-2 rounded bg-gray-100 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            rows={5}
            required
          ></textarea>
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
