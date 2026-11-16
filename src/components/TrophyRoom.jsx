"use client";

import { useState } from "react";
import { trophiesData } from "@/data/trophies";
import { Trophy, History, Award, Search, Sparkles } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function TrophyRoom() {
  const { t, language } = useThemeLanguage();
  const { summary, championsLeagues, eras } = trophiesData;
  const [selectedUcl, setSelectedUcl] = useState(championsLeagues[0]);
  const [uclFilterYear, setUclFilterYear] = useState("");

  const filteredUcl = championsLeagues.filter((c) =>
    !uclFilterYear ? true : c.year.includes(uclFilterYear) || c.opponent.toLowerCase().includes(uclFilterYear.toLowerCase())
  );

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDEBFA] dark:bg-[#231B40] text-[#8760F6] dark:text-[#A5B4FC] text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              {t("trophiesTag")}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] dark:text-white">
              {t("trophiesHeading")}
            </h2>
            <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm mt-1">
              {t("trophiesSub")}
            </p>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#0F2145] dark:text-slate-200 shadow-2xs">
              {t("totalEuropeanCrowns")}
            </span>
          </div>
        </div>

        {/* Trophy Summary Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 mb-10 sm:mb-12">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-2xs p-3 sm:p-4 text-center space-y-2 flex flex-col items-center justify-between group hover:border-[#3E31FA]/40 transition"
            >
              <div className="w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center p-1 group-hover:scale-110 transition-transform">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl sm:text-3xl font-black text-[#0F2145] dark:text-white">
                  {item.count}
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-[#0F2145] dark:text-slate-200 line-clamp-1">
                  {item.name}
                </div>
                <div className="text-[9px] sm:text-[10px] text-[#788398] dark:text-slate-400">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 15 European Cups Interactive Component */}
        <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs p-4 sm:p-6 md:p-8 mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
            <div>
              <span className="text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                {t("the15Finals")}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2145] dark:text-white mt-0.5">
                {t("laDecimoquinta")}
              </h3>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#788398] dark:text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={t("searchFinals")}
                value={uclFilterYear}
                onChange={(e) => setUclFilterYear(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] focus:border-[#3E31FA] rounded-full text-xs text-[#0F2145] dark:text-white placeholder-[#788398] dark:placeholder-slate-400 focus:outline-none transition shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-5 sm:pt-6 items-start">
            
            {/* Scrollable list of 15 titles */}
            <div className="lg:col-span-5 space-y-2 max-h-[460px] overflow-y-auto pr-2">
              {filteredUcl.map((c) => (
                <div
                  key={c.edition}
                  onClick={() => setSelectedUcl(c)}
                  className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                    selectedUcl?.edition === c.edition
                      ? "bg-[#EEF2FD] dark:bg-[#182544] border-[#3E31FA] shadow-2xs"
                      : "bg-[#F8F9FA] dark:bg-[#0E1626] border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#C7CCD6] text-[#43526E] dark:text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#3E31FA] dark:text-[#8FA0F5] font-black text-xs flex items-center justify-center shrink-0">
                      #{c.edition}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#0F2145] dark:text-white">
                        {c.year} vs {c.opponent}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#788398] dark:text-slate-400">
                        {c.venue}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5] px-2.5 py-1 rounded bg-white dark:bg-[#111A2E] border border-[#DEE5FD] dark:border-[#1E2B45]">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>

            {/* Spotlight Card with Real Trophy Image */}
            {selectedUcl && (
              <div className="lg:col-span-7 rounded-2xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] p-5 sm:p-6 space-y-4 sm:space-y-5">
                
                {/* Header with real UCL trophy photo preview */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#E1E5EA] dark:border-[#1E2B45] bg-white dark:bg-[#111A2E] shrink-0">
                      <img
                        src="/images/trophies/ucl-trophy.jpg"
                        alt="UEFA Champions League Trophy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-black text-[#3E31FA] dark:text-[#8FA0F5]">
                          ★ {selectedUcl.year}
                        </span>
                        <span className="text-[10px] sm:text-xs uppercase font-bold px-2 py-0.5 rounded bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#0F2145] dark:text-white">
                          #{selectedUcl.edition}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-[#0F2145] dark:text-white mt-0.5">
                        Real Madrid vs {selectedUcl.opponent}
                      </h4>
                    </div>
                  </div>

                  <div className="text-lg sm:text-xl font-black text-[#0F2145] dark:text-white px-3 sm:px-3.5 py-1 rounded-xl bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] shrink-0">
                    {selectedUcl.score}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] space-y-1.5 text-xs">
                  <div className="text-[#43526E] dark:text-slate-300">
                    <strong className="text-[#0F2145] dark:text-white">
                      {language === "es" ? "Goleadores: " : "Goalscorers: "}
                    </strong>
                    {selectedUcl.scorers}
                  </div>
                  <div className="text-[#788398] dark:text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1.5 border-t border-[#F1F5F9] dark:border-[#1E2B45]">
                    <span>
                      <strong className="text-[#0F2145] dark:text-white">
                        {language === "es" ? "Entrenador: " : "Manager: "}
                      </strong>
                      {selectedUcl.manager}
                    </span>
                    <span>
                      <strong className="text-[#0F2145] dark:text-white">
                        {language === "es" ? "Capitán: " : "Captain: "}
                      </strong>
                      {selectedUcl.captain}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EEF2FD] dark:bg-[#182544] border border-[#DEE5FD] dark:border-[#23356A]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3E31FA] dark:text-[#8FA0F5]">
                    {language === "es" ? "Contexto Histórico" : "Historical Context"}
                  </span>
                  <p className="text-xs italic text-[#0F2145] dark:text-slate-200 mt-1 leading-relaxed">
                    &quot;{selectedUcl.note}&quot;
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Historical Eras with Real Legend Photos */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-[#3E31FA] dark:text-[#8FA0F5]" />
            <h3 className="text-xl font-extrabold text-[#0F2145] dark:text-white">
              {t("legendaryEras")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {eras.map((era, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden flex flex-col justify-between group"
              >
                {/* Era Image */}
                <div className="relative h-44 w-full bg-[#0F2145] overflow-hidden">
                  <img
                    src={era.image}
                    alt={era.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3.5 text-xs font-bold text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
                    {era.era}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#0F2145] dark:text-white">{era.title}</h4>
                    <p className="text-xs text-[#43526E] dark:text-slate-300 leading-relaxed">
                      {era.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E1E5EA] dark:border-[#1E2B45] text-[11px] text-[#788398] dark:text-slate-400">
                    {language === "es" ? "Figuras Clave: " : "Key Figures: "}{" "}
                    <strong className="text-[#0F2145] dark:text-white">{era.keyFigure}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
