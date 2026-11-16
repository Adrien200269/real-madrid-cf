"use client";

import Link from "next/link";
import { Radio, ArrowRight, Calendar } from "lucide-react";

export default function MatchTicker() {
  return (
    <div className="bg-white border-b border-[#E1E5EA] py-2 px-4 text-xs font-medium text-[#43526E]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Live Match Info */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold text-[11px]">
            <Radio className="w-3 h-3 text-red-600 animate-pulse" />
            LIVE 78&apos;
          </span>
          <span className="text-[#0F2145] font-bold flex items-center gap-2">
            <span>Real Madrid</span>
            <span className="text-[#3E31FA] font-black bg-[#EEF2FD] px-2 py-0.5 rounded text-xs">
              3 - 1
            </span>
            <span>Borussia Dortmund</span>
          </span>
          <span className="hidden sm:inline text-[#788398]">
            • Mbappé 34&apos;, Vini Jr. 63&apos;, Bellingham 75&apos;
          </span>
        </div>

        {/* Next Match */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-[#788398]">
            <Calendar className="w-3.5 h-3.5 text-[#3E31FA]" />
            <span>Next: <strong className="text-[#0F2145]">Girona vs Real Madrid</strong> (Nov 24)</span>
          </div>
          <Link
            href="/matches"
            className="flex items-center gap-1 text-[#3E31FA] hover:text-[#2115AB] font-bold group ml-auto transition-colors"
          >
            Match Center
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
