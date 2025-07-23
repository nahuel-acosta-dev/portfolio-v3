"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const Education = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative h-[30vh] flex flex-col text-black px-6 sm:px-12 md:px-24 "
    >
      <div className="my-auto flex flex-col items-center text-center">
        <a
          href="/CV_Nahuel_Acosta.pdf"
          download
          className="text-xl :text-6xl font-semibold text-black underline underline-offset-8 decoration-gray-400 hover:decoration-black transition-all duration-300"
        >
          {t("education.download")}
        </a>
        <p className="text-sm text-gray-600 mt-2">{t("education.note")}</p>
      </div>
    </section>
  );
};

export default Education;
