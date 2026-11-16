"use client";

import Link from "next/link";
import { Radio, ArrowRight, Trophy, Flame } from "lucide-react";

export default function MatchTicker() {
  return (
    <div className="bg-gradient-to-r from-[#0d1b3e] via-[#091228] to-[#121f42] border-b border-amber-500/20 py-2.5 px-4 text-xs font-medium text-slate-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left item: live match */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 font-bold border border-red-500/30">
            <Radio className="w-3 h-3 text-red-500 animate-pulse" />
            LIVE 78&apos;
          </span>
          <span className="text-white font-semibold flex items-center gap-2">
            <span>👑 Real Madrid</span>
            <span className="text-amber-400 font-bold text-sm bg-white/5 px-2 py-0.5 rounded">3 - 1</span>
            <span>Borussia Dortmund 🟡</span>
          </span>
          <span className="hidden sm:inline text-slate-400">
            • Mbappé 34&apos;, Vini Jr. 63&apos;, Bellingham 75&apos;
          </span>
        </div>

        {/* Center / Right item: Next fixture */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-400">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Next: <strong className="text-slate-200">Girona vs Real Madrid</strong> (Nov 24)</span>
          </div>
          <Link
            href="/matches"
            className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold group ml-auto"
          >
            Match Center
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
