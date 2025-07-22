"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const Experience = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      company: "Freelance",
      role: "Desarrollador Fullstack",
      years: "2021 - Actualidad",
      description:
        "Desarrollo de sitios web a medida para clientes de distintos rubros. Stack principal: React, Node.js, MongoDB, Tailwind.",
      link: "https://tusitiofreelance.com", // opcional
    },
    {
      company: "Mi Empresa Actual",
      role: "Frontend Developer",
      years: "2023 - Actualidad",
      description:
        "Encargado del desarrollo de interfaces para el panel administrativo y el sitio público. Uso intensivo de React, Next.js y Payload CMS.",
      link: "https://empresa.com", // opcional
    },
  ];

  return (
    <section
      id="experience"
      className="relative min-h-[80vh] flex flex-col text-black px-6 sm:px-12 md:px-24 py-20 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">
          {t("experience.title") || "Experiencia"}
        </h2>

        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border-l-4 border-black bg-gray-50 rounded-md shadow-sm 
        hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900">
                {exp.company}
              </h3>
              <p className="text-md text-gray-700 italic mb-2">
                {exp.role} · <span className="text-gray-500">{exp.years}</span>
              </p>
              <p className="text-gray-800 mb-2">{exp.description}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 hover:opacity-80 transition"
                >
                  {exp.link}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
