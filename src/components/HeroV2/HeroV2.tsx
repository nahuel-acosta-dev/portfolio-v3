"use client";

import ButtonRipple from "@/ui/ButtonRipple";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
const HeroV2 = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative section-padding">
      <div className="mx-auto max-w-4xl px-4 text-center md:max-w-5xl">
        <p
          className="text-xl tracking-[0.3em] text-accent"
          suppressHydrationWarning
        >
          {t("hero.line1")} {t("hero.line2")}
        </p>
        <h1
          className="banner-size mt-3 font-heading text-6xl leading-[1.05] md:text-8xl"
          suppressHydrationWarning
        >
          {t("hero.line3")}
        </h1>
        <p className="mt-5 text-white/80" suppressHydrationWarning>
          {t("hero.line4")}
        </p>

        <ButtonRipple
          href="#portfolio"
          className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3"
        >
          <span suppressHydrationWarning> {t("hero.viewWorks")}</span>
        </ButtonRipple>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-80px] mx-auto h-[220px] max-w-4xl opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-brand-600), transparent 70%)",
        }}
      />
    </section>
  );
};

export default HeroV2;
