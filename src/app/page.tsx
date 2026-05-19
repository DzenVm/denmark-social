import SiteHeader from "@/components/SiteHeader";
import LandingHero from "@/components/LandingHero";
import GameGrid from "@/components/GameGrid";
import ContentSection from "@/components/ContentSection";
import GamblingAwareness from "@/components/GamblingAwareness";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <LandingHero />
        <GameGrid />
        <ContentSection />
        <GamblingAwareness />
      </main>
      <SiteFooter />
    </>
  );
}
