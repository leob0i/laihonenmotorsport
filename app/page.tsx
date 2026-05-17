import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FocusAreas from "@/components/focus-areas"
import MaaraaikaishuollotSection from "@/components/maaraaikaishuollot-section"
import StatsSection from "@/components/stats-section"
import NewsSection from "@/components/news-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <FocusAreas />
      <MaaraaikaishuollotSection />
      <StatsSection />
      <NewsSection />
    </main>
  )
}
