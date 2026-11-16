import { squadData } from "@/data/squad";
import { matchCenterData } from "@/data/matches";
import { standingsData } from "@/data/standings";
import { trophiesData } from "@/data/trophies";
import { newsData } from "@/data/news";

const REAL_MADRID_TEAM_ID = 86; // Football-Data.org team ID for Real Madrid

/**
 * Service to retrieve Real Madrid football data.
 * Supports live football-data.org API when FOOTBALL_DATA_API_KEY is configured in env,
 * and seamlessly provides rich high-fidelity local mock data by default.
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
          liveMatch: matchCenterData.liveMatch,
          upcomingFixtures: liveData.matches?.filter(m => m.status === "SCHEDULED" || m.status === "TIMED").slice(0, 5) || matchCenterData.upcomingFixtures,
          recentResults: liveData.matches?.filter(m => m.status === "FINISHED").slice(0, 5) || matchCenterData.recentResults
        };
      }
    } catch (err) {
      console.warn("Live API fetch error, falling back to local dataset:", err.message);
    }
  }

  return {
    source: "curated-dataset",
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
            season: data.season?.startDate?.substring(0, 4) || "2026 / 2027",
            competition: data.competition?.name || "La Liga",
            table: totalTable.slice(0, 10).map((row) => ({
              rank: row.position,
              team: row.team.name,
              logo: row.team.name.includes("Real Madrid") ? "👑" : "⚽",
              played: row.playedGames,
              won: row.won,
              drawn: row.draw,
              lost: row.lost,
              gf: row.goalsFor,
              ga: row.goalsAgainst,
              gd: row.goalDifference > 0 ? `+${row.goalDifference}` : `${row.goalDifference}`,
              points: row.points,
              form: (row.form || "W,W,D,W,W").split(","),
              highlight: row.team.name.includes("Real Madrid")
            })),
            topScorers: standingsData.topScorers
          };
        }
      }
    } catch (err) {
      console.warn("Live standings fetch error, falling back to local dataset:", err.message);
    }
  }

  return {
    source: "curated-dataset",
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
