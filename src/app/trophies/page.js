import TrophyRoom from "@/components/TrophyRoom";
import { Trophy } from "lucide-react";

export const metadata = {
  title: "Trophy Room & Club History | Real Madrid C.F.",
  description: "Explore Real Madrid's 15 European Cups, 36 La Liga titles, and 122 years of royal football dynasty."
};

export default function TrophiesPage() {
  return (
    <div className="pt-8 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#faf8f5] via-white to-[#faf6ec] border border-[#c5a059]/40 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7a5813] uppercase tracking-widest mb-3">
            <Trophy className="w-4 h-4 text-[#c5a059]" />
            Hall of Glory
          </div>
          <h1 className="font-royal text-3xl sm:text-5xl font-black text-[#0a1428]">
            THE RECORD <span className="gold-gradient-text">15 EUROPEAN CUPS</span>
          </h1>
          <p className="text-[#475569] text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            From the opening European Cup in Paris in 1956 to La Decimoquinta at Wembley in 2024. Relive every final, opponent, and historic scoreline.
          </p>
        </div>
      </div>

      <TrophyRoom />
    </div>
  );
}
