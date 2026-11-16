"use client";

import Link from "next/link";
import { Trophy, Users, Play, Shield, ChevronRight, Sparkles, Star } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function HeroSection() {
  const { t, language } = useThemeLanguage();

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 bg-[#F3F5F8] dark:bg-[#090E1A] border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-r from-[#EEF2FD] dark:from-[#182544] to-[#EDEBFA] dark:to-[#231B40] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Official CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag with Crest Icon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#3E31FA] dark:text-[#8FA0F5] text-xs font-bold tracking-wide shadow-2xs">
              <img src="/images/club/crest.svg" alt="Crest" className="w-4 h-4 object-contain" />
              <span>{language === "es" ? "Portal Oficial del Real Madrid" : "Official Real Madrid Portal"}</span>
              <span className="text-[#C7CCD6] dark:text-slate-600">•</span>
              <span className="text-[#0F2145] dark:text-slate-200">Season 2026–27</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0F2145] dark:text-white leading-[1.08]">
              {language === "es" ? (
                <>
                  REYES DE <br />
                  <span className="rm-text-gradient">EUROPA</span>
                </>
              ) : (
                <>
                  THE KINGS OF <br />
                  <span className="rm-text-gradient">EUROPE</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#43526E] dark:text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              {t("heroSub")}
            </p>

            {/* Stats Summary Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] dark:text-slate-200 bg-white dark:bg-[#111A2E] px-3.5 py-2 rounded-xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-2xs">
                <Trophy className="w-4 h-4 text-[#8760F6] dark:text-[#A5B4FC]" />
                <span>{t("trophy15Ucl")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] dark:text-slate-200 bg-white dark:bg-[#111A2E] px-3.5 py-2 rounded-xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-2xs">
                <Shield className="w-4 h-4 text-[#3E31FA] dark:text-[#8FA0F5]" />
                <span>{t("trophy36LaLiga")}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0F2145] dark:text-slate-200 bg-white dark:bg-[#111A2E] px-3.5 py-2 rounded-xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-2xs">
                <Star className="w-4 h-4 text-[#947138] fill-[#947138]" />
                <span>{t("trophyFifaClub")}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <Link
                href="/squad"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full rm-gradient-primary text-white font-bold text-sm shadow-[0_4px_16px_0_rgba(62,49,250,0.25)] hover:opacity-95 active:scale-95 transition-all"
              >
                <Users className="w-4 h-4" />
                {t("firstTeam")}
              </Link>

              <Link
                href="/matches"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-[#111A2E] hover:bg-[#F3F5F8] dark:hover:bg-[#1E2B45] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#0F2145] dark:text-white font-bold text-sm shadow-2xs transition-all"
              >
                <Play className="w-4 h-4 text-[#3E31FA] dark:text-[#8FA0F5] fill-[#3E31FA] dark:fill-[#8FA0F5]" />
                {t("matchCenter")}
              </Link>

              <Link
                href="/trophies"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white font-semibold text-sm transition-all"
              >
                {t("trophyRoom")}
                <ChevronRight className="w-4 h-4 text-[#3E31FA] dark:text-[#8FA0F5]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Trio Card with Real Player Photos */}
          <div className="lg:col-span-5">
            <div className="rm-card p-6 sm:p-7 space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#3E31FA] dark:text-[#8FA0F5]">
                    {language === "es" ? "Ataque Galáctico" : "First Team Feature"}
                  </span>
                  <h3 className="text-xl font-extrabold text-[#0F2145] dark:text-white">
                    The Galáctico Attack
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#EDEBFA] dark:bg-[#231B40] text-[#8760F6] dark:text-[#A5B4FC] font-bold text-xs">
                  BMV TRIO
                </span>
              </div>

              {/* Trio Grid with Real Player Photos */}
              <div className="grid grid-cols-3 gap-3">
                
                {/* Bellingham */}
                <div className="group text-center p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#0E1626] hover:bg-white dark:hover:bg-[#162038] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white dark:border-[#1E2B45] shadow-xs bg-[#EEF2FD] dark:bg-[#182544] mb-2">
                    <img
                      src="/images/players/bellingham.jpg"
                      alt="Jude Bellingham"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145] dark:text-white">Bellingham</div>
                  <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">#5 · {language === "es" ? "Medio" : "Midfield"}</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] dark:text-[#8FA0F5] bg-[#EEF2FD] dark:bg-[#182544] rounded py-0.5">
                    48 {language === "es" ? "Goles" : "Goals"}
                  </div>
                </div>

                {/* Mbappé */}
                <div className="group text-center p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#0E1626] hover:bg-white dark:hover:bg-[#162038] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white dark:border-[#1E2B45] shadow-xs bg-[#EEF2FD] dark:bg-[#182544] mb-2">
                    <img
                      src="/images/players/mbappe.jpg"
                      alt="Kylian Mbappé"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145] dark:text-white">Mbappé</div>
                  <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">#10 · {language === "es" ? "Delantero" : "Forward"}</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] dark:text-[#8FA0F5] bg-[#EEF2FD] dark:bg-[#182544] rounded py-0.5">
                    33 {language === "es" ? "Goles" : "Goals"}
                  </div>
                </div>

                {/* Vinícius Jr. */}
                <div className="group text-center p-3 rounded-2xl bg-[#F8F9FA] dark:bg-[#0E1626] hover:bg-white dark:hover:bg-[#162038] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition shadow-2xs overflow-hidden">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-white dark:border-[#1E2B45] shadow-xs bg-[#EEF2FD] dark:bg-[#182544] mb-2">
                    <img
                      src="/images/players/vinicius.jpg"
                      alt="Vinícius Júnior"
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-xs font-bold text-[#0F2145] dark:text-white">Vini Jr.</div>
                  <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">#7 · {language === "es" ? "Extremo" : "Forward"}</div>
                  <div className="mt-2 text-[10px] font-bold text-[#3E31FA] dark:text-[#8FA0F5] bg-[#EEF2FD] dark:bg-[#182544] rounded py-0.5">
                    107 {language === "es" ? "Goles" : "Goals"}
                  </div>
                </div>

              </div>

              {/* Bernabéu Tour Banner in Card */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#0F2145] to-[#2115AB] text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold">{language === "es" ? "Estadio Santiago Bernabéu" : "Tour Bernabéu"}</div>
                  <div className="text-[10px] text-slate-300">{language === "es" ? "Visita el estadio más moderno del mundo" : "Visit the world's most modern arena"}</div>
                </div>
                <Link
                  href="/trophies"
                  className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 font-bold text-[11px] transition shrink-0"
                >
                  {language === "es" ? "Ver Museo" : "Visit Museum"}
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
