import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-[70vw] mx-auto grid grid-rows-[auto_1fr_auto] min-h-screen gap-y-5">
        <main className="row-start-2 flex flex-col">
          <Hero />
          <About />
          <Portfolio />
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
