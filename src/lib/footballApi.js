import { squadData } from "@/data/squad";
import { matchCenterData } from "@/data/matches";
import { standingsData } from "@/data/standings";
import { trophiesData } from "@/data/trophies";
import { newsData } from "@/data/news";

const REAL_MADRID_TEAM_ID = 86; // Football-Data.org team ID for Real Madrid

const CLUB_LOGO_MAP = {
  "Barcelona": "/images/clubs/barcelona.png",
  "Real Madrid": "/images/clubs/realmadrid.png",
  "Atlético": "/images/clubs/atletico.png",
  "Betis": "/images/clubs/betis.png",
  "Sociedad": "/images/clubs/sociedad.png",
  "Sevilla": "/images/clubs/sevilla.png",
  "Athletic": "/images/clubs/athletic.png",
  "Villarreal": "/images/clubs/villarreal.png",
  "Deportivo": "/images/clubs/deportivo.png",
  "Racing": "/images/clubs/racing.png",
  "Celta": "/images/clubs/celta.png",
  "Alavés": "/images/clubs/alaves.png",
  "Espanyol": "/images/clubs/espanyol.png",
  "Rayo": "/images/clubs/rayo.png",
  "Getafe": "/images/clubs/getafe.png",
  "Osasuna": "/images/clubs/osasuna.png",
  "Levante": "/images/clubs/levante.png",
  "Elche": "/images/clubs/elche.png",
  "Valencia": "/images/clubs/valencia.png",
  "Málaga": "/images/clubs/malaga.png"
};

function getClubLogo(teamName) {
  for (const [key, path] of Object.entries(CLUB_LOGO_MAP)) {
    if (teamName.toLowerCase().includes(key.toLowerCase())) {
      return path;
    }
  }
  return "/images/clubs/realmadrid.png";
}

/**
 * Service to retrieve Real Madrid football data.
 * Powered by verified FotMob and official club datasets.
 */
export async function getSquad(positionFilter = null, searchQuery = null) {
  let players = [...squadData];

  if (positionFilter && positionFilter !== "all") {
    players = players.filter(
      (p) => p.category.toLowerCase() === positionFilter.toLowerCase()
    );
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    players = players.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.position.toLowerCase().includes(q) ||
        p.nationality.toLowerCase().includes(q) ||
        p.nickname.toLowerCase().includes(q)
    );
  }

  return players;
}

export async function getMatches() {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch(
        `https://api.football-data.org/v4/teams/${REAL_MADRID_TEAM_ID}/matches?limit=10`,
        {
          headers: { "X-Auth-Token": apiKey },
          next: { revalidate: 300 } // 5 minutes cache
        }
      );
      if (res.ok) {
        const liveData = await res.json();
        return {
          source: "live-api",
          featuredMatch: matchCenterData.featuredMatch,
          upcomingFixtures: liveData.matches?.filter(m => m.status === "SCHEDULED" || m.status === "TIMED").slice(0, 6) || matchCenterData.upcomingFixtures,
          recentResults: liveData.matches?.filter(m => m.status === "FINISHED").slice(0, 6) || matchCenterData.recentResults
        };
      }
    } catch (err) {
      console.warn("Live API fetch error, falling back to verified dataset:", err.message);
    }
  }

  return {
    source: "verified-fotmob-dataset",
    ...matchCenterData
  };
}

export async function getStandings() {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch(
        `https://api.football-data.org/v4/competitions/PD/standings`,
        {
          headers: { "X-Auth-Token": apiKey },
          next: { revalidate: 600 }
        }
      );
      if (res.ok) {
        const data = await res.json();
        const totalTable = data.standings?.[0]?.table;
        if (totalTable) {
          return {
            source: "live-api",
            season: data.season?.startDate?.substring(0, 4) ? `${data.season.startDate.substring(0, 4)} / ${parseInt(data.season.startDate.substring(0, 4)) + 1}` : "2026 / 2027",
            competition: data.competition?.name || "LaLiga EA Sports",
            table: totalTable.map((row) => ({
              rank: row.position,
              team: row.team.name,
              logo: getClubLogo(row.team.name),
              played: row.playedGames,
              won: row.won,
              drawn: row.draw,
              lost: row.lost,
              gf: row.goalsFor,
              ga: row.goalsAgainst,
              gd: row.goalDifference > 0 ? `+${row.goalDifference}` : `${row.goalDifference}`,
              points: row.points,
              form: (row.form || "W,W,W,W,W").split(","),
              highlight: row.team.name.includes("Real Madrid")
            })),
            topScorers: standingsData.topScorers,
            topAssists: standingsData.topAssists,
            advancedStats: standingsData.advancedStats
          };
        }
      }
    } catch (err) {
      console.warn("Live standings fetch error, falling back to verified dataset:", err.message);
    }
  }

  return {
    source: "verified-fotmob-dataset",
    ...standingsData
  };
}

export async function getTrophies() {
  return trophiesData;
}

export async function getNews(category = null) {
  let list = [...newsData];
  if (category && category !== "all") {
    list = list.filter((n) => n.category.toLowerCase() === category.toLowerCase());
  }
  return list;
}
