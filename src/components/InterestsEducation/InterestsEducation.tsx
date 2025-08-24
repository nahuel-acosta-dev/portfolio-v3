"use client";
import { Reveal } from "@/components/Reveal/Reveal";

import { useTranslation } from "react-i18next";
import "@/lib/i18n/client";
export default function InterestsEducation() {
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
    <>
      {/* Columna 1: Interests */}
      <Reveal>
        <div>
          <h3 className="mb-6 font-heading text-5xl" suppressHydrationWarning>
            {t("education.courses.title")}
            <span className="text-accent">.</span>
          </h3>
          {courses.map((course, idx) => (
            <div className="space-y-8 mt-2" key={idx} suppressHydrationWarning>
              <div className="border-l-4 border-accent/50 pl-4">
                <p className="text-accent font-semibold">{course.period}</p>
                <h5 className="font-heading text-3xl">{course.title}</h5>
                <p className="text-white/80">{course.institution} </p>
                {course.link && (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm relative inline-block transition-all duration-300 
                  bg-gradient-to-r from-gray-500 to-gray-500 bg-no-repeat bg-left-bottom 
                  bg-[length:0%_2px] hover:bg-[length:30%_2px]"
                    suppressHydrationWarning
                  >
                    {t("education.credential")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Columna 2: Education */}
      <Reveal delay={0.12}>
        <div>
          <h3 className="mb-6 font-heading text-5xl">
            {t("education.title")}
            <span className="text-accent">.</span>
          </h3>
          <div className="space-y-8">
            <div className="border-l-4 border-accent/50 pl-4">
              <p className="text-accent font-semibold" suppressHydrationWarning>
                {t("education.formal.university.period")}
              </p>
              <h5 className="font-heading text-3xl" suppressHydrationWarning>
                {t("education.formal.university.degree")}
              </h5>
              <p className="text-white/80" suppressHydrationWarning>
                {t("education.formal.university.title")}
              </p>
            </div>
            {
              <div className="border-l-4 border-accent/50 pl-4">
                <p className="text-accent font-semibold">
                  {" "}
                  {t("education.formal.highschool.period")}
                </p>
                <h5 className="font-heading text-3xl">MMO</h5>
                <p className="text-white/80" suppressHydrationWarning>
                  {t("education.formal.highschool.title")}
                </p>
              </div>
            }
          </div>
        </div>
      </Reveal>
    </>
  );
}
