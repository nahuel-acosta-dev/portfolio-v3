import About from "@/components/About";
import Contact from "@/components/Contact";
//import Cv from "@/components/Cv";
import Education from "@/components/Education";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
//import Me from "@/components/Me";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-rows-[auto_1fr_auto] min-h-screen gap-y-5">
        <main className="row-start-2 flex flex-col">
          <Hero />
          <About />
          <Portfolio />
          <Education />
          <Skills />
          <Work />
          {/*<Me />*/}
          {/*<Cv />*/}
          <Contact />
        </main>

        <footer className="row-start-3 flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center py-8 border-t border-gray-200">
          {/* Texto del footer */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Nahuel Acosta
          </p>

          {/* Redes sociales */}
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/in/tu-linkedin"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              href="https://github.com/nahuel-acosta-dev"
              target="_blank"
              className="hover:text-gray-300 transition-colors"
            >
              <FaGithub size={24} />
            </Link>
            <Link
              href="https://wa.me/541164729851"
              target="_blank"
              className="hover:text-green-400 transition-colors"
            >
              <FaWhatsapp size={24} />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
