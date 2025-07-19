"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
import { useRef, useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation();

  return (
    <section
      id="portfolio"
      className="relative min-h-[90vh] flex bg-black text-amber-50 px-6 sm:px-12 md:px-24 overflow-visible"
      ref={containerRef}
    >
      {/* Bloque izquierdo */}
      <div className="w-full md:w-1/2 flex flex-col gap-12 mt-32 z-10">
        {/* Título y descripción */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-base sm:text-lg text-amber-100">
            {t("portfolio.description")}
          </p>
        </div>

        {/* Renglones numerados */}
        <div className="flex flex-col relative">
          {[1, 2, 3, 4].map((i, idx) => (
            <button
              key={i}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="text-left text-xl sm:text-2xl font-semibold border-b border-amber-500 py-9 
                hover:bg-white/10 hover:text-amber-100 transition-colors duration-300 cursor-pointer rounded-sm relative"
            >
              <span className="mr-2 text-amber-400">{`0${i}.`}</span>
              {t(`portfolio.items.${i}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Imagen hover derecha */}
      {hoveredIndex !== null && itemRefs.current[hoveredIndex - 1] && (
        <Image
          src="/profile.png"
          alt="Nahuel Acosta"
          width={600}
          height={600}
          className="absolute object-cover rounded-md z-[100]
      w-[220px] sm:w-[300px] md:w-[360px] 
      right-[24%] transition-all duration-300 opacity-100"
          style={{
            top: `${itemRefs.current[hoveredIndex - 1]!.offsetTop - -30}px`,
          }}
        />
      )}
    </section>
  );
};

export default Portfolio;
