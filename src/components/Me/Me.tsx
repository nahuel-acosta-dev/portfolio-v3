"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import "@/lib/i18n/client";

const Me = () => {
  const { t } = useTranslation();

  return (
    <section
      id="me"
      className="relative h-auto min-h-screen flex flex-col-reverse lg:flex-row justify-between bg-black px-6 sm:px-12 md:px-20 py-12 gap-10"
    >
      {/* Texto */}
      <div className="z-10 text-amber-50 w-full lg:w-1/2 text-left pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center lg:text-left font-light tracking-tight">
          {t("hero.line1")}
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-3xl text-amber-100 mt-2 font-normal tracking-tight text-center lg:text-left">
          {t("hero.line2")}
        </h2>

        <p className="text-sm sm:text-base text-gray-300 mt-4 leading-relaxed font-light max-w-prose">
          Faucibus sed tristique fames sed aliquet ultricies eget viverra arcu.
          Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus
          leo in varius ac quam nunc amet tristique volutpat adipiscing. Morbi
          malesuada arcu egestas dolor blandit ultricies in at diam. Maecenas
          eget nisi vel nisl sollicitudin porta aliquet vel leo. Sed feugiat
          soda les nulla. In consequat nisl sem, in aliquam libero tempor nec.
          Maecenas sit amet felis sed justo aliquam vulputate tempor ut orci.
          Suspendisse interdum velit tortor, a semper ex posuere quis. Morbi
          velit nulla, lobortis ac ipsum et, accumsan convallis odio. Proin
          turpis leo, hendrerit a lacus sed, porta placerat diam. Aliquam vitae
          magna et libero auctor lobortis non ac risus. Vivamus lacus tellus,
          pharetra ut vulputate sed, auctor sed ex. Nulla volutpat nisi et neque
          pulvinar luctus cras semper ipsum moronos textures asonius. Mauris
          nibh libero, vulputate in mi sed, pharetra pharetra purus. Morbi
          ultricies nisl diam, acare pharetra purus fermentum congue. Etiam inta
          suscipit lorem. Nullam molestie urna eget exat malesuada feugiat. Nam
          aliquet facilisis ipsum, at tincidunt dolor sagittis sit amet lorem.
        </p>
      </div>

      {/* Imagen */}
      <div className="w-full lg:w-1/2 flex justify-center relative z-10 items-center">
        <Image
          src="/profile.png"
          alt="Nahuel Acosta"
          width={500}
          height={500}
          className="rounded-md object-cover w-[240px] sm:w-[300px] md:w-[380px] lg:w-[460px] xl:w-[500px] h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default Me;
