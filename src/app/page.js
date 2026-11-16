import HeroSection from "@/components/HeroSection";
import InteractiveMatchCenter from "@/components/InteractiveMatchCenter";
import SquadSection from "@/components/SquadSection";
import StandingsSection from "@/components/StandingsSection";
import TrophyRoom from "@/components/TrophyRoom";
import BernabeuShowcase from "@/components/BernabeuShowcase";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <InteractiveMatchCenter />
      <SquadSection initialLimit={8} />
      <TrophyRoom />
      <StandingsSection />
      <BernabeuShowcase />
      <NewsSection initialLimit={6} />
    </div>
  );
}
