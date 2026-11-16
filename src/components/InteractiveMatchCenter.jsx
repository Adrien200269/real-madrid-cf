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
  MapPin,
  ChevronRight
} from "lucide-react";

export default function InteractiveMatchCenter() {
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" | "stats" | "lineup"
  const { liveMatch, upcomingFixtures, recentResults } = matchCenterData;

  return (
    <section className="py-14 lg:py-20 bg-[#F3F5F8] text-[#0F2145] border-b border-[#E1E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-red-600" />
              Live Match Center
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145]">
              Próximos Eventos & Live Score
            </h2>
            <p className="text-[#788398] text-xs sm:text-sm mt-1">
              Football · First Team · Male · Real Madrid C.F.
            </p>
          </div>

          {/* Quick tab filters */}
          <div className="flex items-center gap-2">
            <span className="px-3 py-1.5 rounded-full bg-white border border-[#E1E5EA] text-[#43526E] text-xs font-semibold shadow-2xs">
              All Competitions (3)
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#EEF2FD] text-[#3E31FA] text-xs font-bold border border-[#DEE5FD]">
              UCL & LaLiga
            </span>
          </div>
        </div>

        {/* Live Match Hero Board - Official Dual Block Card Architecture */}
        <div className="rm-card overflow-hidden mb-12 border-[#E1E5EA]">
          
          {/* Top Block: Deep Navy Container (#0F2145) */}
          <div className="bg-[#0F2145] p-6 sm:p-8 text-white relative">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-[#3E31FA] text-white font-bold text-[11px] uppercase tracking-wider">
                  {liveMatch.competition}
                </span>
                <span className="text-slate-300 font-medium">{liveMatch.stage}</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8FA0F5]" />
                  {liveMatch.venue}
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="hidden sm:inline font-semibold">Att: {liveMatch.attendance}</span>
              </div>
            </div>

            {/* Scoreboard */}
            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Home Team */}
              <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-4 text-center md:text-right">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {liveMatch.homeTeam.name}
                  </h3>
                  <p className="text-xs text-[#8FA0F5] font-semibold uppercase tracking-wider">
                    First Team · Male
                  </p>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center p-2.5 shadow-inner">
                  <img
                    src={liveMatch.homeTeam.logo}
                    alt={liveMatch.homeTeam.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Score in Center */}
              <div className="md:col-span-2 text-center space-y-2">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {liveMatch.homeTeam.score}
                  </span>
                  <span className="text-xl text-slate-500 font-light">-</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-300">
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
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center p-2.5 shadow-inner">
                  <img
                    src={liveMatch.awayTeam.logo}
                    alt={liveMatch.awayTeam.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {liveMatch.awayTeam.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Bundesliga Contender
                  </p>
                </div>
              </div>
            </div>

            {/* Scorers ticker */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300">
              {liveMatch.scorers.map((s, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#8FA0F5] font-black">{s.minute}</span>
                  <span className="font-semibold text-white">{s.player}</span>
                  <span className="text-slate-400 text-[11px]">({s.team})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Block: Pure White Container with Interactive Tabs */}
          <div className="bg-white p-6 sm:p-8">
            <div className="flex items-center justify-center gap-2 mb-6 border-b border-[#E1E5EA] pb-4">
              <button
                onClick={() => setActiveTab("timeline")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "timeline"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] text-[#43526E] hover:text-[#0F2145]"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Live Timeline
              </button>

              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "stats"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] text-[#43526E] hover:text-[#0F2145]"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                Match Statistics
              </button>

              <button
                onClick={() => setActiveTab("lineup")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "lineup"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] text-[#43526E] hover:text-[#0F2145]"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                Tactical Lineup
              </button>
            </div>

            {/* Tab 1: Live Timeline */}
            {activeTab === "timeline" && (
              <div className="space-y-3 max-w-2xl mx-auto">
                {liveMatch.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] hover:border-[#3E31FA]/40 transition"
                  >
                    <span className="px-2.5 py-0.5 rounded bg-[#EEF2FD] text-[#3E31FA] font-bold text-xs shrink-0">
                      {event.min}
                    </span>
                    <p className="text-xs text-[#0F2145] leading-relaxed font-medium">
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Match Stats */}
            {activeTab === "stats" && (
              <div className="space-y-4 max-w-xl mx-auto bg-[#F8F9FA] p-6 rounded-2xl border border-[#E1E5EA]">
                {/* Possession */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#3E31FA]">Real Madrid ({liveMatch.stats.possession.home}%)</span>
                    <span className="text-[#788398]">Possession</span>
                    <span className="text-[#0F2145]">{liveMatch.stats.possession.away}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EDEFF2] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#3E31FA] h-full"
                      style={{ width: `${liveMatch.stats.possession.home}%` }}
                    />
                    <div
                      className="bg-[#0F2145] h-full"
                      style={{ width: `${liveMatch.stats.possession.away}%` }}
                    />
                  </div>
                </div>

                {/* Shots on Target */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#3E31FA]">{liveMatch.stats.shotsOnTarget.home}</span>
                    <span className="text-[#788398]">Shots on Target</span>
                    <span className="text-[#0F2145]">{liveMatch.stats.shotsOnTarget.away}</span>
                  </div>
                  <div className="w-full h-2 bg-[#EDEFF2] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#3E31FA] h-full"
                      style={{ width: `${(liveMatch.stats.shotsOnTarget.home / (liveMatch.stats.shotsOnTarget.home + liveMatch.stats.shotsOnTarget.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* xG */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#3E31FA]">{liveMatch.stats.expectedGoals.home} xG</span>
                    <span className="text-[#788398]">Expected Goals</span>
                    <span className="text-[#0F2145]">{liveMatch.stats.expectedGoals.away} xG</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Lineup */}
            {activeTab === "lineup" && (
              <div className="max-w-3xl mx-auto space-y-5">
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA]">
                    Real Madrid Formation ({liveMatch.lineup.formation})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {liveMatch.lineup.startingXI.map((player) => (
                    <div
                      key={player.num}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#EEF2FD] text-[#3E31FA] font-bold text-xs flex items-center justify-center shrink-0">
                        {player.num}
                      </span>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-[#0F2145] truncate">
                          {player.name}
                        </div>
                        <div className="text-[10px] text-[#788398] uppercase">
                          {player.pos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA] text-xs text-[#43526E]">
                  <strong className="text-[#0F2145]">Bench: </strong>
                  {liveMatch.lineup.bench.join(", ")}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Dual Columns: Próximos Eventos (Upcoming Fixtures) & Recent Results */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Upcoming Fixtures */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-[#0F2145] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#3E31FA]" />
                Próximos Partidos
              </h3>
              <span className="text-xs text-[#788398] font-semibold">2024–25 Season</span>
            </div>

            <div className="space-y-3">
              {upcomingFixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="rm-card overflow-hidden"
                >
                  {/* Top block */}
                  <div className="bg-[#0F2145] px-4 py-2.5 flex items-center justify-between text-xs text-white">
                    <span className="font-bold">{fixture.competition}</span>
                    <span className="text-slate-300">{fixture.date} • {fixture.time}</span>
                  </div>

                  {/* Bottom details block */}
                  <div className="p-4 flex items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="text-sm font-bold text-[#0F2145] flex items-center gap-2 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          {fixture.homeTeam.logo && (
                            <img
                              src={fixture.homeTeam.logo}
                              alt={fixture.homeTeam.name}
                              className="w-5 h-5 object-contain shrink-0"
                            />
                          )}
                          <span>{fixture.homeTeam.name}</span>
                        </div>
                        <span className="text-[#C7CCD6] font-normal text-xs">vs</span>
                        <div className="flex items-center gap-1.5">
                          {fixture.awayTeam.logo && (
                            <img
                              src={fixture.awayTeam.logo}
                              alt={fixture.awayTeam.name}
                              className="w-5 h-5 object-contain shrink-0"
                            />
                          )}
                          <span>{fixture.awayTeam.name}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#788398]">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{fixture.venue}</span>
                      </div>
                    </div>

                    <button className="px-4 py-1.5 rounded-full bg-[#3E31FA] hover:bg-[#2115AB] text-white text-xs font-bold transition shadow-xs shrink-0">
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
              <h3 className="text-xl font-extrabold text-[#0F2145] flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#8760F6]" />
                Recent Results
              </h3>
              <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Winning Streak
              </span>
            </div>

            <div className="space-y-3">
              {recentResults.map((result) => (
                <div
                  key={result.id}
                  className="rm-card p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs text-[#788398]">
                    <span className="font-bold text-[#3E31FA]">{result.competition}</span>
                    <span>{result.date}</span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      {result.homeTeam.logo && (
                        <img
                          src={result.homeTeam.logo}
                          alt={result.homeTeam.name}
                          className="w-5 h-5 object-contain shrink-0"
                        />
                      )}
                      <span className="font-bold text-sm text-[#0F2145] truncate">
                        {result.homeTeam.name}
                      </span>
                    </div>
                    <div className="px-3.5 py-1 rounded-lg bg-[#EEF2FD] text-[#3E31FA] font-black text-sm shrink-0">
                      {result.homeTeam.score} - {result.awayTeam.score}
                    </div>
                    <div className="flex items-center gap-2 min-w-0 justify-end">
                      <span className="font-bold text-sm text-[#43526E] truncate">
                        {result.awayTeam.name}
                      </span>
                      {result.awayTeam.logo && (
                        <img
                          src={result.awayTeam.logo}
                          alt={result.awayTeam.name}
                          className="w-5 h-5 object-contain shrink-0"
                        />
                      )}
                    </div>
                  </div>

                  <div className="text-xs text-[#788398] pt-2 border-t border-[#E1E5EA] flex items-center justify-between">
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
