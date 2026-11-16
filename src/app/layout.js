import "./globals.css";
import Navbar from "@/components/Navbar";
import MatchTicker from "@/components/MatchTicker";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Real Madrid C.F. | Official Club Portal - Reyes de Europa",
  description: "Official digital portal of Real Madrid Club de Fútbol. Explore the first team squad, live match stats, 15 UEFA Champions League titles, and latest club news.",
  keywords: ["Real Madrid", "Hala Madrid", "Champions League", "Mbappé", "Vinicius", "Bellingham", "Santiago Bernabéu", "La Liga"]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#060a17] text-slate-100">
        <MatchTicker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
