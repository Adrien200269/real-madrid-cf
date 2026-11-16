"use client";

import { useState, useMemo } from "react";
import { squadData } from "@/data/squad";
import { 
  Search, 
  X, 
  ChevronRight, 
  Trophy,
  Quote,
  Users
} from "lucide-react";
import { useThemeLanguage } from "@/context/ThemeLanguageContext";

export default function SquadSection({ initialLimit = null }) {
  const { t, language } = useThemeLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activePlayer, setActivePlayer] = useState(null);

  const categories = [
    { id: "all", label: language === "es" ? "Todos" : "All Players" },
    { id: "forwards", label: language === "es" ? "Delanteros" : "Forwards" },
    { id: "midfielders", label: language === "es" ? "Centrocampistas" : "Midfielders" },
    { id: "defenders", label: language === "es" ? "Defensas" : "Defenders" },
    { id: "goalkeepers", label: language === "es" ? "Porteros" : "Goalkeepers" }
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
    <section id="squad-section" className="py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#3E31FA] dark:text-[#8FA0F5]">
              {t("squadTag")}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F2145] dark:text-white mt-1">
              {t("squadHeading")}
            </h2>
            <p className="text-[#788398] dark:text-slate-400 text-xs sm:text-sm mt-1">
              {t("squadSub")}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#788398] dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={language === "es" ? "Buscar por jugador o país..." : "Search by player or country..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] focus:border-[#3E31FA] rounded-full text-xs text-[#0F2145] dark:text-white placeholder-[#788398] dark:placeholder-slate-400 focus:outline-none transition shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#788398] hover:text-[#0F2145]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Position Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#3E31FA] text-white shadow-xs"
                  : "bg-white text-[#43526E] hover:text-[#0F2145] border border-[#E1E5EA]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Squad Grid with Real Player Images */}
        {displayedPlayers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E1E5EA]">
            <p className="text-[#788398] text-sm">No players found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#3E31FA] font-bold underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => setActivePlayer(player)}
                className="rm-card cursor-pointer flex flex-col justify-between group overflow-hidden"
              >
                {/* Real Player Image Canvas */}
                <div className="relative h-64 w-full bg-gradient-to-b from-[#EEF2FD] via-[#F8F9FA] to-white flex items-end justify-center overflow-hidden border-b border-[#E1E5EA]">
                  
                  {/* Jersey number watermark */}
                  <span className="absolute top-2 left-4 text-6xl font-black text-[#0F2145]/8 select-none pointer-events-none">
                    {player.number}
                  </span>

                  {/* Top badges */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[11px] font-semibold text-[#43526E] border border-[#E1E5EA] shadow-2xs">
                    <span>{player.flag}</span>
                    <span>{player.nationality}</span>
                  </div>

                  {/* Real Player Portrait Photo */}
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="h-full w-full object-contain object-bottom group-hover:scale-105 transition-transform duration-300 drop-shadow-sm pt-2"
                    loading="lazy"
                  />
                </div>

                {/* Card Content Details */}
                <div className="p-4 space-y-3">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-[#3E31FA] uppercase tracking-wider">
                        {player.position}
                      </span>
                      <span className="text-xs font-black text-[#0F2145]">
                        #{player.number}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#0F2145] group-hover:text-[#3E31FA] transition-colors mt-0.5 truncate">
                      {player.name}
                    </h3>

                    <p className="text-[11px] text-[#788398] italic">
                      &quot;{player.nickname}&quot;
                    </p>
                  </div>

                  {/* Mini Stats Grid */}
                  <div className="pt-2 border-t border-[#E1E5EA] grid grid-cols-3 gap-1.5 text-center text-xs">
                    <div className="bg-[#F8F9FA] rounded-md py-1">
                      <div className="font-bold text-[#0F2145] text-xs">{player.stats.appearances}</div>
                      <div className="text-[8px] text-[#788398] uppercase">Matches</div>
                    </div>
                    <div className="bg-[#EEF2FD] rounded-md py-1 text-[#3E31FA]">
                      <div className="font-bold text-xs">
                        {player.stats.goals !== undefined ? player.stats.goals : player.stats.cleanSheets}
                      </div>
                      <div className="text-[8px] uppercase">
                        {player.stats.goals !== undefined ? "Goals" : "Cleans"}
                      </div>
                    </div>
                    <div className="bg-[#F8F9FA] rounded-md py-1">
                      <div className="font-bold text-[#0F2145] text-xs">{player.stats.trophies}</div>
                      <div className="text-[8px] text-[#788398] uppercase">Titles</div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#3E31FA]">
                    <span>View Profile</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Player Modal with Real Photo */}
        {activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#E1E5EA] p-6 sm:p-8 shadow-2xl text-[#0F2145] max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#F3F5F8] hover:bg-[#EEF2FD] text-[#788398] hover:text-[#3E31FA] transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Header with Real Portrait Photo */}
              <div className="flex items-center gap-5 pb-6 border-b border-[#E1E5EA]">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#3E31FA] shrink-0 shadow-md bg-[#EEF2FD] flex items-end justify-center">
                  <img
                    src={activePlayer.avatar}
                    alt={activePlayer.name}
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#3E31FA] uppercase">
                      {activePlayer.position}
                    </span>
                    <span className="text-[#C7CCD6]">•</span>
                    <span className="text-xs text-[#788398] font-medium flex items-center gap-1">
                      {activePlayer.flag} {activePlayer.nationality}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0F2145] mt-1">
                    {activePlayer.name}
                  </h3>
                  <p className="text-xs text-[#788398] italic">
                    #{activePlayer.number} • Known as &quot;{activePlayer.nickname}&quot; • Real Madrid C.F.
                  </p>
                </div>
              </div>

              {/* Personal Information (Official 4-Column Grid) */}
              <div className="my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] mb-3">
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-[10px] text-[#788398] uppercase">Nationality</div>
                    <div className="text-sm font-bold text-[#0F2145] mt-0.5">{activePlayer.nationality}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-[10px] text-[#788398] uppercase">Age</div>
                    <div className="text-sm font-bold text-[#0F2145] mt-0.5">{activePlayer.age} years</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-[10px] text-[#788398] uppercase">Height</div>
                    <div className="text-sm font-bold text-[#0F2145] mt-0.5">{activePlayer.height}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-[10px] text-[#788398] uppercase">Joined Club</div>
                    <div className="text-sm font-bold text-[#0F2145] mt-0.5">{activePlayer.joinedYear}</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="my-6 p-4 rounded-xl bg-[#EEF2FD] border border-[#DEE5FD] flex gap-3.5 items-start">
                <Quote className="w-5 h-5 text-[#3E31FA] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm italic text-[#0F2145] leading-relaxed">
                  &quot;{activePlayer.quote}&quot;
                </p>
              </div>

              {/* Complete Statistics */}
              <div className="my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] mb-3">
                  Season & Career Statistics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-2xl font-black text-[#0F2145]">{activePlayer.stats.appearances}</div>
                    <div className="text-[10px] text-[#788398] uppercase font-semibold">Appearances</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#EEF2FD] border border-[#DEE5FD]">
                    <div className="text-2xl font-black text-[#3E31FA]">
                      {activePlayer.stats.goals !== undefined ? activePlayer.stats.goals : activePlayer.stats.cleanSheets}
                    </div>
                    <div className="text-[10px] text-[#3E31FA] uppercase font-semibold">
                      {activePlayer.stats.goals !== undefined ? "Goals" : "Clean Sheets"}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-2xl font-black text-[#0F2145]">
                      {activePlayer.stats.assists !== undefined ? activePlayer.stats.assists : activePlayer.stats.saves}
                    </div>
                    <div className="text-[10px] text-[#788398] uppercase font-semibold">
                      {activePlayer.stats.assists !== undefined ? "Assists" : "Saves"}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] border border-[#E1E5EA]">
                    <div className="text-2xl font-black text-[#947138]">{activePlayer.stats.trophies} 🏆</div>
                    <div className="text-[10px] text-[#788398] uppercase font-semibold">Titles Won</div>
                  </div>
                </div>
              </div>

              {/* Honours / Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] mb-3 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-[#8760F6]" />
                  Honours & Milestones
                </h4>
                <div className="space-y-2">
                  {activePlayer.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#43526E] bg-[#F8F9FA] px-3.5 py-2.5 rounded-xl border border-[#E1E5EA]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E31FA]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
