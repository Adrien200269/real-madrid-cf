import { NextResponse } from "next/server";
import { getMatches } from "@/lib/footballApi";

export async function GET() {
  const matches = await getMatches();
  return NextResponse.json({
    success: true,
    ...matches
  });
}
