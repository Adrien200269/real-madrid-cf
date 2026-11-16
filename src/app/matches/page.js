import InteractiveMatchCenter from "@/components/InteractiveMatchCenter";
import StandingsSection from "@/components/StandingsSection";
import { Radio } from "lucide-react";

export const metadata = {
  title: "Matches, Live Center & Table | Real Madrid C.F.",
  description: "Real Madrid live match center, fixtures, recent results, and official La Liga standings."
};

export default function MatchesPage() {
  return (
    <div className="pt-8 pb-16 space-y-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#faf8f5] via-white to-[#faf6ec] border border-[#c5a059]/40 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-widest mb-3">
            <Radio className="w-4 h-4 text-red-600 animate-pulse" />
            Official Match Center & Schedule
          </div>
          <h1 className="font-royal text-3xl sm:text-5xl font-black text-[#0a1428]">
            MATCHES & <span className="gold-gradient-text">LEAGUE STANDINGS</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Follow Real Madrid across all competitions: UEFA Champions League, La Liga EA Sports, Copa del Rey, and FIFA Club World Cup.
          </p>
        </div>
      </div>

      <InteractiveMatchCenter />
      <StandingsSection />
    </div>
  );
}
