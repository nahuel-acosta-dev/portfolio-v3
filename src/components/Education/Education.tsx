"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const Education = () => {
  const { t } = useTranslation();

  const item = (key: number) => {
    return (
      <div key={key} className="flex flex-col gap-5 mt-2">
        <span className="text-md  text-gray-900 font-bold">2015 - 2016</span>
        <p className="text-base text-gray-800">
          Curso de programación básica en JavaScript y fundamentos de lógica.
        </p>
        <a
          href="https://ejemplo1.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm relative inline-block transition-all duration-300 
    bg-gradient-to-r from-gray-500 to-gray-500 bg-no-repeat bg-left-bottom 
    bg-[length:0%_2px] hover:bg-[length:30%_2px]"
        >
          https://ejemplo1.com
        </a>
      </div>
    );
  };

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col text-black px-6 sm:px-12 md:px-24 section-max mb-5"
    >
      <div className="flex flex-col gap-36">
        <div className="flex flex-col max-w-2xs mt-26">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {t("about.title")}
          </h2>
          <p className="text-base sm:text-lg ">{t("about.intro")}</p>
        </div>
      </div>

      {/* Grilla de educación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-25">
        {/* Items */}

        {[1, 2, 3, 4, 5, 6].map((index) => item(index))}
      </div>
    </section>
  );
};

export default Education;
