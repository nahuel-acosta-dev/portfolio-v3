"use client";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function FooterV2() {
  return (
    <section id="footer" className="section-padding pt-0">
      {/* alinear con el resto del sitio */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* centrar contenido y limitar el ancho visual */}
        <div className="mx-auto max-w-md text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-heading text-2xl font-bold text-white"
          >
            <span className="rounded bg-gradient-to-r from-brand-500 to-brand-600 px-2 py-1 text-white">
              NAHUEL
            </span>
            <span className="hidden sm:inline text-accent">Acosta</span>
          </Link>

          <ul className="mt-10 flex list-none items-center justify-center gap-6 text-xl">
            <li>
              <Link
                href="https://www.linkedin.com/in/nahuel-acosta-dev/"
                target="_blank"
                className="text-accent/90 hover:text-accent"
              >
                <FaLinkedin size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/nahuel-acosta-dev"
                className="text-accent/90 hover:text-accent"
                target="_blank"
              >
                <FaGithub size={24} />
              </Link>
            </li>

            <li>
              <Link
                href="https://wa.me/541164729851"
                className="text-accent/90 hover:text-accent"
                target="_blank"
              >
                <FaWhatsapp size={24} />
              </Link>
            </li>
          </ul>

          <p className="mt-10 text-white/70">
            © {new Date().getFullYear()}{" "}
            <a className="font-bold underline">Nahuel Acosta </a>
          </p>
        </div>
      </div>
    </section>
  );
}
