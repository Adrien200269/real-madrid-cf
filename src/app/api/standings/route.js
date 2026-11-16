import { NextResponse } from "next/server";
import { getStandings } from "@/lib/footballApi";

export async function GET() {
  const standings = await getStandings();
  return NextResponse.json({
    success: true,
    ...standings
  });
}
