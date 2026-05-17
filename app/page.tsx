import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FocusAreas from "@/components/focus-areas"
import MaaraaikaishuollotSection from "@/components/maaraaikaishuollot-section"
import StatsSection from "@/components/stats-section"
import AnimateOnScroll from "@/components/animate-on-scroll"
// import NewsSection from "@/components/news-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AnimateOnScroll><AboutSection /></AnimateOnScroll>
      <AnimateOnScroll><FocusAreas /></AnimateOnScroll>
      <AnimateOnScroll><MaaraaikaishuollotSection /></AnimateOnScroll>
      <AnimateOnScroll><StatsSection /></AnimateOnScroll>
      {/* <NewsSection /> */}
    </main>
  )
}
