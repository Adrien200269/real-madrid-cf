"use client";

import { useState } from "react";
import { matchCenterData } from "@/data/matches";
import { 
  Clock, 
  Calendar, 
  BarChart2, 
  Users, 
  Trophy, 
  Activity, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function InteractiveMatchCenter() {
  const { t, language } = useThemeLanguage();
  const [activeTab, setActiveTab] = useState("timeline"); // "timeline" | "stats" | "lineup"
  const { upcomingFixtures, recentResults } = matchCenterData;
  const match = matchCenterData.featuredMatch || matchCenterData.liveMatch;

  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-[#3E31FA] dark:text-[#8FA0F5]" />
              {t("matchCenterTag")}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] dark:text-white">
              {t("matchCenterHeading")}
            </h2>
            <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm mt-1">
              {t("matchCenterSub")}
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1.5 rounded-full bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] text-[#43526E] dark:text-slate-300 text-xs font-semibold shadow-2xs">
              {t("allCompetitions")}
            </span>
            <span className="px-3 py-1.5 rounded-full bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] text-xs font-bold border border-[#DEE5FD] dark:border-[#23356A]">
              {t("consecutiveWins")}
            </span>
          </div>
        </div>

        {/* Featured Match Board - Official Dual Block Card Architecture */}
        <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden mb-10 sm:mb-12">
          
          {/* Top Block: Deep Navy Container (#0F2145) */}
          <div className="bg-[#0F2145] dark:bg-[#0A1020] p-4 sm:p-6 md:p-8 text-white relative">
            <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 pb-4 sm:pb-5 border-b border-white/10 text-xs">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded bg-[#3E31FA] text-white font-bold text-[11px] uppercase tracking-wider">
                  {match.competition}
                </span>
                <span className="text-slate-300 font-medium">{match.stage}</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">{match.date}</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-slate-300 flex-wrap">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#8FA0F5]" />
                  {match.venue}
                </span>
                <span className="hidden sm:inline text-slate-500">•</span>
                <span className="hidden sm:inline font-semibold">Att: {match.attendance}</span>
              </div>
            </div>

            {/* Scoreboard */}
            <div className="py-4 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-center">
              {/* Home Team */}
              <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-3 sm:gap-4 text-center md:text-right">
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    {match.homeTeam.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    LaLiga Host
                  </p>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center p-2 shadow-inner shrink-0">
                  <img
                    src={match.homeTeam.logo}
                    alt={match.homeTeam.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Score in Center */}
              <div className="md:col-span-2 text-center space-y-2">
                <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-300">
                    {match.homeTeam.score}
                  </span>
                  <span className="text-lg sm:text-xl text-slate-500 font-light">-</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#8FA0F5]">
                    {match.awayTeam.score}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{match.status}</span>
                </div>
              </div>

              {/* Away Team */}
              <div className="md:col-span-5 flex items-center justify-center md:justify-start gap-3 sm:gap-4 text-center md:text-left">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 flex items-center justify-center p-2 shadow-inner shrink-0">
                  <img
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white">
                    {match.awayTeam.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#8FA0F5] font-semibold uppercase tracking-wider">
                    First Team · Real Madrid C.F.
                  </p>
                </div>
              </div>
            </div>

            {/* Scorers ticker */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1.5 text-xs text-slate-300">
              {match.scorers.map((s, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-[#8FA0F5] font-black">{s.minute}</span>
                  <span className="font-semibold text-white">{s.player}</span>
                  {s.assist && <span className="text-slate-400 text-[11px]">(ast. {s.assist})</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Block: Pure Container with Interactive Tabs */}
          <div className="bg-white dark:bg-[#111A2E] p-4 sm:p-6 md:p-8 transition-colors duration-200">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 border-b border-[#E1E5EA] dark:border-[#1E2B45] pb-4">
              <button
                onClick={() => setActiveTab("timeline")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "timeline"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] dark:bg-[#0E1626] text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                {t("timelineTab")}
              </button>

              <button
                onClick={() => setActiveTab("stats")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "stats"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] dark:bg-[#0E1626] text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white"
                }`}
              >
                <BarChart2 className="w-3.5 h-3.5" />
                {t("statsTab")}
              </button>

              <button
                onClick={() => setActiveTab("lineup")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === "lineup"
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-[#F3F5F8] dark:bg-[#0E1626] text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white"
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                {t("lineupTab")}
              </button>
            </div>

            {/* Tab 1: Match Timeline */}
            {activeTab === "timeline" && (
              <div className="space-y-3 max-w-2xl mx-auto">
                {match.timeline.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] hover:border-[#3E31FA]/40 transition"
                  >
                    <span className="px-2.5 py-0.5 rounded bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] font-bold text-xs shrink-0">
                      {event.min}
                    </span>
                    <p className="text-xs text-[#0F2145] dark:text-slate-200 leading-relaxed font-medium">
                      {event.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Match Stats */}
            {activeTab === "stats" && (
              <div className="space-y-4 max-w-xl mx-auto bg-[#F8F9FA] dark:bg-[#0E1626] p-4 sm:p-6 rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45]">
                {/* Possession */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#0F2145] dark:text-white">Valencia ({match.stats.possession.home}%)</span>
                    <span className="text-[#788398] dark:text-slate-400">{t("possession")}</span>
                    <span className="text-[#3E31FA] dark:text-[#8FA0F5]">Real Madrid ({match.stats.possession.away}%)</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#EDEFF2] dark:bg-[#1E2B45] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#788398] h-full"
                      style={{ width: `${match.stats.possession.home}%` }}
                    />
                    <div
                      className="bg-[#3E31FA] h-full"
                      style={{ width: `${match.stats.possession.away}%` }}
                    />
                  </div>
                </div>

                {/* Shots on Target */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#0F2145] dark:text-white">{match.stats.shotsOnTarget.home}</span>
                    <span className="text-[#788398] dark:text-slate-400">{t("shotsOnTarget")}</span>
                    <span className="text-[#3E31FA] dark:text-[#8FA0F5]">{match.stats.shotsOnTarget.away}</span>
                  </div>
                  <div className="w-full h-2 bg-[#EDEFF2] dark:bg-[#1E2B45] rounded-full overflow-hidden flex">
                    <div
                      className="bg-[#788398] h-full"
                      style={{ width: `${(match.stats.shotsOnTarget.home / (match.stats.shotsOnTarget.home + match.stats.shotsOnTarget.away)) * 100}%` }}
                    />
                    <div
                      className="bg-[#3E31FA] h-full"
                      style={{ width: `${(match.stats.shotsOnTarget.away / (match.stats.shotsOnTarget.home + match.stats.shotsOnTarget.away)) * 100}%` }}
                    />
                  </div>
                </div>

                {/* xG */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-[#0F2145] dark:text-white">{match.stats.expectedGoals.home} xG</span>
                    <span className="text-[#788398] dark:text-slate-400">{t("expectedGoals")}</span>
                    <span className="text-[#3E31FA] dark:text-[#8FA0F5]">{match.stats.expectedGoals.away} xG</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Lineup */}
            {activeTab === "lineup" && (
              <div className="max-w-3xl mx-auto space-y-5">
                <div className="text-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA] dark:text-[#8FA0F5]">
                    {t("startingXI")} ({match.lineup.formation})
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {match.lineup.startingXI.map((player) => (
                    <div
                      key={player.num}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]"
                    >
                      <span className="w-7 h-7 rounded-lg bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] font-bold text-xs flex items-center justify-center shrink-0">
                        {player.num}
                      </span>
                      <div className="overflow-hidden">
                        <div className="text-xs font-bold text-[#0F2145] dark:text-white truncate">
                          {player.name}
                        </div>
                        <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">
                          {player.pos}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45] text-xs text-[#43526E] dark:text-slate-300">
                  <strong className="text-[#0F2145] dark:text-white">{t("benchSubstitutes")}: </strong>
                  {match.lineup.bench.join(", ")}
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Dual Columns: Próximos Partidos (Upcoming Fixtures) & Recent Results */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Upcoming Fixtures */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-extrabold text-[#0F2145] dark:text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#3E31FA] dark:text-[#8FA0F5]" />
                {t("upcomingFixtures")}
              </h3>
              <span className="text-xs text-[#788398] dark:text-slate-400 font-semibold">Season 2026–27</span>
            </div>

            <div className="space-y-3">
              {upcomingFixtures.map((fixture) => (
                <div
                  key={fixture.id}
                  className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden"
                >
                  {/* Top block */}
                  <div className="bg-[#0F2145] dark:bg-[#0A1020] px-4 py-2.5 flex items-center justify-between text-xs text-white">
                    <span className="font-bold">{fixture.competition}</span>
                    <span className="text-slate-300">{fixture.date} • {fixture.time}</span>
                  </div>

                  {/* Bottom details block */}
                  <div className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#0F2145] dark:text-white">
                    <div className="space-y-1.5">
                      <div className="text-xs sm:text-sm font-bold text-[#0F2145] dark:text-white flex items-center gap-2 flex-wrap">
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
                        <span className="text-[#C7CCD6] dark:text-slate-500 font-normal text-xs">vs</span>
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
                      <div className="flex items-center gap-1.5 text-xs text-[#788398] dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{fixture.venue}</span>
                      </div>
                    </div>

                    <button className="px-4 py-1.5 rounded-full bg-[#3E31FA] hover:bg-[#2115AB] text-white text-xs font-bold transition shadow-xs shrink-0 self-start sm:self-auto">
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
              <h3 className="text-xl font-extrabold text-[#0F2145] dark:text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#8760F6] dark:text-[#A5B4FC]" />
                {t("recentResults")}
              </h3>
              <span className="text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                5-Game Win Streak
              </span>
            </div>

            <div className="space-y-3">
              {recentResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs p-3.5 sm:p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between text-xs text-[#788398] dark:text-slate-400">
                    <span className="font-bold text-[#3E31FA] dark:text-[#8FA0F5]">{result.competition}</span>
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
                      <span className="font-bold text-xs sm:text-sm text-[#0F2145] dark:text-white truncate">
                        {result.homeTeam.name}
                      </span>
                    </div>
                    <div className="px-3 sm:px-3.5 py-1 rounded-lg bg-[#EEF2FD] dark:bg-[#182544] text-[#3E31FA] dark:text-[#8FA0F5] font-black text-xs sm:text-sm shrink-0">
                      {result.homeTeam.score} - {result.awayTeam.score}
                    </div>
                    <div className="flex items-center gap-2 min-w-0 justify-end">
                      <span className="font-bold text-xs sm:text-sm text-[#43526E] dark:text-slate-200 truncate">
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

                  <div className="text-xs text-[#788398] dark:text-slate-400 pt-2 border-t border-[#E1E5EA] dark:border-[#1E2B45] flex items-center justify-between">
                    <span className="italic truncate">{result.scorers}</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold text-[11px] shrink-0">FT</span>
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
