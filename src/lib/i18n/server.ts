import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { getOptions } from "./config";

export async function initI18nServer(lng: string, ns?: string | string[]) {
  const i18nInstance = createInstance();
  const normalizedLng = Array.isArray(lng) ? lng[0] : lng;
  const normalizedNs = Array.isArray(ns) ? ns[0] : ns;
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(normalizedLng, normalizedNs));

  return i18nInstance;
}
