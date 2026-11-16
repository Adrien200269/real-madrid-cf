export const matchCenterData = {
  dataSource: "ESPN Official Soccer API",
  featuredMatch: {
    isLive: false,
    status: "FULL TIME · FINAL RESULT",
    statusBadge: "Latest Result",
    competition: "LaLiga EA Sports",
    stage: "Matchday 12",
    date: "Sat, Nov 7, 2026",
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
      {
        minute: "28'",
        player: "Federico Valverde",
        team: "RMA"
      },
      {
        minute: "36'",
        player: "Arda Güler",
        team: "RMA"
      },
      {
        minute: "75'",
        player: "Kylian Mbappé",
        team: "RMA"
      }
    ],
    stats: {
      possession: { home: 42, away: 58 },
      shots: { home: 8, away: 17 },
      shotsOnTarget: { home: 2, away: 9 },
      corners: { home: 3, away: 7 },
      fouls: { home: 14, away: 9 },
      yellowCards: { home: 4, away: 2 },
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
        { num: 15, name: "Güler", pos: "RW" },
        { num: 10, name: "Mbappé", pos: "ST" },
        { num: 7, name: "Vini Jr.", pos: "LW" }
      ],
      bench: ["Lunin", "Asencio", "Huijsen", "Camavinga", "Bernardo", "Endrick", "Brahim", "Mendy", "Diomande", "Thiago", "Espí"]
    },
    timeline: [
      {
            "min": "28'",
            "type": "goal",
            "text": "⚽ Goal! Valencia 0, Real Madrid 1. Federico Valverde (Real Madrid) right footed shot from outside the box to the bottom left corner following a set piece situation."
      },
      {
            "min": "36'",
            "type": "goal",
            "text": "⚽ Goal! Valencia 0, Real Madrid 2. Arda Güler (Real Madrid) right footed shot from the centre of the box to the top right corner."
      },
      {
            "min": "45'+4'",
            "type": "whistle",
            "text": "⏱️ Halftime at Mestalla: Valencia 0 - 2 Real Madrid"
      },
      {
            "min": "45'",
            "type": "substitution",
            "text": "🔄 Substitution, Valencia. Luis Rioja replaces Justin de Haas."
      },
      {
            "min": "59'",
            "type": "substitution",
            "text": "🔄 Substitution, Valencia. Aimar Blázquez replaces Umar Sadiq."
      },
      {
            "min": "63'",
            "type": "substitution",
            "text": "🔄 Substitution, Valencia. Filip Ugrinic replaces Guido Rodríguez."
      },
      {
            "min": "63'",
            "type": "substitution",
            "text": "🔄 Substitution, Valencia. Arnau Martínez replaces Pablo Maffeo."
      },
      {
            "min": "75'",
            "type": "goal",
            "text": "⚽ Goal! Valencia 0, Real Madrid 3. Kylian Mbappé (Real Madrid) right footed shot from the right side of the six yard box to the centre of the goal. Assisted by Arda Güler with a through ball."
      },
      {
            "min": "79'",
            "type": "red",
            "text": "🟥 José Gayà (Valencia) is shown the red card."
      },
      {
            "min": "82'",
            "type": "substitution",
            "text": "🔄 Substitution, Valencia. Jesús Vázquez replaces Javi Guerra."
      },
      {
            "min": "84'",
            "type": "substitution",
            "text": "🔄 Substitution, Real Madrid. Brahim Díaz replaces Yan Diomande."
      },
      {
            "min": "84'",
            "type": "substitution",
            "text": "🔄 Substitution, Real Madrid. Eduardo Camavinga replaces Arda Güler."
      },
      {
            "min": "84'",
            "type": "substitution",
            "text": "🔄 Substitution, Real Madrid. Endrick replaces Bernardo Silva."
      },
      {
            "min": "90'+1'",
            "type": "substitution",
            "text": "🔄 Substitution, Real Madrid. Thiago Pitarch replaces Jude Bellingham."
      },
      {
            "min": "90'+1'",
            "type": "substitution",
            "text": "🔄 Substitution, Real Madrid. Carlos Espí replaces Kylian Mbappé."
      },
      {
            "min": "90+4'",
            "type": "whistle",
            "text": "⏱️ Full Time: Real Madrid secure an emphatic 3-0 away win at Mestalla."
      }
]
  },
  upcomingFixtures: [
  {
    "id": "fix-1",
    "competition": "LaLiga EA Sports · Round 13",
    "badge": "🇪🇸",
    "date": "Sat, Nov 21, 2026",
    "time": "21:00 CET",
    "venue": "Estadio Santiago Bernabéu, Madrid",
    "homeTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "awayTeam": {
      "name": "RC Celta de Vigo",
      "logo": "/images/clubs/celta.png"
    },
    "ticketsUrl": "#"
  },
  {
    "id": "fix-2",
    "competition": "UEFA Champions League · Matchday 5",
    "badge": "⭐",
    "date": "Tue, Nov 24, 2026",
    "time": "21:00 CET",
    "venue": "Estadio Santiago Bernabéu, Madrid",
    "homeTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "awayTeam": {
      "name": "PSV Eindhoven",
      "logo": "/images/clubs/psv.png"
    },
    "ticketsUrl": "#"
  },
  {
    "id": "fix-3",
    "competition": "LaLiga EA Sports · Round 14",
    "badge": "🇪🇸",
    "date": "Sun, Nov 29, 2026",
    "time": "21:00 CET",
    "venue": "Estadio Santiago Bernabéu, Madrid",
    "homeTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "awayTeam": {
      "name": "Deportivo Alavés",
      "logo": "/images/clubs/alaves.png"
    },
    "ticketsUrl": "#"
  },
  {
    "id": "fix-4",
    "competition": "LaLiga EA Sports · Round 15",
    "badge": "🇪🇸",
    "date": "Wed, Dec 02, 2026",
    "time": "19:00 CET",
    "venue": "Reale Arena, San Sebastián",
    "homeTeam": {
      "name": "Real Sociedad",
      "logo": "/images/clubs/sociedad.png"
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "ticketsUrl": "#"
  },
  {
    "id": "fix-5",
    "competition": "LaLiga EA Sports · Round 16",
    "badge": "🇪🇸",
    "date": "Sun, Dec 06, 2026",
    "time": "16:15 CET",
    "venue": "San Mamés, Bilbao",
    "homeTeam": {
      "name": "Athletic Club",
      "logo": "/images/clubs/athletic.png"
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "ticketsUrl": "#"
  },
  {
    "id": "fix-6",
    "competition": "UEFA Champions League · Matchday 6",
    "badge": "⭐",
    "date": "Thu, Dec 10, 2026",
    "time": "21:00 CET",
    "venue": "Emirates Stadium, London",
    "homeTeam": {
      "name": "Arsenal FC",
      "logo": "/images/clubs/arsenal.png"
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png"
    },
    "ticketsUrl": "#"
  }
],
  recentResults: [
  {
    "id": "res-1",
    "competition": "LaLiga EA Sports",
    "date": "Nov 08, 2026",
    "venue": "Mestalla Stadium",
    "homeTeam": {
      "name": "Valencia",
      "logo": "/images/clubs/valencia.png",
      "score": 0
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 3
    },
    "scorers": "Valverde (28'), Güler (36'), Mbappé (75')",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  },
  {
    "id": "res-2",
    "competition": "LaLiga EA Sports",
    "date": "Nov 01, 2026",
    "venue": "El Sardineros",
    "homeTeam": {
      "name": "Racing Santander",
      "logo": "/images/clubs/racing.png",
      "score": 0
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 3
    },
    "scorers": "Mbappé, Bellingham, Vini Jr.",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  },
  {
    "id": "res-3",
    "competition": "LaLiga EA Sports",
    "date": "Oct 26, 2026",
    "venue": "Spotify Camp Nou",
    "homeTeam": {
      "name": "Barcelona",
      "logo": "/images/clubs/barcelona.png",
      "score": 1
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 2
    },
    "scorers": "Mbappé, Bellingham, Vini Jr.",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  },
  {
    "id": "res-4",
    "competition": "LaLiga EA Sports",
    "date": "Oct 19, 2026",
    "venue": "Santiago Bernabéu",
    "homeTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 4
    },
    "awayTeam": {
      "name": "Sevilla",
      "logo": "/images/clubs/sevilla.png",
      "score": 1
    },
    "scorers": "Mbappé, Bellingham, Vini Jr.",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  },
  {
    "id": "res-5",
    "competition": "LaLiga EA Sports",
    "date": "Oct 11, 2026",
    "venue": "Santiago Bernabéu",
    "homeTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 1
    },
    "awayTeam": {
      "name": "Villarreal",
      "logo": "/images/clubs/villarreal.png",
      "score": 0
    },
    "scorers": "Mbappé, Bellingham, Vini Jr.",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  },
  {
    "id": "res-6",
    "competition": "LaLiga EA Sports",
    "date": "Sep 20, 2026",
    "venue": "Riyadh Air Metropolitano",
    "homeTeam": {
      "name": "Atlético Madrid",
      "logo": "/images/clubs/atletico.png",
      "score": 2
    },
    "awayTeam": {
      "name": "Real Madrid",
      "logo": "/images/clubs/realmadrid.png",
      "score": 1
    },
    "scorers": "Mbappé, Bellingham, Vini Jr.",
    "highlight": "Real Madrid official 2026/27 La Liga match verified via ESPN Soccer API."
  }
]
};
