import NewsSection from "@/components/NewsSection";
import { Newspaper } from "lucide-react";

export const metadata = {
  title: "Latest News & Media | Real Madrid CF",
  description: "Official news, training updates, match reports and press conferences of Real Madrid."
};

export default function NewsPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3F5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="rm-card p-6 sm:p-8 bg-white">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3E31FA] uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            Communications & Media
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2145]">
            Últimas Noticias & Prensa
          </h1>
          <p className="text-[#788398] text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Interviews with the squad, Santiago Bernabéu upgrades, matchday tactical analysis and official club press releases.
          </p>
        </div>
      </div>

      <NewsSection />
    </div>
  );
}
