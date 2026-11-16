import SquadSection from "@/components/SquadSection";
import { Users } from "lucide-react";

export const metadata = {
  title: "First Team Players | Real Madrid CF",
  description: "Official squad of Real Madrid First Team with player profiles, stats, bio and photos."
};

export default function SquadPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rm-card p-6 sm:p-8 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3E31FA] uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            Football · First Team
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2145]">
            Plantilla Primer Equipo
          </h1>
          <p className="text-[#788398] text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Official roster of Real Madrid Club de Fútbol 2026–27. Browse by position, check career statistics, personal details and honours.
          </p>
        </div>
      </div>

      <SquadSection />
    </div>
  );
}
