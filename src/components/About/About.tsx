"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
import { Code, Server } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col text-black px-6 sm:px-12 md:px-24 section-max mb-5"
    >
      <div className="flex flex-col gap-36">
        {/* Título principal */}
        <div className="flex flex-col max-w-2xs mt-26">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {t("about.title")}
          </h2>
          <p className="text-base sm:text-lg">{t("about.intro")}</p>
        </div>

        {/* Sección frontend y backend */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
          {/* Frontend */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">
              {t("about.frontend.title")}
            </h3>
            <Code size={100} className="text-dark mb-4" />
            <h4 className="text-2xl font-semibold mb-2">
              {t("about.backend.title")}
            </h4>
            <p className="">{t("about.frontend.text")}</p>
          </div>

          {/* Backend */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-2">
              {t("about.backend.title")}
            </h3>
            <Server size={100} className="text-dark mb-4" />
            <h4 className="text-2xl font-semibold mb-2">
              {t("about.backend.title")}
            </h4>
            <p className="">{t("about.backend.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
