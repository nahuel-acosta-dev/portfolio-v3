"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-xl font-bold">
        <Link href="/">Nahuel Acosta</Link>
      </h1>
      <nav className="space-x-4">
        <Link href="#projects" className="hover:underline">
          {t("translation:projects")}
        </Link>
        <Link href="#contact" className="hover:underline">
          {t("contact")}
        </Link>
      </nav>
    </header>
  );
}
