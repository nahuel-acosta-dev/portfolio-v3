"use client";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";

const Education = () => {
  const { t } = useTranslation();

  const rawCourses = t("education.courses.items", { returnObjects: true });

  const courses = Array.isArray(rawCourses)
    ? (rawCourses as {
        title: string;
        institution: string;
        period: string;
        link?: string;
      }[])
    : [];

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col text-black px-6 sm:px-12 md:px-24 section-max mb-20"
    >
      <div className="flex flex-col gap-36">
        <div className="flex flex-col max-w-2/3 mt-26">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            {t("education.title")}
          </h2>
          <p className="text-base sm:text-lg ">{t("education.intro")}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <h3 className="text-2xl font-semibold ">
          {t("education.formal.title")}
        </h3>
      </div>

      {/* Educación formal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <span className="text-md text-gray-900 font-bold">
            {t("education.formal.highschool.period")}
          </span>
          <p className="text-base text-gray-800 max-w-96">
            {t("education.formal.highschool.title")}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-md text-gray-900 font-bold">
            {t("education.formal.university.period")}
          </span>
          <p className="text-base text-gray-800">
            {t("education.formal.university.title")}
          </p>
          <p className="text-sm text-gray-600">
            {t("education.formal.university.degree")}
          </p>
        </div>
      </div>

      {/* Cursos */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-6">
          {t("education.courses.title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-md text-gray-900 font-bold">
                {course.period}
              </span>
              <p className="text-base text-gray-800">{course.title}</p>
              <p className="text-sm text-gray-600">{course.institution}</p>
              {course.link && (
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm relative inline-block transition-all duration-300 
                  bg-gradient-to-r from-gray-500 to-gray-500 bg-no-repeat bg-left-bottom 
                  bg-[length:0%_2px] hover:bg-[length:30%_2px]"
                >
                  {t("education.credential")}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
