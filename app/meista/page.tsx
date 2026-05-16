"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Users, 
  Shield,
  CheckCircle2,
  Award,
  Clock,
  Heart
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const values = [
  {
    icon: Shield,
    title: "Luotettavuus",
    description: "2 vuoden takuu kaikelle työllemme. Pidämme lupauksemme.",
  },
  {
    icon: Award,
    title: "Ammattitaito",
    description: "Kokeneet mekaanikomme ovat erikoistuneet premium-merkkeihin.",
  },
  {
    icon: Clock,
    title: "Nopeus",
    description: "Useimmat työt valmiina saman päivän aikana.",
  },
  {
    icon: Heart,
    title: "Asiakaspalvelu",
    description: "Rehellinen ja avoin kommunikaatio asiakkaidemme kanssa.",
  },
]

const team = [
  {
    name: "Leon",
    role: "Perustaja & Päämekaanikko",
    description: "Yli 20 vuoden kokemus premium-merkkien huollosta ja korjauksesta.",
  },
  {
    name: "Mikko",
    role: "Diagnostiikkaosaaja",
    description: "Erikoistunut sähkövikoihin ja moderniin diagnostiikkaan.",
  },
  {
    name: "Janne",
    role: "Mekaanikko",
    description: "BMW ja Mercedes-Benz -spesialisti.",
  },
]

export default function MeistaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1920&h=1080&fit=crop"
              alt="Leon Korjaamo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Users className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Tietoa meistä</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Leon Korjaamo
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Olemme premium-autojen erikoiskorjaamo, joka tarjoaa huippuluokan 
                huolto- ja korjauspalveluita. Luotettavuus, ammattitaito ja asiakastyytyväisyys 
                ovat toimintamme kulmakiviä.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Ota yhteyttä
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/tyomme"}
                >
                  Katso työmme
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gray-900/50 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Tarinamme</h2>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Leon Korjaamo perustettiin intohimosta autoja kohtaan ja halusta tarjota 
                  asiakkaille parasta mahdollista palvelua. Olemme erikoistuneet 
                  premium-merkkeihin kuten BMW ja Mercedes-Benz, mutta huollamme kaikki merkit.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Meillä on käytössä alan uusimmat diagnostiikkalaitteet ja merkkikohtaiset 
                  erikoistyökalut. Mekaanikkomme ovat koulutettuja ja kokeneita ammattilaisia, 
                  jotka pitävät osaamisensa ajan tasalla jatkuvalla koulutuksella.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Tarjoamme 2 vuoden takuun kaikelle työllemme ja 3 kuukauden korottoman 
                  maksuajan. Meille asiakastyytyväisyys on tärkeintä.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Tiimimme</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kokeneet ammattilaiset palveluksessasi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900/50 border-gray-800"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-emerald-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Miksi Leon Korjaamo?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "2 vuoden takuu kaikelle työlle",
                "3 kuukauden koroton maksuaika",
                "Premium-merkkien erikoisosaaminen",
                "Alkuperäiset ja OEM-osat",
                "Moderni diagnostiikka",
                "Nopea ja joustava palvelu",
                "Reilu ja läpinäkyvä hinnoittelu",
                "Ammattitaitoinen henkilökunta",
                "Tyytyväisyystakuu",
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-r from-emerald-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tule tutustumaan!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro miten voimme auttaa. Olemme täällä sinua varten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Ota yhteyttä
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
