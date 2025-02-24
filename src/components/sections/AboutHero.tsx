"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation();

  return (
    <section
      id="abouthero"
      className="min-h-screen relative flex items-center"
    >
      {/* Background */}
      <div className="fixed inset-0 bg-[#FAFAFA] dark:bg-gray-900 -z-10" />

      <div className="container relative">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="relative group">
                {/* Card Shadow/Border */}
                <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                {/* Main Card */}
                <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <h1 className="font-['Roboto_Condensed'] font-bold text-6xl text-brand-navy/90 dark:text-white/90">
                    {t("about.title")}
                  </h1>
                  <p className="mt-6 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                    {t("about.subtitle")}
                  </p>
                  <p className="mt-4 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                    {t("about.description")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-6">
              <div className="relative group">
                {/* Card Shadow/Border */}
                <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                {/* Main Card */}
                <div className="relative bg-[#F1EEF3] border-2 border-[#2A3C50]/20 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src="/jobs/jobheros.webp"
                      alt="About Hero"
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-[1.02] saturate-[0.98]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
