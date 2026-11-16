"use client";

import { useState, useMemo } from "react";
import { squadData } from "@/data/squad";
import { 
  Search, 
  Trophy, 
  Shield, 
  Flame, 
  Activity, 
  X, 
  ChevronRight, 
  Sparkles,
  Award,
  Quote
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
    <section id="squad-section" className="py-16 lg:py-24 bg-[#060a17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            First Team Roster • 2024/25
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            MEET THE <span className="gold-gradient-text">MADRIDISTAS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From the world’s most lethal attackers to historic European champions. Select a player to view detailed match statistics, quotes, and honours.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Position tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#d4af37] text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search player, nationality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-400/60 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Squad Grid */}
        {displayedPlayers.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm">No players found matching your search.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-amber-400 font-semibold underline"
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
                className="group relative rounded-2xl bg-[#0b152d] border border-white/10 hover:border-amber-400/50 p-5 transition-all duration-300 hover:-translate-y-1.5 shadow-lg cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Background ambient gradient */}
                <div
                  className={`absolute -top-16 -right-16 w-36 h-36 bg-gradient-to-br ${player.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}
                />

                {/* Card Top: Number badge & Flag */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <span className="text-base font-black text-amber-400">
                      #{player.number}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 text-xs text-slate-300 border border-white/10">
                    <span>{player.flag}</span>
                    <span className="text-[11px] font-medium">{player.nationality}</span>
                  </div>
                </div>

                {/* Card Body: Player Identity */}
                <div className="my-6 relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    {player.position}
                  </span>
                  <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors mt-0.5">
                    {player.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 italic">
                    &quot;{player.nickname}&quot;
                  </p>
                </div>

                {/* Card Stats Summary */}
                <div className="pt-4 border-t border-white/10 relative z-10">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-xs font-black text-white">
                        {player.stats.appearances}
                      </div>
                      <div className="text-[9px] text-slate-400 uppercase">Matches</div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-xs font-black text-amber-400">
                        {player.stats.goals !== undefined
                          ? player.stats.goals
                          : player.stats.cleanSheets}
                      </div>
                      <div className="text-[9px] text-slate-400 uppercase">
                        {player.stats.goals !== undefined ? "Goals" : "Cleans"}
                      </div>
                    </div>
                    <div className="bg-white/5 rounded-lg py-1.5">
                      <div className="text-xs font-black text-purple-300">
                        {player.stats.trophies}
                      </div>
                      <div className="text-[9px] text-slate-400 uppercase">Trophies</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Player Modal / Detailed Card view */}
        {activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#0b152d] border border-amber-400/40 p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 flex items-center justify-center text-3xl font-black text-slate-950 shrink-0">
                  {activePlayer.number}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                      {activePlayer.position}
                    </span>
                    <span>•</span>
                    <span className="text-xs text-slate-300 flex items-center gap-1">
                      {activePlayer.flag} {activePlayer.nationality}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {activePlayer.name}
                  </h3>
                  <p className="text-xs text-slate-400 italic">
                    Known as &quot;{activePlayer.nickname}&quot; • Joined Real Madrid in {activePlayer.joinedYear}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-blue-500/10 border border-amber-500/20 flex gap-3 items-start">
                <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm italic text-slate-200">
                  &quot;{activePlayer.quote}&quot;
                </p>
              </div>

              {/* Detailed Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl font-black text-white">
                    {activePlayer.stats.appearances}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Appearances
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl font-black text-amber-400">
                    {activePlayer.stats.goals !== undefined
                      ? activePlayer.stats.goals
                      : activePlayer.stats.cleanSheets}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {activePlayer.stats.goals !== undefined ? "Goals" : "Clean Sheets"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl font-black text-blue-400">
                    {activePlayer.stats.assists !== undefined
                      ? activePlayer.stats.assists
                      : activePlayer.stats.saves}
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {activePlayer.stats.assists !== undefined ? "Assists" : "Saves"}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-xl font-black text-purple-400">
                    {activePlayer.stats.trophies} 🏆
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Titles Won
                  </div>
                </div>
              </div>

              {/* Key Career Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  Key Career Honours & Highlights
                </h4>
                <div className="space-y-2">
                  {activePlayer.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-slate-300 bg-white/5 px-3 py-2 rounded-lg"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio Details */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Height: <strong className="text-slate-200">{activePlayer.height}</strong></span>
                <span>Age: <strong className="text-slate-200">{activePlayer.age} years</strong></span>
                <span>Club: <strong className="text-amber-400">Real Madrid C.F.</strong></span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
