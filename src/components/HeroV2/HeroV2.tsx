"use client";

import ButtonRipple from "@/ui/ButtonRipple";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const HeroV2 = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative section-padding">
      <div className="mx-auto w-full max-w-4xl px-4 text-center md:max-w-5xl">
        {/* Línea superior en mayúsculas: tracking más suave en mobile para evitar overflow */}
        <p
          className="text-sm sm:text-base md:text-xl tracking-[0.18em] sm:tracking-[0.25em] text-accent uppercase text-pretty break-words [overflow-wrap:anywhere]"
          suppressHydrationWarning
        >
          {t("hero.line1")} {t("hero.line2")}
        </p>

        {/* Título principal con balance y tamaños responsivos */}
        <h1
          className="mt-3 font-heading text-balance text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight sm:leading-[1.1]"
          suppressHydrationWarning
        >
          {t("hero.line3")}
        </h1>

        {/* Subtítulo: wrap seguro + centrado en mobile */}
        <p
          className="mt-4 text-white/80 text-pretty break-words [overflow-wrap:anywhere] text-base sm:text-lg leading-relaxed"
          suppressHydrationWarning
        >
          {t("hero.line4")}
        </p>

        <ButtonRipple
          href="#portfolio"
          className="mt-7 inline-flex items-center gap-3 rounded-full px-5 py-3 text-base sm:text-lg"
        >
          <span suppressHydrationWarning>{t("hero.viewWorks")}</span>
        </ButtonRipple>
      </div>

      {/* Glow de fondo: dimensiones y posición responsivas para que no “empuje” el layout */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 mx-auto opacity-70 blur-3xl
                   bottom-[-48px] h-[160px] max-w-[90%]
                   sm:bottom-[-64px] sm:h-[200px] sm:max-w-[80%]
                   md:bottom-[-80px] md:h-[220px] md:max-w-4xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-600), transparent 70%)",
        }}
      />
    </section>
  );
};

export default HeroV2;
