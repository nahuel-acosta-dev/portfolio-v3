import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

export default function FooterV2() {
  return (
    <section id="footer" className="section-padding pt-0">
      {/* alinear con el resto del sitio */}
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* centrar contenido y limitar el ancho visual */}
        <div className="mx-auto max-w-md text-center">
          <Image
            src="/logo.png"
            alt="logo"
            className="mx-auto h-10 w-auto"
            width={120}
            height={40}
          />

          <ul className="mt-10 flex list-none items-center justify-center gap-6 text-xl">
            <li>
              <a href="#" className="text-accent/90 hover:text-accent">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="text-accent/90 hover:text-accent">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="text-accent/90 hover:text-accent">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="text-accent/90 hover:text-accent">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="#" className="text-accent/90 hover:text-accent">
                <FaYoutube />
              </a>
            </li>
          </ul>

          <p className="mt-10 text-white/70">
            © 2025 KimiLewis. HTML Template By:{" "}
            <a
              className="font-bold underline"
              href="https://templatesjungle.com/"
            >
              TemplatesJungle
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
