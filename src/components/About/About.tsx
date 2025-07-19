"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="relative h-[65vh] flex flex-col justify-center gap-4 bg-black overflow-visible"
    >
      {/* Rectángulo vertical decorativo */}
      <div className="absolute right-60 top-[-10%]  h-[120%] w-[400px] bg-amber-500 translate-y-[20%] rounded-sm z-0 " />

      {/* Contenido */}
      <div className="text-left text-amber-50 pl-36 z-10">
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
          <span className="block">{t("hero.line1")}</span>
          <span className="block">{t("hero.line2")}</span>
          <span className="block">{t("hero.line3")}</span>
        </h1>
      </div>
    </section>
  );
};

export default About;
