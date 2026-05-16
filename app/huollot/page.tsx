"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Wrench, 
  Shield,
  CheckCircle2,
  Clock,
  Award
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Öljynvaihto",
    price: "alk. 79 €",
    description: "Moottoriöljyn ja suodattimen vaihto laadukkailla osilla.",
  },
  {
    name: "Pieni huolto",
    price: "alk. 199 €",
    description: "Öljynvaihto, suodattimet ja perustarkastukset.",
  },
  {
    name: "Keskisuuri huolto",
    price: "alk. 349 €",
    description: "Laajempi huolto kaikilla suodattimilla ja nesteillä.",
  },
  {
    name: "Suuri huolto",
    price: "alk. 549 €",
    description: "Täydellinen huoltopaketti vaativaan käyttöön.",
  },
]

const features = [
  {
    icon: Wrench,
    title: "Kaikki merkit",
    description: "Huollamme kaikki automerkit ja mallit.",
  },
  {
    icon: Shield,
    title: "2v takuu",
    description: "Kaikelle työllemme 2 vuoden takuu.",
  },
  {
    icon: Clock,
    title: "Nopea palvelu",
    description: "Useimmat huollot valmiina saman päivän aikana.",
  },
  {
    icon: Award,
    title: "Laadukkaat osat",
    description: "Käytämme vain laadukkaita varaosia.",
  },
]

export default function HuollotPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&h=1080&fit=crop"
              alt="Huollot"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Wrench className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Huoltopalvelut</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Huollot
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Ammattitaitoiset huoltopalvelut kaikkiin autoihin. 
                Pidämme autosi kunnossa ja turvallisena.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-semibold px-8 h-14 text-lg"
                  onClick={() => window.location.href = "/contact"}
                >
                  Varaa huoltoaika
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
              <h2 className="text-4xl font-bold text-white mb-4">Huoltopaketit</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Valitse tarpeisiisi sopiva huoltopaketti
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
                      Varaa aika
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Huollon sisältö</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Moottoriöljyn vaihto",
                "Öljynsuodattimen vaihto",
                "Ilmansuodattimen tarkastus/vaihto",
                "Raitisilmasuodattimen vaihto",
                "Jarrujen tarkastus",
                "Renkaiden tarkastus",
                "Nesteiden tarkastus ja täyttö",
                "Valojen tarkastus",
                "Pyyhkijöiden tarkastus",
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
              Varaa huoltoaika nyt
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja sovi sopiva huoltoaika. Pidämme autosi kunnossa.
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
