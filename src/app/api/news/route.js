import { NextResponse } from "next/server";
import { getNews } from "@/lib/footballApi";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const news = await getNews(category);
  return NextResponse.json({
    success: true,
    total: news.length,
    news
  });
}
