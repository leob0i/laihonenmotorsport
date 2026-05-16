"use client"

import { Button } from "@/components/ui/button"
import { Wrench, Car, Settings, Gauge, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FocusAreas() {
  const areas = [
    {
      icon: Wrench,
      title: "Maaraaikaishuollot",
      description: "BMW ja Mercedes-Benz huollot alk. 499€",
      stats: "Alk. 499€",
      image: "/huollot.webp",
    },
    {
      icon: Car,
      title: "Korjaukset",
      description: "Kaikelle tyolle 2 vuoden takuu",
      stats: "2v Takuu",
      image: "/bmw.tumma.korjaamo.jpeg",
    },
    {
      icon: Settings,
      title: "Varaosat",
      description: "Alkuperaiset ja laadukkaat varaosat",
      stats: "Alkuperais",
      image: "/maantie.nmw.webp",
    },
    {
      icon: Gauge,
      title: "Diagnostiikka",
      description: "Modernit diagnostiikkalaitteet",
      stats: "Nykyaikainen",
      image: "/ecutuning.jpg",
    },
  ]

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-primary text-xs tracking-ultra-wide uppercase font-medium">Palvelut</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 uppercase tracking-tight">
            Mita tarjoamme
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative p-8 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <area.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  <span className="text-xs tracking-wider uppercase text-primary border border-primary/30 px-3 py-1">{area.stats}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 uppercase tracking-wide">{area.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-10 border border-primary/30 overflow-hidden">
          <img src="/moottori.webp" alt="Palvelut" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Wrench className="w-12 h-12 text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">Kaikki palvelut</h3>
                <p className="text-muted-foreground text-sm mt-1">Katso kattava palveluvalikoimamme</p>
              </div>
            </div>
            <Link href="/palvelut">
              <Button className="bg-primary hover:bg-primary-600 text-black font-semibold px-8 py-6 text-xs tracking-widest uppercase">
                Katso palvelut
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
