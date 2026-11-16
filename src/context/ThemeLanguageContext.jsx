"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "@/data/translations";

const ThemeLanguageContext = createContext({
  theme: "light",
  toggleTheme: () => {},
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
  mounted: false
});

export function ThemeLanguageProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      // Initialize Theme
      const savedTheme = localStorage.getItem("rm_theme");
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      setTheme(initialTheme);
      if (initialTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.setAttribute("data-theme", "light");
      }

      // Initialize Language
      const savedLang = localStorage.getItem("rm_lang");
      if (savedLang === "es" || savedLang === "en") {
        setLanguage(savedLang);
        document.documentElement.setAttribute("lang", savedLang);
      }
    } catch (e) {
      // LocalStorage access fails in rare sandboxed scenarios
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("rm_theme", nextTheme);
    } catch (e) {}
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  const handleSetLanguage = (lang) => {
    if (lang === "es" || lang === "en") {
      setLanguage(lang);
      try {
        localStorage.setItem("rm_lang", lang);
      } catch (e) {}
      document.documentElement.setAttribute("lang", lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "es" : "en";
    handleSetLanguage(nextLang);
  };

  const t = (key) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key;
  };

  return (
    <ThemeLanguageContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t,
        mounted
      }}
    >
      {children}
    </ThemeLanguageContext.Provider>
  );
}

export function useThemeLanguage() {
  return useContext(ThemeLanguageContext);
}
