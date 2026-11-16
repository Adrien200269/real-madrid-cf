import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MatchTicker from "@/components/MatchTicker";
import Footer from "@/components/Footer";
import { ThemeLanguageProvider } from "@/context/ThemeLanguageContext";

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
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('rm_theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.setAttribute('data-theme', 'light');
                }
                var savedLang = localStorage.getItem('rm_lang');
                if (savedLang) {
                  document.documentElement.setAttribute('lang', savedLang);
                }
              } catch (e) {}
            `
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F3F5F8] text-[#0F2145] antialiased transition-colors duration-200">
        <ThemeLanguageProvider>
          <MatchTicker />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeLanguageProvider>
      </body>
    </html>
  );
}
