"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend"; // 👈 este es el backend correcto
import { getOptions } from "./config";

void i18n
  .use(HttpBackend) //
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...getOptions(),
    react: { useSuspense: false },
    detection: {
      order: ["cookie", "localStorage", "navigator"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
