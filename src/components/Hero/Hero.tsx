"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import "@/lib/i18n/client";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative section-max overflow-hidden sm:py-10"
    >
      <div className="absolute inset-0 hidden lg:block ">
        <div className="h-[75%] bg-black" />
        <div className="h-[25%] bg-transparent" />
      </div>

      {/* Fondo completamente negro para pantallas menores a lg */}
      <div className="absolute inset-0 bg-black block lg:hidden pt-20 " />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row justify-between gap-10 ">
        {/* Texto */}
        <div className="z-10 text-amber-50 w-full lg:w-1/2 text-center md:mt-15 mb-5 mt-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-light">
            <span className="block  tracking-tight">{t("hero.line1")}</span>
            <span className="block text-amber-100  tracking-tight">
              {t("hero.line2")}
            </span>
            <span className="block text-sm sm:text-base text-gray-300 mt-2 leading-relaxed text-center">
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

        {/* Imagen */}
        <div className="w-full lg:w-1/2 flex justify-center  mt-5">
          <Image
            src="/portada.png"
            alt="Nahuel Acosta"
            width={500}
            height={500}
            className="rounded-md object-cover w-[240px] sm:w-[300px] md:w-[400px] lg:w-[480px] xl:w-[520px] h-auto 
      translate-y-0 md:translate-y-21 transition-transform duration-300"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
