"use client";
import { testimonials } from "@/lib/data";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="testimonial" className="section-padding pt-0">
      <div className="container">
        <div className="text-center">
          <h3 className="font-heading text-5xl md:text-6xl">
            Read our clients reviews<span className="text-accent">.</span>
          </h3>
        </div>

        <div className="mt-10 grid place-items-center">
          <div className="w-full max-w-3xl">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              onBeforeInit={(swiper) => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                swiper.params.navigation.prevEl = prevRef.current;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                swiper.params.navigation.nextEl = nextRef.current;
              }}
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="text-center">
                    <Quote className="mx-auto text-accent" size={80} />
                    <p className="mt-6 text-2xl italic text-white/90">
                      {t.quote}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-3">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        width={64}
                        height={64}
                        className="rounded-full"
                      />
                      <div className="text-left">
                        <p className="m-0 font-bold">{t.name}</p>
                        <p className="m-0 text-white/70">{t.country}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-6 hidden gap-6 lg:flex">
            <button
              ref={prevRef}
              className="rounded-full border border-white/25 p-5"
            >
              ←
            </button>
            <button
              ref={nextRef}
              className="rounded-full border border-white/25 p-5"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
