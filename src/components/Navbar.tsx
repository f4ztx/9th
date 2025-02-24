"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    id: "about",
    href: "/about",
  },
  {
    id: "services",
    href: "/#services",
  },
  {
    id: "work",
    href: "/#work",
  },
  {
    id: "team",
    href: "/#team",
  },

  {
    id: "contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentLanguage = mounted ? i18n.language : "en";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const getSections = () => {
      if (pathname === "/jobs") {
        return ["jobshero", "requirements", "benefits", "process"];
      }
      if (pathname === "/about") {
        return ["abouthero", "values", "process"];
      }
      return ["home", "services", "work", "team", "contact"];
    };

    const handleScroll = () => {
      const sections = getSections();
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]); 

  const handleNavigation = (item: string) => {
    const itemLower = item.toLowerCase();

    
    if (itemLower === "about") {
      if (pathname === "/about") {
        scrollToSection("abouthero");
      } else {
        window.location.href = "/about";
      }
    }
    
    else if (itemLower === "jobs") {
      if (pathname === "/jobs") {
        scrollToSection("jobshero");
      } else {
        window.location.href = "/jobs";
      }
    }
    
    else if (pathname === "/about" || pathname === "/jobs") {
      window.location.href = `/${itemLower}`;
    }
    
    else {
      scrollToSection(itemLower);
    }

    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="container px-4 md:px-0">
        <div className="max-w-[1600px] mx-auto">
          <div className="relative group">
            {/* Card Shadow/Border */}
            <div className="absolute -left-2 top-2 w-full h-full border-2 border-[#001B5E] dark:border-white bg-[#001B5E] dark:bg-white rounded-xl" />

            {/* Main Card */}
            <div className="relative bg-[#F1EEF3] dark:bg-gray-900 border-2 border-[#001B5E] dark:border-white rounded-xl">
              <div className="flex items-center justify-between py-4 px-4 md:px-8">
                {/* Logo */}
                <button
                  onClick={() => (window.location.href = "/")}
                  className="relative"
                >
                  <Image
                    src={
                      theme === "light" ? "/logonav.png" : "/logonavdark.png"
                    }
                    alt="9th Avenue"
                    width={190}
                    height={60}
                    className="w-auto h-6 md:h-7"
                    quality={100}
                    priority
                  />
                </button>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center gap-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`text-sm font-['Roboto_Mono'] ${
                        activeSection === item.id
                          ? "text-brand-purple dark:text-white"
                          : "text-brand-navy/60 dark:text-white/60 hover:text-brand-purple dark:hover:text-white"
                      } transition-colors`}
                    >
                      {t(`nav.${item.id}`)}
                    </Link>
                  ))}
                  {/* Language Selector */}
                  {/* Theme Toggle */}
                  <button onClick={toggleTheme} className="group relative mr-4">
                    <div className="absolute inset-0 -left-1 top-1 bg-[#001B5E] dark:bg-white rounded-xl" />
                    <div className="relative bg-[#F1EEF3] dark:bg-gray-900 border-2 border-[#001B5E] dark:border-white p-2 rounded-xl">
                      {theme === "light" ? (
                        <Moon className="w-5 h-5 text-brand-navy/90 dark:text-white/90" />
                      ) : (
                        <Sun className="w-5 h-5 text-brand-navy/90 dark:text-white/90" />
                      )}
                    </div>
                  </button>

                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`text-sm font-['Roboto_Mono'] ${
                        currentLanguage === "en" || !currentLanguage
                          ? "text-brand-purple dark:text-white"
                          : "text-brand-navy/60 dark:text-white/60"
                      } hover:text-brand-purple dark:hover:text-white transition-colors`}
                    >
                      EN
                    </button>
                    <span className="text-brand-navy/20 dark:text-white/20">
                      |
                    </span>
                    <button
                      onClick={() => changeLanguage("es")}
                      className={`text-sm font-['Roboto_Mono'] ${
                        currentLanguage === "es"
                          ? "text-brand-purple dark:text-white"
                          : "text-brand-navy/60 dark:text-white/60"
                      } hover:text-brand-purple dark:hover:text-white transition-colors`}
                    >
                      ES
                    </button>
                  </div>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center gap-4">
                  {/* Theme Toggle Mobile */}
                  <button onClick={toggleTheme} className="group relative">
                    <div className="absolute inset-0 -left-1 top-1 bg-[#001B5E] dark:bg-white rounded-xl" />
                    <div className="relative bg-[#F1EEF3] dark:bg-gray-900 border-2 border-[#001B5E] dark:border-white p-2 rounded-xl">
                      {theme === "light" ? (
                        <Moon className="w-5 h-5 text-brand-navy/90 dark:text-white/90" />
                      ) : (
                        <Sun className="w-5 h-5 text-brand-navy/90 dark:text-white/90" />
                      )}
                    </div>
                  </button>

                  {/* Mobile Menu Button */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    {isMobileMenuOpen ? (
                      <X className="w-6 h-6 text-brand-navy/60 dark:text-white/60 hover:text-brand-purple dark:hover:text-white transition-colors" />
                    ) : (
                      <Menu className="w-6 h-6 text-brand-navy/60 dark:text-white/60 hover:text-brand-purple dark:hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="md:hidden bg-[#F1EEF3] dark:bg-gray-900 border-t-2 border-[#001B5E] dark:border-white">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavigation(item.id)}
                      className={`w-full text-left font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60 hover:text-brand-purple transition-colors py-3 px-4 ${
                        activeSection === item.id ||
                        (item.id === "about" &&
                          activeSection === "abouthero") ||
                        (item.id === "jobs" && activeSection === "jobshero")
                          ? "text-brand-purple dark:text-white"
                          : ""
                      }`}
                    >
                      {t(`nav.${item.id}`)}
                    </button>
                  ))}
                  <button
                    onClick={() => {
                      toggleLanguage();
                      setIsMobileMenuOpen(false);
                    }}
                    className="font-['Roboto_Mono'] text-sm text-brand-navy/60 dark:text-white/60 hover:text-brand-purple dark:hover:text-white transition-colors text-left"
                  >
                    {i18n.language === "en" ? "ES" : "EN"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
