"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/lib/data";

const filters = [
  { key: "*", label: "All" },
  { key: "logo", label: "Logo" },
  { key: "web", label: "Web Design" },
  { key: "mobile", label: "Mobile App" },
] as const;

type Key = (typeof filters)[number]["key"];

export default function PortfolioV2() {
  const [active, setActive] = useState<Key>("*");
  const filtered = useMemo(
    () =>
      active === "*" ? projects : projects.filter((p) => p.category === active),
    [active]
  );

  return (
    <section id="portfolio" className="section-padding container">
      <div className="text-center">
        <h3 className="font-heading text-5xl md:text-6xl">
          Latest projects<span className="text-accent">.</span>
        </h3>
        <p className="mt-2 text-white/80">
          Here’s a showcase of some of my favorite projects. <br />
          Each design tells a unique story and reflects the client’s brand
          essence.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`rounded-full px-5 py-3 ${
                active === f.key
                  ? "bg-gradient-to-r from-brand-500 to-brand-600"
                  : "bg-white/10"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {filtered.map((p) => (
          <article key={p.id} className="p-3">
            <div className="image-zoom overflow-hidden rounded-xl">
              <a href="#" className="block relative aspect-[16/10]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
              </a>
            </div>
            <p className="mt-3 text-sm uppercase text-accent/90 font-semibold">
              {p.category === "web" ? "Web design" : p.category}
            </p>
            <h5 className="font-heading text-3xl">
              <a href="#">{p.title}</a>
            </h5>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#portfolio"
          className="inline-flex items-center gap-3 rounded-full bg-brand-500 px-6 py-3"
        >
          <span>view all projects</span>
          <span className="inline-grid h-9 w-9 place-items-center rounded-full bg-white text-black">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
