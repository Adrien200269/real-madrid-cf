"use client";

import { useState } from "react";
import { standingsData } from "@/data/standings";
import { Flame, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function StandingsSection() {
  const [statsTab, setStatsTab] = useState("scorers"); // "scorers" | "assists" | "advanced"
  const { competition, season, table, topScorers, topAssists, advancedStats } = standingsData;

  return (
    <section className="py-14 lg:py-20 bg-[#F3F5F8] text-[#0F2145] border-b border-[#E1E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA]">
              Competitions · Domestic League
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] mt-1">
              Clasificación LaLiga EA Sports
            </h2>
            <p className="text-[#788398] text-xs sm:text-sm mt-1">
              Official Primera División standings • Season {season} • ESPN Official Soccer API
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white text-[#43526E] border border-[#E1E5EA]">
              1st: {table[0]?.team} ({table[0]?.points} pts)
            </span>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#EEF2FD] text-[#3E31FA] border border-[#DEE5FD]">
              2nd: {table[1]?.team} ({table[1]?.points} pts)
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table (8 cols on lg) */}
          <div className="lg:col-span-8 rm-card overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#E1E5EA] flex items-center justify-between bg-white">
              <h3 className="font-extrabold text-base text-[#0F2145]">{competition}</h3>
              <span className="text-xs font-semibold text-[#788398]">{standingsData.matchday || "Matchday 12"}</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8F9FA] text-[11px] uppercase tracking-wider text-[#788398] border-b border-[#E1E5EA]">
                  <tr>
                    <th className="py-3 px-2 sm:px-3 text-center">#</th>
                    <th className="py-3 px-3 sm:px-4">Club</th>
                    <th className="py-3 px-2 sm:px-3 text-center">PL</th>
                    <th className="py-3 px-2 sm:px-3 text-center">W</th>
                    <th className="py-3 px-2 sm:px-3 text-center">D</th>
                    <th className="py-3 px-2 sm:px-3 text-center">L</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden md:table-cell">+/-</th>
                    <th className="py-3 px-2 sm:px-3 text-center">GD</th>
                    <th className="py-3 px-2 sm:px-3 text-center font-bold">PTS</th>
                    <th className="py-3 px-3 sm:px-4 text-center hidden sm:table-cell">Form</th>
                    <th className="py-3 px-2 sm:px-3 text-center hidden lg:table-cell">Next</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E5EA] font-medium text-[#43526E]">
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
                            ? "bg-[#EEF2FD] font-bold text-[#0F2145]"
                            : "hover:bg-[#F8F9FA]"
                        }`}
                      >
                        <td className="py-3 px-2 sm:px-3 text-center text-[#788398]">
                          <span className={`w-5 h-5 mx-auto rounded flex items-center justify-center font-bold text-xs ${
                            row.rank <= 4 ? "bg-[#3E31FA]/10 text-[#3E31FA]" : ""
                          }`}>
                            {row.rank}
                          </span>
                        </td>
                        <td className="py-3 px-3 sm:px-4">
                          <div className="flex items-center gap-2.5">
                            {row.logo ? (
                              <img
                                src={row.logo}
                                alt={row.team}
                                className="w-5 h-5 object-contain shrink-0"
                                loading="lazy"
                              />
                            ) : null}
                            <span className={row.highlight ? "text-[#3E31FA] font-extrabold" : "text-[#0F2145]"}>
                              {row.team}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.played}</td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.won}</td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.drawn}</td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.lost}</td>
                        <td className="py-3 px-2 sm:px-3 text-center text-[#788398] font-mono text-[11px] hidden md:table-cell">
                          {row.scoresStr || `${row.gf}-${row.ga}`}
                        </td>
                        <td className="py-3 px-2 sm:px-3 text-center">{row.gd}</td>
                        <td className="py-3 px-2 sm:px-3 text-center font-black text-[#0F2145] text-sm">
                          {row.points}
                        </td>
                        <td className="py-3 px-3 sm:px-4 text-center hidden sm:table-cell">
                          <div className="flex items-center justify-center gap-1">
                            {row.form.map((res, i) => (
                              <span
                                key={i}
                                className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black text-white shadow-2xs ${
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

            <div className="p-3 bg-[#F8F9FA] border-t border-[#E1E5EA] flex flex-wrap items-center gap-4 text-[11px] text-[#788398]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 inline-block" />
                Positions 1–4: UEFA Champions League
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                Position 5: UEFA Europa League
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                Position 6: UEFA Conference League
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                Positions 18–20: Relegation
              </span>
            </div>
          </div>

          {/* Side Column: Top Scorers & Stats (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="rm-card p-5 space-y-4">
              
              {/* Header with Selector Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E1E5EA]">
                <div className="flex items-center gap-1 bg-[#F3F5F8] p-1 rounded-lg">
                  <button
                    onClick={() => setStatsTab("scorers")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "scorers"
                        ? "bg-white text-[#3E31FA] shadow-xs"
                        : "text-[#788398] hover:text-[#0F2145]"
                    }`}
                  >
                    Goles
                  </button>
                  <button
                    onClick={() => setStatsTab("assists")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "assists"
                        ? "bg-white text-[#3E31FA] shadow-xs"
                        : "text-[#788398] hover:text-[#0F2145]"
                    }`}
                  >
                    Asistencias
                  </button>
                  <button
                    onClick={() => setStatsTab("advanced")}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition ${
                      statsTab === "advanced"
                        ? "bg-white text-[#3E31FA] shadow-xs"
                        : "text-[#788398] hover:text-[#0F2145]"
                    }`}
                  >
                    Líderes
                  </button>
                </div>
                <span className="text-[10px] uppercase font-bold text-[#788398]">FotMob</span>
              </div>

              {/* Tab 1: Top Scorers */}
              {statsTab === "scorers" && (
                <div className="space-y-2.5">
                  {topScorers.map((scorer, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-[#3E31FA] w-4 text-center">
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
                          <div className="text-xs font-bold text-[#0F2145]">{scorer.player}</div>
                          <div className="text-[10px] text-[#788398]">{scorer.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-[#0F2145]">{scorer.goals} Goals</div>
                        <div className="text-[10px] text-[#788398]">{scorer.assists} Assists</div>
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
                      className="flex items-center justify-between p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-[#3E31FA] w-4 text-center">
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
                          <div className="text-xs font-bold text-[#0F2145]">{ast.player}</div>
                          <div className="text-[10px] text-[#788398]">{ast.team}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-[#3E31FA]">{ast.assists} Assists</div>
                        <div className="text-[10px] text-[#788398]">{ast.goals} Goals</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Advanced Stats */}
              {statsTab === "advanced" && advancedStats && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398] flex items-center justify-between">
                      <span>Expected Goals (xG) Leader</span>
                      <Sparkles className="w-3 h-3 text-[#3E31FA]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145]">{advancedStats.xG[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA]">{advancedStats.xG[0].stat}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398] flex items-center justify-between">
                      <span>Chances Created Leader</span>
                      <Award className="w-3 h-3 text-[#3E31FA]" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145]">{advancedStats.chancesCreated[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA]">{advancedStats.chancesCreated[0].stat}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] space-y-1">
                    <div className="text-[10px] font-bold uppercase text-[#788398]">
                      Highest Match Rating
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#0F2145]">{advancedStats.ratings[0].player}</span>
                      <span className="text-xs font-black text-[#3E31FA]">{advancedStats.ratings[0].stat}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* FotMob Form & Momentum Card */}
            <div className="p-5 rounded-2xl bg-[#EEF2FD] border border-[#DEE5FD] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3E31FA] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                FotMob Form & Momentum
              </div>
              <p className="text-xs text-[#0F2145] leading-relaxed">
                Real Madrid stands 2nd in LaLiga with 30 points (10 wins in 12 matches) and a +21 goal difference, riding a 5-match winning streak. Kylian Mbappé leads the league with 14.6 xG, while Arda Güler leads with 42 chances created.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
