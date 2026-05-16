"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Wind, 
  Shield,
  CheckCircle2,
  Wrench,
  Volume2
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Pakoputken korjaus",
    price: "alk. 89 €",
    description: "Yksittäisen vuodon tai halkeaman korjaus hitsaamalla.",
  },
  {
    name: "Äänenvaimennin",
    price: "alk. 149 €",
    description: "Äänenvaimentimen vaihto alkuperäiseen tai vastaavaan.",
  },
  {
    name: "Katalysaattori",
    price: "alk. 399 €",
    description: "Katalysaattorin vaihto ja asennus.",
  },
  {
    name: "Täysi pakoputkisto",
    price: "alk. 599 €",
    description: "Koko pakoputkiston uusinta kerralla.",
  },
]

const features = [
  {
    icon: Wind,
    title: "Alkuperäisosat",
    description: "Käytämme laadukkaita alkuperäisiä tai OEM-osia.",
  },
  {
    icon: Shield,
    title: "2v takuu",
    description: "Kaikelle työlle ja osille 2 vuoden takuu.",
  },
  {
    icon: Volume2,
    title: "Äänentaso",
    description: "Pidämme huolen laillisesta äänentasosta.",
  },
  {
    icon: Wrench,
    title: "Nopea palvelu",
    description: "Useimmat työt valmiina saman päivän aikana.",
  },
]

export default function PakoputkistotPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=1080&fit=crop"
              alt="Pakoputkistot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Wind className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Pakoputkistopalvelut</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Pakoputkistot
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Pakoputkistojen korjaus, vaihto ja huolto. 
                Hoidamme kaikki merkit ja mallit ammattitaidolla.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Pyydä tarjous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "tel:+358401234567"}
                >
                  Soita meille
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-900/50 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Pakoputkistopalvelut</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kattavat pakoputkistopalvelut kaikkiin autoihin
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-900/50 border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                        {service.price}
                      </p>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                    <Button
                      className="w-full bg-gray-800 hover:bg-emerald-600 text-white transition-colors"
                      onClick={() => window.location.href = "/contact"}
                    >
                      Kysy lisää
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Mitä teemme?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Pakoputkiston tarkastus",
                "Vuotojen paikannus ja korjaus",
                "Äänenvaimentimien vaihto",
                "Katalysaattorien vaihto",
                "Hiukkassuodattimien huolto",
                "Pakoputkiston hitsaus",
                "Kiinnikkeiden ja kannakkeiden vaihto",
                "Pakosarjojen korjaus",
                "Päästömittaukset",
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
              Pakoputkessa vikaa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä niin selvitämme tilanteen ja annamme tarjouksen.
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
