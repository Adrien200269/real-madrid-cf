"use client";

import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { matchCenterData } from "@/data/matches";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function MatchTicker() {
  const { t } = useThemeLanguage();
  const match = matchCenterData.featuredMatch || matchCenterData.recentResults[0];
  const nextFixture = matchCenterData.upcomingFixtures[0];

  return (
    <div className="bg-white dark:bg-[#0E1626] border-b border-[#E1E5EA] dark:border-[#1E2B45] py-2 px-4 text-xs font-medium text-[#43526E] dark:text-slate-300 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Latest Result */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-bold text-[11px] border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            {t("latestFT")}
          </span>
          <span className="text-[#0F2145] dark:text-white font-bold flex items-center gap-1.5">
            <span>{match.homeTeam.name}</span>
            <span className="text-[#3E31FA] dark:text-[#8FA0F5] font-black bg-[#EEF2FD] dark:bg-[#1B294B] px-2 py-0.5 rounded text-xs">
              {match.homeTeam.score} - {match.awayTeam.score}
            </span>
            <span>{match.awayTeam.name}</span>
          </span>
          {match.scorers && match.scorers.length > 0 && (
            <span className="hidden sm:inline text-[#788398] dark:text-slate-400">
              • {match.scorers.map(s => `${s.player} (${s.minute})`).join(', ')}
            </span>
          )}
        </div>

        {/* Next Match */}
        {nextFixture && (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-[#788398] dark:text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-[#3E31FA] dark:text-[#8FA0F5]" />
              <span>
                {t("nextMatch")} <strong className="text-[#0F2145] dark:text-white">{nextFixture.homeTeam.name} vs {nextFixture.awayTeam.name}</strong> ({nextFixture.date.split(',')[1]?.trim() || nextFixture.date} · {nextFixture.competition.split('·')[0].trim()})
              </span>
            </div>
            <Link
              href="/matches"
              className="flex items-center gap-1 text-[#3E31FA] dark:text-[#8FA0F5] hover:text-[#2115AB] dark:hover:text-white font-bold group ml-auto transition-colors"
            >
              {t("matchCenter")}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
