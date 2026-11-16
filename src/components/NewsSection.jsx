"use client";

import { useState } from "react";
import { newsData } from "@/data/news";
import { Newspaper, Clock, ArrowRight } from "lucide-react";

export default function NewsSection({ initialLimit = null }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "First Team", "Club", "Training", "Milestones", "Academy & Youth"];

  const filteredNews = newsData.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const displayedNews = initialLimit ? filteredNews.slice(0, initialLimit) : filteredNews;

  return (
    <section className="py-14 lg:py-20 bg-[#F3F5F8] text-[#0F2145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA]">
              Media & Communications
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] mt-1">
              Últimas Noticias
            </h2>
            <p className="text-[#788398] text-xs sm:text-sm mt-1">
              Official match reports, training analysis, and club announcements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#3E31FA] text-white shadow-xs"
                    : "bg-white text-[#43526E] hover:text-[#0F2145] border border-[#E1E5EA]"
                }`}
              >
                {cat === "all" ? "All News" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedNews.map((news) => (
            <article
              key={news.id}
              className="rm-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Media banner area */}
              <div className="relative h-48 w-full bg-gradient-to-tr from-[#EEF2FD] to-[#EDEBFA] overflow-hidden flex items-center justify-center border-b border-[#E1E5EA]">
                <div className="text-5xl opacity-40 group-hover:scale-105 transition-transform duration-500">
                  ⚽
                </div>
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E1E5EA] text-[#3E31FA] font-bold text-[10px] uppercase tracking-wider shadow-2xs">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#788398]">
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#3E31FA]" />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F2145] group-hover:text-[#3E31FA] transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-[#43526E] leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E1E5EA] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#788398]">{news.author}</span>
                  <span className="text-[#3E31FA] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
