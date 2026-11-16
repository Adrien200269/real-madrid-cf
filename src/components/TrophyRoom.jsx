"use client";

import { useState } from "react";
import { trophiesData } from "@/data/trophies";
import { Trophy, Star, History, Award, ChevronDown, Sparkles, Shield, Search } from "lucide-react";

export default function TrophyRoom() {
  const { summary, championsLeagues, eras } = trophiesData;
  const [selectedUcl, setSelectedUcl] = useState(championsLeagues[0]);
  const [uclFilterYear, setUclFilterYear] = useState("");

  const filteredUcl = championsLeagues.filter((c) =>
    !uclFilterYear ? true : c.year.includes(uclFilterYear) || c.opponent.toLowerCase().includes(uclFilterYear.toLowerCase())
  );

  return (
    <section className="py-16 lg:py-24 bg-[#091124] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" />
            Hall of Glory • 122 Years of Supremacy
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            THE REAL MADRID <span className="gold-gradient-text">TROPHY ROOM</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No club on Earth comes close to Real Madrid&apos;s trophy cabinet. Explore all 15 European Cups, 36 domestic crowns, and the legendary eras that forged our dynasty.
          </p>
        </div>

        {/* Trophies Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#0b152d] border border-white/10 hover:border-amber-400/40 transition group text-center space-y-2 shadow-lg"
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 group-hover:scale-110 transition-transform">
                {item.count}
              </div>
              <div className="text-xs font-bold text-white line-clamp-1">
                {item.name}
              </div>
              <div className="text-[10px] text-slate-400">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Showcase: The 15 European Cups */}
        <div className="rounded-3xl bg-gradient-to-b from-[#111f42] to-[#080f21] border border-amber-400/30 p-6 sm:p-10 shadow-2xl mb-16">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                European Royalty
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                The 15 UEFA Champions League Triumphs
              </h3>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search year or opponent..."
                value={uclFilterYear}
                onChange={(e) => setUclFilterYear(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
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
                  className={`p-3.5 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                    selectedUcl?.edition === c.edition
                      ? "bg-amber-400/20 border-amber-400 text-white shadow-md shadow-amber-500/10"
                      : "bg-white/5 border-white/10 hover:border-white/20 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-300 font-black text-xs flex items-center justify-center shrink-0">
                      #{c.edition}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {c.year} vs {c.opponent}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {c.venue}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-black text-amber-400 px-2 py-0.5 rounded bg-black/30">
                      {c.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Spotlight of Selected Final */}
            {selectedUcl && (
              <div className="lg:col-span-7 rounded-2xl bg-[#0b152d] border border-amber-400/30 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-black text-amber-400">
                      ★ {selectedUcl.year}
                    </span>
                    <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-white/10 text-slate-200">
                      Edition #{selectedUcl.edition}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white px-4 py-1.5 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300">
                    {selectedUcl.score}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-extrabold text-white">
                    Real Madrid vs {selectedUcl.opponent}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Venue: {selectedUcl.venue}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs text-slate-300">
                    <strong className="text-amber-400">Goalscorers: </strong>
                    {selectedUcl.scorers}
                  </div>
                  <div className="text-xs text-slate-300 flex items-center justify-between">
                    <span>
                      <strong className="text-slate-400">Manager: </strong>
                      {selectedUcl.manager}
                    </span>
                    <span>
                      <strong className="text-slate-400">Captain: </strong>
                      {selectedUcl.captain}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/20">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Historical Significance
                  </span>
                  <p className="text-xs sm:text-sm italic text-slate-200 mt-1 leading-relaxed">
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
            <History className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Historic Eras of Real Madrid</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eras.map((era, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0b152d] border border-white/10 hover:border-amber-400/40 transition space-y-3 shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>{era.era}</span>
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <h4 className="text-lg font-black text-white">{era.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {era.description}
                </p>
                <div className="pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  Key Figures: <strong className="text-slate-200">{era.keyFigure}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
