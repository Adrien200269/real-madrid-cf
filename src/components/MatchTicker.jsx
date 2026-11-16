"use client";

import Link from "next/link";
import { Radio, ArrowRight, Flame } from "lucide-react";

export default function MatchTicker() {
  return (
    <div className="bg-[#faf8f5] border-b border-[#c5a059]/25 py-2 px-4 text-xs font-medium text-[#475569]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left item: live match */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 font-bold border border-red-200">
            <Radio className="w-3 h-3 text-red-600 animate-pulse" />
            LIVE 78&apos;
          </span>
          <span className="text-[#0a1428] font-bold flex items-center gap-2">
            <span>👑 Real Madrid</span>
            <span className="text-[#997328] font-black text-xs bg-white border border-[#c5a059]/30 px-2 py-0.5 rounded-md shadow-xs">
              3 - 1
            </span>
            <span>Borussia Dortmund 🟡</span>
          </span>
          <span className="hidden sm:inline text-[#64748b]">
            • Mbappé 34&apos;, Vini Jr. 63&apos;, Bellingham 75&apos;
          </span>
        </div>

        {/* Center / Right item: Next fixture */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-[#64748b]">
            <Flame className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Next: <strong className="text-[#0a1428]">Girona vs Real Madrid</strong> (Nov 24)</span>
          </div>
          <Link
            href="/matches"
            className="flex items-center gap-1 text-[#997328] hover:text-[#7a5813] font-bold group ml-auto transition-colors"
          >
            Match Center
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
