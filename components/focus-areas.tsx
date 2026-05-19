"use client"

import { Button } from "@/components/ui/button"
import { Wrench, Car, Settings, Gauge, Wind, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function FocusAreas() {
  const areas = [
    {
      icon: Wrench,
      title: "Huollot",
      description: "Erikoisosaamisemme on BMW-merkin huolto, mutta palvelemme ammattitaidolla kaikkia automerkkejä. Käytämme ainoastaan laadukkaita alkuperäis- tai vastaavia varaosia, jotka säilyttävät valmistajan takuun.",
      image: "/huollot.webp",
      href: "/palvelut",
    },
    {
      icon: Car,
      title: "Korjaukset ja vianhaku",
      description: "Kattavat korjaukset ja vianhaku. Käytämme kaikissa töissämme vain laadukkaita varaosia varmistaaksemme autosi luotettavuuden ja pitkän käyttöiän.",
      image: "/bmw.tumma.korjaamo.jpeg",
      href: "/palvelut",
    },
    {
       icon: Gauge,
      title: "ECU- & vaihteisto-ohjelmoinnit",
      description: "Ohjelmoinnit erityisesti BMW:lle ja Xhp vaihteistoille. Olemme Geevoiman virallinen jälleenmyyjä ja toteutamme myös yksilöllisen ohjelmoinnin.",
      image: "/ecutuning.jpg",
      href: "/palvelut",
    },
    {
      icon: Wind,
      title: "Pakoputkisto",
      description: "Alkuperäis-, custom- ja performanceputkistot sekä hitsaustyöt laadukkaasti ja näyttävästi. ",
      image: "/putket.jpg",
      href: "/palvelut",
    },
  ]

  return (
    <section className="pb-24 pt-0 bg-background">
      <div className="container mx-auto px-4">
<div className="grid md:grid-cols-2 gap-6 mb-12">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative px-8 pt-8 pb-5 border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden min-h-[280px] flex flex-col justify-end"
            >
              <img src={area.image} alt={area.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-colors duration-500"></div>
              <div className="relative z-10">
                <area.icon className="w-12 h-12 text-primary mb-8" strokeWidth={1.5} />
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 uppercase tracking-wide">{area.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{area.description}</p>
                <div className="flex justify-end">
                  <Link href={area.href} onClick={(e) => e.preventDefault()}>
                    <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-black text-xs tracking-widest uppercase px-6 py-2">
                      Lue lisää
                      <ArrowRight className="w-3 h-3 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-10 border border-primary/30 overflow-hidden">
          <img src="/rengas.webp" alt="Palvelut" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Wrench className="w-12 h-12 text-primary" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground uppercase tracking-wide">Rengastyöt ja rengashotelli</h3>
                <p className="text-muted-foreground text-sm mt-1">Väännämme haastavimmatkin kumit paikoilleen naarmuja jättämättä. Myös kausivaihdot ja rengashotelli.</p>
              </div>
            </div>
            <Link href="/palvelut" onClick={(e) => e.preventDefault()}>
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
