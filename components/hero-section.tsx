"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "3kk Koroton Maksuaika",
      subtitle: "Joustava rahoitus",
      description:
        "Tarjoamme 3 kuukauden korottoman maksuajan kaikille huolto- ja korjaustoimenpiteille.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      cta: "Varaa aika",
    },
    {
      title: "BMW & Mercedes-Benz",
      subtitle: "Maaraaikaishuollot alk. 499€",
      description:
        "Premium-merkkien maaraaikaishuollot ammattitaidolla ja alkuperaisosilla.",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
      cta: "Katso huollot",
    },
    {
      title: "2 Vuoden Takuu",
      subtitle: "Tyolle ja varaosille",
      description:
        "Kaikelle tekemällemme työlle 2 vuoden takuu. Varaosille valmistajan mukainen takuu.",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop",
      cta: "Lue lisaa",
    },
  ]

  const handleCTAClick = (cta: string) => {
    switch (cta) {
      case "Varaa aika":
        window.location.href = "/contact"
        break
      case "Katso huollot":
        window.location.href = "/premium-huollot"
        break
      case "Lue lisaa":
        window.location.href = "/palvelut"
        break
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/80 z-10"></div>
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <div className="text-primary font-display text-sm tracking-ultra-wide uppercase mb-4 animate-fade-in">
                  {slide.subtitle}
                </div>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight uppercase animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed font-light animate-slide-up-delay">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary-600 text-black font-semibold px-10 py-6 text-sm tracking-wider uppercase"
                    onClick={() => handleCTAClick(slide.cta)}
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:border-white font-medium px-10 py-6 text-sm tracking-wider uppercase"
                    onClick={() => window.location.href = "/contact"}
                  >
                    Ota yhteytta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-0.5 transition-all duration-500 ${
                index === currentSlide ? "bg-primary w-12" : "bg-white/30 hover:bg-white/50 w-6"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 text-white/30 hover:text-white p-2 transition-colors duration-300"
      >
        <ChevronLeft className="w-8 h-8" strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 text-white/30 hover:text-white p-2 transition-colors duration-300"
      >
        <ChevronRight className="w-8 h-8" strokeWidth={1} />
      </button>

      {/* Side Accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/0 via-primary to-primary/0 z-30"></div>
    </section>
  )
}
