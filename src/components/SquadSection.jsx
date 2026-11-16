"use client";

import { useState, useMemo } from "react";
import { squadData } from "@/data/squad";
import { 
  Search, 
  X, 
  ChevronRight, 
  Sparkles,
  Award,
  Quote,
  Crown
} from "lucide-react";

export default function SquadSection({ initialLimit = null }) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlayer, setActivePlayer] = useState(null);

  const categories = [
    { id: "all", label: "Full Squad" },
    { id: "forwards", label: "Forwards" },
    { id: "midfielders", label: "Midfielders" },
    { id: "defenders", label: "Defenders" },
    { id: "goalkeepers", label: "Goalkeepers" }
  ];

  const filteredPlayers = useMemo(() => {
    return squadData.filter((player) => {
      const matchesCategory =
        selectedCategory === "all" || player.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        player.name.toLowerCase().includes(q) ||
        player.position.toLowerCase().includes(q) ||
        player.nationality.toLowerCase().includes(q) ||
        player.nickname.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const displayedPlayers = initialLimit
    ? filteredPlayers.slice(0, initialLimit)
    : filteredPlayers;

  return (
    <section id="squad-section" className="py-16 lg:py-24 bg-white text-[#0a1428] border-b border-[#c5a059]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf6ec] border border-[#c5a059]/40 text-[#7a5813] text-xs font-bold tracking-widest uppercase shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#c5a059]" />
            First Team Roster • 2024/25
          </div>
          <h2 className="font-royal text-3xl sm:text-5xl font-black tracking-tight text-[#0a1428]">
            THE ROYAL <span className="gold-gradient-text">MADRIDISTAS</span>
          </h2>
          <p className="text-[#64748b] text-sm sm:text-base">
            From the world’s most lethal attackers to historic European champions. Select any player to view official career statistics, quotes, and honours.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#e2e8f0]">
          {/* Position tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#faf6ec] text-[#7a5813] border border-[#c5a059]/60 shadow-xs"
                    : "bg-white hover:bg-[#faf8f5] text-[#64748b] hover:text-[#0a1428] border border-[#e2e8f0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#94a3b8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search player, nationality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#e2e8f0] focus:border-[#c5a059] rounded-xl text-xs text-[#0a1428] placeholder-[#94a3b8] focus:outline-none transition shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0a1428]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Squad Grid */}
        {displayedPlayers.length === 0 ? (
          <div className="text-center py-16 bg-[#faf8f5] rounded-2xl border border-[#e2e8f0]">
            <p className="text-[#64748b] text-sm">No players found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#997328] font-bold underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => setActivePlayer(player)}
                className="group relative rounded-2xl bg-white border border-[#c5a059]/25 hover:border-[#c5a059] p-5 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_-2px_rgba(10,20,40,0.06)] hover:shadow-[0_12px_30px_-4px_rgba(197,160,89,0.2)] cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Subtle top warm highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c5a059]/40 to-transparent group-hover:via-[#c5a059] transition-all" />

                {/* Card Top: Number badge & Flag */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#faf6ec] border border-[#c5a059]/40 flex items-center justify-center shadow-xs">
                    <span className="font-royal text-base font-black text-[#7a5813]">
                      #{player.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#f8f9fa] text-xs text-[#475569] border border-[#e2e8f0]">
                    <span>{player.flag}</span>
                    <span className="text-[11px] font-semibold">{player.nationality}</span>
                  </div>
                </div>

                {/* Card Body: Player Identity */}
                <div className="my-6 relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#997328]">
                    {player.position}
                  </span>
                  <h3 className="font-royal text-xl font-black text-[#0a1428] group-hover:text-[#997328] transition-colors mt-0.5">
                    {player.name}
                  </h3>
                  <p className="text-xs text-[#64748b] mt-0.5 italic">
                    &quot;{player.nickname}&quot;
                  </p>
                </div>

                {/* Card Stats Summary */}
                <div className="pt-4 border-t border-[#f1f5f9] relative z-10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-[#faf8f5] rounded-lg py-1.5 border border-[#e2e8f0]/60">
                      <div className="text-xs font-black text-[#0a1428]">
                        {player.stats.appearances}
                      </div>
                      <div className="text-[9px] text-[#64748b] uppercase font-bold">Matches</div>
                    </div>
                    <div className="bg-[#faf6ec] rounded-lg py-1.5 border border-[#c5a059]/30">
                      <div className="text-xs font-black text-[#7a5813]">
                        {player.stats.goals !== undefined
                          ? player.stats.goals
                          : player.stats.cleanSheets}
                      </div>
                      <div className="text-[9px] text-[#7a5813] uppercase font-bold">
                        {player.stats.goals !== undefined ? "Goals" : "Cleans"}
                      </div>
                    </div>
                    <div className="bg-[#faf8f5] rounded-lg py-1.5 border border-[#e2e8f0]/60">
                      <div className="text-xs font-black text-[#0a1428]">
                        {player.stats.trophies}
                      </div>
                      <div className="text-[9px] text-[#64748b] uppercase font-bold">Trophies</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-[#997328] font-bold group-hover:translate-x-1 transition-transform">
                    <span>View Official Record</span>
                    <ChevronRight className="w-4 h-4 text-[#c5a059]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Player Modal / Detailed Classic Stationery Card */}
        {activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-[#c5a059] p-6 sm:p-8 shadow-2xl text-[#0a1428] max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#faf8f5] hover:bg-[#faecd0] text-[#64748b] hover:text-[#0a1428] transition border border-[#e2e8f0]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-[#e2e8f0]">
                <div className="w-16 h-16 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/60 flex items-center justify-center font-royal text-3xl font-black text-[#7a5813] shrink-0 shadow-sm">
                  {activePlayer.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black text-[#997328] uppercase tracking-widest">
                      {activePlayer.position}
                    </span>
                    <span className="text-[#cbd5e1]">•</span>
                    <span className="text-xs text-[#475569] font-medium flex items-center gap-1">
                      {activePlayer.flag} {activePlayer.nationality}
                    </span>
                  </div>
                  <h3 className="font-royal text-2xl sm:text-3xl font-black text-[#0a1428] mt-1">
                    {activePlayer.name}
                  </h3>
                  <p className="text-xs text-[#64748b] italic">
                    Known as &quot;{activePlayer.nickname}&quot; • Joined Real Madrid in {activePlayer.joinedYear}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="my-6 p-4 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/40 flex gap-3.5 items-start">
                <Quote className="w-6 h-6 text-[#c5a059] shrink-0 mt-0.5" />
                <p className="text-sm italic text-[#334155] leading-relaxed">
                  &quot;{activePlayer.quote}&quot;
                </p>
              </div>

              {/* Detailed Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] text-center">
                  <div className="font-royal text-xl font-black text-[#0a1428]">
                    {activePlayer.stats.appearances}
                  </div>
                  <div className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">
                    Appearances
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf6ec] border border-[#c5a059]/40 text-center">
                  <div className="font-royal text-xl font-black text-[#7a5813]">
                    {activePlayer.stats.goals !== undefined
                      ? activePlayer.stats.goals
                      : activePlayer.stats.cleanSheets}
                  </div>
                  <div className="text-[10px] text-[#7a5813] uppercase tracking-wider font-bold">
                    {activePlayer.stats.goals !== undefined ? "Goals" : "Clean Sheets"}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] text-center">
                  <div className="font-royal text-xl font-black text-[#0a1428]">
                    {activePlayer.stats.assists !== undefined
                      ? activePlayer.stats.assists
                      : activePlayer.stats.saves}
                  </div>
                  <div className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">
                    {activePlayer.stats.assists !== undefined ? "Assists" : "Saves"}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#faf8f5] border border-[#e2e8f0] text-center">
                  <div className="font-royal text-xl font-black text-[#997328]">
                    {activePlayer.stats.trophies} 🏆
                  </div>
                  <div className="text-[10px] text-[#64748b] uppercase tracking-wider font-bold">
                    Titles Won
                  </div>
                </div>
              </div>

              {/* Key Career Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#c5a059]" />
                  Key Career Honours & Highlights
                </h4>
                <div className="space-y-2">
                  {activePlayer.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#334155] bg-[#faf8f5] px-3.5 py-2 rounded-xl border border-[#e2e8f0]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Details */}
              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs text-[#64748b]">
                <span>Height: <strong className="text-[#0a1428]">{activePlayer.height}</strong></span>
                <span>Age: <strong className="text-[#0a1428]">{activePlayer.age} years</strong></span>
                <span>Club: <strong className="text-[#997328]">Real Madrid C.F.</strong></span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
