"use client";

import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { matchCenterData } from "@/data/matches";

export default function MatchTicker() {
  const match = matchCenterData.featuredMatch || matchCenterData.recentResults[0];
  const nextFixture = matchCenterData.upcomingFixtures[0];

  return (
    <div className="bg-white border-b border-[#E1E5EA] py-2 px-4 text-xs font-medium text-[#43526E]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Latest Result */}
        <div className="flex items-center gap-2.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            LATEST · FT
          </span>
          <span className="text-[#0F2145] font-bold flex items-center gap-1.5">
            <span>{match.homeTeam.name}</span>
            <span className="text-[#3E31FA] font-black bg-[#EEF2FD] px-2 py-0.5 rounded text-xs">
              {match.homeTeam.score} - {match.awayTeam.score}
            </span>
            <span>{match.awayTeam.name}</span>
          </span>
          <span className="hidden sm:inline text-[#788398]">
            • Mbappé (23&apos;, 68&apos;), Bellingham (54&apos;)
          </span>
        </div>

        {/* Next Match */}
        {nextFixture && (
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-[#788398]">
              <Calendar className="w-3.5 h-3.5 text-[#3E31FA]" />
              <span>
                Next: <strong className="text-[#0F2145]">{nextFixture.homeTeam.name} vs {nextFixture.awayTeam.name}</strong> ({nextFixture.date.split(',')[1]?.trim() || nextFixture.date} · {nextFixture.competition.split('·')[0].trim()})
              </span>
            </div>
            <Link
              href="/matches"
              className="flex items-center gap-1 text-[#3E31FA] hover:text-[#2115AB] font-bold group ml-auto transition-colors"
            >
              Match Center
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
