export const matchCenterData = {
  liveMatch: {
    isLive: true,
    competition: "UEFA Champions League",
    stage: "League Phase - Matchday 5",
    venue: "Santiago Bernabéu, Madrid",
    attendance: "81,044",
    homeTeam: {
      name: "Real Madrid",
      shortName: "RMA",
      logo: "👑",
      score: 3
    },
    awayTeam: {
      name: "Borussia Dortmund",
      shortName: "BVB",
      logo: "🟡",
      score: 1
    },
    minute: "78'",
    status: "LIVE - Second Half",
    scorers: [
      { minute: "34'", player: "Kylian Mbappé", team: "RMA", assist: "Vini Jr." },
      { minute: "52'", player: "Serhou Guirassy", team: "BVB", assist: "Julian Brandt" },
      { minute: "63'", player: "Vinícius Júnior", team: "RMA", assist: "Jude Bellingham" },
      { minute: "75'", player: "Jude Bellingham", team: "RMA", assist: "Luka Modrić" }
    ],
    stats: {
      possession: { home: 61, away: 39 },
      shots: { home: 18, away: 7 },
      shotsOnTarget: { home: 9, away: 3 },
      corners: { home: 7, away: 2 },
      fouls: { home: 8, away: 11 },
      yellowCards: { home: 1, away: 3 },
      expectedGoals: { home: 2.84, away: 0.92 }
    },
    lineup: {
      formation: "4-3-3",
      startingXI: [
        { num: 1, name: "Courtois", pos: "GK" },
        { num: 2, name: "Carvajal", pos: "RB" },
        { num: 3, name: "Militão", pos: "CB" },
        { num: 22, name: "Rüdiger", pos: "CB" },
        { num: 23, name: "Mendy", pos: "LB" },
        { num: 14, name: "Tchouaméni", pos: "DM" },
        { num: 8, name: "Valverde", pos: "CM" },
        { num: 5, name: "Bellingham", pos: "AM" },
        { num: 11, name: "Rodrygo", pos: "RW" },
        { num: 9, name: "Mbappé", pos: "ST" },
        { num: 7, name: "Vini Jr.", pos: "LW" }
      ],
      bench: ["Lunin", "Modrić", "Camavinga", "Güler", "Endrick", "Brahim", "Lucas V.", "Fran García"]
    },
    timeline: [
      { min: "75'", type: "goal", text: "⚽ GOAAAAL! Jude Bellingham fires into the top corner from Modrić's lofted pass! (3-1)" },
      { min: "71'", type: "substitution", text: "🔄 Substitution: Luka Modrić comes on for Aurélien Tchouaméni." },
      { min: "63'", type: "goal", text: "⚽ GOAAAAL! Vinícius Jr. dances past two defenders and finishes clinical into bottom-right! (2-1)" },
      { min: "58'", type: "yellow", text: "🟨 Yellow Card: Schlotterbeck (BVB) fouls Mbappé on the counter." },
      { min: "52'", type: "goal", text: "⚽ Goal Dortmund: Guirassy taps in from close range. (1-1)" },
      { min: "45+2'", type: "whistle", text: "⏱️ Half Time at the Bernabéu. Real Madrid leading 1-0." },
      { min: "34'", type: "goal", text: "⚽ GOAAAAL! Kylian Mbappé chips the keeper with composure after a laser ball from Vini Jr.! (1-0)" }
    ]
  },

  upcomingFixtures: [
    {
      id: "fix-1",
      competition: "La Liga",
      badge: "🇪🇸",
      date: "Nov 24, 2026",
      time: "21:00 CET",
      venue: "Estadi Municipal de Montilivi",
      homeTeam: { name: "Girona FC", logo: "🔴" },
      awayTeam: { name: "Real Madrid", logo: "👑" },
      ticketsUrl: "#"
    },
    {
      id: "fix-2",
      competition: "UEFA Champions League",
      badge: "⭐",
      date: "Nov 27, 2026",
      time: "21:00 CET",
      venue: "Anfield, Liverpool",
      homeTeam: { name: "Liverpool FC", logo: "🔴" },
      awayTeam: { name: "Real Madrid", logo: "👑" },
      ticketsUrl: "#"
    },
    {
      id: "fix-3",
      competition: "La Liga",
      badge: "🇪🇸",
      date: "Dec 01, 2026",
      time: "16:15 CET",
      venue: "Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "👑" },
      awayTeam: { name: "Getafe CF", logo: "🔵" },
      ticketsUrl: "#"
    },
    {
      id: "fix-4",
      competition: "El Clásico - La Liga",
      badge: "🔥",
      date: "Dec 14, 2026",
      time: "21:00 CET",
      venue: "Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "👑" },
      awayTeam: { name: "FC Barcelona", logo: "🔵🔴" },
      ticketsUrl: "#"
    }
  ],

  recentResults: [
    {
      id: "res-1",
      competition: "La Liga",
      date: "Nov 09, 2026",
      venue: "Santiago Bernabéu",
      homeTeam: { name: "Real Madrid", score: 4 },
      awayTeam: { name: "Osasuna", score: 0 },
      scorers: "Vini Jr. (34', 61', 69'), Bellingham (42')",
      highlight: "Vini Jr. majestic hat-trick in front of 78,000 fans."
    },
    {
      id: "res-2",
      competition: "UEFA Champions League",
      date: "Nov 05, 2026",
      venue: "Santiago Bernabéu",
      homeTeam: { name: "Real Madrid", score: 5 },
      awayTeam: { name: "Borussia Dortmund", score: 2 },
      scorers: "Rüdiger (60'), Vini Jr. (62', 86', 90+3'), Lucas V. (83')",
      highlight: "Legendary second-half Bernabéu comeback from 0-2 to 5-2."
    },
    {
      id: "res-3",
      competition: "La Liga",
      date: "Oct 26, 2026",
      venue: "Estadio de Balaídos",
      homeTeam: { name: "Celta Vigo", score: 1 },
      awayTeam: { name: "Real Madrid", score: 2 },
      scorers: "Mbappé (20'), Vini Jr. (66')",
      highlight: "Modrić becomes oldest player in club history and provides magical assist."
    },
    {
      id: "res-4",
      competition: "UEFA Super Cup",
      date: "Aug 14, 2026",
      venue: "National Stadium, Warsaw",
      homeTeam: { name: "Real Madrid", score: 2 },
      awayTeam: { name: "Atalanta", score: 0 },
      scorers: "Valverde (59'), Mbappé (68')",
      highlight: "Real Madrid lift record 6th UEFA Super Cup with Mbappé scoring on debut."
    }
  ]
};
