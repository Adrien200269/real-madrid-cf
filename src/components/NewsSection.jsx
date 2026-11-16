"use client";

import { useState } from "react";
import { newsData } from "@/data/news";
import { Newspaper, Clock, ArrowRight, Tag, Sparkles } from "lucide-react";

export default function NewsSection({ initialLimit = null }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "First Team", "Club", "Training", "Milestones", "Academy & Youth"];

  const filteredNews = newsData.filter((item) =>
    selectedCategory === "all" ? true : item.category === selectedCategory
  );

  const displayedNews = initialLimit ? filteredNews.slice(0, initialLimit) : filteredNews;

  return (
    <section className="py-16 lg:py-24 bg-[#060a17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Newspaper className="w-3.5 h-3.5" />
            Official Club Dispatches
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            LATEST <span className="gold-gradient-text">MADRIDISTA NEWS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Stay up to date with match reactions, tactical reports, Santiago Bernabéu upgrades, and official statements.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20"
                  : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat === "all" ? "All Updates" : cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedNews.map((news) => (
            <article
              key={news.id}
              className="rounded-2xl bg-[#0b152d] border border-white/10 hover:border-amber-400/40 transition overflow-hidden flex flex-col justify-between group shadow-lg"
            >
              {/* Image banner area */}
              <div className="relative h-48 w-full bg-gradient-to-tr from-[#132857] to-[#0b152d] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b152d] via-transparent to-transparent z-10" />
                <div className="text-5xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                  ⚽
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-2.5 py-1 rounded-md bg-amber-400/90 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500">{news.author}</span>
                  <span className="text-amber-400 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
