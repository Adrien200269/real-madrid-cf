"use client";

import { useState } from "react";
import { trophiesData } from "@/data/trophies";
import { Trophy, History, Award, Search, Crown, Sparkles } from "lucide-react";

export default function TrophyRoom() {
  const { summary, championsLeagues, eras } = trophiesData;
  const [selectedUcl, setSelectedUcl] = useState(championsLeagues[0]);
  const [uclFilterYear, setUclFilterYear] = useState("");

  const filteredUcl = championsLeagues.filter((c) =>
    !uclFilterYear ? true : c.year.includes(uclFilterYear) || c.opponent.toLowerCase().includes(uclFilterYear.toLowerCase())
  );

  return (
    <section className="py-14 lg:py-20 bg-[#F3F5F8] text-[#0F2145] border-b border-[#E1E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDEBFA] text-[#8760F6] text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5" />
              Palmarés & Historic Honors
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145]">
              Real Madrid Trophy Cabinet
            </h2>
            <p className="text-[#788398] text-xs sm:text-sm mt-1">
              FIFA Best Club of the 20th Century • 15 European Cups
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-[#E1E5EA] text-[#0F2145] shadow-2xs">
              Total European Crowns: 15
            </span>
          </div>
        </div>

        {/* Trophy Summary Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-12">
          {summary.map((item, idx) => (
            <div
              key={idx}
              className="rm-card p-4 text-center space-y-1.5"
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="text-3xl font-black text-[#0F2145]">
                {item.count}
              </div>
              <div className="text-xs font-bold text-[#0F2145] line-clamp-1">
                {item.name}
              </div>
              <div className="text-[10px] text-[#788398]">
                {item.tag}
              </div>
            </div>
          ))}
        </div>

        {/* 15 European Cups Interactive Component */}
        <div className="rm-card p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E1E5EA]">
            <div>
              <span className="text-xs font-bold text-[#3E31FA] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The 15 UEFA Champions League Finals
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F2145] mt-0.5">
                La Decimoquinta & Continental Reign
              </h3>
            </div>

            {/* Filter Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#788398] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search year or opponent..."
                value={uclFilterYear}
                onChange={(e) => setUclFilterYear(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 bg-[#F8F9FA] border border-[#E1E5EA] focus:border-[#3E31FA] rounded-full text-xs text-[#0F2145] placeholder-[#788398] focus:outline-none transition shadow-2xs"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 pt-6 items-start">
            
            {/* Scrollable list of 15 titles */}
            <div className="lg:col-span-5 space-y-2 max-h-[460px] overflow-y-auto pr-2">
              {filteredUcl.map((c) => (
                <div
                  key={c.edition}
                  onClick={() => setSelectedUcl(c)}
                  className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between ${
                    selectedUcl?.edition === c.edition
                      ? "bg-[#EEF2FD] border-[#3E31FA] shadow-2xs"
                      : "bg-[#F8F9FA] border-[#E1E5EA] hover:border-[#C7CCD6] text-[#43526E]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-white border border-[#E1E5EA] text-[#3E31FA] font-black text-xs flex items-center justify-center shrink-0">
                      #{c.edition}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#0F2145]">
                        {c.year} vs {c.opponent}
                      </div>
                      <div className="text-[11px] text-[#788398]">
                        {c.venue}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-black text-[#3E31FA] px-2.5 py-1 rounded bg-white border border-[#DEE5FD]">
                    {c.score}
                  </span>
                </div>
              ))}
            </div>

            {/* Spotlight Card */}
            {selectedUcl && (
              <div className="lg:col-span-7 rounded-2xl bg-[#F8F9FA] border border-[#E1E5EA] p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-[#3E31FA]">
                      ★ {selectedUcl.year}
                    </span>
                    <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-white border border-[#E1E5EA] text-[#0F2145]">
                      Edition #{selectedUcl.edition}
                    </span>
                  </div>
                  <div className="text-xl font-black text-[#0F2145] px-3.5 py-1 rounded-xl bg-white border border-[#E1E5EA]">
                    {selectedUcl.score}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-[#0F2145]">
                    Real Madrid vs {selectedUcl.opponent}
                  </h4>
                  <p className="text-xs text-[#788398] mt-0.5">
                    Venue: {selectedUcl.venue}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-[#E1E5EA] space-y-1.5 text-xs">
                  <div className="text-[#43526E]">
                    <strong className="text-[#0F2145]">Goalscorers: </strong>
                    {selectedUcl.scorers}
                  </div>
                  <div className="text-[#788398] flex items-center justify-between pt-1 border-t border-[#F1F5F9]">
                    <span>
                      <strong className="text-[#0F2145]">Manager: </strong>
                      {selectedUcl.manager}
                    </span>
                    <span>
                      <strong className="text-[#0F2145]">Captain: </strong>
                      {selectedUcl.captain}
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#EEF2FD] border border-[#DEE5FD]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3E31FA]">
                    Match Summary
                  </span>
                  <p className="text-xs italic text-[#0F2145] mt-1 leading-relaxed">
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
            <History className="w-5 h-5 text-[#3E31FA]" />
            <h3 className="text-xl font-extrabold text-[#0F2145]">
              Real Madrid Historical Eras
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {eras.map((era, idx) => (
              <div
                key={idx}
                className="rm-card p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#3E31FA]">
                  <span>{era.era}</span>
                  <Award className="w-4 h-4 text-[#8760F6]" />
                </div>
                <h4 className="text-base font-bold text-[#0F2145]">{era.title}</h4>
                <p className="text-xs text-[#43526E] leading-relaxed">
                  {era.description}
                </p>
                <div className="pt-2 border-t border-[#E1E5EA] text-[11px] text-[#788398]">
                  Key Legends: <strong className="text-[#0F2145]">{era.keyFigure}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
