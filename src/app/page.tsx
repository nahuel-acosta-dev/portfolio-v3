import About from "@/components/About";
import Contact from "@/components/Contact";
import Cv from "@/components/Cv";
import Education from "@/components/Education";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Me from "@/components/Me";
import Portfolio from "@/components/Portfolio/Portfolio";
import Skills from "@/components/Skills/Skills";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      <div className="max-w-[70vw] mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen gap-y-5">
        <main className="row-start-2 flex flex-col">
          <Hero />
          <About />
          <Portfolio />
          <Education />
          <Skills />
          <Work />
          <Me />
          <Cv />
          <Contact />
        </main>

        <footer className="row-start-3 flex gap-6 items-center justify-center py-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nahuel Acosta
          </p>
        </footer>
      </div>
    </div>
  );
}
