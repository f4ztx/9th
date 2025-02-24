"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [previousTheme, setPreviousTheme] = useState<Theme | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;

    if (savedTheme) {
      setTheme(savedTheme);

      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setPreviousTheme(theme);
    setIsTransitioning(true);

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    setTimeout(() => {
      setIsTransitioning(false);
      setPreviousTheme(null);
    }, 1000);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="relative">{children}</div>
      <AnimatePresence>
        {isTransitioning && previousTheme && (
          <>
            <motion.div
              key={`theme-transition-${previousTheme}`}
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`fixed inset-0 z-[9999] pointer-events-none ${
                previousTheme === "light" ? "bg-[#F1EEF3]" : "bg-gray-900"
              }`}
            />
          </>
        )}
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
