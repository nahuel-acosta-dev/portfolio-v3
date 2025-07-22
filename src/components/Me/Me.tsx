"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import "@/lib/i18n/client";

const Me = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative h-[95vh] flex flex-col justify-center bg-black overflow-visible"
    >
      <Image
        src="/profile.png"
        alt="Nahuel Acosta"
        width={500}
        height={400}
        className="absolute object-cover rounded-md 
    top-[0%] translate-y-[20%] 
    right-[5%] z-20
    w-[280px] min-w-[240px] max-w-[340px] h-[70%]
    sm:w-[360px] sm:right-[5%] sm:max-w-[400px]
    md:w-[460px] md:right-[5%] md:max-w-[500px]
    lg:w-[600px] lg:right-[5%]
    xl:w-[760px] xl:right-[5%]
  "
        priority
      />

      {/* Contenido */}
      <div className="z-10 text-amber-50 px-6 sm:px-12 md:pl-20 lg:pl-36 text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="block">{t("hero.line1")}</span>
          <span className="block">{t("hero.line2")}</span>
          <span className="block">{t("hero.line3")}</span>
        </h1>
      </div>
    </section>
  );
};

export default Me;
