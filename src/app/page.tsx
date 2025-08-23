//import Me from "@/components/Me";
import Image from "next/image";
import HeroV2 from "@/components/HeroV2";
import Achievements from "@/components/Achievements";
import SkillsV2 from "@/components/SkillsV2";
import Timeline from "@/ui/Timeline";
import InterestsEducation from "@/components/InterestsEducation";
import PortfolioV2 from "@/components/PortfolioV2/PortfolioV2";
//import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import FooterV2 from "@/components/FooterV2/FooterV2";

export default function Home() {
  return (
    <main>
      <HeroV2 />

      <section className="relative">
        {/* patrón centrado */}
        <div className="pointer-events-none absolute inset-x-0 -top-10 hidden 2xl:flex justify-center">
          <Image
            src="/bg-pattern.png"
            alt=""
            width={1100} // ajusta si hace falta
            height={300}
            className="opacity-80"
            priority
          />
        </div>

        {/* card principal */}
        <div className="mx-auto -mt-16 max-w-7xl rounded-3xl border border-white/20 bg-white/5 shadow-[0_12px_90px_rgba(106,30,188,0.25)]">
          {/* ⬇️ Achievements centrado y con padding lateral */}
          <div className="mx-auto max-w-5xl px-4 md:px-8">
            <Achievements />
          </div>

          {/* ⬇️ usa el mismo wrapper en el resto para que todo “respire” igual */}
          <div className="mx-auto grid max-w-6xl gap-16 px-4 pb-24 pt-0 md:px-8 lg:grid-cols-2">
            <Timeline />
            <SkillsV2 />
          </div>

          <div className="mx-auto grid max-w-6xl gap-16 px-4 pb-24 pt-0 md:px-8 lg:grid-cols-2">
            <InterestsEducation />
          </div>

          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <PortfolioV2 />
            {/* <Testimonials /> */}
          </div>
        </div>
      </section>

      <ContactForm />
      <FooterV2 />
    </main>
  );
}
