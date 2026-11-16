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
    <section className="py-16 lg:py-24 bg-white text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Newspaper className="w-3.5 h-3.5 text-[#c5a059]" />
            Official Club Dispatches
          </div>
          <h2 className="font-royal text-3xl sm:text-5xl font-black tracking-tight text-[#0a1428]">
            LATEST <span className="gold-gradient-text">MADRIDISTA NEWS</span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base">
            Stay up to date with match reactions, tactical reports, Santiago Bernabéu upgrades, and official statements.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#faf6ec] text-[#7a5813] border border-[#c5a059]/60 shadow-xs"
                  : "bg-white text-[#64748b] hover:text-[#0a1428] border border-[#e2e8f0]"
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
              className="rounded-3xl bg-white border border-[#c5a059]/25 hover:border-[#c5a059] transition overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              {/* Image banner area */}
              <div className="relative h-48 w-full bg-gradient-to-tr from-[#faf6ec] via-[#f8f9fa] to-white overflow-hidden flex items-center justify-center border-b border-[#e2e8f0]">
                <div className="text-5xl opacity-40 group-hover:scale-110 transition-transform duration-500">
                  👑
                </div>
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-md bg-white border border-[#c5a059]/40 text-[#7a5813] font-bold text-[10px] uppercase tracking-wider shadow-xs">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#64748b]">
                    <span>{news.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3 h-3 text-[#c5a059]" />
                      {news.readTime}
                    </span>
                  </div>

                  <h3 className="font-royal text-base sm:text-lg font-bold text-[#0a1428] group-hover:text-[#997328] transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#f1f5f9] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#64748b]">{news.author}</span>
                  <span className="text-[#997328] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Story <ArrowRight className="w-3.5 h-3.5 text-[#c5a059]" />
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
