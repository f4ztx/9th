import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useAnimation, animate } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
});

const CARDS = [1, 2, 3, 4] as const;

export default function Hero() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeCard, setActiveCard] = useState(0);
  const [count, setCount] = useState(Math.floor(Math.random() * 100) + 1);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, 9, {
        duration: 1,
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return controls.stop;
    }
  }, [inView]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (inView) {
      interval = setInterval(() => {
        setActiveCard((current) => (current + 1) % CARDS.length);
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [inView]);

  const getCardScale = useCallback(
    (index: number) => {
      return index === activeCard ? "scale-105" : "scale-100";
    },
    [activeCard]
  );

  const getCardZIndex = useCallback(
    (index: number) => {
      return index === activeCard ? "z-10" : "z-0";
    },
    [activeCard]
  );

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 100,
      }}
      id="home"
      className="relative bg-[#F9F6F7] dark:bg-gray-900 min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-0"
      ref={ref}
    >
      <div className="relative container px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1
                className={`${jetBrainsMono.className} break-words font-bold text-5xl lg:text-7xl text-brand-navy/90 dark:text-white/90`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  initial={{ display: "inline-block" }}
                  animate={{
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 2,
                    times: [0, 1],
                    ease: "easeInOut",
                    repeat: 0,
                  }}
                >
                  {t("hero.title").replace("9", String(count))}
                </motion.span>
              </motion.h1>
              <p className="mt-6 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                {t("hero.subtitle")}
              </p>
              <div className="mt-12 grid grid-cols-2 gap-4">
                <Link href="#services" className="group block">
                  <div className="relative">
                    {/* Button Shadow/Border */}
                    <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                    {/* Main Button */}
                    <div className="relative bg-[#F6F8F9] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-10 md:p-10 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-['Roboto_Condensed'] text-lg md:text-xl text-brand-navy/90 dark:text-white/90">
                          {t("hero.buttons.services")}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-navy/60 dark:text-white/60 group-hover:text-brand-purple dark:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>

                <Link href="#contact" className="group block">
                  <div className="relative">
                    {/* Button Shadow/Border */}
                    <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                    {/* Main Button */}
                    <div className="relative bg-[#F9F6F7] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-10 md:p-10 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-['Roboto_Condensed'] text-lg md:text-xl text-brand-navy/90 dark:text-white/90">
                          {t("hero.buttons.contact")}
                        </span>
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-brand-navy/60 dark:text-white/60 group-hover:text-brand-purple dark:group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Hero Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
                {CARDS.map((index) => (
                  <motion.div
                    key={index}
                    className={`group relative md:col-span-1 col-span-2 transition-all duration-500 ${getCardScale(
                      index - 1
                    )} ${getCardZIndex(index - 1)}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                    }}
                  >
                    <div className="relative">
                      {/* Card Shadow/Border */}
                      <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1" />

                      {/* Main Card */}
                      <div
                        className={`relative ${
                          index % 2 === 1 ? "bg-[#F6F8F9]" : "bg-[#F9F6F7]"
                        } dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 p-8 rounded-xl transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1`}
                      >
                        <h3 className="font-['Roboto_Condensed'] text-xl text-brand-navy/90 dark:text-white/90">
                          {t(`hero.cards.card${index}.title`)}
                        </h3>
                        <p className="mt-2 font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60">
                          {t(`hero.cards.card${index}.description`)}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
