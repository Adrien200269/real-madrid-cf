import SquadSection from "@/components/SquadSection";
import { Crown } from "lucide-react";

export const metadata = {
  title: "First Team Squad | Real Madrid C.F.",
  description: "Explore the complete Real Madrid first team squad including Kylian Mbappé, Vinícius Jr., Jude Bellingham, Luka Modrić and manager Carlo Ancelotti."
};

export default function SquadPage() {
  return (
    <div className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#faf8f5] via-white to-[#faf6ec] border border-[#c5a059]/40 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7a5813] uppercase tracking-widest mb-3">
            <Crown className="w-4 h-4 text-[#c5a059]" />
            Season 2024 / 2025 First Team
          </div>
          <h1 className="font-royal text-3xl sm:text-5xl font-black text-[#0a1428]">
            REAL MADRID <span className="gold-gradient-text">FIRST TEAM SQUAD</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            The world&apos;s most talented footballers united under one royal crest. Browse by position, check official career honours, match statistics, and quotes.
          </p>
        </div>
      </div>

      <SquadSection />
    </div>
  );
}
