import SquadSection from "@/components/SquadSection";
import { Users } from "lucide-react";

export const metadata = {
  title: "First Team Players | Real Madrid CF",
  description: "Official squad of Real Madrid First Team with player profiles, stats, bio and photos."
};

export default function SquadPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3F5F8] dark:bg-[#090E1A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5] uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            Football · First Team
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2145] dark:text-white">
            Plantilla Primer Equipo
          </h1>
          <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Official roster of Real Madrid Club de Fútbol 2026–27. Browse by position, check career statistics, personal details and honours.
          </p>
        </div>
      </div>

      <SquadSection />
    </div>
  );
}
