"use client";

import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiMysql,
  SiAuth0,
  SiRedis,
  SiStripe,
  SiResend,
} from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Work() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-[90vw] h-[80vh] max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={selectedImage}
                  alt="Project preview"
                  fill
                  className="object-contain rounded-xl shadow-[0_0_15px_rgba(100,149,237,0.3)]"
                />
              </AspectRatio>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="work" className="py-40 dark:bg-gray-900">
        <div className="container px-4 sm:px-6 lg:px-8">
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
                      <h2 className="font-['Roboto_Condensed'] font-bold text-5xl text-brand-navy/90 dark:text-white/90">
                        {t("work.title")}
                      </h2>
                      <p className="mt-6 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                        {t("work.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="lg:col-span-8">
                {/* Project Card - menufa.st */}
                <div className="relative group mb-12">
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div
                        className="w-full cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedImage("/menufast.avif")}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/menufast.avif"
                            alt="menufa.st preview"
                            fill
                            className="object-cover rounded-lg shadow-[0_0_15px_rgba(100,149,237,0.3)]"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90 mb-4">
                          {t("work.projects.menufast.title")}
                        </h3>
                        <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 mb-6">
                          {t("work.projects.menufast.description")}
                        </p>
                        <div className="flex gap-4 mb-6">
                          <SiReact className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiNextdotjs className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiPrisma className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiMysql className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiAuth0 className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiRedis className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                        </div>
                        <a
                          href="https://menufa.st"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group inline-flex"
                        >
                          <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                          <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-6 py-3 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                              {t("work.viewProject")}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Card - USA Caribbean Tours */}
                <div className="relative group mb-12">
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div
                        className="w-full cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedImage("/busss.avif")}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/busss.avif"
                            alt="USA Caribbean Tours preview"
                            fill
                            className="object-cover rounded-lg shadow-[0_0_15px_rgba(100,149,237,0.3)]"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90 mb-4">
                          {t("work.projects.usacaribbean.title")}
                        </h3>
                        <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 mb-6">
                          {t("work.projects.usacaribbean.description")}
                        </p>
                        <div className="flex gap-4 mb-6">
                          <SiReact className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiNextdotjs className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiPrisma className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiMysql className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiStripe className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <MdEmail className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                        </div>
                        <a
                          href="https://usacaribbeantours.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group inline-flex"
                        >
                          <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                          <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-6 py-3 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                              {t("work.viewProject")}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Card - chamberfa.st */}
                <div className="relative group mb-12">
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div
                        className="w-full cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedImage("/chamber.avif")}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/chamber.avif"
                            alt="chamberfa.st preview"
                            fill
                            className="object-cover rounded-lg shadow-[0_0_15px_rgba(100,149,237,0.3)]"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90 mb-4">
                          {t("work.projects.chamberfast.title")}
                        </h3>
                        <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 mb-6">
                          {t("work.projects.chamberfast.description")}
                        </p>
                        <div className="flex gap-4 mb-6">
                          <SiReact className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiNextdotjs className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiPrisma className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiMysql className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiStripe className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiResend className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                        </div>
                        <a
                          href="https://chamberfa.st"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative group inline-flex"
                        >
                          <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                          <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-6 py-3 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                              {t("work.projects.chamberfast.joinWaitlist")}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Card - Check Printer */}
                <div className="relative group mb-12">
                  <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div
                        className="w-full cursor-pointer transition-transform hover:scale-[1.02]"
                        onClick={() => setSelectedImage("/check.avif")}
                      >
                        <AspectRatio ratio={16 / 9}>
                          <Image
                            src="/check.avif"
                            alt="Check Printer preview"
                            fill
                            className="object-cover rounded-lg shadow-[0_0_15px_rgba(100,149,237,0.3)]"
                          />
                        </AspectRatio>
                      </div>
                      <div>
                        <h3 className="font-['Roboto_Condensed'] font-bold text-2xl text-brand-navy/90 dark:text-white/90 mb-4">
                          {t("work.projects.checkprinter.title")}
                        </h3>
                        <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 mb-6">
                          {t("work.projects.checkprinter.description")}
                        </p>
                        <div className="flex gap-4 mb-6">
                          <SiReact className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiNextdotjs className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiPrisma className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                          <SiMysql className="w-6 h-6 text-brand-purple/60 dark:text-white/60" />
                        </div>
                        <a href="#" className="relative group inline-flex">
                          <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-lg transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                          <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 px-6 py-3 rounded-lg transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <span className="font-['Roboto_Mono'] text-sm text-brand-navy/90 dark:text-white/90">
                              {t("work.viewProject")}
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Coming Soon Message */}
                <div className="relative group">
                  {/* Card Shadow/Border */}
                  <div className="absolute -left-3 top-3 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:translate-y-2" />

                  {/* Main Card */}
                  <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-12 rounded-xl transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <div className="flex flex-col items-center text-center">
                      <Sparkles className="w-16 h-16 text-brand-purple/40 dark:text-white/60 mb-6" />
                      <h3 className="font-['Roboto_Condensed'] font-bold text-3xl text-brand-navy/90 dark:text-white/90 mb-4">
                        {t("work.comingSoon.title")}
                      </h3>
                      <p className="font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60 max-w-2xl">
                        {t("work.comingSoon.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
