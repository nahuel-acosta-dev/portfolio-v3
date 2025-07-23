"use client";

import { useState } from "react";
import { FaBars, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón fijo tipo chicle */}
      <div className="fixed top-6 right-6 z-50 flex flex-col items-center gap-2">
        <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-lg">
          N
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Menú desplegable con animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black text-white z-40 flex flex-col lg:flex-row"
          >
            {/* Secciones a la izquierda */}
            <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
              <nav className="flex flex-col gap-6 text-2xl">
                {[
                  "Home",
                  "About",
                  "Portfolio",
                  "Education",
                  "Skills",
                  "Work",
                  "Me",
                  "Cv",
                  "Contact",
                ].map((section) => (
                  <a
                    key={section}
                    href={`#${section.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:underline"
                  >
                    {section}
                  </a>
                ))}
              </nav>
            </div>

            {/* Texto + redes a la derecha */}
            <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center items-start gap-6">
              <h2 className="text-3xl font-bold">Let’s Connect</h2>
              <p className="text-gray-300 max-w-md">
                I’m always open to new opportunities, collaborations, or just a
                friendly hello.
              </p>
              <div className="flex gap-6 mt-2">
                <Link
                  href="https://www.linkedin.com/in/tu-linkedin"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  href="https://github.com/tu-github"
                  target="_blank"
                  className="hover:text-gray-300"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  href="https://wa.me/5491112345678"
                  target="_blank"
                  className="hover:text-green-400"
                >
                  <FaWhatsapp size={24} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
