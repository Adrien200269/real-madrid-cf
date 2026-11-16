"use client";

import { useState } from "react";
import { matchCenterData } from "@/data/matches";
import { 
  Radio, 
  Clock, 
  Calendar, 
  BarChart2, 
  Users, 
  Trophy, 
  Activity,
  Flame,
  Crown
} from "lucide-react";

export default function InteractiveMatchCenter() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" | "stats" | "lineup"
  const { liveMatch, upcomingFixtures, recentResults } = matchCenterData;

  return (
    <section className="py-16 lg:py-24 bg-[#faf9f6] text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-widest uppercase shadow-xs">
            <Radio className="w-3.5 h-3.5 animate-pulse text-red-600" />
            Live Bernabéu Match Center
          </div>
          <h2 className="font-royal text-3xl sm:text-5xl font-black tracking-tight text-[#0a1428]">
            MATCHDAY <span className="gold-gradient-text">SANCTUARY</span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base">
            Live match tracking, minute commentary, official tactical formations, and European tournament records.
          </p>
        </div>

        {/* Live Match Hero Board */}
        <div className="relative rounded-3xl bg-white border border-[#c5a059]/35 p-6 sm:p-10 shadow-lg mb-12 overflow-hidden">
          
          {/* Subtle crest watermark */}
          <div className="absolute -right-10 -bottom-10 opacity-[0.03] pointer-events-none w-80 h-80">
            <Crown className="w-full h-full text-[#c5a059]" />
          </div>

          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#e2e8f0] relative z-10 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-[#faf6ec] text-[#7a5813] font-bold border border-[#c5a059]/30">
                {liveMatch.competition}
              </span>
              <span className="text-[#64748b] font-medium">{liveMatch.stage}</span>
            </div>
            <div className="flex items-center gap-4 text-[#475569]">
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                {liveMatch.venue}
              </span>
              <span className="hidden sm:inline text-[#cbd5e1]">•</span>
              <span className="hidden sm:inline font-semibold">Att: {liveMatch.attendance}</span>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Home Team */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-4 text-center md:text-right">
              <div>
                <h3 className="font-royal text-2xl sm:text-3xl font-black text-[#0a1428]">
                  {liveMatch.homeTeam.name}
                </h3>
                <p className="text-xs text-[#997328] font-bold uppercase tracking-wider">
                  Reyes de Europa
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/40 flex items-center justify-center text-3xl shadow-xs">
                {liveMatch.homeTeam.logo}
              </div>
            </div>

            {/* Score in Center */}
            <div className="md:col-span-2 text-center space-y-2">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-[#faf8f5] border border-[#c5a059]/30 shadow-xs">
                <span className="font-royal text-4xl sm:text-5xl font-black text-[#7a5813]">
                  {liveMatch.homeTeam.score}
                </span>
                <span className="text-2xl text-[#94a3b8] font-light">-</span>
                <span className="font-royal text-4xl sm:text-5xl font-black text-[#0a1428]">
                  {liveMatch.awayTeam.score}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-red-600">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>{liveMatch.status} • {liveMatch.minute}</span>
              </div>
            </div>

            {/* Away Team */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-start gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-3xl shadow-xs">
                {liveMatch.awayTeam.logo}
              </div>
              <div>
                <h3 className="font-royal text-2xl sm:text-3xl font-black text-[#0a1428]">
                  {liveMatch.awayTeam.name}
                </h3>
                <p className="text-xs text-[#64748b] font-bold uppercase tracking-wider">
                  Bundesliga Contender
                </p>
              </div>
            </div>
          </div>

          {/* Goal Scorers list */}
          <div className="pt-4 border-t border-[#e2e8f0] relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#475569]">
              {liveMatch.scorers.map((s, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-[#faf8f5] px-3 py-1 rounded-full border border-[#e2e8f0]">
                  <span className="text-[#997328] font-black">{s.minute}</span>
                  <span className="font-bold text-[#0a1428]">{s.player}</span>
                  <span className="text-[#64748b] text-[11px]">({s.team})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Match Center Interactive Tabs */}
          <div className="mt-8 pt-6 border-t border-[#e2e8f0] relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab("timeline")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "timeline"
                    ? "bg-[#faf6ec] text-[#7a5813] border border-[#c5a059]/40 shadow-xs"
                    : "bg-white text-[#64748b] hover:text-[#0a1428] border border-[#e2e8f0]"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-[#c5a059]" />
                Live Timeline
              </button>

              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "stats"
                    ? "bg-[#faf6ec] text-[#7a5813] border border-[#c5a059]/40 shadow-xs"
                    : "bg-white text-[#64748b] hover:text-[#0a1428] border border-[#e2e8f0]"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5 text-[#c5a059]" />
                Statistics
              </button>

              <button
                onClick={() => setActiveTab("lineup")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === "lineup"
                    ? "bg-[#faf6ec] text-[#7a5813] border border-[#c5a059]/40 shadow-xs"
                    : "bg-white text-[#64748b] hover:text-[#0a1428] border border-[#e2e8f0]"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-[#c5a059]" />
                Lineups (4-3-3)
              </button>
            </div>

            {/* Tab 1: Live Timeline */}
            {activeTab === "timeline" && (
              <div className="space-y-3 max-w-2xl mx-auto">
                {liveMatch.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#c5a059]/40 transition shadow-xs"
                  >
                    <span className="px-2.5 py-0.5 rounded-md bg-[#faf6ec] text-[#7a5813] font-black text-xs shrink-0 border border-[#c5a059]/30">
                      {event.min}
                    </span>
                    <p className="text-xs text-[#1e293b] leading-relaxed font-medium">
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Match Stats */}
            {activeTab === "stats" && (
              <div className="space-y-4 max-w-xl mx-auto bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-xs">
                {/* Possession */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#997328]">Real Madrid ({liveMatch.stats.possession.home}%)</span>
                    <span className="text-[#64748b]">Possession</span>
                    <span className="text-[#0a1428]">{liveMatch.stats.possession.away}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#f1f5f9] rounded-full overflow-hidden flex">
                    <div
                      className="bg-gradient-to-r from-[#c5a059] to-[#997328] h-full"
                      style={{ width: `${liveMatch.stats.possession.home}%` }}
                    />
                    <div
                      className="bg-[#0a1428] h-full"
                      style={{ width: `${liveMatch.stats.possession.away}%` }}
                    />
                  </div>
                </div>

                {/* Total Shots */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#997328]">{liveMatch.stats.shots.home}</span>
                    <span className="text-[#64748b]">Total Shots</span>
                    <span className="text-[#0a1428]">{liveMatch.stats.shots.away}</span>
                  </div>
                  <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#c5a059] h-full"
                      style={{ width: `${(liveMatch.stats.shots.home / (liveMatch.stats.shots.home + liveMatch.stats.shots.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Shots on Target */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#997328]">{liveMatch.stats.shotsOnTarget.home}</span>
                    <span className="text-[#64748b]">Shots on Target</span>
                    <span className="text-[#0a1428]">{liveMatch.stats.shotsOnTarget.away}</span>
                  </div>
                  <div className="w-full h-2 bg-[#f1f5f9] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#997328] h-full"
                      style={{ width: `${(liveMatch.stats.shotsOnTarget.home / (liveMatch.stats.shotsOnTarget.home + liveMatch.stats.shotsOnTarget.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Expected Goals (xG) */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#997328]">{liveMatch.stats.expectedGoals.home} xG</span>
                    <span className="text-[#64748b]">Expected Goals</span>
                    <span className="text-[#0a1428]">{liveMatch.stats.expectedGoals.away} xG</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Lineups */}
            {activeTab === "lineup" && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#997328]">
                    Real Madrid Starting XI ({liveMatch.lineup.formation})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {liveMatch.lineup.startingXI.map((player) => (
                    <div
                      key={player.num}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#e2e8f0] shadow-xs"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#faf6ec] text-[#7a5813] font-black text-xs flex items-center justify-center shrink-0 border border-[#c5a059]/30">
                        {player.num}
                      </span>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-[#0a1428] truncate">
                          {player.name}
                        </div>
                        <div className="text-[10px] text-[#64748b] uppercase">
                          {player.pos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#faf6ec] border border-[#c5a059]/30 text-xs text-[#475569]">
                  <strong className="text-[#7a5813]">Substitutes Bench: </strong>
                  {liveMatch.lineup.bench.join(", ")}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Two Columns: Upcoming Fixtures & Recent Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Upcoming Fixtures */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-xl font-bold text-[#0a1428] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#c5a059]" />
                Upcoming Matches
              </h3>
              <span className="text-xs text-[#64748b] font-semibold">2024/25 Season</span>
            </div>

            <div className="space-y-3">
              {upcomingFixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="p-4 rounded-2xl bg-white border border-[#c5a059]/25 hover:border-[#c5a059]/60 transition shadow-xs flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-[#997328]">
                      <span>{fixture.badge}</span>
                      <span>{fixture.competition}</span>
                    </div>
                    <div className="text-sm font-bold text-[#0a1428] flex items-center gap-2">
                      <span>{fixture.homeTeam.name}</span>
                      <span className="text-[#94a3b8] font-light">vs</span>
                      <span>{fixture.awayTeam.name}</span>
                    </div>
                    <div className="text-xs text-[#64748b]">
                      {fixture.venue}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-[#0a1428]">{fixture.date}</div>
                    <div className="text-[11px] text-[#7a5813] font-semibold">{fixture.time}</div>
                    <button className="mt-1.5 px-3 py-1 rounded-lg bg-[#faf6ec] hover:bg-[#faecd0] text-[#7a5813] border border-[#c5a059]/30 text-xs font-bold transition">
                      Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-royal text-xl font-bold text-[#0a1428] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#c5a059]" />
                Latest Results
              </h3>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Victory Streak
              </span>
            </div>

            <div className="space-y-3">
              {recentResults.map((result) => (
                <div
                  key={result.id}
                  className="p-4 rounded-2xl bg-white border border-[#e2e8f0] hover:border-[#c5a059]/40 transition shadow-xs space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span className="font-bold text-[#997328]">{result.competition}</span>
                    <span>{result.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-[#0a1428]">
                      {result.homeTeam.name}
                    </span>
                    <div className="px-3.5 py-1 rounded-xl bg-[#faf6ec] text-[#7a5813] font-black text-sm border border-[#c5a059]/30">
                      {result.homeTeam.score} - {result.awayTeam.score}
                    </div>
                    <span className="font-bold text-sm text-[#475569]">
                      {result.awayTeam.name}
                    </span>
                  </div>

                  <div className="text-xs text-[#64748b] pt-1.5 border-t border-[#f1f5f9] flex items-center justify-between">
                    <span className="italic">{result.scorers}</span>
                    <span className="text-emerald-700 font-bold text-[11px]">FT</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
