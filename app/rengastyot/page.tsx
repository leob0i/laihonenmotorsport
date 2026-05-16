"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Circle, 
  Shield,
  CheckCircle2,
  Clock,
  Package
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Rengastyö",
    price: "75 €/h",
    description: "Renkaiden vaihto, tasapainotus ja tarkastus.",
  },
  {
    name: "Renkaiden vaihto",
    price: "alk. 40 €",
    description: "Kesä- tai talvirenkaiden vaihto vanteilla.",
  },
  {
    name: "Rengashotelli",
    price: "alk. 49 €/kausi",
    description: "Renkaiden säilytys lämpimässä ja kuivassa tilassa.",
  },
  {
    name: "Uudet renkaat",
    price: "kysy tarjous",
    description: "Laaja valikoima renkaita ja vanteita kauttamme.",
  },
]

const features = [
  {
    icon: Circle,
    title: "Iso valikoima",
    description: "Renkaat ja vanteet kauttamme - suuri valikoima.",
  },
  {
    icon: Shield,
    title: "Takuu",
    description: "Kaikelle työlle 2 vuoden takuu.",
  },
  {
    icon: Clock,
    title: "Nopea palvelu",
    description: "Rengastyöt usein valmiina saman päivän aikana.",
  },
  {
    icon: Package,
    title: "Rengashotelli",
    description: "Säilytämme renkaasi ammattimaisesti.",
  },
]

export default function RengastyotPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
              alt="Rengastyöt"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Circle className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Rengaspalvelut</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Rengastyöt
              </h1>
              
              <p className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-8">
                75 €/h
              </p>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Rengaspalvelut ammattitaidolla. Iso valikoima renkaita ja vanteita kauttamme.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Varaa aika
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
              <h2 className="text-4xl font-bold text-white mb-4">Rengaspalvelut</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kattavat rengaspalvelut kaikkiin autoihin
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
              <h2 className="text-4xl font-bold text-white mb-4">Rengaspalvelumme</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Renkaiden vaihto",
                "Renkaiden tasapainotus",
                "Renkaiden korjaus",
                "Vannesuoristus",
                "Rengashotelli",
                "Rengasmyynti",
                "Vannemyynti",
                "TPMS-huolto",
                "Nelipyöräsuuntaus",
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
              Tarvitsetko rengaspalvelua?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja varaa aika rengastöihin. Myymme myös renkaita ja vanteita.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 h-14 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Varaa aika
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
