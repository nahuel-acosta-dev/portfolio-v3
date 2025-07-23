"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import "@/lib/i18n/client";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative h-[65vh] flex flex-col justify-center bg-black overflow-visible"
    >
      <Image
        src="/profile.png"
        alt="Nahuel Acosta"
        width={800}
        height={700}
        className="absolute object-cover rounded-md 
    top-[-10%] translate-y-[20%] 
    right-[5%] z-20
    w-[280px] min-w-[240px] max-w-[340px] h-[110%]
    sm:w-[360px] sm:right-[5%] sm:max-w-[400px]
    md:w-[460px] md:right-[5%] md:max-w-[500px]
    lg:w-[600px] lg:right-[5%]
    xl:w-[760px] xl:right-[5%]
  "
        priority
      />

      {/* Contenido */}
      {/* Contenido */}
      <div className="z-10 text-amber-50 px-6 sm:px-12 md:pl-20 lg:pl-36 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="block">{t("hero.line1")}</span>
          <span className="block text-amber-100">{t("hero.line2")}</span>
          <span className="block text-sm sm:text-base md:text-base mt-2 text-gray-300 max-w-md leading-relaxed">
            {t("hero.line3")}
          </span>
        </h1>

        <div className="mt-6">
          <a
            href="/cv-nahuel-acosta.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg text-black font-semibold bg-amber-100 hover:bg-amber-200 hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-100/30"
          >
            {t("hero.downloadCV")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
