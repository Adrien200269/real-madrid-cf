import { NextResponse } from "next/server";
import { getTrophies } from "@/lib/footballApi";

export async function GET() {
  const trophies = await getTrophies();
  return NextResponse.json({
    success: true,
    ...trophies
  });
}
