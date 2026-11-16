"use client";

import { useState } from "react";
import { matchCenterData } from "@/data/matches";
import { 
  Radio, 
  Clock, 
  Calendar, 
  BarChart2, 
  ListChecks, 
  Users, 
  Trophy, 
  ChevronRight, 
  Activity,
  Flame,
  Shield
} from "lucide-react";

export default function InteractiveMatchCenter() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" | "stats" | "lineup"
  const { liveMatch, upcomingFixtures, recentResults } = matchCenterData;

  return (
    <section className="py-16 lg:py-24 bg-[#091124] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            Live Bernabéu Match Center
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            MATCHDAY <span className="gold-gradient-text">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Track live match statistics, tactical formations, upcoming tournament fixtures, and recent historic victories.
          </p>
        </div>

        {/* Live Match Hero Board */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#111f42] via-[#0c1630] to-[#080f21] border border-amber-400/30 p-6 sm:p-10 shadow-2xl mb-12 overflow-hidden">
          
          {/* Subtle field graphic background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full border-4 border-white" />
          </div>

          {/* Top Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 relative z-10 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-white/10 text-amber-300 font-bold">
                {liveMatch.competition}
              </span>
              <span className="text-slate-400">{liveMatch.stage}</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {liveMatch.venue}
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <span className="hidden sm:inline">Att: {liveMatch.attendance}</span>
            </div>
          </div>

          {/* Scoreboard */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
            {/* Home Team */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-4 text-center md:text-right">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {liveMatch.homeTeam.name}
                </h3>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Kings of Europe
                </p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-600 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/20">
                {liveMatch.homeTeam.logo}
              </div>
            </div>

            {/* Score in Center */}
            <div className="md:col-span-2 text-center space-y-2">
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-black/40 border border-white/15 backdrop-blur-md">
                <span className="text-4xl sm:text-5xl font-black text-amber-400">
                  {liveMatch.homeTeam.score}
                </span>
                <span className="text-2xl text-slate-500 font-light">-</span>
                <span className="text-4xl sm:text-5xl font-black text-white">
                  {liveMatch.awayTeam.score}
                </span>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-red-400">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>{liveMatch.status} • {liveMatch.minute}</span>
              </div>
            </div>

            {/* Away Team */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-start gap-4 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-3xl shadow-lg">
                {liveMatch.awayTeam.logo}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {liveMatch.awayTeam.name}
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Bundesliga Contender
                </p>
              </div>
            </div>
          </div>

          {/* Goal Scorers list */}
          <div className="pt-4 border-t border-white/10 relative z-10">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300">
              {liveMatch.scorers.map((s, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-amber-400 font-bold">{s.minute}</span>
                  <span className="font-semibold text-white">{s.player}</span>
                  <span className="text-slate-400 text-[11px]">({s.team})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Match Center Interactive Tabs */}
          <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab("timeline")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "timeline"
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-slate-300 hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Live Timeline
              </button>

              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "stats"
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-slate-300 hover:text-white"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                Match Statistics
              </button>

              <button
                onClick={() => setActiveTab("lineup")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "lineup"
                    ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-slate-300 hover:text-white"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                Lineup & Formation
              </button>
            </div>

            {/* Tab 1: Live Timeline */}
            {activeTab === "timeline" && (
              <div className="space-y-3 max-w-2xl mx-auto">
                {liveMatch.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition"
                  >
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-black text-xs shrink-0">
                      {event.min}
                    </span>
                    <p className="text-xs text-slate-200 leading-relaxed font-medium">
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Match Stats */}
            {activeTab === "stats" && (
              <div className="space-y-4 max-w-xl mx-auto">
                {/* Possession */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">Real Madrid ({liveMatch.stats.possession.home}%)</span>
                    <span className="text-slate-400">Possession</span>
                    <span className="text-slate-200">{liveMatch.stats.possession.away}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden flex">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-amber-500 h-full transition-all duration-500"
                      style={{ width: `${liveMatch.stats.possession.home}%` }}
                    />
                    <div
                      className="bg-yellow-500 h-full"
                      style={{ width: `${liveMatch.stats.possession.away}%` }}
                    />
                  </div>
                </div>

                {/* Total Shots */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">{liveMatch.stats.shots.home}</span>
                    <span className="text-slate-400">Total Shots</span>
                    <span className="text-slate-200">{liveMatch.stats.shots.away}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                    <div
                      className="bg-blue-500 h-full"
                      style={{ width: `${(liveMatch.stats.shots.home / (liveMatch.stats.shots.home + liveMatch.stats.shots.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Shots on Target */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">{liveMatch.stats.shotsOnTarget.home}</span>
                    <span className="text-slate-400">Shots on Target</span>
                    <span className="text-slate-200">{liveMatch.stats.shotsOnTarget.away}</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden flex">
                    <div
                      className="bg-amber-400 h-full"
                      style={{ width: `${(liveMatch.stats.shotsOnTarget.home / (liveMatch.stats.shotsOnTarget.home + liveMatch.stats.shotsOnTarget.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Expected Goals (xG) */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-amber-400">{liveMatch.stats.expectedGoals.home} xG</span>
                    <span className="text-slate-400">Expected Goals</span>
                    <span className="text-slate-200">{liveMatch.stats.expectedGoals.away} xG</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Lineups */}
            {activeTab === "lineup" && (
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Real Madrid Formation ({liveMatch.lineup.formation})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {liveMatch.lineup.startingXI.map((player) => (
                    <div
                      key={player.num}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="w-7 h-7 rounded-lg bg-amber-400/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0">
                        {player.num}
                      </span>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-white truncate">
                          {player.name}
                        </div>
                        <div className="text-[10px] text-slate-400 uppercase">
                          {player.pos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                  <strong className="text-amber-400">Bench: </strong>
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
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                Upcoming Matches
              </h3>
              <span className="text-xs text-slate-400 font-semibold">2024/25 Season</span>
            </div>

            <div className="space-y-3">
              {upcomingFixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="p-4 rounded-2xl bg-[#0b152d] border border-white/10 hover:border-amber-400/30 transition flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-amber-400">
                      <span>{fixture.badge}</span>
                      <span>{fixture.competition}</span>
                    </div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>{fixture.homeTeam.name}</span>
                      <span className="text-slate-500 font-light">vs</span>
                      <span>{fixture.awayTeam.name}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      {fixture.venue}
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs font-bold text-slate-200">{fixture.date}</div>
                    <div className="text-[11px] text-amber-400/90 font-semibold">{fixture.time}</div>
                    <button className="mt-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-slate-200 text-xs font-bold transition">
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
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Latest Results
              </h3>
              <span className="text-xs text-emerald-400 font-semibold">Victory Streak</span>
            </div>

            <div className="space-y-3">
              {recentResults.map((result) => (
                <div
                  key={result.id}
                  className="p-4 rounded-2xl bg-[#0b152d] border border-white/10 hover:border-white/20 transition space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-amber-300">{result.competition}</span>
                    <span>{result.date}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">
                      {result.homeTeam.name}
                    </span>
                    <div className="px-3 py-1 rounded-xl bg-white/10 text-amber-400 font-black text-base">
                      {result.homeTeam.score} - {result.awayTeam.score}
                    </div>
                    <span className="font-bold text-sm text-slate-300">
                      {result.awayTeam.name}
                    </span>
                  </div>

                  <div className="text-xs text-slate-400 pt-1 border-t border-white/5 flex items-center justify-between">
                    <span className="italic">{result.scorers}</span>
                    <span className="text-emerald-400 font-bold text-[11px]">FT</span>
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
