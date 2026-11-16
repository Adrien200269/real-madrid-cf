import TrophyRoom from "@/components/TrophyRoom";
import { Trophy } from "lucide-react";

export const metadata = {
  title: "Trophies & Honors | Real Madrid CF",
  description: "Official palmarés of Real Madrid with 15 European Cups, 36 LaLiga titles and club history."
};

export default function TrophiesPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rm-card p-6 sm:p-8 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-[#8760F6] uppercase tracking-wider mb-2">
            <Trophy className="w-4 h-4" />
            The Club · Honors & History
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2145]">
            Palmarés & 15 European Cups
          </h1>
          <p className="text-[#788398] text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            From the inaugural European Cup in Paris in 1956 to La Decimoquinta at Wembley in 2024. Explore all 15 final triumphs and historic milestones.
          </p>
        </div>
      </div>

      <TrophyRoom />
    </div>
  );
}
