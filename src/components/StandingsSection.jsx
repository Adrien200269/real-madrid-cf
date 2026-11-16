"use client";

import { standingsData } from "@/data/standings";
import { TableProperties, Flame, ShieldCheck } from "lucide-react";

export default function StandingsSection() {
  const { competition, season, table, topScorers } = standingsData;

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
              Official Primera División standings • Season {season}
            </p>
          </div>

          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#EEF2FD] text-[#3E31FA] border border-[#DEE5FD]">
            1st Position: Real Madrid (32 pts)
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table (8 cols on lg) */}
          <div className="lg:col-span-8 rm-card overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-[#E1E5EA] flex items-center justify-between bg-white">
              <h3 className="font-extrabold text-base text-[#0F2145]">{competition}</h3>
              <span className="text-xs text-[#788398]">Matchday 13</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8F9FA] text-[11px] uppercase tracking-wider text-[#788398] border-b border-[#E1E5EA]">
                  <tr>
                    <th className="py-3 px-3 sm:px-4">#</th>
                    <th className="py-3 px-3 sm:px-4">Club</th>
                    <th className="py-3 px-2 sm:px-3 text-center">PL</th>
                    <th className="py-3 px-2 sm:px-3 text-center">W</th>
                    <th className="py-3 px-2 sm:px-3 text-center">D</th>
                    <th className="py-3 px-2 sm:px-3 text-center">L</th>
                    <th className="py-3 px-2 sm:px-3 text-center">GD</th>
                    <th className="py-3 px-2 sm:px-3 text-center font-bold">PTS</th>
                    <th className="py-3 px-3 sm:px-4 text-center hidden sm:table-cell">Form</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E1E5EA] font-medium text-[#43526E]">
                  {table.map((row) => (
                    <tr
                      key={row.rank}
                      className={`transition-colors ${
                        row.highlight
                          ? "bg-[#EEF2FD] font-bold text-[#0F2145] border-l-4 border-[#3E31FA]"
                          : "hover:bg-[#F8F9FA]"
                      }`}
                    >
                      <td className="py-3.5 px-3 sm:px-4 text-[#788398]">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-bold text-xs ${
                          row.rank <= 4 ? "bg-[#3E31FA]/10 text-[#3E31FA]" : ""
                        }`}>
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 sm:px-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{row.logo}</span>
                          <span className={row.highlight ? "text-[#3E31FA] font-extrabold" : "text-[#0F2145]"}>
                            {row.team}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-2 sm:px-3 text-center">{row.played}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center">{row.won}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center">{row.drawn}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center">{row.lost}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center">{row.gd}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center font-black text-[#0F2145] text-sm">
                        {row.points}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center hidden sm:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((res, i) => (
                            <span
                              key={i}
                              className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold ${
                                res === "W"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : res === "D"
                                  ? "bg-amber-100 text-amber-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {res}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-[#F8F9FA] border-t border-[#E1E5EA] flex items-center gap-4 text-[11px] text-[#788398]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3E31FA] inline-block" />
                Positions 1-4: UEFA Champions League
              </span>
            </div>
          </div>

          {/* Side Column: Top Scorers & Stats (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="rm-card p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E1E5EA]">
                <h4 className="font-extrabold text-sm text-[#0F2145] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#3E31FA]" />
                  Goleadores (Pichichi)
                </h4>
                <span className="text-[10px] uppercase font-bold text-[#788398]">LaLiga</span>
              </div>

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
            </div>

            {/* Defensive Stat Card */}
            <div className="p-5 rounded-2xl bg-[#EEF2FD] border border-[#DEE5FD] space-y-1.5">
              <div className="flex items-center gap-2 text-[#3E31FA] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Defensive Record
              </div>
              <p className="text-xs text-[#0F2145] leading-relaxed">
                Real Madrid holds the top defensive record with only 11 goals conceded in 13 matches and a league-best goal difference of +21.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
