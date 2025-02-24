"use client";

import { useTranslation } from "react-i18next";
import { AlertTriangle } from "lucide-react";

export default function TeamDisclaimer() {
  const { t } = useTranslation();

  return (
    <div className="relative group mb-16">
      {/* Card Shadow/Border */}
      <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

      {/* Main Card */}
      <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-4 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
          <div className="relative group/icon">
            <div className="absolute -left-1 top-1 w-6 h-6 border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover/icon:-translate-x-0.5 group-hover/icon:translate-y-0.5" />
            <div className="relative w-6 h-6 bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-lg flex items-center justify-center transition-all duration-500 group-hover/icon:translate-x-0.5 group-hover/icon:-translate-y-0.5">
              <AlertTriangle className="w-3 h-3 text-brand-navy/40 dark:text-white/40 group-hover/icon:text-brand-purple dark:group-hover/icon:text-white transition-colors" />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="font-['Roboto_Condensed'] font-bold text-base text-brand-navy/90 dark:text-white/90">
              {t("team.disclaimer.title")}
            </h3>
            <p className="font-['Roboto_Mono'] text-xs text-brand-navy/60 dark:text-white/60 mt-0.5">
              {t("team.disclaimer.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
