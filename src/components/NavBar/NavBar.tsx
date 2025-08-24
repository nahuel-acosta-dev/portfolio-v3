"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeAndGo = () => setOpen(false);
  const { t } = useTranslation();

  // Altura del navbar (ajustá si cambiás paddings)
  //const NAV_H_DESKTOP = 80; // px
  //const NAV_H_MOBILE = 72; // px

  return (
    <>
      {/* NAV fijo arriba */}
      <nav className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading text-2xl font-bold text-white"
            onClick={closeAndGo}
          >
            <span className="rounded bg-gradient-to-r from-brand-500 to-brand-600 px-2 py-1 text-white">
              NAHUEL
            </span>
            <span className="hidden sm:inline text-accent">Acosta</span>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <ul
            className={`md:flex md:items-center md:gap-10 ${
              open ? "mt-4 flex flex-col gap-6" : "hidden"
            }`}
          >
            <li>
              <a
                href="#hero"
                className="transition hover:text-accent"
                onClick={closeAndGo}
                suppressHydrationWarning
              >
                {t(`header.sections.home`)}{" "}
              </a>
            </li>
            <li>
              <a
                href="#me"
                className="transition hover:text-accent"
                onClick={closeAndGo}
              >
                Cv
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="transition hover:text-accent"
                onClick={closeAndGo}
                suppressHydrationWarning
              >
                {t(`header.sections.portfolio`)}{" "}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition hover:text-accent"
                onClick={closeAndGo}
                suppressHydrationWarning
              >
                {t(`header.sections.contact`)}{" "}
              </a>
            </li>
            {/*<li>
              <a
                href="#contact"
                className="border-b-2 border-accent pb-1 font-semibold"
                onClick={closeAndGo}
              >
                Let’s talk
              </a>
            </li>*/}
          </ul>
        </div>
      </nav>

      {/* Spacer para que el contenido no quede tapado por el nav fijo */}
      <div aria-hidden className="h-[72px] md:h-[80px]" />
    </>
  );
}
