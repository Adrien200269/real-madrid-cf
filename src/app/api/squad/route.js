import { NextResponse } from "next/server";
import { getSquad } from "@/lib/footballApi";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const position = searchParams.get("position");
  const search = searchParams.get("search");

  const squad = await getSquad(position, search);

  return NextResponse.json({
    success: true,
    total: squad.length,
    squad
  });
}
