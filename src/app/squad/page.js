import SquadSection from "@/components/SquadSection";
import { Users, Sparkles } from "lucide-react";

export const metadata = {
  title: "First Team Squad | Real Madrid C.F.",
  description: "Explore the complete Real Madrid first team squad including Kylian Mbappé, Vinícius Jr., Jude Bellingham, Luka Modrić and manager Carlo Ancelotti."
};

export default function SquadPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111f44] via-[#0d1630] to-[#12234c] border border-amber-400/30">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            Season 2024 / 2025 Roster
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            REAL MADRID <span className="gold-gradient-text">FIRST TEAM SQUAD</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            The world&apos;s most talented footballers united under one royal crest. Browse by position, check career honors, match statistics, and player quotes.
          </p>
        </div>
      </div>

      <SquadSection />
    </div>
  );
}
