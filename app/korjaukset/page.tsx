"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Search, 
  Shield,
  CheckCircle2,
  Cpu,
  AlertTriangle,
  Settings
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Vianhaku",
    price: "alk. 89 €",
    description: "Perusteellinen vianhaku modernilla diagnostiikkalaitteistolla.",
  },
  {
    name: "Sähkövikojen korjaus",
    price: "alk. 99 €/h",
    description: "Sähköjärjestelmien vianetsintä ja korjaus.",
  },
  {
    name: "Moottorin korjaus",
    price: "tarjouksella",
    description: "Moottoriviat ja suuremmat mekaaniset korjaukset.",
  },
  {
    name: "Vaihteiston korjaus",
    price: "tarjouksella",
    description: "Vaihteisto- ja voimansiirtoviat.",
  },
]

const features = [
  {
    icon: Cpu,
    title: "Moderni diagnostiikka",
    description: "Merkkikohtaiset diagnostiikkalaitteet.",
  },
  {
    icon: Shield,
    title: "2v takuu",
    description: "Kaikelle korjaustyölle 2 vuoden takuu.",
  },
  {
    icon: Search,
    title: "Tarkka vianhaku",
    description: "Selvitämme vian syyn ennen korjausta.",
  },
  {
    icon: AlertTriangle,
    title: "Reilu hinnoittelu",
    description: "Kustannusarvio aina ennen työn aloitusta.",
  },
]

export default function KorjauksetPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=1920&h=1080&fit=crop"
              alt="Korjaukset ja vianhaku"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Search className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Korjaukset ja vianhaku</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Korjaukset ja Vianhaku
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Ammattimainen vianhaku ja korjauspalvelut. 
                Selvitämme vian syyn ja korjaamme sen kestävästi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Pyydä arvio
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
              <h2 className="text-4xl font-bold text-white mb-4">Korjauspalvelut</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kattavat korjauspalvelut kaikkiin vikoihin
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

        {/* What We Fix */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Mitä korjaamme?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Moottoriviat",
                "Vaihteistoviat",
                "Sähköviat",
                "Jousitus ja alustaviat",
                "Jarrujärjestelmän viat",
                "Jäähdytysjärjestelmän viat",
                "Ohjausjärjestelmän viat",
                "Ilmastointiviat",
                "Vikavaloviat",
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
              Autossa vikaa?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä niin selvitämme vian ja annamme kustannusarvion.
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
