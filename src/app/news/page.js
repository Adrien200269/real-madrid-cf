import NewsSection from "@/components/NewsSection";
import { Newspaper, Sparkles } from "lucide-react";

export const metadata = {
  title: "Latest News & Media | Real Madrid C.F.",
  description: "Official Real Madrid news, match previews, press conferences, and Valdebebas training reports."
};

export default function NewsPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#111f44] via-[#091124] to-[#12234c] border border-white/10">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">
            <Newspaper className="w-4 h-4" />
            Official Communications
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            CLUB NEWS & <span className="gold-gradient-text">MEDIA DISPATCHES</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-3 leading-relaxed">
            Interviews with the players, Bernabéu stadium developments, matchday analysis, and global Madridista reports.
          </p>
        </div>
      </div>

      <NewsSection />
    </div>
  );
}
