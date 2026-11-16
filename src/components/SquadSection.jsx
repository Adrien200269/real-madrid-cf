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
    <section id="squad-section" className="py-10 sm:py-14 lg:py-20 bg-[#F3F5F8] dark:bg-[#090E1A] text-[#0F2145] dark:text-white border-b border-[#E1E5EA] dark:border-[#1E2B45] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#788398] dark:text-slate-400 hover:text-[#0F2145] dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Position Filter Pills with Horizontal Scroll on Mobile */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-[#3E31FA] text-white shadow-xs"
                  : "bg-white dark:bg-[#111A2E] text-[#43526E] dark:text-slate-300 hover:text-[#0F2145] dark:hover:text-white border border-[#E1E5EA] dark:border-[#1E2B45]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Squad Grid with Real Player Images */}
        {displayedPlayers.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45]">
            <p className="text-[#788398] dark:text-slate-400 text-sm">
              {language === "es" ? "No se encontraron jugadores con ese criterio." : "No players found matching your criteria."}
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-[#3E31FA] dark:text-[#8FA0F5] font-bold underline"
            >
              {language === "es" ? "Restablecer filtros" : "Reset filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {displayedPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => setActivePlayer(player)}
                className="bg-white dark:bg-[#111A2E] rounded-2xl border border-[#E1E5EA] dark:border-[#1E2B45] shadow-xs cursor-pointer flex flex-col justify-between group overflow-hidden"
              >
                {/* Real Player Image Canvas */}
                <div className="relative h-60 sm:h-64 w-full bg-gradient-to-b from-[#EEF2FD] via-[#F8F9FA] to-white dark:from-[#182544] dark:via-[#111A2E] dark:to-[#0E1626] flex items-end justify-center overflow-hidden border-b border-[#E1E5EA] dark:border-[#1E2B45]">
                  
                  {/* Jersey number watermark */}
                  <span className="absolute top-2 left-4 text-5xl sm:text-6xl font-black text-[#0F2145]/8 dark:text-white/5 select-none pointer-events-none">
                    {player.number}
                  </span>

                  {/* Top badges */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-[#111A2E]/90 backdrop-blur-xs text-[11px] font-semibold text-[#43526E] dark:text-slate-300 border border-[#E1E5EA] dark:border-[#1E2B45] shadow-2xs">
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
                      <span className="text-[10px] font-bold text-[#3E31FA] dark:text-[#8FA0F5] uppercase tracking-wider">
                        {player.position}
                      </span>
                      <span className="text-xs font-black text-[#0F2145] dark:text-white">
                        #{player.number}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-[#0F2145] dark:text-white group-hover:text-[#3E31FA] dark:group-hover:text-[#8FA0F5] transition-colors mt-0.5 truncate">
                      {player.name}
                    </h3>

                    <p className="text-[11px] text-[#788398] dark:text-slate-400 italic">
                      &quot;{player.nickname}&quot;
                    </p>
                  </div>

                  {/* Mini Stats Grid */}
                  <div className="pt-2 border-t border-[#E1E5EA] dark:border-[#1E2B45] grid grid-cols-3 gap-1.5 text-center text-xs">
                    <div className="bg-[#F8F9FA] dark:bg-[#0E1626] rounded-md py-1">
                      <div className="font-bold text-[#0F2145] dark:text-white text-xs">{player.stats.appearances}</div>
                      <div className="text-[8px] text-[#788398] dark:text-slate-400 uppercase">
                        {language === "es" ? "Partidos" : "Matches"}
                      </div>
                    </div>
                    <div className="bg-[#EEF2FD] dark:bg-[#182544] rounded-md py-1 text-[#3E31FA] dark:text-[#8FA0F5]">
                      <div className="font-bold text-xs">
                        {player.stats.goals !== undefined ? player.stats.goals : player.stats.cleanSheets}
                      </div>
                      <div className="text-[8px] uppercase">
                        {player.stats.goals !== undefined 
                          ? (language === "es" ? "Goles" : "Goals") 
                          : (language === "es" ? "Imbatido" : "Cleans")}
                      </div>
                    </div>
                    <div className="bg-[#F8F9FA] dark:bg-[#0E1626] rounded-md py-1">
                      <div className="font-bold text-[#0F2145] dark:text-white text-xs">{player.stats.trophies}</div>
                      <div className="text-[8px] text-[#788398] dark:text-slate-400 uppercase">
                        {language === "es" ? "Títulos" : "Titles"}
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5]">
                    <span>{language === "es" ? "Ver Perfil" : "View Profile"}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Player Modal with Real Photo */}
        {activePlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#111A2E] border border-[#E1E5EA] dark:border-[#1E2B45] p-5 sm:p-8 shadow-2xl text-[#0F2145] dark:text-white max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setActivePlayer(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-[#F3F5F8] dark:bg-[#1E2B45] hover:bg-[#EEF2FD] text-[#788398] dark:text-slate-300 hover:text-[#3E31FA] transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Top Header with Real Portrait Photo */}
              <div className="flex items-center gap-4 sm:gap-5 pb-5 sm:pb-6 border-b border-[#E1E5EA] dark:border-[#1E2B45]">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#3E31FA] shrink-0 shadow-md bg-[#EEF2FD] dark:bg-[#182544] flex items-end justify-center">
                  <img
                    src={activePlayer.avatar}
                    alt={activePlayer.name}
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#3E31FA] dark:text-[#8FA0F5] uppercase">
                      {activePlayer.position}
                    </span>
                    <span className="text-[#C7CCD6] dark:text-slate-600">•</span>
                    <span className="text-xs text-[#788398] dark:text-slate-400 font-medium flex items-center gap-1">
                      {activePlayer.flag} {activePlayer.nationality}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-[#0F2145] dark:text-white mt-1">
                    {activePlayer.name}
                  </h3>
                  <p className="text-xs text-[#788398] dark:text-slate-400 italic">
                    #{activePlayer.number} • &quot;{activePlayer.nickname}&quot; • Real Madrid C.F.
                  </p>
                </div>
              </div>

              {/* Personal Information (Official 4-Column Grid) */}
              <div className="my-5 sm:my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] dark:text-slate-400 mb-3">
                  {language === "es" ? "Información Personal" : "Personal Information"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">{t("nationality")}</div>
                    <div className="text-sm font-bold text-[#0F2145] dark:text-white mt-0.5">{activePlayer.nationality}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">{t("age")}</div>
                    <div className="text-sm font-bold text-[#0F2145] dark:text-white mt-0.5">{activePlayer.age} {language === "es" ? "años" : "years"}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">{language === "es" ? "Altura" : "Height"}</div>
                    <div className="text-sm font-bold text-[#0F2145] dark:text-white mt-0.5">{activePlayer.height}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase">{t("joined")}</div>
                    <div className="text-sm font-bold text-[#0F2145] dark:text-white mt-0.5">{activePlayer.joinedYear}</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="my-5 sm:my-6 p-4 rounded-xl bg-[#EEF2FD] dark:bg-[#182544] border border-[#DEE5FD] dark:border-[#23356A] flex gap-3.5 items-start">
                <Quote className="w-5 h-5 text-[#3E31FA] dark:text-[#8FA0F5] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm italic text-[#0F2145] dark:text-slate-200 leading-relaxed">
                  &quot;{activePlayer.quote}&quot;
                </p>
              </div>

              {/* Complete Statistics */}
              <div className="my-5 sm:my-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] dark:text-slate-400 mb-3">
                  {language === "es" ? "Estadísticas de Temporada y Carrera" : "Season & Career Statistics"}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-xl sm:text-2xl font-black text-[#0F2145] dark:text-white">{activePlayer.stats.appearances}</div>
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase font-semibold">
                      {language === "es" ? "Partidos" : "Appearances"}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#EEF2FD] dark:bg-[#182544] border border-[#DEE5FD] dark:border-[#23356A]">
                    <div className="text-xl sm:text-2xl font-black text-[#3E31FA] dark:text-[#8FA0F5]">
                      {activePlayer.stats.goals !== undefined ? activePlayer.stats.goals : activePlayer.stats.cleanSheets}
                    </div>
                    <div className="text-[10px] text-[#3E31FA] dark:text-[#8FA0F5] uppercase font-semibold">
                      {activePlayer.stats.goals !== undefined 
                        ? (language === "es" ? "Goles" : "Goals") 
                        : (language === "es" ? "Porterías a Cero" : "Clean Sheets")}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-xl sm:text-2xl font-black text-[#0F2145] dark:text-white">
                      {activePlayer.stats.assists !== undefined ? activePlayer.stats.assists : activePlayer.stats.saves}
                    </div>
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase font-semibold">
                      {activePlayer.stats.assists !== undefined 
                        ? (language === "es" ? "Asistencias" : "Assists") 
                        : (language === "es" ? "Paradas" : "Saves")}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F8F9FA] dark:bg-[#0E1626] border border-[#E1E5EA] dark:border-[#1E2B45]">
                    <div className="text-xl sm:text-2xl font-black text-[#947138]">{activePlayer.stats.trophies} 🏆</div>
                    <div className="text-[10px] text-[#788398] dark:text-slate-400 uppercase font-semibold">
                      {language === "es" ? "Títulos Ganados" : "Titles Won"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Honours / Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#788398] dark:text-slate-400 mb-3 flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-[#8760F6] dark:text-[#A5B4FC]" />
                  {language === "es" ? "Palmarés e Hitos" : "Honours & Milestones"}
                </h4>
                <div className="space-y-2">
                  {activePlayer.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#43526E] dark:text-slate-300 bg-[#F8F9FA] dark:bg-[#0E1626] px-3.5 py-2.5 rounded-xl border border-[#E1E5EA] dark:border-[#1E2B45]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E31FA] dark:bg-[#8FA0F5] shrink-0" />
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
