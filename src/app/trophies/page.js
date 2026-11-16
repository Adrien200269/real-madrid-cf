import TrophyRoom from "@/components/TrophyRoom";
import { Trophy, Award } from "lucide-react";

export const metadata = {
  title: "Trophy Room & Club History | Real Madrid C.F.",
  description: "Explore Real Madrid's 15 European Cups, 36 La Liga titles, and 122 years of football dynasty."
};

export default function TrophiesPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#172347] via-[#091124] to-[#1a2852] border border-amber-400/40">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Trophy className="w-4 h-4" />
            Hall of Glory
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            THE RECORD <span className="gold-gradient-text">15 EUROPEAN CUPS</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            From the opening European Cup in Paris in 1956 to La Decimoquinta at Wembley in 2024. Relive every final, opponent, and historic scoreline.
          </p>
        </div>
      </div>

      <TrophyRoom />
    </div>
  );
}
