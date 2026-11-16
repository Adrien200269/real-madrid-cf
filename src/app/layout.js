import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MatchTicker from "@/components/MatchTicker";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Real Madrid CF | Official Website",
  description: "Official Website with news, photos, videos, player profiles, ticket sales, live match stats and honors of Real Madrid.",
  keywords: ["Real Madrid", "Hala Madrid", "Santiago Bernabéu", "Champions League", "Mbappé", "Vinicius", "Bellingham", "La Liga"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#F3F5F8] text-[#0F2145] antialiased">
        <MatchTicker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
