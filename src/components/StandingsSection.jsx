"use client";

import { standingsData } from "@/data/standings";
import { TableProperties, Flame, ShieldCheck } from "lucide-react";

export default function StandingsSection() {
  const { competition, season, table, topScorers } = standingsData;

  return (
    <section className="py-16 lg:py-24 bg-white text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold tracking-widest uppercase shadow-xs">
            <TableProperties className="w-3.5 h-3.5 text-[#c5a059]" />
            League Table & Pichichi Race
          </div>
          <h2 className="font-royal text-3xl sm:text-5xl font-black tracking-tight text-[#0a1428]">
            LA LIGA <span className="gold-gradient-text">STANDINGS</span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base">
            Track Real Madrid&apos;s campaign for the 37th domestic league title alongside current league form and top scorers.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Table (8 cols on lg) */}
          <div className="lg:col-span-8 rounded-3xl bg-white border border-[#c5a059]/30 overflow-hidden shadow-md">
            <div className="p-4 sm:p-5 border-b border-[#e2e8f0] flex items-center justify-between bg-[#faf8f5]">
              <div>
                <h3 className="font-royal font-bold text-lg text-[#0a1428]">{competition}</h3>
                <p className="text-xs text-[#64748b]">Season {season} • Matchday 13</p>
              </div>
              <span className="text-xs font-black px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813]">
                1st Place: Real Madrid
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#f8f9fa] text-[11px] uppercase tracking-wider text-[#64748b] border-b border-[#e2e8f0]">
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
                <tbody className="divide-y divide-[#f1f5f9] font-medium text-[#334155]">
                  {table.map((row) => (
                    <tr
                      key={row.rank}
                      className={`transition-colors ${
                        row.highlight
                          ? "bg-[#faf6ec] font-bold border-l-4 border-[#c5a059]"
                          : "hover:bg-[#faf8f5]"
                      }`}
                    >
                      <td className="py-3.5 px-3 sm:px-4 text-[#64748b]">
                        <span className={`w-6 h-6 rounded-md flex items-center justify-center font-black text-xs ${
                          row.rank <= 4 ? "bg-[#e0e7ff] text-[#3730a3]" : ""
                        }`}>
                          {row.rank}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 sm:px-4">
                        <div className="flex items-center gap-2.5">
                          <span className="text-base">{row.logo}</span>
                          <span className={row.highlight ? "text-[#7a5813] font-black" : "text-[#0a1428]"}>
                            {row.team}
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-[#475569]">{row.played}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-[#475569]">{row.won}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-[#475569]">{row.drawn}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-[#475569]">{row.lost}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center text-[#475569]">{row.gd}</td>
                      <td className="py-3.5 px-2 sm:px-3 text-center font-royal font-black text-[#7a5813] text-sm sm:text-base">
                        {row.points}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-center hidden sm:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((res, i) => (
                            <span
                              key={i}
                              className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-black ${
                                res === "W"
                                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                                  : res === "D"
                                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                                  : "bg-red-100 text-red-800 border border-red-200"
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

            <div className="p-3 bg-[#faf8f5] border-t border-[#e2e8f0] flex items-center gap-4 text-[11px] text-[#64748b]">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4f46e5] inline-block" />
                Positions 1-4: UEFA Champions League
              </span>
            </div>
          </div>

          {/* Side Column: Top Scorers & Stats (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl bg-white border border-[#c5a059]/30 p-5 space-y-4 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-[#e2e8f0]">
                <h4 className="font-royal font-bold text-sm text-[#0a1428] flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#c5a059]" />
                  Pichichi Race (Top Scorers)
                </h4>
                <span className="text-[10px] uppercase font-bold text-[#997328]">La Liga</span>
              </div>

              <div className="space-y-3">
                {topScorers.map((scorer, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-[#faf8f5] border border-[#e2e8f0] hover:border-[#c5a059]/40 transition"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-royal text-xs font-black text-[#7a5813] w-4 text-center">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="text-xs font-bold text-[#0a1428]">{scorer.player}</div>
                        <div className="text-[10px] text-[#64748b]">{scorer.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-[#7a5813]">{scorer.goals} Goals</div>
                      <div className="text-[10px] text-[#64748b]">{scorer.assists} Assists</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Madridista pride fact */}
            <div className="rounded-3xl bg-[#faf6ec] border border-[#c5a059]/40 p-5 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#7a5813] text-xs font-black uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Defensive Wall
              </div>
              <p className="text-xs text-[#334155] leading-relaxed">
                Real Madrid currently boasts the best goal difference (+21) in the league, with Thibaut Courtois keeping 7 clean sheets in the opening stretch.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
