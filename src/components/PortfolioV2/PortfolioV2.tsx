"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const filters = [
  { key: "*", label: "All" },
  { key: "web", label: "Web Design" },
  //{ key: "mobile", label: "Mobile App" },
] as const;

type Key = (typeof filters)[number]["key"];

const container = {
  show: { transition: { staggerChildren: 0.08 } },
};

const fromLeft = { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } };
const fromRight = { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } };
const fromBottom = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};
const fromTop = { hidden: { opacity: 0, y: -24 }, show: { opacity: 1, y: 0 } };

function variantByIndex(i: number) {
  switch (i % 4) {
    case 0:
      return fromLeft;
    case 1:
      return fromRight;
    case 2:
      return fromBottom;
    default:
      return fromTop;
  }
}

export default function PortfolioV2() {
  const { t } = useTranslation();
  const [active, setActive] = useState<Key>("*");
  const filtered = useMemo(
    () =>
      active === "*" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="section-padding container">
      <div className="text-center">
        <h3
          className="font-heading text-5xl md:text-6xl"
          suppressHydrationWarning
        >
          {t("portfolio.latestProjects")}
          <span className="text-accent">.</span>
        </h3>
        <p className="mt-2 text-white/80">{t("portfolio.description")}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-5 py-3 transition
                ${
                  active === f.key
                    ? "bg-gradient-to-r from-brand-500 to-brand-600"
                    : "bg-white/10 hover:bg-white/15"
                }`}
              suppressHydrationWarning
            >
              {`${t(`portfolio.category.${f.key}`)}`}
            </button>
          ))}
        </div>
      </div>

      {/* GRID animada */}
      <motion.div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={`${active}-${p.id}`} // fuerza re-animación al cambiar filtro
              layout
              variants={variantByIndex(i)}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-3"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="image-zoom overflow-hidden rounded-xl"
              >
                <a
                  href={`${p.link}`}
                  className="block relative aspect-[16/10]"
                  target="_blank"
                  suppressHydrationWarning
                >
                  <Image
                    src={p.image}
                    alt={`${t(`portfolio.items.${p.title}`)}`}
                    fill
                    className="object-cover"
                  />
                </a>
              </motion.div>

              <p className="mt-3 text-sm uppercase text-accent/90 font-semibold">
                {p.category === "web" ? "Web design" : p.category}
              </p>
              <h5 className="font-heading text-3xl">
                <a
                  href={`${p.link}`}
                  target="_blank"
                  suppressHydrationWarning
                >{`${t(`portfolio.items.${p.title}`)}`}</a>
              </h5>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/*<div className="mt-8 text-center">
        <a
          href="#portfolio"
          className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3"
        >
          <span>view all projects</span>
          <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black">
            →
          </span>
        </a>
      </div>*/}
    </section>
  );
}
