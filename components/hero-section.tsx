"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight, Wrench, Shield, Award } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Ohjelmoinnit Alkaen 320€",
      subtitle: "Joustava rahoitus",
      description:
        "Ohjelmoinnit luotettavasti ja ammattitaidolla.",
      image: "/moottori.webp",
      objectPosition: "center center",
      overlayOpacity: "0.50",
      cta: "Varaa aika",
      featureIcon: Wrench,
      featureTitle: "Ohjelmointierikoisosaaminen",
      featureDescription: "Huollot, ohjelmoinnit ja performance-ratkaisut kokemuksella.",
    },
    {
      title: "Huollot",
      subtitle: "Maaraaikaishuollot alk. 499€",
      description:
        "Meillä on vuosien kokemus autokorjauksesta. Tarjoamme kattavat korjaus- ja huoltopalvelut kaikille automerkeille.",
      image: "/bmw.hero.webp",
      objectPosition: "center 85%",
      overlayOpacity: "0.35",
      cta: "Katso huollot",
      featureIcon: Shield,
      featureTitle: "3 vuoden varaosatakuu",
      featureDescription: "Mekonomenin laadukkaat varaosat ja uuden auton takuu säilyy.",
    },
    {
      title: "Pakoputkistot",
      subtitle: "Tyolle ja varaosille",
      description:
        "Teemme custom putkistot ja muutkin hitsaus ja korin muutos työt ammattitaidolla ja tyylillä.",
      image: "/pipes.webp",
      objectPosition: "center center",
      overlayOpacity: "0.50",
      cta: "Lue lisaa",
      featureIcon: Award,
      featureTitle: "Putkistot ja hitsaus",
      featureDescription: "Custom-putkistot ja hitsaustyöt ammattitaidolla.",
    },
  ]

  const handleCTAClick = (_cta: string) => {}

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
            <div className="absolute inset-0 z-10" style={{ backgroundColor: `rgba(0,0,0,${slide.overlayOpacity})` }}></div>
            <div className="absolute inset-x-0 bottom-0 h-2/5 z-10 bg-gradient-to-t from-black to-transparent"></div>
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" style={{ objectPosition: slide.objectPosition }} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-end md:items-center">
        <div className="container mx-auto px-4 pb-28 md:pb-0">
          <div className="max-w-4xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ display: index === currentSlide ? "block" : "none" }}
              >
                <h1 className={`font-display ${index === 0 ? "text-5xl md:text-6xl lg:text-7xl" : "text-5xl md:text-7xl lg:text-8xl"} font-bold text-white mb-6 tracking-tight uppercase animate-slide-up`}>
                  {slide.title}
                </h1>
                <p className="text-lg text-white/60 mb-6 max-w-xl leading-relaxed font-light animate-slide-up-delay">
                  {slide.description}
                </p>
                <div className="flex items-start gap-3 mb-8 animate-slide-up-delay">
                  <slide.featureIcon className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-sm font-semibold text-white uppercase tracking-wide">{slide.featureTitle}</p>
                    <p className="text-sm text-white/50">{slide.featureDescription}</p>
                  </div>
                </div>
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
                    onClick={() => {}}
                  >
                    Ota yhteytta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Opening Hours - fixed overlay, independent of slide content so it never changes/reloads on slide switch */}
      <div className="absolute bottom-6 inset-x-0 z-20 pointer-events-none">
        <div className="container mx-auto px-4">
          <p className="text-white/60 text-xs sm:text-sm tracking-widest uppercase font-light">
            <span>MA - PE 08:00 - 17:00</span>
            <span className="ml-6">LA - SU KIINNI</span>
          </p>
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
