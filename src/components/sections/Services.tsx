"use client";

import { Code, Palette, Star, Sparkles, Database, Shield } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: "webdev",
      title: t("services.list.webdev.title"),
      description: t("services.list.webdev.description"),
      icon: Code,
      bgColor: "bg-[#FDF4F5]",
      darkBorderClass:
        "dark:border-t-purple-500 dark:border-r-blue-500 dark:border-b-teal-500 dark:border-l-indigo-500",
    },
    {
      id: "design",
      title: t("services.list.design.title"),
      description: t("services.list.design.description"),
      icon: Palette,
      bgColor: "bg-[#F7F7FA]",
      darkBorderClass:
        "dark:border-t-pink-500 dark:border-r-purple-500 dark:border-b-indigo-500 dark:border-l-blue-500",
    },
    {
      id: "mobile",
      title: t("services.list.mobile.title"),
      description: t("services.list.mobile.description"),
      icon: Star,
      bgColor: "bg-[#F9F6F7]",
      darkBorderClass:
        "dark:border-t-blue-500 dark:border-r-teal-500 dark:border-b-green-500 dark:border-l-cyan-500",
    },
    {
      id: "consulting",
      title: t("services.list.consulting.title"),
      description: t("services.list.consulting.description"),
      icon: Sparkles,
      bgColor: "bg-[#F6F8F9]",
      darkBorderClass:
        "dark:border-t-amber-500 dark:border-r-orange-500 dark:border-b-red-500 dark:border-l-pink-500",
    },
    {
      id: "backenddev",
      title: t("services.list.backenddev.title"),
      description: t("services.list.backenddev.description"),
      icon: Database,
      bgColor: "bg-[#F8F4F8]",
      darkBorderClass:
        "dark:border-t-teal-500 dark:border-r-cyan-500 dark:border-b-blue-500 dark:border-l-indigo-500",
    },
    {
      id: "security",
      title: t("services.list.security.title"),
      description: t("services.list.security.description"),
      icon: Shield,
      bgColor: "bg-[#F4F6F6]",
      darkBorderClass:
        "dark:border-t-indigo-500 dark:border-r-violet-500 dark:border-b-purple-500 dark:border-l-fuchsia-500",
    },
  ];

  return (
    <section id="services" className="py-40 dark:bg-gray-900">
      <div className="container">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Title Section */}
            <div className="lg:col-span-4">
              <div className="sticky top-40">
                <div className="relative group">
                  {/* Card Shadow/Border */}
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                  {/* Main Card */}
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <h2 className="font-['Roboto_Condensed'] font-bold text-4xl text-brand-navy/90 dark:text-white/90">
                      {t("services.title")}
                    </h2>
                    <p className="mt-2 font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60">
                      {t("services.subtitle")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8">
                {services.map((service, index) => {
                  // Crear un patrón de mosaico fluido
                  let positionClass = "";
                  switch (index) {
                    case 0:
                      positionClass = "lg:ml-24";
                      break;
                    case 1:
                      positionClass = "lg:ml-4";
                      break;
                    case 2:
                      positionClass = "lg:ml-32";
                      break;
                    case 3:
                      positionClass = "lg:ml-0";
                      break;
                    case 4:
                      positionClass = "lg:ml-16";
                      break;
                    case 5:
                      positionClass = "lg:ml-8";
                      break;
                  }

                  return (
                    <div key={index} className={`group ${positionClass}`}>
                      <div className="relative">
                        {/* Card Shadow/Border */}
                        <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

                        {/* Main Card */}
                        <div
                          className={`relative ${service.bgColor} dark:bg-gray-900 border-2 border-[#2A3C50]/20 dark:border-2 ${service.darkBorderClass} p-8 rounded-xl transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                        >
                          <div className="flex items-start gap-6">
                            <service.icon className="w-10 h-10 text-brand-navy/40 dark:text-white/40 group-hover:text-brand-purple dark:group-hover:text-white transition-colorssition-colors flex-shrink-0" />
                            <div>
                              <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90">
                                {t(`services.list.${service.id}.title`)}
                              </h3>
                              <p className="mt-2 font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60">
                                {t(`services.list.${service.id}.description`)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
