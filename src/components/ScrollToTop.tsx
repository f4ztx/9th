"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Scroll to top"
    >
      <div className="relative">
        {/* Button Shadow/Border */}
        <div className="absolute -left-1.5 top-1.5 w-12 h-12 border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

        {/* Main Button */}
        <div className="relative w-12 h-12 bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUp className="w-5 h-5 text-brand-navy/40 dark:text-white/40 group-hover:text-brand-purple dark:group-hover:text-white transition-colors" />
        </div>
      </div>
    </button>
  );
}
