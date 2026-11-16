"use client";

import { useState } from "react";
import { standingsData } from "@/data/standings";
import { Flame, ShieldCheck, Sparkles, Award } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function StandingsSection() {
  const { t, language } = useThemeLanguage();
  const [statsTab, setStatsTab] = useState("scorers"); // "scorers" | "assists" | "advanced"
  const { competition, season, table, topScorers, topAssists, advancedStats } = standingsData;

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA] dark:text-[#8FA0F5]">
              {t("standingsTag")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] dark:text-white mt-1">
              {t("standingsHeading")}
            </h2>
            <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm mt-1">
              {t("standingsSub")}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white dark:bg-[#111A2E] text-[#43526E] dark:text-slate-200 border border-[#E1E5EA] dark:border-[#1E2B45]">
              {t("firstPlace")}: {table[0]?.team} ({table[0]?.points} {t("pts")})
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] border border-[#DEE5FD] dark:border-[#23356A]">
              {t("secondPlace")}: {table[1]?.team} ({table[1]?.points} {t("pts")})
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Main Table (8 cols on lg) */}
          <div className="lg:col-span-8 bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#E1E5EA] dark:border-[#1E2B45] flex items-center justify-between bg-white dark:bg-[#111A2E]">
              <h3 className="font-extrabold text-base text-[#0F2145] dark:text-white">{competition}</h3>
              <span className="text-xs font-semibold text-[#788398] dark:text-slate-400">{standingsData.matchday || "Matchday 12"}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-[560px] sm:min-w-full w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8F9FA] dark:bg-[#0E1626] text-[11px] uppercase tracking-wider text-[#788398] dark:text-slate-400 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
                  <tr>
                    <th className="py-3 px-2 sm:px-3 text-center">{t("rank")}</th>
                    <th className="py-3 px-3 sm:px-4">{t("club")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center">{t("played")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{t("won")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{t("drawn")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{t("lost")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden md:table-cell">{t("goalsDiff")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center">{t("goalDiff")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center font-bold">{t("points")}</th>
                    <th className="py-3 px-3 sm:px-4 text-center">{t("form")}</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden lg:table-cell">{t("next")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E5EA] dark:divide-[#1E2B45] font-medium text-[#43526E] dark:text-slate-300">
                  {table.map((row) => {
                    const zoneBorder = 
                      row.rank <= 4 
                        ? "border-l-4 border-cyan-500" 
                        : row.rank === 5 
                        ? "border-l-4 border-amber-500" 
                        : row.rank === 6 
                        ? "border-l-4 border-emerald-500" 
                        : row.rank >= 18 
                        ? "border-l-4 border-rose-500" 
                        : "border-l-4 border-transparent";

                    return (
                      <tr
                        key={row.rank}
                        className={`transition-colors ${zoneBorder} ${
                          row.highlight
                            ? "bg-[#EEF2FD] dark:bg-[#182544] font-bold text-[#0F2145] dark:text-white"
                            : "hover:bg-[#F8F9FA] dark:hover:bg-[#0E1626]"
                        }`}
                      >
                        <td className="py-3 px-2 sm:px-3 text-center text-[#788398] dark:text-slate-400">
                          <span className={`w-5 h-5 mx-auto rounded flex items-center justify-center font-bold text-xs ${
                            row.rank <= 4 ? "bg-[#3E31FA]/10 dark:bg-[#3E31FA]/25 text-[#3E31FA] dark:text-[#8FA0F5]" : ""
                          }`}>
                            {row.rank}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:px-4">
                          <div className="flex items-center gap-2 sm:gap-2.5">
                            {row.logo ? (
                              <img
                                src={row.logo}
                                alt={row.team}
                                className="w-5 h-5 object-contain shrink-0"
                                loading="lazy"
                              />
                            ) : null}
                            <span className={row.highlight ? "text-[#3E31FA] dark:text-[#8FA0F5] font-extrabold" : "text-[#0F2145] dark:text-white"}>
                              {row.team}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.played}</td>
                        <td className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{row.won}</td>
                        <td className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{row.drawn}</td>
                        <td className="py-3 px-2 sm:px-3 text-center hidden sm:table-cell">{row.lost}</td>
                        <td className="py-3 px-2 sm:px-3 text-center text-[#788398] dark:text-slate-400 font-mono text-[11px] hidden md:table-cell">
                          {row.scoresStr || `${row.gf}-${row.ga}`}
                        </td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.gd}</td>
                        <td className="py-3 px-2 sm:px-3 text-center font-black text-[#0F2145] dark:text-white text-sm">
                          {row.points}
                        </td>
                        <td className="py-3 px-2 sm:px-4 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {row.form.map((res, i) => (
                              <span
                                key={i}
                                className={`w-4 h-4 sm:w-5 sm:h-5 rounded flex items-center justify-center text-[9px] sm:text-[10px] font-black text-white shadow-2xs ${
                                  res === "W"
                                    ? "bg-[#10B981]"
                                    : res === "D"
                                    ? "bg-[#64748B]"
                                    : "bg-[#EF4444]"
                                }`}
                              >
                                {res}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-2 sm:px-3 text-center hidden lg:table-cell">
                          {row.nextOpponent?.logo ? (
                            <img
                              src={row.nextOpponent.logo}
                              alt={row.nextOpponent.name || "Next Opponent"}
                              title={`Next: ${row.nextOpponent.name}`}
                              className="w-5 h-5 object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-[10px] text-slate-400">-</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-[#F8F9FA] dark:bg-[#0E1626] border-t border-[#E1E5EA] dark:border-[#1E2B45] flex flex-wrap items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-[#788398] dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block" />
                {t("uclZone")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                {t("uelZone")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                {t("ueclZone")}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                {t("relegationZone")}
              </span>
            </div>
          </div>

          {/* Side Column: Top Scorers & Stats (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs p-4 sm:p-5 space-y-4">
              
              {/* Header with Selector Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
                <div className="flex items-center gap-1 bg-[#F3F5F8] dark:bg-[#0E1626] p-1 rounded-lg border border-[#E1E5EA] dark:border-[#1E2B45]">
                  <button
                    onClick={() => setStatsTab("scorers")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "scorers"
                        ? "bg-white dark:bg-[#1B294B] text-[#3E31FA] dark:text-white shadow-xs"
                        : "text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
                    }`}
                  >
                    {language === "es" ? "Goles" : "Goals"}
                  </button>
                  <button
                    onClick={() => setStatsTab("assists")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "assists"
                        ? "bg-white dark:bg-[#1B294B] text-[#3E31FA] dark:text-white shadow-xs"
                        : "text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
                    }`}
                  >
                    {language === "es" ? "Asistencias" : "Assists"}
                  </button>
                  <button
                    onClick={() => setStatsTab("advanced")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "advanced"
                        ? "bg-white dark:bg-[#1B294B] text-[#3E31FA] dark:text-white shadow-xs"
                        : "text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
                    }`}
                  >
                    {language === "es" ? "Líderes" : "Leaders"}
                  </button>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#788398] dark:text-slate-400">FotMob</span>
              </div>

              {/* Tab 1: Top Scorers */}
              {statsTab === "scorers" && (
                <div className="space-y-2.5">
                  {topScorers.map((scorer, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5] w-4 text-center">
                          {idx + 1}
                        </span>
                        {scorer.logo && (
                          <img
                            src={scorer.logo}
                            alt={scorer.team}
                            className="w-5 h-5 object-contain shrink-0"
                            loading="lazy"
                          />
                        )}
                        <div>
                          <div className="text-xs font-bold text-[#0F2145] dark:text-white">{scorer.player}</div>
                          <div className="text-[10px] text-[#788398] dark:text-slate-400">{scorer.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-[#0F2145] dark:text-white">
                          {scorer.goals} {language === "es" ? "Goles" : "Goals"}
                        </div>
                        <div className="text-[10px] text-[#788398] dark:text-slate-400">
                          {scorer.assists} {language === "es" ? "Asistencias" : "Assists"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Top Assists */}
              {statsTab === "assists" && (
                <div className="space-y-2.5">
                  {(topAssists || []).map((ast, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5] w-4 text-center">
                          {idx + 1}
                        </span>
                        {ast.logo && (
                          <img
                            src={ast.logo}
                            alt={ast.team}
                            className="w-5 h-5 object-contain shrink-0"
                            loading="lazy"
                          />
                        )}
                        <div>
                          <div className="text-xs font-bold text-[#0F2145] dark:text-white">{ast.player}</div>
                          <div className="text-[10px] text-[#788398] dark:text-slate-400">{ast.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5]">
                          {ast.assists} {language === "es" ? "Asistencias" : "Assists"}
                        </div>
                        <div className="text-[10px] text-[#788398] dark:text-slate-400">
                          {ast.goals} {language === "es" ? "Goles" : "Goals"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Advanced Stats */}
              {statsTab === "advanced" && advancedStats && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398] dark:text-slate-400 flex items-center justify-between">
                      <span>Expected Goals (xG) Leader</span>
                      <Sparkles className="w-3 h-3 text-[#3E31FA] dark:text-[#8FA0F5]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145] dark:text-white">{advancedStats.xG[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5]">{advancedStats.xG[0].stat}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398] dark:text-slate-400 flex items-center justify-between">
                      <span>Chances Created Leader</span>
                      <Award className="w-3 h-3 text-[#3E31FA] dark:text-[#8FA0F5]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145] dark:text-white">{advancedStats.chancesCreated[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5]">{advancedStats.chancesCreated[0].stat}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398] dark:text-slate-400">
                      Highest Match Rating
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145] dark:text-white">{advancedStats.ratings[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA] dark:text-[#8FA0F5]">{advancedStats.ratings[0].stat}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Form & Momentum Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#EEF2FD] dark:bg-[#182544] border border-[#DEE5FD] dark:border-[#23356A] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3E31FA] dark:text-[#8FA0F5] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                FotMob Form & Momentum
              </div>
              <p className="text-xs text-[#0F2145] dark:text-slate-200 leading-relaxed">
                Real Madrid stands 2nd in LaLiga with 30 points (10 wins in 12 matches) and a +21 goal difference, riding a 5-match winning streak. Kylian Mbappé leads the league with 14.6 xG, while Arda Güler leads with 42 chances created.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
