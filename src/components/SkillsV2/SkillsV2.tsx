"use client";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

// Importamos íconos de react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMui,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const { t } = useTranslation();

  const items = [
    {
      name: "HTML/CSS/JS/TYPESCRIPT",
      icon: (
        <>
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
          <FaJs className="text-yellow-400" />
          <SiTypescript className="text-blue-600" />
        </>
      ),
    },
    {
      name: "MUI/TAILWIND",
      icon: (
        <>
          <SiMui className="text-sky-500" />
          <SiTailwindcss className="text-cyan-400" />
        </>
      ),
    },
    {
      name: "REACT/NEXT",
      icon: (
        <>
          <FaReact className="text-cyan-400" />
          <SiNextdotjs className="text-white" />
        </>
      ),
    },
    {
      name: "NODEJS/MONGO-DB/EXPRESS",
      icon: (
        <>
          <FaNodeJs className="text-green-500" />
          <SiMongodb className="text-green-600" />
          <SiExpress className="text-gray-300" />
        </>
      ),
    },
    { name: "DOCKER", icon: <FaDocker className="text-blue-400" /> },
  ];

  return (
    <div>
      {/* tamaño responsivo y balance para que no se corte en móviles */}
      <h3
        className="mb-6 font-heading text-balance text-3xl sm:text-4xl md:text-5xl leading-tight"
        suppressHydrationWarning
      >
        {t("skills.title")}
        <span className="text-accent">.</span>
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex flex-wrap items-center gap-3 border-l-4 border-accent/50 pl-4"
          >
            {/* íconos no crecen, el texto puede romper línea */}
            <span className="flex shrink-0 gap-2 text-2xl sm:text-3xl">
              {item.icon}
            </span>
            <h5 className="min-w-0 font-heading text-pretty break-words [overflow-wrap:anywhere] text-xl sm:text-2xl md:text-3xl">
              {item.name}
            </h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
