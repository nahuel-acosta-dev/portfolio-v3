import { Link } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => (
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
);

export default Footer;
