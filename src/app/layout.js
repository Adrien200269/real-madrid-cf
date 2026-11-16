import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MatchTicker from "@/components/MatchTicker";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Real Madrid C.F. | Reyes de Europa — Official Classic Portal",
  description: "The royal digital portal of Real Madrid Club de Fútbol. Explore the first team squad, live match stats, 15 UEFA Champions League titles, and 122 years of royal legacy.",
  keywords: ["Real Madrid", "Los Blancos", "Hala Madrid", "Champions League", "Mbappé", "Vinicius", "Bellingham", "Santiago Bernabéu", "La Liga"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white text-[#0a1428] selection:bg-[#faecd0] selection:text-[#7a5813]">
        <MatchTicker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
