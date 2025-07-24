"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowLeft as ArrowBigLeft } from "lucide-react";

interface Props {
  projectId: number;
  onBack: () => void;
}

const ProjectDetail = ({ projectId, onBack }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[100vh] bg-black text-white px-6 sm:px-12 md:px-24 py-16 space-y-16">
      {/* Flecha para volver */}
      <button
        onClick={onBack}
        className="text-gray-300 hover:text-white transition-colors duration-300 mb-8"
      >
        <ArrowBigLeft size={50} className="text-dark mb-4" />
      </button>

      {/* Imagen 1 + info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Imagen principal animada */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/profile.png"
            alt="Main Preview"
            width={500}
            height={700}
            className="w-full h-96 object-cover "
          />
        </motion.div>

        {/* Texto a la derecha */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">
            {t(
              `portfolio.details.${projectId}.title`,
              "Project Title Placeholder"
            )}
          </h2>
          <p className="text-gray-400">
            {t(
              `portfolio.details.${projectId}.description`,
              "Description placeholder text."
            )}
          </p>
          <ul className="mt-4 text-sm sm:text-base space-y-1 text-gray-300">
            <li>
              <strong>{t("portfolio.name")}:</strong>{" "}
              {t(`portfolio.details.${projectId}.name`, "Nahuel Acosta")}
            </li>
            <li>
              <strong>{t("portfolio.website")}:</strong>{" "}
              <a
                href={t(
                  `portfolio.details.${projectId}.website`,
                  "http://Website"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200"
              >
                {t(`portfolio.details.${projectId}.website`, "http://Website")}
              </a>
            </li>
            <li>
              <strong>{t("portfolio.role")}:</strong>{" "}
              {t(`portfolio.details.${projectId}.role`, "Developer")}
            </li>
            <li>
              <strong>{t("portfolio.year")}:</strong>{" "}
              {t(`portfolio.details.${projectId}.year`, "2025")}
            </li>
          </ul>
        </div>
      </div>

      {/* Dos imágenes en fila con animación */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  hidden lg:grid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
        >
          <Image
            src="/profile.png"
            alt="Secondary 1"
            width={500}
            height={500}
            className="w-full h-2/3 mt-8 ml-3  object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
        >
          <Image
            src="/profile.png"
            alt="Secondary 2"
            width={500}
            height={500}
            className="w-full h-auto object-cover ml-16"
          />
        </motion.div>
      </div>

      {/* Imagen ancha inferior con animación */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="hidden lg:block"
      >
        <Image
          src="/caja.jpg"
          alt="Final Wide"
          width={1200}
          height={600}
          className="w-full h-96 object-cover rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
