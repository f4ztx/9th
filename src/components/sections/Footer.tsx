"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 md:py-20 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative group">
            {/* Card Shadow/Border */}
            <div className="absolute -left-1.5 md:-left-2 top-1.5 md:top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-0.5 md:group-hover:-translate-x-1 group-hover:translate-y-0.5 md:group-hover:translate-y-1" />

            {/* Main Card */}
            <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-xl transition-all duration-500 group-hover:translate-x-0.5 md:group-hover:translate-x-1 group-hover:-translate-y-0.5 md:group-hover:-translate-y-1">
              <div className="p-4 md:p-8">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0">
                  {/* Logo */}
                  <Link href="/" className="relative">
                    <Image
                      src="/logofooter.png"
                      alt="9th Avenue"
                      width={190}
                      height={60}
                      className="w-auto h-5 md:h-7 block dark:hidden"
                      quality={100}
                      priority
                    />
                    <Image
                      src="/logofooterdark.png"
                      alt="9th Avenue"
                      width={190}
                      height={60}
                      className="w-auto h-5 md:h-7 hidden dark:block"
                      quality={100}
                      priority
                    />
                  </Link>

                  {/* Copyright */}
                  <p className="font-['Roboto_Mono'] text-xs md:text-sm text-brand-navy/60 dark:text-white/60 text-center md:text-right">
                    &copy; {currentYear} 9th Avenue.
                    <br className="block md:hidden" />
                    {t("footer.rights")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
