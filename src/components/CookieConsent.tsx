"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

export default function CookieConsent() {
  const { t } = useTranslation();
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    window.gtag("consent", "update", {
      analytics_storage: "granted",
    });
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-neutral-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative group">
            {/* Card Shadow/Border */}
            <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

            {/* Main Card */}
            <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-6 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="font-['Roboto_Condensed'] font-bold text-xl text-brand-navy/90 dark:text-white/90">
                    {t("cookies.title", "Cookie Preferences")}
                  </h3>
                  <p className="mt-2 font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60">
                    {t(
                      "cookies.description",
                      "We use cookies to analyze our traffic and improve your experience. Choose your preferences below."
                    )}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecline}
                    className="relative group/btn inline-flex"
                  >
                    {/* Button Shadow/Border */}
                    <div className="absolute -left-1 top-1 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover/btn:-translate-x-0.5 group-hover/btn:translate-y-0.5" />

                    {/* Main Button */}
                    <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-4 py-2 rounded-lg transition-all duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                        {t("cookies.decline", "Decline")}
                      </span>
                    </div>
                  </button>

                  <button
                    onClick={handleAccept}
                    className="relative group/btn inline-flex"
                  >
                    {/* Button Shadow/Border */}
                    <div className="absolute -left-1 top-1 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover/btn:-translate-x-0.5 group-hover/btn:translate-y-0.5" />

                    {/* Main Button */}
                    <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-4 py-2 rounded-lg transition-all duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                      <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                        {t("cookies.accept", "Accept")}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
