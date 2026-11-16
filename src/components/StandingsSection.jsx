"use client";

import { standingsData } from "@/data/standings";
import { TableProperties, Award, Flame, ShieldCheck } from "lucide-react";

export default function StandingsSection() {
  const { competition, season, table, topScorers } = standingsData;

  return (
    <section className="py-16 lg:py-24 bg-[#060a17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase">
            <TableProperties className="w-3.5 h-3.5" />
            League Table & Pichichi Race
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            LA LIGA <span className="gold-gradient-text">STANDINGS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track Real Madrid&apos;s push for the 37th domestic league title alongside current league form and top scorers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table (8 cols on lg) */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0b152d] border border-white/10 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-lg text-white">{competition}</h3>
                <p className="text-xs text-slate-400">Season {season} • Matchday 13</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300">
                1st Place: Real Madrid
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-white/5 text-[11px] uppercase tracking-wider text-slate-400 border-b border-white/10">
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
                <tbody className="divide-y divide-white/5 font-medium">
                  {table.map((row) => (
                    <tr
                      key={row.rank}
                      className={`transition-colors ${
                        row.highlight
                          ? "bg-gradient-to-r from-amber-500/20 via-blue-900/30 to-amber-500/10 font-bold border-l-4 border-amber-400"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <td className="py-3.5 px-3 sm:px-4 text-slate-400">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-black text-xs ${
                          row.rank <= 4 ? "bg-blue-600/30 text-blue-300" : ""
                        }`}>
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 sm:px-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{row.logo}</span>
                          <span className={row.highlight ? "text-amber-300 font-extrabold" : "text-white"}>
                            {row.team}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-slate-300">{row.played}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-slate-300">{row.won}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-slate-300">{row.drawn}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-slate-300">{row.lost}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-slate-300">{row.gd}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center font-black text-amber-400 text-sm sm:text-base">
                        {row.points}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center hidden sm:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((res, i) => (
                            <span
                              key={i}
                              className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black ${
                                res === "W"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : res === "D"
                                  ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                                  : "bg-red-500/20 text-red-400 border border-red-500/30"
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

            <div className="p-3 bg-white/5 border-t border-white/10 flex items-center gap-4 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
                Positions 1-4: UEFA Champions League
              </span>
            </div>
          </div>

          {/* Side Column: Top Scorers & Stats (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl bg-[#0b152d] border border-white/10 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="font-extrabold text-sm text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Pichichi Race (Top Scorers)
                </h4>
                <span className="text-[10px] uppercase font-bold text-amber-400">La Liga</span>
              </div>

              <div className="space-y-3">
                {topScorers.map((scorer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-black text-amber-400 w-4 text-center">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white">{scorer.player}</div>
                        <div className="text-[10px] text-slate-400">{scorer.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-amber-400">{scorer.goals} Goals</div>
                      <div className="text-[10px] text-slate-400">{scorer.assists} Assists</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Madridista pride fact */}
            <div className="rounded-2xl bg-gradient-to-tr from-amber-500/20 via-[#0b152d] to-[#122247] border border-amber-400/30 p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Defensive Wall
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Real Madrid currently boasts the best goal difference (+21) in the league, with Thibaut Courtois keeping 7 clean sheets in the opening stretch.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
