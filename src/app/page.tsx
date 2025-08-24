"use client";
//import Me from "@/components/Me";

import Image from "next/image";
import HeroV2 from "@/components/HeroV2";
//import Achievements from "@/components/Achievements";
import SkillsV2 from "@/components/SkillsV2";
import Timeline from "@/ui/Timeline";
import InterestsEducation from "@/components/InterestsEducation";
import PortfolioV2 from "@/components/PortfolioV2/PortfolioV2";
//import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FooterV2 from "@/components/FooterV2/FooterV2";
import { Reveal, Stagger } from "@/components/Reveal/Reveal";
import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <div id="hero" className="scroll-mt-24 md:scroll-mt-28">
        {/* héroe entra con fadeUp al montar */}
        <Reveal>
          <HeroV2 />
        </Reveal>
      </div>

      <section className="relative">
        {/* patrón centrado */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 hidden 2xl:flex justify-center">
          <Image
            src="/bg-pattern.png"
            alt=""
            width={1100}
            height={300}
            className="opacity-80"
            priority
          />
        </div>

        <div className="mx-auto mt-0 md:-mt-16 max-w-7xl rounded-3xl border border-white/20 bg-white/5 shadow-[0_12px_90px_rgba(106,30,188,0.25)]">
          <Stagger>
            <div
              id="me"
              className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-0 md:px-8 lg:grid-cols-2
             scroll-mt-24 md:scroll-mt-28 mt-10 md:mt-20
             text-pretty break-words [overflow-wrap:anywhere] [hyphens:auto]"
            >
              <Reveal>
                <Timeline />
              </Reveal>
              <Reveal delay={0.12}>
                <SkillsV2 />
              </Reveal>
            </div>
          </Stagger>

          {/* Interests/Education en stagger también */}
          <Stagger>
            <div
              className="mx-auto grid max-w-6xl gap-16 px-4 pb-24 pt-0 md:px-8 lg:grid-cols-2"
              suppressHydrationWarning
            >
              <InterestsEducation />
            </div>
          </Stagger>

          {/* CTA CV */}
          <Reveal className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="flex justify-center">
              <a
                href="/cv-nahuel-acosta.pdf"
                download
                aria-label="Download CV - Nahuel Acosta"
                className="group inline-flex items-center gap-3 rounded-full bg-brand-500/90 px-6 py-3 text-white ring-1 ring-white/10 transition-all hover:bg-brand-500 hover:shadow-[0_12px_60px_rgba(106,30,188,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="font-medium">{t("hero.downloadCV")}</span>
                <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black transition-transform group-hover:translate-x-0.5">
                  ↓
                </span>
              </a>
            </div>
          </Reveal>

          {/* Portfolio */}
          <Reveal className="mx-auto max-w-6xl px-4 md:px-8">
            <div id="portfolio" className="scroll-mt-24 md:scroll-mt-28">
              <PortfolioV2 />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <Reveal>
        <ContactForm />
      </Reveal>

      <Reveal>
        <FooterV2 />
      </Reveal>
    </main>
  );
}
