"use client";

import { useState } from "react";
import { trophiesData } from "@/data/trophies";
import { Trophy, History, Award, Sparkles, Search, Crown } from "lucide-react";

export default function TrophyRoom() {
  const { summary, championsLeagues, eras } = trophiesData;
  const [selectedUcl, setSelectedUcl] = useState(championsLeagues[0]);
  const [uclFilterYear, setUclFilterYear] = useState("");

  const filteredUcl = championsLeagues.filter((c) =>
    !uclFilterYear ? true : c.year.includes(uclFilterYear) || c.opponent.toLowerCase().includes(uclFilterYear.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-24 bg-[#faf9f6] text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-[#c5a059]" />
            Hall of Glory • 122 Years of Supremacy
          </div>
          <h2 className="font-royal text-3xl sm:text-5xl font-black tracking-tight text-[#0a1428]">
            THE ROYAL <span className="gold-gradient-text">TROPHY CABINET</span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base">
            No sports institution in history rivals Real Madrid&apos;s palmarès. Explore all 15 European Cups, 36 domestic crowns, and the legendary eras of our dynasty.
          </p>
        </div>

        {/* Trophies Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 hover:border-[#c5a059] transition group text-center space-y-2 shadow-xs hover:shadow-md"
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="font-royal text-3xl sm:text-4xl font-black text-[#7a5813] group-hover:scale-110 transition-transform">
                {item.count}
              </div>
              <div className="text-xs font-bold text-[#0a1428] line-clamp-1">
                {item.name}
              </div>
              <div className="text-[10px] text-[#64748b]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Showcase: The 15 European Cups */}
        <div className="rounded-3xl bg-white border border-[#c5a059]/35 p-6 sm:p-10 shadow-lg mb-16">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#e2e8f0]">
            <div>
              <span className="text-xs font-bold text-[#997328] uppercase tracking-widest flex items-center gap-1.5">
                <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
                Kings of Europe
              </span>
              <h3 className="font-royal text-2xl sm:text-3xl font-black text-[#0a1428] mt-1">
                The 15 UEFA Champions League Triumphs
              </h3>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search year or opponent..."
                value={uclFilterYear}
                onChange={(e) => setUclFilterYear(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-[#faf8f5] border border-[#e2e8f0] focus:border-[#c5a059] rounded-xl text-xs text-[#0a1428] placeholder-[#94a3b8] focus:outline-none transition shadow-xs"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 pt-8 items-start">
            
            {/* Scrollable list of 15 titles */}
            <div className="lg:col-span-5 space-y-2.5 max-h-[500px] overflow-y-auto pr-2">
              {filteredUcl.map((c) => (
                <div
                  key={c.edition}
                  onClick={() => setSelectedUcl(c)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition flex items-center justify-between ${
                    selectedUcl?.edition === c.edition
                      ? "bg-[#faf6ec] border-[#c5a059] shadow-xs"
                      : "bg-[#faf8f5] border-[#e2e8f0] hover:border-[#c5a059]/40 text-[#475569]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-white border border-[#c5a059]/40 text-[#7a5813] font-royal font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      #{c.edition}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#0a1428]">
                        {c.year} vs {c.opponent}
                      </div>
                      <div className="text-[11px] text-[#64748b]">
                        {c.venue}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-royal text-xs font-black text-[#7a5813] px-2.5 py-1 rounded-lg bg-white border border-[#c5a059]/30">
                      {c.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Spotlight of Selected Final */}
            {selectedUcl && (
              <div className="lg:col-span-7 rounded-3xl bg-[#faf9f6] border border-[#c5a059]/40 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-royal text-3xl font-black text-[#7a5813]">
                      ★ {selectedUcl.year}
                    </span>
                    <span className="text-xs uppercase font-bold px-2.5 py-0.5 rounded-md bg-white border border-[#e2e8f0] text-[#0a1428]">
                      Edition #{selectedUcl.edition}
                    </span>
                  </div>
                  <div className="font-royal text-2xl font-black text-[#7a5813] px-4 py-1 rounded-xl bg-white border border-[#c5a059]/40 shadow-xs">
                    {selectedUcl.score}
                  </div>
                </div>

                <div>
                  <h4 className="font-royal text-xl font-black text-[#0a1428]">
                    Real Madrid vs {selectedUcl.opponent}
                  </h4>
                  <p className="text-xs text-[#64748b] mt-1">
                    Venue: {selectedUcl.venue}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] space-y-2 text-xs">
                  <div className="text-[#334155]">
                    <strong className="text-[#997328]">Goalscorers: </strong>
                    {selectedUcl.scorers}
                  </div>
                  <div className="text-[#475569] flex items-center justify-between pt-1 border-t border-[#f1f5f9]">
                    <span>
                      <strong className="text-[#0a1428]">Manager: </strong>
                      {selectedUcl.manager}
                    </span>
                    <span>
                      <strong className="text-[#0a1428]">Captain: </strong>
                      {selectedUcl.captain}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/40">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#7a5813]">
                    Historical Significance
                  </span>
                  <p className="text-xs sm:text-sm italic text-[#334155] mt-1 leading-relaxed">
                    &quot;{selectedUcl.note}&quot;
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

        {/* Historical Eras */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <History className="w-5 h-5 text-[#c5a059]" />
            <h3 className="font-royal text-2xl font-black text-[#0a1428]">
              Historic Eras of Real Madrid
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eras.map((era, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#c5a059]/25 hover:border-[#c5a059] transition space-y-3 shadow-xs hover:shadow-md"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#997328]">
                  <span className="font-royal">{era.era}</span>
                  <Award className="w-4 h-4 text-[#c5a059]" />
                </div>
                <h4 className="font-royal text-lg font-black text-[#0a1428]">{era.title}</h4>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {era.description}
                </p>
                <div className="pt-2 border-t border-[#f1f5f9] text-[11px] text-[#64748b]">
                  Key Figures: <strong className="text-[#0a1428]">{era.keyFigure}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
