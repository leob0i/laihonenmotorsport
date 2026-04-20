import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FocusAreas from "@/components/focus-areas"
import StatsSection from "@/components/stats-section"
import NewsSection from "@/components/news-section"
import PartnersSection from "@/components/partners-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FocusAreas />
      <StatsSection />
      <NewsSection />
      <PartnersSection />
    </main>
  )
}
