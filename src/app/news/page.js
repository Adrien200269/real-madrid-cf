import NewsSection from "@/components/NewsSection";
import { Newspaper } from "lucide-react";

export const metadata = {
  title: "Latest News & Media | Real Madrid CF",
  description: "Official news, training updates, match reports and press conferences of Real Madrid."
};

export default function NewsPage() {
  return (
    <div className="pt-6 pb-16 bg-[#F3F5F8] dark:bg-[#090E1A] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5] uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            Communications & Media
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#0F2145] dark:text-white">
            Últimas Noticias & Prensa
          </h1>
          <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm max-w-2xl mt-1.5 leading-relaxed">
            Interviews with the squad, Santiago Bernabéu upgrades, matchday tactical analysis and official club press releases.
          </p>
        </div>
      </div>

      <NewsSection />
    </div>
  );
}
