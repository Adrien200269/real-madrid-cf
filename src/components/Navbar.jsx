"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  Sparkles,
  Sun,
  Moon,
  Globe
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, language, setLanguage, t } = useThemeLanguage();

  const navLinks = [
    { name: t("firstTeam"), href: "/squad" },
    { name: t("matchesTable"), href: "/matches" },
    { name: t("trophyRoom"), href: "/trophies" },
    { name: t("newsMedia"), href: "/news" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#111A2E] border-b border-[#E1E5EA] dark:border-[#1E2B45] shadow-[0_2px_8px_rgba(15,33,69,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Left: Hamburger, Real Madrid Crest, Divider, 15 UCL Badge */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0F2145] dark:text-white hover:bg-[#F3F5F8] dark:hover:bg-[#1E2B45] transition"
              aria-label={t("toggleMenu")}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Official Real Madrid Logo Crest */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src="/images/club/crest.svg"
                  alt="Real Madrid C.F. Crest"
                  className="w-full h-full object-contain drop-shadow-xs"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-extrabold text-base tracking-tight text-[#0F2145] dark:text-white block leading-none">
                  Real Madrid
                </span>
                <span className="text-[10px] text-[#788398] dark:text-slate-400 font-semibold uppercase tracking-wider">
                  Club de Fútbol
                </span>
              </div>
            </Link>

            {/* Vertical Hairline Divider */}
            <div className="hidden sm:block h-6 w-[1px] bg-[#E1E5EA] dark:bg-[#1E2B45]" />

            {/* Official 15 UCL Patch */}
            <Link
              href="/trophies"
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#EDEBFA] dark:bg-[#231B40] hover:bg-[#DEE5FD] dark:hover:bg-[#2F2458] border border-[#DEE5FD] dark:border-[#382B6B] text-[#3E31FA] dark:text-[#8FA0F5] text-xs font-bold transition shadow-2xs group"
              title="Real Madrid - 15 UEFA Champions League Titles"
            >
              <img
                src="/images/club/ucl-starball.svg"
                alt="UEFA Champions League"
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
              <span>15</span>
              <span className="text-[10px] uppercase font-semibold text-[#8760F6] dark:text-[#B79CFE]">UCL</span>
            </Link>
          </div>

          {/* Right: Main Navigation Links + Language Selector + Theme Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
              {/* Madridistas Pill Button */}
              <Link
                href="/squad"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EDEBFA] dark:bg-[#231B40] hover:bg-[#DEE5FD] dark:hover:bg-[#2F2458] text-[#3E31FA] dark:text-[#A5B4FC] text-xs font-bold transition shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#8760F6] dark:text-[#B79CFE]" />
                {t("madridistas")}
              </Link>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? "text-[#3E31FA] dark:text-white bg-[#EEF2FD] dark:bg-[#1E2B45]"
                        : "text-[#0F2145] dark:text-slate-200 hover:text-[#3E31FA] dark:hover:text-[#8FA0F5] hover:bg-[#F3F5F8] dark:hover:bg-[#1E2B45]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Vertical Hairline Divider */}
            <div className="h-6 w-[1px] bg-[#E1E5EA] dark:bg-[#1E2B45] hidden sm:block" />

            {/* Language Selector (English / Spanish) */}
            <div 
              className="flex items-center rounded-full p-0.5 bg-[#F3F5F8] dark:bg-[#1E2B45] border border-[#E1E5EA] dark:border-[#2A3B5E] text-xs font-bold"
              role="group"
              aria-label="Language selection"
            >
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all text-xs font-bold ${
                  language === "en"
                    ? "bg-white dark:bg-[#3E31FA] text-[#3E31FA] dark:text-white shadow-2xs font-extrabold"
                    : "text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2.5 py-1 rounded-full transition-all text-xs font-bold ${
                  language === "es"
                    ? "bg-white dark:bg-[#3E31FA] text-[#3E31FA] dark:text-white shadow-2xs font-extrabold"
                    : "text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
                }`}
                title="Cambiar a Español"
              >
                ES
              </button>
            </div>

            {/* Theme Toggle (Light / Dark Mode) */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[#F3F5F8] dark:bg-[#1E2B45] hover:bg-[#EEF2FD] dark:hover:bg-[#2A3B5E] text-[#0F2145] dark:text-amber-300 border border-[#E1E5EA] dark:border-[#2A3B5E] transition-all shadow-2xs group"
              aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
              title={theme === "dark" ? t("lightMode") : t("darkMode")}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-[#0F2145] group-hover:-rotate-12 transition-transform" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111A2E] border-b border-[#E1E5EA] dark:border-[#1E2B45] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-2 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
            <span className="text-xs font-bold text-[#788398] dark:text-slate-400 uppercase tracking-wider">
              {language === "es" ? "Ajustes" : "Settings"}
            </span>
            <div className="flex items-center gap-2">
              {/* Language Selector Mobile */}
              <div className="flex items-center rounded-full p-0.5 bg-[#F3F5F8] dark:bg-[#1E2B45] border border-[#E1E5EA] dark:border-[#2A3B5E] text-xs font-bold">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-2 py-0.5 rounded-full ${language === "en" ? "bg-white dark:bg-[#3E31FA] text-[#3E31FA] dark:text-white font-black" : "text-[#788398] dark:text-slate-400"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`px-2 py-0.5 rounded-full ${language === "es" ? "bg-white dark:bg-[#3E31FA] text-[#3E31FA] dark:text-white font-black" : "text-[#788398] dark:text-slate-400"}`}
                >
                  ES
                </button>
              </div>

              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full bg-[#F3F5F8] dark:bg-[#1E2B45] border border-[#E1E5EA] dark:border-[#2A3B5E]"
                aria-label={theme === "dark" ? t("lightMode") : t("darkMode")}
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#0F2145]" />}
              </button>
            </div>
          </div>

          <Link
            href="/squad"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-[#EDEBFA] dark:bg-[#231B40] text-[#3E31FA] dark:text-[#A5B4FC] font-bold text-sm"
          >
            <span>{t("madridistas")} Community</span>
            <Sparkles className="w-4 h-4 text-[#8760F6] dark:text-[#B79CFE]" />
          </Link>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-semibold ${
                  isActive
                    ? "text-[#3E31FA] dark:text-white bg-[#EEF2FD] dark:bg-[#1E2B45]"
                    : "text-[#0F2145] dark:text-slate-200 hover:bg-[#F3F5F8] dark:hover:bg-[#1E2B45]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
