"use client";

import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";

export default function Terms() {
  const { t } = useTranslation();

  const sections = [
    {
      id: "acceptance",
      icon: FileText,
    },
    {
      id: "services",
      icon: FileText,
    },
    {
      id: "intellectual",
      icon: FileText,
    },
    {
      id: "user",
      icon: FileText,
    },
    {
      id: "liability",
      icon: FileText,
    },
    {
      id: "termination",
      icon: FileText,
    },
  ];

  return (
    <section id="terms" className="py-40 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-40">
                <div className="relative group">
                  {/* Card Shadow/Border */}
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                  {/* Main Card */}
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <h2 className="font-['Roboto_Condensed'] font-bold text-5xl text-brand-navy/90 dark:text-white/90">
                      {t("terms.title")}
                    </h2>
                    <p className="mt-6 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                      {t("terms.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8">
                {sections.map((section) => (
                  <div key={section.id} className="group">
                    <div className="relative">
                      {/* Card Shadow/Border */}
                      <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

                      {/* Main Card */}
                      <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-6 rounded-xl transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <div className="flex items-start gap-6">
                          <section.icon className="w-10 h-10 text-brand-navy/40 dark:text-white/40 group-hover:text-brand-purple dark:group-hover:text-white transition-colors flex-shrink-0" />
                          <div>
                            <h3 className="mt-1 font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90">
                              {t(`terms.sections.${section.id}.title`)}
                            </h3>
                            <p className="mt-3 font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60">
                              {t(`terms.sections.${section.id}.description`)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
