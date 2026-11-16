"use client";

import { useState } from "react";
import { newsData } from "@/data/news";
import { Newspaper, Clock, ArrowRight } from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function NewsSection({ initialLimit = null }) {
  const { t, language } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "First Team", "Club", "Training", "Milestones", "Academy & Youth"];

  const filteredNews = newsData.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const displayedNews = initialLimit ? filteredNews.slice(0, initialLimit) : filteredNews;

  return (
    <section className="py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA] dark:text-[#8FA0F5]">
              {t("newsTag")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] dark:text-white mt-1">
              {t("newsHeading")}
            </h2>
            <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm mt-1">
              {t("newsSub")}
            </p>
          </div>

          {/* Category Filter Pills - Mobile scrollable */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:flex-wrap no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-white dark:bg-[#111A2E] text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white border border-[#E1E5EA] dark:border-[#1E2B45]"
                }`}
              >
                {cat === "all" ? (language === "es" ? "Todas" : "All News") : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedNews.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs overflow-hidden group flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0F2145]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#788398] dark:text-slate-400">
                    <Clock className="w-3 h-3 text-[#3E31FA] dark:text-[#8FA0F5]" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2145] dark:text-white group-hover:text-[#3E31FA] dark:group-hover:text-[#8FA0F5] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#43526E] dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5] group-hover:translate-x-1 transition-transform">
                  {t("readArticle")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
