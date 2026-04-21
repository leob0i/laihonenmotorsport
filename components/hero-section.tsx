"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "3kk Koroton Maksuaika",
      subtitle: "Joustava rahoitus autohuoltoosi",
      description:
        "Tarjoamme 3 kuukauden korottoman maksuajan kaikille huolto- ja korjaustoimenpiteille. Maksa omaan tahtiisi ilman ylimaaraisia kuluja.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
      cta: "Varaa aika",
    },
    {
      title: "BMW & Mercedes-Benz Maaraaikaishuollot",
      subtitle: "Alk. 499€",
      description:
        "Premium-merkkien maaraaikaishuollot ammattitaidolla ja alkuperaisosilla. Kaikki huollot sisaltavat perusteellisen tarkastuksen ja huoltoraportin.",
      image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
      cta: "Katso huollot",
    },
    {
      title: "2 Vuoden Takuu Tyolle",
      subtitle: "Varaosille pidempi valmistajan mukaan",
      description:
        "Kaikelle tekemällemme työlle 2 vuoden takuu. Varaosille valmistajan mukainen takuu, joka voi olla jopa 3-5 vuotta osasta riippuen.",
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
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-blue-600/90 z-10"></div>
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
                <div className="text-emerald-300 text-lg font-semibold mb-2 animate-fade-in">{slide.subtitle}</div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                  {slide.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed animate-slide-up-delay">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up-delay-2">
                  <Button
                    size="lg"
                    className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8"
                    onClick={() => handleCTAClick(slide.cta)}
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-white hover:text-emerald-600 font-semibold px-8"
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

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  )
}
