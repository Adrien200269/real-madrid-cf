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
      logo: "/images/clubs/realmadrid.png",
      score: 3
    },
    awayTeam: {
      name: "PSV Eindhoven",
      shortName: "PSV",
      logo: "/images/clubs/psv.png",
      score: 1
    },
    minute: "78'",
    status: "LIVE · Second Half",
    scorers: [
      { minute: "24'", player: "Kylian Mbappé", team: "RMA", assist: "Trent Alexander-Arnold" },
      { minute: "41'", player: "Luuk de Jong", team: "PSV", assist: "Joey Veerman" },
      { minute: "62'", player: "Vinícius Júnior", team: "RMA", assist: "Jude Bellingham" },
      { minute: "75'", player: "Arda Güler", team: "RMA", assist: "Kylian Mbappé" }
    ],
    stats: {
      possession: { home: 64, away: 36 },
      shots: { home: 19, away: 6 },
      shotsOnTarget: { home: 10, away: 2 },
      corners: { home: 8, away: 2 },
      fouls: { home: 7, away: 12 },
      yellowCards: { home: 1, away: 3 },
      expectedGoals: { home: 3.12, away: 0.74 }
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
      { min: "75'", type: "goal", text: "⚽ GOAAAAL! Arda Güler curls a magical left-footed strike into the top corner! (3-1)" },
      { min: "70'", type: "substitution", text: "🔄 Substitution: Arda Güler and Endrick replace Rodrygo and Tchouaméni." },
      { min: "62'", type: "goal", text: "⚽ GOAAAAL! Vinícius Jr. cuts inside from the left wing and slots home! (2-1)" },
      { min: "55'", type: "yellow", text: "🟨 Yellow Card: Boscagli (PSV) booked for pulling down Bellingham." },
      { min: "41'", type: "goal", text: "⚽ Goal PSV: Luuk de Jong heads in from a corner kick. (1-1)" },
      { min: "45+2'", type: "whistle", text: "⏱️ Half Time at the Santiago Bernabéu. Real Madrid 1 - 1 PSV." },
      { min: "24'", type: "goal", text: "⚽ GOAAAAL! Kylian Mbappé fires in after a pinpoint cross from Trent Alexander-Arnold! (1-0)" }
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
      homeTeam: { name: "AEK Athens", logo: "/images/clubs/realmadrid.png", score: 2 },
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
      awayTeam: { name: "RB Leipzig", logo: "/images/clubs/realmadrid.png", score: 1 },
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
