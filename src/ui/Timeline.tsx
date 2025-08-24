"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

export default function Timeline() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="mb-6 font-heading text-5xl" suppressHydrationWarning>
        {t("experience.title")}
        <span className="text-accent">.</span>
      </h3>
      <div className="mb-6 border-l-4 border-accent/50 pl-4">
        <p className="text-accent font-semibold" suppressHydrationWarning>
          {t("experience.item.years")}
        </p>
        <h5 className="font-heading text-3xl" suppressHydrationWarning>
          {t("experience.item.company")}
        </h5>
        <p className="text-white/80" suppressHydrationWarning>
          {t("experience.item.description")}
        </p>
      </div>
      {/*<div className="border-l-4 border-accent/50 pl-4">
        <p className="text-accent font-semibold">2013 - present</p>
        <h5 className="font-heading text-3xl">
          Studio Alpha.: Project Manager
        </h5>
        <p className="text-white/80">
          Vitae aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit
          aperiam nesciunt facilis!
        </p>
      </div>*/}
    </div>
  );
}
