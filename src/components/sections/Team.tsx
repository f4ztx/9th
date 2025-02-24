"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import TeamDisclaimer from "./TeamDisclaimer";

const team = [
  {
    name: "Carlos",
    roleKey: "founder",
    image: "/team/team-1.avif",
  },
  {
    name: "Carlos González",
    roleKey: "developer",
    image: "/team/team-2.avif",
  },
  {
    name: "Carlos González Cádiz",
    roleKey: "accountManager",
    image: "/team/team-3.avif",
  },
];

const TeamCard = ({ member }: { member: (typeof team)[0] }) => {
  const { t } = useTranslation();
  return (
    <div className="group">
      <div className="relative">
        {/* Card Shadow/Border */}
        <div className="absolute -left-1.5 top-1.5 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl transition-all duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />

        {/* Main Card */}
        <div className="relative bg-[#F1EEF3] dark:bg-gray-800 border-2 border-[#2A3C50]/20 dark:border-white/20 rounded-xl transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-t-xl">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-all duration-1000 group-hover:scale-[1.02] saturate-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000" />
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="font-['Roboto_Mono'] text-xs text-brand-navy/40 dark:text-white/40 uppercase tracking-wider">
              {t(`team.roles.${member.roleKey}`)}
            </p>
            <h3 className="mt-1 font-['Roboto_Condensed'] font-bold text-lg text-brand-navy/90 dark:text-white/90">
              {member.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="team" className="py-40 dark:bg-gray-900">
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
                    <h2 className="font-['Roboto_Condensed'] font-bold text-5xl text-brand-navy/90 dark:text-white/90">
                      {t("team.title")}
                    </h2>
                    <p className="mt-6 font-['Roboto_Mono'] text-brand-navy/60 dark:text-white/60">
                      {t("team.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Grid/Carousel */}
            <div className="lg:col-span-8">
              <TeamDisclaimer />
              {isMobile ? (
                <div className="overflow-hidden mt-8" ref={emblaRef}>
                  <div className="flex touch-pan-y">
                    {team.map((member) => (
                      <div
                        key={member.name}
                        className="flex-[0_0_100%] min-w-0 px-4 first:pl-4 last:pr-4"
                      >
                        <TeamCard member={member} />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-8">
                  {team.map((member) => (
                    <TeamCard key={member.name} member={member} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
