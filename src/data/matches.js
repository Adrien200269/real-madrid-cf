export const matchCenterData = {
  featuredMatch: {
    isLive: false,
    status: "FULL TIME · FINAL RESULT",
    statusBadge: "Latest Result",
    competition: "LaLiga EA Sports",
    stage: "Matchday 12",
    date: "Sun, Nov 8, 2026",
    venue: "Estadio de Mestalla, Valencia",
    attendance: "47,215",
    homeTeam: {
      name: "Valencia CF",
      shortName: "VAL",
      logo: "/images/clubs/valencia.png",
      score: 0
    },
    awayTeam: {
      name: "Real Madrid",
      shortName: "RMA",
      logo: "/images/clubs/realmadrid.png",
      score: 3
    },
    scorers: [
      { minute: "23'", player: "Kylian Mbappé", team: "RMA", assist: "Vinícius Júnior" },
      { minute: "54'", player: "Jude Bellingham", team: "RMA", assist: "Arda Güler" },
      { minute: "68'", player: "Kylian Mbappé", team: "RMA", assist: "Trent Alexander-Arnold" }
    ],
    stats: {
      possession: { home: 42, away: 58 },
      shots: { home: 8, away: 17 },
      shotsOnTarget: { home: 2, away: 9 },
      corners: { home: 3, away: 7 },
      fouls: { home: 14, away: 9 },
      yellowCards: { home: 3, away: 1 },
      expectedGoals: { home: 0.62, away: 2.85 }
    },
    lineup: {
      formation: "4-3-3",
      startingXI: [
        { num: 1, name: "Courtois", pos: "GK" },
        { num: 12, name: "Trent", pos: "RB" },
        { num: 3, name: "Militão", pos: "CB" },
        { num: 22, name: "Rüdiger", pos: "CB" },
        { num: 17, name: "Cucurella", pos: "LB" },
        { num: 14, name: "Tchouaméni", pos: "DM" },
        { num: 8, name: "Valverde", pos: "CM" },
        { num: 5, name: "Bellingham", pos: "AM" },
        { num: 11, name: "Rodrygo", pos: "RW" },
        { num: 10, name: "Mbappé", pos: "ST" },
        { num: 7, name: "Vini Jr.", pos: "LW" }
      ],
      bench: ["Lunin", "Asencio", "Huijsen", "Camavinga", "Güler", "Bernardo", "Endrick", "Brahim", "Mendy"]
    },
    timeline: [
      { min: "90+3'", type: "whistle", text: "⏱️ Full Time: Real Madrid secure an emphatic 3-0 away win at Mestalla to extend their winning streak to 5 matches." },
      { min: "76'", type: "substitution", text: "🔄 Substitution: Endrick and Arda Güler replace Mbappé and Rodrygo." },
      { min: "68'", type: "goal", text: "⚽ GOAAAAL! Kylian Mbappé completes his brace with a thunderous strike from Trent's exquisite pass! (0-3)" },
      { min: "54'", type: "goal", text: "⚽ GOAAAAL! Jude Bellingham storms into the penalty box and fires into the corner! (0-2)" },
      { min: "45+2'", type: "whistle", text: "⏱️ Half Time at Mestalla: Valencia 0 - 1 Real Madrid." },
      { min: "23'", type: "goal", text: "⚽ GOAAAAL! Kylian Mbappé opens the scoring with a clinical finish assisted by Vini Jr.! (0-1)" }
    ]
  },

  upcomingFixtures: [
    {
      id: "fix-1",
      competition: "LaLiga EA Sports · Round 13",
      badge: "🇪🇸",
      date: "Sun, Nov 22, 2026",
      time: "21:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      awayTeam: { name: "RC Celta de Vigo", logo: "/images/clubs/celta.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-2",
      competition: "UEFA Champions League · Matchday 5",
      badge: "⭐",
      date: "Wed, Nov 25, 2026",
      time: "21:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      awayTeam: { name: "PSV Eindhoven", logo: "/images/clubs/psv.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-3",
      competition: "LaLiga EA Sports · Round 14",
      badge: "🇪🇸",
      date: "Sun, Nov 29, 2026",
      time: "21:00 CET",
      venue: "Estadio Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      awayTeam: { name: "Deportivo Alavés", logo: "/images/clubs/alaves.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-4",
      competition: "LaLiga EA Sports · Round 15",
      badge: "🇪🇸",
      date: "Wed, Dec 02, 2026",
      time: "19:00 CET",
      venue: "Reale Arena, San Sebastián",
      homeTeam: { name: "Real Sociedad", logo: "/images/clubs/sociedad.png" },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-5",
      competition: "LaLiga EA Sports · Round 16",
      badge: "🇪🇸",
      date: "Sun, Dec 06, 2026",
      time: "16:15 CET",
      venue: "San Mamés, Bilbao",
      homeTeam: { name: "Athletic Club", logo: "/images/clubs/athletic.png" },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      ticketsUrl: "#"
    },
    {
      id: "fix-6",
      competition: "UEFA Champions League · Matchday 6",
      badge: "⭐",
      date: "Thu, Dec 10, 2026",
      time: "21:00 CET",
      venue: "Emirates Stadium, London",
      homeTeam: { name: "Arsenal FC", logo: "/images/clubs/arsenal.png" },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png" },
      ticketsUrl: "#"
    }
  ],

  recentResults: [
    {
      id: "res-1",
      competition: "LaLiga EA Sports · Round 12",
      date: "Sun, Nov 08, 2026",
      venue: "Mestalla, Valencia",
      homeTeam: { name: "Valencia CF", logo: "/images/clubs/valencia.png", score: 0 },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 3 },
      scorers: "Mbappé (23', 68'), Bellingham (54')",
      highlight: "Dominant away display at Mestalla extending the league winning streak to 5 matches."
    },
    {
      id: "res-2",
      competition: "UEFA Champions League · MD 4",
      date: "Wed, Nov 04, 2026",
      venue: "OPAP Arena, Athens",
      homeTeam: { name: "AEK Athens", logo: "/images/clubs/aek.png", score: 2 },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 3 },
      scorers: "Mbappé (12', 77'), Endrick (85')",
      highlight: "Endrick strikes late in Athens to secure all three points for Los Blancos."
    },
    {
      id: "res-3",
      competition: "LaLiga EA Sports · Round 11",
      date: "Sun, Nov 01, 2026",
      venue: "El Sardinero, Santander",
      homeTeam: { name: "Racing Santander", logo: "/images/clubs/racing.png", score: 0 },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 3 },
      scorers: "Vini Jr. (19'), Mbappé (44'), Güler (82')",
      highlight: "Clinical counter-attacks and a sumptuous Güler free kick seal an emphatic away victory."
    },
    {
      id: "res-4",
      competition: "LaLiga EA Sports · El Clásico",
      date: "Mon, Oct 26, 2026",
      venue: "Spotify Camp Nou, Barcelona",
      homeTeam: { name: "FC Barcelona", logo: "/images/clubs/barcelona.png", score: 1 },
      awayTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 2 },
      scorers: "Bellingham (32'), Mbappé (84')",
      highlight: "Mbappé scores the late El Clásico winner in the 84th minute to stun the home crowd."
    },
    {
      id: "res-5",
      competition: "UEFA Champions League · MD 3",
      date: "Thu, Oct 22, 2026",
      venue: "Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 4 },
      awayTeam: { name: "RB Leipzig", logo: "/images/clubs/leipzig.png", score: 1 },
      scorers: "Vini Jr. (18', 65'), Mbappé (51'), Rodrygo (88')",
      highlight: "Four-star European performance led by Vinícius Júnior and Kylian Mbappé."
    },
    {
      id: "res-6",
      competition: "LaLiga EA Sports · Round 9",
      date: "Mon, Oct 19, 2026",
      venue: "Santiago Bernabéu, Madrid",
      homeTeam: { name: "Real Madrid", logo: "/images/clubs/realmadrid.png", score: 4 },
      awayTeam: { name: "Sevilla FC", logo: "/images/clubs/sevilla.png", score: 1 },
      scorers: "Mbappé (15', 73'), Valverde (41'), Vini Jr. (60')",
      highlight: "Valverde's 30-yard thunderbolt and a Mbappé brace spark a rampant home win."
    }
  ]
};
