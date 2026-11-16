export const matchCenterData = {
  liveMatch: {
    isLive: true,
    competition: "UEFA Champions League",
    stage: "League Phase · Matchday 5",
    venue: "Estadio Santiago Bernabéu, Madrid",
    attendance: "81,044",
    homeTeam: {
      name: "Real Madrid",
      shortName: "RMA",
      logo: "/images/club/crest.svg",
      score: 3
    },
    awayTeam: {
      name: "Borussia Dortmund",
      shortName: "BVB",
      logo: "/images/clubs/dortmund.svg",
      score: 1
    },
    minute: "78'",
    status: "LIVE · Second Half",
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
      competition: "LaLiga EA Sports",
      badge: "🇪🇸",
      date: "Upcoming Matchday",
      time: "21:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg" },
      awayTeam: { name: "Sevilla FC", logo: "/images/clubs/sevilla.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-2",
      competition: "El Clásico · Supercopa",
      badge: "🔥",
      date: "Supercopa de España",
      time: "20:00 CET",
      venue: "King Fahd Stadium",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg" },
      awayTeam: { name: "FC Barcelona", logo: "/images/clubs/barcelona.svg" },
      ticketsUrl: "#"
    },
    {
      id: "fix-3",
      competition: "LaLiga EA Sports · Madrid Derby",
      badge: "🛡️",
      date: "Upcoming Derby",
      time: "21:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg" },
      awayTeam: { name: "Atlético Madrid", logo: "/images/clubs/atletico.svg" },
      ticketsUrl: "#"
    },
    {
      id: "fix-4",
      competition: "UEFA Champions League",
      badge: "⭐",
      date: "European Matchday",
      time: "21:00 CET",
      venue: "Anfield, Liverpool",
      homeTeam: { name: "Liverpool FC", logo: "/images/clubs/liverpool.svg" },
      awayTeam: { name: "Real Madrid", logo: "/images/club/crest.svg" },
      ticketsUrl: "#"
    }
  ],

  recentResults: [
    {
      id: "res-1",
      competition: "LaLiga EA Sports",
      date: "Dec 07, 2024",
      venue: "Estadi Montilivi",
      homeTeam: { name: "Girona FC", logo: "/images/clubs/girona.svg", score: 0 },
      awayTeam: { name: "Real Madrid", logo: "/images/club/crest.svg", score: 3 },
      scorers: "Bellingham (36'), Güler (55'), Mbappé (62')",
      highlight: "Clinical away performance with Güler and Mbappé scoring second-half goals."
    },
    {
      id: "res-2",
      competition: "LaLiga EA Sports",
      date: "Dec 01, 2024",
      venue: "Santiago Bernabéu",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg", score: 2 },
      awayTeam: { name: "Getafe CF", logo: "/images/club/crest.svg", score: 0 },
      scorers: "Bellingham (30' pen), Mbappé (38')",
      highlight: "First-half masterclass from Bellingham and Mbappé secures all three points."
    },
    {
      id: "res-3",
      competition: "LaLiga EA Sports",
      date: "Nov 24, 2024",
      venue: "Estadio Municipal de Butarque",
      homeTeam: { name: "CD Leganés", logo: "/images/club/crest.svg", score: 0 },
      awayTeam: { name: "Real Madrid", logo: "/images/club/crest.svg", score: 3 },
      scorers: "Mbappé (43'), Valverde (66'), Bellingham (85')",
      highlight: "Valverde fires an unstoppable 25-yard free kick into the bottom corner."
    },
    {
      id: "res-4",
      competition: "LaLiga EA Sports",
      date: "Nov 09, 2024",
      venue: "Santiago Bernabéu",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg", score: 4 },
      awayTeam: { name: "CA Osasuna", logo: "/images/clubs/osasuna.svg", score: 0 },
      scorers: "Vinícius Jr. (34', 61', 69' hat-trick), Bellingham (42')",
      highlight: "Vinícius Jr. shines with a spectacular hat-trick in front of 78,000 Madridistas."
    },
    {
      id: "res-5",
      competition: "UEFA Champions League",
      date: "Oct 22, 2024",
      venue: "Santiago Bernabéu",
      homeTeam: { name: "Real Madrid", logo: "/images/club/crest.svg", score: 5 },
      awayTeam: { name: "Borussia Dortmund", logo: "/images/clubs/dortmund.svg", score: 2 },
      scorers: "Rüdiger (60'), Vini Jr. (62', 86', 90+3'), Lucas V. (83')",
      highlight: "Legendary second-half Bernabéu comeback from 0-2 to 5-2."
    }
  ]
};
