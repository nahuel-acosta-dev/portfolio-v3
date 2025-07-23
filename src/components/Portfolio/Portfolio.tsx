"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
import { useRef, useState } from "react";
import Image from "next/image";
import ProjectDetails from "./ProjectDetails/ProjectDetails";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="relative min-h-[90vh] flex bg-black text-amber-50 px-6 sm:px-12 md:px-24 overflow-visible"
      ref={containerRef}
    >
      {/* Bloque izquierdo */}
      <div
        className={`w-full ${
          selectedProjectId === null && "md:w-3xl"
        } flex flex-col gap-12 mt-32 z-10`}
      >
        {/* Título y descripción */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-base sm:text-lg ">{t("portfolio.description")}</p>
        </div>

        {/* Renglones numerados */}
        {selectedProjectId === null ? (
          <>
            {/* Renglones numerados */}
            <div className="flex flex-col relative">
              {[1, 2, 3, 4].map((i, idx) => (
                <button
                  key={i}
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  onClick={() => setSelectedProjectId(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="text-left text-xl sm:text-2xl font-semibold border-b border-gray-500 py-9 
                    hover:bg-white/10 hover:text-amber-100 transition-colors duration-300 cursor-pointer rounded-sm relative"
                >
                  <span className="mr-2 hover:text-amber-100">{`0${i}.`}</span>
                  {t(`portfolio.items.${i}`)}
                </button>
              ))}
            </div>

            {/* Imagenes flotantes a la derecha al hacer hover */}
            <div className="absolute right-[14%] pointer-events-none z-[100] w-[220px] sm:w-[300px] md:w-[360px]">
              {[1, 2, 3, 4].map((i) => {
                const ref = itemRefs.current[i - 1];
                const top = ref ? ref.offsetTop + 30 : 0;

                return (
                  <Image
                    key={i}
                    src="/profile.png"
                    alt={`Preview ${i}`}
                    width={600}
                    height={600}
                    className={`absolute object-cover rounded-md transition-opacity duration-500 
                      ${hoveredIndex === i ? "opacity-100" : "opacity-0"}`}
                    style={{ top: `${top}px`, right: `${i * 4}px` }}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <ProjectDetails
            projectId={selectedProjectId}
            onBack={() => setSelectedProjectId(null)}
          />
        )}
      </div>
    </section>
  );
};

export default Portfolio;
