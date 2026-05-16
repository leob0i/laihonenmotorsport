"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  ArrowRight, 
  Cpu, 
  Gauge, 
  Zap, 
  Shield,
  CheckCircle2,
  Settings,
  BarChart3
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const services = [
  {
    name: "Moottorin optimointi",
    price: "alk. 399 €",
    description: "Tehon ja väännön optimointi alkuperäistä ohjelmistoa muokkaamalla.",
  },
  {
    name: "AdBlue-ratkaisu",
    price: "alk. 499 €",
    description: "AdBlue-järjestelmän korjaus ja ohjelmointi vikatilanteissa.",
  },
  {
    name: "DPF/FAP-ratkaisu",
    price: "alk. 599 €",
    description: "Hiukkassuodattimen ohjelmointi ja toiminnan optimointi.",
  },
  {
    name: "EGR-ohjelmointi",
    price: "alk. 349 €",
    description: "EGR-venttiilin ohjelmointi ja toiminnan säätö.",
  },
]

const features = [
  {
    icon: Cpu,
    title: "Alkuperäiset työkalut",
    description: "Käytämme vain virallisia ja testattuja ohjelmointilaitteita.",
  },
  {
    icon: Shield,
    title: "Turvallinen prosessi",
    description: "Alkuperäinen ohjelmisto varmuuskopioidaan aina ennen muutoksia.",
  },
  {
    icon: Gauge,
    title: "Testaus dynaamisesti",
    description: "Kaikki muutokset testataan ajossa ennen luovutusta.",
  },
  {
    icon: BarChart3,
    title: "Dokumentoitu työ",
    description: "Saat tarkan raportin tehdyistä muutoksista.",
  },
]

export default function AutonOhjelmointiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-950">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
              alt="Auton ohjelmointi"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 py-32">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-medium">Auton ohjelmointi</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Auton Ohjelmointi
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Ammattimainen auton ohjelmointi ja moottorin optimointi. 
                Paranna ajoneuvosi suorituskykyä ja polttoainetaloutta turvallisesti.
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
              <h2 className="text-4xl font-bold text-white mb-4">Ohjelmointipalvelut</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Tarjoamme laajan valikoiman ohjelmointipalveluita kaikkiin merkkeihin
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
              <h2 className="text-4xl font-bold text-white mb-4">Mitä ohjelmointi sisältää?</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                "Alkuperäisen ohjelmiston varmuuskopiointi",
                "Moottorin diagnostiikka ennen työtä",
                "Räätälöity ohjelmointi ajoneuvoon",
                "Tehon ja väännön optimointi",
                "Polttoainetalouden parantaminen",
                "Vikakoodien poisto tarvittaessa",
                "Koeajo ja testaus",
                "Kirjallinen dokumentaatio",
                "Takuu ohjelmointityölle",
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
              Kiinnostaako ohjelmointi?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ota yhteyttä ja kerro ajoneuvosi tiedot. Annamme tarkan tarjouksen sinulle.
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
